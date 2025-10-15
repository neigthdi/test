<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="refractionTexture" class="stage"></canvas>
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
  ReflectionProbe,
  RenderTargetTexture,
  Color3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
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
  const ele = document.getElementById("refractionTexture") as any

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

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 20, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
  }

  const createRefractionTexture = () => {
    const redMaterial = new StandardMaterial('red', scene)
    redMaterial.diffuseColor = new Color3(1, -1, 0)

    const sphere = MeshBuilder.CreateSphere('Sphere', {}, scene)
    sphere.position = new Vector3(-1, -2, 0)
    sphere.material = redMaterial

    const greenMaterial = new StandardMaterial('green', scene)
    greenMaterial.diffuseColor = new Color3(0, 1, 0)

    const box = MeshBuilder.CreateBox('Box', {}, scene)
    box.position = new Vector3(2, -4, 0)
    box.material = greenMaterial

    const glass = MeshBuilder.CreatePlane('glass', { width: 15, height: 15 }, scene)
    glass.position = new Vector3(0, 0, 0)
    glass.rotation = new Vector3(Math.PI / 2, 0, 0)

    const probe: any = new ReflectionProbe('main', 512, scene)
    probe.renderList.push(sphere)
    probe.renderList.push(box)

    const renderTargetTexture: any = new RenderTargetTexture('th', 1024, scene)
    renderTargetTexture.renderList.push(box)
    renderTargetTexture.renderList.push(sphere)


    // Babylon 的 StandardMaterial 在启用 indexOfRefraction 后，会：
    // 		用 refractionTexture 当作“背景颜色”
    // 		用 indexOfRefraction 计算一张固定 UV 偏移图（即环境贴图坐标）
    // 		把 refractionTexture 采样结果填进去
    const mirrorMaterial = new StandardMaterial('mirror', scene)
    mirrorMaterial.refractionTexture = renderTargetTexture
    mirrorMaterial.indexOfRefraction = 0.2
    mirrorMaterial.diffuseColor = Color3.White()

    glass.material = mirrorMaterial

    glass.material.alpha = 0.8
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
  createRefractionTexture()
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