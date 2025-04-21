<template>
  <div>
    <div>
      <div class="flex space-between">
        <div>fps: {{ fps }}</div>
        <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
      </div>
    </div>
    <div style="position: relative;">
      <div id="customBox">
        <canvas v-if="isRunning" id="rpgDance" class="stage"></canvas>
      </div>
    </div>
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
  StandardMaterial,
  Color3,
  Color4,
  DirectionalLight,
  MeshBuilder,
  CubeTexture,
  Texture,
  ActionManager,
  ExecuteCodeAction,
  ImportMeshAsync
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  Control,
  TextBlock
} from 'babylonjs-gui'

const fps = ref(0)
const isRunning = ref(false)

const inputMap = {}
const isRightHandedSystem = false
let sceneResources

// 角色变量
const peopleSpeed = 0.2
const peopleSpeedBackwards = 0.06
const peopleRotationSpeed = 0.01
let animating = true
let walkAnim 
let walkBackAnim
let idleAnim
let sambaAnim

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
  const ele = document.getElementById("rpgDance") as any

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
  camera.panningSensibility = 200
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

    return [axisX, axisY, axisZ]
  }

  const createLight = () => {
    const light = new DirectionalLight('dir01', new Vector3(0, -1, -0.3), scene)
    light.position = new Vector3(20, 60, 30)
    return light
  }

  const createSkyBox = () => {
    const skybox = MeshBuilder.CreateBox('skyBox', { size: 150 }, scene)
    const skyboxMaterial = new StandardMaterial('skyBox', scene)
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.reflectionTexture = new CubeTexture('/images/skyBox2', scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
    skyboxMaterial.diffuseColor = new Color3(0, 0, 0)
    skyboxMaterial.specularColor = new Color3(0, 0, 0)
    skybox.material = skyboxMaterial
  }

  const createGround = () => {
    const ground = MeshBuilder.CreateGround('ground', {
      height: 150,
      width: 150,
      subdivisions: 150
    }, scene)
    const groundMaterial: any = new StandardMaterial('groundMaterial', scene)
    groundMaterial.diffuseTexture = new Texture('/images/wood.jpg', scene)
    groundMaterial.diffuseTexture.uScale = 30
    groundMaterial.diffuseTexture.vScale = 30
    groundMaterial.specularColor = new Color3(0.1, 0.1, 0.1)
    ground.material = groundMaterial
  }

  const createGuiTip = () => {
    const adt = AdvancedDynamicTexture.CreateFullscreenUI('UI')
    const instructions = new TextBlock()
    instructions.text = 'Move W,A,S,D keys, B for Samba, look with the mouse'
    instructions.color = 'white'
    instructions.fontSize = 16
    instructions.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
    instructions.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    adt.addControl(instructions)
  }

  const createActionManager = () => {
    scene.actionManager = new ActionManager(scene)
    scene.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, function(evt) {
      inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown'
    }))
    scene.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyUpTrigger, function(evt) {
      inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown'
    }))
  }

  const loaderPeople = async () => {
    const module = await ImportMeshAsync('/scenes/HVGirl.glb', scene)
    // meshes第0是root
    const people = module.meshes[0]

    // 将相机锁定在角色上
    camera.setTarget(people)

    // 缩小模型
    people.scaling.scaleInPlace(0.5)

    walkAnim = scene.getAnimationGroupByName('Walking')
    walkBackAnim = scene.getAnimationGroupByName('WalkingBack')
    idleAnim = scene.getAnimationGroupByName('Idle')
    sambaAnim = scene.getAnimationGroupByName('Samba')

    return people
  }

  const peopleAction = (people) => {
    let keyDown = false
    // 管理角色的动作，例如位置、方向
    if (inputMap['w']) {
      // 尝试移动mesh，并检测碰撞
      people.moveWithCollisions(people.forward.scaleInPlace(peopleSpeed))
      keyDown = true
    }
    if (inputMap['s']) {
      people.moveWithCollisions(people.forward.scaleInPlace(-peopleSpeedBackwards))
      keyDown = true
    }
    if (inputMap['a']) {
      people.rotate(Vector3.Up(), -peopleRotationSpeed)
      keyDown = true
    }
    if (inputMap['d']) {
      people.rotate(Vector3.Up(), peopleRotationSpeed)
      keyDown = true
    }
    if (inputMap['b']) {
      keyDown = true
    }

    // 管理要播放的动画
    if (keyDown) {
      if (!animating) {
        animating = true
        if (inputMap['s']) {
          // 倒着走
          walkBackAnim.start(true, 1.0, walkBackAnim.from, walkBackAnim.to, false)
        } else if (inputMap['b']) {
          // Samba!
          sambaAnim.start(true, 1.0, sambaAnim.from, sambaAnim.to, false)
        } else {
          // Walk
          walkAnim.start(true, 1.0, walkAnim.from, walkAnim.to, false)
        }
      }
    } else {
      if (animating) {
        // 没有按键按下时默认动画是空闲的
        idleAnim.start(true, 1.0, idleAnim.from, idleAnim.to, false)
        // 没有按键按下时停止除 idleAnim 之外的所有动画
        sambaAnim.stop()
        walkAnim.stop()
        walkBackAnim.stop()
        // 确保每个渲染循环只播放一次动画
        animating = false
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


  createAxis()
  createLight()
  createSkyBox()
  createGround()
  createGuiTip()
  createActionManager()
  const people = await loaderPeople()

  
  runAnimate()

  scene.onBeforeRenderObservable.add(() => {
    peopleAction(people)
  })
     
  return {
    scene,
    engine,
    camera
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