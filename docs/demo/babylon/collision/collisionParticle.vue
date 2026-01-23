<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <div>使用sphere.intersectsMesh(particle, true)检测碰撞</div>
    <canvas v-if="isRunning" id="collisionParticle" class="stage"></canvas>
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
  Color3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  SolidParticleSystem
} from 'babylonjs'

let sceneResources: any

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
  const ele = document.getElementById("collisionParticle") as any

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

  const camera = new ArcRotateCamera('camera', Math.PI / 4, 0, 150, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(50, 300, 20))

  let k = 0.0
  let tempPos = Vector3.Zero()
  let tempNormal = Vector3.Zero()
  let tempDot = 0.0
  let sign = 0
  let sphereAltitude = 40.0

  const speed = 1.9
  const cone = 0.3
  const gravity = -speed / 100
  const restitution = 0.88
 

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene)
    return light
  }

  const createGround = () => {
    const groundMaterial = new StandardMaterial("groundMaterial", scene)
    groundMaterial.diffuseTexture = new Texture('/images/wood.jpg')
    const ground = MeshBuilder.CreateGround(
      'gd', {
        width: 1000.0,
        height: 1000.0
      },
      scene
    )
    ground.material = groundMaterial
    return ground
  }

  const createSphere = () => {
    const matSphere = new StandardMaterial('ms', scene)
    matSphere.diffuseColor = Color3.Blue()
    const sphere = MeshBuilder.CreateSphere(
     's', { diameter: 8 }, scene
    )
    sphere.material = matSphere
    sphere.position.y = 35
    return sphere
  }

  const createBox = () => {
    const matBox = new StandardMaterial('ms', scene)
    matBox.diffuseColor = Color3.Red()
    const box = MeshBuilder.CreateBox(
      'b', {
        size: 2
      },
      scene
    )
    box.material = matBox
    return box
  }

  const createSps = (ground, sphere) => {
    /** SolidParticleSystem允许创建由一个或多个基础网格模型组成的粒子云 */
    const sps: any = new SolidParticleSystem('sps', scene, {
      /** 启用了 particleIntersection，就可以使用任何固体粒子的 intersectsMesh() 方法来检查该粒子是否与目标网格相交 */
      particleIntersection: true
    })

    const box = createBox()
    sps.addShape(box, 200) // 添加200个box作为粒子
    box.dispose()
  
    const mesh = sps.buildMesh() // 调用 buildMesh() 方法来构建 SPS 网格
    mesh.position.y = 80.0
    mesh.position.x = -70.0
    sphereAltitude = mesh.position.y / 2.0
    sphere.position.y = sphereAltitude

    sps.isAlwaysVisible = true

    sps.initParticles = () => {
      for (let p = 0; p < sps.nbParticles; p++) {
        sps.recycleParticle(sps.particles[p])
      }
    }

    // recycleParticle方法允许设置一个粒子以便于回收利用
    // 可以帮助提高性能，尤其是在处理大量粒子时
    // 在updateParticle方法中定义粒子的行为，并在适当的时候调用recycleParticle来回收粒子
    sps.recycleParticle = (particle: any) => {
      particle.position.x = 0
      particle.position.y = 0
      particle.position.z = 0
      particle.velocity.x = Math.random() * speed
      particle.velocity.y = (Math.random() - 0.3) * cone * speed
      particle.velocity.z = (Math.random() - 0.5) * cone * speed

      particle.rotation.x = Math.random() * Math.PI
      particle.rotation.y = Math.random() * Math.PI
      particle.rotation.z = Math.random() * Math.PI

      particle.color.r = 0.0
      particle.color.g = 1.0
      particle.color.b = 0.0
      particle.color.a = 1.0
    }

    sps.updateParticle = (particle: any) => {
      if (particle.position.y + mesh.position.y < ground.position.y) {
        particle.color.r = 0.0
        particle.color.g = 1.0
        particle.color.b = 0.0
        sps.recycleParticle(particle)
      }

      particle.velocity.y += gravity
      particle.position.addInPlace(particle.velocity) // 更新粒子新位置

      // 使得每个粒子在三个轴（x、y、z）上以不同的速度和方向旋转，从而创造出更加复杂和动态的视觉效果。
      // 通过交替改变旋转方向，粒子的旋转看起来更加自然和随机。
      sign = particle.idx % 2 === 0 ? 1 : -1
      particle.rotation.z += 0.1 * sign
      particle.rotation.x += 0.05 * sign
      particle.rotation.y += 0.008 * sign

      // 判断发生碰撞
      if (particle.intersectsMesh(sphere)) {
        // 将粒子的位置向量与网格（mesh）的位置向量相加，结果存储在 tempPos 变量中，这样 tempPos 就包含了粒子的世界位置
        particle.position.addToRef(mesh.position, tempPos)
        // 从 tempPos 中减去球体的位置向量，结果存储在 tempNormal 变量中，这样 tempNormal 就包含了从球体中心指向粒子的向量，即球体的法线
        tempPos.subtractToRef(sphere.position, tempNormal)
        // 将 tempNormal 向量标准化（即长度变为1），这样它就成为了一个单位法线向量
        tempNormal.normalize()
        // 计算粒子速度向量与球体法线向量的点积，结果存储在 tempDot 变量中
        tempDot = Vector3.Dot(particle.velocity, tempNormal)


        /**
        在物理学中，当处理两个物体之间的碰撞时，特别是涉及到法线分量的速度时，一个常见的方法是使用分离公式。
        这个公式是从动量守恒和能量守恒原理推导出来的。
        给定：
        v 是粒子的原始速度向量。
        n 是碰撞物体的单位法线向量。
        v_new 是碰撞后粒子的速度向量。

        速度向量 v 可以分解为两个分量：

        平行于法线 n 的分量：v∥ = (v⋅n)n -------- v⋅n 是点积
        垂直于法线 n 的分量：v⊥ =  v − v∥

        当粒子与物体碰撞时，垂直于法线的分量保持不变，而平行于法线的分量被反转并根据恢复系数 e 进行缩放。
        恢复系数 e 描述了碰撞的弹性程度，其中 e=1 表示完全弹性碰撞，而 e=0 表示完全非弹性碰撞。

        碰撞后的速度向量 v_new  由下式给出：
        v_new = v⊥ - e(v⋅n)n
        */

        /**
        1、法线向量的计算：
        当粒子与球体碰撞时，首先计算从球体中心指向粒子的向量（tempNormal），并将其标准化为单位法线向量。
        这个向量表示了碰撞点的法线方向。

        2、速度在法线方向上的分量：
        接下来，计算粒子速度向量（particle.velocity）与单位法线向量（tempNormal）的点积（tempDot）。
        点积的结果给出了速度向量在法线方向上的分量的大小（正值或负值，取决于速度向量与法线向量的夹角是锐角还是钝角）。

        3、速度向量的更新：
        根据弹性碰撞的原理，速度向量在法线方向上的分量会完全反向，并且大小可能保持不变（在完全弹性碰撞中）。
        因此，从原始速度向量中减去其在法线方向上的分量（乘以2并反向，以符合反射定律），然后加上这个反向的分量乘以单位法线向量的相应分量。
        这样做实际上是将速度向量在其法线分量上进行了反射。
        数学上，这可以表示为：
        new_velocity_component=−original_velocity_component+2×dot_product×normal_component
        original_velocity_component 是速度向量在x、y或z方向上的原始分量
        dot_product 是速度向量与法线向量的点积
        normal_component 是单位法线向量在x、y或z方向上的分量

        4、恢复系数的应用：
        最后，将更新后的速度向量乘以恢复系数（restitution），以模拟碰撞后的能量损失。
        恢复系数是一个介于0和1之间的数，值越接近1表示碰撞越弹性。
        */

        /**
        假设一个图中
        有一个粒子（P）和一个球体（S）。粒子的速度向量（V）与球体的表面相交于点C，形成一个入射角θ。
        从球体中心S到粒子P的向量（SC）被标准化为单位法线向量（N）。
        速度向量V与法线向量N的点积给出了速度在法线方向上的分量。
        新的速度向量（V'）是通过将速度向量V在其法线分量上进行反射得到的。注意，这里的反射是基于二维平面的，但在三维中原理相同。
        最后，新的速度向量V'被乘以恢复系数，以模拟碰撞后的能量损失。
        */

        particle.velocity.x = -particle.velocity.x + 2.0 * tempDot * tempNormal.x
        particle.velocity.y = -particle.velocity.y + 2.0 * tempDot * tempNormal.y
        particle.velocity.z = -particle.velocity.z + 2.0 * tempDot * tempNormal.z

        // 将粒子速度向量乘以恢复系数（restitution），这是弹性碰撞的一个参数，用于模拟碰撞后的反弹效果
        particle.velocity.scaleInPlace(restitution)

        particle.color.r = 1.0
        particle.color.g = 0.0
        particle.color.b = 0.0
      }
    }
    
    return sps
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
  const ground = createGround()
  const sphere = createSphere()
  const sps = createSps(ground, sphere)
  sps.initParticles()

  runAnimate()

  scene.registerBeforeRender(function() {
    sps.particles.forEach(particle => {
      if (sphere.intersectsMesh(particle, true)) {
        console.log('collided')
      }
    })
    sps.setParticles()
    sphere.position.x = 20.0 * Math.sin(k)
    sphere.position.z = 10.0 * Math.sin(k * 6.0)
    sphere.position.y = 5.0 * Math.sin(k * 10) + sphereAltitude
    k += 0.01
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
