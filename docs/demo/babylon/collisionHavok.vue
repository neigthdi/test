<template>
  <div>
    <div>fps: {{ fps }}</div>
    <canvas id="collisionHavok" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'

import { pkg } from './index.js'

const {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  Color3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  HavokPlugin,
  PhysicsAggregate
} = pkg


const fps = ref(0)

const initScene = async () => {

  const ele = document.getElementById("collisionHavok") as HTMLCanvasElement

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

  const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(ele, true)

  const havokInstance = await (window as any).HavokPhysics()
  const havokPlugin = new HavokPlugin(true, havokInstance)
  scene.enablePhysics(new Vector3(0, -9.8, 0), havokPlugin)

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(0, 1, 0), scene)
    light.intensity = 0.7
    return light
  }

  const createGround = () => {
    const mat = new StandardMaterial('ground', scene)
    const wood = new Texture('/images/wood.jpg', scene)
    mat.diffuseTexture = wood
    mat.specularColor = Color3.Black()

    const ground = MeshBuilder.CreateGround('ground', { width: 10, height: 10	}, scene)
    ground.material = mat
    new PhysicsAggregate(ground, BABYLON.PhysicsShapeType.BOX, {
      mass: 0
    }, scene)
  }

  const createSphere = () => {
    const sphere = MeshBuilder.CreateSphere('s', { diameter: 2, segments: 32 }, scene)
    sphere.position.y = 4
    new PhysicsAggregate(sphere, BABYLON.PhysicsShapeType.SPHERE, {
      mass: 100,
      restitution: 0.75
    }, scene)
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
  createSphere()
  runAnimate()

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
