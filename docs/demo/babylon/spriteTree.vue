<template>
  <div>
    <div>fps: {{ fps }}</div>
    <canvas id="spriteTree" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue'
import 'babylonjs-loaders'
// import {
//   Engine,
//   Scene,
//   ArcRotateCamera,
//   Vector3,
//   SpriteManager,
//   Color3,
//   HemisphericLight,
//   MeshBuilder,
//   Sprite,
//   StandardMaterial,
//   CubeTexture,
//   Texture,
//   SceneLoader
// } from 'babylonjs'

import pkg from 'babylonjs'
const {
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
  SceneLoader
} = pkg

const fps = ref(0)

const initScene = async() => {
  const ele = document.getElementById("spriteTree") as HTMLCanvasElement

  ele.addEventListener('wheel', function(event) {
    // 根据需要处理滚动
    // 例如，可以修改相机的半径或角度
    event.preventDefault(); // 阻止默认滚动行为
  });

  const engine: any = new Engine(ele, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false
  })

  const scene = new Scene(engine)
  scene.useRightHandedSystem = true

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(20, 20, 20))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
  }

  const createTree = () => {
    const spriteManagerTree = new SpriteManager(
      'trees',
      './assets/images/palm.png',
      2000,
      { width: 512, height: 1024 },
      scene
    )

    for(let i = 0; i < 500; i++) {
      const tree = new Sprite('tree' + i, spriteManagerTree)
      tree.position.x = Math.random() * -30
      tree.position.z = Math.random() * 20 + 8
      tree.position.y = 0.5
    }

    for(let i = 500; i < 1000; i++) {
      const tree = new Sprite('tree' + i, spriteManagerTree)
      tree.position.x = Math.random() * 25 + 7
      tree.position.z = Math.random() * -35 + 8
      tree.position.y = 0.5
    }
  }

  const createSkyBox = () => {
    const skyBox = MeshBuilder.CreateBox(
      'skyBox',
      { size: 150 },
      scene
    )
    const skyBoxMaterial = new StandardMaterial(
      'skyBox',
      scene
    )
    skyBoxMaterial.backFaceCulling = false
    skyBoxMaterial.reflectionTexture = new CubeTexture(
      './assets/images/skybox',
      scene
    )
    skyBoxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
    skyBoxMaterial.diffuseColor = new Color3(0, 0, 0)
    skyBoxMaterial.specularColor = new Color3(0, 0, 0)
    skyBox.material = skyBoxMaterial
  }

  const createVillage = () => {
    SceneLoader.ImportMeshAsync(
      '',
      './assets/scenes/',
      'valleyvillage.glb'
    )
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
}

onMounted(async() => {
  await nextTick()
  initScene()
})
</script>
