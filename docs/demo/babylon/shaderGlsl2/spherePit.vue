<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="spherePit" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  HemisphericLight,
  MeshBuilder,
  Color4,
  ArcRotateCamera,
  Vector3,
  Color3,
  Effect,
  ShaderMaterial,
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources: any, adt: any

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
  const ele = document.getElementById("spherePit") as any

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

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 1
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(2, 2, 2))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(40, 40, 40), scene)
    light.direction = new Vector3(1.0, 0.0, 1.0)
    light.diffuse = new Color3(1.0, 0.95, 0.8)
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


  // 顶点着色器
  Effect.ShadersStore['customsVertexShader'] = `
    precision highp float;
    attribute vec3 position; // 顶点局部坐标
    attribute vec3 normal; // 顶点法线
    attribute vec2 uv; // 纹理坐标
    uniform mat4 world; // 世界变换矩阵
    uniform mat4 worldViewProjection; // MVP矩阵
    uniform vec3 crater1Pos; // 陨石坑1中心方向（世界空间）
    uniform float crater1Radius; // 陨石坑1角度半径（弧度）
    uniform float crater1Depth; // 陨石坑1深度
    uniform vec3 crater2Pos;
    uniform float crater2Radius;
    uniform float crater2Depth;
    
    varying vec3 vWorldPos; // 传递到片段着色器的世界坐标
    varying vec3 vWorldNormal; // 世界法线
    varying vec2 vUV; // UV坐标
    varying float vCraterDepth; // 传递陨石坑深度（用于着色）
    
    void main() {
      // 将顶点变换到世界空间。法线变换时 w=0 避免平移影响
      vec4 worldPos4 = world * vec4(position, 1.0); // 将局部坐标乘以世界矩阵得到4D世界坐标，vec4(position, 1.0)中的1.0表示这是一个点（不是向量），需要接受平移变换
      vec3 worldPos = worldPos4.xyz; // 提取xyz分量得到3D世界坐标
      vec3 worldNormal = normalize((world * vec4(normal, 0.0)).xyz); // 将法线变换到世界空间并归一化，vec4(normal, 0.0)中的0.0表示这是向量（法线），只接受旋转不接受平移
      
      // 计算角距离
      vec3 normPos = normalize(worldPos); // 球面方向向量（单位长度）。将世界坐标归一化为单位向量，球面上任意点的方向向量长度必须为1，这是球面几何计算的基础
      // dot(normPos, crater1Pos)
      // 计算两个单位向量的点积
      // 	normPos 是当前顶点的方向向量（从球心指向顶点，已归一化）
      // 	crater1Pos 是陨石坑中心的方向向量（从球心指向坑中心，已归一化）
      // 原理：两个单位向量的点积等于它们夹角的余弦值：dot(a,b) = |a||b|cosθ = cosθ
      // 结果：得到一个 [-1.0, 1.0] 范围内的值，表示 cos(θ)
      // 为什么必须这样做：虽然理论上两个归一化向量的点积必定在 [-1,1] 之间，但浮点数计算存在精度误差，结果可能略微超出这个范围（如 1.0000001 或 -1.0000001）
      // ********************************************
      // 通过angle来判断，angle越是小，就接近坑的中心，坑就越深
      float dot1 = clamp(dot(normPos, crater1Pos), -1.0, 1.0); // 计算顶点方向与陨石坑1方向的点积并限制范围，dot(a,b)=|a||b|cosθ，归一化后点积=cosθ。clamp防止浮点误差超出[-1,1]导致acos返回NaN
      float angle1 = acos(dot1); // 将cos(θ1)转换为角度θ1，acos是反余弦函数，得到弧度值。需要角度值才能与半径比较
      
      float dot2 = clamp(dot(normPos, crater2Pos), -1.0, 1.0);
      float angle2 = acos(dot2);
      
      // 创建尖锐的陨石坑形状
      float crater1 = 1.0 - smoothstep(0.0, crater1Radius, angle1); // 计算第一个陨石坑的影响因子，smoothstep(0, r, θ)在θ∈[0,r]时从0平滑过渡到1。1.0 -反转：中心为1（最深），边缘为0（无影响）
      crater1 = pow(crater1, 1.5); // 更陡峭的边缘【对影响因子做幂运算使其更陡峭】，pow(x, 1.5)是非线性函数，x∈[0,1]时结果衰减更快，模拟陨石坑的碗状结构
      crater1 = crater1 * crater1Depth; // 乘以深度系数，将归一化的[0,1]影响因子转换为实际深度值
      
      float crater2 = 1.0 - smoothstep(0.0, crater2Radius, angle2);
      crater2 = pow(crater2, 1.5);
      crater2 = crater2 * crater2Depth;
      
      float totalDepth = max(crater1, crater2); // 取两个坑的最大深度，两个坑可能重叠，max()确保只显示更深的那个，避免深度叠加导致奇怪形状
      vec3 displaced = worldPos - worldNormal * totalDepth; // 沿法线方向向内位移顶点，worldNormal * totalDepth是位移向量，减法实现凹陷。必须用世界法线才能在正确方向位移
      
      gl_Position = worldViewProjection * vec4(displaced, 1.0); // 计算最终裁剪空间坐标
      
      vWorldPos = displaced; // 将位移后的世界坐标传递给片段着色器，片段着色器需要基于最终位置计算视线方向
      vWorldNormal = worldNormal; // 将世界法线传递给片段着色器，片段着色器需要法线计算光照
      vUV = uv; // 将UV坐标传递给片段着色器，用于生成表面噪声
      vCraterDepth = totalDepth; // 将总深度传递给片段着色器，片段着色器需要知道该像素是否在坑内及深度，用于颜色变暗
    }
  `

  // 片段着色器 - 增强光照和颜色对比
  Effect.ShadersStore['customsFragmentShader'] = `
    precision highp float;
    varying vec3 vWorldPos;
    varying vec3 vWorldNormal;
    varying vec2 vUV;
    varying float vCraterDepth;
    
    void main() {
      // 基础颜色 - 坑内更暗
      vec3 baseColor = vec3(0.65, 0.63, 0.58); // 定义基础颜色为月灰色，灰色调模拟月球表面岩石
      baseColor *= (1.0 - vCraterDepth * 0.8); // 根据深度变暗颜色，vCraterDepth在平面处为0，坑中心最大。乘以(1-深度)实现坑内更暗的视觉效果

      vec3 viewDir = normalize(-vWorldPos); // 计算视线方向（从像素指向相机），高光和边缘光都需要视线方向。相机在原点，所以-vWorldPos是视线向量
      
      // 主光源（方向光）
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0)); // 定义主光源方向并归一化，方向光模拟太阳光，归一化确保长度1用于点积计算
      float diff = max(dot(vWorldNormal, lightDir), 0.0) * 0.7 + 0.3; // 计算Lambert漫反射，dot(法线, 光线)得cosθ，即光照强度。max(...,0)避免背面负值。*0.7+0.3添加30%环境光使暗部不完全黑
      
      // 镜面高光【这里不需要镜面高光，只是写出来，作为知识储备】
      // vec3 reflectDir = reflect(-lightDir, vWorldNormal); // 计算光线反射方向，reflect函数需要入射方向（从光源指向表面），所以用-lightDir
      // float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0); // 计算Phong镜面高光强度，dot(视线,反射)得余弦值，pow(...,32)使高光更锐利集中。指数越大光斑越小
      // vec3 specular = vec3(0.4, 0.4, 0.4) * spec; // 计算最终高光颜色，灰色高光模拟岩石表面的微弱反光
      vec3 specular = vec3(0.0, 0.0, 0.0);

      // 边缘光
      float rim = 1.0 - max(dot(viewDir, vWorldNormal), 0.0); // 计算边缘光强度，视线与法线垂直时dot=0，rim=1（边缘最亮），实现Fresnel效应
      rim = pow(rim, 3.0); // 对边缘光做幂运算，pow使边缘光更集中在极边缘，避免大面积过亮
      vec3 rimColor = vec3(0.2, 0.2, 0.3) * rim; // 计算最终边缘光颜色，蓝灰色边缘光增强立体感
      
      // 表面噪声
      float noise = fract(sin(dot(vUV, vec2(12.9898, 78.233))) * 43758.5453); // 生成伪随机噪声，dot(vUV, vec2(...))将2D UV映射到1D，sin*...*fract是经典的Hash函数，无需纹理即可生成噪声
      baseColor += (noise - 0.5) * 0.1; // 将噪声添加到基础色（±5%扰动），noise-0.5使扰动对称，*0.1控制强度。模拟岩石表面纹理
      
      vec3 color = baseColor * diff + specular + rimColor; // 合并所有颜色贡献，基础色×漫反射=主要明暗，+高光=反光，+边缘光=轮廓增强
      gl_FragColor = vec4(color, 1.0); 
    }
  `


  const createSphere = () => {
    const sphere = MeshBuilder.CreateSphere('sphere', {
      diameter: 2,
      segments: 128
    }, scene)

    const craterMaterial = new ShaderMaterial('craterMat', scene, {
      vertex: 'customs',
      fragment: 'customs',
    }, {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['world', 'worldViewProjection']
    })

    // 陨石坑参数
    craterMaterial.setVector3('crater1Pos', new Vector3(0.3, 0.4, 0.5).normalize())
    craterMaterial.setFloat('crater1Radius', 0.5)
    craterMaterial.setFloat('crater1Depth', 0.2)

    craterMaterial.setVector3('crater2Pos', new Vector3(-0.4, -0.3, 0.4).normalize())
    craterMaterial.setFloat('crater2Radius', 0.4)
    craterMaterial.setFloat('crater2Depth', 0.25)

    sphere.material = craterMaterial
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
  createAxis()
  createGui()
  runAnimate()
  createSphere()

  scene.registerBeforeRender(function() {
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

<style lang='scss' scoped>

</style>