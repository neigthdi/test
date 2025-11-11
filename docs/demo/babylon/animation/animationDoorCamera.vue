<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="animationDoorCamera" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  UniversalCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Color3,
  SpotLight,
  Animation
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
  const ele = document.getElementById("animationDoorCamera") as any

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

  const camera =  new UniversalCamera('UniversalCamera', new Vector3(0, 3, -30), scene)

  const createLight = () => {
    const light1 = new HemisphericLight('light', new Vector3(0, -1, 0), scene)
    light1.intensity = 0.25

    const light2 = new HemisphericLight('light', new Vector3(0, 1, -1), scene)
    light2.intensity = 0.5
  }


  /** 创建墙体 */
  const createBackground = () => {
    const ground = MeshBuilder.CreateGround('ground', {
      width: 50, height: 50
    }, scene)
    const mat = new StandardMaterial('sourceMat', scene)
    mat.diffuseColor = new Color3(0, 1, 1)
    ground.material = mat

    const wallList = [
      { width: 8, height: 6, depth: 0.1, position: { x: -6, y: 3 } },
      { width: 4, height: 6, depth: 0.1, position: { x: 2, y: 3 } },
      { width: 2, height: 2, depth: 0.1, position: { x: -1, y: 5 } },
      { width: 14, height: 6, depth: 0.1, position: { x: -3, y: 3, z: 7 } },
      { width: 7, height: 6, depth: 0.1, position: { x: -10, y: 3, z: 3.5 }, rotation: { y: Math.PI / 2 } },
      { width: 7, height: 6, depth: 0.1, position: { x: 3, y: 3, z: 3.5 }, rotation: { y: Math.PI / 2 } },
      { width: 7, height: 6, depth: 0.1, position: { x: 4, y: -3, z: 3.5 }, rotation: { y: Math.PI / 2 } },
    ]
    for (let i = 0; i < wallList.length; i++) {
      const cur = wallList[i]
      const wall = MeshBuilder.CreateBox('wall' + i, {
        width: cur.width, height: cur.height, depth: cur.depth,
      }, scene)
      for (const key in cur.position) {
        wall.position[key] = cur.position[key]
      }
      if (cur.rotation) {
        for (const key in cur.rotation) {
          wall.rotation[key] = cur.rotation[key]
        }
      }
    }
  }


  /** 动画相关 */

  const frameRate = 20
  const lightPositions = [-2, 3, 6.9]
  const lightDirections = [-0.5, -0.25, 1, 0, 0, -1]
  
  let sphereList: any = []
  let spotLights: any = []

  /** 创建门 */
  const createDoor = () => {
    const door = MeshBuilder.CreateBox('door', {
      width: 2, height: 4, depth: 0.1
    }, scene)

    const mat = new StandardMaterial('sourceMat', scene)
    mat.diffuseColor = new Color3(1, 0, 1)

    door.material = mat

    return door
  }

  /** 创建枢纽 */
  const createHinge  = (door) => {
    const hinge = MeshBuilder.CreateBox('hinge', {}, scene)
    hinge.isVisible = false
    door.parent = hinge
    hinge.position.y = 2
    door.position.x = -1
    return hinge
  }

  /** 创建球体 */
  const createSphere = () => {
    const sphereLight: any = MeshBuilder.CreateSphere('sphere', {
      diameter: 0.2
    }, scene)
    sphereLight.material = new StandardMaterial('', scene)
    sphereLight.material.emissiveColor = new Color3(1, 1, 1)
    sphereLight.position.x = 2
    sphereLight.position.y = 3
    sphereLight.position.z = 0.1
    return sphereLight
  }

  /** 设置多个球体的数组 */
  const setSphereList = (sphere) => {
    sphereList.push(sphere)

    sphereList.push(sphere.clone())
    sphereList[1].position = new BABYLON.Vector3(
      lightPositions[0],
      lightPositions[1],
      lightPositions[2]
    )
  }

  /** 球体上的的灯 */
  const createSpotLight = (sphereList) => {
    for (let i = 0; i < sphereList.length; i++) {
      spotLights[i] = new SpotLight(
        'spotLight' + i, 
        sphereList[i].position, 
        new Vector3(
          lightDirections[3 * i],
          lightDirections[3 * i + 1],
          lightDirections[3 * i + 2]
        ),
        Math.PI / 8,
        5,
        scene
      )
      spotLights[i].diffuse = new Color3(1, 1, 1)
      spotLights[i].specular = new Color3(0.5, 0.5, 0.5)
      spotLights[i].intensity = 0
    }
  }

  /** 动画——让相机扫一圈 */ 
  const createCameraRotate = () => {
    // frame: 表示动画时间轴上的关键帧位置，通常以帧为单位。在这个例子中，0 表示动画的起始帧。
    // value: 表示在该帧上，被动画化属性的值。在这个例子中，0 表示该属性在动画开始时的初始值。
    const rotateKeys = [
      { frame: 0, value: 0 },
      { frame: 9 * frameRate, value: 0 },
      { frame: 14 * frameRate, value: Math.PI }
    ]
    const rotate = new Animation(
      'rotate',
      'rotation.y',
      frameRate,
      Animation.ANIMATIONTYPE_FLOAT,
      Animation.ANIMATIONLOOPMODE_CONSTANT
    )
    rotate.setKeys(rotateKeys)
    return rotate
  }

  /** 
   * 让相机移动
   * 移动相机会改变相机的位置(vector3)。相机环顾四周是围绕 y 轴(float)的旋转。
   * 由于动画只能更改一个属性，因此相机需要两个动画。
   * 移动摄像机的关键点将在时间 0 开始，摄像机将开始远离建筑物并上下移动，直到它在 3 秒的时间刚好在门外。
   * 当门打开时，摄像机将保持其位置 2 秒，然后在 5 秒时将向前移动到与门成一定角度的房间，在 8 秒时停止。
   * 相机在 9 秒时不旋转，然后相机将在 14 秒时旋转 180 度以面对门。
   * 相机的关键点的值将是它在 0、 3、 5 和 8 秒处的帧中的位置以及它在 0、 9 和 14 秒处的帧中的旋转。
   */
  const createCameraMove = () => {
    const moveKeys = [
      { frame: 0, value: new Vector3(0, 5, -30) },
      { frame: 3 * frameRate, value: new Vector3(0, 2, -10) },
      { frame: 5 * frameRate, value: new Vector3(0, 2, -10) },
      { frame: 8 * frameRate, value: new Vector3(-2, 2, 3) }
    ]
    const move = new Animation(
      'move',
      'position',
      frameRate,
      Animation.ANIMATIONTYPE_VECTOR3,
      Animation.ANIMATIONLOOPMODE_CONSTANT
    )
    move.setKeys(moveKeys)
    return move
  }

  /** 
   * 用于打开和关闭门
   * 门以 y 轴为轴围绕铰链进行旋转。打开和关闭门的旋转将分别需要 2 秒。
   * 关键点是 0、 3、 5、 13 和 15 秒。
   * 关键点的值将是它在关键点处的帧中围绕 y 轴的旋转。
   */
  const createCameraSweep = () => {
    const sweepKeys = [
      { frame: 0, value: 0 },
      { frame: 3 * frameRate, value: 0 },
      { frame: 5 * frameRate, value: Math.PI / 3 },
      { frame: 13 * frameRate, value: Math.PI / 3 },
      { frame: 15 * frameRate, value: 0 },
    ]
    const sweep = new Animation(
      'sweep',
      'rotation.y',
      frameRate,
      Animation.ANIMATIONTYPE_FLOAT,
      Animation.ANIMATIONLOOPMODE_CONSTANT
    )
    sweep.setKeys(sweepKeys)
    return sweep
  }

  /**
   * 让光线变亮变暗
   * 灯光的强度会有所不同。这需要一系列聚光灯的数组。
   * 灯的关键点是保持关闭到 7 秒，在 10 秒达到全强度，直到 14 秒熄灭。
   */
  const createLightDimmer = () => {
    const dimmerKeys = [
      { frame: 0, value: 0 },
      { frame: 7 * frameRate, value: 0 },
      { frame: 10 * frameRate, value: 1 },
      { frame: 14 * frameRate, value: 1 },
      { frame: 15 * frameRate, value: 0 },
    ]
    const lightDimmer = new Animation(
      'dimmer',
      'intensity',
      frameRate,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    )
    lightDimmer.setKeys(dimmerKeys)
    return lightDimmer
  }

  /** 运行剪辑 */
  const createRunClip = (rotate, move, hinge, sweep, lightDimmer) => {
    scene.beginDirectAnimation(camera, [rotate, move], 0, 25 * frameRate, false)
    scene.beginDirectAnimation(hinge, [sweep], 0, 25 * frameRate, false)
    scene.beginDirectAnimation(spotLights[0], [lightDimmer], 0, 25 * frameRate, false)
  	scene.beginDirectAnimation(spotLights[1], [lightDimmer.clone()], 0, 25 * frameRate, false)
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

  const sphere = createSphere()
  setSphereList(sphere)
  createSpotLight(sphereList)

  const door = createDoor()
  const hinge = createHinge(door)

  const rotate = createCameraRotate()

  const move = createCameraMove()

  const sweep = createCameraSweep()

  const lightDimmer = createLightDimmer()

  createRunClip(rotate, move, hinge, sweep, lightDimmer)
  createBackground()

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