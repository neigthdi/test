<template>
  <div>
    <div class="pointer" @click="showInfo = !showInfo">{{ !showInfo ? '展示' : '关闭' }}备忘录</div>
    <div v-if="showInfo">
      <div>在海面模拟中，通常先在频域中生成海面的频谱（即不同频率波的振幅和相位信息）。这些频谱可以通过物理模型（如Phillips频谱或Pierson-Moskowitz频谱）生成。</div>
      <div>为了将这些频域信息转换为实际的海面高度（时域信息），需要使用离散傅里叶逆变换（IDFT）。通过IDFT，可以将频域中的复数振幅转换为时域中的海面高度。</div>
      <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/41455378">傅里叶系列(只看第一和第三)</a></div>
      <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/1913515900235153904">傅里叶系列(作为上面的第二节，j是复数i)</a></div>
      <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/64414956">fft海面模拟(一)</a></div>
      <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/64726720">fft海面模拟(二)</a></div>
      <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/65156063">fft海面模拟(三)</a></div>
      <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/208511211">详尽的快速傅里叶变换推导</a></div>
      <div><a target="_blank" href="https://blog.csdn.net/qq_45523399/article/details/127876812">实现FFT海洋</a></div>
      <div><a target="_blank" href="/math/fft.html">蝶形变换的 W_[N_k]</a></div>
      <div>Phillips计算（<span class="color-blue">完成</span>）</div>
      <div>逆row计算（<span class="color-blue">完成</span>）</div>
      <div>逆col计算（<span class="color-blue">完成</span>）</div>
      <div>光照法线（<span class="color-blue">完成</span>）</div>
      <div>泡沫--雅可比行列式算（<span class="color-red">完成</span>）</div>
    </div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderSea1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
//---------------------------------------------------------------------------------------------------------
// vec2 fwdTwiddle(uint i) { return vec2(cos(-2π*i/N), sin(-2π*i/N)); }   // 正
// vec2 invTwiddle(uint i) { return vec2(cos(+2π*i/N), sin(+2π*i/N)); }   // 逆
// 把符号写进 cos 里只是代码写法，数学上 cos 的参数永远是正值
// W_N^k = exp(-2πi·k/N) = cos(2πk/N) - i·sin(2πk/N)
// vec2 fwdTwiddle(uint i) { 
//     return vec2(cos(-2.0*M_PI*i/N),   // 第 1 个分量
//                 sin(-2.0*M_PI*i/N));  // 第 2 个分量
// }
// 三角函数的奇偶性：
// cos(-x) ≡  cos(x)  
// sin(-x) ≡ –sin(x)
//---------------------------------------------------------------------------------------------------------
// 旋转因子权重符号（k 就是 for 循环的i=0、i=1、i=2、i=3、i=4......i=IMG_SIZE-1）
// 正 FFT 的旋转因子
// W_k = exp(-2πi·k/N)
// 逆 FFT 的旋转因子
// W_k = exp(+2πi·k/N)
//---------------------------------------------------------------------------------------------------------
// 1、逆 FFT 之后乘 1/N，但是菲利普频谱图要放大，即 return P * N * N
// 2、逆 FFT 之后乘 1/根号N，但是最后shader要放大，即 * N
//---------------------------------------------------------------------------------------------------------
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  WebGPUEngine,
  Scene,
  HemisphericLight,
  MeshBuilder,
  ShaderMaterial,
  Color4,
  ArcRotateCamera,
  Vector3,
  Color3,
  StandardMaterial,
  RawTexture,
  Constants,
  Texture,
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

const fps = ref(0)
const isRunning = ref(false)
const showInfo = ref(false)

 let sceneResources: any, adt: any
let uTime = 0.0

let IMG_SIZE = 128
let IMG_SIZE_SQRT = Math.sqrt(IMG_SIZE)
let logN = Math.log2(IMG_SIZE)
let half = IMG_SIZE / 2
let workGroupSizeRowX = IMG_SIZE
let workGroupSizeRowY = 1
let workGroupSizeColX = 1
let workGroupSizeColY = IMG_SIZE
let customAmplitude = 0.8
let customWindSpeed = 45.223
let phillipsGroupSize = 16
let uTileCount = 2  // FFT patch 平铺次数，1024/4=256 世界单位一个波形周期

// let wData = new Float32Array(IMG_SIZE * 4)
let wInverseData = new Float32Array(IMG_SIZE * 4)

