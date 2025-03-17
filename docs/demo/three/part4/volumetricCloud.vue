<template>
  <div>
    <div>使用了RawShaderMaterial</div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="volumetricCloud" class="stage"></div>
  </div>
</template>

<script lang="ts" setup>

import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  Color,
  AmbientLight,
  Vector3,
  Texture,
  PointLight,
  Data3DTexture,
  RedFormat,
  LinearFilter,
  BoxGeometry,
  RawShaderMaterial,
  BackSide,
  GLSL3,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


const requestID = ref<any>()
const isRunning = ref(false)
let sceneResources

// 一个哈希表，用于生成梯度向量的索引
// 这个数组包含 256 个随机排列的整数，范围在 [0, 255] 之间
// 这些值是固定的，用于确保噪声的伪随机性
const pointList = [
  151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10,
  23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87,
  174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
  133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208,
  89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5,
  202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119,
  248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232,
  178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249,
  14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205,
  93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
]

// pointList 数组的长度扩展到 512，后 256 项是前 256 项的重复
// 这样做的目的是为了简化哈希计算，避免数组越界问题
for (let i = 0; i < 256; i ++) {
  pointList[ 256 + i ] = pointList[ i ]
}

// 用于生成一个平滑的衰减曲线
// 输入参数 t 是一个介于 [0, 1] 的值
// 输出值也是介于 [0, 1]，但经过一个多项式函数调整，使其在接近 0 和 1 时变化更平滑
// 公式 t * t * t * (t * (t * 6 - 15) + 10) 是一个五次多项式，用于生成平滑的插值曲线
const fade = (t) => {
  return t * t * t * (t * (t * 6 - 15) + 10)
}

// 线性插值（Linear Interpolation）的缩写
// 输入参数 t（插值因子，介于 [0, 1]）
// 输入参数 a 和 b（需要插值的两个值）
// 输出值是 a 和 b 之间的线性插值结果，公式为 a + t * (b - a)
// 当 t = 0 时，输出为 a；当 t = 1 时，输出为 b；当 t = 0.5 时，输出为 a 和 b 的中点
const lerp = (t, a, b) => {
  return a + t * (b - a)
}

// 用于计算梯度值的函数
// 输入参数 hash 是一个哈希值，用于确定梯度方向
// 输入参数 x、y、z 是三个坐标值，用于计算梯度方向
// 根据哈希值的低 4 位（h），选择不同的梯度方向
// u 和 v 是根据 h 的值选择的坐标分量
// 最终返回的值是梯度方向与点的坐标的点积，用于生成噪声值
const grad = (hash, x, y, z) => {
  const h = hash & 15 // 取哈希值的低 4 位
  const u = h < 8 ? x : y // 根据 h 的值选择 x 或 y
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z // 根据 h 的值选择 y 或 x 或 z
  return ((h & 1) === 0 ? u : -u) + ((h & 2) == 0 ? v : -v) // 计算梯度方向
}

class ImprovedNoise {
  // 输入参数 x, y, z 是噪声函数的坐标值
  noise(x, y, z) {
    const floorX = Math.floor(x), floorY = Math.floor(y), floorZ = Math.floor(z) // 取整

    const X = floorX & 255, Y = floorY & 255, Z = floorZ & 255 // 取整后的值对 255 取余

    // 计算点在立方体内的相对坐标
    x -= floorX
    y -= floorY 
    z -= floorZ
    const xMinus1 = x - 1, yMinus1 = y - 1, zMinus1 = z - 1

    // 使用 fade 函数计算衰减值 (u, v, w)，用于后续的平滑插值
    const u = fade(x), v = fade(y), w = fade(z)

    // pointList[X] 和 pointList[X + 1] 是当前立方体的两个 x 方向的哈希值
    // A 和 B 是当前立方体的两个 x 方向的哈希值加上 y 值
    // AA 和 AB 是 A 的两个 z 方向的哈希值
    // BA 和 BB 是 B 的两个 z 方向的哈希值
    // 通过哈希表 pointList 获取立方体的 8 个顶点
    // 通过立方体的 8 个顶点，计算梯度值，用于生成噪声值
    const A = pointList[ X ] + Y, 
          AA = pointList[ A ] + Z, 
          AB = pointList[ A + 1 ] + Z, 
          B = pointList[ X + 1 ] + Y, 
          BA = pointList[ B ] + Z, 
          BB = pointList[ B + 1 ] + Z


    // 使用 lerp 函数对梯度值进行多级插值：
    // 首先，对每个 x 方向的梯度值进行插值
    // 然后，对每个 y 方向的插值结果进行插值
    // 最后，对每个 z 方向的插值结果进行插值
    // grad 函数用于计算每个角的梯度值
    // x - 1, y - 1, z - 1 是相邻立方体的坐标，用于计算梯度值
    return lerp(
      w, 

      
      lerp(v, lerp(u, grad(pointList[ AA ], x, y, z), grad(pointList[ BA ], xMinus1, y, z)), lerp(u, grad(pointList[ AB ], x, yMinus1, z), grad(pointList[ BB ], xMinus1, yMinus1, z))),
      
      
      lerp(v, lerp(u, grad(pointList[ AA + 1 ], x, y, zMinus1), grad(pointList[ BA + 1 ], xMinus1, y, zMinus1)), lerp(u, grad(pointList[ AB + 1 ], x, yMinus1, zMinus1), grad(pointList[ BB + 1 ], xMinus1, yMinus1, zMinus1)))
    )
  }
}

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

