<template>
  <div id="cameraMore">
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <div v-if="isRunning">
      <canvas id="cameraMore0"></canvas>
      <canvas id="cameraMore1"></canvas>
      <canvas id="cameraMore2"></canvas>
      <canvas id="cameraMore3"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  PBRMetallicRoughnessMaterial
} from 'babylonjs'

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
  const ele =  document.createElement('canvas') as HTMLCanvasElement

  const div = document.getElementById('cameraMore') as HTMLElement

  div.addEventListener('wheel', function(event) {
    // 根据需要处理滚动
    // 例如，可以修改相机的半径或角度
    event.preventDefault() // 阻止默认滚动行为
  })

  const engine: any = new Engine(ele, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false
  })
  engine.inputElement = document.getElementById('cameraMore0')

  const scene = new Scene(engine)
  scene.useRightHandedSystem = true

  const camera0 = new ArcRotateCamera('Camera0', 0, 0.8, 5, new Vector3(0, 0, 0), scene)
  camera0.setTarget(new Vector3(0, 0, 0))
  camera0.lowerRadiusLimit = 4
  camera0.upperRadiusLimit = 20
  camera0.attachControl(document.getElementById('cameraMore0'), true)

  const camera1 = new ArcRotateCamera('Camera1', 0, 0.8, 10, new Vector3(0, 0, 0), scene)
  const camera2 = new ArcRotateCamera('Camera2', 0, 0.8, 10, new Vector3(0, 0, 0), scene)
  const camera3 = new ArcRotateCamera('Camera3', 0, 0.8, 10, new Vector3(0, 0, 0), scene)


  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene)
    return light
  }

  const createBox = () => {
    const box = MeshBuilder.CreateBox('Box', {
      size: 2
    }, scene)
    const mat = new PBRMetallicRoughnessMaterial('mat', scene)
    mat.metallic = 1
    mat.roughness = 0.5
    box.material = mat
  }

  scene.createDefaultEnvironment()
  engine.registerView(document.getElementById('cameraMore0'))
  engine.registerView(document.getElementById('cameraMore1'), camera1)
  engine.registerView(document.getElementById('cameraMore2'), camera2)
  engine.registerView(document.getElementById('cameraMore3'), camera3)

  let alpha = 0
  scene.registerBeforeRender(() => {
    camera1.radius = 10 + Math.cos(alpha) * 5
    camera2.alpha += 0.01
    camera3.beta = Math.cos(alpha)

    alpha += 0.01
  })

  const runAnimate = () => {
    engine.runRenderLoop(function() {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }

  createLight()
  createBox()
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
