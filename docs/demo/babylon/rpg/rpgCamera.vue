<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="rpgCamera" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import 'babylonjs-loaders'
import {
  Engine,
  Scene,
  ArcRotateCamera,
  FreeCamera,
  Vector3,
  StandardMaterial,
  Color3,
  Color4,
  DirectionalLight,
  MeshBuilder,
  OimoJSPlugin,
  PhysicsImpostor,
  Texture,
  Viewport,
  ShadowGenerator,
  DeviceType,
  DeviceSourceManager
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources

const fps = ref(0)
const isRunning = ref(false)

const speed = 0.1
let isJump = false

const isRightHandedSystem = false

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
  const ele = document.getElementById("rpgCamera") as any

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
    const light = new DirectionalLight('dir01', new Vector3(0, -1, -0.3), scene)
    light.position = new Vector3(20, 60, 30)
    return light
  }

  const setScene = () => {
    scene.collesionEnabled = true
    scene.enablePhysics(
      new Vector3(0, -9.81, 0),
      new OimoJSPlugin()
    )
  }

  const setFirstCameraInfo = (firstCamera) => {
    firstCamera.attachControl(ele, true)

    firstCamera.applyGravity = true

    firstCamera.wheelPrecision = 30

    
    if (isRightHandedSystem) { // 右手坐标系
      firstCamera.setPosition(new Vector3(0, 20, 20))
    } else { // 左手坐标系
      firstCamera.setPosition(new Vector3(0, 20, -20))
    }

    // 最小缩放
    firstCamera.lowerRadiusLimit = 4

    // 最大缩放
    firstCamera.upperRadiusLimit = 20
    
    // 摄像机不能看到头顶
    // firstCamera.lowerBetaLimit = Math.PI / 6
    // firstCamera.upperBetaLimit = Math.PI / 2

    // 设置 camera.viewport = new Viewport(0, 0, 1, 1) 时，实际上是在告诉相机渲染整个画布
    firstCamera.viewport = new Viewport(0, 0, 1, 1)

    // 用于控制相机渲染哪些网格（meshes）的一个属性
    // 当多个相机同时激活时，layerMask 可以用来控制哪些网格应该被哪些相机渲染
    firstCamera.layerMask = 1

    // 会在出场以原来的角度为基础做偏转。
    // firstCamera.inertialBetaOffset = 0.01
    // firstCamera.inertialAlphaOffset = 0.05

    scene.activeCamera = firstCamera
    scene.activeCameras.push(firstCamera)
  }

  const createSecondCamera = () => {
    // 小地图相机，使用freeCamera作为测试
    // 如果地图面积很大，是不能显示全图的
    // 一般是把目标的position同步给secondCamera，跟随目标
    // 使用freeCamera，主要是查看到物体的jump效果
    const secondCamera = new FreeCamera('mini_map', new Vector3(0, 200, 0), scene)
    
    secondCamera.viewport = new Viewport(0, 0, 1, 1)

    secondCamera.layerMask = 2

    // 调整相机的位置
    secondCamera.setTarget(new Vector3(0, 0, 0))
    secondCamera.rotation.y = 0
    secondCamera.position.x = -100
    secondCamera.position.z = -32

    scene.activeCameras.push(secondCamera)

    return secondCamera
  }

  const createDeviceSourceManager = () => {
    // 添加键盘事件，控制人物行动
    const dsm = new DeviceSourceManager(engine)
    	// 添加检测事件
    dsm.onDeviceConnectedObservable.add(device => {
      console.log('device', device)
    })
    return dsm
  }

  const createGround = () => {
    const groundMat = new StandardMaterial('groundMat', scene)
    groundMat.diffuseTexture = new Texture('/images/wood.jpg')
    groundMat.specularColor = new Color3(0, 0, 0)
    groundMat.emissiveColor = new Color3(0.3, 0.3, 0.3)

    const ground = MeshBuilder.CreateGround('ground', {
      width: 100,
      height: 100,
      subdivisions: 4 // 表示地面被分割成多少个小正方形
    })
    ground.position.y = 0
    
    ground.material = groundMat
    ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.BoxImpostor, {
      mass: 0,
      friction: 0.0,
      restitution: 0 // 去掉碰撞反弹力
    }, scene)
    ground.receiveShadows = true
    ground.checkCollisions = true
    return ground
  }

  const createShadow = (light, mesh) => {
    const shadowGenerator: any = new ShadowGenerator(1024, light)
    shadowGenerator.addShadowCaster(mesh)
  }

  const createBox = (firstCamera) => {
    const box = MeshBuilder.CreateBox('box', {
      width: 2,
      height: 2,
      depth: 2
    }, scene)
    box.checkCollisions = true
    box.position.y = 0
    box.physicsImpostor = new PhysicsImpostor(box, PhysicsImpostor.BoxImpostor, {
      mass: 2,
      friction: 0.0, 
      restitution: 0 // 去掉碰撞反弹力
    }, scene)

    // 从高度落下
    box.position.y = 5

    const material = new StandardMaterial('material', scene)
    material.emissiveColor = new Color3(0, 0.58, 0.86)
    box.material = material

    // 如果在右手坐标系中，通过boxX、boxY、boxZ可以看出
    // box的x轴正方向指向左侧，boxZ的正方向指向前方
    const boxX = MeshBuilder.CreateLines("axisX", {  
        points: [new Vector3(0, 0, 0), new Vector3(3, 0, 0)],  
        colors: [new Color4(1, 0, 0, 1), new Color4(1, 0, 0, 1)]  
    }, scene)
    boxX.parent = box
    const boxY = MeshBuilder.CreateLines("axisX", {  
        points: [new Vector3(0, 0, 0), new Vector3(0, 3, 0)],  
        colors: [new Color4(0, 1, 0, 1), new Color4(0, 1, 0, 1)]  
    }, scene)
    boxY.parent = box
    const boxZ = MeshBuilder.CreateLines("axisX", {  
        points: [new Vector3(0, 0, 0), new Vector3(0, 0, 3)],  
        colors: [new Color4(0, 0, 1, 1), new Color4(0, 0, 1, 1)]  
    }, scene)
    boxZ.parent = box

   

    firstCamera.setTarget(box)
    return box
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
  const newLight = createLight()
  setScene()
  setFirstCameraInfo(camera)
  createSecondCamera()
  createGround()
  const box = createBox(camera)
  createShadow(newLight, box)
  const newDsm = createDeviceSourceManager()
  runAnimate()

  let upSpeed = 0
 
  scene.registerBeforeRender(() => {
    const firstCameraForwardRayPosition = camera.getForwardRay().direction
    const firstCameraForwardRayPositionWithoutY = new Vector3(firstCameraForwardRayPosition.x, 0, firstCameraForwardRayPosition.z)
    // // 物体的视角
    // // lookAt 方法的参数是一个目标位置，以及三个分别代表旋转的三个轴（X、Y、Z）的值。
    // // 在这里，后面的（0, 0, 0）分别代表绕X轴、Y轴和Z轴的旋转量，设置为0意味着不进行额外的旋转，只根据目标位置调整朝向。
    box.lookAt(box.position.add(firstCameraForwardRayPositionWithoutY), 0, 0, 0)
		
    const keyboard = newDsm.getDeviceSource(DeviceType.Keyboard)
    if (keyboard) {
      // 用于在本地坐标系（即对象的局部空间）中移动网格（Mesh）或其他变换节点（TransformNode）
      // locallyTranslate：移动 box 网格，沿 x 轴移动 x 单位，y 轴移动 y 单位，z 轴移动 z 单位
      if (keyboard.getInput(65) === 1) { // a
        const s = isRightHandedSystem ? -speed * -1 : -speed
        box.locallyTranslate(new Vector3(s, 0, 0))
      } else if (keyboard.getInput(87) === 1) { // w
        box.locallyTranslate(new Vector3(0, 0, speed))
      } else if (keyboard.getInput(83) === 1) { // s
        box.locallyTranslate(new Vector3(0, 0, -speed))
      } else if (keyboard.getInput(68) === 1) { // d
        const s = isRightHandedSystem ? speed * -1 : speed
        box.locallyTranslate(new Vector3(s, 0, 0))
      } else if (keyboard.getInput(74) === 1 && !isJump) { // j
        isJump = true
        box?.physicsImpostor?.applyImpulse(
          new Vector3(0, 5, 0),
          box.getAbsolutePosition()
        )
      } else if (keyboard.getInput(70) === 1) { // f
        // mesh.physicsImpostor.applyImpulse 方法用于向物理对象（在此例中为一个盒子，即 box）施加一个瞬时冲量（impulse）。
        // 这个冲量可以改变对象的速度，从而模拟现实世界中的力对物体的影响
        // 参数1、冲量向量，是一个 Vector3 对象，表示要施加的冲量的方向和大小。冲量是一个矢量，因此它既有大小（力的大小乘以时间），又有方向。
        // 参数2、世界坐标中的点，是一个 Vector3 对象，表示冲量应用在世界坐标中的哪个点上。
        upSpeed += 0.01
        box?.physicsImpostor?.applyImpulse(
          new Vector3(0, upSpeed, 0),
					box.getAbsolutePosition()
        )
      
      } else {
        if (box.position.y < 1) { // 用来限制防止jump的时候多次触发
          upSpeed = 0
          isJump = false
        }
      }
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
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>
