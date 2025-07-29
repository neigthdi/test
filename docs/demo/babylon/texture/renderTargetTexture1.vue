<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="renderTargetTexture1" class="stage"></canvas>
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
  Color4,
  Color3,
  DirectionalLight,
  HemisphericLight,
  MeshBuilder,
  RenderTargetTexture,
  StandardMaterial,
  Animation
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources, adt

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
  const ele = document.getElementById("renderTargetTexture1") as any

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
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 0, 20))

  const createLight = () => {
    const light1 = new DirectionalLight('dir01', new Vector3(0, 0, -1), scene)
    const light2 = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return [light1, light2]
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
    const groundMat = new StandardMaterial('ground')
    groundMat.diffuseColor = new Color3(0.2, 0.5, 0.6)
    const ground = MeshBuilder.CreateGround('ground', {
      width: 20,
      height: 20
    })
    ground.material = groundMat
  }

  const runAnimation = (mesh) => {
    let animation
    const keys: any = []
    keys.push({
      frame: 0,
      value: new Vector3(0, 0, 0)
    })
    keys.push({
      frame: 45,
      value: new Vector3(2, 0, 0)
    })
    keys.push({
      frame: 90,
      value: new Vector3(0, 0, 0)
    })
    animation = new Animation(
      'boxAnimation',
      'position',
      60, // 帧率
      Animation.ANIMATIONTYPE_VECTOR3,
      Animation.ANIMATIONLOOPMODE_CYCLE
    )
    mesh.animations.push(animation)
    animation.setKeys(keys)
    scene.beginAnimation(mesh, 0, 90, true)
  }

  const createTexture = () => {
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 4 }, scene)
    const mat = new StandardMaterial('mat', scene)
    mat.emissiveColor = new Color3(0.2, 0.3, 0.4)
    sphere.material = mat
    runAnimation(sphere)
    
    // 调整相机视角，确保球体在纹理中是圆形
    const rtCamera = new ArcRotateCamera('rtCamera', 0, 0, 10, Vector3.Zero(), scene)
    rtCamera.setTarget(Vector3.Zero())
    rtCamera.setPosition(new Vector3(0, 0, 20))

    const renderTargetTexture = new RenderTargetTexture('renderTargetTexture', { width: 256, height: 256 }, scene) as any
    renderTargetTexture.renderList.push(sphere)
    renderTargetTexture.camera = rtCamera
    scene.customRenderTargets.push(renderTargetTexture)

    const m = new StandardMaterial('m', scene)
    m.diffuseTexture = renderTargetTexture
    m.backFaceCulling = false // 确保双面渲染

    const plane = MeshBuilder.CreatePlane('plane', { size: 4 }, scene)
    plane.material = m
    plane.position = new Vector3(0, 4, 0)
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
  createGround()
  createTexture()
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
