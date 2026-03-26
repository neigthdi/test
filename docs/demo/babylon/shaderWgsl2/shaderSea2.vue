<template>
  <div>
    <div class="pointer" @click="showInfo = !showInfo">{{ !showInfo ? '展示' : '关闭' }}优化前后对比</div>
    <table v-if="showInfo" style="border-collapse:collapse; margin-bottom:8px; font-size:13px;">
      <thead>
        <tr>
          <th style="border:1px solid #ccc; padding:4px 8px;"></th>
          <th style="border:1px solid #ccc; padding:4px 8px;">优化前（shaderSea1）</th>
          <th style="border:1px solid #ccc; padding:4px 8px;">优化后（shaderSea2）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:1px solid #ccc; padding:4px 8px; font-weight:bold;">优化1：调试回读</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#c00;">每帧 9 次 readAndUpdate<br>（copyTextureToBuffer + mapAsync，CPU-GPU 阻塞同步）</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#080;">删除全部调试回读<br>（删除 phillips/row/col 共 9 次 CPU 往返）</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:4px 8px; font-weight:bold;">优化2：纹理绑定</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#c00;">compute → native colY/X/Z → CPU 回读<br>→ rawColY/X/Z → 渲染（每帧 3 次 GPU→CPU→GPU）</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#080;">compute 直接写入 BabylonJS 渲染纹理<br>（_hardwareTexture.underlyingResource，零 CPU 往返）</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:4px 8px; font-weight:bold;">优化3：蝶形并行度</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#c00;">workgroup_size = N = 128<br>128 线程跑相同串行循环，利用率 1/128<br>蝶形计算量：128[workgroup_size] × 64[blockNum*kFor] × 7[logN] = 57344 次/pass</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#080;">workgroup_size = N/2 = 64（Stockham 并行）<br>每线程负责 1 个蝶形对，利用率 100%<br>蝶形计算量：64[workgroup_size] × 7[logN] = 448 次/pass</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:4px 8px; font-weight:bold;">共享内存</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#c00;">sharedData×3 + tempData×3 = 6 个数组<br>128 × vec4 × 6 = 12 KB / workgroup</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#080;">sharedData×3，原地写回，去掉 tempData<br>128 × vec4 × 3 = 6 KB / workgroup（节省 50%）</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:4px 8px; font-weight:bold;">workgroupBarrier 数</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#c00;">row ~22 个 / col ~36 个（含冗余）</td>
          <td style="border:1px solid #ccc; padding:4px 8px; color:#080;">row/col 均为 1 + 2×logN = 15 个</td>
        </tr>
      </tbody>
    </table>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderSea2" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
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
let logN = Math.log2(IMG_SIZE) // Math.log2(128) = 7 -> 2⁷ = 128
let half = IMG_SIZE / 2
// 优化3: workgroup_size = N/2，每线程负责 1 个蝶形对（原为 N=128，全线程串行）
let workGroupSizeRowX = IMG_SIZE / 2   // 64
let workGroupSizeRowY = 1
let workGroupSizeColX = 1
let workGroupSizeColY = IMG_SIZE / 2   // 64
let customAmplitude = 0.8
let customWindSpeed = 45.223
let phillipsGroupSize = 16
let uTileCount = 2  // FFT patch 平铺次数，1024/4=256 世界单位一个波形周期

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

