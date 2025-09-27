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
      <div><a target="_blank" href="/math/fft.html">蝶形变换的 W_[N_k]</a></div>
      <div>Phillips计算（<span class="color-blue">完成</span>）</div>
      <div>逆row计算（<span class="color-blue">完成</span>）</div>
      <div>逆col计算（<span class="color-blue">完成</span>）</div>
      <div>shaderMaterial--海浪高度、位移【col计算完毕，点都是离散的，要如何操作才能变成连续的灰度色值】（<span class="color-red">未完成</span>）</div>
      <div>光照法线（<span class="color-red">未完成</span>）</div>
      <div>泡沫--雅可比行列式算（<span class="color-red">未完成</span>）</div>
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

const fps = ref(0)
const isRunning = ref(false)
const showInfo = ref(false)

let sceneResources, adt
let uTime = 0.0

let IMG_SIZE = 128
let IMG_SIZE_SQRT = Math.sqrt(IMG_SIZE)
let logN = Math.log2(IMG_SIZE)
let half = IMG_SIZE / 2
let workGroupSizeRowX = IMG_SIZE
let workGroupSizeRowY = 1
let workGroupSizeColX = 1
let workGroupSizeColY = IMG_SIZE
let customAmplitude = 0.1
let phillipsGroupSize = 16

let wData = new Float32Array(IMG_SIZE * 4)
let wInverseData = new Float32Array(IMG_SIZE * 4)

