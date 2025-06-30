<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <div>使用Havok</div>
    <div class="flex space-between">
      <div>力度：{{ impulse }}</div>
      <div>{{ gameOver }}</div>
    </div>
    <canvas v-if="isRunning" id="billiardBall1" class="stage"></canvas>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color3,
  Color4,
  StandardMaterial,
  HemisphericLight,
  MeshBuilder,
  HavokPlugin,
  PhysicsAggregate,
  PhysicsShapeType,
  PointerEventTypes,
  Matrix,
  Animation,
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources
let cueAnimation: any = null
let timer: any = null
let invert = 1
let isAiming = false
let balls: any = []
let pockets: any = []
let clickBall: any = null
const impulse = ref(0)

const gameOver = ref('')

const fps = ref(0)
const isRunning = ref(false)

const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    sceneResources = await initScene()
    gameOver.value = ''
  } else {
    isRunning.value = false
    destroy()
  }
}


const initScene = async () => {

  const ele = document.getElementById("billiardBall1") as any

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

  const camera = new ArcRotateCamera('camera', 0, 0, 0, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 200
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 0, 10))

  const havokInstance = await (window as any).HavokPhysics()
  const havokPlugin = new HavokPlugin(true, havokInstance)
  scene.enablePhysics(new Vector3(0, -9.8, 0), havokPlugin)

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

  const createGui = async () => {
    const adt = AdvancedDynamicTexture.CreateFullscreenUI('UI')

    const xBox = MeshBuilder.CreateBox('x', { size: 1 }, scene)
    xBox.position = new Vector3(80, 0, 0)
    const xPanel = new StackPanel()
    xPanel.width = '20px'
    xPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
    xPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    const x = new TextBlock()
    x.text = 'X'
    x.height = '30px'
    x.color = 'red'
    adt.addControl(xPanel)
    xPanel.addControl(x)
    xPanel.linkWithMesh(xBox)

    const yBox = MeshBuilder.CreateBox('y', { size: 1 }, scene)
    yBox.position = new Vector3(0, 80, 0)
    const yPanel = new StackPanel()
    yPanel.width = '20px'
    yPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
    yPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    const y = new TextBlock()
    y.text = 'Y'
    y.height = '30px'
    y.color = 'green'
    adt.addControl(yPanel)
    yPanel.addControl(y)
    yPanel.linkWithMesh(yBox)

    const zBox = MeshBuilder.CreateBox('z', { size: 1 }, scene)
    zBox.position = new Vector3(0, 0, 80)
    const zPanel = new StackPanel()
    zPanel.width = '20px'
    zPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
    zPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    const z = new TextBlock()
    z.text = 'Z'
    z.height = '30px'
    z.color = 'blue'
    adt.addControl(zPanel)
    zPanel.addControl(z)
    zPanel.linkWithMesh(zBox)
  }

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(0, 1, 0), scene)
    light.intensity = 0.7
    return light
  }

  // 创建台球桌
  const createTable = () => {
    const table = MeshBuilder.CreateBox('table', {
      width: 10,
      height: 0.5,
      depth: 5
    }, scene)
    table.position.y = -0.25
    new PhysicsAggregate(table, PhysicsShapeType.BOX, {
      mass: 0,
      friction: 0.5,
      restitution: 0.1
    }, scene)
  }

  // 创建台球桌墙
  const createTableWall = () => {
    const wallPositions = [
      { width: 0.2, height: 0.2, depth: 4.2, x: -5, y: 0.1, z: 0 }, // 左墙
      { width: 0.2, height: 0.2, depth: 4.2, x: 5, y: 0.1, z: 0 }, // 右墙
      { width: 4.3, height: 0.2, depth: 0.2, x: -2.45, y: 0.1, z: 2.5 }, // 下墙-左
      { width: 4.3, height: 0.2, depth: 0.2, x: 2.45, y: 0.1, z: 2.5 }, // 下墙-右
      { width: 4.3, height: 0.2, depth: 0.2, x: -2.45, y: 0.1, z: -2.5 }, // 上墙-左
      { width: 4.3, height: 0.2, depth: 0.2, x: 2.45, y: 0.1, z: -2.5 }, // 上墙-右
    ]

    for (let i = 0; i < wallPositions.length; i++) {
      const info = wallPositions[i]
      const wall: any = MeshBuilder.CreateBox('wall' + i, {
        width: info.width,
        height: info.height,
        depth: info.depth
      }, scene)
      wall.position = new Vector3(info.x, info.y, info.z)
      wall.material = new StandardMaterial('wallMaterial' + i, scene)
      wall.material.diffuseColor = new Color3(0.6, 0.2, 0.4)

      new PhysicsAggregate(wall, PhysicsShapeType.BOX, {
        mass: 0,
        friction: 0.5,
        restitution: 0.1
      }, scene)
    }
  }
  
  // 创建球袋
  const createPocket = () => {
    const pocketPositions = [
      new Vector3(-4.9, 0, -2.4),
      new Vector3(4.9, 0, -2.4),
      new Vector3(-4.9, 0, 2.4),
      new Vector3(4.9, 0, 2.4),
      new Vector3(0, 0, -2.4),
      new Vector3(0, 0, 2.4)
    ]

    for (let i = 0; i < pocketPositions.length; i++) {
      const pocket: any = MeshBuilder.CreateCylinder('pocket' + i, {
        height: 0.5,
        diameter: 0.7,
        tessellation: 64
      }, scene)
      pocket.position = pocketPositions[i]
      pocket.position.y = -0.23
      pocket.material = new StandardMaterial('pocketMaterial' + i, scene)
      pocket.material.diffuseColor = new Color3(0.1, 0.1, 0.1)
      pockets.push(pocket)
    }
  }

  // 创建台球
  const createBall = () => {
    const ballColors = [
      new Color3(1, 1, 1), // 白球
      new Color3(0.8, 0.1, 0.1), // 红球
      new Color3(0.1, 0.8, 0.1), // 绿球
      new Color3(0.1, 0.1, 0.8), // 蓝球
      new Color3(0.8, 0.8, 0.1), // 黄球
      new Color3(0.8, 0.1, 0.8), // 紫球
      new Color3(0.1, 0.8, 0.8), // 青球
      new Color3(0.5, 0.5, 0.5) // 黑球
    ]

    for (let i = 0; i < 8; i++) {
      const ball: any = MeshBuilder.CreateSphere('ball' + i, {
        diameter: 0.3
      }, scene)
      ball.position.x = Math.cos(i * Math.PI / 4) * 1.5
      ball.position.z = Math.sin(i * Math.PI / 4) * 1.5
      ball.position.y = 0.25
      ball.material = new StandardMaterial('ballMaterial' + i, scene)
      ball.material.diffuseColor = ballColors[i]
      ball.customAggregate = new PhysicsAggregate(ball, PhysicsShapeType.SPHERE, {
        mass: 0.5,
        friction: 0.1,
        restitution: 0.8
      }, scene)
      balls.push(ball)
    }
  }

  // 创建球杆
  const createCue = () => {
    const cue: any = MeshBuilder.CreateCylinder('cue', {
      height: 6,
      diameterTop: 0.1,
      diameterBottom: 0.2,
      tessellation: 64
    }, scene)
    cue.rotation = new Vector3(Math.PI / 2, 0, 0)
    cue.material = new StandardMaterial('cueMaterial', scene)
    cue.material.diffuseColor = new Color3(0.8, 0.6, 0.4)

    const cueParent = MeshBuilder.CreateBox('box', {
      width: 0.5,
      height: 0.5,
      depth: 0.5
    }, scene)
    cueParent.position.set(0, 2, 0)

    cue.parent = cueParent
    cue.isVisible = false // 初始隐藏
    cueParent.isVisible = false // 初始隐藏

    return {
      cueParent,
      cue
    }
  }

  // 创建动画，90 / 60 = 1.5s，90帧，60帧每秒，1.5秒完成动画
  const createCueAnimation = (cueTemp, direction) => {
    const keys: any = []
    keys.push({
      frame: 0,
      value: cueTemp.position.clone()
    })
    keys.push({
      frame: 45,
      value: cueTemp.position.add(direction.scale(1)) // 沿着direction方向前进 1 单位
    })
    keys.push({
      frame: 90,
      value: cueTemp.position // 后退 1 单位（即返回原位置）
    })

    if(!cueAnimation) { // 防止重复new
      cueAnimation = new Animation(
        'boxAnimation',
        'position',
        60, // 帧率
        Animation.ANIMATIONTYPE_VECTOR3,
        Animation.ANIMATIONLOOPMODE_CYCLE
      )
      cueTemp.animations.push(cueAnimation)
    }

    cueAnimation.setKeys(keys)
   
    scene.beginAnimation(cueTemp, 0, 90, true) // 设置true为循环播放
  }

  const addImpulse = () => {
    timer = requestAnimationFrame(addImpulse)
    if (impulse.value >= 2.5) {
      invert = -1
    } else if (impulse.value <= 0) {
      invert = 1
    }

    impulse.value += 0.05 * invert
    impulse.value = Number(impulse.value.toFixed(2))
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
  createGui()
  createLight()
  createTable()
  createBall()
  createPocket()
  createTableWall()
  const { cue, cueParent } = createCue()
  runAnimate()


  scene.onPointerObservable.add(pointerInfo => {
    if (pointerInfo.type === PointerEventTypes.POINTERDOWN) {
      const pickedMesh = pointerInfo.pickInfo?.pickedMesh
      const hit = pointerInfo.pickInfo?.hit
      if (hit && pickedMesh?.name?.includes('ball')) {
        isAiming = true

        clickBall = pickedMesh

        // 禁止camera转动
        camera.detachControl()

        // 点击到球体的xyz位置
        const clickPosition = pickedMesh.position

        // 相机位置
        const cameraPosition = camera.position.clone()

        // 设置球杆的位置
        const middlePosition = cameraPosition.add(clickPosition).scale(0.5)
        cueParent.position = middlePosition

        // lookAt使得球杆对着球体
        cueParent.lookAt(clickPosition)

        // 计算看向球体的方向向量，click减去camera，方向指向click
        const direction = clickPosition.subtract(cameraPosition).normalize()
        
        cue.isVisible = true

        createCueAnimation(cueParent, direction)

        impulse.value = 0
        addImpulse()
      }
    }

    if (pointerInfo.type === PointerEventTypes.POINTERUP) {
      const pick: any = pointerInfo.pickInfo?.pickedMesh
      const hit = pointerInfo.pickInfo?.hit
      if (isAiming && hit && pick?.name === 'cue') {

        isAiming = false

        // 使用 scene.pickWithRay 获取鼠标点击的射线与球体的交点
        const x = scene.pointerX
        const y = scene.pointerY
        const m =  Matrix.Identity()
        const pickResult = scene.pickWithRay(scene.createPickingRay(x, y, m, camera))
        // 计算施加冲量的方向：从球体中心到点击位置的方向
        const impulseDirection = pickResult?.pickedPoint?.subtract(clickBall.position).normalize()
        const resultImpulse = impulseDirection?.scale(-impulse.value)
        clickBall.customAggregate.body.applyImpulse(resultImpulse, pickResult?.pickedPoint)
      }

      // 开启camera转动
      camera.attachControl()

      cue.isVisible = false

      cancelAnimationFrame(timer)
      timer = null
    }
  })

  // 游戏逻辑
  scene.registerBeforeRender(function() {
  	// 检查球是否落入球袋
  	for (let i = 0; i < pockets.length; i++) {
  		for (let j = 0; j < balls.length; j++) {
  			const distance = BABYLON.Vector3.Distance(pockets[i].position, balls[j].position)
  			if (distance < 0.5) {
  				balls[j].dispose()
  				balls.splice(j, 1)
  				j--
  			}
  		}
  	}

  	// 检查游戏是否结束
  	if (balls.length === 0) {
      gameOver.value = '游戏结束'
  	}
  })

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
  balls = []
  pockets = []
  cueAnimation = null
  clickBall = null
  impulse.value = 0
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>
