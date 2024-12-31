<template>
  <div>
    按“Z"来锁住/解锁视角
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" style="position: relative;">
      <div id="rpgMultiObjectSelection" class="stage"></div>
    </div>
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
  BoxGeometry,
  MeshLambertMaterial,
  Mesh,
  Vector3,
  Texture,
  Frustum
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const requestID = ref<any>()
const isRunning = ref(false)
let sceneResources

let allBox: any = []
let collectionSelect: any = []

let center = new Vector3()

let controls: any = null
let createDiv: any = null
let isLockScreen = false
let isPointerDown = false

let startX = 0
let startY = 0
let endX = 0
let endY = 0
const startPoint = {
  x: 0,
  y: 0,
  z: 0.5
}
const endPoint = {
  x: 0,
  y: 0,
  z: 0.5
}

const frustum = new Frustum()
const vecNear = new Vector3()
const vecTopLeft = new Vector3()
const vecTopRight = new Vector3()
const vecBottomLeft = new Vector3()
const vecBottomRight = new Vector3()
const vecFar1 = new Vector3()
const vecFar2 = new Vector3()
const vecFar3 = new Vector3()
const deep = 2000

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


const initScene = () => {
  const ele = document.getElementById('rpgMultiObjectSelection') as HTMLElement
  const width = Number(window.getComputedStyle(ele).width.split('px')[0])
  const height = Number(window.getComputedStyle(ele).height.split('px')[0])

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
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true
  }

  
  // 光
  const createLight = () => {
    const ambient = new AmbientLight(0x444444)
    scene.add(ambient)
  }

  const createBox = () => {
    for (let i = 0; i < 10; i++) {
      const geometry = new BoxGeometry(20, 20, 20)
      const material = new MeshLambertMaterial({
        color: 0x00ff00
      })
      const cube = new Mesh(geometry, material)
      const x = Math.random() * 200
      const y = Math.random() * 200
      const z = Math.random() * 200
      cube.position.set(x, y, z)
      allBox.push(cube)
      scene.add(cube)
    }
  }

  const createEle = () => {
    createDiv = document.createElement('div')
    createDiv.style.pointerEvents = 'none'
    createDiv.style.border = '1px solid red'
    createDiv.style.background = 'rgba(222, 160, 131, 0.2)'
    createDiv.style.position = 'absolute'
    createDiv.style.display = 'none'
    createDiv.style.left = '0'
    createDiv.style.top = '0'
    createDiv.style.zIndex = '10'
    createDiv.style.transformOrigin = '0 0'
    renderer.domElement.parentElement.appendChild(createDiv)
    return createDiv
  }

  const numb = n =>{
    return Number(n.toFixed(4))
  }

  const runAnimate = () => {
    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
  }

  renderer.domElement.addEventListener('pointerdown', e => {
    if (isLockScreen) {
     
      isPointerDown = true
      startX = numb(e.offsetX)
      startY = numb(e.offsetY)
      createDiv.style.transform = `translate3d(${startX}px, ${startY}px, 0) rotate3d(0, 0, 0, 180deg)`
      
      startPoint.x = numb((startX / width) * 2 - 1)
      startPoint.y = numb(-(startY / height) * 2 + 1)
      
      for (let i = 0; i < collectionSelect.length; i++) {
        collectionSelect[i].material.emissive.set(0x000000)
      }
    }
  })

  renderer.domElement.addEventListener('pointermove', e => {
    if (isLockScreen && isPointerDown) {
      for (let i = 0; i < collectionSelect.length; i++) {
        collectionSelect[i].material.emissive.set(0x000000)
      }
      
      endX = numb(e.offsetX)
      endY = numb(e.offsetY)

      const w = endX - startX
      const h = endY - startY
      let rX = 0
      let rY = 0
      let rZ = 0
      if (w < 0 && h > 0) {
        rY = 1
      } else if (w > 0 && h < 0) {
        rX = 1
      } else if (w < 0 && h < 0) {
        rZ = 1
      }
      createDiv.style.display = w === 0 || h === 0 ? 'none' : 'block'
      createDiv.style.transform = `translate3d(${startX}px, ${startY}px, 0) rotate3d(${rX}, ${rY}, ${rZ}, 180deg)`
      createDiv.style.width = Math.abs(w) + 'px'
      createDiv.style.height = Math.abs(h) + 'px'

      endPoint.x = numb((endX / width) * 2 - 1)
      endPoint.y = numb(-(endY / height) * 2 + 1)

      getSelectThings()

      for (let i = 0; i < collectionSelect.length; i++) {
        collectionSelect[i].material.emissive.set(0xffffff)
      }

    }
  })

  renderer.domElement.addEventListener('pointerup', event => {
    if (isLockScreen) {
      createDiv.style.width = 0 + 'px'
      createDiv.style.height = 0 + 'px'
      createDiv.style.display = 'none'
      isPointerDown = false

      endPoint.x = numb((numb(event.offsetX) / width) * 2 - 1)
      endPoint.y = numb(-(numb(event.offsetY) / height) * 2 + 1)

      getSelectThings()

      for (let i = 0; i < collectionSelect.length; i++) {
        collectionSelect[i].material.emissive.set(0xffffff)
      }
    }
  })

  const createFrustum = () => {
    /**
     * 为什么sP和eP这样弄，画个图“回”，因为从左往右的顺序，和从右往左的顺序，是不一样的（sX，sY，eX，eY）
     */
    const sP = {
      x: Math.min(startPoint.x, endPoint.x),
      y: Math.max(startPoint.y, endPoint.y),
      z: 0.5
    }
    const eP = {
      x: Math.max(startPoint.x, endPoint.x),
      y: Math.min(startPoint.y, endPoint.y),
      z: 0.5
    }
    
    console.log(sP, eP)

    /**
     * vecNear就直接取相机的position
     * vecTopLeft、vecTopRight、vecBottomLeft、vecBottomRight则重新赋值，并unproject
     */
    vecNear.setFromMatrixPosition(camera.matrixWorld)
    vecTopLeft.copy(sP)
    vecTopRight.set(eP.x, sP.y, 0.5)
    vecBottomLeft.set(sP.x, eP.y, 0.5)
    vecBottomRight.copy(eP)

    /** 
     * unproject方法主要用于将屏幕上的点击位置转换为Three.js场景中的三维坐标
     * 换句话说，它能够将二维的屏幕坐标转换为三维场景中的坐标
     */
    vecTopLeft.unproject(camera)
    vecTopRight.unproject(camera)
    vecBottomLeft.unproject(camera)
    vecBottomRight.unproject(camera)

    vecFar1.copy(vecTopLeft).sub(vecNear).normalize()
    vecFar2.copy(vecTopRight).sub(vecNear).normalize()
    vecFar3.copy(vecBottomRight).sub(vecNear).normalize()

    vecFar1.multiplyScalar(deep)
    vecFar2.multiplyScalar(deep)
    vecFar3.multiplyScalar(deep)
    vecFar1.add(vecNear)
    vecFar2.add(vecNear)
    vecFar3.add(vecNear)


    const planes = frustum.planes
    /**
     * 六个面，可以看public/tips/isPerspectiveCamera.webp这个图
     */
    planes[0].setFromCoplanarPoints(vecNear, vecTopLeft, vecTopRight)
    planes[1].setFromCoplanarPoints(vecNear, vecTopRight, vecBottomRight)
    planes[2].setFromCoplanarPoints(vecBottomRight, vecBottomLeft, vecNear)
    planes[3].setFromCoplanarPoints(vecBottomLeft, vecTopLeft, vecNear)
    planes[4].setFromCoplanarPoints(vecTopRight, vecBottomRight, vecBottomLeft)
    planes[5].setFromCoplanarPoints(vecFar3, vecFar2, vecFar1)

    /**
     * normal.multiplyScalar(-1)是一个将向量的每个分量乘以-1的操作
     * 这实际上是将向量的方向反转
     * 因此，frustum.planes[5].normal.multiplyScalar(-1)的意思是反转视锥体下平面的法线方向，使其从指向下方变为指向上方
     * 在某些情况下，开发者可能想要反转这个法线方向，即将其从指向下方改为指向上方
     * 这可能是因为开发者想要以一种不同的方式使用这个平面，例如在进行自定义的物体与视锥体的相交检测时。
     */
    /**
     * 这种操作在某些情况下可能是有用的
     * 比如当你想计算一个点与视锥体的关系时，但希望以相反的方向来考虑下平面
     * 通常，视锥体的下平面是用来确定哪些物体在相机下方，因此不应该被渲染的
     * 但如果你反转了下平面的法线，那么它将用来确定哪些物体在相机的上方
     */
    /**
     * 这个去掉好像也没有影响？？
     */
    planes[5].normal.multiplyScalar(-1)
  }


  const getSelectThings = () => {
    collectionSelect = []
    
    if (startPoint.x === endPoint.x || startPoint.y === endPoint.y) {
      return 
    }

    camera.updateProjectionMatrix()
    camera.updateMatrixWorld()

    createFrustum()
    
    scene.children.forEach((child: any) => {
      if (child.isMesh && child.isObject3D) {
        center.copy(child.geometry.boundingSphere.center)
        /**
         * 当Vector3表示一个顶点坐标时，applyMatrix4方法可以通过矩阵对顶点坐标进行矩阵变换，如平移、旋转、缩放等
         * 例如，如果你有一个表示空间中某点坐标的Vector3对象
         * 并且你有一个Matrix4对象表示一个变换矩阵
         * 你可以通过调用applyMatrix4方法来应用这个变换矩阵到向量上，从而得到变换后的新坐标
         */
        center.applyMatrix4(child.matrixWorld)
        if (frustum.containsPoint(center)) {
          collectionSelect.push(child)
        }
      }
    })
    console.log(collectionSelect)
  }

  createLight()
  createBox()
  createEle()
  runAnimate()
  createOrbitControls()

  return {
    renderer,
    scene,
  }
}

const lockScreen = (e) => {
  if (e.key.toLocaleLowerCase() === 'z' && !isLockScreen) {
    isLockScreen = true
    controls.enabled = false
  } else if (e.key === 'z' && isLockScreen) {
    isLockScreen = false
    controls.enabled = true
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

    controls = null
    createDiv = null
    allBox = []
    collectionSelect = []
  }
}

onMounted(async() => {
  await nextTick()
  window.addEventListener('keydown', lockScreen)
})

onUnmounted(() => {
  destroy()
  window.removeEventListener('keydown', lockScreen)
})
</script>