// 优化3: 真正并行的 Stockham 蝶形——每线程负责 1 个蝶形对
// - workgroup_size = N/2 = 64（原为 N=128，128 线程串行跑相同循环，利用率 1/128）
// - 去掉 tempData 6 个共享数组，原地写回 sharedData（节省 50% 共享内存）
// - 每阶段只需 2 个 barrier（读完 1 个 + 写完 1 个），原为 3-4 个
// - 总 barrier 数：1 + 2×logN = 15（原为约 5×logN + 1 = 36）
//
// 算法说明（Stockham 自排序 FFT）：
//   每阶段 m，线程 t (0..N/2-1) 处理第 t 个蝶形对：
//     读：sharedData[t] 和 sharedData[t + N/2]
//     写：sharedData[outputIndex1] 和 sharedData[outputIndex2]
//       outputIndex1 = 2*(t - t%step) + t%step
//       outputIndex2 = outputIndex1 + step
//     旋转因子索引：(t % step) * (N/2 >> m)
//
// 原地写回安全性：
//   每阶段每个位置恰好被一个线程读取、一个线程写入（双射），
//   先 barrier 确保所有读取完成后再写，不存在读写竞争。
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

    // 优化3: 去掉 tempData（原有 6 个 128×vec4 共享数组），节省 50% 共享内存
    var<workgroup> sharedDataY: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> sharedDataX: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> sharedDataZ: array<vec4<f32>, ${IMG_SIZE}u>;

    // workgroup_size(64, 1, 1)：
    //   X=64 = N/2，每线程负责 2 个元素（t 和 t+N/2），64×2 = 128 = N，1 个 workgroup 覆盖一整行
    //   Y=1  ：每个 workgroup 只处理 1 行，行号由 global_id.y（= workgroup_id.y）区分
    //   Z=1  ：不使用 Z 维度
    @compute @workgroup_size(${workGroupSizeRowX}, ${workGroupSizeRowY}, 1)
    fn main(
      @builtin(global_invocation_id) global_id: vec3<u32>,
      @builtin(local_invocation_id) local_id: vec3<u32>
    ) {
      let t = local_id.x;  // 0..63，每线程处理一个蝶形对

      // 每线程加载 2 个元素（上半段 t 和下半段 t+N/2）
      sharedDataY[t] = textureLoad(phillipsTextureY, vec2<i32>(i32(t), i32(global_id.y)), 0);
      sharedDataY[t + ${half}u]  = textureLoad(phillipsTextureY, vec2<i32>(i32(t + ${half}u),  i32(global_id.y)), 0);
      sharedDataX[t] = textureLoad(phillipsTextureX, vec2<i32>(i32(t), i32(global_id.y)), 0);
      sharedDataX[t + ${half}u]  = textureLoad(phillipsTextureX, vec2<i32>(i32(t + ${half}u),  i32(global_id.y)), 0);
      sharedDataZ[t] = textureLoad(phillipsTextureZ, vec2<i32>(i32(t), i32(global_id.y)), 0);
      sharedDataZ[t + ${half}u]  = textureLoad(phillipsTextureZ, vec2<i32>(i32(t + ${half}u),  i32(global_id.y)), 0);

      workgroupBarrier(); // 确保所有线程加载完成

      for (var m = 0u; m < ${logN}u; m++) {
        let step = 1u << m;

        // 线程 t 负责的输出位置（Stockham 蝶形索引公式）推导：
        //   ── 每步的结构 ──────────────────────────────────────────────────
        //   第 m 步：step = 2^m。这个的由来是FFT 的本质：递归折半。
        //   整个数组（长度 N）被划分为若干"大块"，每块大小 = 2*step。
        //   每块内有 step 个蝶形对，每对由两个相距 step 的元素组成。
        //   共有 N/2 个蝶形对，恰好分配给 N/2 个线程（线程 t = 0..N/2-1）。
        //
        //   ── 分解线程 t ──────────────────────────────────────────────────
        //   线程 t 属于哪个大块？
        //     块编号   = floor(t / step) = (t - t%step) / step
        //   在块内处于第几个蝶形对？
        //     块内偏移 = t % step
        //
        //   ── 计算输出位置 ─────────────────────────────────────────────────
        //   该块在输出数组中的起始位置：
        //     块起始 = 块编号 × 2*step = 2 × (t - t%step)
        //   加上块内偏移，得到两个输出位置：
        //     index1 = 2*(t - t%step) + t%step        ← 蝶形对的上元素
        //     index2 = index1 + step                  ← 蝶形对的下元素
        //  ─────────────────────────────────────────────────
        //
        //   ── 以 N=8 为例验证（共 3 个阶段，每阶段 4 个线程 t=0..3）──────────
        //
        //   阶段 0（step=1）：块大小=2，每块 1 对
        //     t=0: k=0, r=0 → index1=0,  index2=1   对: [0↔1]
        //     t=1: k=1, r=0 → index1=2,  index2=3   对: [2↔3]
        //     t=2: k=2, r=0 → index1=4,  index2=5   对: [4↔5]
        //     t=3: k=3, r=0 → index1=6,  index2=7   对: [6↔7]
        //
        //   阶段 1（step=2）：块大小=4，每块 2 对
        //     t=0: k=0, r=0 → index1=0,  index2=2   对: [0↔2]
        //     t=1: k=0, r=1 → index1=1,  index2=3   对: [1↔3]
        //     t=2: k=1, r=0 → index1=4,  index2=6   对: [4↔6]
        //     t=3: k=1, r=1 → index1=5,  index2=7   对: [5↔7]
        //
        //   阶段 2（step=4）：块大小=8，整体 1 块 4 对
        //     t=0: k=0, r=0 → index1=0,  index2=4   对: [0↔4]
        //     t=1: k=0, r=1 → index1=1,  index2=5   对: [1↔5]
        //     t=2: k=0, r=2 → index1=2,  index2=6   对: [2↔6]
        //     t=3: k=0, r=3 → index1=3,  index2=7   对: [3↔7]
        //
        //   规律：step 每翻倍，蝶形对的两元素距离也翻倍——递归折半的物理体现。
        //  ─────────────────────────────────────────────────
        let outputIndex1 = 2u * (t - t % step) + t % step;
        let outputIndex2 = outputIndex1 + step;

        // 旋转因子：W_N^k，k = (t%step) * (N/(2*blockSize)) = (t%step) * (N/2 >> m)
        let indexW = (t % step) * (${half}u >> m);
        let w = textureLoad(wData, vec2<i32>(i32(indexW), 0), 0);

        // 读入局部变量（Stockham 模式：始终从 t 和 t+N/2 读取）
        let pY1 = sharedDataY[t];
        let pY2 = complexMultiply(sharedDataY[t + ${half}u], w);
        let pX1 = sharedDataX[t];
        let pX2 = complexMultiply(sharedDataX[t + ${half}u], w);
        let pZ1 = sharedDataZ[t];
        let pZ2 = complexMultiply(sharedDataZ[t + ${half}u], w);

        workgroupBarrier(); // 所有线程读完后，再原地写回（防止读写竞争）

        sharedDataY[outputIndex1] = pY1 + pY2;
        sharedDataY[outputIndex2] = pY1 - pY2;
        sharedDataX[outputIndex1] = pX1 + pX2;
        sharedDataX[outputIndex2] = pX1 - pX2;
        sharedDataZ[outputIndex1] = pZ1 + pZ2;
        sharedDataZ[outputIndex2] = pZ1 - pZ2;

        workgroupBarrier(); // 写入完成，下一阶段可以安全读取
      }

      // 如果是逆fft，最后一步需要 / √N；如果是正fft，则不需要
      let scale = select(1.0, 1.0 / f32(${IMG_SIZE_SQRT}), ${isInverse});

      let outY0 = sharedDataY[t] * scale;
      let outY1 = sharedDataY[t + ${half}u] * scale;
      let outX0 = sharedDataX[t] * scale;
      let outX1 = sharedDataX[t + ${half}u] * scale;
      let outZ0 = sharedDataZ[t] * scale;
      let outZ1 = sharedDataZ[t + ${half}u] * scale;

      // 每线程写出 2 个元素
      textureStore(rowTextureY, vec2<i32>(i32(t), i32(global_id.y)), vec4<f32>(outY0.x, outY0.y, 0.0, 1.0));
      textureStore(rowTextureY, vec2<i32>(i32(t + ${half}u), i32(global_id.y)), vec4<f32>(outY1.x, outY1.y, 0.0, 1.0));
      textureStore(rowTextureX, vec2<i32>(i32(t), i32(global_id.y)), vec4<f32>(outX0.x, outX0.y, 0.0, 1.0));
      textureStore(rowTextureX, vec2<i32>(i32(t + ${half}u), i32(global_id.y)), vec4<f32>(outX1.x, outX1.y, 0.0, 1.0));
      textureStore(rowTextureZ, vec2<i32>(i32(t), i32(global_id.y)), vec4<f32>(outZ0.x, outZ0.y, 0.0, 1.0));
      textureStore(rowTextureZ, vec2<i32>(i32(t + ${half}u), i32(global_id.y)), vec4<f32>(outZ1.x, outZ1.y, 0.0, 1.0));
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
    var<workgroup> sharedDataX: array<vec4<f32>, ${IMG_SIZE}u>;
    var<workgroup> sharedDataZ: array<vec4<f32>, ${IMG_SIZE}u>;

    // workgroup_size(1, 64, 1)：
    //   X=1  ：每个 workgroup 只处理 1 列，列号由 global_id.x（= workgroup_id.x）区分
    //   Y=64 = N/2，每线程负责 2 个元素（t 和 t+N/2），64×2 = 128 = N，1 个 workgroup 覆盖一整列
    //   Z=1  ：不使用 Z 维度
    @compute @workgroup_size(${workGroupSizeColX}, ${workGroupSizeColY}, 1)
    fn main(
      @builtin(global_invocation_id) global_id: vec3<u32>,
      @builtin(local_invocation_id) local_id: vec3<u32>
    ) {
      let t = local_id.y;  // 0..63，每线程处理一个蝶形对

      // 每线程加载 2 个列元素（上半段 t 和下半段 t+N/2）
      sharedDataY[t] = textureLoad(rowTextureY, vec2<i32>(i32(global_id.x), i32(t)), 0);
      sharedDataY[t + ${half}u] = textureLoad(rowTextureY, vec2<i32>(i32(global_id.x), i32(t + ${half}u)), 0);
      sharedDataX[t] = textureLoad(rowTextureX, vec2<i32>(i32(global_id.x), i32(t)), 0);
      sharedDataX[t + ${half}u] = textureLoad(rowTextureX, vec2<i32>(i32(global_id.x), i32(t + ${half}u)), 0);
      sharedDataZ[t] = textureLoad(rowTextureZ, vec2<i32>(i32(global_id.x), i32(t)), 0);
      sharedDataZ[t + ${half}u] = textureLoad(rowTextureZ, vec2<i32>(i32(global_id.x), i32(t + ${half}u)), 0);

      workgroupBarrier(); // 确保所有线程加载完成

      for (var m = 0u; m < ${logN}u; m++) {
        let step = 1u << m;
        let outputIndex1 = 2u * (t - t % step) + t % step;
        let outputIndex2 = outputIndex1 + step;
        let indexW = (t % step) * (${half}u >> m);
        let w = textureLoad(wData, vec2<i32>(i32(indexW), 0), 0);

        let pY1 = sharedDataY[t];
        let pY2 = complexMultiply(sharedDataY[t + ${half}u], w);
        let pX1 = sharedDataX[t];
        let pX2 = complexMultiply(sharedDataX[t + ${half}u], w);
        let pZ1 = sharedDataZ[t];
        let pZ2 = complexMultiply(sharedDataZ[t + ${half}u], w);

        workgroupBarrier(); // 所有线程读完后，再原地写回

        sharedDataY[outputIndex1] = pY1 + pY2;
        sharedDataY[outputIndex2] = pY1 - pY2;
        sharedDataX[outputIndex1] = pX1 + pX2;
        sharedDataX[outputIndex2] = pX1 - pX2;
        sharedDataZ[outputIndex1] = pZ1 + pZ2;
        sharedDataZ[outputIndex2] = pZ1 - pZ2;

        workgroupBarrier(); // 写入完成
      }

      // 如果是逆fft，最后一步需要 / √N；如果是正fff，则不需要
      let scale = select(1.0, 1.0 / f32(${IMG_SIZE_SQRT}), ${isInverse});

      // ─────────────────────────────────────────────────────────────────────
      // sign 说明：Phillips 阶段用坐标偏移替代了预乘 (-1)^(x+y)，
      // 导致 IFFT 输出带有 (-1)^(x+y) 的棋盘格，补乘一次还原。
      // t 和 t+N/2 的奇偶性相同（N/2=64 为偶数），共用同一个 sign。
      // ─────────────────────────────────────────────────────────────────────
      let sign = select(-1.0, 1.0, (global_id.x + t) % 2u == 0u);

      let outY0 = sharedDataY[t] * scale * sign;
      let outY1 = sharedDataY[t + ${half}u] * scale * sign;
      let outX0 = sharedDataX[t] * scale * sign;
      let outX1 = sharedDataX[t + ${half}u] * scale * sign;
      let outZ0 = sharedDataZ[t] * scale * sign;
      let outZ1 = sharedDataZ[t + ${half}u] * scale * sign;

      // 优化2: 直接写入 BabylonJS 渲染纹理，无需 CPU 回读
      textureStore(colTextureY, vec2<i32>(i32(global_id.x), i32(t)), vec4<f32>(outY0.x, outY0.y, 0.0, 1.0));
      textureStore(colTextureY, vec2<i32>(i32(global_id.x), i32(t + ${half}u)), vec4<f32>(outY1.x, outY1.y, 0.0, 1.0));
      textureStore(colTextureX, vec2<i32>(i32(global_id.x), i32(t)), vec4<f32>(outX0.x, outX0.y, 0.0, 1.0));
      textureStore(colTextureX, vec2<i32>(i32(global_id.x), i32(t + ${half}u)), vec4<f32>(outX1.x, outX1.y, 0.0, 1.0));
      textureStore(colTextureZ, vec2<i32>(i32(global_id.x), i32(t)), vec4<f32>(outZ0.x, outZ0.y, 0.0, 1.0));
      textureStore(colTextureZ, vec2<i32>(i32(global_id.x), i32(t + ${half}u)), vec4<f32>(outZ1.x, outZ1.y, 0.0, 1.0));
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
  const ele = document.getElementById("shaderSea2") as any

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
  // 全功能 usage（textureW 初始化时需要 COPY_SRC/COPY_DST）
  let usage = windows.GPUTextureUsage.STORAGE_BINDING | windows.GPUTextureUsage.TEXTURE_BINDING | windows.GPUTextureUsage.COPY_SRC |
    windows.GPUTextureUsage.COPY_DST
  // 优化1: 中间纹理（phillips/row）不再回读 CPU，无需 COPY_SRC/COPY_DST
  let intermediateUsage = windows.GPUTextureUsage.STORAGE_BINDING | windows.GPUTextureUsage.TEXTURE_BINDING

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
    // 读取数据到 rawTextureW（仅初始化时一次，无性能问题）
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
    /** w 的结束 */




    /** phillips 的开始 */
    // 优化1: 使用 intermediateUsage，省去 COPY_SRC/COPY_DST（不再回读调试纹理）
    let phillipsY = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage: intermediateUsage })
    let phillipsX = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage: intermediateUsage })
    let phillipsZ = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage: intermediateUsage })
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
    /** phillips 的结束 */




    /** row 的开始 */
    // 优化1: 使用 intermediateUsage，省去 COPY_SRC/COPY_DST
    let rowY = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage: intermediateUsage })
    let rowX = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage: intermediateUsage })
    let rowZ = device.createTexture({ size: [IMG_SIZE, IMG_SIZE], format: 'rgba32float', usage: intermediateUsage })
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
    /** row 的结束 */




    /** col 的开始 */
    // 优化2: 直接使用 BabylonJS 渲染纹理作为 compute 输出，彻底省去 CPU-GPU 往返
    // CreateRGBAStorageTexture 创建的纹理同时带 STORAGE_BINDING + TEXTURE_BINDING，
    // compute 写入后 BabylonJS 渲染着色器可直接采样，无需任何 readAndUpdate。
    let rawColY = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    rawColY.wrapU = Texture.WRAP_ADDRESSMODE
    rawColY.wrapV = Texture.WRAP_ADDRESSMODE
    let rawColX = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    rawColX.wrapU = Texture.WRAP_ADDRESSMODE
    rawColX.wrapV = Texture.WRAP_ADDRESSMODE
    let rawColZ = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.LINEAR_LINEAR, Constants.TEXTURETYPE_FLOAT)
    rawColZ.wrapU = Texture.WRAP_ADDRESSMODE
    rawColZ.wrapV = Texture.WRAP_ADDRESSMODE

    // 取出底层 WebGPU 原生纹理，直接绑给 compute shader 的 storage 输出
    let nativeColY = (rawColY._texture as any)._hardwareTexture.underlyingResource
    let nativeColX = (rawColX._texture as any)._hardwareTexture.underlyingResource
    let nativeColZ = (rawColZ._texture as any)._hardwareTexture.underlyingResource

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
        { binding: 5, resource: nativeColY.createView() },  // 优化2: 直接写入渲染纹理
        { binding: 6, resource: nativeColX.createView() },
        { binding: 7, resource: nativeColZ.createView() },
      ]
    })
    /** col 的结束 */




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
          float s = 1.0/uGridCount;
          vec2 p = fract(uv * uGridCount), c = (floor(uv * uGridCount) + 0.5)*s;
          return mix(mix(texture2D(heightMap, c).x, texture2D(heightMap, c + vec2(s, 0.0)).x, p.x),
                     mix(texture2D(heightMap, c + vec2(0.0, s)).x, texture2D(heightMap, c + vec2(s, s)).x, p.x), p.y);
        }
        float blX(vec2 uv) {
          float s = 1.0/uGridCount;
          vec2 p = fract(uv * uGridCount), c = (floor(uv * uGridCount) + 0.5)*s;
          return mix(mix(texture2D(displacementX, c).x, texture2D(displacementX, c + vec2(s, 0.0)).x, p.x),
                     mix(texture2D(displacementX, c + vec2(0.0, s)).x, texture2D(displacementX, c + vec2(s, s)).x, p.x), p.y);
        }
        float blZ(vec2 uv) {
          float s = 1.0/uGridCount;
          vec2 p = fract(uv * uGridCount), c = (floor(uv * uGridCount) + 0.5)*s;
          return mix(mix(texture2D(displacementZ, c).x, texture2D(displacementZ, c + vec2(s, 0.0)).x, p.x),
                     mix(texture2D(displacementZ, c + vec2(0.0, s)).x, texture2D(displacementZ, c + vec2(s, s)).x, p.x), p.y);
        }

        void main() {
          vec2 texelCenter = vUv;
          float d = 1.0 / uGridCount;

          // ∂Y/∂x  ∂Y/∂z
          float hx  = (blH(texelCenter + vec2(d, 0.0)) - blH(texelCenter - vec2(d, 0.0))) * 0.5;
          float hz  = (blH(texelCenter + vec2(0.0,d)) - blH(texelCenter - vec2(0.0,d))) * 0.5;

          // ∂Dx/∂x  ∂Dx/∂z
          float dxx = (blX(texelCenter + vec2(d, 0.0)) - blX(texelCenter - vec2(d, 0.0))) * 0.5;
          float dxz = (blX(texelCenter + vec2(0.0,d)) - blX(texelCenter - vec2(0.0,d))) * 0.5;

          // ∂Dz/∂x  ∂Dz/∂z
          float dzx = (blZ(texelCenter + vec2(d, 0.0)) - blZ(texelCenter - vec2(d, 0.0))) * 0.5;
          float dzz = (blZ(texelCenter + vec2(0.0,d)) - blZ(texelCenter - vec2(0.0,d))) * 0.5;

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
          vec3 Tx = vec3(1.0 + dxx, hx, dzx);
          vec3 Tz = vec3(dxz, hz, 1.0 + dzz);
          vec3 norm = normalize(cross(Tz, Tx));

          // ─────────────────────────────────────────────────────────────────────
          // 【雅可比行列式 J】检测海面折叠 → 生成泡沫/白浪
          //
          //   ① 什么是雅可比行列式？
          //      描述向量场变换的"局部面积缩放比例"。
          //      对 2D 变换 F(x,z)，其雅可比矩阵的行列式为：
          //        det | ∂F₁/∂x   ∂F₁/∂z |  =  a*d - b*c
          //            | ∂F₂/∂x   ∂F₂/∂z |
          //
          //   ② 为什么这样算？
          //      Gerstner 波把水面粒子 (x,z) 水平位移到新位置：
          //        新位置 = (x + Dx,  z + Dz)
          //      对这个变换求雅可比矩阵（含恒等变换的 1+）：
          //
          //        J_matrix = | ∂(x+Dx)/∂x   ∂(x+Dx)/∂z |  =  | 1+dxx   dxz |
          //                   | ∂(z+Dz)/∂x   ∂(z+Dz)/∂z |     | dzx    1+dzz |
          //
          //      行列式：J = (1+dxx)(1+dzz) - dxz·dzx
          //
          //   ③ 各变量含义：
          //      dxx = ∂Dx/∂x  — x 位移对 x 的偏导
          //      dzz = ∂Dz/∂z  — z 位移对 z 的偏导
          //      dxz = ∂Dx/∂z  — x 位移对 z 的偏导（交叉项）
          //      dzx = ∂Dz/∂x  — z 位移对 x 的偏导（交叉项）
          //      "1+" 来自恒等变换：总坐标 = 原坐标 + 位移
          //
          //   ④ 物理意义：
          //      J > 1  → 面积拉伸，海面平坦舒展
          //      J = 1  → 无形变
          //      J < 1  → 面积压缩，粒子向某点汇聚（波峰堆积）
          //      J ≤ 0  → 面积为零或反向，海面折叠翻卷 → 白浪/泡沫
          // ─────────────────────────────────────────────────────────────────────
          float J = (1.0 + dxx) * (1.0 + dzz) - dxz * dzx;
          // smoothstep：J=1.5 时无泡沫，J=0.0 时全泡沫，中间平滑过渡
          float foam = smoothstep(1.5, 0.0, J);

          // ─────────────────────────────────────────────────────────────────────
          // 【颜色 + 光照】
          // ─────────────────────────────────────────────────────────────────────
          // 直接在 fragment 里采样高度，双线性过滤保证跨纹素的颜色顺滑过渡
          float fragY = blH(texelCenter);
          vec3 deep = vec3(0.0, 0.549, 0.996); // 深海蓝
          vec3 shallow = vec3(0.3, 0.7, 1.0); // 浅天蓝
          vec3 base = mix(deep, shallow, clamp(abs(fragY) / 5.0, 0.0, 1.0));
          // 叠加泡沫白色（雅可比折叠区域）
          base = mix(base, vec3(1.0), foam);

          // 简单 Lambertian Diffuse
          vec3 L = normalize(uLightDir);
          float NdotL = max(0.0, dot(norm, L));

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
      // dispatchWorkgroups(1, 128)：
      //   X=1   ：每行只需 1 个 workgroup（workgroup 内 64 线程×2 元素 = 128 = 整行）
      //   Y=128 ：共 128 行，每行 1 个 workgroup，workgroup_id.y = 行号 → global_id.y = 行号
      //   ⚠️ 不能用公式 IMG_SIZE/workGroupSizeRowX = 128/64 = 2，
      //      那样会派发 2×128 个 workgroup，每行被处理两遍（因为每线程已处理 2 个元素）
      rowPass.dispatchWorkgroups(1, IMG_SIZE)
      rowPass.end()
      device.queue.submit([rowEncoder.finish()])

      let colEncoder = device.createCommandEncoder()
      let colPass = colEncoder.beginComputePass()
      colPass.setPipeline(writeColPipeline)
      colPass.setBindGroup(0, bindGroupCol)
      // dispatchWorkgroups(128, 1)：
      //   X=128 ：共 128 列，每列 1 个 workgroup，workgroup_id.x = 列号 → global_id.x = 列号
      //   Y=1   ：每列只需 1 个 workgroup（workgroup 内 64 线程×2 元素 = 128 = 整列）
      //   ⚠️ 不能用公式 IMG_SIZE/workGroupSizeColY = 128/64 = 2，
      //      那样会派发 128×2 个 workgroup，每列被处理两遍（因为每线程已处理 2 个元素）
      colPass.dispatchWorkgroups(IMG_SIZE, 1)
      colPass.end()
      device.queue.submit([colEncoder.finish()])

      // 优化1+2: 删除全部 9 次 readAndUpdate（CPU-GPU 往返），
      // compute shader 直接写入 rawColY/X/Z（BabylonJS 渲染纹理），无需回读。
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