const vertexShader = `
  in vec3 position;

  out vec3 vOrigin; // 射线的起点
  out vec3 vDirection; // 射线的方向
  
  uniform mat4 modelMatrix;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform vec3 cameraPos; // 相机在世界空间中的位置

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    
    // 计算射线的起点 vOrigin。通过将相机位置从世界空间变换到局部空间，得到射线的起点
    // inverse 是一个内置的 GLSL 函数，用于计算矩阵的逆矩阵。它接受一个矩阵作为输入，并返回该矩阵的逆矩阵
    vOrigin = vec3(inverse(modelMatrix) * vec4(cameraPos, 1.0)).xyz;

    // 计算射线的方向 vDirection，即顶点位置与射线起点的差值
    vDirection = position - vOrigin;
    
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  precision highp float;
  precision highp sampler3D;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  in vec3 vOrigin;
  in vec3 vDirection;

  out vec4 color;

  uniform vec3 base; // 基础颜色
  uniform sampler3D map; // 三维纹理采样器，用于采样体积数据

  uniform float threshold; // 阈值，用于控制体积渲染的密度范围
  uniform float range; // 范围，与阈值一起决定密度的可见区间
  uniform float opacity; // 不透明度，控制体积的透明度
  uniform float steps; // 步数，表示射线行进时的采样步数
  uniform float frame; // 帧数，用于实现动画效果

  // uint：无符号整数， 通常是一个 32 位无符号整数，其值的范围是从 0 到 4294967295，非常适合用于需要非负整数的场景，例如索引、计数器、随机数种子等
  // 在图形和计算着色器中，uint 常用于实现哈希函数、随机数生成器、循环计数等
  // 简单的哈希函数 wang_hash，用于生成随机数种子
  uint wang_hash(uint seed) {
    seed = (seed ^ 61u) ^ (seed >> 16u);
    seed *= 9u;
    seed = seed ^ (seed >> 4u);
    seed *= 0x27d4eb2du;
    seed = seed ^ (seed >> 15u);
    return seed;
  }

  // 基于哈希函数生成一个 [0, 1] 范围内的随机浮点数
  float randomFloat(inout uint seed) {
    return float(wang_hash(seed)) / 4294967296.0;
  }

  // 用于计算射线与一个轴对齐的包围盒（AABB）的交点范围 [t0, t1]
  // box_min 和 box_max 分别表示包围盒的最小和最大坐标
  // inv_dir 是射线方向的倒数，用于加速计算
  // t_min 和 t_max 分别表示射线进入和离开包围盒的时间
  //------------------------------------------------------------------------------
  // 函数 hitBox 是一个经典的射线与轴对齐包围盒的相交测试算法，通常称为 Slab Method。它的核心思想是：
  // 分别计算射线与包围盒在每个轴上的交点时间
  // 确定全局的交点范围 [t0, t1]
  // 如果 t0 <= t1，则射线与包围盒相交；否则不相交
  // 这种算法在光线追踪和体积渲染中非常常见，因为它简单且高效
  //------------------------------------------------------------------------------
  // 接收两个参数：
  // vec3 orig：射线的起点。
  // vec3 dir：射线的方向。
  // t0 和 t1 是最终的交点范围
  vec2 hitBox(vec3 orig, vec3 dir) {

    // 定义了包围盒的最小和最大顶点坐标：
    // box_min 是包围盒的最小角点，坐标为 (-0.5, -0.5, -0.5)
    // box_max 是包围盒的最大角点，坐标为 (0.5, 0.5, 0.5)
    const vec3 box_min = vec3(- 0.5);
    const vec3 box_max = vec3(0.5);

    // 计算射线方向的倒数 inv_dir，即 1.0 / dir
    // 这一步是为了在后续计算中避免重复的除法操作，提高效率
    vec3 inv_dir = 1.0 / dir;

    // 计算射线方向的倒数 inv_dir，即 1.0 / dir
    // 这一步是为了在后续计算中避免重复的除法操作，提高效率
    // 公式：t = (box_min - orig) / dir = (box_max - orig) / dir
    vec3 t_min_tmp = (box_min - orig) * inv_dir;
    vec3 t_max_tmp = (box_max - orig) * inv_dir;

    // 对于每个轴，确定射线进入和离开包围盒的时间范围：
    // t_min：取 t_min_tmp 和 t_max_tmp 的最小值，表示射线进入包围盒的时间
    // t_max：取 t_min_tmp 和 t_max_tmp 的最大值，表示射线离开包围盒的时间
    // 这一步确保了无论射线的方向如何，t_min 和 t_max 都表示正确的进入和离开时间
    vec3 t_min = min(t_min_tmp, t_max_tmp);
    vec3 t_max = max(t_min_tmp, t_max_tmp);

    // 从每个轴的交点时间中，计算全局的交点范围 [t0, t1]：
    // t0：取 t_min.x、t_min.y 和 t_min.z 的最大值，表示射线进入包围盒的最晚时间
    // t1：取 t_max.x、t_max.y 和 t_max.z 的最小值，表示射线离开包围盒的最早时间
    // 这一步确保了射线必须同时进入所有轴的范围，才能真正进入包围盒
    float t0 = max(t_min.x, max(t_min.y, t_min.z));
    float t1 = min(t_max.x, min(t_max.y, t_max.z));

    // 返回一个 vec2，表示射线与包围盒的交点范围 [t0, t1]
    // 如果 t0 > t1，则表示射线与包围盒不相交（即射线完全在包围盒的外部或内部）
    // 如果 t0 <= t1，则表示射线与包围盒相交，t0 和 t1 分别表示进入和离开的时间
    return vec2(t0, t1);
  }

  // 从三维纹理中采样密度值，只取红色通道（假设密度信息存储在红色通道）
  float sample1(vec3 p) {
    return texture(map, p).r;
  }

  // shading 用于计算简单的阴影效果，通过在采样点两侧采样并计算差值来模拟光照（用于在体积渲染中模拟光照效果）
  // 接收一个参数：
  // vec3 coord：表示当前采样点在体积数据中的坐标
  float shading(vec3 coord) {
    float step = 0.01; // 表示在体积数据中采样的步长（或偏移量）

    // 通过在当前采样点 coord 的两侧分别采样，并计算这两个采样点的密度差值来模拟阴影
    // 1、采样点的偏移：
    //   coord + vec3(-step)：表示在当前点的负方向上偏移 step 距离的采样点
    //   coord + vec3(step)：表示在当前点的正方向上偏移 step 距离的采样点
    //   这里假设 step 是一个很小的值，用于在当前点的局部范围内进行采样
    // 2、调用 sample1 函数：
    //   sample1(coord + vec3(-step))：在负方向的采样点处采样体积数据的密度值
    //   sample1(coord + vec3(step))：在正方向的采样点处采样体积数据的密度值
    //   sample1 函数通常从一个三维纹理（如体积纹理）中读取密度值，返回一个标量值
    // 3、计算密度差值：
    //   通过计算两个采样点的密度差值（sample1(coord + vec3(-step)) - sample1(coord + vec3(step))），可以得到一个表示阴影强度的值
    //   如果负方向的密度值大于正方向的密度值，说明光线在当前点的负方向上被遮挡，因此会产生阴影
    //   这种方法本质上是一种简单的数值微分，用于近似计算密度的梯度
    return sample1(coord + vec3(- step)) - sample1(coord + vec3(step));
  }

  void main() {
    vec3 rayDir = normalize(vDirection); // 射线的方向归一化
    vec2 bounds = hitBox(vOrigin, rayDir); // 计算射线与包围盒的交点范围

    if (bounds.x > bounds.y) discard; // 如果 t0 > t1，表示射线与包围盒不相交，直接丢弃

    bounds.x = max(bounds.x, 0.0); // 将 t0 限制在 [0, +∞] 范围内，确保交点范围的起始值不小于 0

    vec3 p = vOrigin + bounds.x * rayDir; // 计算射线与包围盒的交点坐标，即射线进入包围盒的起始点
    vec3 inc = 1.0 / abs(rayDir); // 计算射线在每个轴上的步长，用于加速采样
    float delta = min(inc.x, min(inc.y, inc.z)); // 计算最小的步长，用于控制采样密度
    delta /= steps; // 将步长 delta 除以 steps，用于控制采样密度，确保在每个轴上采样 steps 次

    // https://blog.demofox.org/2020/05/25/casual-shadertoy-path-tracing-1-basic-camera-diffuse-emissive/
    // 使用随机数种子生成一个随机偏移量，对起始点进行抖动，以减少采样带来的锯齿效应
    uint seed = uint(gl_FragCoord.x) * uint(1973) + uint(gl_FragCoord.y) * uint(9277) + uint(frame) * uint(26699); // 生成随机数种子
    vec3 size = vec3(textureSize(map, 0)); // 读取体积纹理的尺寸
    float randNum = randomFloat(seed) * 2.0 - 1.0; // 生成一个 [-1, 1] 范围内的随机数
    p += rayDir * randNum * (1.0 / size); // 对起始点进行抖动，减少采样带来的锯齿效应


    vec4 ac = vec4(base, 0.0); // 初始化累积颜色 ac，其中 base 是基础颜色，初始不透明度为 0

    for (float t = bounds.x; t < bounds.y; t += delta) {  // 从 t0 开始，逐步增加步长 delta，直到 t1（在射线与包围盒的交点范围内进行采样）

      float d = sample1(p + 0.5); // 在当前采样点采样密度值

      d = smoothstep(threshold - range, threshold + range, d) * opacity; // 使用 smoothstep 函数将密度值映射到 [0, opacity] 范围内，根据阈值和范围控制密度的可见性

      float col = shading(p + 0.5) * 3.0 + ((p.x + p.y) * 0.25) + 0.2; // 计算当前点的颜色值，结合阴影效果和一些简单的光照，用于模拟光照效果

      ac.rgb += (1.0 - ac.a) * d * col; // 根据密度值和颜色值，计算累积颜色 ac

      ac.a += (1.0 - ac.a) * d; // 根据密度值，计算累积不透明度 ac.a

      if (ac.a >= 0.95) break; // 如果不透明度超过 0.95，表示累积颜色已经足够饱和，可以提前结束采样

      p += rayDir * delta; // 更新采样点的位置，根据射线方向和步长 delta

    }

    color = ac; // 将累积颜色赋值给片元颜色 color

    if ( color.a == 0.0 ) discard; // 如果片元颜色的不透明度为 0，直接丢弃
  }
`


