<template>
  <div>
    <div>未完成，平面+噪音形成高低，法线+灯光模拟阳光照射，蓝色深浅，镜面倒影未想好</div>
    <div>fps: {{ fps }}</div>
    <canvas id="shaderRiver" class="stage"></canvas>
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

const initScene = async () => {
  const ele = document.getElementById("shaderRiver") as any

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
  camera.setPosition(new Vector3(0, 0, 25))

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

    return [axisX, axisY, axisZ]
  }

  const createGround = () => {
    const ground = MeshBuilder.CreateGroundFromHeightMap(
      "gdhm", 
      "/images/heightMap.png", 
      { width: 15, height: 15, subdivisions: 500, maxHeight: 5 }
      )
    return ground
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
  runAnimate()

  scene.registerBeforeRender(function() {


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
