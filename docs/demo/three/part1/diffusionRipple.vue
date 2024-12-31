<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="diffusionRipple" class="stage"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Color,
  AmbientLight,
  BoxGeometry,
  Mesh,
  ShaderMaterial,
  DoubleSide,
  Texture,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const requestID = ref<any>()
const isRunning = ref(false)
let sceneResources

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

const vertexShader = `
  varying vec3 vp;
  void main() {
    vp = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const fragmentShader = `
  varying vec3 vp;
  uniform vec3 u_color;
  uniform vec3 u_tcolor;
  uniform float u_r;
  uniform float u_length;
  uniform float u_max;
  
  float getLength(float x, float y) {
    return sqrt((x - 0.0) * (x - 0.0) + (y - 0.0) * (y - 0.0));
  }
  
  void main() {
    float uOpacity = 0.3;
    vec3 vColor = u_color;
    float uLength = getLength(vp.x, vp.z);
    if (uLength <= u_r && uLength > u_r - u_length) {
      float opacity = sin((u_r - uLength) / uLength);
      uOpacity = opacity;
      if (vp.y < 0.0) {
        vColor = u_color * opacity;
      } else {
        vColor = u_tcolor;
      }
    }
    gl_FragColor = vec4(vColor, uOpacity);
  }
`

const initScene = () => {
  const ele = document.getElementById('diffusionRipple') as HTMLElement
  const width = Number(window.getComputedStyle(ele).width.split('px')[0])
  const height = Number(window.getComputedStyle(ele).height.split('px')[0])

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(75, width / height, 0.1, 3000)
  camera.position.set(0, 0, 1000)
  scene.add(camera)

  const renderer: any = new WebGLRenderer({
    antialias: true,
    alpha: true
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(new Color('#32373E'), 1)
  ele.appendChild(renderer.domElement)

  // 添加 OrbitControls
  const createOrbitControls = () => {
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true
    return controls
  }

  const createLight = () => {
    const light = new AmbientLight(0xadadad)
    scene.add(light)
  }
  
  const createBox = () => {
    const geometry = new BoxGeometry(300, 300, 300)
    const material = new ShaderMaterial({
      uniforms: {
        u_color: { value: new Color('#5588aa') },
        u_tcolor: { value: new Color('#f55c1a') },
        u_r: { value: 0.25 },
        u_length: { value: 20 },
      },
      side: DoubleSide,
      transparent: true,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    })
    const mesh = new Mesh(geometry, material)
    scene.add(mesh)

    return mesh
  }

  createLight()
  const box = createBox()
  const material = box.material

  const runAnimate = () => {
    material.uniforms.u_r.value += 1
    if (material.uniforms.u_r.value >= 300) {
      material.uniforms.u_r.value = 20
    }

    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
  }
  runAnimate()
  const controls = createOrbitControls()

  return {
    renderer,
    scene,
    controls
  }
}

const destroy = () => {
  if (sceneResources) {
    sceneResources.scene.clear()
    sceneResources.scene.traverse((child) => {
      if (child.geometry) child.geometry?.dispose()
      if (child.material) {
        if (child.material.map) child.material.map?.dispose()
        child.material?.dispose()
      }
    })
    if (sceneResources.scene.background) {
      if (sceneResources.scene.background instanceof Texture) {
        sceneResources.scene.background?.dispose()
      }
    }
    sceneResources.renderer?.dispose()
    sceneResources.renderer.forceContextLoss()
    sceneResources.controls?.dispose()

    cancelAnimationFrame(requestID.value)

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