const codeTexturePhillips = () => {
  return `
    const TWO_PI: f32 = 6.283185307179586;
    const PI: f32 = 3.14159265359;
          
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
    
    // 快速随机函数
    fn randValueFast(uv: vec2<f32>, seed: f32) -> f32 {
      return fract(sin(dot(uv, vec2<f32>(12.9898, 78.12345)) + seed) * 43759.54321);
    }
    
    // 高斯图
    fn gauss(uv: vec2<f32>) -> vec2<f32> {
      var u1 = randValueFast(uv, 1753.21);
      var u2 = randValueFast(uv, 3547.15);
      
      u1 = max(u1, 1e-6);
      
      let mag = sqrt(-2.0 * log(u1));
      let ang = TWO_PI * u2;
      
      return vec2<f32>(mag * cos(ang), mag * sin(ang));
    }
    
    fn donelanBannerDirectionalSpreading(k: vec2<f32>) -> f32 {
      let kLen = length(k);
      if(kLen < 1e-6) { return 0.0; } // 排除 k=0
      
      let G = 9.8;
      var wind = vec2<f32>(0.5, -0.85);
      var betaS = 0.0;
      var omega = 0.855 * G / length(wind);
      var ratio = dispersion(k) / omega;
      
      // 计算 betaS（方向分布参数）
      if (ratio < 0.95) {
        betaS = 2.61 * pow(ratio, 1.3);
      } else if (ratio < 1.6) {
        betaS = 2.28 * pow(ratio, -1.3);
      } else {
        var  epsilon = -0.4 + 0.8393 * exp(-0.567 * log(ratio * ratio));
        betaS = pow(10.0, epsilon);
      }
      
      var theta = atan2(k.y, k.x) - atan2(wind.y, wind.x);
      
      return  betaS / max(1e-7, 2.0 * tanh(betaS * PI) * pow(cosh(betaS * theta), 2.0));
    }
    
    // phillips图谱
    fn phillips(k: vec2<f32>) -> f32 {
      let kLen = length(k);
      if(kLen < 1e-6) { return 0.0; } // 排除 k=0
      let kLen2 = kLen * kLen;
      let kLen4 = kLen2 * kLen2;
      
      let windDir = normalize(vec2<f32>(0.5, -0.85)); // 风向向量
      let windSpeed = ${customWindSpeed}; // 风速
      let A = ${customAmplitude}; // 振幅参数
      let G = 9.8;
      
      let L = windSpeed * windSpeed / G; // 最大波长
      let L2 = L * L;
      
      // 基础 Phillips
      var P = A * exp(-1.0 / (kLen2 * L2)) / kLen4;
      
      // 方向锁定 cos²θ
      let cosTheta = (dot(normalize(k), windDir));
      
      P *= cosTheta * cosTheta;
      
      return P;
    }
    
    struct Params { uTime:f32, pad:f32, pad2:f32, pad3:f32 };   // 16 字节对齐
    @group(0) @binding(1) var phillipsTextureY: texture_storage_2d<rgba32float, write>;
    @group(0) @binding(2) var phillipsTextureX: texture_storage_2d<rgba32float, write>;
    @group(0) @binding(3) var phillipsTextureZ: texture_storage_2d<rgba32float, write>;
    @group(0) @binding(4) var<uniform> param: Params;
    
    @compute @workgroup_size(${phillipsGroupSize}, ${phillipsGroupSize}, 1)
    fn main(
      @builtin(global_invocation_id) global_id: vec3<u32>
    ) {
      var color = vec4<f32>(0.0, 0.0, 0.0, 1.0);
      
      let x = f32(global_id.x);
      let y = f32(global_id.y);
      
      let gaussValue1 = gauss(vec2<f32>(x + 3.1415, y + 2.7182));
      let gaussValue2 = gauss(vec2<f32>(x + 1.4142, y + 1.7321));
      
      let size = f32(${IMG_SIZE});
      
      // 都是为了平移到中间
      let nx = x - size * 0.5;
      let ny = y - size * 0.5;
      let k = vec2<f32>(TWO_PI * nx / size, TWO_PI * ny / size);
      
      // let k = vec2<f32>(TWO_PI * x / size - PI, TWO_PI * y / size - PI);
      
      var h0k = vec2<f32>(gaussValue1 * sqrt(phillips(k) * donelanBannerDirectionalSpreading(k) * 0.5));
      var h0kConj = vec2<f32>(gaussValue2 * sqrt(phillips(-k) * donelanBannerDirectionalSpreading(-k) * 0.5));
      // var h0k = vec2<f32>(gaussValue1 * sqrt(phillips(k) * 0.5));
      // var h0kConj = vec2<f32>(gaussValue2 * sqrt(phillips(-k) * 0.5));
      h0kConj.y *= -1.0;
      
      let omega = dispersion(k) * param.uTime;
      let c = cos(omega);
      let s = sin(omega);
      
      let h1 = complexMultiply(h0k, vec2<f32>(c, s));
      let h2 = complexMultiply(h0kConj, vec2<f32>(c, -s));
      
      let hTildeY = vec2<f32>(h1 + h2); // 这个是y的
      
      // 下面是计算x和z的
      var hTildeX = vec2<f32>(0.0);
      var hTildeZ = vec2<f32>(0.0);
      let kLen = length(k);
      if (kLen > 1e-4) {
        let kNorm = k/kLen;
        hTildeX = complexMultiply(vec2<f32>(0.0, -kNorm.x), hTildeY);
        hTildeZ = complexMultiply(vec2<f32>(0.0, -kNorm.y), hTildeY);
      }
      
      textureStore(phillipsTextureY, vec2<i32>(global_id.xy), vec4<f32>(hTildeY.r, hTildeY.g, 0.0, 1.0));
      textureStore(phillipsTextureX, vec2<i32>(global_id.xy), vec4<f32>(hTildeX.r, hTildeX.g, 0.0, 1.0));
      textureStore(phillipsTextureZ, vec2<i32>(global_id.xy), vec4<f32>(hTildeZ.r, hTildeZ.g, 0.0, 1.0));
    }
  `
  }

