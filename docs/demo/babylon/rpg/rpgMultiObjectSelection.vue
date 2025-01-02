<template>
  <div>
    <div>
      <div>按“Z"来锁住/解锁视角</div>
      <div class="flex space-between">
        <div>fps: {{ fps }}</div>
        <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
      </div>
    </div>
    <div style="position: relative;">
      <div id="customBox">
        <canvas v-if="isRunning" id="rpgMultiObjectSelection" class="stage"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import 'babylonjs-loaders'
import * as babylon from 'babylonjs'

const {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  StandardMaterial,
  Color3,
  Color4,
  DirectionalLight,
  MeshBuilder,
  Matrix,
  PointerEventTypes
} = babylon

const fps = ref(0)
const isLockScreen = ref(false)
const isRunning = ref(false)

const isRightHandedSystem = false
const boxList = ref<any>([])
const createDiv = ref<any>(null)
const pointerDown = ref(false)
const startPoint = ref<any>({})
const endPoint = ref<any>({})
const collectionMesh = ref<any>([])
const saveMaterial = ref<any>([])

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

const initScene = async () => {
  const ele = document.getElementById("rpgMultiObjectSelection") as any
  const customBox = document.getElementById("customBox") as any
  const boxWidth = Number(window.getComputedStyle(customBox).width.split('px')[0])
  const boxHeight = Number(window.getComputedStyle(customBox).height.split('px')[0])

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

  const scene: any = new Scene(engine)
  // 使用左手坐标系
  scene.useRightHandedSystem = isRightHandedSystem

  const camera = new ArcRotateCamera('camera', 0, 0, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(25, 25, 25))
  
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
  }

  const createLight = () => {
    var light = new DirectionalLight('dir01', new Vector3(0, -1, -0.3), scene)
    light.position = new Vector3(20, 60, 30)
    return light
  }

  const createBox = () => {
    for (let i = 0; i < 10; i++) {
      const box = MeshBuilder.CreateBox(`box${i}`, {
        size: 1
      }, scene)
      const material = new StandardMaterial(`material${i}`, scene)
      const r = Math.random()
      const g = Math.random()
      const b = Math.random()
      material.emissiveColor = new Color3(r, g, b) // 设置颜色属性
      const x = Math.random() * 10 + i
      const y = Math.random() * 10 + i
      const z = Math.random() * 10 + i
      box.position = new Vector3(x, y, z)
      box.material = material
      boxList.value.push(box)
    }
  }

  const createDivPlane = () => {
    createDiv.value = document.createElement('div')
    createDiv.value.style.pointerEvents = 'none'
    createDiv.value.style.border = '1px solid red'
    createDiv.value.style.background = 'rgba(222, 160, 131, 0.2)'
    createDiv.value.style.position = 'absolute'
    createDiv.value.style.display = 'none'
    createDiv.value.style.left = '0'
    createDiv.value.style.top = '0'
    createDiv.value.style.zIndex = '10'
    createDiv.value.style.transformOrigin = '0 0'
    customBox.appendChild(createDiv.value)
  }

  /**
   * 世界坐标转成屏幕坐标
   */
  const convertWorldCoordinates2ScreenCoordinates = mesh => {
    // defines the Vector3 to project
    const meshPos = mesh.position
    // defines the world matrix to use
    const identity = Matrix.Identity()
    // defines the transform (view x projection) matrix to use
    const sceneMatrix = scene.getTransformMatrix()
    // defines the screen viewport to use
    const cameraViewport = camera.viewport

    const screenCoordinates = Vector3.Project(
      meshPos,
      identity,
      sceneMatrix,
      cameraViewport
    )
    

    const x = screenCoordinates.x * boxWidth
    const y = screenCoordinates.y * boxHeight

    return {
      x,
      y
    }
  }

  /** 
   * 判断是否在框选中
   */
  const isInRectangle = (rectangle, point) => {
    const { sx, sy, ex, ey } = rectangle
    const { x, y } = point
    if (sx < x && x < ex && sy < y && y < ey) return true
    return false
  }

  const fixedNumb = n => {
    return Number(n.toFixed(4))
  }

  const pointerDownFun = e => {
    if (e.type === PointerEventTypes.POINTERDOWN && isLockScreen.value) {
      pointerDown.value = true

      startPoint.value = {
        x: fixedNumb(e.event.offsetX),
        y: fixedNumb(e.event.offsetY)
      }

      for (let i = 0; i < collectionMesh.value.length; i++) {
        collectionMesh.value[i].material.emissiveColor = saveMaterial.value[i]
      }

      collectionMesh.value = []
      saveMaterial.value = []

      createDiv.value.style.transform = `translate3d(${startPoint.value.x}px, ${startPoint.value.y}px, 0) rotate3d(0, 0, 0, 180deg)`
    }
  }

  const pointerMoveFun = e => {
    if (e.type === PointerEventTypes.POINTERMOVE && pointerDown.value && isLockScreen.value) {
      endPoint.value = {
        x: fixedNumb(e.event.offsetX),
        y: fixedNumb(e.event.offsetY)
      }


      const width = fixedNumb(endPoint.value.x - startPoint.value.x)
      const height = fixedNumb(endPoint.value.y - startPoint.value.y)

      let rX = 0
      let rY = 0
      let rZ = 0
      if (width < 0 && height > 0) {
        rY = 1
      } else if (width > 0 && height < 0) {
        rX = 1
      } else if (width < 0 && height < 0) {
        rZ = 1
      }

      createDiv.value.style.display = width === 0 || height === 0 ? 'none' : 'block'
      createDiv.value.style.transform = `translate3d(${startPoint.value.x}px, ${startPoint.value.y}px, 0) rotate3d(${rX}, ${rY}, ${rZ}, 180deg)`
      createDiv.value.style.width = Math.abs(width) + 'px'
      createDiv.value.style.height = Math.abs(height) + 'px'
    }
  }

  const pointerUpFun = e => {
    if (e.type === PointerEventTypes.POINTERUP && isLockScreen.value) {
      pointerDown.value = false

      endPoint.value = {
        x: fixedNumb(e.event.offsetX),
        y: fixedNumb(e.event.offsetY)
      }

      boxList.value.forEach(mesh => {
        const sx = Math.min(startPoint.value.x, endPoint.value.x)
        const sy = Math.min(startPoint.value.y, endPoint.value.y)
        const ex = Math.max(startPoint.value.x, endPoint.value.x)
        const ey = Math.max(startPoint.value.y, endPoint.value.y)
        const {
          x,
          y
        } = convertWorldCoordinates2ScreenCoordinates(mesh)
        const bool = isInRectangle({
          sx,
          sy,
          ex,
          ey
        }, {
          x,
          y
        })
        if (bool) collectionMesh.value.push(mesh)
      })

      createDiv.value.style.width = 0 + 'px'
      createDiv.value.style.height = 0 + 'px'
      createDiv.value.style.display = 'none'

      for (let i = 0; i < collectionMesh.value.length; i++) {
        saveMaterial.value.push(collectionMesh.value[i].material.emissiveColor.clone())
        collectionMesh.value[i].material.emissiveColor = Color3.Black()
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

  scene.onPointerObservable.add(e => {
    pointerDownFun(e)
    pointerMoveFun(e)
    pointerUpFun(e)
  })

  createAxis()
  createLight()
  createBox()
  createDivPlane()
  runAnimate()


     
  return {
    scene,
    engine,
    camera
  }
}

const lockScreen = (e) => {
  if (isRunning.value) {
    if (e.key.toLocaleLowerCase() === 'z' && !isLockScreen.value) {
      isLockScreen.value = true
      sceneResources.camera.detachControl()
    } else if (e.key.toLocaleLowerCase() === 'z' && isLockScreen) {
      isLockScreen.value = false
      sceneResources.camera.attachControl()
    }
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
  window.addEventListener('keydown', lockScreen)
})

onUnmounted(() => {
  destroy()
  window.removeEventListener('keydown', lockScreen)
})
</script>