const codeTexturePhillips = () => {
  return`
    const TWO_PI: f32 = 6.283185307179586;
								
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
    
    // phillips图谱
    fn phillips(k: vec2<f32>) -> f32 {
      let kLen = length(k);
      if(kLen < 1e-6) { return 0.0; } // 排除 k=0
      let kLen2 = kLen * kLen;
      let kLen4 = kLen2 * kLen2;
      
      let windDir = normalize(vec2<f32>(1.0, -1.0)); // 风向向量
      let windSpeed = 30.5; // 风速
      let A = ${customAmplitude}; // 振幅参数
      let G = 9.8;
      
      let L = windSpeed * windSpeed / G; // 最大波长
      let L2 = L * L;
      
      
      // 基础 Phillips
      var P = A * exp(-1.0 / (kLen2 * L2)) / kLen4;
      
      // 方向锁定  cos²θ
      let cosTheta = (dot(normalize(k), windDir));
      
      P *= cosTheta * cosTheta;
      
      return P;
    }
    
    @group(0) @binding(1) var phillipsTextureY: texture_storage_2d<rgba16float, write>;
    @group(0) @binding(2) var phillipsTextureX: texture_storage_2d<rgba16float, write>;
    @group(0) @binding(3) var phillipsTextureZ: texture_storage_2d<rgba16float, write>;
    @group(0) @binding(4) var<uniform> uTime: f32;
    
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
      let nx = x - size * 0.5;
      let ny = y - size * 0.5;
      
      let k = vec2<f32>(TWO_PI * nx / size, TWO_PI * ny / size);
      
      var h0k = vec2<f32>(gaussValue1 * sqrt(phillips(k) * 0.5));
      var h0kConj = vec2<f32>(gaussValue2 * sqrt(phillips(-k) * 0.5));
      h0kConj.y *= -1.0;
      
      let omega = dispersion(k) * uTime;
      let c = cos(omega);
      let s = sin(omega);
      
      let h1 = complexMultiply(h0k, vec2<f32>(c, s));
      let h2 = complexMultiply(h0kConj, vec2<f32>(c, -s));
      
      let hTildeY = vec2<f32>(h1.x + h2.x, h1.y + h2.y); // 这个是y的
      
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

const codeRow = (isInverse) => {
  return `
    fn complexMultiply(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
      var result: vec4<f32>;
      result.x = a.x * b.x - a.y * b.y;  // 实部
      result.y = a.x * b.y + a.y * b.x;  // 虚部
      return result;
    }
    
    @group(0) @binding(0) var samplerSrcY: sampler;
    @group(0) @binding(1) var phillipsTextureY: texture_2d<f32>;
    @group(0) @binding(2) var rowTextureY: texture_storage_2d<rgba16float, write>;
    
    @group(1) @binding(0) var samplerSrcX: sampler;
    @group(1) @binding(1) var phillipsTextureX: texture_2d<f32>;
    @group(1) @binding(2) var rowTextureX: texture_storage_2d<rgba16float, write>;
    
    @group(2) @binding(0) var samplerSrcZ: sampler;
    @group(2) @binding(1) var phillipsTextureZ: texture_2d<f32>;
    @group(2) @binding(2) var rowTextureZ: texture_storage_2d<rgba16float, write>;
    
    @group(3) @binding(0) var samplerW: sampler;
    @group(3) @binding(1) var wData: texture_2d<f32>;
      
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
    
      let phillipsTexture_y_dims: vec2<f32> = vec2<f32>(textureDimensions(phillipsTextureY, 0));
      let phillipsTexture_y_texture: vec4<f32> = textureSampleLevel(phillipsTextureY, samplerSrcY, vec2<f32>(global_id.xy) / phillipsTexture_y_dims, 0.0);
      
      let phillipsTexture_x_dims: vec2<f32> = vec2<f32>(textureDimensions(phillipsTextureX, 0));
      let phillipsTexture_x_texture: vec4<f32> = textureSampleLevel(phillipsTextureX, samplerSrcX, vec2<f32>(global_id.xy) / phillipsTexture_x_dims, 0.0);
      
      let phillipsTexture_z_dims: vec2<f32> = vec2<f32>(textureDimensions(phillipsTextureZ, 0));
      let phillipsTexture_z_texture: vec4<f32> = textureSampleLevel(phillipsTextureZ, samplerSrcZ, vec2<f32>(global_id.xy) / phillipsTexture_z_dims, 0.0);
    
      let w_dims: vec2<f32> = vec2<f32>(textureDimensions(wData, 0));
      let w_texture: vec4<f32> = textureSampleLevel(wData, samplerW, vec2<f32>(global_id.xy) / w_dims, 0.0);
    
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

const codeCol = (isInverse) => {
  return `
    fn complexMultiply(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
      var result: vec4<f32>;
      result.x = a.x * b.x - a.y * b.y;  // 实部
      result.y = a.x * b.y + a.y * b.x;  // 虚部
      return result;
    }
    
    @group(0) @binding(0) var samplerSrcY: sampler;
    @group(0) @binding(1) var rowTextureY: texture_2d<f32>;
    @group(0) @binding(2) var colTextureY: texture_storage_2d<rgba32float, write>;
    
    @group(1) @binding(0) var samplerSrcX: sampler;
    @group(1) @binding(1) var rowTextureX: texture_2d<f32>;
    @group(1) @binding(2) var colTextureX: texture_storage_2d<rgba32float, write>;
    
    @group(2) @binding(0) var samplerSrcZ: sampler;
    @group(2) @binding(1) var rowTextureZ: texture_2d<f32>;
    @group(2) @binding(2) var colTextureZ: texture_storage_2d<rgba32float, write>;
    
    @group(3) @binding(0) var samplerW: sampler;
    @group(3) @binding(1) var wData: texture_2d<f32>;
    
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
      let src_y_dims: vec2<f32> = vec2<f32>(textureDimensions(rowTextureY, 0));
      let src_y_texture: vec4<f32> = textureSampleLevel(rowTextureY, samplerSrcY, vec2<f32>(global_id.xy) / src_y_dims, 0.0);
      
      let src_x_dims: vec2<f32> = vec2<f32>(textureDimensions(rowTextureX, 0));
      let src_x_texture: vec4<f32> = textureSampleLevel(rowTextureX, samplerSrcX, vec2<f32>(global_id.xy) / src_x_dims, 0.0);
      
      let src_z_dims: vec2<f32> = vec2<f32>(textureDimensions(rowTextureZ, 0));
      let src_z_texture: vec4<f32> = textureSampleLevel(rowTextureZ, samplerSrcZ, vec2<f32>(global_id.xy) / src_z_dims, 0.0);
    
      let w_dims: vec2<f32> = vec2<f32>(textureDimensions(wData, 0));
      let w_texture: vec4<f32> = textureSampleLevel(wData, samplerW, vec2<f32>(global_id.xy) / w_dims, 0.0);
    
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
      let outY = sharedDataY[local_id.y] * scale;
      let outX = sharedDataX[local_id.y] * scale;
      let outZ = sharedDataZ[local_id.y] * scale;
      
      textureStore(colTextureY, vec2<i32>(i32(global_id.x), i32(local_id.y)), vec4<f32>(outY.x, outY.y, 0.0, 1.0));
      textureStore(colTextureX, vec2<i32>(i32(global_id.x), i32(local_id.y)), vec4<f32>(outX.x, outX.y, 0.0, 1.0));
      textureStore(colTextureZ, vec2<i32>(i32(global_id.x), i32(local_id.y)), vec4<f32>(outZ.x, outZ.y, 0.0, 1.0));
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

  const createSea = () => {
    for (let i = 0; i < IMG_SIZE; i++) {
      let angle = (2 * Math.PI * i) / IMG_SIZE

      // 正傅里叶旋转因子
      // let rePositive = Math.cos(angle)
      // let imPositive = -Math.sin(angle)
      // wData[i * 4] = rePositive // re
      // wData[i * 4 + 1] = imPositive // im
      // wData[i * 4 + 2] = 0
      // wData[i * 4 + 3] = 1

      // 逆傅里叶旋转因子
      let rePositiveInverse = Math.cos(angle)
      let imPositiveInverse = Math.sin(angle)
      wInverseData[i * 4] = rePositiveInverse // re
      wInverseData[i * 4 + 1] = imPositiveInverse // im
      wInverseData[i * 4 + 2] = 0
      wInverseData[i * 4 + 3] = 1
    }

    const rawTextureW = new RawTexture(wData, IMG_SIZE, 1, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_LINEAR_LINEAR)
    const rawTextureInverseW = new RawTexture(wInverseData, IMG_SIZE, 1, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_LINEAR_LINEAR)

    const uniformBuffer = new UniformBuffer(engine)
    uniformBuffer.addUniform('uTime', 4)

    // phillips 相关
    const phillipsY = MeshBuilder.CreatePlane('phillipsY', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const phillipsX = MeshBuilder.CreatePlane('phillipsX', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const phillipsZ = MeshBuilder.CreatePlane('phillipsZ', { width: IMG_SIZE, height: IMG_SIZE }, scene)

    const phillipsTextureY = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_HALF_FLOAT)
    const phillipsTextureX = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_HALF_FLOAT)
    const phillipsTextureZ = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_HALF_FLOAT)

    const shaderPhillips = new ComputeShader(
      'shaderPhillips',
      engine, { computeSource: codeTexturePhillips() }, {
        bindingsMapping: {
          'phillipsTextureY': { group: 0, binding: 1 },
          'phillipsTextureX': { group: 0, binding: 2 },
          'phillipsTextureZ': { group: 0, binding: 3 },
          'uTime': { group: 0, binding: 4 },
        }
      }
    )
    shaderPhillips.setStorageTexture('phillipsTextureY', phillipsTextureY)
    shaderPhillips.setStorageTexture('phillipsTextureX', phillipsTextureX)
    shaderPhillips.setStorageTexture('phillipsTextureZ', phillipsTextureZ)

    const phillipsMatY = new StandardMaterial('phillipsMatY', scene)
    phillipsMatY.diffuseTexture = phillipsTextureY
    phillipsY.material = phillipsMatY
    phillipsY.position = new Vector3(-IMG_SIZE - 20, 0, IMG_SIZE + 20)
    phillipsY.rotation = new Vector3(Math.PI / 2, 0, 0)
    const phillipsMatX = new StandardMaterial('phillipsMatX', scene)
    phillipsMatX.diffuseTexture = phillipsTextureX
    phillipsX.material = phillipsMatX
    phillipsX.position = new Vector3(-IMG_SIZE - 20, 0, 0)
    phillipsX.rotation = new Vector3(Math.PI / 2, 0, 0)
    const phillipsMatZ = new StandardMaterial('phillipsMatZ', scene)
    phillipsMatZ.diffuseTexture = phillipsTextureZ
    phillipsZ.material = phillipsMatZ
    phillipsZ.position = new Vector3(-IMG_SIZE - 20, 0, -IMG_SIZE - 20)
    phillipsZ.rotation = new Vector3(Math.PI / 2, 0, 0)


    // 逆 row 相关
    const rowGroundInverseY = MeshBuilder.CreatePlane('rowY', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const rowGroundInverseX = MeshBuilder.CreatePlane('rowX', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const rowGroundInverseZ = MeshBuilder.CreatePlane('rowZ', { width: IMG_SIZE, height: IMG_SIZE }, scene)

    const rowTextureInverseY = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_HALF_FLOAT)
    const rowTextureInverseX = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_HALF_FLOAT)
    const rowTextureInverseZ = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_HALF_FLOAT)

    const shaderRowInverse = new ComputeShader(
      'shaderRowInverse',
      engine, { computeSource: codeRow(true) }, {
        bindingsMapping: {
          'phillipsTextureY': { group: 0, binding: 1 },
          'rowTextureY': { group: 0, binding: 2 },
          'phillipsTextureX': { group: 1, binding: 1 },
          'rowTextureX': { group: 1, binding: 2 },
          'phillipsTextureZ': { group: 2, binding: 1 },
          'rowTextureZ': { group: 2, binding: 2 },
          'wData': { group: 3, binding: 1 },
        }
      }
    )
    shaderRowInverse.setTexture('phillipsTextureY', phillipsTextureY)
    shaderRowInverse.setTexture('phillipsTextureX', phillipsTextureX)
    shaderRowInverse.setTexture('phillipsTextureZ', phillipsTextureZ)
    shaderRowInverse.setTexture('wData', rawTextureInverseW)
    shaderRowInverse.setStorageTexture('rowTextureY', rowTextureInverseY)
    shaderRowInverse.setStorageTexture('rowTextureX', rowTextureInverseX)
    shaderRowInverse.setStorageTexture('rowTextureZ', rowTextureInverseZ)

    const rowMatInverseY = new StandardMaterial('rowMatInverseY', scene)
    rowMatInverseY.diffuseTexture = rowTextureInverseY
    rowGroundInverseY.material = rowMatInverseY
    rowGroundInverseY.position = new Vector3(0, 0, IMG_SIZE + 20)
    rowGroundInverseY.rotation = new Vector3(Math.PI / 2, 0, 0)
    const rowMatInverseX = new StandardMaterial('rowMatInverseX', scene)
    rowMatInverseX.diffuseTexture = rowTextureInverseX
    rowGroundInverseX.material = rowMatInverseX
    rowGroundInverseX.position = new Vector3(0, 0, 0)
    rowGroundInverseX.rotation = new Vector3(Math.PI / 2, 0, 0)
    const rowMatInverseZ = new StandardMaterial('rowMatInverseZ', scene)
    rowMatInverseZ.diffuseTexture = rowTextureInverseZ
    rowGroundInverseZ.material = rowMatInverseZ
    rowGroundInverseZ.position = new Vector3(0, 0, -IMG_SIZE - 20)
    rowGroundInverseZ.rotation = new Vector3(Math.PI / 2, 0, 0)


    // 逆 col 相关
    const colGroundInverseY = MeshBuilder.CreatePlane('col', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const colGroundInverseX = MeshBuilder.CreatePlane('col', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const colGroundInverseZ = MeshBuilder.CreatePlane('col', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const colTextureInverseY = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    const colTextureInverseX = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    const colTextureInverseZ = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)


    const shaderColInverse = new ComputeShader(
      'shaderColInverse',
      engine, { computeSource: codeCol(true) }, {
        bindingsMapping: {
          'rowTextureY': { group: 0, binding: 1 },
          'colTextureY': { group: 0, binding: 2 },
          'rowTextureX': { group: 1, binding: 1 },
          'colTextureX': { group: 1, binding: 2 },
          'rowTextureZ': { group: 2, binding: 1 },
          'colTextureZ': { group: 2, binding: 2 },
          'wData': { group: 3, binding: 1 },
        }
      }
    )
    shaderColInverse.setTexture('rowTextureY', rowTextureInverseY)
    shaderColInverse.setTexture('rowTextureX', rowTextureInverseX)
    shaderColInverse.setTexture('rowTextureZ', rowTextureInverseZ)
    shaderColInverse.setTexture('wData', rawTextureInverseW)
    shaderColInverse.setStorageTexture('colTextureY', colTextureInverseY)
    shaderColInverse.setStorageTexture('colTextureX', colTextureInverseX)
    shaderColInverse.setStorageTexture('colTextureZ', colTextureInverseZ)

    const colMatInverseY = new StandardMaterial('colMatInverseY', scene)
    colMatInverseY.diffuseTexture = colTextureInverseY
    colGroundInverseY.material = colMatInverseY
    colGroundInverseY.position = new Vector3(IMG_SIZE + 20, 0, IMG_SIZE + 20)
    colGroundInverseY.rotation = new Vector3(Math.PI / 2, 0, 0)
    const colMatInverseX = new StandardMaterial('colMatInverseX', scene)
    colMatInverseX.diffuseTexture = colTextureInverseX
    colGroundInverseX.material = colMatInverseX
    colGroundInverseX.position = new Vector3(IMG_SIZE + 20, 0, 0)
    colGroundInverseX.rotation = new Vector3(Math.PI / 2, 0, 0)
    const colMatInverseZ = new StandardMaterial('colMatInverseZ', scene)
    colMatInverseZ.diffuseTexture = colTextureInverseZ
    colGroundInverseZ.material = colMatInverseZ
    colGroundInverseZ.position = new Vector3(IMG_SIZE + 20, 0, -IMG_SIZE - 20)
    colGroundInverseZ.rotation = new Vector3(Math.PI / 2, 0, 0)




    const oceanMat = new ShaderMaterial('oceanMat', scene, {
      vertexSource: `
        precision highp float;

        attribute vec3 position;
        attribute vec2 uv;
        
        uniform mat4 worldViewProjection;
        uniform sampler2D heightMap;
        uniform sampler2D displacementX;
        uniform sampler2D displacementZ;
        uniform float uGridCount;

        varying vec3 vColor;
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          
          vec4 h = texture2D(heightMap, uv);
          vec4 x = texture2D(displacementX, uv);
          vec4 z = texture2D(displacementZ, uv);
          vec3 pos = position;
          // pos.y += length(h.xy) * 128.0;
          // pos.x += length(x.xy) * 128.0;
          // pos.z += length(z.xy) * 128.0;
          
          gl_Position = worldViewProjection * vec4(pos, 1.0);
        }
      `,
      fragmentSource: `
        precision highp float;
        
        uniform sampler2D heightMap;
        
        varying vec3 vColor;
        varying vec2 vUv;

        void main(){
          vec4 h = texture2D(heightMap, vUv);
          float r = length(h.xy) * 128.0;
          gl_FragColor = vec4(r, 0.0, 0.0, 1.0);
        }
      `
    }, {
      attributes: ['position', 'uv'],
      uniforms: ['worldViewProjection', 'heightMap', 'displacementX', 'displacementZ', 'uGridCount'],
      samplers: ['heightMap', 'displacementZ', 'displacementX'],
    })
    oceanMat.setTexture('heightMap', colTextureInverseY)
    oceanMat.setTexture('displacementX', colTextureInverseX)
    oceanMat.setTexture('displacementZ', colTextureInverseZ)
    oceanMat.setFloat('uGridCount', IMG_SIZE)
    // 创建一张 IMG_SIZE * 2, 的平面（细分必须 = 纹理分辨率）
    const ocean = MeshBuilder.CreateGround('ocean', {
      width: IMG_SIZE * 1,
      height: IMG_SIZE * 1,
      subdivisions: IMG_SIZE - 1
    }, scene)
    ocean.material = oceanMat
    ocean.position = new Vector3(0, 20, 0)
 




    scene.registerBeforeRender(async () => {
      uTime += 0.02
      uniformBuffer.updateFloat('uTime', uTime)
      uniformBuffer.update()

      shaderPhillips.setUniformBuffer('uTime', uniformBuffer)

      shaderPhillips.dispatchWhenReady(IMG_SIZE / phillipsGroupSize, IMG_SIZE / phillipsGroupSize, 1).then(() => {
        // 计算 逆 row 纹理
        shaderRowInverse.dispatchWhenReady(IMG_SIZE / workGroupSizeRowX, IMG_SIZE / workGroupSizeRowY, 1).then(() => {
          // 计算 逆 col 纹理
          shaderColInverse.dispatchWhenReady(IMG_SIZE / workGroupSizeColX, IMG_SIZE / workGroupSizeColY, 1)
        })
      })
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