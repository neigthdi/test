<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="spriteTree" class="stage"></canvas>
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
  SpriteManager,
  Color3,
  HemisphericLight,
  MeshBuilder,
  Sprite,
  StandardMaterial,
  CubeTexture,
  Texture,
  ImportMeshAsync
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
  const ele = document.getElementById("spriteTree") as any

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
  camera.panningSensibility = 200
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(20, 20, 20))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
  }

  const createTree = () => {
    const spriteManagerTree = new SpriteManager(
      'trees',
      '/images/palm.png',
      2000,
      { width: 512, height: 1024 },
      scene
    )

    for (let i = 0; i < 500; i++) {
      const tree = new Sprite('tree' + i, spriteManagerTree)
      tree.position.x = Math.random() * -30
      tree.position.z = Math.random() * 20 + 8
      tree.position.y = 0.5
    }

    for (let i = 500; i < 1000; i++) {
      const tree = new Sprite('tree' + i, spriteManagerTree)
      tree.position.x = Math.random() * 25 + 7
      tree.position.z = Math.random() * -35 + 8
      tree.position.y = 0.5
    }
  }

  const createSkyBox = () => {
    const skyBox = MeshBuilder.CreateBox('skyBox', { size: 150 }, scene)
    const skyBoxMaterial = new StandardMaterial('skyBox', scene)
    skyBoxMaterial.backFaceCulling = false
    skyBoxMaterial.reflectionTexture = new CubeTexture('/images/skybox', scene)
    skyBoxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
    skyBoxMaterial.diffuseColor = new Color3(0, 0, 0)
    skyBoxMaterial.specularColor = new Color3(0, 0, 0)
    skyBox.material = skyBoxMaterial
  }

  const createVillage = async () => {
    await ImportMeshAsync('/scenes/valleyvillage.glb', scene)
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
  createTree()
  createSkyBox()
  createVillage()
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
