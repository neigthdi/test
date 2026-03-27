<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="offscreenCanvas" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

const isRunning = ref(false)

const onRunning = async () => {
  const canvas: any = document.getElementById('offscreenCanvas')

  const wrapDomStyle = getComputedStyle(canvas)
  const width = parseInt(wrapDomStyle.width, 10)
  const height = parseInt(wrapDomStyle.height, 10)

  // 需要设置canvas的width和height
  canvas.width = width
  canvas.height = height


  const workerCode = `
    async function init(canvas) {
      // 拿到 GPU 适配器（物理显卡），再从适配器创建逻辑设备
      // 逻辑设备是后续所有 WebGPU 操作的入口
      const adapter = await navigator.gpu.requestAdapter();
      const device = await adapter.requestDevice();

      // 从 OffscreenCanvas 上拿 webgpu context，和 canvas 2d 拿法一样
      const context = canvas.getContext('webgpu');

      // 获取当前显示器/浏览器偏好的纹理格式，通常是 bgra8unorm 或 rgba8unorm
      // 写死格式有时候会出问题，所以这里让浏览器自己决定
      const format = navigator.gpu.getPreferredCanvasFormat();

      // 把 context 和 device 绑定，告诉它用什么格式渲染
      // alphaMode: 'premultiplied' 表示颜色值已经预乘了 alpha，blend 会更准确
      context.configure({ device, format, alphaMode: 'premultiplied' });

      // 用三角形扇的方式拼出圆形，segments 越大越圆，128 基本肉眼看不出棱角
      const segments = 128;
      const vertices = [];
      for (let i = 0; i < segments; i++) {
        // 当前三角形两条边对应的角度
        const a0 = (i / segments) * Math.PI * 2;
        const a1 = ((i + 1) / segments) * Math.PI * 2;
        // 每个三角形：圆心 + 圆上相邻两点，半径 0.7（NDC 坐标，范围 -1~1）
        vertices.push(0, 0);
        vertices.push(Math.cos(a0) * 0.7, Math.sin(a0) * 0.7);
        vertices.push(Math.cos(a1) * 0.7, Math.sin(a1) * 0.7);
      }

      // 把顶点数据上传到 GPU 显存
      // Float32Array 每个元素 4 字节，所以 size = length * 4
      // COPY_DST 是因为要用 writeBuffer 写入数据
      const vertexBuffer = device.createBuffer({
        size: vertices.length * 4,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
      });
      device.queue.writeBuffer(vertexBuffer, 0, new Float32Array(vertices));

      // uniform 只存 canvas 宽高两个 float，所以 size = 8 字节（2 * 4）
      // fragment shader 里要用宽高来做坐标归一化，所以得传进去
      const uniformBuffer = device.createBuffer({
        size: 8,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });
      device.queue.writeBuffer(uniformBuffer, 0, new Float32Array([canvas.width, canvas.height]));

      const shader = device.createShaderModule({ code: \`
        // uniform 结构体，存分辨率，对应 JS 那边传进来的宽高
        struct Uniforms {
          resolution: vec2f,
        }
        // group(0) binding(0) 要和 bindGroupLayout 里的声明对得上
        @group(0) @binding(0) var<uniform> uniforms: Uniforms;

        // 顶点着色器，直接把 NDC 坐标透传，不做任何变换
        @vertex
        fn vs(@location(0) pos: vec2f) -> @builtin(position) vec4f {
          return vec4f(pos, 0.0, 1.0);
        }

        @fragment
        fn fs(@builtin(position) fragCoord: vec4f) -> @location(0) vec4f {
          // fragCoord.xy 是像素坐标（左上角是 0,0），先除以分辨率归一化到 0~1，再 *2-1 映射到 -1~1
          var uv = (fragCoord.xy / uniforms.resolution) * 2.0 - 1.0;
          // canvas 不是正方形时，x 方向会被拉伸，乘以宽高比把它掰回来
          uv.x *= uniforms.resolution.x / uniforms.resolution.y;
          // 到圆心的距离，用来判断当前像素在圆的哪个位置
          let dist = length(uv);
          // smoothstep 做边缘抗锯齿，在 0.68~0.70 这一小段距离内从 1 渐变到 0
          let alpha = 1.0 - smoothstep(0.68, 0.70, dist);
          // 从蓝色渐变到紫色，dist 越大越偏紫
          let color = mix(
            vec3f(0.2, 0.5, 1.0),
            vec3f(0.8, 0.3, 1.0),
            dist / 0.70
          );
          // 预乘 alpha 输出，配合 configure 里的 premultiplied 和 blend 设置
          return vec4f(color * alpha, alpha);
        }
      \` });

      // bindGroupLayout 描述 shader 里 uniform 的结构
      // 这里只有一个 uniform buffer，绑在 binding=0，只有 fragment 阶段用得到
      const bindGroupLayout = device.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: GPUShaderStage.FRAGMENT,
          buffer: { type: 'uniform' },
        }],
      });

      // bindGroup 是真正把 uniformBuffer 和 binding=0 关联起来的地方
      // layout 和 entries 的 binding 必须对应
      const bindGroup = device.createBindGroup({
        layout: bindGroupLayout,
        entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
      });

      const pipeline = device.createRenderPipeline({
        // 用自定义的 layout 替代 'auto'，因为我们手动创建了 bindGroupLayout
        layout: device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] }),
        vertex: {
          module: shader,
          entryPoint: 'vs',
          buffers: [{
            arrayStride: 8,                  // 每个顶点 2 个 float，8 字节
            attributes: [{ shaderLocation: 0, offset: 0, format: 'float32x2' }],
          }],
        },
        fragment: {
          module: shader,
          entryPoint: 'fs',
          targets: [{
            format,
            // 标准 alpha 混合，让圆形边缘能和背景正确叠加
            blend: {
              color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha' },
              alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha' },
            },
          }],
        },
        primitive: { topology: 'triangle-list' },
      });

      function frame() {
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginRenderPass({
          colorAttachments: [{
            view: context.getCurrentTexture().createView(),
            clearValue: { r: 0.1, g: 0.1, b: 0.18, a: 1 },  // 深蓝色背景
            loadOp: 'clear',    // 每帧开始先清屏
            storeOp: 'store',   // 渲染结果写回纹理
          }],
        });
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, bindGroup);       // 绑定 uniform（分辨率）
        pass.setVertexBuffer(0, vertexBuffer); // 绑定顶点数据
        pass.draw(segments * 3);               // 128 个三角形，每个 3 个顶点
        pass.end();
        device.queue.submit([encoder.finish()]);
        requestAnimationFrame(frame);
      }
      frame();
    }

    // Worker 收到主线程传来的 OffscreenCanvas 后启动渲染
    self.onmessage = ({ data }) => init(data.canvas);
  `

  const blob = new Blob([workerCode], { type: 'application/javascript' })
  const worker = new Worker(URL.createObjectURL(blob))

  const offscreen = canvas.transferControlToOffscreen()
  worker.postMessage({ canvas: offscreen }, [offscreen])
}

const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    onRunning()
  } else {
    isRunning.value = false
    destroy()
  }
}

const destroy = () => {
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>