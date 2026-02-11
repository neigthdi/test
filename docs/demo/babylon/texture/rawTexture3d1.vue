<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="rawTexture3d_1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  Effect,
  ArcRotateCamera,
  Vector3,
  RawTexture3D,
  HemisphericLight,
  MeshBuilder,
  ShaderMaterial,
  Texture,
} from 'babylonjs'

let sceneResources: any

const fps = ref(0)
const isRunning = ref(false)
let time = 0

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

const generateWorleyNoise3D = (width: any, height: any, depth: any) => {
  // RGBA 4通道，计算3D纹理数据总字节数
  const size = width * height * depth * 4 

  // 创建无符号8位整型数组，每个元素范围 0-255，正好对应颜色通道值
  // 用于存储最终的 Worley 噪声灰度图数据（R=G=B=灰度，A=255）
  const data = new Uint8Array(size)

  // 随机特征点生成器，使用经典哈希技巧，将3D坐标转换为伪随机数
  // 将3D坐标转换为 [0,1) 范围内的伪随机浮点数
  function randomF(p: any) {
    // 12.9898、78.233、53.53：经典的"魔法数"，来自图形学领域常用哈希
    // 这些无理数确保不同维度变化足够独立，减少相关性
    // 43758.5453：放大系数，增加小数部分的变化丰富度
    // % 1 + 1) % 1：双重取模处理负数情况，确保结果始终在 [0,1) 范围内
    return ((Math.sin(p[0] * 12.9898 + p[1] * 78.233 + p[2] * 53.53) * 43758.5453) % 1 + 1) % 1
  }

  // 生成3D随机向量，每个分量都在 [0,1) 范围内
  // 通过给种子加上不同的偏移量，确保三个分量相互独立
  function randomV3(p: any) {
    return [
      randomF([p[0], p[1], p[2]]),
      randomF([p[0] + 1.0, p[1] + 2.0, p[2] + 3.0]),
      randomF([p[0] + 4.0, p[1] + 5.0, p[2] + 6.0])
    ]
  }

  // ============================================
  // 构建特征点网格（Worley噪声的核心数据结构）
  // ============================================
  // 3D 空间被划分成 gridSize × gridSize × gridSize 的网格
  // 每个网格单元内生成1个随机偏移的特征点
  // 最终噪声值 = 当前像素到最近特征点的距离
  // 
  // 网格结构示意（2D简化版，gridSize=4）：
  //   
  //   Y
  //   ↑
  // 4 ┼────┼────┼────┼────┼          ← 第4行网格线（gridSize边界，不包含）
  //   │ ●  │ ●  │ ●  │ ●  │  
  // 3 ┼────┼────┼────┼────┼          ← 第3行网格线，特征点Y范围 [3, 4)
  //   │ ●  │ ●  │ ●  │ ●  │  
  // 2 ┼────┼────┼────┼────┼          ← 第2行网格线，特征点Y范围 [2, 3)
  //   │ ●  │ ●  │ ●  │ ●  │  
  // 1 ┼────┼────┼────┼────┼          ← 第1行网格线，特征点Y范围 [1, 2)
  //   │ ●  │ ●  │ ●  │ ●  │  
  // 0 └────┴────┴────┴────┴──→ X     ← 第0行网格线（起始），特征点Y范围 [0, 1)
  //   0    1    2    3    4
  //
  // ● = 特征点，位于每个网格单元内的随机位置
  // 每个网格单元：X∈[0,1), [1,2), [2,3), [3,4)  共4个区间
  // ---------------------------------------------------------------
  // 每个维度的网格划分数量，共 4×4×4 = 64 个网格单元
  const gridSize = 4

  // 存储所有特征点的数组
  const featurePoints = []

  /// 遍历所有网格单元，生成特征点
  // 三重循环顺序：Z → Y → X（符合3D纹理的内存布局习惯）
  for (let z = 0; z < gridSize; z++) { // z: 0, 1, 2, 3
    for (let y = 0; y < gridSize; y++) { // y: 0, 1, 2, 3
      for (let x = 0; x < gridSize; x++) { // x: 0, 1, 2, 3
        // 种子乘以 1.5 是为了增加相邻网格种子的差异，避免模式过于规律
        const seed = [x * 1.5, y * 1.5, z * 1.5]

        // 生成 [0,1) 范围内的随机偏移
        const offset = randomV3(seed)

        // ============================================
        // 特征点坐标计算详解
        // ============================================
        // 循环变量 x, y, z 的取值范围是：0, 1, 2, 3（共4个值）
        // offset[0], offset[1], offset[2] 的范围是：[0, 1)（不包含1）
        // 
        // 因此特征点坐标范围：
        //   X: [0+0, 3+1) = [0, 4)
        //   Y: [0+0, 3+1) = [0, 4)
        //   Z: [0+0, 3+1) = [0, 4)
        // 
        // 举例验证：
        //   当 x=3（最后一个网格），offset[0]=0.999...
        //   特征点X = 3 + 0.999... = 3.999... < 4
        //
        // 所以特征点坐标范围是 [0, 4)
        featurePoints.push({
          x: x + offset[0], // 特征点最终X坐标：网格整数坐标 + 随机偏移
          y: y + offset[1],
          z: z + offset[2]
        })
      }
    }
  }

  let index = 0
  // ============================================
  // 计算每个体素（像素）的 Worley 噪声值
  // ============================================
  // 三重循环遍历3D纹理的所有体素位置
  // 例如 32×32×32 = 32768 个体素，每个体素需要计算到64个特征点的距离
  for (let z = 0; z < depth; z++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {

        // 将像素坐标归一化到特征点网格空间 [0, gridSize)
        // 例如：x ∈ [0, 32)，归一化后 u ∈ [0, 4)
        const u = (x / width) * gridSize
        const v = (y / height) * gridSize
        const w = (z / depth) * gridSize

        // ============================================
        // Worley噪声核心算法：查找最近特征点的距离
        // ============================================
        // 需要遍历所有64个特征点，计算欧几里得距离，保留最小值
        // 更优雅的写法（现代 JS）：let minDist = Infinity
        // 初始化一个足够大的数，确保第一次比较就能被替换，这是经典的"哨兵值"技巧
        let minDist = 999999.0

        // 遍历所有特征点，计算当前像素到每个特征点的距离
        for (let fp of featurePoints) {

          // 计算各轴向上的直接距离（绝对值）
          let dx = Math.abs(u - fp.x)
          let dy = Math.abs(v - fp.y)
          let dz = Math.abs(w - fp.z)

          // ============================================
          // 关键：周期性边界处理（实现无缝平铺 tiling）
          // ============================================
          // 原理：3D纹理在三个轴向上都是周期性的（首尾相连）
          // gridSize = 4 是周期边界
          // 如果直接距离超过了半个网格（gridSize/2 = 2.0），
          // 说明走"跨边界"的路径更近
          //
          // 为什么边界是4？
          // 因为特征点分布在 [0, 4) 范围内，这是一个周期
          // 像素坐标 u, v, w 也被归一化到 [0, 4)
          // 所以周期边界就是 4
          //
          // 直观理解（1D简化）：
          // ※※※※※※※※※※※【也可以想象成类似一个球体。从0.1到3.9；还是先从0.1到0，再从0到3.9；这两个方法哪个近】
          //   周期范围 [0, 4)，半周期 = 2
          //   
          //   像素在 0.1，特征点在 3.9：
          //   直接距离：|0.1 - 3.9| = 3.8（绕远路）
          //   跨边界距离：4 - 3.8 = 0.2（走捷径）
          //
          //   [0]←0.1        3.9→[4]  ← 注意：边界是4
          //   └────┘          └──┘
          //     ↑_____________↑
          //        0.2（跨边界捷径）
          if (dx > gridSize * 0.5) { // 直接距离 > 2.0？
            // 使用跨边界距离：4 - dx
            dx = gridSize - dx
          }
          if (dy > gridSize * 0.5) dy = gridSize - dy
          if (dz > gridSize * 0.5) dz = gridSize - dz

          // 计算真正的欧几里得距离（3D空间直线距离）
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
          // 保留最小距离（Worley噪声的定义：到最近特征点的距离）
          if (dist < minDist) {
            minDist = dist
          }
        }

        // ============================================
        // 将距离转换为灰度值
        // ============================================
        // 归一化：将距离映射到 [0, 1] 范围
        // gridSize * 0.8 = 3.2：经验缩放因子
        // 理论最大距离（考虑周期性边界后）：空间对角线的一半
        //   最大单轴距离 = 2（半周期）
        //   最大3D距离 = √(2² + 2² + 2²) = √8 ≈ 2.828
        // 使用 3.2 作为分母让大部分噪声值落在有效范围内，增强对比度
        const intensity = Math.min(minDist / (gridSize * 0.8), 1.0)

        // 转换为 8-bit 灰度值 [0, 255]
        const gray = Math.floor(intensity * 255)

        data[index++] = gray // R
        data[index++] = gray // G
        data[index++] = gray // B
        data[index++] = 255 // A
      }
    }
  }

  return data
}


