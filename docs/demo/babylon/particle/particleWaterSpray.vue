<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="particleWaterSpray" class="stage"></canvas>
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
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Texture,
  Mesh,
  ImportMeshAsync,
  ParticleSystem
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
  let switched = false
  let particle: any = null

  const ele = document.getElementById("particleWaterSpray") as any

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
  camera.setPosition(new Vector3(20, 20, 20))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
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
      '/images/skybox',
      scene
    )
    skyBoxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
    skyBoxMaterial.diffuseColor = new Color3(0, 0, 0)
    skyBoxMaterial.specularColor = new Color3(0, 0, 0)
    skyBox.material = skyBoxMaterial
  }

  const createVillage = async () => {
    await ImportMeshAsync('/scenes/valleyvillage.glb', scene)
  }

  const createParticleSystem = (lathe) => {
    const particleSystem = new ParticleSystem('system', 5000, scene)

    // 每个粒子的纹理
    particleSystem.particleTexture = new Texture('/images/star.jpg')
  
    // 粒子从何而来
    // 从喷泉顶部喷出
    particleSystem.emitter = new Vector3(lathe.position.x, 0.8, lathe.position.z)
  
    // 从
    particleSystem.minEmitBox = new Vector3(-0.01, 0, -0.01)
    // 到...
    particleSystem.maxEmitBox = new Vector3(0.01, 0, 0.01)
  
    // 所有粒子的颜色
    // particleSystem.color1 = new Color4(0.7, 0.8, 1.0, 1.0)
    // particleSystem.color2 = new Color4(0.2, 0.5, 1.0, 1.0)
  
    // 每个粒子的大小（随机...
    particleSystem.minSize = 0.01
    particleSystem.maxSize = 0.05
  
    // 每个粒子的寿命（随机...
    particleSystem.minLifeTime = 0.3
    particleSystem.maxLifeTime = 1.5

    // 排放率
    particleSystem.emitRate = 1500

    // 混合模式 : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ONEONE
  
    // 设置所有粒子的重力
    particleSystem.gravity = new Vector3(0, -9.81, 0)
  
    // 每个粒子发射后的方向
    // 其中的粒子从某一点向四面八方发射
    // 可以将 direction1 设置为指向一个方向的向量
    // 而将 direction2 设置为指向另一个方向的向量
    // 这样粒子就会在这两者之间随机发射，形成一个圆锥形的发射范围
    particleSystem.direction1 = new Vector3(-1, 10, 1)
    particleSystem.direction2 = new Vector3(1, 10, -1)
  
    // 力量和速度
    particleSystem.minEmitPower = 0.2
    particleSystem.maxEmitPower = 0.6
    particleSystem.updateSpeed = 0.01

    return particleSystem
  }

  const createLathe = () => {
    const latheProfile = [
      new Vector3(0, 0, 0),
      new Vector3(0.5, 0, 0),
      new Vector3(0.5, 0.2, 0),
      new Vector3(0.4, 0.2, 0),
      new Vector3(0.4, 0.05, 0),
      new Vector3(0.05, 0.1, 0),
      new Vector3(0.05, 0.8, 0),
      new Vector3(0.15, 0.9, 0)
    ]

    // 创建一个旋转体网格
    const lathe = MeshBuilder.CreateLathe('latheProfile', {
      shape: latheProfile,

      // 设置网格的侧面朝向
      // Mesh.DOUBLESIDE 表示网格的两个面都是可见的
      // 即无论摄像机从哪个方向看，网格的表面都是可见的
      sideOrientation: Mesh.DOUBLESIDE
    })
    lathe.position.x = -3
    lathe.position.z = 3

    return lathe
  }

  const pointerDown = (mesh) => {
    if (mesh.id === 'latheProfile') {
      switched = !switched
      if (switched) {
        particle.start()
      } else {
        particle.stop()
      }
      console.log(particle)
    }
  }

  const createPointerObservable = () => {
    scene.onPointerObservable.add((pointerInfo: any) => {
      switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERDOWN:
          if (pointerInfo.pickInfo.hit) {
            pointerDown(pointerInfo.pickInfo.pickedMesh)
          }
          break
      }
    })
  }

  const runAnimate = () => {
    engine.runRenderLoop(function() {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }
  
  const lathe = createLathe()
  particle = createParticleSystem(lathe)
  createLight()
  createSkyBox()
  createVillage()
  createPointerObservable()
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
