<template>
  <div>
    <div><a href="https://zhuanlan.zhihu.com/p/41455378">傅里叶系列(只看第一和第三)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/1913515900235153904">傅里叶系列(作为上面的第二节，j是复数i)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/64414956">fft海面模拟(一)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/64726720">fft海面模拟(二)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/65156063">fft海面模拟(三)</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/208511211">详尽的快速傅里叶变换推导</a></div>
    <div><a href="https://zhuanlan.zhihu.com/p/666833171">FFT算法——蝴蝶变换</a></div>
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
  CustomMaterial 
} from 'babylonjs-materials'
import {
  Engine,
  Scene,
  Texture,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  Color4,
  ArcRotateCamera,
  Vector3,
  Color3,
  StandardMaterial
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources
let uTime = 0.0

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
  camera.setPosition(new Vector3(160, 160, -160))

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

  const createGround = () => {
    const ground = MeshBuilder.CreateGroundFromHeightMap(
      "heightMap", 
      "/images/heightMap.png", 
      { width: 150, height: 150, subdivisions: 500, maxHeight: 80 }
    )
    const mat = new CustomMaterial('grass', scene)
    mat.diffuseTexture = new Texture('/images/ground.jpg', scene)
    ground.material = mat
    return ground
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

  const createSphereShader = () => {
    Effect.ShadersStore['customShaderVertexShader'] = `
      precision highp float;


      struct GerstnerResult {
        vec3 position;
        vec3 normal;
      };


      attribute vec3 position;
      attribute vec2 uv;


      uniform mat4 world; // 世界矩阵
      uniform vec3 cameraPosition; // 相机位置
      uniform mat4 worldViewProjection; // 投影


      uniform float uTime;
      uniform vec3 uLightDirection; // 光照参数
      uniform vec3 uLightColor; // 光照参数


      varying vec3 vColor;


      void main() {
        float x = position.x;
        float y = position.y;
        float z = position.z;


        // 海水基础颜色
        vec3 deepWaterColor = vec3(0.0, 0.549, 0.996); // 海水的深蓝色
        vec3 shallowWaterColor = vec3(0.3, 0.7, 1.0); // 天空的浅天蓝色


        // -------------------------------------------------------sin，y通过sin在上下周期运动，根本没有发生水平移动-------------------------------------------------------
        vec3 color = vec3(0.0);
        vColor = color;
        float Amplitude = 0.2; // 波幅
        float waveLength = 10.0; // 波长
        float frequency = 2.0 * 3.14 / waveLength; // 频率
        float speed = 1.0;
        y = Amplitude * sin(frequency * (x - speed * uTime));
        gl_Position = worldViewProjection * vec4(vec3(x, y, z), 1.0);
        // -------------------------------------------------------sin，y通过sin在上下周期运动，根本没有发生水平移动-------------------------------------------------------
      }
    `

    Effect.ShadersStore['customShaderFragmentShader'] = `
      precision highp float;

      varying vec3 vColor;
      
      void main(void) {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `

    const customShader = new ShaderMaterial(
      'customShader',
      scene, {
        vertex: 'customShader',
        fragment: 'customShader',
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'cameraPosition', 'world', 'uLightDirection', 'uLightColor', 'uTime'],
        needAlphaBlending: true,
      },
    )


    customShader.setFloat('uDown', uTime)
    
    return customShader
  }

  const createPlane = () => {
    const plane = MeshBuilder.CreateGround(
      'plane', 
      { 
        width: 150, 
        height: 150, 
        subdivisions: 600 
      },
      scene
    )
    const material = createSphereShader()
   
    plane.material = material
    return material
  }


  const runAnimate = () => {
    engine.runRenderLoop(function() {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }

  const light = createLight()
  createAxis()
  createGui()
  createGround()
  createSphere()
  const material = createPlane()
  material.setVector3('lightDirection', light.direction)
  material.setColor3('lightColor', light.diffuse)
  runAnimate()

  scene.registerBeforeRender(function() {
    material.setFloat('uTime', uTime)
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
})

onUnmounted(() => {
  destroy()
})
</script>