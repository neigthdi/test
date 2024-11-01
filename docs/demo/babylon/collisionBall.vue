<template>
  <div>
    <div>fps: {{ fps }}</div>
    <canvas id="collisionBall" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue'

// import './index_oimo.js'

import { pkg } from './index.js'
const {
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
} = pkg


const fps = ref(0)
const max = 10
const y = 20

const initScene = async() => {
  const ele = document.getElementById("collisionBall") as HTMLCanvasElement

  ele.addEventListener('wheel', function(event) {
    // 根据需要处理滚动
    // 例如，可以修改相机的半径或角度
    event.preventDefault(); // 阻止默认滚动行为
  });

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
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(120, 50, 120))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
    return light
  }

  const createAxis = () => {
    const axisX = MeshBuilder.CreateLines(
      'axisX', {
        colors: [ new Color4(1, 1, 1, 1), new Color4(1, 0, 0, 1) ],
        points: [ new Vector3(0, 0, 0), new Vector3(200, 0, 0) ]
      },
      scene
    )

    const axisY = MeshBuilder.CreateLines(
      'axisY', {
        colors: [
          new Color4(1, 1, 1, 1),
          new Color4(0, 1, 0, 1)
        ],
        points: [
          new Vector3(0, 0, 0),
          new Vector3(0, 200, 0)
        ]
      },
      scene
    )

    const axisZ = MeshBuilder.CreateLines(
      'axisZ', {
        colors: [
          new Color4(1, 1, 1, 1),
          new Color4(0, 0, 1, 1)
        ],
        points: [
          new Vector3(0, 0, 0),
          new Vector3(0, 0, 200)
        ]
      },
      scene
    )
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
    for(let index = 0; index < max; index ++) {
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
}

onMounted(async() => {
  await nextTick()
  initScene()
})
</script>