const initScene = async () => {
  const ele = document.getElementById("rawTexture3d_1") as any

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

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 30, 30))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene)
    return light
  }

  // ============================================
  // 3D Worley Noise Shader
  // ============================================
  Effect.ShadersStore['worley3DVertexShader'] = `
    precision highp float;
    
    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;
    
    uniform mat4 worldViewProjection;
    uniform mat4 world;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vUV3D;  // 3D纹理坐标
    
    void main(void) {
      vec4 worldPos = world * vec4(position, 1.0);
      vPosition = worldPos.xyz;
      vNormal = normalize(mat3(world) * normal);
      
      // 使用世界坐标作为3D纹理坐标，可以缩放调整密度
      vUV3D = worldPos.xyz * 0.15;
      
      gl_Position = worldViewProjection * vec4(position, 1.0);
    }
  `

  Effect.ShadersStore['worley3DFragmentShader'] = `
    precision highp float;
    precision highp sampler3D;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vUV3D;
    
    // 3D纹理采样器 - 必须使用 sampler3D
    uniform sampler3D worleyTexture;
    uniform vec3 cameraPosition;
    uniform float time;
    
    void main(void) {
      // 采样3D Worley噪声纹理
      // 使用 fract 实现周期性重复
      vec3 uvw = fract(vUV3D + vec3(time * 0.05));
      
      // 使用 texture 函数采样3D纹理 (WebGL 2.0)
      float noise = texture(worleyTexture, uvw).r;
      
      // 添加一些颜色变化
      vec3 baseColor = vec3(0.2, 0.4, 0.8); // 蓝色基调
      vec3 highlightColor = vec3(0.9, 0.95, 1.0); // 白色高光
      
      // 基于噪声混合颜色
      vec3 color = mix(baseColor, highlightColor, noise);
      
      // 简单的光照计算
      vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
      float diff = max(dot(vNormal, lightDir), 0.0);
      vec3 ambient = vec3(0.3);
      
      // 边缘发光效果（基于噪声）
      float rim = 1.0 - max(dot(vNormal, normalize(cameraPosition - vPosition)), 0.0);
      rim = pow(rim, 3.0) * noise * 2.0;
      
      gl_FragColor = vec4(color * (diff + ambient) + vec3(rim), 1.0);
    }
  `

  const createWorleyTexture3D = () => {
    const textureSize = 32 // 3D纹理尺寸 (32x32x32)
    const noiseData = generateWorleyNoise3D(textureSize, textureSize, textureSize)

    // 使用 RawTexture3D 创建 3D 纹理
    // 参数: data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType
    const worleyTexture3D = new RawTexture3D(
      noiseData,
      textureSize, // width
      textureSize, // height
      textureSize, // depth
      Engine.TEXTUREFORMAT_RGBA,
      scene,
      false, // generateMipMaps
      false, // invertY
      Texture.TRILINEAR_SAMPLINGMODE,
      Engine.TEXTURETYPE_UNSIGNED_BYTE // 8位无符号整数（0-255），Uint8Array 数据；TEXTURETYPE_UNSIGNED_INTEGER，32位无符号整数
    )

    // 这三个属性控制 3D 纹理在三个轴向上的寻址/包装模式，决定当纹理坐标超出 [0, 1] 范围时如何采样。
    // wrapU	X 轴	水平方向（左右）	2D 纹理的 U
    // wrapV	Y 轴	垂直方向（上下）	2D 纹理的 V
    // wrapR	Z 轴	深度方向（前后）	3D 纹理特有
    // 配合 shader：
    //   vec3 uvw = fract(vUV3D + vec3(time * 0.05));  // fract 将坐标限制在 [0,1]
    // 实际上 fract() 已经处理了越界，但 wrap 模式确保万一有浮点误差或直接使用 uvw > 1.0 时，纹理会无缝重复而不是截断或报错。
    // ---------------------------------------------------------------
    // // 1. WRAP - 重复/平铺（你的设置）
    // // 坐标 1.2 → 采样 0.2 的位置，形成无缝循环
    // Texture.WRAP_ADDRESSMODE
    // // 2. CLAMP - 边缘拉伸
    // // 坐标 1.2 → 采样 1.0 的边缘像素，边缘拉伸效果
    // Texture.CLAMP_ADDRESSMODE  
    // // 3. MIRROR - 镜像重复
    // // 坐标 1.2 → 采样 0.8 的位置（反向），1.8 → 0.2，形成镜像
    // Texture.MIRROR_ADDRESSMODE
    worleyTexture3D.wrapU = Texture.WRAP_ADDRESSMODE // X: 左右重复
    worleyTexture3D.wrapV = Texture.WRAP_ADDRESSMODE // Y: 上下重复  
    worleyTexture3D.wrapR = Texture.WRAP_ADDRESSMODE // Z: 前后重复

    const worley3DMaterial = new ShaderMaterial('worley3D', scene, {
      vertex: 'worley3D',
      fragment: 'worley3D'
    }, {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['worldViewProjection', 'world', 'cameraPosition', 'time'],
      samplers: ['worleyTexture'], // 必须声明 3D 纹理采样器
    })

    // 设置 3D 纹理到材质
    worley3DMaterial.setTexture('worleyTexture', worleyTexture3D)
    worley3DMaterial.setFloat('time', 0)


    // 球体
    const sphere = MeshBuilder.CreateSphere('sphere', {
      diameter: 10,
      segments: 64
    }, scene)
    sphere.position.x = -6
    sphere.material = worley3DMaterial

    // 圆环结
    const torus = MeshBuilder.CreateTorusKnot('torus', {
      radius: 4,
      tube: 1.5,
      radialSegments: 128,
      tubularSegments: 64
    }, scene)
    torus.position.x = 6
    torus.material = worley3DMaterial

    // 盒子
    const box = MeshBuilder.CreateBox('box', {
      size: 7,
    }, scene)
    box.position.z = -8
    box.rotation.y = Math.PI / 4
    box.material = worley3DMaterial

    return { worley3DMaterial, box, torus }
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
  const { worley3DMaterial, box, torus } = createWorleyTexture3D()
  runAnimate()
  
  scene.registerBeforeRender(() => {
    time += engine.getDeltaTime() * 0.001
    worley3DMaterial.setFloat('time', time)

    // 缓慢旋转物体以展示3D效果
    box.rotation.y = time * 1.2
    torus.rotation.x = time * 0.3
    torus.rotation.y = time * 0.5
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