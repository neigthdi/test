<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="planeWave" class="stage"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  AmbientLight,
  Mesh,
  Vector2,
  PlaneGeometry,
  ShaderMaterial,
  DoubleSide,
  Clock,
  Texture,
  TextureLoader,
  DirectionalLight,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const requestID = ref<any>()
const isRunning = ref(false)
let sceneResources
let clock: any = new Clock()
let loader: any = new TextureLoader();

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
  uniform vec2 uFrequency;
  uniform float uTime;
  
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    float elevation = uFrequency.x * sin(position.x * 0.05 - uTime);
    elevation += uFrequency.y * sin(position.y * 0.01 - uTime);
    
    vec3 curPosition = vec3(position.x, position.y, position.z + elevation);
    vec4 modelPosition = modelMatrix * vec4(curPosition, 1.0);
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    
    vUv = vec2(uv.x, uv.y);
    // 在顶点着色器中，将风高程存储在一个变量中
    vElevation = elevation;
  }
`

const fragmentShader = `
  varying vec2 vUv;
  varying float vElevation;
  
  uniform sampler2D uTexture;
  uniform vec3 uColor;

  void main() {
    vec4 textureColor = texture2D(uTexture, vUv);
    // textureColor.rgb *= vElevation * 2.0 + 0.65;
    gl_FragColor = textureColor;
  }
`

const initScene = async() => {
  const ele = document.getElementById('planeWave') as HTMLElement
  const wrapDomStyle = getComputedStyle(ele)
  const width = parseInt(wrapDomStyle.width, 10)
  const height = parseInt(wrapDomStyle.height, 10)

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(45, width / height, 1, 10000)
  camera.position.set(500, 500, 500)
  camera.rotation.set(0, 0, 0)
  scene.add(camera)
  
  const renderer: any = new WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
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
  }

  
  // 光
  const createLight = () => {
    const ambient = new AmbientLight(0xadadad)
    scene.add(ambient)

    const directionalLight = new DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1000, 1000, 0)
    scene.add(directionalLight)
  }

  const createPlane = async() => {
    const texture = await loader.loadAsync('/images/star.jpg')
    const { width, height } = texture.image
    const w = texture.image.width
    const h = texture.image.height
    console.log(width, height)
    const geometry = new PlaneGeometry(w, h, w, h)
    const material = new ShaderMaterial({
      side: DoubleSide,
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uFrequency: { value: new Vector2(10, 5) },
        uColor: { value: new Color('red') },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })
    const mesh = new Mesh(geometry, material)
    scene.add(mesh)
    return mesh
  }

  createLight()
  const plane = await createPlane()
  console.log(plane)

  const runAnimate = () => {
    plane.material.uniforms.uTime.value = clock.getElapsedTime() * 5

    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
  }
  
  runAnimate()
  
  const controls = createOrbitControls()

  return {
    renderer,
    scene,
    controls,
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
  clock = null
  loader = null
})
</script>