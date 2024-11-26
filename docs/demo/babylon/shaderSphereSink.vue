<template>
  <div>
    <div>fps: {{ fps }}</div>
    <canvas id="shaderSphereSink" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'

import { pkg, pkgMat } from './index.js'
const {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  HemisphericLight,
  MeshBuilder,
  Texture,
  Effect,
  ShaderMaterial,
} = pkg
const { CustomMaterial } = pkgMat

const fps = ref(0)

let uDown = 0.0
const uSphereHeight = 10.0
const uStopMin = 7.0

const speed = 0.02
const limit = 10.0

const initScene = async () => {
  const ele = document.getElementById("shaderSphereSink") as any

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
  camera.setPosition(new Vector3(0, 0, 120))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(0, 1, 0), scene)
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
  }

  const createGround = () => {
    const ground = MeshBuilder.CreateGround(
      'ground',
      {
        width: 50,
        height: 50
      },
      scene
    )
    const grass = new CustomMaterial('grass', scene)
    grass.diffuseTexture = new Texture('/images/grass.png', scene)
    ground.material = grass
  }

  const createSphereShader = () => {
    Effect.ShadersStore['sphereShaderVertexShader'] = `
      precision highp float;
      
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 worldViewProjection;

      uniform float uDown;
      uniform float uSphereCenterHeight;
      uniform float uStopMin;

      varying float vOpacity;
      varying vec3 vColor;

      // position.y的范围是-5.0 ~ 5.0，因为uSphereHeight是10.0
      // position.x、position.z同理
      // 假如position.y - 1.0，则会在y轴方向下降1个单位，具体的是相关矩阵相乘的结果

      void main(void) {
        vOpacity = 1.0;
        vColor = vec3(1.0, 0.0, 0.0);
        
        float groundY = -uSphereCenterHeight;
        
        float y = position.y;
        float x = position.x;
        float z = position.z;

        // 方案一：修改y值
        // 模拟--停止下降，继续水平移动
        // 缺少扩散时候，h由低变高，并停止升高
        if(uDown >= uStopMin) {
          y = position.y - uStopMin;
        } else {
          y = position.y - uDown;
        }
        // 模拟--隐藏，通过对比y值，把比地面还低的部分隐藏
        if(y <= groundY) {
          y = groundY;
          // 粗略模拟向外扩散
          x = x * 1.1;
          z = z * 1.1;
        }

        // 方案二：修改透明度
        // 判断y值，传递vOpacity到片元着色器
        

        gl_Position = worldViewProjection * vec4(vec3(x, y, z), 1.0);
      }`
    Effect.ShadersStore['sphereShaderFragmentShader'] = `
      precision highp float;
      
      varying float vOpacity;
      varying vec3 vColor;

      void main(void) {
        gl_FragColor = vec4(vColor, vOpacity);
      }`

    const sphereShader = new ShaderMaterial(
      'sphereShader',
      scene, {
        vertex: 'sphereShader',
        fragment: 'sphereShader',
      }, {
        attributes: ['position', 'uv'],
        uniforms: [
          'worldViewProjection',
          'uDown',
          'uSphereCenterHeight',
        ],
        needAlphaBlending: true,
      },
    )
    sphereShader.wireframe = true
    
    return sphereShader
  }

  const createSphere1 = (sphereShader) => {
    const sphere1: any = MeshBuilder.CreateSphere('sphere1', { diameter: uSphereHeight, segments: 256 }, scene)
    sphere1.material = sphereShader
    sphere1.material.alpha = 0
    sphere1.position.y = uSphereHeight / 2
    sphereShader.setFloat('uDown', uDown)
    sphereShader.setFloat('uSphereCenterHeight', uSphereHeight / 2)
    sphereShader.setFloat('uStopMin', uStopMin)
  }

  const createBox2 = () => {
    const box2 = MeshBuilder.CreateBox('box2', { 	size: 10 }, scene)
    box2.position.y = 5
    box2.position.x = 10
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
  createGround()
  const sphereShader = createSphereShader()
  const sphere1 = createSphere1(sphereShader)
  createBox2()
  runAnimate()

  scene.registerBeforeRender(function() {
    // sphere1.position.x = sphere1.position.x + speed
    // if (sphere1.position.x >= limit) sphere1.position.x = 0


    sphereShader.setFloat('uDown', uDown)
    uDown += speed
    if (uDown >= limit) uDown = 0.0
  })

  return {
    scene,
    engine, 
  }
}


let sceneResources

onMounted(async() => {
  await nextTick()
  sceneResources = await initScene()
})

onUnmounted(() => {
  if(sceneResources) {
    sceneResources.engine.stopRenderLoop() 
    sceneResources.engine.dispose()
    sceneResources.scene.dispose()
    sceneResources = null
  }
})
</script>
