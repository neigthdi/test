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
  const size = width * height * depth * 4 // RGBA
  const data = new Uint8Array(size)

  // 随机特征点生成器
  function randomF(p: any) {
    return ((Math.sin(p[0] * 12.9898 + p[1] * 78.233 + p[2] * 53.53) * 43758.5453) % 1 + 1) % 1
  }

  function randomV3(p: any) {
    return [
      randomF([p[0], p[1], p[2]]),
      randomF([p[0] + 1.0, p[1] + 2.0, p[2] + 3.0]),
      randomF([p[0] + 4.0, p[1] + 5.0, p[2] + 6.0])
    ]
  }

  // 生成特征点网格
  // 3D 空间被划分成 4×4×4 的网格：
  // 每个维度被分成4段，共64个小立方体
  //   X轴: [0,1] [1,2] [2,3] [3,4]
  //   Y轴: [0,1] [1,2] [2,3] [3,4]
  //   Z轴: [0,1] [1,2] [2,3] [3,4]
  // 每个小格子内有1个随机偏移的特征点
  // 噪声值 = 到最近特征点的距离
  const gridSize = 4 // 每个维度的网格数量
  const featurePoints = []

  for (let z = 0; z < gridSize; z++) {
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const seed = [x * 1.5, y * 1.5, z * 1.5]
        const offset = randomV3(seed)
        featurePoints.push({
          x: x + offset[0],
          y: y + offset[1],
          z: z + offset[2]
        })
      }
    }
  }

  let index = 0
  for (let z = 0; z < depth; z++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // 归一化坐标到 [0, gridSize]
        const u = (x / width) * gridSize
        const v = (y / height) * gridSize
        const w = (z / depth) * gridSize

        // 更优雅的写法（现代 JS）
        // let minDist = Infinity
        let minDist = 999999.0 // 初始最大值技巧，用于查找最小距离；确保第一次比较能成功，任何实际距离都会小于 999999，所以第一个 dist 一定会替换它

        // 查找最近的特征点（考虑边界环绕）
        for (let fp of featurePoints) {
          let dx = Math.abs(u - fp.x)
          let dy = Math.abs(v - fp.y)
          let dz = Math.abs(w - fp.z)

          // 考虑周期性边界
          if (dx > gridSize * 0.5) dx = gridSize - dx
          if (dy > gridSize * 0.5) dy = gridSize - dy
          if (dz > gridSize * 0.5) dz = gridSize - dz

          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
          if (dist < minDist) {
            minDist = dist
          }
        }

        // 归一化距离到 [0, 1] 并转换为灰度
        const intensity = Math.min(minDist / (gridSize * 0.8), 1.0)
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
    // -------------------------------------------------------------------------------
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