const initScene = async() => {
  const ele = document.getElementById('volumetricCloud') as HTMLElement
  const wrapDomStyle = getComputedStyle(ele)
  const width = parseInt(wrapDomStyle.width, 10)
  const height = parseInt(wrapDomStyle.height, 10)

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(30, width / height, 1, 3000)
  camera.position.set(0, 0, 10)
  camera.rotation.set(0, 0, 0)
  scene.add(camera)
  
  const renderer: any = new WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    alpha: true
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(new Color('#4584b4'), 1)
  ele.appendChild(renderer.domElement)
  
  // 添加 OrbitControls
  const createOrbitControls = () => {
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true
  }

  
  // 光
  const createLight = () => {
    const ambient = new AmbientLight(0xadadad)
    scene.add(ambient)

    const lightRightBottom = new PointLight(0x0655fd, 5, 0)
    lightRightBottom.position.set(0, 100, -200)
    scene.add(lightRightBottom)
  }


  // THREE.RawShaderMaterial 是 Three.js 中的一个材质类，允许开发者使用自定义的 WebGL 着色器（GLSL）来渲染几何体。与 THREE.ShaderMaterial 不同，RawShaderMaterial 不会自动添加任何内置的 attributes 或 uniforms，因此开发者需要手动编写完整的顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码。
  // 特点
  // 完全自定义：RawShaderMaterial 提供了最大的灵活性，开发者可以完全控制顶点和片元的处理过程。
  // 手动设置精度：与 ShaderMaterial 不同，RawShaderMaterial 需要在 GLSL 代码中手动设置浮点数的精度（如 precision mediump float;）。
  // 适合高级用户：由于需要手动管理所有着色器细节，RawShaderMaterial 更适合需要高度定制化着色器行为的高级用户。
  // 使用方法
  // 以下是一个简单的 RawShaderMaterial 使用示例：
  // JavaScript
  // 复制
  // const material = new THREE.RawShaderMaterial({
  //   vertexShader: `
  //     attribute vec3 position;
  //     uniform mat4 modelViewMatrix;
  //     uniform mat4 projectionMatrix;

  //     void main() {
  //       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //     }
  //   `,
  //   fragmentShader: `
  //     precision mediump float;
  //     void main() {
  //       gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色
  //     }
  //   `
  // });
  // 适用场景
  // 需要高度定制化着色器行为的场景。
  // 当现有的 ShaderMaterial 或其他内置材质无法满足需求时。
  // 对性能有较高要求的场景，可以通过自定义着色器减少不必要的计算。
  // 与 ShaderMaterial 的区别
  // ShaderMaterial 会自动添加一些内置的 attributes 和 uniforms，而 RawShaderMaterial 不会。
  // ShaderMaterial 自动处理浮点数精度，而 RawShaderMaterial 需要手动设置。
  // 通过使用 THREE.RawShaderMaterial，开发者可以实现复杂的渲染效果，如自定义光照模型、动画效果、纹理处理等。
  const createCloud = () => {
    let i = 0 // 用于索引 data 数组的变量，初始化为 0
    const size = 128 // 定义了三维纹理的尺寸，这里是一个 128×128×128 的立方体
    const scale = 0.05 // 噪声的缩放因子，用于控制噪声的频率
    const data = new Uint8Array(size * size * size) // 一个 Uint8Array，用于存储纹理数据。每个像素值是一个 8 位无符号整数，范围是 [0, 255]
    const perlin = new ImprovedNoise() // 用于生成 Perlin 噪声
    const vector = new Vector3() // THREE.Vector3 对象，用于计算每个点的向量

    // 遍历三维空间中的每个点 (x, y, z)
    for (let z = 0; z < size; z++) {
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          // vector.set(x, y, z)：将向量的坐标设置为 (x, y, z)
          // .subScalar(size / 2)：将向量的每个分量减去 size / 2，使向量的中心位于 (size / 2, size / 2, size / 2)
          // .divideScalar(size)：将向量的每个分量除以 size，归一化到单位立方体
          // .length()：计算向量的长度（欧几里得距离）
          // 1.0 - ...：计算点到中心的距离的倒数，用于生成一个球形衰减效果
          const d = 1.0 - vector.set(x, y, z).subScalar(size / 2).divideScalar(size).length()


          // perlin.noise(x * scale / 1.5, y * scale, z * scale / 1.5)：生成 Perlin 噪声值，输入坐标经过缩放
          // 128 + 128 * ...：将噪声值映射到 [0, 255] 范围内
          // * d * d：应用球形衰减效果，使噪声值在中心附近更亮，向外逐渐变暗
          // data[i]：将计算结果存储到 data 数组中
          data[i] = (128 + 128 * perlin.noise(x * scale / 1.5, y * scale, z * scale / 1.5)) * d * d

          
          // 索引变量 i 自增，用于存储下一个数据点
          i++
        }
      }
    }

    const data3dTexture = new Data3DTexture(data, size, size, size)
    data3dTexture.format = RedFormat
    data3dTexture.minFilter = LinearFilter
    data3dTexture.magFilter = LinearFilter
    data3dTexture.unpackAlignment = 1
    data3dTexture.needsUpdate = true

    const geometry = new BoxGeometry(10, 10, 10)

    const materials = new RawShaderMaterial({
      glslVersion: GLSL3,
      uniforms: {
        base: {
          value: new Color(0x798aa0)
        },
        map: {
          value: data3dTexture
        },
        cameraPos: {
          value: new Vector3()
        },
        threshold: {
          value: 0.25
        },
        opacity: {
          value: 0.25
        },
        range: {
          value: 0.1
        },
        steps: {
          value: 100
        },
        frame: {
          value: 0
        }
      },
      vertexShader,
      fragmentShader,
      side: BackSide,
      transparent: true
    })

    const mesh = new Mesh(geometry, materials)
    mesh.position.x = 0
    mesh.position.y = 0
    mesh.position.z = 0
    scene.add(mesh)

    return mesh
  }


  createLight()
  const mesh = createCloud()

  const runAnimate = () => {
    mesh.material.uniforms.cameraPos.value.copy(camera.position)
    mesh.rotation.y = -performance.now() / 7500
    mesh.material.uniforms.frame.value++

    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
  }
  
  runAnimate()
  
  const controls = createOrbitControls()

  return {
    renderer,
    scene,
    controls,
  }
}

const destroy = () => {
  if (sceneResources) {
    sceneResources.scene.clear()
    sceneResources.scene.traverse((child) => {
      if (child.geometry) child.geometry?.dispose()
      if (child.material) {
        if (child.material.map) child.material.map?.dispose()
        child.material?.dispose()
      }
    })
    if (sceneResources.scene.background) {
      if (sceneResources.scene.background instanceof Texture) {
        sceneResources.scene.background?.dispose()
      }
    }
    sceneResources.renderer?.dispose()
    sceneResources.renderer.forceContextLoss()
    sceneResources.controls?.dispose()

    cancelAnimationFrame(requestID.value)

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