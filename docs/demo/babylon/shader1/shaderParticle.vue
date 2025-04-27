<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderParticle" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  Texture,
  HemisphericLight,
  MeshBuilder,
  Effect,
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
  const ele = document.getElementById("shaderParticle") as any

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
  camera.setPosition(new Vector3(10, 10, 10))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
  }

  const createAxis = () => {
    const axisX = MeshBuilder.CreateLines(
      'axisX', {
        colors: [new Color4(1, 0, 0, 1), new Color4(1, 0, 0, 1)],
        points: [new Vector3(0, 0, 0), new Vector3(80, 0, 0)]
      },
      scene
    )

    const axisY = MeshBuilder.CreateLines(
      'axisY', {
        colors: [new Color4(0, 1, 0, 1),  new Color4(0, 1, 0, 1)  ],
        points: [new Vector3(0, 0, 0), new Vector3(0, 80, 0) ]
      },
      scene
    )

    const axisZ = MeshBuilder.CreateLines(
      'axisZ', {
        colors: [new Color4(0, 0, 1, 1), new Color4(0, 0, 1, 1)],
        points: [new Vector3(0, 0, 0), new Vector3(0, 0, 80)]
      },
      scene
    )

    return [axisX, axisY, axisZ]
  }

  const createParticle = () => {
    const emitter = MeshBuilder.CreateBox('box', { size: 10 }, scene)
    emitter.isVisible = false

    const effect = engine.createEffectForParticles('customParticle', ['time'])

    Effect.ShadersStore['customParticleFragmentShader'] = `
      precision highp float;

      varying vec2 vUV; // babylon.js提供
      varying vec4 vColor; // babylon.js提供

      uniform sampler2D diffuseSampler; // babylon.js提供

      uniform float time;

      void main() {
        vec2 position = vUV;
        
        vec2 center = vec2(0.5, 0.5);

        float color = 0.0;
        color = sin(distance(position, center) * 10.0 + time * vColor.g);

        vec4 baseColor = texture2D(diffuseSampler, vUV);

        gl_FragColor = baseColor * vColor * vec4(vec3(color, color, color), 1.0);
      }
    `

    const particleSystem = new ParticleSystem("particles", 4000, scene, effect)
    particleSystem.particleTexture = new Texture("/images/flare.png", scene)
    particleSystem.minSize = 0.1
    particleSystem.maxSize = 1.0
    particleSystem.minLifeTime = 0.5
    particleSystem.maxLifeTime = 5.0
    particleSystem.minEmitPower = 0.5
    particleSystem.maxEmitPower = 3.0
    particleSystem.emitter = emitter
    particleSystem.emitRate = 100;
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ONEONE
    particleSystem.direction1 = new Vector3(-1, 1, -1)
    particleSystem.direction2 = new Vector3(1, 1, 1)
    particleSystem.color1 = new Color4(1, 1, 0, 1)
    particleSystem.color2 = new Color4(0, 1, 0, 1)
    particleSystem.gravity = new Vector3(0, -4.8, 0)
    particleSystem.start()


    let time = 0
    let order = 0.1

    effect.onBind = function () {
        effect.setFloat('time', time)

        time += order

        if (time > 100 || time < 0) {
            order *= -1
        }
    }
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
  createAxis()
  createParticle()
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
