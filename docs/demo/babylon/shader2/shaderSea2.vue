<template>
  <div>
    <div><a href="https://zhuanlan.zhihu.com/p/41455378">傅里叶系列(只看第一和第三)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/1913515900235153904">傅里叶系列(作为上面的第二节，j是复数i)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/64414956">fft海面模拟(一)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/64726720">fft海面模拟(二)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/65156063">fft海面模拟(三)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/208511211">详尽的快速傅里叶变换推导</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/374489378">快速傅里叶变换--蝶形变换(直接看“举例”部分)</a></div>
    <div>使用compute shader</div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderSea2" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  Color4,
  ArcRotateCamera,
  Vector3,
  Color3,
  StandardMaterial,
  RawTexture,
  Constants,
  ProceduralTexture,
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources
let uTime = 0.2

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
  const ele = document.getElementById("shaderSea2") as any

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
  scene.useRightHandedSystem = false

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 2
  camera.panningSensibility = 100
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 560, -560))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(40, 40, 40), scene)
    light.direction = new Vector3(1.0, 0.0, 1.0)
    light.diffuse = new Color3(1.0, 0.95, 0.8)
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
    const adt = AdvancedDynamicTexture.CreateFullscreenUI('UI')

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

  const createSphere = () => {
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 10 }, scene)
    const sphereMat = new StandardMaterial('sphere')
    sphereMat.diffuseColor = new Color3(1.0, 0.6, 0.2)
    sphere.material = sphereMat
    sphere.position.x = 70
    sphere.position.y = 70
    sphere.position.z = 70
  }


  const PI = 3.14159265358979323846
  const TWO_PI = 2 * PI
  const G = 9.8
  const N = 512

  // 复数乘法
  function complexMultiply(a, b) {
    return {
      x: a.x * b.x - a.y * b.y,  // 实部
      y: a.x * b.y + a.y * b.x   // 虚部
    }
  }
 
  // 色散关系函数
  function dispersion(k) {
    return Math.sqrt(G * vectorLength(k))
  }
 
  // 计算向量长度（模）
  function vectorLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y)
  }
 
  // 归一化向量
  function normalize(v) {
    const len = vectorLength(v)
    return { x: v.x / len, y: v.y / len }
  }
 
  // 点积计算
  function dot(a, b) {
    return a.x * b.x + a.y * b.y
  }
 
  // 快速随机值生成函数
  function randValueFast(uv, seed) {
    return fract(Math.sin(dot(uv, {x: 12.9898, y: 78.233}) + seed) * 43758.5453)
  }
 
  // fract函数
  function fract(x) {
    return x - Math.floor(x)
  }
 
  // 计算两个相互独立的高斯随机数
  function gauss(uv) {
    let u1 = randValueFast(uv, 1753.0)
    let u2 = randValueFast(uv, 3571.0)
    
    if (u1 < 1e-6) {
      u1 = 1e-6
    }
 
    const g1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(TWO_PI * u2)
    const g2 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(TWO_PI * u2)
 
    return { x: g1, y: g2 }
  }
 
  // 菲利普频谱计算，输入波数 K
  function phillips(K) {
    const W = { x: 1.0, y: -1.0 } // 风的方向向量
    const V = 10.0 // 风速
    const A = 10.0 // 振幅参数
    
    const L = V * V / G // 最大波长
    const L2 = L * L
    
    const kLen = Math.max(0.0001, vectorLength(K))
    const kLen2 = kLen * kLen
    const kLen4 = kLen2 * kLen2
 
    const K_norm = normalize(K)
    const W_norm = normalize(W)
    const dot_KW = dot(K_norm, W_norm)
 
    // 基础 Phillips 谱
    let phi = A * Math.exp(-1.0 / (kLen2 * L2)) / kLen4
 
    // 风向对齐项
    phi *= dot_KW * dot_KW
 
    // 仅保留与风向同方向的波
    if (dot_KW > 0.0) {
        phi *= V
    }
 
    // 衰减因子（减少长波）
    const l = 0.001 * L
    const kSqr = dot(K, K)
    phi *= Math.exp(l * l * -kSqr)
 
    return phi
  }

  function createXyzTexture (scene) {
    const xData = new Uint8Array(N * N * 4)
    const yData = new Uint8Array(N * N * 4)
    const zData = new Uint8Array(N * N * 4)
    const fftData = new Uint8Array(N * N * 4)

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const index = (x + y * N) * 4
        const gaussValue1 = gauss({x: x + 3, y: y + 5})
        const gaussValue2 = gauss({x: x + 7, y: y + 11})

        const nx = x - N / 2
        const ny = y - N / 2

        const K = {
          x: TWO_PI * nx / N,
          y: TWO_PI * ny / N,
        }

        const phillipsRes1 = Math.sqrt(phillips(K) * 0.5)
        const h0k = {
          x: gaussValue1.x * phillipsRes1,
          y: gaussValue1.y * phillipsRes1
        }

        const phillipsRes2 = Math.sqrt(phillips({x: K.x * -1, y: K.y * -1}) * 0.5)
        const h0kConj = {
          x: gaussValue2.x * phillipsRes2,
          y: gaussValue2.y * phillipsRes2 * -1
        }

        const omega = dispersion(K)
        const c = Math.cos(omega)
        const s = Math.sin(omega)
        const h1 = complexMultiply(h0k, {x: c, y: s})
        const h2 = complexMultiply(h0kConj, {x: c, y: s * -1})

        const H_Tilde = {
          x: h1.x + h2.x,
          y: h1.y + h2.y
        }

        let kLen = vectorLength(K)
        kLen = kLen < 0.001 ? 0.001 : kLen
        const maxK = {x: K.x / kLen, y: K.y / kLen}

        const KxHTilde = complexMultiply({x: 0, y: -1 * maxK.x}, H_Tilde);
        const KzHTilde = complexMultiply({x: 0, y: -1 * maxK.y}, H_Tilde);

        yData[index] = H_Tilde.x
        yData[index + 1] = H_Tilde.y
        yData[index + 2] = 0
        yData[index + 3] = 255

        
        fftData[index] = h0k.x
        fftData[index + 1] = h0k.y
        fftData[index + 2] = h0kConj.x
        fftData[index + 3] = h0kConj.y


        xData[index] = KxHTilde.x
        xData[index + 1] = KxHTilde.y
        xData[index + 2] = 0
        xData[index + 3] = 255


        zData[index] = KzHTilde.x
        zData[index + 1] = KzHTilde.y
        zData[index + 2] = 0
        zData[index + 3] = 255

      }
    }

    const rawTextureY = new RawTexture(
      yData,
      N,
      N,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE
    )

    const rawTextureX = new RawTexture(
      xData,
      N,
      N,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE
    )

    const rawTextureZ = new RawTexture(
      zData,
      N,
      N,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE
    )

    const rawTextureFft = new RawTexture(
      fftData,
      N,
      N,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE
    )

    return {
      rawTextureY,
      rawTextureX,
      rawTextureZ,
      rawTextureFft
    }
  }

  const createXyzPlane = ({ rawTextureX, rawTextureY, rawTextureZ }) => {
    const planeX = MeshBuilder.CreateGround('planeX', { width: N, height: N, subdivisions: N }, scene)
    planeX.position = new Vector3(-N - 10, 0, N + 10)
    const materialX = new StandardMaterial("planeMaterial", scene)
    materialX.diffuseTexture = rawTextureX
    planeX.material = materialX

    const planeY = MeshBuilder.CreateGround('planeY', { width: N, height: N, subdivisions: N }, scene)
    planeY.position = new Vector3(0, 0, N + 10)
    const materialY = new StandardMaterial("planeMaterial", scene)
    materialY.diffuseTexture = rawTextureY
    planeY.material = materialY

    const planeZ = MeshBuilder.CreateGround('planeZ', { width: N, height: N, subdivisions: N }, scene)
    planeZ.position = new Vector3(N + 10, 0, N + 10)
    const materialZ = new StandardMaterial("planeMaterial", scene)
    materialZ.diffuseTexture = rawTextureZ
    planeZ.material = materialZ
  }

  const ifftComputed = (rawTextureFft) => {
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
  createSphere()
  const { rawTextureX, rawTextureY, rawTextureZ, rawTextureFft } = createXyzTexture(scene)
  createXyzPlane({ rawTextureX, rawTextureY, rawTextureZ })
  ifftComputed(rawTextureFft)
  runAnimate()

  scene.registerBeforeRender(function() {
    uTime += 0.04
  })

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
  // isRunning.value = true
  // await nextTick()
  // sceneResources = await initScene()
})

onUnmounted(() => {
  destroy()
})
</script>