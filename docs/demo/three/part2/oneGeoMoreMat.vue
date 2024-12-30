<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="oneGeoMoreMat" class="stage"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  Color,
  AmbientLight,
  Mesh,
  TubeGeometry,
  MeshBasicMaterial,
  CatmullRomCurve3,
  Vector3,
  BufferGeometry,
  LineBasicMaterial,
  Line,
  Texture
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const createMultiMaterialObject = (geometry, materials)=> {
  const group = new Group()
  for (let i = 0, l = materials.length; i < l; i++) {
    group.add(new Mesh(geometry, materials[i]))
  }
  return group
}

const curve = ref<any>()
const requestID = ref<any>()
const isRunning = ref(false)
let sceneResources

const onTrigger = async () => {
  if(!isRunning.value) {
    isRunning.value = true
    await nextTick()
    sceneResources = await initScene()
  } else {
    isRunning.value = false
    destroy()
  }
}

const initScene = () => {
  const ele = document.getElementById('oneGeoMoreMat') as HTMLElement
  const width = Number(window.getComputedStyle(ele).width.split('px')[0])
  const height = Number(window.getComputedStyle(ele).height.split('px')[0])
  const segments = 64
  const radius = 10
  const radiusSegments = 10
  const closed = false
  const step = 0.002
  let progress = 0

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(45, width / height, 1, 10000)
  camera.position.set(0, 0, 1000)
  camera.rotation.set(0, 0, 1)
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
    const ambient = new AmbientLight(0x444444)
    scene.add(ambient)
  }

  const createCurve = () => {
    const curve = new CatmullRomCurve3([
      new Vector3(160, 160, 150),
      new Vector3(130, 130, 130),
      new Vector3(100, 100, 120),
      new Vector3(50, 50, 50),
      new Vector3(0, 0, 0),
    ])
    return curve
  }

  const createTube = () => {
    const tubeGeometry = new TubeGeometry(
      curve?.value, //创建样条曲线
      segments, //管道的分段数
      radius, //管道半径
      radiusSegments, //管道截面圆的分段数
      closed //是否头尾连接
    )
    const tubeMat = new MeshBasicMaterial({
      color: 0x00f00,
      transparent: true,
      opacity: 0.3
    })
    const tubeFrame = new MeshBasicMaterial()
    tubeFrame.wireframe = true
    const tube = createMultiMaterialObject(tubeGeometry, [tubeMat, tubeFrame])
    scene.add(tube)
  }

  const createLine = () => {
    const lineGeometry = new BufferGeometry().setFromPoints(curve?.value?.getPoints(5000))
    const lineMaterial = new LineBasicMaterial({
      color: 'orange'
    })
    const line = new Line(lineGeometry, lineMaterial)
    scene.add(line)
  }

  const moveCamera = () => {
    if (progress < 1 - step) {
      const point = curve?.value?.getPoint(progress)
      const pointBox = curve?.value?.getPoint(progress + step)
      camera.position.set(point.x, point.y + 5, point.z)
      camera.lookAt(pointBox.x, pointBox.y + 5, pointBox.z)
      progress += step
    } else {
      progress = 0
    }
  }
  
  const runAnimate = () => {
    moveCamera()
    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
  }


  createLight()
  curve.value = createCurve()
  createTube()
  createLine()
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
  curve.value = null
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>