const codeRow = (isInverse: any) => {
  return `
    fn complexMultiply(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
      var result: vec4<f32>;
      result.x = a.x * b.x - a.y * b.y;  // 实部
      result.y = a.x * b.y + a.y * b.x;  // 虚部
      return result;
    }
    
    @group(0) @binding(1) var phillipsTextureY : texture_2d<f32>;
    @group(0) @binding(2) var phillipsTextureX : texture_2d<f32>;
    @group(0) @binding(3) var phillipsTextureZ : texture_2d<f32>;
    @group(0) @binding(4) var wData : texture_2d<f32>;
    @group(0) @binding(5) var rowTextureY : texture_storage_2d<rgba32float, write>;
    @group(0) @binding(6) var rowTextureX : texture_storage_2d<rgba32float, write>;
    @group(0) @binding(7) var rowTextureZ : texture_storage_2d<rgba32float, write>;
    
      
    var<workgroup> sharedDataY: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> tempDataY: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> sharedDataX: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> tempDataX: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> sharedDataZ: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> tempDataZ: array<vec4<f32>, ${IMG_SIZE}u>;
    
    @compute @workgroup_size(${workGroupSizeRowX}, ${workGroupSizeRowY}, 1)
    fn main(
      @builtin(global_invocation_id) global_id: vec3<u32>,
      @builtin(local_invocation_id) local_id: vec3<u32>
    ) {
      
      // 该行存入到 sharedDataY 中
      // 使用 global_id.x 作为索引，因为要存储行数据
      sharedDataY[local_id.x] = textureLoad(phillipsTextureY, vec2<i32>(i32(local_id.x), i32(global_id.y)), 0);
      sharedDataX[local_id.x] = textureLoad(phillipsTextureX, vec2<i32>(i32(local_id.x), i32(global_id.y)), 0);
      sharedDataZ[local_id.x] = textureLoad(phillipsTextureZ, vec2<i32>(i32(local_id.x), i32(global_id.y)), 0);
      
      workgroupBarrier(); // 确保写入
      
      // 开始计算
      for (var m = 0u; m < ${logN}u; m++) {
        workgroupBarrier(); // 确保所有线程完成上一轮数据写入
    
        tempDataY[local_id.x] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        tempDataX[local_id.x] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        tempDataZ[local_id.x] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        
        workgroupBarrier(); // 确保初始化完成
    
        var inputIndex = 0u;
        var step = 1u << m; // 等于pow
        var blockSize = 1u << (m + 1u);
        var blockNum = ${IMG_SIZE}u / blockSize;
        var kFor = blockSize / 2u;
    
        for (var n = 0u; n < blockNum; n++) {
          workgroupBarrier(); // 确保所有运算完成
          for(var k = 0u; k < kFor; k++) {
            var inputDataY1 = sharedDataY[inputIndex];
            var inputDataY2 = sharedDataY[inputIndex + ${half}u];
            
            var inputDataX1 = sharedDataX[inputIndex];
            var inputDataX2 = sharedDataX[inputIndex + ${half}u];
            
            var inputDataZ1 = sharedDataZ[inputIndex];
            var inputDataZ2 = sharedDataZ[inputIndex + ${half}u];
    
            var outputIndex1 = 2u * (inputIndex - (inputIndex % (1u << m))) + (inputIndex % (1u << m));
            var outputIndex2 = outputIndex1 + step;
    
            var indexW = k * (1u << (${logN}u - m - 1u));
            var w = textureLoad(wData, vec2<i32>(i32(indexW), 0), 0);
            
            var pY1 = inputDataY1;
            var pY2 = complexMultiply(inputDataY2, w);
            
            var pX1 = inputDataX1;
            var pX2 = complexMultiply(inputDataX2, w);
            
            var pZ1 = inputDataZ1;
            var pZ2 = complexMultiply(inputDataZ2, w);
    
            tempDataY[outputIndex1] = pY1 + pY2;
            tempDataY[outputIndex2] = pY1 - pY2;
            
            tempDataX[outputIndex1] = pX1 + pX2;
            tempDataX[outputIndex2] = pX1 - pX2;
            
            tempDataZ[outputIndex1] = pZ1 + pZ2;
            tempDataZ[outputIndex2] = pZ1 - pZ2;
    
            workgroupBarrier(); // 确保所有蝶形运算完成
    
            inputIndex = inputIndex + 1u;
          }
        }
    
        workgroupBarrier(); // 确保所有运算完成
    
        sharedDataY[local_id.x] = tempDataY[local_id.x];
        sharedDataX[local_id.x] = tempDataX[local_id.x];
        sharedDataZ[local_id.x] = tempDataZ[local_id.x];
    
        workgroupBarrier(); // 确保交换完成
    
      }
    
      // 如果是逆fft，最后一步需要 / N；如果是正fff，则不需要
      let scale = select(1.0, 1.0 / f32(${IMG_SIZE_SQRT}), ${isInverse});
      let outY = sharedDataY[local_id.x] * scale;
      let outX = sharedDataX[local_id.x] * scale;
      let outZ = sharedDataZ[local_id.x] * scale;
    
      textureStore(rowTextureY, vec2<i32>(i32(local_id.x), i32(global_id.y)), vec4<f32>(outY.x, outY.y, 0.0, 1.0));
      textureStore(rowTextureX, vec2<i32>(i32(local_id.x), i32(global_id.y)), vec4<f32>(outX.x, outX.y, 0.0, 1.0));
      textureStore(rowTextureZ, vec2<i32>(i32(local_id.x), i32(global_id.y)), vec4<f32>(outZ.x, outZ.y, 0.0, 1.0));
    }
  `
  }

