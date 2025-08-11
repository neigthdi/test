<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="setTextureToGround1" class="stage"></canvas>
  </div>
</template>
  
  <script lang="ts" setup>
  import { onMounted, ref, nextTick, onUnmounted } from 'vue'
  import {
    Scene,
    ArcRotateCamera,
    Vector3,
    Color4,
    HemisphericLight,
    MeshBuilder,
    StandardMaterial,
    WebGPUEngine,
    Texture,
    RawTexture,
    ComputeShader,
  } from 'babylonjs'
  import {
    AdvancedDynamicTexture,
    StackPanel,
    Control,
    TextBlock,
  } from 'babylonjs-gui'
  
  let sceneResources, adt
  
  const fps = ref(0)
  const isRunning = ref(false)
  
  const onTrigger = async () => {
    if (!isRunning.value) {
      isRunning.value = true
      await nextTick()
      sceneResources = await initScene()
    } else {
      isRunning.value = false
      destroy()
    }
  }
  
  
  const initScene = async () => {
    const ele = document.getElementById("setTextureToGround1") as any
  
    ele.addEventListener('wheel', function(event) {
      // 根据需要处理滚动
      // 例如，可以修改相机的半径或角度
      event.preventDefault() // 阻止默认滚动行为
    })
  
    const engine: any = new WebGPUEngine(ele)
    await engine.initAsync()
  
    const scene = new Scene(engine)
    scene.useRightHandedSystem = false
  
    const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
    camera.upperBetaLimit = Math.PI / 2.2
    camera.wheelPrecision = 1
    camera.panningSensibility = 10
    camera.attachControl(ele, true)
    camera.setPosition(new Vector3(0, 160, -160))
  
    const createLight = () => {
      const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
      return light
    }
  
    const createAxis = () => {
      const axisX = MeshBuilder.CreateLines(
        'axisX', {
          colors: [new Color4(1, 0, 0, 1), new Color4(1, 0, 0, 1)],
          points: [new Vector3(0, 0, 0), new Vector3(80, 0, 0)]
        },
        scene
      )
  
      const axisY = MeshBuilder.CreateLines(
        'axisY', {
          colors: [new Color4(0, 1, 0, 1),  new Color4(0, 1, 0, 1)  ],
          points: [new Vector3(0, 0, 0), new Vector3(0, 80, 0) ]
        },
        scene
      )
  
      const axisZ = MeshBuilder.CreateLines(
        'axisZ', {
          colors: [new Color4(0, 0, 1, 1), new Color4(0, 0, 1, 1)],
          points: [new Vector3(0, 0, 0), new Vector3(0, 0, 80)]
        },
        scene
      )
  
      return [axisX, axisY, axisZ]
    }
  
    const createGui = async () => {
      adt = AdvancedDynamicTexture.CreateFullscreenUI('UI')
  
      const xBox = MeshBuilder.CreateBox('x', { size: 1 }, scene)
      xBox.position = new Vector3(80, 0, 0)
      const xPanel = new StackPanel()
      xPanel.width = '20px'
      xPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
      xPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
      const x = new TextBlock()
      x.text = 'X'
      x.height = '30px'
      x.color = 'red'
      adt.addControl(xPanel)
      xPanel.addControl(x)
      xPanel.linkWithMesh(xBox)
  
      const yBox = MeshBuilder.CreateBox('y', { size: 1 }, scene)
      yBox.position = new Vector3(0, 80, 0)
      const yPanel = new StackPanel()
      yPanel.width = '20px'
      yPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
      yPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
      const y = new TextBlock()
      y.text = 'Y'
      y.height = '30px'
      y.color = 'green'
      adt.addControl(yPanel)
      yPanel.addControl(y)
      yPanel.linkWithMesh(yBox)
  
      const zBox = MeshBuilder.CreateBox('z', { size: 1 }, scene)
      zBox.position = new Vector3(0, 0, 80)
      const zPanel = new StackPanel()
      zPanel.width = '20px'
      zPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
      zPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
      const z = new TextBlock()
      z.text = 'Z'
      z.height = '30px'
      z.color = 'blue'
      adt.addControl(zPanel)
      zPanel.addControl(z)
      zPanel.linkWithMesh(zBox)
    }


    // 完整流程总结
    // 创建计算着色器，定义输入/输出绑定（bindingsMapping）。
    // 绑定资源（如 setTexture + setStorageTexture）。
    // 调用 dispatchWhenReady() 异步启动计算。
    // 在 Promise 回调中处理结果（如读取像素或更新材质）。
    // 将计算结果用于后续渲染。
    const createGround = () => {
      const ground = MeshBuilder.CreateGround('Ground', { width: 128, height: 128, subdivisions: 128 }, scene)

      // 默认绑定了 sampler_src ？？？
      // 只有先 sampler 才能 src ， 至于 dest binding到其他位置无所谓？把 dest 的 binding 从0改成3，依旧可以运行
      const copyTextureComputeShader = `
        // 定义采样器 sampler_src，用于控制纹理 src 的采样方式（如过滤模式、寻址模式）。
        @group(0) @binding(0) var sampler_src: sampler;

        // 定义输入纹理 src，类型为 texture_2d<f32>（二维浮点纹理），不可直接写入，需通过 textureSampleLevel 读取。
        @group(0) @binding(1) var src: texture_2d<f32>;

        // 定义输出纹理 dest，类型为 texture_storage_2d（可写入的存储纹理），格式为 rgba8unorm（8位规范化无符号整数 RGBA），用途为 write（仅写入）
        @group(0) @binding(2) var dest: texture_storage_2d<rgba8unorm, write>;

        // 定义每个工作组（Workgroup）的线程数为 1x1x1（即每次调用只处理一个像素）。
        // @workgroup_size(1,1,1) 效率较低，建议优化为更大的工作组（如 8x8x1）。
        @compute @workgroup_size(1, 1, 1)

        // @builtin(global_invocation_id)
        // 注入内置变量 global_id，表示当前线程在全局网格中的坐标（vec3<u32> 类型，对应 dispatch(width, height, depth) 的参数）。
        fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {

          // textureDimensions(src, 0) 返回纹理 src 的第 0 级细节（Mipmap）的宽高（vec2<u32>）。
          // 转换为 vec2<f32> 以便后续除法运算。
          let dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));

          // global_id.xy / dims：将线程坐标归一化为 [0, 1] 范围内的纹理坐标。
          // textureSampleLevel：使用采样器 sampler_src 读取 src 的像素颜色，0.0 表示使用最高细节级别（无 Mipmap）。
          // 从纹理中采样一个颜色值，支持 指定 mipmap 层级（通过 level 参数）。
          // textureSampleLevel(
          //     src,                      // 输入纹理（类型为 texture_2d<f32> 或类似）
          //     sampler_src,               // 采样器
          //     uv,                       // 归一化的 UV 坐标（范围 [0, 1]）
          //     0.0                       // 指定采样的 mipmap 层级（0 表示最详细的层级）。
          // );
          let pix: vec4<f32> = textureSampleLevel(src, sampler_src, vec2<f32>(global_id.xy) / dims, 0.0);

          // 将采样得到的颜色 pix 写入 dest 的对应坐标（需转换为 vec2<i32>）。
          // textureStore(
          //     texture: texture_storage_2d<T, access>,  // 存储纹理（可写）
          //     coords: vec2<i32>,                       // 写入坐标（整数类型）
          //     value: vec4<T>                           // 要写入的颜色值
          // );
          textureStore(dest, vec2<i32>(global_id.xy), pix);
        }
      `

      const shader = new ComputeShader(
        'myCompute', 
        engine, 
        { computeSource: copyTextureComputeShader }, 
        { bindingsMapping: { 
            'src': { group: 0, binding: 1 },
            'dest': { group: 0, binding: 2 }
          }
        }
      )

      const src = new Texture('/images/grass.png', scene)
      const dest = RawTexture.CreateRGBAStorageTexture(null, 512, 512, scene, false, false)
      
      shader.setTexture('src', src)
      shader.setStorageTexture('dest', dest)

      // dispatchWhenReady()
      // 这是 Compute Shader 的调度方法，用于启动计算任务。
      // 参数 (dest.getSize().width, dest.getSize().height, 1) 表示：
      // 工作组网格维度：计算着色器将在 width × height × 1 的二维网格上执行（每个像素对应一个线程）。
      // 实际线程总数 = width × height × 1（因为 @workgroup_size(1,1,1) 定义了每个工作组只有 1 个线程）。
      // 返回一个 Promise，当计算着色器完成执行后解析。
      // dest.readPixels()
      // 在计算着色器完成后，从存储纹理 dest 中读取像素数据。
      // 返回一个 Promise，解析为 Uint8Array 或 Float32Array（取决于纹理格式），包含 RGBA 像素值。
      // 调试或验证计算结果。
      // 将数据传递给其他处理流程（如 CPU 端分析或二次处理）
      shader.dispatchWhenReady(dest.getSize().width, dest.getSize().height, 1).then(() => {
        // dest?.readPixels()?.then((data) => {
        //   //console.log(data)
        // })
      })

      const mat = new StandardMaterial('mat', scene)
      mat.diffuseTexture = dest
      ground.material = mat
    }
  
    const runAnimate = () => {
      engine.runRenderLoop(function() {
        if (scene && scene.activeCamera) {
          scene.render()
  
          fps.value = engine.getFps().toFixed(2)
        }
      })
    }
  
    createLight()
    createAxis()
    createGui()
    createGround()
    runAnimate()
  
    return {
      scene,
      engine, 
    }
  }
  
  const destroy = () => {
    if (sceneResources) {
      sceneResources.engine.stopRenderLoop() 
      sceneResources.engine.dispose()
      sceneResources.scene.dispose()
      sceneResources = null
    }
    if (adt) {
      adt.dispose()
      adt = null
    }
  }
  
  onMounted(async() => {
    await nextTick()
  })
  
  onUnmounted(() => {
    destroy()
  })
  </script>
  