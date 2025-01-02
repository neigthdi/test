<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderWaterRipples" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import * as babylon from 'babylonjs'
import * as babylonMat from 'babylonjs-materials'

const {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Texture
} = babylon

const { CustomMaterial } = babylonMat

let sceneResources

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
  const ele = document.getElementById("shaderWaterRipples") as any

  ele.addEventListener('wheel', function(event) {
    // 根据需要处理滚动
    // 例如，可以修改相机的半径或角度
    event.preventDefault() // 阻止默认滚动行为
  })

  const engine: any = new Engine(ele, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false
  })

  const scene = new Scene(engine)
  scene.useRightHandedSystem = true

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(20, 20, 20))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(0, 1, 0), scene)
    return light
  }

  const materialShader = (mat) => {
    mat.Fragment_Definitions(`
      // 用于在图形渲染中创建一种称为“焦散”（caustic）效果的视觉效果
      // 焦散效果通常用于模拟光线通过透明介质（如水或玻璃）时的折射和反射
      // 产生复杂的光斑和条纹

      #define TAU 6.28318530718
      #define MAX_ITER 5
      #define SPEED 0.3
      #define SCALE 30.0

      vec4 caustic(vec2 uv) {
        // uv * TAU 将纹理坐标 (u, v) 扩展到 (0, 2 * PI) 的范围。这意味着纹理坐标被拉伸，每个分量都乘以 TAU
        // mod(uv * TAU, TAU) 将拉伸后的坐标映射回 (0, TAU) 的范围内。这是通过取模运算实现的，确保结果的每个分量都在 [0, TAU) 范围内
        // 并减去 150，进行平移
        vec2 p = mod(uv * TAU, TAU) - 150.0;

        // 根据全局时间变量 time 和定义的速度 SPEED 计算动画偏移量 t
        float t = time * SPEED + 23.0;

        // 初始化一个二维向量 i，初始值为 p
        vec2 i = vec2(p);
        // 初始化一个变量 c，用于累加计算
        float c = 1.0;
        // 定义一个强度变量 intens，用于控制分形的细节
        float intens = 0.005;

        // 开始一个循环，从 0 到 MAX_ITER-1
        for(int n = 0; n < MAX_ITER; n++) {

          // 每次迭代调整 t 的值，使分形的迭代逐渐减弱
          float nt = t * (1.0 - (3.5 / float(n + 1)));
          // 根据 t 更新 i 的值，创建分形的迭代
          i = p + vec2(cos(nt - i.x) + sin(nt + i.y), sin(nt - i.y) + cos(t + i.x));
          // 根据 i 的值更新 c，用于计算最终的颜色
          c += 1.0 / length(vec2(p.x / (sin(i.x + nt) / intens), p.y / (cos(i.y + nt) / intens)));
        }

        // 将 c 的值标准化，使其在 0 到 1 之间
        c /= float(MAX_ITER);

        // 对 c 应用非线性变换，增加对比度
        c = 1.17 - pow(c, 1.4);

        // 根据 c 的值计算颜色，使用 8 次幂函数增加对比度
        vec3 color = vec3(pow(abs(c), 8.0));

        // 将颜色限制在 [0, 1] 范围内
        color = clamp(color + vec3(0.0, 0.0, 0.0), 0.0, 1.0);

        // 定义对比度变量，对比度为 0 时无影响
        float contrast = 0.0;

        // 将颜色与白色混合，对比度为 0 时无影响
        color = mix(color, vec3(1.0, 1.0, 1.0), contrast);

        vec4 fColor = vec4(color, 0.0);

        return fColor;
      }
    `)

    // 用于在图形渲染的像素级别上混合颜色
    mat.Fragment_Before_Fog(`
      // 首先计算一个名为 coord 的二维向量
      // 使用 fract 函数和 vPositionW 变量。vPositionW 是一个包含顶点世界空间坐标的向量
      // fract 函数返回参数的小数部分，即 x - floor(x)，这里用于获取坐标的小数部分，创建一种“抖动”效果
      // 然后，这些小数部分被 SCALE 缩放因子除以，进一步调整坐标的范围
      vec2 coord = vec2(fract(vPositionW.x / SCALE), fract(vPositionW.z / SCALE));
      
      // 调用了之前定义的 caustic 函数，传入 vDiffuseUV 作为参数
      // vDiffuseUV 是一个包含纹理坐标的向量
      // caustic 函数返回一个 vec4 类型的颜色值
      // 然后，使用 clamp 函数将结果的颜色值限制在 0.0 到 0.5 之间
      // clamp 函数确保颜色值不会超出这个范围
      vec4 causticColor = clamp(caustic(vDiffuseUV), 0.0, 0.5);
      
      color = vec4(clamp(mix(color, causticColor, 0.5), 0.0, 1.0).rgb, 1.0);
    `)

    mat.AddUniform('time', 'float')

    const startTime: any = new Date()

    mat.onBindObservable.add(function() {
      const endTime: any = new Date()
      const timeDiff = (endTime - startTime) / 1000.0 // in s
      mat.getEffect().setFloat('time', timeDiff)
    })
  }

  const createGround = () => {
    const ground = MeshBuilder.CreateGround(
      'ground',
      {
        width: 12,
        height: 12
      },
      scene
    )
    const grass = new CustomMaterial('grass', scene)
    grass.diffuseTexture = new Texture('/images/grass.png', scene)
    ground.material = grass
    materialShader(grass)
  }

  const createSphere = () => {
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 8 }, scene)
    const grass = new CustomMaterial('grass', scene)
    grass.diffuseTexture = new Texture('/images/grass.png', scene)
    sphere.material = grass
    sphere.position.y = 5
    materialShader(grass)
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
  createGround()
  createSphere()
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
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>
