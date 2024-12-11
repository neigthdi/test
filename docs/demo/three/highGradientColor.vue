<template>
  <div id="highGradientColor" class="stage"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  AmbientLight,
  DirectionalLight,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  DoubleSide,
  Clock,
  Texture
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const addTime = ref<any>({ value: 0 })
const clock = new Clock()

const vertexShaderReplacements = `
  precision highp float;

  uniform float uTime;
  uniform float uInterval;

  varying vec3 fPosition;
  varying float vInterval;
  varying float vOpacity;
  
  void main() {
    vec4 pos = modelViewMatrix * vec4(position, 1.0);
    
    fPosition = (modelMatrix * vec4(position, 1.0)).xyz;

    vInterval = uInterval;
    vOpacity = sin(uTime);

    gl_Position = projectionMatrix * pos;
  }
  `
  const fragmentShaderReplacements = `
  precision highp float;

  varying vec3 fPosition;
  varying float vInterval;
  varying float vOpacity;

  void d_color() {
    float dataY = fPosition.y;
    float dataI = vInterval;
    vec3 color = vec3(0.0, 0.0, 0.0);

    if (dataY <= -dataI) {
      // 蓝色-蓝绿
      // 0,0,1 -> 0,1,1
      color = vec3(0.0, 0.0, 1.0);
    } else if (dataY > -dataI && dataY <= 0.0) {
      float g = 1.0 - (-dataY / dataI);
      color = vec3(0.0, g, 1.0);
    } else if (dataY > 0.0 && dataY <= dataI) {
      // 蓝绿-绿
      // 0,1,1 -> 0,1,0
      float g = 1.0 - dataY / dataI;
      color = vec3(0.0, 1.0, g);
    } else if (dataY > dataI && dataY <= 2.0 * dataI) {
      // 绿-浅绿
      // 0,1,0 -> 0.5,1,0
      float r = 0.5 * ((dataY - dataI) / dataI);
      color = vec3(r, 1.0, 0.0);
    } else if (dataY > 2.0 * dataI && dataY <= 3.0 * dataI) {
      // 浅绿-黄
      // 0.5,1,0 -> 1,1,0
      float r = 0.5 + ((dataY - 2.0 * dataI) / dataI) * 0.5;
      color = vec3(r, 1.0, 0.0);
    } else if (dataY > 3.0 * dataI && dataY <= 4.0 * dataI) {
      // 黄-土黄
      // 1,1,0 -> 1,0.76,0
      float g = 1.0 - ((dataY - 3.0 * dataI) / dataI) * (1.0 - 0.76);
      color = vec3(1.0, g, 0.0);
    } else if (dataY > 4.0 * dataI && dataY <= 5.0 * dataI) {
      // 土黄-橙
      // 1,0.76,0 -> 1,0.58,0
      float g = 0.76 - ((dataY -  4.0 * dataI) / dataI) * (0.76 - 0.58);
      color = vec3(1.0, g, 0.0);
    } else if (dataY > 5.0 * dataI && dataY <= 6.0 * dataI) {
      // 橙-红
      // 1,0.58,0 -> 1,0,0
      float g = 0.58 - ((dataY - 5.0 * dataI) / dataI) * 0.58;
      color = vec3(1.0, g, 0.0);
    } else {
      // 红
      // 1.0,0.0,0.0
      color = vec3(1.0, 0.0, 0.0);
    }

    gl_FragColor = vec4(color, vOpacity);
  }

  void main() {
    d_color();
  }
  `

const initScene = () => {
  const ele = document.getElementById('highGradientColor') as HTMLElement
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
  }

  // 光
  const createLight = () => {
     //环境光
    const ambient = new AmbientLight(0x444444)
    scene.add(ambient)

    // 平行光
    const directionalLight = new DirectionalLight(0xffffff)
    // 平行光配置
    directionalLight.position.set(-40, 60, -10)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.near = 20
    directionalLight.shadow.camera.far = 200
    directionalLight.shadow.camera.left = -50
    directionalLight.shadow.camera.right = 50
    directionalLight.shadow.camera.top = 50
    directionalLight.shadow.camera.bottom = -50
    // 距离和强度
    directionalLight.intensity = 0.5
    // 设置阴影的分辨率
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    scene.add(directionalLight)
  }

  // 创建平面
  const createPlane = () => {
    const geometry = new PlaneGeometry(30, 200)
    const material = new ShaderMaterial({
      // wireframe: true,
      side: DoubleSide,
      uniforms: {
        uInterval: {
          value: 25.0
        },
        uTime: addTime.value,
      },
      vertexShader: vertexShaderReplacements,
      fragmentShader: fragmentShaderReplacements
    })

    const plane = new Mesh(geometry, material)
    // plane.position.set(0, 100, 0)
    scene.add(plane)
  }
 
  

  const runAnimate = () => {
    addTime.value.value = clock.getElapsedTime()
    
    requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
  }

  
 
  createLight()
  createPlane()
  runAnimate()
  const controls = createOrbitControls()

  return {
    renderer,
    scene,
    controls
  }
}

let sceneResources

onMounted(async () => {
  await nextTick() // 等待DOM更新
  sceneResources = initScene()
})

onUnmounted(() => {
  if (sceneResources) {
    sceneResources.scene.clear()
    sceneResources.scene.traverse((child) => {
      if (child.geometry) child.geometry.dispose()
      if (child.material) {
        if (child.material.map) child.material.map.dispose()
        child.material.dispose()
      }
    })
    if (sceneResources.scene.background) {
      if (sceneResources.scene.background instanceof Texture) {
        sceneResources.scene.background.dispose()
      }
    }
    sceneResources.renderer.dispose()
    sceneResources.renderer.forceContextLoss()
    sceneResources.controls.dispose()
    sceneResources = null
  }
})
</script>

<style scoped>
</style>