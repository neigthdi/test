<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="textureHouse" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import 'babylonjs-loaders'
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Vector4,
  Color3,
  HemisphericLight,
  MeshBuilder,
  Mesh,
  StandardMaterial,
  Texture
} from 'babylonjs'

let sceneResources

const fps = ref(0)
const isRunning = ref(false)

const semiHouseWidth = 2
const cubeHouseWidth = 1

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
  const ele = document.getElementById("textureHouse") as any

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
  camera.panningSensibility = 80
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(20, 20, 20))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
  }

  const createGround = () => {
    const groundMat = new StandardMaterial('ground')
    groundMat.diffuseColor = new Color3(0.2, 0.5, 0.6)
    const ground = MeshBuilder.CreateGround('ground', {
      width: 20,
      height: 20
    })
    ground.material = groundMat
  }

  const createBox = (width) => {
    const boxMat = new StandardMaterial('box')
    if (width === semiHouseWidth) {
      boxMat.diffuseTexture = new Texture('/images/semiHouse.png')
    } else {
      boxMat.diffuseTexture = new Texture('/images/cubeHouse.png')
    }

    const faceUV: any = []
    if (width === semiHouseWidth) {
      // 后面
      faceUV[0] = new Vector4(0.6, 0.0, 1.0, 1.0)
      // 前面
      faceUV[1] = new Vector4(0.0, 0.0, 0.4, 1.0)
      // 右面
      faceUV[2] = new Vector4(0.4, 0, 0.6, 1.0)
      // 左面
      faceUV[3] = new Vector4(0.4, 0, 0.6, 1.0)
    } else {
      // 后面
      faceUV[0] = new Vector4(0.5, 0.0, 0.75, 1.0)
      // 前面
      faceUV[1] = new Vector4(0.0, 0.0, 0.25, 1.0)
      // 右面
      faceUV[2] = new Vector4(0.25, 0, 0.5, 1.0)
      // 左面
      faceUV[3] = new Vector4(0.75, 0, 1.0, 1.0)
    }

    const box = MeshBuilder.CreateBox('box', {
      width: width,
      faceUV: faceUV,
      wrap: true
    })
    box.material = boxMat
    box.position.y = 0.5
    return box
  }

  const createRoof = (width) => {
    const roofMat = new StandardMaterial('roof')
    roofMat.diffuseTexture = new Texture('/images/roof.jpg')
    const roof = MeshBuilder.CreateCylinder('roof', {
      diameter: 1.3,
      height: 1.2,
      tessellation: 3
    })
    roof.material = roofMat
    roof.scaling.x = 0.75
    roof.scaling.y = width
    roof.rotation.z = Math.PI / 2
    roof.position.y = 1.22
    return roof
  }

  const mergeHouse = (width) => {
    const box = createBox(width)
    const roof = createRoof(width)
    return Mesh.MergeMeshes([box, roof], true, false, undefined, false, true)
  }

  const creteHouse = () => {
    const semiHouse = mergeHouse(semiHouseWidth)
    const cubeHouse = mergeHouse(cubeHouseWidth)

    // 每项都是一个数组[房屋类型，旋转，x，z]
    const places: any = []
    
    places.push([1, -Math.PI / 16, -6.8, 2.5])
    places.push([1, 15 * Math.PI / 16, -4.1, -1])
    places.push([1, 5 * Math.PI / 4, 0, -1])
    places.push([1, Math.PI + Math.PI / 2.5, 0.5, -3])
    places.push([1, Math.PI + Math.PI / 2.25, 0.75, -7])
    places.push([1, Math.PI / 1.95, 4.5, -3])
    places.push([1, Math.PI / 1.9, 4.75, -7])
    places.push([1, -Math.PI / 3, 6, 4])

    places.push([2, -Math.PI / 3, 5.25, 2])
    places.push([2, 15 * Math.PI / 16, -2.1, -0.5])
    places.push([2, Math.PI / 1.9, 4.75, -1])
    places.push([2, Math.PI + Math.PI / 2.1, 0.75, -5])
    places.push([2, -Math.PI / 16, -4.5, 3])
    places.push([2, -Math.PI / 16, -1.5, 4])
    places.push([2, -Math.PI / 3, 1.5, 6])
    places.push([2, 15 * Math.PI / 16, -6.4, -1.5])
    places.push([2, Math.PI / 1.9, 4.75, -5])

    const houses: any = []
    for (let i = 0; i < places.length; i++) {
      if (places[i][0] === 1) {
        houses[i] = cubeHouse?.createInstance('house' + i)
      } else {
        houses[i] = semiHouse?.createInstance('house' + i)
      }
      houses[i].rotation.y = places[i][1]
      houses[i].position.x = places[i][2]
      houses[i].position.z = places[i][3]
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
  createGround()
  creteHouse()
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
