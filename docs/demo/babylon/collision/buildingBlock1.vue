<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="buildingBlock1" class="stage"></canvas>
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
  HavokPlugin,
  Matrix,
  PhysicsAggregate,
  PhysicsShapeType,
  PointerEventTypes
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

  const ele = document.getElementById("buildingBlock1") as any

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
  camera.setPosition(new Vector3(7, 7, 0))

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

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(0, 1, 0), scene)
    light.intensity = 0.7
    return light
  }

  const createGround = () => {
    const mat = new StandardMaterial('ground', scene)
    const wood = new Texture('/images/wood.jpg', scene)
    mat.diffuseTexture = wood
    mat.specularColor = Color3.Black()

    const ground = MeshBuilder.CreateGround('ground', { width: 10, height: 10	}, scene)
    ground.material = mat
    new PhysicsAggregate(ground, PhysicsShapeType.BOX, {
      mass: 0
    }, scene)
  }

  const assetsBody: any = []

  const createBlock = (x, y, z, i, color) => {
    const block: any = MeshBuilder.CreateBox('block_' + i, { width: 0.2, height: 1.8, depth: 0.2 }, scene)
    block.position.set(x, y, z)
    block.checkCollisions = true
    block.material = new StandardMaterial('blockMat', scene)
    block.material.diffuseColor = color
    const aggregate = new PhysicsAggregate(block, PhysicsShapeType.BOX, {
      mass: 10,
      restitution: 0.25
    }, scene)
    aggregate.body.disablePreStep = false
    return {
      asset: block,
      aggregate: aggregate
    }
  }

  const createSphere = () => {
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 1 }, scene)
    sphere.position.set(2, 0.5, 0)
    sphere.checkCollisions = true
    const aggregate = new PhysicsAggregate(sphere, PhysicsShapeType.SPHERE, {
      mass: 10,
      restitution: 0.25, // 弹性系数
      friction: 0.5 // 摩擦力
    }, scene)
    aggregate.body.disablePreStep = false
    return {
      asset: sphere,
      aggregate: aggregate
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
  createGround()
  runAnimate()

  const sphere: any = createSphere()
  assetsBody.push(sphere)

  for (let i = 0; i < 5; i++) {
    const block = createBlock(i * -1, 0.9, 0, i, Color3.Red())
    assetsBody.push(block)
  }

  scene.onPointerObservable.add((pointerInfo) => {
    if (pointerInfo.type === PointerEventTypes.POINTERDOWN) {
      // 使用 scene.pickWithRay 获取鼠标点击的射线与球体的交点
      // 如果点击到球体，pickResult.hit 为 true，pickResult.pickedPoint 是点击位置
      const pickResult: any = scene.pickWithRay(scene.createPickingRay(scene.pointerX, scene.pointerY, Matrix.Identity(), camera))
      if (pickResult.hit && pickResult.pickedMesh === sphere.asset) {
        // 计算施加力的方向：从球体中心到点击位置的方向
        const impulseDirection = pickResult.pickedPoint.subtract(sphere.asset.position).normalize()
        // 力的大小
        const impulse = impulseDirection.scale(-20) 
        sphere.aggregate.body.applyImpulse(impulse, pickResult.pickedPoint)
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