const codeCol = (isInverse: any) => {
  return `
    fn complexMultiply(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
      var result: vec4<f32>;
      result.x = a.x * b.x - a.y * b.y;  // 实部
      result.y = a.x * b.y + a.y * b.x;  // 虚部
      return result;
    }
    
    @group(0) @binding(1) var rowTextureY : texture_2d<f32>;
    @group(0) @binding(2) var rowTextureX : texture_2d<f32>;
    @group(0) @binding(3) var rowTextureZ : texture_2d<f32>;
    @group(0) @binding(4) var wData : texture_2d<f32>;
    @group(0) @binding(5) var colTextureY : texture_storage_2d<rgba32float, write>;
    @group(0) @binding(6) var colTextureX : texture_storage_2d<rgba32float, write>;
    @group(0) @binding(7) var colTextureZ : texture_storage_2d<rgba32float, write>;
    
    var<workgroup> sharedDataY: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> tempDataY: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> sharedDataX: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> tempDataX: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> sharedDataZ: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> tempDataZ: array<vec4<f32>, ${IMG_SIZE}u>;
    
    @compute @workgroup_size(${workGroupSizeColX}, ${workGroupSizeColY}, 1)
    fn main(
      @builtin(global_invocation_id) global_id: vec3<u32>,
      @builtin(local_invocation_id) local_id: vec3<u32>
    ) {
    
      // 该列存入到 sharedData 中
      // 使用 global_id.y 作为索引，因为要存储列数据
      sharedDataY[local_id.y] = textureLoad(rowTextureY, vec2<i32>(i32(global_id.x), i32(local_id.y)), 0);
      sharedDataX[local_id.y] = textureLoad(rowTextureX, vec2<i32>(i32(global_id.x), i32(local_id.y)), 0);
      sharedDataZ[local_id.y] = textureLoad(rowTextureZ, vec2<i32>(i32(global_id.x), i32(local_id.y)), 0);
      
      workgroupBarrier(); // 确保写入
    
      // 开始计算
      for (var m = 0u; m < ${logN}u; m++) {
        workgroupBarrier(); // 确保所有线程完成上一轮数据写入
        
        tempDataY[local_id.y] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        tempDataX[local_id.y] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        tempDataZ[local_id.y] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        
        workgroupBarrier(); // 确保初始化完成
    
        var inputIndex = 0u;
        var step = 1u << m; // 等于pow
        var blockSize = 1u << (m + 1u);
        var blockNum = ${IMG_SIZE}u / blockSize;
        var kFor = blockSize / 2u;
    
        for (var n = 0u; n < blockNum; n++) {
          workgroupBarrier(); // 确保所有运算完成
          for(var k = 0u; k < kFor; k++) {
            var inputDataY1 = sharedDataY[inputIndex];
            var inputDataY2 = sharedDataY[inputIndex + ${half}u];
            
            var inputDataX1 = sharedDataX[inputIndex];
            var inputDataX2 = sharedDataX[inputIndex + ${half}u];
            
            var inputDataZ1 = sharedDataZ[inputIndex];
            var inputDataZ2 = sharedDataZ[inputIndex + ${half}u];
    
            var outputIndex1 = 2u * (inputIndex - (inputIndex % (1u << m))) + (inputIndex % (1u << m));
            var outputIndex2 = outputIndex1 + step;
    
            var indexW = k * (1u << (${logN}u - m - 1u));
            var w = textureLoad(wData, vec2<i32>(i32(indexW), 0), 0);
    
            var pY1 = inputDataY1;
            var pY2 = complexMultiply(inputDataY2, w);
            
            var pX1 = inputDataX1;
            var pX2 = complexMultiply(inputDataX2, w);
            
            var pZ1 = inputDataZ1;
            var pZ2 = complexMultiply(inputDataZ2, w);
    
            tempDataY[outputIndex1] = pY1 + pY2;
            tempDataY[outputIndex2] = pY1 - pY2;
            
            tempDataX[outputIndex1] = pX1 + pX2;
            tempDataX[outputIndex2] = pX1 - pX2;
            
            tempDataZ[outputIndex1] = pZ1 + pZ2;
            tempDataZ[outputIndex2] = pZ1 - pZ2;
    
            workgroupBarrier(); // 确保所有蝶形运算完成
    
            inputIndex = inputIndex + 1u;
          }
        }
    
        workgroupBarrier(); // 确保所有运算完成
    
        sharedDataY[local_id.y] = tempDataY[local_id.y];
        sharedDataX[local_id.y] = tempDataX[local_id.y];
        sharedDataZ[local_id.y] = tempDataZ[local_id.y];
    
        workgroupBarrier(); // 确保交换完成
      }
      
      // 如果是逆fft，最后一步需要 / N；如果是正fff，则不需要
      let scale = select(1.0, 1.0 / f32(${IMG_SIZE_SQRT}), ${isInverse});


      // ─────────────────────────────────────────────────────────────────────
      // 从头推导
      // Phillips 频谱生成时，k 向量做了中心化：
      // let nx = x - size * 0.5;   // 让 k=0 在图片中心
      // let k  = TWO_PI * nx / size;
      // 这等价于把原始频谱 H(k) 做了一次 fftshift【fft移动】，即：
      // ─────────────────────────────────────────────────────────────────────
      // H_shifted(k) = H(k - N/2)
      // DFT 频移定理
      // 对于一维 DFT，若把频域移位 N/2，时域会发生什么？
      // ─────────────────────────────────────────────────────────────────────
      // H_shifted(k) = H(k - N/2)
      // ─────────────────────────────────────────────────────────────────────
      // IFFT{ H(k - N/2) }(n)
      //   = Σ H(k-N/2) · e^(+2πi·k·n/N)
      //   令 m = k - N/2
      //   = Σ H(m) · e^(+2πi·(m+N/2)·n/N)
      //   = Σ H(m) · e^(+2πi·m·n/N) · e^(+2πi·N/2·n/N)
      //   = h(n) · e^(+πi·n)
      //   = h(n) · (-1)^n          ← 因为 e^(iπ) = -1
      // ─────────────────────────────────────────────────────────────────────
      // 所以：
      // IFFT{ H_shifted }(n)  =  h(n) · (-1)^n
      // 二维推广：
      // IFFT2{ H_shifted }(x, y)  =  h(x, y) · (-1)^(x+y)
      // ─────────────────────────────────────────────────────────────────────
      // 代码的含义
      // 计算出来的值实际上是 h(x,y) · (-1)^(x+y)，需要乘以 (-1)^(x+y) 还原真正的 h(x,y)：
      // let sign = select(-1.0, 1.0, (global_id.x + global_id.y) % 2u == 0u);
      //             ↑ x+y 是奇数 → -1       ↑ x+y 是偶数 → +1
      //            即 sign = (-1)^(x+y)
      // ─────────────────────────────────────────────────────────────────────
      // 结论：
      //   IFFT 算出来的值实际上是 h(x,y)·(-1)^(x+y)，
      //   再乘一次 (-1)^(x+y) 才能还原真正的位移值 h(x,y)。
      //   这就是输出图中出现 [0.25, -0.28, 0.30, -0.32...] 棋盘格交替正负的根因。
      // ─────────────────────────────────────────────────────────────────────
      // x+y	  (-1)^(x+y)	  计算出的值	  乘以 sign 后
      // 偶数	      +1	          +h	          +h ✓
      // 奇数	      -1	          -h	          +h ✓
      // ─────────────────────────────────────────────────────────────────────
      // 乘完之后，原来的 [0.25, -0.28, 0.30, -0.32...] 就变成了连续的 [0.25, 0.28, 0.30, 0.32...]，这才是真正的海面位移值
      // ─────────────────────────────────────────────────────────────────────
      let sign = select(-1.0, 1.0, (global_id.x + global_id.y) % 2u == 0u);
      

      // 如果不乘以 sign，那么输出的位移值就是 [0.25, -0.28, 0.30, -0.32...]，这是不正确的
      let outY = sharedDataY[local_id.y] * scale * sign;
      let outX = sharedDataX[local_id.y] * scale * sign;
      let outZ = sharedDataZ[local_id.y] * scale * sign;
      
      textureStore(colTextureY, vec2<i32>(i32(global_id.x), i32(global_id.y)), vec4<f32>(outY.x, outY.y, 0.0, 1.0));
      textureStore(colTextureX, vec2<i32>(i32(global_id.x), i32(global_id.y)), vec4<f32>(outX.x, outX.y, 0.0, 1.0));
      textureStore(colTextureZ, vec2<i32>(i32(global_id.x), i32(global_id.y)), vec4<f32>(outZ.x, outZ.y, 0.0, 1.0));
    }
  `
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

const initScene = async () => {
  const ele = document.getElementById("shaderSea1") as any

  ele.addEventListener('wheel', function(event: any) {
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
    const light = new HemisphericLight('light', new Vector3(40, 40, 40), scene)
    light.direction = new Vector3(0.0, 1.0, 0.0)
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



  let device = engine._device
  let windows = window as any
  let usage = windows.GPUTextureUsage.STORAGE_BINDING | windows.GPUTextureUsage.TEXTURE_BINDING | windows.GPUTextureUsage.COPY_SRC |
    windows.GPUTextureUsage.COPY_DST

  let uniformBuf = device.createBuffer({
    size: 16,
    usage: windows.GPUBufferUsage.UNIFORM | windows.GPUBufferUsage.COPY_DST
  })
  const createSea = async () => {
    /** w 的开始 */
    for (let i = 0; i < IMG_SIZE; i++) {
      let angle = (2 * Math.PI * i) / IMG_SIZE
      let re = Math.cos(angle)
      let im = Math.sin(angle)
      wInverseData[i * 4] = re // re
      wInverseData[i * 4 + 1] = im // im
      wInverseData[i * 4 + 2] = 0
      wInverseData[i * 4 + 3] = 1
    }
    // 创建 staging buffer 并把数据写进去
    let wBufferSize = wInverseData.byteLength
    let wStagingBuffer = device.createBuffer({
      size: wBufferSize,
      usage: windows.GPUBufferUsage.COPY_SRC,
      mappedAtCreation: true,
    })
    new Float32Array(wStagingBuffer.getMappedRange()).set(wInverseData)
    wStagingBuffer.unmap()
    // 创建目标纹理（128×1，rgba32float，每 texel 4×float）
    let textureW = device.createTexture({ size: [IMG_SIZE, 1], format: 'rgba32float', usage })
    // 把 buffer 拷进纹理
    let commandEncoderWriteW = device.createCommandEncoder()
    commandEncoderWriteW.copyBufferToTexture({
        buffer: wStagingBuffer,
        bytesPerRow: IMG_SIZE * 4 * 4 // 每行字节数 = 128×4×4
      }, { texture: textureW, origin: { x: 0, y: 0 } },
      [IMG_SIZE, 1, 1] // 拷贝尺寸
    )
    // 提交命令
    device.queue.submit([commandEncoderWriteW.finish()])
    // 读取数据到 rawTextureW
    let readBackBufferW = device.createBuffer({
      size: IMG_SIZE * 1 * 4 * 4, // 128×1×4×float
      usage: windows.GPUBufferUsage.COPY_DST | windows.GPUBufferUsage.MAP_READ
    })
    let commandEncoderReadW = device.createCommandEncoder()
    commandEncoderReadW.copyTextureToBuffer({ texture: textureW, origin: { x: 0, y: 0 } }, {
        buffer: readBackBufferW,
        bytesPerRow: IMG_SIZE * 4 * 4
      },
      [IMG_SIZE, 1, 1]
    )
    device.queue.submit([commandEncoderReadW.finish()])
    await readBackBufferW.mapAsync(windows.GPUMapMode.READ)
    let wData = new Float32Array(readBackBufferW.getMappedRange())
    let rawTextureW = new RawTexture(
      wData,
      IMG_SIZE,
      1,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // no mipmaps
      false, // not invertY
      Texture.LINEAR_LINEAR,
      Constants.TEXTURETYPE_FLOAT
    )
    let planeW = MeshBuilder.CreatePlane('planeW', {
      width: IMG_SIZE,
      height: 1
    }, scene)
    let matW = new StandardMaterial('matW', scene)
    matW.diffuseTexture = rawTextureW
    planeW.material = matW
    planeW.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeW.position = new Vector3(0, 0, IMG_SIZE + 20)
    /** w 的结束 */








    /** phillips 的开始 */
    let phillipsY = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let phillipsX = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let phillipsZ = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let writePhillipsModule = device.createShaderModule({
      code: codeTexturePhillips()
    })
    let writePhillipsPipeline = device.createComputePipeline({
      layout: 'auto',
      compute: { module: writePhillipsModule, entryPoint: 'main' }
    })
    let bindGroupPhillips = device.createBindGroup({
      layout: writePhillipsPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 1, resource: phillipsY.createView() },
        { binding: 2, resource: phillipsX.createView() },
        { binding: 3, resource: phillipsZ.createView() },
        { binding: 4, resource: { buffer: uniformBuf } },
      ]
    })

    let planeY = MeshBuilder.CreatePlane('planeY', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawPlaneY = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    let matY = new StandardMaterial('matY', scene)
    matY.diffuseTexture = rawPlaneY
    planeY.material = matY
    planeY.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeY.position = new Vector3(-IMG_SIZE - 20, 0, 0)

    let planeX = MeshBuilder.CreatePlane('planeX', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawPlaneX = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    let matX = new StandardMaterial('matX', scene)
    matX.diffuseTexture = rawPlaneX
    planeX.material = matX
    planeX.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeX.position = new Vector3(0, 0, 0)

    let planeZ = MeshBuilder.CreatePlane('planeZ', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawPlaneZ = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    let matZ = new StandardMaterial('matZ', scene)
    matZ.diffuseTexture = rawPlaneZ
    planeZ.material = matZ
    planeZ.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeZ.position = new Vector3(IMG_SIZE + 20, 0, 0)
    /** phillips 的结束 */



    



    
    /** row 的开始 */
    let rowY = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let rowX = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let rowZ = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let writeRowModule = device.createShaderModule({
      code: codeRow(true)
    })
    let writeRowPipeline = device.createComputePipeline({
      layout: 'auto',
      compute: { module: writeRowModule, entryPoint: 'main' }
    })
    let bindGroupRow = device.createBindGroup({
      layout: writeRowPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 1, resource: phillipsY.createView() },
        { binding: 2, resource: phillipsX.createView() },
        { binding: 3, resource: phillipsZ.createView() },
        { binding: 4, resource: textureW.createView() },
        { binding: 5, resource: rowY.createView() },
        { binding: 6, resource: rowX.createView() },
        { binding: 7, resource: rowZ.createView() },
      ]
    })

    let planeRowY = MeshBuilder.CreatePlane('planeRowY', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawRowY = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    let matRowY = new StandardMaterial('matRowY', scene)
    matRowY.diffuseTexture = rawRowY
    planeRowY.material = matRowY
    planeRowY.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeRowY.position = new Vector3(-IMG_SIZE - 20, 0, -IMG_SIZE - 20)

    let planeRowX = MeshBuilder.CreatePlane('planeRowX', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawRowX = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    let matRowX = new StandardMaterial('matRowX', scene)
    matRowX.diffuseTexture = rawRowX
    planeRowX.material = matRowX
    planeRowX.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeRowX.position = new Vector3(0, 0, -IMG_SIZE - 20)

    let planeRowZ = MeshBuilder.CreatePlane('planeRowZ', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawRowZ = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    let matRowZ = new StandardMaterial('matRowZ', scene)
    matRowZ.diffuseTexture = rawRowZ
    planeRowZ.material = matRowZ
    planeRowZ.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeRowZ.position = new Vector3(IMG_SIZE + 20, 0, -IMG_SIZE - 20)
    /** row 的结束 */







    
    /** col 的开始 */
    let colY = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let colX = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let colZ = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage })
    let writeColModule = device.createShaderModule({
      code: codeCol(true)
    })
    let writeColPipeline = device.createComputePipeline({
      layout: 'auto',
      compute: { module: writeColModule, entryPoint: 'main' }
    })
    let bindGroupCol = device.createBindGroup({
      layout: writeColPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 1, resource: rowY.createView() },
        { binding: 2, resource: rowX.createView() },
        { binding: 3, resource: rowZ.createView() },
        { binding: 4, resource: textureW.createView() },
        { binding: 5, resource: colY.createView() },
        { binding: 6, resource: colX.createView() },
        { binding: 7, resource: colZ.createView() },
      ]
    })

    let planeColY = MeshBuilder.CreatePlane('planeColY', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawColY = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    rawColY.wrapU = Texture.WRAP_ADDRESSMODE
    rawColY.wrapV = Texture.WRAP_ADDRESSMODE
    let matColY = new StandardMaterial('matColY', scene)
    matColY.diffuseTexture = rawColY
    planeColY.material = matColY
    planeColY.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeColY.position = new Vector3(-IMG_SIZE - 20, 0, (-IMG_SIZE - 20) * 2)

    let planeColX = MeshBuilder.CreatePlane('planeColX', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawColX = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    rawColX.wrapU = Texture.WRAP_ADDRESSMODE
    rawColX.wrapV = Texture.WRAP_ADDRESSMODE
    let matColX = new StandardMaterial('matColX', scene)
    matColX.diffuseTexture = rawColX
    planeColX.material = matColX
    planeColX.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeColX.position = new Vector3(0, 0, (-IMG_SIZE - 20) * 2)

    let planeColZ = MeshBuilder.CreatePlane('planeColZ', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    let rawColZ = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    rawColZ.wrapU = Texture.WRAP_ADDRESSMODE
    rawColZ.wrapV = Texture.WRAP_ADDRESSMODE
    let matColZ = new StandardMaterial('matColZ', scene)
    matColZ.diffuseTexture = rawColZ
    planeColZ.material = matColZ
    planeColZ.rotation = new Vector3(Math.PI / 2, 0, 0)
    planeColZ.position = new Vector3(IMG_SIZE + 20, 0, (-IMG_SIZE - 20) * 2)
    /** col 的结束 */







    
    let readAndUpdate = async (srcTexture: any, rawTexture: any) => {
      let encoder = device.createCommandEncoder()
      let buffer = device.createBuffer({
        size: IMG_SIZE * IMG_SIZE * 4 * 4,
        usage: windows.GPUBufferUsage.COPY_DST | windows.GPUBufferUsage.MAP_READ
      })
      encoder.copyTextureToBuffer({ texture: srcTexture }, {
        buffer,
        bytesPerRow: IMG_SIZE * 4 * 4,
        rowsPerImage: IMG_SIZE
      }, [IMG_SIZE, IMG_SIZE])
      device.queue.submit([encoder.finish()])
      await buffer.mapAsync(windows.GPUMapMode.READ)
      let data = new Float32Array(buffer.getMappedRange()).slice() // 拷贝一份
      buffer.unmap()
      rawTexture.update(data)
    }







    
    const oceanMat = new ShaderMaterial('oceanMat', scene, {
      vertexSource: `
        precision highp float;

        attribute vec3 position;
        attribute vec2 uv;

        uniform mat4 worldViewProjection;
        uniform sampler2D heightMap;
        uniform sampler2D displacementX;
        uniform sampler2D displacementZ;

        varying vec2 vUv;

        // SPIR-V 不允许 sampler 作函数参数，每个纹理单独写双线性插值函数
        float blH(vec2 uv) {
          float s=1.0/${IMG_SIZE}.0; vec2 p=fract(uv*${IMG_SIZE}.0), c=(floor(uv*${IMG_SIZE}.0)+0.5)*s;
          return mix(mix(texture2D(heightMap,c).x,    texture2D(heightMap,c+vec2(s,0.0)).x,p.x),
                     mix(texture2D(heightMap,c+vec2(0.0,s)).x, texture2D(heightMap,c+vec2(s,s)).x,p.x),p.y);
        }
        float blX(vec2 uv) {
          float s=1.0/${IMG_SIZE}.0; vec2 p=fract(uv*${IMG_SIZE}.0), c=(floor(uv*${IMG_SIZE}.0)+0.5)*s;
          return mix(mix(texture2D(displacementX,c).x,    texture2D(displacementX,c+vec2(s,0.0)).x,p.x),
                     mix(texture2D(displacementX,c+vec2(0.0,s)).x, texture2D(displacementX,c+vec2(s,s)).x,p.x),p.y);
        }
        float blZ(vec2 uv) {
          float s=1.0/${IMG_SIZE}.0; vec2 p=fract(uv*${IMG_SIZE}.0), c=(floor(uv*${IMG_SIZE}.0)+0.5)*s;
          return mix(mix(texture2D(displacementZ,c).x,    texture2D(displacementZ,c+vec2(s,0.0)).x,p.x),
                     mix(texture2D(displacementZ,c+vec2(0.0,s)).x, texture2D(displacementZ,c+vec2(s,s)).x,p.x),p.y);
        }

        void main() {
          vUv = uv * ${uTileCount}.0;

          float dY = blH(vUv);
          float dX = blX(vUv);
          float dZ = blZ(vUv);

          vec3 pos = position;
          pos.x += dX;
          pos.z += dZ;
          pos.y += dY * 3.0;

          gl_Position = worldViewProjection * vec4(pos, 1.0);
        }
      `,
      fragmentSource: `
        precision highp float;
			
        uniform sampler2D heightMap;
        uniform sampler2D displacementX;
        uniform sampler2D displacementZ;
        uniform float uGridCount;
        uniform vec3 uLightDir;

        varying vec2 vUv;

        // SPIR-V 不允许 sampler 作函数参数，每个纹理单独写双线性插值函数
        float blH(vec2 uv) {
          float s = 1.0/uGridCount; vec2 p = fract(uv*uGridCount), c = (floor(uv*uGridCount)+0.5)*s;
          return mix(mix(texture2D(heightMap,c).x,    texture2D(heightMap,c+vec2(s,0.0)).x,p.x),
                     mix(texture2D(heightMap,c+vec2(0.0,s)).x, texture2D(heightMap,c+vec2(s,s)).x,p.x),p.y);
        }
        float blX(vec2 uv) {
          float s = 1.0/uGridCount; vec2 p = fract(uv*uGridCount), c = (floor(uv*uGridCount)+0.5)*s;
          return mix(mix(texture2D(displacementX,c).x,    texture2D(displacementX,c+vec2(s,0.0)).x,p.x),
                     mix(texture2D(displacementX,c+vec2(0.0,s)).x, texture2D(displacementX,c+vec2(s,s)).x,p.x),p.y);
        }
        float blZ(vec2 uv) {
          float s = 1.0/uGridCount; vec2 p = fract(uv*uGridCount), c = (floor(uv*uGridCount)+0.5)*s;
          return mix(mix(texture2D(displacementZ,c).x,    texture2D(displacementZ,c+vec2(s,0.0)).x,p.x),
                     mix(texture2D(displacementZ,c+vec2(0.0,s)).x, texture2D(displacementZ,c+vec2(s,s)).x,p.x),p.y);
        }

        void main() {
          vec2 texelCenter = vUv;
          float d = 1.0 / uGridCount;

          // ∂Y/∂x  ∂Y/∂z
          float hx  = (blH(texelCenter+vec2(d,0.0)) - blH(texelCenter-vec2(d,0.0))) * 0.5;
          float hz  = (blH(texelCenter+vec2(0.0,d)) - blH(texelCenter-vec2(0.0,d))) * 0.5;

          // ∂Dx/∂x  ∂Dx/∂z
          float dxx = (blX(texelCenter+vec2(d,0.0)) - blX(texelCenter-vec2(d,0.0))) * 0.5;
          float dxz = (blX(texelCenter+vec2(0.0,d)) - blX(texelCenter-vec2(0.0,d))) * 0.5;

          // ∂Dz/∂x  ∂Dz/∂z
          float dzx = (blZ(texelCenter+vec2(d,0.0)) - blZ(texelCenter-vec2(d,0.0))) * 0.5;
          float dzz = (blZ(texelCenter+vec2(0.0,d)) - blZ(texelCenter-vec2(0.0,d))) * 0.5;

          // ─────────────────────────────────────────────────────────────────────
          // 【法线】构造切线向量后叉乘
          //
          //   海面上一个点的世界坐标（Gerstner 位移后）：
          //     P(u,v) = ( u + Dx(u,v),  Y(u,v),  v + Dz(u,v) )
          //
          //   对 u（x方向）求偏导 → 切线 Tx：
          //     Tx = ∂P/∂u = ( 1 + ∂Dx/∂x,  ∂Y/∂x,  ∂Dz/∂x )
          //                =   (1+dxx,         hx,     dzx   )
          //
          //   对 v（z方向）求偏导 → 切线 Tz：
          //     Tz = ∂P/∂v = ( ∂Dx/∂z,  ∂Y/∂z,  1 + ∂Dz/∂z )
          //                =   (dxz,      hz,     1+dzz      )
          //
          //   法线 = Tz × Tx（右手系，结果朝上）
          // ─────────────────────────────────────────────────────────────────────
          vec3 Tx = vec3(1.0 + dxx, hx,  dzx      );
          vec3 Tz = vec3(dxz,       hz,  1.0 + dzz);
          vec3 norm = normalize(cross(Tz, Tx));

          // ─────────────────────────────────────────────────────────────────────
          // 【雅可比行列式】判断海面是否发生折叠（产生泡沫）
          //
          //   Gerstner 位移把每个粒子从 (u,v) 移到 P(u,v)，
          //   雅可比行列式 J 描述这个映射在局部的"面积拉伸比"：
          //
          //     J = |∂P/∂u  ×  ∂P/∂v| 在 xz 平面上的投影
          //
          //   只取水平分量（忽略 Y），xz 平面上的雅可比为：
          //
          //     J = det | ∂Px/∂u   ∂Px/∂v |  =  (1+∂Dx/∂x)(1+∂Dz/∂z) - (∂Dx/∂z)(∂Dz/∂x)
          //             | ∂Pz/∂u   ∂Pz/∂v |
          //           = (1+dxx)(1+dzz) - dxz·dzx
          //
          //   物理意义：
          //     J > 1  → 局部面积拉伸，海面平坦舒展
          //     J = 1  → 无形变
          //     J < 1  → 局部面积压缩，粒子向某点汇聚
          //     J ≤ 0  → 面积为零或反向，海面发生折叠 → 白浪/泡沫区域
          //
          //   foam = clamp(1-J, 0, 1)：
          //     J=1 时 foam=0（无泡沫）
          //     J=0 时 foam=1（最强泡沫）
          //     J<0 时也 clamp 到 1
          // ─────────────────────────────────────────────────────────────────────
          float J    = (1.0 + dxx) * (1.0 + dzz) - dxz * dzx;
          // smoothstep：J=1.5 时无泡沫，J=0.0 时全泡沫，中间平滑过渡
          float foam = smoothstep(1.5, 0.0, J);

          // ─────────────────────────────────────────────────────────────────────
          // 【颜色 + 光照】
          // ─────────────────────────────────────────────────────────────────────
          // 直接在 fragment 里采样高度，双线性过滤保证跨纹素的颜色顺滑过渡
          float fragY  = blH(texelCenter);
          vec3 deep    = vec3(0.0, 0.549, 0.996); // 深海蓝
          vec3 shallow = vec3(0.3,  0.7,  1.0  ); // 浅天蓝
          vec3 base    = mix(deep, shallow, clamp(abs(fragY) / 5.0, 0.0, 1.0));
          // 叠加泡沫白色（雅可比折叠区域）
          base = mix(base, vec3(1.0), foam);

          // 简单 Lambertian Diffuse
          vec3 L        = normalize(uLightDir);
          float NdotL   = max(0.0, dot(norm, L));
          
          // 光照参数（能量守恒范围内）
          const vec3 kAmbient = vec3(0.15, 0.18, 0.20);	// 天空漫反射
          const vec3 kDirect = vec3(0.85, 0.82, 0.80);	// 太阳直射

          vec3 lighting = kAmbient + kDirect * NdotL;

          vec3 color = base * lighting;
          color = pow(color, vec3(1.0 / 2.2)); // gamma 校正

          gl_FragColor = vec4(color, 1.0);
        }
      `
    }, {
      attributes: ['position', 'uv'],
      uniforms: ['worldViewProjection', 'heightMap', 'displacementX', 'displacementZ', 'uGridCount', 'uEnergyScale'],
      samplers: ['heightMap', 'displacementZ', 'displacementX'],
    })
    
    const oceanSize = 1024
    const ocean = MeshBuilder.CreateGround('ocean', {
      width: oceanSize,
      height: oceanSize,
      subdivisions: 1023
    }, scene)
    ocean.material = oceanMat
    ocean.position = new Vector3(0, 0, oceanSize * 0.75)

    oceanMat.setTexture('heightMap', rawColY)
    oceanMat.setTexture('displacementX', rawColX)
    oceanMat.setTexture('displacementZ', rawColZ)
    oceanMat.setFloat('uGridCount', IMG_SIZE)
    oceanMat.setFloat('uEnergyScale', IMG_SIZE)
    oceanMat.setVector3('uLightDir', new Vector3(0.0, 1.0, 0.0))







    
    scene.registerBeforeRender(async () => {
      uTime += 0.02
      device.queue.writeBuffer(uniformBuf, 0, new Float32Array([uTime, 0, 0, 0]))
      let phillipsEncoder = device.createCommandEncoder()
      let phillipsPass = phillipsEncoder.beginComputePass()
      phillipsPass.setPipeline(writePhillipsPipeline)
      phillipsPass.setBindGroup(0, bindGroupPhillips)
      phillipsPass.dispatchWorkgroups(IMG_SIZE / phillipsGroupSize, IMG_SIZE / phillipsGroupSize)
      phillipsPass.end()
      device.queue.submit([phillipsEncoder.finish()])

      let rowEncoder = device.createCommandEncoder()
      let rowPass = rowEncoder.beginComputePass()
      rowPass.setPipeline(writeRowPipeline)
      rowPass.setBindGroup(0, bindGroupRow)
      rowPass.dispatchWorkgroups(IMG_SIZE / workGroupSizeRowX, IMG_SIZE / workGroupSizeRowY)
      rowPass.end()
      device.queue.submit([rowEncoder.finish()])

      let colEncoder = device.createCommandEncoder()
      let colPass = colEncoder.beginComputePass()
      colPass.setPipeline(writeColPipeline)
      colPass.setBindGroup(0, bindGroupCol)
      colPass.dispatchWorkgroups(IMG_SIZE / workGroupSizeColX, IMG_SIZE / workGroupSizeColY)
      colPass.end()
      device.queue.submit([colEncoder.finish()])

      readAndUpdate(phillipsY, rawPlaneY)
      readAndUpdate(phillipsX, rawPlaneX)
      readAndUpdate(phillipsZ, rawPlaneZ)
      readAndUpdate(rowY, rawRowY)
      readAndUpdate(rowX, rawRowX)
      readAndUpdate(rowZ, rawRowZ)
      readAndUpdate(colY, rawColY)
      readAndUpdate(colX, rawColX)
      readAndUpdate(colZ, rawColZ)
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
  createSea()
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