<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="radar2" class="stage"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Color,
  AmbientLight,
  Mesh,
  DoubleSide,
  Texture,
  PlaneGeometry,
  ShaderMaterial,
} from 'three'

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
  uniform float u_pi;
  uniform float u_radius;
  uniform float u_rotation_step;
  
  float getLength(float x, float y) {
    return sqrt((x - 0.0) * (x - 0.0) + (y - 0.0) * (y - 0.0));
  }
  
  void main() {
    // 旋转
    float angOffset = u_rotation_step * 0.05;
    float cosAng = cos(angOffset);
    float sinAng = sin(angOffset);
    mat2 modelMatrix = mat2(
      cosAng,sinAng,
      -sinAng,cosAng
    );
    vec2 point = modelMatrix * vp.xy;
    
    
    // ang=[-π,π]
    // atan(y,x)用于将XY坐标，返回弧度
    float ang = atan(point.y, point.x);
    // (u_pi - π)  或者 (u_pi - - π) 取值 0 ~ 2π
    float radians = u_pi - ang;
    float opacity = radians / (u_pi * 8.0);
    // float opacity = 1.0;
    
    // 隐藏某些部分
    if (abs(radians) > 1.0) {
      opacity = 0.0;
    }
    
    // 距离
    float uLength = getLength(point.x, point.y);
    if (uLength > u_radius) {
      opacity = 0.0;
    }
    
    gl_FragColor = vec4(u_color, opacity);
  }
`

const initScene = () => {
  const ele = document.getElementById('radar2') as HTMLElement
  const width = Number(window.getComputedStyle(ele).width.split('px')[0])
  const height = Number(window.getComputedStyle(ele).height.split('px')[0])

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(75, width / height, 0.1, 3000)
  camera.position.set(0, 0, 50)
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

   // 光
  const createLight = () => {
    const ambient = new AmbientLight(0x444444)
    scene.add(ambient)
  }

  const createPlane = () => {
    const radarGeom = new PlaneGeometry(100, 100, 100, 100) // width = 1, height = 1, widthSegments(宽度分段) = 1, heightSegments(高度分段) = 1
    const radarMat = new ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: DoubleSide,
      uniforms: {
        u_color: { value: new Color('#f00') },
        u_radius: { value: 50.0 },
        u_rotation_step: { value: 0.0 },
        u_pi: {  value: 3.14  }
      },
      transparent: true,
      depthWrite: false,
    })

    const radar = new Mesh(radarGeom, radarMat)
    scene.add(radar)
    return radar
  }

  createLight()
  const radar = createPlane()

  const runAnimate = () => {
    radar.material.uniforms.u_rotation_step.value += 0.5

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
})
</script>