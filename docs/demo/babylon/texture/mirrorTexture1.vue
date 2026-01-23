<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="mirrorTexture1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import 'babylonjs-loaders'
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  Color3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  MirrorTexture,
  Plane
} from 'babylonjs'

let sceneResources: any

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
  const ele = document.getElementById("mirrorTexture1") as any

  ele.addEventListener('wheel', function(event: any) {
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

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 600, -600))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene)
    return light
  }

  const createMirrorTexture = () => {
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 50 }, scene)
    sphere.position = new Vector3(360, 40, -120)
    const sMat = new StandardMaterial('sMat', scene)
    sMat.diffuseColor = new Color3(0.0, 0.9, 0.7)
    sphere.material = sMat

    const box = MeshBuilder.CreateBox('box', {
      size: 20,
      faceColors: [
        new Color4(1, 0, 0, 1), new Color4(0, 1, 0, 1),
        new Color4(0, 0, 1, 1), new Color4(1, 1, 0, 1),
        new Color4(1, 0, 1, 1), new Color4(0, 1, 1, 1)
      ]
    }, scene)
    box.position.y = 30

    const ground = MeshBuilder.CreateGround('ground', { width: 1000, height: 1000 }, scene)
    ground.position.y = 0 // 正好落在 y=0 平面

    const mirror: any = new MirrorTexture('mirror', 1024, scene, true)
    mirror.mirrorPlane = new Plane(0, -1, 0, 0) // 地面 y=0，法线朝下
    mirror.renderList.push(sphere) // 只反射小球
    mirror.renderList.push(box) // 只反射小球

    const mat = new StandardMaterial('groundMat', scene)
    mat.diffuseColor = new Color3(0.1, 0.1, 0.1)
    mat.specularColor = new Color3(1, 1, 1)
    mat.reflectionTexture = mirror // ← 关键
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
  createMirrorTexture()
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