<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="textureCloud" class="stage"></div>
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
  Fog,
  Mesh,
  PlaneGeometry,
  ShaderMaterial,
  DoubleSide,
  Texture,
  TextureLoader,
  DirectionalLight,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

const requestID = ref<any>()
const isRunning = ref(false)
const windowHalfX = ref(0)
const windowHalfY = ref(0)
let sceneResources
let loader: any = new TextureLoader()
let position = 1
let mouseX = 0
let mouseY = 0


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

const onDocumentMouseMove = (event) => {
  mouseX = (event.clientX - windowHalfX.value) * 0.25
  mouseY = (event.clientY - windowHalfY.value) * 0.15
}

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;

  uniform sampler2D map;
  
  uniform vec3 fogColor;
  uniform float fogNear;
  uniform float fogFar;

  void main() {
    // 这个坐标的z分量表示片元在深度缓冲中的值，而w分量通常用于表示片元的深度值在投影空间中的位置
    // 这个表达式计算的是当前片元的深度值。由于gl_FragCoord.w在WebGL中通常等于1，所以这个表达式实际上简化为depth = gl_FragCoord.z
    float depth = gl_FragCoord.z / gl_FragCoord.w; // 深度值

    float fogFactor = smoothstep(fogNear, fogFar, depth); // 雾化因子

    gl_FragColor = texture2D(map, vUv);

    gl_FragColor.w *= pow(gl_FragCoord.z, 20.0); // 透明度

    gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);
}
`

const initScene = async() => {
  const ele = document.getElementById('textureCloud') as HTMLElement
  const wrapDomStyle = getComputedStyle(ele)
  const width = parseInt(wrapDomStyle.width, 10)
  const height = parseInt(wrapDomStyle.height, 10)

  windowHalfX.value = width / 2
  windowHalfY.value = height / 2

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(30, width / height, 1, 3000)
  camera.position.set(0, 0, 6000)
  camera.rotation.set(0, 0, 0)
  scene.add(camera)
  
  const renderer: any = new WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    alpha: true
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(new Color('#4584b4'), 1)
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

  const createCloud = async() => {
    const fog = new Fog(0x4584b4, -100, 3000) // 雾效果可以增加场景的深度感和真实感
    const texture = await loader.loadAsync('/images/cloud.png')
    const plane: any = new PlaneGeometry(64, 64, 1, 1)
    const material = new ShaderMaterial({
      side: DoubleSide,
      uniforms: {
        map: { value: texture },
        fogColor: { value: fog.color },
        fogNear: { value: fog.near },
        fogFar: { value: fog.far }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      depthWrite: false,
      depthTest: false,
      transparent: true
    })
    const geometries: any = []
    for (let i = 0; i < 8000; i++) {
      const clone = plane.clone()

      const x = Math.random() * 1000 - 500
      const y = -Math.random() * Math.random() * 200 - 15
      const z = i
      clone.translate(x, y, z)

      const scale = Math.random() * Math.random() * 1.5 + 0.5
      clone.scale(scale, scale, 1)

      clone.rotateZ(Math.random() * Math.PI)

      geometries.push(clone)
    }
    const mergedGeometry = mergeGeometries(geometries)
    const mesh = new Mesh(mergedGeometry, material)
    scene.add(mesh)
  }


  createLight()
  createCloud()

  const runAnimate = () => {

    camera.position.x += (mouseX - camera.position.x) * 0.01
    camera.position.y += (-mouseY - camera.position.y) * 0.01
    camera.position.z = -position + 8000

    position++
    if (position > 8000) {
      position = 1
    }

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

  document.removeEventListener('mousemove', onDocumentMouseMove, false)
}

onMounted(async() => {
  await nextTick()
  document.addEventListener('mousemove', onDocumentMouseMove, false)
})

onUnmounted(() => {
  destroy()
})
</script>