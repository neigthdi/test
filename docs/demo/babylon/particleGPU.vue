<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div>
        粒子数量{{ numbers }}
        <div class="flex">
          <div class="pointer" @click="onMove">是否move（{{ moveEmitter ? '是' : '否' }}）</div>
          <div class="pointer" @click="onRotate">是否rotate（{{ rotateEmitter ? '是' : '否' }}）</div>
          <div class="pointer" @click="onUseGpu">是否启用GPU（{{ useGPUVersion ? '是' : '否' }}）</div>
        </div>
      </div>
    </div>
    <canvas id="particleGPU" class="stage"></canvas>
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
  HemisphericLight,
  MeshBuilder,
  Color3,
  Color4,
  Texture,
  GPUParticleSystem,
  ParticleSystem,
  CustomParticleEmitter
} = pkg
const { GridMaterial } = pkgMat

const fps = ref(0)
const useGPUVersion = ref(true) // 是否启用gpu
const particleSystem = ref<any>(null)
const alpha = ref(0)
const moveEmitter = ref(false)
const rotateEmitter = ref(false)
const fountain = ref<any>(null)

const diam = 4 // box大小
const numbers = 50000 // 粒子数量

const onMove = () => {
  moveEmitter.value = !moveEmitter.value
}
const onRotate = () => {
  rotateEmitter.value = !rotateEmitter.value
}

const onUseGpu = () => {
  useGPUVersion.value = !useGPUVersion.value
  initScene()
}


const initScene = async() => {
  const ele = document.getElementById("particleGPU") as HTMLCanvasElement

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
  camera.setPosition(new Vector3(0, 20, 60))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
  }

  const createGround = () => {
    const ground = MeshBuilder.CreateGround('ground', {
      width: 100,
      height: 100,
    }, scene)
    const groundMat = new GridMaterial('grid1', scene)
    const color = new Color3(0, 245 / 255, 171 / 255)
    groundMat.mainColor = color
    groundMat.lineColor = color
    groundMat.opacity = 0.7
    groundMat.majorUnitFrequency = 10
    groundMat.minorUnitVisibility = 0.8
    groundMat.gridRatio = 25
    ground.material = groundMat
  }

  const createBox = () => {
    const fountain = MeshBuilder.CreateBox('box', {
      height: diam,
      width: diam
    }, scene)
    return fountain
  }

  const createParticle = (fountain) => {
    if(particleSystem.value) {
      particleSystem.value.dispose()
    }

    if(useGPUVersion.value && GPUParticleSystem.IsSupported) {
      particleSystem.value = new GPUParticleSystem(
        'gpu-particles',
        { capacity: numbers },
        scene
      )
      particleSystem.value.activeParticleCount = numbers
      console.log('GPUParticleSystem')
    } else {
      particleSystem.value = new ParticleSystem(
        'particles',
        numbers,
        scene
      )
      console.log('ParticlesSystem')
    }

    const customEmitter = new CustomParticleEmitter()

    // 计算粒子生成的xy位置
    customEmitter.particlePositionGenerator = (_index, _particle, out) => {
      const hu_du = 2 * Math.PI * Math.random()
      const r = +((Math.random() * diam) / 2).toFixed(4)
      const deg = (180 / Math.PI) * hu_du
      const x = Math.cos(deg) * r
      const y = Math.sin(deg) * r
      out.x = x
      out.y = y
      out.z = 0
    }

    // 计算粒子到达xyz的位置
    customEmitter.particleDestinationGenerator = (_index, _particle, out) => {
      const hu_du = 2 * Math.PI * Math.random()
      const r = +((Math.random() * diam) / 2).toFixed(4)
      const deg = (180 / Math.PI) * hu_du
      const x = Math.cos(deg) * r
      const y = Math.sin(deg) * r
      out.x = x
      out.y = y
      const z = Math.random() / (x * x + y * y)
      out.z = z > 20 ? 20 : z
    }

    particleSystem.value.emitRate = numbers
    particleSystem.value.particleEmitterType = customEmitter
    particleSystem.value.particleTexture = new Texture(
      '/images/grass.png',
      scene
    )
    particleSystem.value.textureMask = new Color4(0.11, 0.8, 0.1, 1)
    particleSystem.value.emitter = fountain
    particleSystem.value.maxLifeTime = 1
    particleSystem.value.minSize = 0.1
    particleSystem.value.maxSize = 0.1

    particleSystem.value.start()
  }





  const runAnimate = () => {
    engine.runRenderLoop(function() {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }


  fountain.value = createBox()
  createParticle(fountain.value)


  createLight()
  createGround()
  runAnimate()

  




 
  scene.registerBeforeRender(function() {
    if (moveEmitter.value) {
      console.log('moveEmitter')
      fountain.value.position.x = 5 * Math.cos(alpha.value)
      fountain.value.position.z = 5 * Math.sin(alpha.value)
    }

    if (rotateEmitter.value) {
      console.log('rotateEmitter')
      fountain.value.rotation.x += 0.01
    }
    alpha.value = +((0.01+alpha.value).toFixed(2))
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

<style scoped>
.flex {
  display: flex;
}
.space-between {
  justify-content: space-between;
}
.pointer {
  cursor: pointer;
  color: coral;
}
.pointer:hover {
  opacity: 0.7;
}
</style>