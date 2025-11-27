<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <div>使用Oimo</div>
    <canvas v-if="isRunning" id="collisionBall" class="stage"></canvas>
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
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  OimoJSPlugin,
  PhysicsImpostor
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

 let sceneResources: any, adt: any
const max = 10
const y = 20

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
  const ele = document.getElementById("collisionBall") as any

  ele.addEventListener('wheel', function(event: any) {
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
  scene.enablePhysics(
    new Vector3(0, -9.81, 0),
    new OimoJSPlugin()
  )

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(120, 50, 120))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene)
    return light
  }

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
    adt = AdvancedDynamicTexture.CreateFullscreenUI('UI')

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

  const createGround = () => {
    const mat = new StandardMaterial('ground', scene)
    const wood = new Texture('/images/wood.jpg', scene)
    mat.diffuseTexture = wood
    mat.specularColor = Color3.Black()

    const ground = MeshBuilder.CreateBox('box', { size: 200 }, scene)
    ground.position.y = 0
    ground.position.x = 0
    ground.scaling.y = 0.01
    ground.material = mat
    ground.physicsImpostor = new PhysicsImpostor(
      ground,
      PhysicsImpostor.BoxImpostor, // 使用盒子形物理代理
      {
        mass: 0, // 物体的质量设置为 0
        restitution: 0.7 // 弹性（或称为恢复系数），范围从 0（无弹性，即完全非弹性碰撞）到 1（完全弹性碰撞）
      },
      scene
    )
  }

  const randomNumber = (min, max) => {
    if (min === max) {
      return min
    }
    const random = Math.random()
    return random * (max - min) + min
  }

  const getPosition = (y) => {
    return new Vector3(randomNumber(-50, 50), y, randomNumber(-50, 50))
  }

  const createSpheres = () => {
    const allSphere: any = []
    const sphere = MeshBuilder.CreateSphere('s', { diameter: 8 }, scene)
    sphere.isVisible = false
    for (let index = 0; index < max; index ++) {
      const clone = sphere.clone(`index_${index}`)
      clone.isVisible = true
      const ran = Math.random()
      const startY = Math.random() * 10
      const dis = y + (ran > 0.5 ? startY : startY * -1)
      clone.position = getPosition(dis)

      clone.physicsImpostor = new PhysicsImpostor(
        clone,
        PhysicsImpostor.SphereImpostor, // 使用球形物理代理
        {
          mass: 50, // 物体的质量设置为 1
          restitution: 0.9 // 弹性（或称为恢复系数），范围从 0（无弹性，即完全非弹性碰撞）到 1（完全弹性碰撞）
        },
        scene
      )

      // applyImpulse 方法对物理代理对象施加一个冲量
      // 这个方法接受两个 Vector3 参数：
      // 第一个是冲量的方向和大小
      // 第二个是施加冲量的点

      // 假设forceVector是 (1, 2, -1)
      // contactPoint是 (1, 2, 0)，这指定了在 clone 网格对象的局部空间中施加冲量的具体位置
      // 冲量大小是根号6 ---> 1^2+2^2+(-1)^2 再开根号
      // 冲量的方向是通过反余弦公式得出(arccos(1 / 根号6), arccos(2 / 根号6), arccos(-1 / 根号6))
      
      clone.physicsImpostor.applyImpulse(
        new Vector3(0, -20, 0), // 冲量的方向和大小
        new Vector3(0, 0, 0) // 在物体上的受力点位置
      )

      const mat = new StandardMaterial('mat', scene)
      mat.diffuseColor = new Color3(0.4, 0.4, 0.4)
      mat.specularColor = new Color3(0.4, 0.4, 0.4)
      mat.emissiveColor = Color3.Red()
      clone.material = mat 

      allSphere.push(clone)
    }

    return allSphere
  }


  const runAnimate = () => {
    engine.runRenderLoop(function() {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }

  createGround()
  const allSphere = createSpheres()
  createAxis()
  createGui()
  createLight()
  runAnimate()

  scene.registerBeforeRender(function() {
    allSphere.forEach(function(obj) {
      if (obj.position.y < -10) {
        const ran = Math.random()
        const startY = Math.random() * 10
        const dis = y + (ran > 0.5 ? startY : startY * -1)
        obj.position = getPosition(dis)
        // 重置球体的速度
        obj.physicsImpostor.setLinearVelocity(new Vector3(0, 0, 0))
      }
    })
  })

  return {
    scene,
    engine
  }
}

const destroy = () => {
  if (sceneResources) {
    sceneResources.engine.stopRenderLoop() 
    sceneResources.engine.dispose()
    sceneResources.scene.dispose()
    sceneResources = null
  }
  if (adt) {
    adt.dispose()
    adt = null
  }
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>
