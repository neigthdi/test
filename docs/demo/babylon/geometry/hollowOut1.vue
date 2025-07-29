<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="hollowOut1" class="stage"></canvas>
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
  Color3,
  MeshBuilder,
  StandardMaterial,
  HemisphericLight,
  CSG2,
  InitializeCSG2Async,
  Texture,
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
  const ele = document.getElementById("hollowOut1") as any

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
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(5, 5, 5))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(1, 1, 0))
    light.intensity = 1
    return light
  }

  const createGround = () => {
    const groundMaterial = new StandardMaterial("groundMaterial", scene)
    groundMaterial.diffuseTexture = new Texture('/images/wood.jpg')
    const ground = MeshBuilder.CreateGround(
      'gd', {
        width: 10.0,
        height: 10.0
      },
      scene
    )
    ground.material = groundMaterial
    return ground
  }

  const createBox = () => {
    const box: any = MeshBuilder.CreateBox('box', { size: 1 }, scene)
    box.position.y = 0.5
    box.material = new StandardMaterial('b1mat', scene)
    box.material.diffuseColor = new Color3(0, 1, 0)
    return box
  }

  const createHole = () => {
    const hole = MeshBuilder.CreateBox('hole', { size: 0.5 }, scene)
    hole.position.set(0, 1, 0)
    return hole
  }

  const createHollowOut = async(box, hole) => {
    await InitializeCSG2Async()
    const csgBox = CSG2.FromMesh(box)
    const csgHole = CSG2.FromMesh(hole)
    const result = csgBox.subtract(csgHole)
    const finalMesh = result.toMesh('finalMesh', scene)
    finalMesh.position.copyFrom(box.position) // 确保位置正确
    box.dispose() // 删除原始立方体
    hole.dispose() // 删除挖空形状
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
  const box = createBox()
  const hole = createHole()
  createHollowOut(box, hole)
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
