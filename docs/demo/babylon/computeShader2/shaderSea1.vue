<template>
  <div>
    <div>在海面模拟中，通常先在频域中生成海面的频谱（即不同频率波的振幅和相位信息）。这些频谱可以通过物理模型（如Phillips频谱或Pierson-Moskowitz频谱）生成。</div>
    <div>为了将这些频域信息转换为实际的海面高度（时域信息），需要使用离散傅里叶逆变换（IDFT）。通过IDFT，可以将频域中的复数振幅转换为时域中的海面高度。</div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/41455378">傅里叶系列(只看第一和第三)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/1913515900235153904">傅里叶系列(作为上面的第二节，j是复数i)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/64414956">fft海面模拟(一)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/64726720">fft海面模拟(二)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/65156063">fft海面模拟(三)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/208511211">详尽的快速傅里叶变换推导</a></div>
    <div><a target="_blank" href="/math/fft.html">蝶形变换的 W_[N_k]</a></div>
    <div>一、法向量没计算（关系到光的反射、左手坐标系和右手坐标系的叉积计算相反）</div>
    <div>二、泡沫没计算（雅可比行列式）</div>
    <div>三、未进行代码优化（1：一片漆黑，值太小；2：w的计算是否正确）</div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderSea1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  WebGPUEngine,
  Scene,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  Color4,
  ArcRotateCamera,
  Vector3,
  Color3,
  StandardMaterial,
  RawTexture,
  Constants,
  ComputeShader,
  UniformBuffer,
  Texture,
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources, adt
let uTime = 0.0

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
  const ele = document.getElementById("shaderSea1") as any

  ele.addEventListener('wheel', function(event) {
    // 根据需要处理滚动
    // 例如，可以修改相机的半径或角度
    event.preventDefault() // 阻止默认滚动行为
  })

  const engine: any = new WebGPUEngine(ele)
  await engine.initAsync()

  const scene = new Scene(engine)
  scene.useRightHandedSystem = false

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 1.5
  camera.panningSensibility = 8
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 560, -560))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(40, 40, 40), scene)
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

  const PI = 3.14159265358979323846
  const TWO_PI = 2 * PI
  const G = 9.8
  const IMG_SIZE = 128
  const logN = Math.log2(IMG_SIZE)
  const half = IMG_SIZE / 2

  // 复数乘法
  function complexMultiply(a, b) {
    return {
      x: a.x * b.x - a.y * b.y,  // 实部
      y: a.x * b.y + a.y * b.x   // 虚部
    }
  }
 
  // 色散关系函数
  function dispersion(k) {
    return Math.sqrt(G * vectorLength(k))
  }
 
  // 计算向量长度（模）
  function vectorLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y)
  }
 
  // 归一化向量
  function normalize(v) {
    const len = vectorLength(v)
    return { x: v.x / len, y: v.y / len }
  }
 
  // 点积计算
  function dot(a, b) {
    return a.x * b.x + a.y * b.y
  }
 
  // 快速随机值生成函数
  function randValueFast(uv, seed) {
    return fract(Math.sin(dot(uv, {x: 12.9898, y: 78.233}) + seed) * 43758.5453)
  }
 
  // fract函数
  function fract(x) {
    return x - Math.floor(x)
  }
 
  // 计算两个相互独立的高斯随机数
  function gauss(uv) {
    let u1 = randValueFast(uv, 1753.0)
    let u2 = randValueFast(uv, 3571.0)
    
    if (u1 < 1e-6) {
      u1 = 1e-6
    }
 
    const g1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(TWO_PI * u2)
    const g2 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(TWO_PI * u2)
 
    return { x: g1, y: g2 }
  }
 
  // 菲利普频谱计算，输入波数 K
  function phillips(K) {
    const W = { x: 1.0, y: -1.0 } // 风的方向向量
    const V = 10.0 // 风速
    const A = 10.0 // 振幅参数
    
    const L = V * V / G // 最大波长
    const L2 = L * L
    
    const kLen = Math.max(0.0001, vectorLength(K))
    const kLen2 = kLen * kLen
    const kLen4 = kLen2 * kLen2
 
    const K_norm = normalize(K)
    const W_norm = normalize(W)
    const dot_KW = dot(K_norm, W_norm)
 
    // 基础 Phillips 谱
    let phi = A * Math.exp(-1.0 / (kLen2 * L2)) / kLen4
 
    // 风向对齐项
    phi *= dot_KW * dot_KW
 
    // 仅保留与风向同方向的波
    if (dot_KW > 0.0) {
      phi *= V
    }
 
    // 衰减因子（减少长波）
    const l = 0.001 * L
    const kSqr = dot(K, K)
    phi *= Math.exp(l * l * -kSqr)
 
    return phi
  }

  function createXyzTexture (scene) {
    const xData = new Uint8Array(IMG_SIZE * IMG_SIZE * 4) // 无符号的8位整数数组。每个元素占用1个字节（8位）。可以用来表示像素值（在图像处理中，像素值通常是一个0到255的整数
    const yData = new Uint8Array(IMG_SIZE * IMG_SIZE * 4)
    const zData = new Uint8Array(IMG_SIZE * IMG_SIZE * 4)
    const fftData = new Uint8Array(IMG_SIZE * IMG_SIZE * 4)
    const fftK = new Float32Array(IMG_SIZE * IMG_SIZE * 4) // 32位浮点数数组。每个元素占用4个字节。常用于科学计算、图形渲染中需要小数精度的场景。
   
    for (let y = 0; y < IMG_SIZE; y++) {
      for (let x = 0; x < IMG_SIZE; x++) {
        const index = (x + y * IMG_SIZE) * 4
        const gaussValue1 = gauss({x: x + 3, y: y + 5})
        const gaussValue2 = gauss({x: x + 7, y: y + 11})

        const nx = x - IMG_SIZE / 2
        const ny = y - IMG_SIZE / 2

        const K = {
          x: TWO_PI * nx / IMG_SIZE,
          y: TWO_PI * ny / IMG_SIZE
        }

        const phillipsRes1 = Math.sqrt(phillips(K) * 0.5)
        const h0k = {
          x: gaussValue1.x * phillipsRes1,
          y: gaussValue1.y * phillipsRes1
        }

        const phillipsRes2 = Math.sqrt(phillips({x: K.x * -1, y: K.y * -1}) * 0.5)
        const h0kConj = {
          x: gaussValue2.x * phillipsRes2,
          y: gaussValue2.y * phillipsRes2 * -1
        }

        const omega = dispersion(K)
        const c = Math.cos(omega)
        const s = Math.sin(omega)
        const h1 = complexMultiply(h0k, {x: c, y: s})
        const h2 = complexMultiply(h0kConj, {x: c, y: s * -1})

        const H_Tilde = {
          x: h1.x + h2.x,
          y: h1.y + h2.y
        }

        let kLen = vectorLength(K)
        kLen = kLen < 0.001 ? 0.001 : kLen
        const maxK = {x: K.x / kLen, y: K.y / kLen}

        const KxHTilde = complexMultiply({x: 0, y: -1 * maxK.x}, H_Tilde);
        const KzHTilde = complexMultiply({x: 0, y: -1 * maxK.y}, H_Tilde);

        yData[index] = H_Tilde.x
        yData[index + 1] = H_Tilde.y
        yData[index + 2] = 0
        yData[index + 3] = 255

        
        fftData[index] = h0k.x
        fftData[index + 1] = h0k.y
        fftData[index + 2] = h0kConj.x
        fftData[index + 3] = h0kConj.y


        fftK[index] = K.x
        fftK[index + 1] = K.y
        fftK[index + 2] = maxK.x
        fftK[index + 3] = maxK.y


        // x 方向，叉积计算法向量
        xData[index] = KxHTilde.x
        xData[index + 1] = KxHTilde.y
        xData[index + 2] = 0
        xData[index + 3] = 255


        // z 方向，叉积计算法向量
        zData[index] = KzHTilde.x
        zData[index + 1] = KzHTilde.y
        zData[index + 2] = 0
        zData[index + 3] = 255
      }
    }


    const wData = new Float32Array(IMG_SIZE * 4)
    for (let i = 0; i < IMG_SIZE; i++) {
      const angle = (-2 * Math.PI * i) / IMG_SIZE
      wData[i * 4] = Math.cos(angle)     // re
      wData[i * 4 + 1] = Math.sin(angle) // im
    }
    const rawTextureW = new RawTexture(wData, IMG_SIZE, 1, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE)

    const rawTextureY = new RawTexture(yData, IMG_SIZE, IMG_SIZE, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE)

    const rawTextureX = new RawTexture(xData, IMG_SIZE, IMG_SIZE, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE)

    const rawTextureZ = new RawTexture(zData, IMG_SIZE, IMG_SIZE, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE)

    const rawTextureFft = new RawTexture(fftData, IMG_SIZE, IMG_SIZE, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE)

    const rawTextureFftK = new RawTexture(fftK, IMG_SIZE, IMG_SIZE, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE)

    return { rawTextureY, rawTextureX, rawTextureZ, rawTextureFft, rawTextureFftK, rawTextureW }
  }

  const createXyzPlane = ({ rawTextureX, rawTextureY, rawTextureZ, rawTextureW }) => {
    const planeX =  MeshBuilder.CreatePlane('planeX', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    planeX.position = new Vector3(-IMG_SIZE - 10, 0, IMG_SIZE + 10)
    planeX.rotation = new Vector3(Math.PI / 2, 0, 0)
    const materialX = new StandardMaterial("planeMaterial", scene)
    materialX.diffuseTexture = rawTextureX
    planeX.material = materialX

    const planeY =MeshBuilder.CreatePlane('planeY', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    planeY.position = new Vector3(0, 0, IMG_SIZE + 10)
    planeY.rotation = new Vector3(Math.PI / 2, 0, 0)
    const materialY = new StandardMaterial("planeMaterial", scene)
    materialY.diffuseTexture = rawTextureY
    planeY.material = materialY

    const planeZ = MeshBuilder.CreatePlane('planeZ', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    planeZ.position = new Vector3(IMG_SIZE + 10, 0, IMG_SIZE + 10)
    planeZ.rotation = new Vector3(Math.PI / 2, 0, 0)
    const materialZ = new StandardMaterial("planeMaterial", scene)
    materialZ.diffuseTexture = rawTextureZ
    planeZ.material = materialZ
  }

  const ifftComputed = async (rawTextureFft, rawTextureFftK, rawTextureW) => {
    const workGroupSizeRowX = IMG_SIZE
    const workGroupSizeRowY = 1
    const workGroupSizeColX = 1
    const workGroupSizeColY = IMG_SIZE

    /** 第一步 计算 omega 和 uTime ，得到 textureHTilde */
    const Code_Phillips_Texture = `
      // 复数乘法
      fn complexMultiply(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
        var result: vec2<f32>;
        result.x = a.x * b.x - a.y * b.y;  // 实部
        result.y = a.x * b.y + a.y * b.x;  // 虚部
        return result;
      }

      // 色散关系函数
      fn dispersion(k: vec2<f32>) -> f32 {
        return sqrt(9.8 * length(k));
      }

      @group(0) @binding(0) var samplerSrc: sampler;
      @group(0) @binding(1) var src: texture_2d<f32>;
      // WebGPU 对浮点纹理的采样有严格限制： rgba32float 格式的纹理默认是 unfilterable（不可过滤的），不能用于线性过滤采样。所以用 rgba16float
      @group(0) @binding(2) var phillipsTexture: texture_storage_2d<rgba16float, write>; 
      @group(0) @binding(3) var<uniform> uTime: f32;

      @group(1) @binding(0) var samplerFft: sampler;
      @group(1) @binding(1) var fftK: texture_2d<f32>;
      
      @compute @workgroup_size(1, 1, 1)
      fn main(
        @builtin(global_invocation_id) global_id: vec3<u32>,
        @builtin(local_invocation_id) local_id: vec3<u32>
      ) {
        let src_dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
        let src_texture: vec4<f32> = textureSampleLevel(src, samplerSrc, vec2<f32>(global_id.xy) / src_dims, 0.0);

        let fft_dims: vec2<f32> = vec2<f32>(textureDimensions(fftK, 0));
        let fft_texture: vec4<f32> = textureSampleLevel(fftK, samplerFft, vec2<f32>(global_id.xy) / fft_dims, 0.0);

        var color = vec4<f32>(0.0, 0.0, 0.0, 1.0);

        let k = vec2<f32>(fft_texture.r, fft_texture.g);

        let omega = dispersion(k) * uTime;
        let c = cos(omega);
        let s = sin(omega);
        let h0k = src_texture.rg;
        let h0k_conj = src_texture.ba;

        let h1 = complexMultiply(h0k, vec2<f32>(c, s));
        let h2 = complexMultiply(h0k_conj, vec2<f32>(c, -s));

        color.r = h1.r + h2.r;
        color.g = h1.g + h2.g;

        textureStore(phillipsTexture, vec2<i32>(global_id.xy), color);
      }
    `

    /** 第二步 计算 row ，得到 textureRow */
    const Code_Row = `
      fn complexMultiply(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
        var result: vec4<f32>;
        result.x = a.x * b.x - a.y * b.y;  // 实部
        result.y = a.x * b.y + a.y * b.x;  // 虚部
        return result;
      }

      @group(0) @binding(0) var samplerSrc: sampler;
      @group(0) @binding(1) var src: texture_2d<f32>;
      @group(0) @binding(2) var rowTexture: texture_storage_2d<rgba16float, write>;
      @group(1) @binding(0) var samplerW: sampler;

      @group(1) @binding(1) var wData: texture_2d<f32>;

      var<workgroup> sharedData: array<vec4<f32>, ${IMG_SIZE}u>;
      var<workgroup> tempData: array<vec4<f32>, ${IMG_SIZE}u>;

      @compute @workgroup_size(${workGroupSizeRowX}, ${workGroupSizeRowY}, 1)
      fn main(
        @builtin(global_invocation_id) global_id: vec3<u32>,
        @builtin(local_invocation_id) local_id: vec3<u32>
      ) {

        let src_dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
        let src_texture: vec4<f32> = textureSampleLevel(src, samplerSrc, vec2<f32>(global_id.xy) / src_dims, 0.0);

        let w_dims: vec2<f32> = vec2<f32>(textureDimensions(wData, 0));
        let w_texture: vec4<f32> = textureSampleLevel(wData, samplerW, vec2<f32>(global_id.xy) / w_dims, 0.0);

        // 该行存入到 sharedData 中
        // 使用 global_id.x 作为索引，因为要存储行数据
        sharedData[global_id.x] = textureLoad(src, vec2<i32>(i32(global_id.x), i32(global_id.y)), 0);

        
        // 开始计算
        for (var m = 0u; m < ${logN}u; m++) {
          tempData[global_id.x] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
          
          workgroupBarrier();

          var inputIndex = 0u;
          var step = 1u << m; // 等于pow
          var blockSize = 1u << (m + 1u);
          var blockNum = ${IMG_SIZE}u / blockSize;
          var kFor = blockSize / 2u;

          for (var n = 0u; n < blockNum; n++) {
            for(var k = 0u; k < kFor; k++) {
              var inputData1 = sharedData[inputIndex];
              var inputData2 = sharedData[inputIndex + ${half}u];

              var outputIndex1 = 2u * (inputIndex - (inputIndex % (1u << m)) + (inputIndex % (1u << m)));
              var outputIndex2 = outputIndex1 + step;

              var indexW = k * (1u << (${logN}u - m - 1u));
              var w = textureLoad(wData, vec2<i32>(i32(indexW), 0), 0);
              // var angle = 2.0 * 3.1415926535 * f32(indexW) / f32(${IMG_SIZE});
              // var w = vec4<f32>(cos(angle), sin(angle), 0.0, 0.0);

              var p1 = inputData1;
              var p2 = complexMultiply(inputData2, w);

              tempData[outputIndex1] = p1 + p2;
              tempData[outputIndex2] = p1 - p2;

              inputIndex = inputIndex + 1u;
            }
          }

          workgroupBarrier();

          // 交换
          sharedData[global_id.x] = tempData[global_id.x];
        }

        workgroupBarrier();

        // 使用 clamp 函数，将值限制在 [0, 1] 范围内
        // var color = vec4<f32>(clamp(sharedData[global_id.x].r, 0.0, 1.0), clamp(sharedData[global_id.x].g, 0.0, 1.0), 0.0, 1.0);
        var color = vec4<f32>(sharedData[global_id.x].r, sharedData[global_id.x].g, 0.0, 1.0);

        textureStore(rowTexture, vec2<i32>(global_id.xy), color);
      }
    `


    /** 第三步 计算 col ，得到 textureCol */
    const Code_Col = `
      fn complexMultiply(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
        var result: vec4<f32>;
        result.x = a.x * b.x - a.y * b.y;  // 实部
        result.y = a.x * b.y + a.y * b.x;  // 虚部
        return result;
      }

      @group(0) @binding(0) var samplerSrc: sampler;
      @group(0) @binding(1) var src: texture_2d<f32>;
      @group(0) @binding(2) var colTexture: texture_storage_2d<rgba32float, write>;

      @group(1) @binding(0) var samplerW: sampler;
      @group(1) @binding(1) var wData: texture_2d<f32>;

      var<workgroup> sharedData: array<vec4<f32>, ${IMG_SIZE}u>;
      var<workgroup> tempData: array<vec4<f32>, ${IMG_SIZE}u>;

      @compute @workgroup_size(${workGroupSizeColX}, ${workGroupSizeColY}, 1)
      fn main(
        @builtin(global_invocation_id) global_id: vec3<u32>,
        @builtin(local_invocation_id) local_id: vec3<u32>
      ) {
        let src_dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
        let src_texture: vec4<f32> = textureSampleLevel(src, samplerSrc, vec2<f32>(global_id.xy) / src_dims, 0.0);

        let w_dims: vec2<f32> = vec2<f32>(textureDimensions(wData, 0));
        let w_texture: vec4<f32> = textureSampleLevel(wData, samplerW, vec2<f32>(global_id.xy) / w_dims, 0.0);

        // 该列存入到 sharedData 中
        // 使用 global_id.y 作为索引，因为要存储列数据
        sharedData[global_id.y] = textureLoad(src, vec2<i32>(i32(global_id.x), i32(global_id.y)), 0);


        // 开始计算
        for (var m = 0u; m < ${logN}u; m++) {
          tempData[global_id.y] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
          
          workgroupBarrier();

          var inputIndex = 0u;
          var step = 1u << m; // 等于pow
          var blockSize = 1u << (m + 1u);
          var blockNum = ${IMG_SIZE}u / blockSize;
          var kFor = blockSize / 2u;

          for (var n = 0u; n < blockNum; n++) {
            for(var k = 0u; k < kFor; k++) {
              var inputData1 = sharedData[inputIndex];
              var inputData2 = sharedData[inputIndex + ${half}u];

              var outputIndex1 = 2u * (inputIndex - (inputIndex % (1u << m)) + (inputIndex % (1u << m)));
              var outputIndex2 = outputIndex1 + step;

              var indexW = k * (1u << (${logN}u - m - 1u));
              var w = textureLoad(wData, vec2<i32>(i32(indexW), 0), 0);
              // var angle = 2.0 * 3.1415926535 * f32(indexW) / f32(${IMG_SIZE});
              // var w = vec4<f32>(cos(angle), sin(angle), 0.0, 0.0);

              var p1 = inputData1;
              var p2 = complexMultiply(inputData2, w);

              tempData[outputIndex1] = p1 + p2;
              tempData[outputIndex2] = p1 - p2;

              inputIndex = inputIndex + 1u;
            }
          }

          workgroupBarrier();

          // 交换
          sharedData[global_id.y] = tempData[global_id.y];
        }

        workgroupBarrier();

        // 使用 clamp 函数，将值限制在 [0, 1] 范围内
        // var color = vec4<f32>(clamp(sharedData[global_id.y].r, 0.0, 1.0), clamp(sharedData[global_id.y].g, 0.0, 1.0), 0.0, 1.0);
        var color = vec4<f32>(sharedData[global_id.y].r, sharedData[global_id.y].g, 0.0, 1.0);

        textureStore(colTexture, vec2<i32>(global_id.xy), color);
      }
    `

    // 这里对uv进行细节优化，因为都是方块，一块一块的像素
    Effect.ShadersStore['seaVertexShader'] = `
      precision highp float;
      
      attribute vec3 position;
      attribute vec2 uv;

      uniform mat4 worldViewProjection;
      uniform sampler2D uSampler;

      varying vec3 vColor;

      void main() {
        vec4 baseColor = texture(uSampler, uv);

        vec3 color = vec3(0.0, 0.0, 0.0);

        vColor = color;

        gl_Position = worldViewProjection * vec4(position, 1.0);
      }
    `

    Effect.ShadersStore['seaFragmentShader'] = `
      precision highp float;

      varying vec3 vColor;

      void main() {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `


    // const finalSea = MeshBuilder.CreateGround('finalSea', { width: IMG_SIZE, height: IMG_SIZE, subdivisions: IMG_SIZE }, scene)
    // const finalSeaTexture = RawTexture.CreateRGBAStorageTexture(
    //   null, 
    //   IMG_SIZE, 
    //   IMG_SIZE, 
    //   scene, 
    //   false, 
    //   false, 
    //   Texture.BILINEAR_SAMPLINGMODE, 
    //   Constants.TEXTURETYPE_FLOAT
    // )

    // const seaShader = new ShaderMaterial(
    //   'sea',
    //   scene, {
    //     vertex: 'sea',
    //     fragment: 'sea',
    //   }, {
    //     attributes: ['position', 'uv'],
    //     uniforms: ['worldViewProjection', 'uSampler'],
    //     samplers: ['uSampler'],
    //     needAlphaBlending: true,
    //   },
    // )
    // seaShader.setTexture('uSampler', finalSeaTexture)

    const uniformBuffer = new UniformBuffer(engine)
    uniformBuffer.addUniform('uTime', 4)


    // phillips 相关
    const phillips = MeshBuilder.CreatePlane('phillips', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    // 对于 FFT 计算，通常使用 nearest 模式更合适，因为 FFT 是离散的
    // const phillipsTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_FLOAT)
    const phillipsTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_HALF_FLOAT)
    const shaderPhillips = new ComputeShader(
      'shaderPhillips', 
      engine, 
      { computeSource: Code_Phillips_Texture }, 
      { bindingsMapping: {
          'src': { group: 0, binding: 1 },
          'phillipsTexture': { group: 0, binding: 2 },
          'uTime': { group: 0, binding: 3 },
          'fftK': { group: 1, binding: 1 },
        }
      }
    )
    shaderPhillips.setTexture('src', rawTextureFft)
    shaderPhillips.setTexture('fftK', rawTextureFftK)
    shaderPhillips.setStorageTexture('phillipsTexture', phillipsTexture)
    const phillipsMat = new StandardMaterial('phillipsMat', scene)
    phillipsMat.diffuseTexture = phillipsTexture
    phillips.material = phillipsMat
    phillips.position = new Vector3(0, 0, IMG_SIZE * 2 + 20)
    phillips.rotation = new Vector3(Math.PI / 2, 0, 0)



    // row 相关
    const rowGround = MeshBuilder.CreatePlane('phillips', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    // const rowTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_FLOAT)
    const rowTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_HALF_FLOAT)
    const shaderRow = new ComputeShader(
      'shaderRow', 
      engine, 
      { computeSource: Code_Row }, 
      { bindingsMapping: {
          'src': { group: 0, binding: 1 },
          'rowTexture': { group: 0, binding: 2 },
          'wData': { group: 1, binding: 1 },
        }
      }
    )
    shaderRow.setTexture('src', phillipsTexture)
    shaderRow.setTexture('wData', rawTextureW)
    shaderRow.setStorageTexture('rowTexture', rowTexture)
    const rowMat = new StandardMaterial('rowMat', scene)
    rowMat.diffuseTexture = rowTexture
    rowGround.material = rowMat
    rowGround.position = new Vector3(0, 0, -(IMG_SIZE + 20))
    rowGround.rotation = new Vector3(Math.PI / 2, 0, 0)



    // col 相关
    const colGround = MeshBuilder.CreateGround('col', { width: IMG_SIZE, height: IMG_SIZE, subdivisions: IMG_SIZE }, scene)
    const colTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_FLOAT)
    // const colTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_HALF_FLOAT)
    const shaderCol = new ComputeShader(
      'shaderCol', 
      engine, 
      { computeSource: Code_Col }, 
      { bindingsMapping: {
          'src': { group: 0, binding: 1 },
          'colTexture': { group: 0, binding: 2 },
          'wData': { group: 1, binding: 1 },
        }
      }
    )
    shaderCol.setTexture('src', rowTexture)
    shaderCol.setTexture('wData', rawTextureW)
    shaderCol.setStorageTexture('colTexture', colTexture)
    const colMat = new StandardMaterial('colMat', scene)
    colMat.diffuseTexture = colTexture
    colGround.material = colMat
    colGround.position = new Vector3(0, 0, 0)





    scene.registerBeforeRender(async() => {
      uTime += 0.02
      uniformBuffer.updateFloat('uTime', uTime)
      uniformBuffer.update()

      shaderPhillips.setUniformBuffer('uTime', uniformBuffer)
      
      // 计算 Phillips 纹理
      await shaderPhillips.dispatchWhenReady(phillipsTexture.getSize().width, phillipsTexture.getSize().height, 1)
      
      // 计算 row 纹理
      await shaderRow.dispatchWhenReady(IMG_SIZE / workGroupSizeRowX, IMG_SIZE / workGroupSizeRowY, 1)

      // 计算 col 纹理
      await shaderCol.dispatchWhenReady(IMG_SIZE / workGroupSizeColX, IMG_SIZE / workGroupSizeColY, 1)

      // 查看像素值
      // if(uTime > 0.1 && uTime < 0.14) {
      //   const phillipsTexturePixels = await phillipsTexture.readPixels()
      //   console.log(phillipsTexturePixels)
      // }
    })
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
  const { rawTextureX, rawTextureY, rawTextureZ, rawTextureFft, rawTextureFftK, rawTextureW } = createXyzTexture(scene)
  createXyzPlane({ rawTextureX, rawTextureY, rawTextureZ, rawTextureW })
  ifftComputed(rawTextureFft, rawTextureFftK, rawTextureW)
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