<template>
  <div>
    <div>fps: {{ fps }}</div>
    <canvas id="collisionParticle" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue'
import 'babylonjs-loaders'

import { pkg } from './index.js'
const {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color3,
  // Color4,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Texture,
  Mesh,
  SceneLoader,
  ParticleSystem
} = pkg

const fps = ref(0)


const initScene = async() => {
  let switched = false
  let particle: any = null

  const ele = document.getElementById("collisionParticle") as HTMLCanvasElement

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
  camera.wheelPrecision = 30
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(20, 20, 20))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
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
  runAnimate()
}

onMounted(async() => {
  await nextTick()
  initScene()
})
</script>
