<template>
  <div>
    <div @click="isShow = !isShow" class="pointer">{{isShow ? '展开' : '隐藏'}}SSGI（屏幕空间全局光照）说明</div>
    <div v-if="isShow">
      <p>
        <strong>SSGI（Screen Space Global Illumination，屏幕空间全局光照）</strong>
        是一种实时间接光照技术。传统直接光照只计算光源→物体表面→眼睛这一条路径，而全局光照还要模拟光线在物体间多次弹射所产生的<em>间接光</em>——例如红色球体将红色"渗染"到旁边白色球体上的"颜色溢出（Color Bleeding）"效果。
      </p>
      <p>
        SSGI 的核心思想：<strong>不在三维世界空间里追踪光线，而是在已渲染完成的二维屏幕缓冲区中采样</strong>。由于只操作屏幕像素，速度远快于路径追踪，但代价是屏幕外的物体无法贡献间接光（屏幕空间的固有局限）。
      </p>
      <h4>SSGI 完整渲染步骤</h4>
      <ol>
        <li>
          <strong>Step 1 — G-Buffer Pass（几何缓冲 Pass）</strong><br>
          将场景渲染到多张离屏纹理中，分别存储：
          <span style="display: inline-block;color: #00d4ff;background: rgba(0, 212, 255, 0.15);border-radius: 4px;margin-right: 4px;padding: 0 5px;">世界坐标</span>
          <span style="display: inline-block;color: #00d4ff;background: rgba(0, 212, 255, 0.15);border-radius: 4px;margin-right: 4px;padding: 0 5px;">法线</span>
          <span style="display: inline-block;color: #00d4ff;background: rgba(0, 212, 255, 0.15);border-radius: 4px;margin-right: 4px;padding: 0 5px;">Albedo 颜色</span>
          <span style="display: inline-block;color: #00d4ff;background: rgba(0, 212, 255, 0.15);border-radius: 4px;margin-right: 4px;padding: 0 5px;">深度</span>。
          这些数据是后续 SSGI 采样的"数据库"。
        </li>
        <li>
          <strong>Step 2 — SSGI 间接光采样 Pass</strong><br>
          对屏幕上的每个像素：读取其法线，在法线半球方向上生成若干采样方向（余弦加权，靠近法线方向概率更高）；<span style="color: orange;">沿每个方向在深度缓冲中步进（Ray March）【这个是通过depth模拟3d中的光线步进】</span>，找到命中的屏幕像素，将其颜色乘以余弦权重后累加为间接光贡献。采样数越多，结果越平滑，但代价越高。
        </li>
        <li>
          <strong>Step 3 — 去噪 / 双边模糊 Pass</strong><br>
          少量采样（如 8 次）必然产生噪点。双边模糊（Bilateral Blur）在空间上平滑噪点，同时通过边缘感知权重（比较相邻像素颜色差异）避免模糊跨越物体边界，防止光照"渗透"到不该有的区域。
        </li>
        <li>
          <strong>Step 4 — 合成 Pass（Composite）</strong><br>
          将直接光照（漫反射 + 高光）与间接光照（SSGI GI 结果）叠加。可选加入环境光遮蔽（AO）进一步增强接触阴影的真实感。
        </li>
        <li>
          <strong>Step 5 — Tone Mapping + Gamma 校正</strong><br>
          HDR 渲染（如 rgba16float）的像素值可能超过 1.0。Reinhard色调映射将 HDR 值平滑压缩到 [0, 1]；再做 Gamma 校正（^ 1/2.2）将线性颜色空间转为显示器所需的 sRGB 空间。
        </li>
      </ol>
      <p>
        本案例未构建完整 G-Buffer，SSGI 采样步骤替换为基于世界坐标的数学近似色（fakeColor），用于演示余弦加权半球采样与颜色溢出的视觉效果。后处理 Pass 使用双边模糊对 GI 结果进行软化。
      </p>
    </div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="ssgi" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
// 行主序 vs 列主序
// 对于一个 4×4 矩阵，逻辑上长这样：

// [m00  m01  m02  m03]   // 第0行
// [m10  m11  m12  m13]   // 第1行
// [m20  m21  m22  m23]   // 第2行
// [m30  m31  m32  m33]   // 第3行
// 行主序（C/JavaScript 直觉） — 按行依次存入数组：

// [m00, m01, m02, m03,  m10, m11, ...]
//  [0]  [1]  [2]  [3]   [4]  [5]
// element(row, col) = array[row*4 + col]

// 列主序（OpenGL/WebGPU/GLSL 惯例） — 按列依次存入数组：

// [m00, m10, m20, m30,  m01, m11, ...]
//  [0]  [1]  [2]  [3]   [4]  [5]
// element(row, col) = array[col*4 + row]

// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

// 代码中的体现

// 写视图矩阵时：
// view[0] = xNorm[0]   // col=0, row=0
// view[1] = yAxis[0]   // col=0, row=1  ← 同一列的第2个元素，索引+1
// view[2] = zAxis[0]   // col=0, row=2
// view[4] = xNorm[1]   // col=1, row=0  ← 下一列从索引4开始
// 如果用行主序思维，view[1] 应该是第0行第1列（即 xNorm[1]），但这里存的是 yAxis[0]（第1行第0列），正是列主序的特征——先填满一列，再填下一列。

// 矩阵乘法公式的推导

// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

// 【proj × view（列主序矩阵乘法）】注释说明了为什么乘法用 proj[k*4+row] * view[col*4+k]：

// 列主序：element(row, col) = array[col*4 + row]

// C[col][row] = Σ A[k][row] * B[col][k]
//             = Σ proj[k*4 + row] * view[col*4 + k]
// 这和数学上的矩阵乘法完全一致，只是下标和数组索引之间做了列主序的转换。

// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

// 为什么 GPU 用列主序？ GLSL/WGSL shader 中 mat4 * vec4 按数学惯例（列向量右乘），列主序存储使 GPU 取一列数据时内存连续，访问效率更高。

// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

import { onMounted, onUnmounted, ref, nextTick } from 'vue'

const isRunning = ref(false)
const isShow = ref(false)
const requestID = ref<any>()

let canvas: any
let device: any, context: any
let autoRotate = true
let isDragging = false
let lastX = 0, lastY = 0
let scenePipeline: any, postPipeline: any
let depthTexture: any, sceneTexture: any
let spheres: any[] = []
// camera：球面坐标控制摄像机位置，rotY 水平旋转，rotX 俯仰角
// 用球面坐标比直接存 xyz 更方便实现鼠标拖拽绕目标旋转
let camera = { x: 0, y: 3, z: 8, rotX: 0.3, rotY: 0 }
let time = 0
let postBindGroup: any // 后处理 pass 的纹理绑定，resize 时需重建


// ─────────────────────────────────────────────────────────────────────────
// 顶点着色器（sceneVS）
// 职责：把每个顶点从"模型空间"变换到"裁剪空间"，并把世界坐标、法线、颜色作为 varying 传给片元着色器，供光照计算使用
// ─────────────────────────────────────────────────────────────────────────
const sceneVS = `
  // 为什么定义 Uniforms struct：WGSL 要求 uniform buffer 有明确的内存布局声明
  // struct 的字段顺序和类型必须与 JS 侧 Float32Array 写入的内容一一对应
  struct Uniforms {
    viewProj: mat4x4f,      // 投影矩阵 × 视图矩阵，把世界坐标→裁剪坐标
    model: mat4x4f,         // 模型矩阵，把局部坐标→世界坐标（含位移动画）
    normalMatrix: mat4x4f,  // 法线矩阵（model 的逆转置），保证法线方向正确
    color: vec3f,           // 球体固有色，由 JS 每球单独传入
    lightPos: vec3f,        // 光源世界坐标（动态旋转）
    cameraPos: vec3f,       // 摄像机世界坐标，用于计算高光视线方向
    time: f32,              // 当前时间，用于 GI 采样方向的时序变化
  }

  // @group(0) @binding(0)：每个球体拥有独立的 bind group
  // 每次 drawIndexed 前都会切换到本球的 bind group，从而读取到正确的 model/color 数据
  @binding(0) @group(0) var<uniform> uniforms: Uniforms;

  struct VertexInput {
    // @location(0/1) 与 pipeline 中 buffers[].attributes[].shaderLocation 对应。
    // arrayStride=24：每顶点 6 个 float（位置3 + 法线3）× 4 字节 = 24 字节。
    @location(0) position: vec3f,  // offset=0，前 12 字节
    @location(1) normal: vec3f,    // offset=12，后 12 字节
  }
  
  struct VertexOutput {
    // @builtin(position)：GPU 光栅化器必须的裁剪坐标输出，决定像素覆盖
    @builtin(position) position: vec4f,
    @location(0) worldPos: vec3f,  // 世界坐标，片元着色器用于计算光照距离
    // 世界法线，用于 NdotL / NdotH 计算【渲染中的两个点积
    // NdotL = dot(N, L) — 法线与光照方向的夹角余弦
    // NdotH = dot(N, H) — 法线与半角向量（Halfway Vector，即 L<L (Light Direction) — 从着色点指向光源的方向> 和 V<V (View Direction) — 从着色点指向摄像机的方向> 的中间方向）的夹角余弦】
    @location(1) normal: vec3f,    
    @location(2) color: vec3f,     // 直接透传颜色，避免片元着色器再访问 uniform
  }

  @vertex
  fn main(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;

    // 先把顶点变换到世界空间：w=1.0 表示"点"（非方向），使平移生效
    // 世界坐标需要单独保留，因为后续片元着色器要用它计算光照方向
    let worldPos = (uniforms.model * vec4f(input.position, 1.0)).xyz;

    // 再把世界坐标变换到裁剪空间，供光栅化器使用
    output.position = uniforms.viewProj * vec4f(worldPos, 1.0);
    output.worldPos = worldPos;

    // 法线用 normalMatrix 变换：w=0.0 表示"方向"，平移对方向无效
    // 如果 model 有非均匀缩放，必须用逆转置矩阵才能保持法线垂直于表面
    output.normal = normalize((uniforms.normalMatrix * vec4f(input.normal, 0.0)).xyz);
    
    output.color = uniforms.color;

    return output;
  }
`

// ─────────────────────────────────────────────────────────────────────────
// 片元着色器（sceneFS）
// 职责：对每个像素执行 PBR 风格直接光照 + 模拟 SSGI 间接光照，
//       输出 HDR 颜色（rgba16float），由后处理 Pass 再做 tone mapping。
// ─────────────────────────────────────────────────────────────────────────
const sceneFS = `
  struct Uniforms {
    viewProj: mat4x4f,
    model: mat4x4f,
    normalMatrix: mat4x4f,
    color: vec3f,
    lightPos: vec3f,
    cameraPos: vec3f,
    time: f32,
  }

  @binding(0) @group(0) var<uniform> uniforms: Uniforms;

  // 为什么用余弦加权半球采样（Cosine-Weighted Hemisphere Sampling）？
  // Lambert 漫反射的 BRDF 本身带有 cosθ 因子。余弦加权使采样密度正比于 cosθ
  // 从而把更多采样集中在对漫反射贡献最大的方向（法线附近），减少方差/噪点
  fn cosineSampleHemisphere(normal: vec3f, seed: vec2f) -> vec3f {
    // Malley 方法：先在单位圆盘上均匀采样，再投影到半球
    // sqrt(seed.x)：均匀分布映射到圆盘需要对 r 取 sqrt
    // 否则面积元 dA=r·dr·dθ 会导致圆盘中心过密
    let r = sqrt(seed.x);
    let theta = 2.0 * 3.14159265359 * seed.y;
    let x = r * cos(theta);
    let y = r * sin(theta);
    // 半球上的 z 分量（高度）由圆盘半径决定：z = sqrt(1 - r²)
    let z = sqrt(1.0 - r * r);

    // 将切线空间的采样方向转换到世界空间，需要构建以法线为 z 轴的正交基
    // 为什么用 select？
    // 若法线接近 (0,0,1)，cross(up=(0,0,1), normal) ≈ 0
    // 会产生退化切线。此时改用 (1,0,0) 作为参考方向，保证正交基有效
    let up = select(vec3f(1.0, 0.0, 0.0), vec3f(0.0, 0.0, 1.0), abs(normal.z) < 0.999);
    let tangent = normalize(cross(up, normal));
    let bitangent = cross(normal, tangent); // 双切线

    // 用正交基把切线空间方向转到世界空间
    return normalize(tangent * x + bitangent * y + normal * z);
  }

  // 为什么用 sin-based hash 而非纹理查找？
  // GPU 着色器中没有全局随机数，sin 配合大常数能产生伪随机值
  // 不需要额外绑定噪声纹理，代码自包含，适合 demo 场景
  fn hash2(p: vec2f) -> vec2f {
    let n = sin(dot(p, vec2f(127.1, 311.7)));
    // 大乘数（43758、78558）使 sin 值扩散到足够大的范围后取小数，
    // 保证两个分量之间相关性极低，近似独立的均匀分布 [0,1)。
    return fract(vec2f(n) * vec2f(43758.5453, 78558.5453));
  }

  @fragment
  fn main(
    @location(0) worldPos: vec3f,
    @location(1) normal: vec3f,
    @location(2) color: vec3f,
  ) -> @location(0) vec4f {
    let N = normalize(normal);  // 重新 normalize，插值后可能不是单位向量
    let V = normalize(uniforms.cameraPos - worldPos);   // 视线方向
    let L = normalize(uniforms.lightPos - worldPos);    // 光源方向

    // ── 直接光照：漫反射（Lambertian） ──
    // max(..., 0)：点积可为负（光源在背面），物理上负值无意义故截断
    // 0.6 是漫反射强度系数，防止整体过亮
    let NdotL = max(dot(N, L), 0.0);
    let diffuse = color * NdotL * 0.6;

    // ── 直接光照：高光（Blinn-Phong） ──
    // 为什么用半程向量 H 而不用 reflect()？
    // Blinn-Phong 用 dot(N,H) 近似镜面反射，计算量更小
    // 且在掠射角时比 Phong 更物理合理。指数 32 控制高光锐度
    let H = normalize(L + V);
    let spec = pow(max(dot(N, H), 0.0), 32.0);
    let specular = vec3f(spec * 0.3);

    // ── SSGI：模拟间接光照 ──
    // 对法线半球方向进行 8 次余弦加权采样，累积间接光贡献
    // 真实 SSGI 应在深度缓冲中步进（Ray March）寻找遮挡点
    // 本 demo 用 worldPos 的数学函数近似颜色，演示采样框架
    var gi = vec3f(0.0);
    let sampleCount = 8.0;  // 8 次：实时性与质量的折中

    for(var i = 0.0; i < sampleCount; i += 1.0) {
      let fi = i + 1.0;

      // 为什么 seed 含 uniforms.time？
      // 每帧旋转采样方向， 配合时序累积（TAA）可获得比单帧更多的有效样本
      let seed = hash2(vec2f(fi * 12.34, uniforms.time * 0.1));
      let sampleDir = cosineSampleHemisphere(N, seed);

      // fakeColor：用世界坐标的 sin/cos 近似"该方向可能看到的颜色"
      // 真实实现应是沿 sampleDir 在屏幕深度缓冲中步进后读取的像素颜色
      let fakeColor = vec3f(
        0.5 + 0.5 * sin(worldPos.x * 2.0 + sampleDir.x * 3.0),
        0.5 + 0.5 * cos(worldPos.z * 2.0 + sampleDir.y * 3.0),
        0.5 + 0.5 * sin(worldPos.y * 2.0 + sampleDir.z * 3.0)
      );

      // 颜色溢出（Color Bleeding）：用 mix 让间接光颜色向本球颜色偏移，
      // 模拟物体自身颜色对反射光的"染色"效应（0.3 = 30% 近似环境色）。
      let bleed = mix(color, fakeColor, 0.3);

      // 余弦权重：与法线越对齐的方向贡献越大（Lambert 物理规律）。
      let weight = max(dot(N, sampleDir), 0.0);
      gi += bleed * weight;
    }

    // 除以采样数得到均值；0.5 系数控制 GI 整体强度，防止过曝。
    gi /= sampleCount;
    gi *= 0.5;

    // ── 简化 AO（Ambient Occlusion）──
    // 用法线 y 分量粗略模拟：朝上的面（N.y=1）受天光多，朝下（N.y=-1）受光少。
    // 结果范围 [0, 1]，乘以直接光照，使朝下的面整体暗一些。
    let ao = 0.5 + 0.5 * N.y;

    // 合并：直接光 × AO + 间接光（GI 不受 AO 调制，因为它自身已含方向权重）
    var finalColor = (diffuse + specular) * ao + gi;

    // 微弱的世界坐标扰动，给球面增加细微颜色变化，防止过于均匀。
    let colorBleed = sin(worldPos.x * 3.0) * cos(worldPos.z * 3.0) * 0.05 + 0.95;
    finalColor *= colorBleed;

    // ── Reinhard Tone Mapping ──
    // 为什么需要：渲染目标是 rgba16float（HDR），值可超过 1.0。
    // Reinhard：mapped = x / (x + 1)，将 [0, ∞) 平滑映射到 [0, 1)，无截断。
    let mapped = finalColor / (finalColor + vec3f(1.0));

    // ── Gamma 校正 ──
    // 显示器在 sRGB 空间工作（约 gamma=2.2）。线性渲染值需做 ^ (1/2.2)
    // 转换，否则暗部看起来太暗、亮部看起来太平。
    let gamma = pow(mapped, vec3f(1.0 / 2.2));

    return vec4f(gamma, 1.0);
  }
`

// ─────────────────────────────────────────────────────────────────────────
// 后处理顶点着色器（postVS）
// 职责：生成覆盖整个屏幕的全屏四边形（2 个三角形），不需要任何顶点缓冲。
// ─────────────────────────────────────────────────────────────────────────
const postVS = `
  struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
  }

  @vertex
  fn main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
    // 为什么硬编码 6 个顶点而不上传 vertex buffer？
    // 后处理只需要一个全屏四边形，用 vertex_index 直接索引数组
    // 比创建 vertex buffer + bind 更简洁，是 WebGPU 后处理的惯用模式。
    var pos = array<vec2f, 6>(
      vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
      vec2f(-1.0, 1.0), vec2f(1.0, -1.0), vec2f(1.0, 1.0)
    );

    // 为什么 UV 的 y 是反的（底部=1.0，顶部=0.0）？
    // NDC y=+1 在屏幕顶部，但纹理 UV y=0 在顶部、y=1 在底部。
    // 翻转 y 使纹理坐标与屏幕方向一致，否则图像会上下颠倒。
    var uvs = array<vec2f, 6>(
      vec2f(0.0, 1.0), vec2f(1.0, 1.0), vec2f(0.0, 0.0),
      vec2f(0.0, 0.0), vec2f(1.0, 1.0), vec2f(1.0, 0.0)
    );

    var output: VertexOutput;
    output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
    output.uv = uvs[vertexIndex];
    return output;
  }
`

// ─────────────────────────────────────────────────────────────────────────
// 后处理片元着色器（postFS）
// 职责：对 SSGI 渲染结果做双边模糊（软化噪点）+ 晕影（Vignette），
//       输出到 canvas 最终显示缓冲。
// ─────────────────────────────────────────────────────────────────────────
const postFS = `
  @group(0) @binding(0) var sceneTexture: texture_2d<f32>;
  @group(0) @binding(1) var textureSampler: sampler;

  @fragment
  fn main(@location(0) uv: vec2f) -> @location(0) vec4f {
    // textureDimensions 返回纹理像素尺寸，用于把偏移像素数转成 UV 偏移量。
    let texSize = vec2f(textureDimensions(sceneTexture));

    var color = vec3f(0.0);
    var weightSum = 0.0;

    // radius=4.0：每步偏移 4 像素，5×5 核心覆盖约 ±8 像素范围，
    // 足以平滑 8 次 SSGI 采样的低频噪点而不严重损失清晰度。
    let radius = 4.0;
    let centerColor = textureSample(sceneTexture, textureSampler, uv).rgb;

    for(var x = -2.0; x <= 2.0; x += 1.0) {
      for(var y = -2.0; y <= 2.0; y += 1.0) {
        let offset = vec2f(x, y) * radius / texSize;
        let sampleUV = uv + offset;
        let sampleColor = textureSample(sceneTexture, textureSampler, sampleUV).rgb;

        // ── 双边模糊权重（Bilateral） ──
        // 为什么不用普通高斯模糊？普通模糊会跨越物体边界，
        // 导致背景颜色渗入前景（光晕/鬼影）。双边模糊加入颜色相似度权重：
        // 与中心像素颜色越接近，权重越大；差异越大，权重接近 0，
        // 从而自动保留边缘。
        let colorDiff = length(sampleColor - centerColor);
        // exp(-colorDiff * 2.0)：颜色相似度权重（值域 (0,1]）
        // 1/(1 + dist)：空间距离权重，近处贡献更多
        let weight = exp(-colorDiff * 2.0) / (1.0 + length(vec2f(x, y)));

        color += sampleColor * weight;
        weightSum += weight;
      }
    }

    // 归一化加权和
    color /= weightSum;

    // 为什么 7:3 混合而不全用模糊结果？
    // 纯模糊会损失高频细节（高光边缘、颜色边界）。
    // 保留 70% 原始锐利像素，只混入 30% 柔化结果，
    // 在减少 GI 噪点的同时保持画面细节感。
    let finalCol = centerColor * 0.7 + color * 0.3;

    // ── Vignette（晕影） ──
    // 为什么加晕影？暗化屏幕四角，引导视线聚焦中央球体，
    // 是常见的电影感后处理。uv-0.5 将坐标原点移到屏幕中心，
    // length 计算到中心的距离，乘以 0.4 控制暗化强度。
    let vignette = 1.0 - length(uv - 0.5) * 0.4;

    return vec4f(finalCol * vignette, 1.0);
  }
`

// 统一提取坐标：鼠标事件直接读 clientX/Y，触摸事件读 touches[0]
const getClientPos = (e: MouseEvent | TouchEvent) => {
  if (e instanceof TouchEvent) {
    const t = e.touches[0] ?? e.changedTouches[0]
    return { x: t.clientX, y: t.clientY }
  }
  return { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY }
}

const mouseDown = (e: MouseEvent | TouchEvent) => {
  isDragging = true
  const { x, y } = getClientPos(e)
  lastX = x
  lastY = y
}

const mouseMove = (e: MouseEvent | TouchEvent) => {
  if (isDragging) {
    // 移动量乘以灵敏度系数 0.01，转为弧度增量。
    // rotX 限制在 [-1, 1] rad，防止摄像机翻转到球体下方。
    const { x, y } = getClientPos(e)
    camera.rotY += (x - lastX) * 0.01
    camera.rotX += (y - lastY) * 0.01
    camera.rotX = Math.max(-1, Math.min(1, camera.rotX))
    lastX = x
    lastY = y
    autoRotate = false // 手动拖拽时停止自动旋转
  }
}

const mouseUp = () => {
  isDragging = false
}

const mouseClick = () => {
  autoRotate = !autoRotate
}

const isMobile = () => 'ontouchstart' in window

const initCanvasFunc = () => {
  if (isMobile()) {
    canvas.addEventListener('touchstart', mouseDown)
    canvas.addEventListener('touchmove', mouseMove)
    canvas.addEventListener('touchend', mouseUp)
    // touchend 同时当作 click（单指短触）
    canvas.addEventListener('touchend', mouseClick)
  } else {
    canvas.addEventListener('mousedown', mouseDown)
    canvas.addEventListener('mousemove', mouseMove)
    canvas.addEventListener('mouseup', mouseUp)
    canvas.addEventListener('click', mouseClick)
  }
}

const destroyCanvasFunc = () => {
  if (isMobile()) {
    canvas.removeEventListener('touchstart', mouseDown)
    canvas.removeEventListener('touchmove', mouseMove)
    canvas.removeEventListener('touchend', mouseUp)
    canvas.removeEventListener('touchend', mouseClick)
  } else {
    canvas.removeEventListener('mousedown', mouseDown)
    canvas.removeEventListener('mousemove', mouseMove)
    canvas.removeEventListener('mouseup', mouseUp)
    canvas.removeEventListener('click', mouseClick)
  }
}

const onRunning = async () => {
  // ─── 球体几何生成 ────────────────────────────────────────────────────────
  // 为什么用 UV Sphere 而不是 Icosphere？
  // UV Sphere 生成算法更直观（嵌套循环），索引计算简单
  // 适合 demo。Icosphere 顶点分布更均匀，但生成逻辑更复杂
  // 如果 SSGI 演示需要更均匀的全局光照采样，将 createSphere 改为 Icosphere 生成会是一个优化方向
  const createSphere = (position: any, radius: any, color: any, index: any) => {
    // latBands/longBands=32：纬度/经度分段数
    // 32×32 约 4096 个三角形，在不放大的情况下球面足够光滑
    const latBands = 32
    const longBands = 32
    const vertices = []
    const indices = []

    // 遍历每个纬度带，theta 从 0（北极）到 π（南极）
    for (let lat = 0; lat <= latBands; lat++) {
      const theta = (lat * Math.PI) / latBands // 半圈，不是全圈
      const sinTheta = Math.sin(theta)
      const cosTheta = Math.cos(theta)

      // 遍历每个经度带，phi 从 0 到 2π
      for (let lon = 0; lon <= longBands; lon++) {
        const phi = (lon * 2 * Math.PI) / longBands
        const sinPhi = Math.sin(phi)
        const cosPhi = Math.cos(phi)

        // 球面坐标转笛卡尔坐标：
        // x = cos(phi) * sin(theta)（水平分量）
        // y = cos(theta)（垂直分量，±1 为两极）
        // z = sin(phi) * sin(theta)
        const x = cosPhi * sinTheta
        const y = cosTheta
        const z = sinPhi * sinTheta

        // 位置：球面坐标乘半径再加上中心位置
       vertices.push(radius * x, radius * y, radius * z)

        // 法线：单位球面上，法线 = 归一化位置向量，直接复用 (x,y,z)
        // 这样省去额外的法线计算，球面法线天然如此
        vertices.push(x, y, z)
      }
    }

    // 构建索引，将相邻的4个顶点（一个 quad）组成两个三角形
    for (let lat = 0; lat < latBands; lat++) {
      for (let lon = 0; lon < longBands; lon++) {
        // 为什么每纬度有 longBands+1 个顶点（不是 longBands）
        // 最后一个顶点与第一个顶点位置相同，但 UV/index 不同
        // 方便处理纹理坐标接缝（本例无纹理，但保持结构一致性）
        const first = lat * (longBands + 1) + lon
        const second = first + longBands + 1

        // 每个 quad 拆成 2 个逆时针三角形（配合 cullMode:'back' 正面朝外）
        indices.push(first, second, first + 1)
        indices.push(second, second + 1, first + 1)
      }
    }

    // ── 上传顶点数据到 GPU ──
    // mappedAtCreation: true：创建时直接进入 mapped 状态
    // 可立刻写入 CPU 数据，无需等待 mapAsync 的异步回调，是一次性上传的最优路径
    const vertexBuffer = device.createBuffer({
      size: vertices.length * 4, // float32 每个元素 4 字节
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true
    })
    new Float32Array(vertexBuffer.getMappedRange()).set(vertices)
    vertexBuffer.unmap() // unmap 后 CPU 无法再访问，GPU 取得独占所有权

    // 索引使用 Uint16Array（2 字节/索引），因为顶点数 < 65536（32×32 球体约 1089 顶点）
    // 相比 Uint32 节省 50% 索引缓冲内存，且 GPU 读取更快
    const indexBuffer = device.createBuffer({
      size: indices.length * 2, // uint16 每个元素 2 字节
      usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true
    })
    new Uint16Array(indexBuffer.getMappedRange()).set(indices)
    indexBuffer.unmap()

    // ── 每个球体独立的 Uniform Buffer + Bind Group ──
    // 为什么不共享一个全局 uniform buffer？
    // WebGPU 的 writeBuffer 写入被排队到 GPU Queue，但实际执行在 submit 之后
    // 若所有球体写同一个 buffer，提交时 buffer 只保留最后一次写入的数据
    // 所有球体都会用最后一个球的 model/color 渲染——这正是修复前只看到品红球的原因
    // 每球独立 buffer，保证各球数据在 GPU 执行时互不覆盖
    const uBuffer = device.createBuffer({
      // 64 floats × 4 字节 = 256 字节。WebGPU 要求 uniform buffer 偏移对齐到 256 字节
      size: 64 * 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    })
    const uBindGroup = device.createBindGroup({
      layout: scenePipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: uBuffer } }]
    })

    return {
      vertexBuffer,
      indexBuffer,
      indexCount: indices.length,
      color,
      position: [...position], // 展开复制，避免共享引用被外部修改
      radius,
      phase: index * Math.PI * 0.4, // 各球浮动动画的时间偏移，用 index×0.4π 均匀错开，使 5 个球不同步地上下浮动，更自然
      uniformBuffer: uBuffer,
      uniformBindGroup: uBindGroup
    }
  }

  // ─── 更新球体 Uniform 数据 ───────────────────────────────────────────────
	// 每帧每个球体调用一次，计算最新的矩阵/光照/时间值并写入该球的 GPU buffer
  const updateUniforms = (sphere: any, viewProj: any, time: any) => {
    // Float32Array 默认初始化为全 0，利用此特性构建矩阵时只需设置非零元素
    const model = new Float32Array(16)
    const normalMatrix = new Float32Array(16)
    const viewProjArr = new Float32Array(viewProj) // 复制一份，避免修改原数组

    // ── 构建 Model 矩阵（列主序，translation-only） ──
    // 为什么是列主序？WGSL mat4x4f 用列主序存储
    // element(row, col) = array[col*4 + row]
    // 对角线元素（缩放=1）索引：[0]=col0row0, [5]=col1row1, [10]=col2row2, [15]=col3row3
    const floatY = Math.sin(time + sphere.phase) * 0.15 // 上下浮动动画
    model[0] = 1
    model[5] = 1
    model[10] = 1
    model[15] = 1
    // 平移向量存在第 4 列：[12]=tx, [13]=ty, [14]=tz（列主序第 4 列从 index 12 开始）
    model[12] = sphere.position[0]
    model[13] = sphere.position[1] + floatY
    model[14] = sphere.position[2]

    // 法线矩阵 = model 矩阵逆转置
    // 因为本 Demo 只有平移（无旋转/非均匀缩放），逆转置 = 单位矩阵，直接设置对角线即可
    // 若加了旋转/缩放，则需要正确计算逆转置，否则法线方向会错误
    normalMatrix[0] = 1
    normalMatrix[5] = 1
    normalMatrix[10] = 1
    normalMatrix[15] = 1

    // 整个 Uniform struct 打包为 64 个 float = 256 字节
    const uniforms = new Float32Array(64)
    uniforms.set(viewProjArr, 0) // viewProj：float[0..15]
    uniforms.set(model, 16) // model：float[16..31]
    uniforms.set(normalMatrix, 32) // normalMatrix：float[32..47]


    // color（vec3f）：float[48..50]
    // 为什么 index 48 之后有 padding？
    // WGSL 规定 vec3f 占 16 字节（4 个 float 的对齐），struct 中每个 vec3f 后
    // 需要 1 个 float 的 padding 来对齐到下一个 16 字节边界
    // 不加 padding，GPU 读取后续字段时偏移量错误，光照计算全部出错
    uniforms[48] = sphere.color[0]
    uniforms[49] = sphere.color[1]
    uniforms[50] = sphere.color[2]
    uniforms[51] = 0 // padding，对齐到 float[52]

    // lightPos（vec3f）：float[52..54]，绕 Y 轴慢速旋转，使光影动态变化
    uniforms[52] = 5 + Math.sin(time) * 2
    uniforms[53] = 8 // 固定高度
    uniforms[54] = 5 + Math.cos(time) * 2
    uniforms[55] = 0 // padding

    // cameraPos（vec3f）：float[56..58]
    // 与 getViewProjMatrix 中的摄像机坐标计算方式完全一致，确保高光方向正确
    const camX = Math.sin(camera.rotY) * Math.cos(camera.rotX) * 10
    const camY = Math.sin(camera.rotX) * 10 + 2
    const camZ = Math.cos(camera.rotY) * Math.cos(camera.rotX) * 10
    uniforms[56] = camX
    uniforms[57] = camY
    uniforms[58] = camZ
    uniforms[59] = 0 // padding

    // time（f32）：float[60]，供 SSGI 采样方向随时间变化
    uniforms[60] = time

    // writeBuffer 是高频 uniform 更新的标准路径，内部直接 DMA 传输到 GPU
    // 写入操作被排入 GPU Queue，在同一帧的 submit 之前完成，保证数据及时可用
    device.queue.writeBuffer(sphere.uniformBuffer, 0, uniforms)
  }

  const initSphere = () => {
    // ── 创建 5 个球体 ──
    const colors = [
      [1.0, 0.2, 0.2], // 红
      [0.2, 1.0, 0.2], // 绿
      [0.2, 0.2, 1.0], // 蓝
      [1.0, 1.0, 0.2], // 黄
      [1.0, 0.2, 1.0] // 品红
    ]

    // 5 个球体分布在不同位置，使 SSGI 颜色溢出效果更明显。
    const positions = [
      [-2.5, 0, 0],
      [2.5, 0, 0],
      [0, 0, -2.5],
      [-1.5, 0, 2.5],
      [1.5, 0, 2.5]
    ]

    for (let i = 0; i < 5; i++) {
      // index i 用于计算 phase（相位偏移），让每个球体浮动动画错开，更自然。
      spheres.push(createSphere(positions[i], 1.0, colors[i], i))
    }
  }

  // ─── 构建 View-Projection 矩阵 ──────────────────────────────────────────
  // 为什么不用 gl-matrix 等库？这是纯 demo，手写矩阵有助于理解每个元素的含义
  const getViewProjMatrix = () => {
    const fov = Math.PI / 4 // 45° 视场角，介于广角（鱼眼感）和长焦（压缩感）之间
    const aspect = canvas.width / canvas.height // 宽高比，根据 canvas 大小计算
    const near = 0.1 // 近裁剪面距离，避免透视变换导致的近裁剪面距离过近，导致场景被裁剪
    const far = 100 // 远裁剪面距离，足够大以包含整个场景

    // ── 透视投影矩阵（列主序，列主序索引 col*4+row） ──
    // ┌ f/aspect   0        0                    0                   ┐
    // │ 0          f        0                    0                   │
    // │ 0          0   (far+near)/(near-far)  (2*far*near)/(near-far)│
    // └ 0          0       -1                    0                   ┘
    const proj = new Float32Array(16)
    // f = 1/tan(fov/2)：焦距，将 fov 范围内的 y 坐标映射到 [-1, 1]
    const f = 1 / Math.tan(fov / 2)
    proj[0] = f / aspect // col=0, row=0，x 轴缩放，额外除以宽高比，修正非正方形屏幕的拉伸
    proj[5] = f // col=1, row=1，y 轴缩放
    // WebGPU NDC 深度范围 [0, 1]（非 OpenGL 的 [-1, 1]）：
    proj[10] = (far + near) / (near - far) // col=2, row=2，z 轴缩放，映射 [near, far] 到 [0, 1]
    proj[11] = -1 // col=2, row=3，透视投影特征，使 w = -z 参与透视除法【透视除法：w_clip = -z_view（使近平面 w > 0）】
    proj[14] = (2 * far * near) / (near - far) // col=3, row=2，z 轴平移，确保 near 平面映射到 0，far 平面映射到 1【深度偏移项】
  
    // ── 视图矩阵（LookAt，列主序，列主序索引 col*4+row） ──
    const view = new Float32Array(16)
    // 摄像机位置：用球面坐标，绕原点的球面上移动，始终朝向 (0,0,0)
    const camX = Math.sin(camera.rotY) * Math.cos(camera.rotX) * 10
    const camY = Math.sin(camera.rotX) * 10 + 2
    const camZ = Math.cos(camera.rotY) * Math.cos(camera.rotX) * 10


    // 在 lookAt 矩阵中的意义：
    //    在相机坐标系构建中：
    // ——————————————————————————————————————————————————————————————————————————————————————
    //    相机朝向（后方）
    //    zAxis = normalize(eye - target)
    // ——————————————————————————————————————————————————————————————————————————————————————
    //    相机右方 ← 叉积【右手四指从 up（向上） 弯向 zAxis（朝后），大拇指朝向 → 右方，这正是需要的 xAxis】
    //    up × zAxis 得到右方向，zAxis × up 得到左方向。lookAt 矩阵需要相机右轴，所以必须是 up × zAxis
    //    xAxis = normalize(up × zAxis)
    // ——————————————————————————————————————————————————————————————————————————————————————
    //    相机上方（重新正交化）
    //    zAxis后方是正，xAxis右方是正 ← 叉积【右手四指从 zAxis（向后） 弯向 xAxis（朝右），大拇指朝向 → 上方，这正是需要的 yAxis】
    //    yAxis = zAxis × xAxis （注意顺序，zAxis × xAxis 得到 yAxis，xAxis × zAxis 得到 -yAxis）
    // ——————————————————————————————————————————————————————————————————————————————————————

    // zAxis = normalize(eye - target)：摄像机朝 -z 看，所以 z 轴朝后（eye→target 的反方向）
    const fx = camX, fy = camY, fz = camZ // eye
    const zDist = Math.sqrt(fx * fx + fy * fy + fz * fz)
    const zAxis = [fx / zDist, fy / zDist, fz / zDist]

    // xAxis = cross(worldUp, zAxis)：右方向 = 上方向 × 后方向（右手坐标系）
    const up = [0, 1, 0]
    const xAxis = [
      // 这是**向量叉积（Cross Product）**的标准公式
      // 两个向量 a × b 的结果是一个垂直于这两个向量的新向量，公式为：
      // a × b = (
      //   a[1]*b[2] - a[2]*b[1],   // x 分量
      //   a[2]*b[0] - a[0]*b[2],   // y 分量
      //   a[0]*b[1] - a[1]*b[0]    // z 分量
      // )
      up[1] * zAxis[2] - up[2] * zAxis[1],
      up[2] * zAxis[0] - up[0] * zAxis[2],
      up[0] * zAxis[1] - up[1] * zAxis[0]
    ]
    const xDist = Math.sqrt(xAxis[0] * xAxis[0] + xAxis[1] * xAxis[1] + xAxis[2] * xAxis[2])
    const xNorm = [xAxis[0] / xDist, xAxis[1] / xDist, xAxis[2] / xDist]
  
    // yAxis = cross(zAxis, xNorm)：重新计算正交的上方向（Gram-Schmidt 正交化）
    // 不直接用 up[0,1,0]，因为 up 可能与 zAxis 不完全垂直
    const yAxis = [
      zAxis[1] * xNorm[2] - zAxis[2] * xNorm[1],
      zAxis[2] * xNorm[0] - zAxis[0] * xNorm[2],
      zAxis[0] * xNorm[1] - zAxis[1] * xNorm[0]
    ]
  
    // 视图矩阵 = [R | -R*eye]（旋转部分按列存储，平移部分是 -dot(axis, eye)）
    view[0] = xNorm[0]
    view[1] = yAxis[0]
    view[2] = zAxis[0]
    view[4] = xNorm[1]
    view[5] = yAxis[1]
    view[6] = zAxis[1]
    view[8] = xNorm[2]
    view[9] = yAxis[2]
    view[10] = zAxis[2]
    // 平移分量：将世界坐标系的原点移到摄像机位置处（反向平移）
    view[12] = -(xNorm[0] * camX + xNorm[1] * camY + xNorm[2] * camZ)
    view[13] = -(yAxis[0] * camX + yAxis[1] * camY + yAxis[2] * camZ)
    view[14] = -(zAxis[0] * camX + zAxis[1] * camY + zAxis[2] * camZ)
    view[15] = 1


    // ── proj × view（列主序矩阵乘法） ──
    // 为什么 proj[k*4+row] * view[col*4+k]？
    // 列主序：element(row, col) = array[col*4 + row]
    // 矩阵乘法 C[col][row] = ΣA[k][row] * B[col][k]
    //                     = Σproj[k*4+row] * view[col*4+k]
    const viewProj = new Float32Array(16)
    for (let col = 0; col < 4; col++) {
      for (let row = 0; row < 4; row++) {
        let sum = 0
        for (let k = 0; k < 4; k++) {
          sum += proj[k * 4 + row] * view[col * 4 + k]
        }
        viewProj[col * 4 + row] = sum
      }
    }

    return viewProj
  }


  // ─── WebGPU 初始化 ──────────────────────────────────────────────────────
  const initWebGPU = async () => {
    canvas = document.getElementById('ssgi')

    const wrapDomStyle = getComputedStyle(canvas)
    const width = parseInt(wrapDomStyle.width, 10)
    const height = parseInt(wrapDomStyle.height, 10)
    // 需要设置canvas的width和height
    canvas.width = width
    canvas.height = height

    if (!(navigator as any).gpu) {
      alert('不支持WebGPU。请使用Chrome 113或更高版本或Edge 113或更高版本')
      return
    }

    const adapter = await (navigator as any).gpu.requestAdapter()

    if (!adapter) {
      alert('未能获取WebGPU适配器')
      return
    }

    device = await adapter.requestDevice()
    context = canvas.getContext('webgpu')
    console.log(canvas)

    // getPreferredCanvasFormat：不同平台偏好不同格式（bgra8unorm / rgba8unorm）
    // 使用首选格式可避免 GPU 内部做额外的颜色格式转换，提升性能
    const format = (navigator as any).gpu.getPreferredCanvasFormat()
    context.configure({
      device: device,
      format: format,
      // premultiplied：标准 alpha 预乘模式，避免半透明边缘出现暗边（黑边伪影）
      alphaMode: 'premultiplied'
    })

    // ── 编译 WGSL 着色器 ──
    // createShaderModule 将 WGSL 字符串编译为 GPU 可执行的着色器模块
    // 异步编译在后台进行，不阻塞 JS 主线程

    const sceneVSShader = device.createShaderModule({ code: sceneVS })
    const sceneFSShader = device.createShaderModule({ code: sceneFS })
    const postVSShader = device.createShaderModule({ code: postVS })
    const postFSShader = device.createShaderModule({ code: postFS })

    // ── 场景渲染管线（scenePipeline） ──
    scenePipeline = device.createRenderPipeline({
      // layout: 'auto'：让 WebGPU 从着色器代码自动推断 bind group layout
      // 省去手动声明 GPUBindGroupLayout 的样板代码，适合 demo 场景
      layout: 'auto',
      vertex:{
        module: sceneVSShader,
        entryPoint: 'main',
        buffers: [{
          // arrayStride=24：每个顶点占 24 字节（位置 xyz + 法线 xyz，各 3×4）
          // GPU 按此步长在 vertex buffer 中逐顶点取数据
          arrayStride: 24,
          attributes: [
            // shaderLocation 对应 WGSL 里 @location(N)
            { shaderLocation: 0, offset: 0, format: 'float32x3' }, // position
            { shaderLocation: 1, offset: 12, format: 'float32x3' } // normal
          ]
        }]
      },
      fragment: {
        module: sceneFSShader,
        entryPoint: 'main',
        // 为什么输出到 rgba16float 而不是直接输出到 canvas？
        // rgba16float 是 HDR 格式，可存储 >1.0 的高光值，不会截断
        // 后处理 Pass 再读这张 HDR 纹理做 tone mapping，最后输出到 canvas
        targets: [{ format: 'rgba16float' }]
      },
      primitive: {
        topology: 'triangle-list',
        // cullMode: 'back'：剔除背面三角形（法线朝内的面不可见）
        // 减少约 50% 的片元着色器调用，是标准性能优化
        cullMode: 'back'
      },
      depthStencil: {
        depthWriteEnabled: true,
        // 'less'：新片元深度 < 已有深度时才通过测试（近处遮挡远处）。
        depthCompare: 'less',
        // depth24plus：24 位深度，足够精度；+stencil 可选，这里只用深度。
        format: 'depth24plus'
      }
    })

    // ── 后处理管线（postPipeline） ──
    // 无深度测试（全屏后处理不需要 3D 深度比较），无 vertex buffer（顶点靠 index 生成）
    postPipeline = device.createRenderPipeline({
      layout: 'auto',
      vertex: {
        module: postVSShader,
        entryPoint: 'main'
      },
      fragment: {
        module: postFSShader,
        entryPoint: 'main',
        // 最终输出到 canvas 的格式（bgra8unorm 或 rgba8unorm）
        targets: [{ format }]
      },
      primitive: {
        topology: 'triangle-list'
      }
    })

    // sceneTexture：场景渲染的中间 HDR 缓冲
    // RENDER_ATTACHMENT：可作为 render pass 的颜色输出目标
    // TEXTURE_BINDING：可在后处理着色器中被采样读取。两个 flag 都需要
    sceneTexture = device.createTexture({
      size: [canvas.width, canvas.height],
      format: 'rgba16float',
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
    })

    // depthTexture：深度缓冲，记录每像素最近片元的深度，实现遮挡关系
    // 只需 RENDER_ATTACHMENT，不需要在着色器中采样（如需 SSAO 则要加 TEXTURE_BINDING）
    depthTexture = device.createTexture({
      size: [canvas.width, canvas.height],
      format: 'depth24plus',
      usage: GPUTextureUsage.RENDER_ATTACHMENT
    })

    // ── 后处理 Bind Group ──
    // 将 sceneTexture 和 sampler 绑定到后处理着色器的 @binding(0)/@binding(1)
    // resize 时 sceneTexture 被销毁重建，所以 postBindGroup 也需要重建（见 resize 事件）
    postBindGroup = device.createBindGroup({
      layout: postPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: sceneTexture.createView() },
        // linear filter：双线性插值采样，模糊边界处更平滑，适合后处理。
        { binding: 1, resource: device.createSampler({ magFilter: 'linear', minFilter: 'linear' }) }
      ]
    })

    initSphere()

    initCanvasFunc()

    render()
  }

  // ─── 主渲染循环 ─────────────────────────────────────────────────────────
  const render = () => {
    // time 以固定步长递增（约 60fps 帧时长 1/60≈0.016s）。
    // 简化实现；精确版应用 requestAnimationFrame 回调的 timestamp 参数计算 deltaTime。
    time += 0.016

    if (autoRotate) {
      camera.rotY += 0.005 // 自动慢速水平旋转，展示各球体受光情况
    }

    const viewProj = getViewProjMatrix()

    // ── Command Encoder：记录本帧所有 GPU 命令 ──
    // WebGPU 是显式命令提交模型：先录制命令（CPU 侧），再一次性 submit 给 GPU。
    // 好处：驱动可以批量优化命令流；与 WebGL 每条调用立即发送的模式不同。
    const commandEncoder = device.createCommandEncoder()

    // ═══════════════════════════════════════════════════════
    // Pass 1：场景渲染 → sceneTexture（HDR 中间缓冲）
    // ═══════════════════════════════════════════════════════
    const scenePass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: sceneTexture.createView(),
        // 每帧先清为深色背景（接近黑色带微蓝，营造夜间场景感）
        clearValue: { r: 0.02, g: 0.02, b: 0.05, a: 1 },
        loadOp: 'clear', // 渲染前清除，确保上一帧残留不影响本帧
        storeOp: 'store' // 渲染完保留结果，供后处理 Pass 读取
      }],
      depthStencilAttachment: {
        view: depthTexture.createView(),
        depthClearValue: 1.0, // 1.0 = 最远深度，所有新片元初始都能通过 'less' 测试
        depthLoadOp: 'clear',
        depthStoreOp: 'store' // 深度值本帧内复用（若有多个物体前后遮挡）
      }
    })

    scenePass.setPipeline(scenePipeline)

    // 逐球渲染：每个球体写自己的 uniformBuffer → 绑定自己的 bindGroup → 绘制。
    // 因为 writeBuffer 在 submit 前全部执行完毕，独立 buffer 保证各球数据不互相覆盖。
    spheres.forEach(sphere => {
      updateUniforms(sphere, viewProj, time)
      scenePass.setBindGroup(0, sphere.uniformBindGroup)
      scenePass.setVertexBuffer(0, sphere.vertexBuffer)
      scenePass.setIndexBuffer(sphere.indexBuffer, 'uint16')
      scenePass.drawIndexed(sphere.indexCount)
    })

    scenePass.end()

    // ═══════════════════════════════════════════════════════
    // Pass 2：后处理（双边模糊 + 晕影）→ Canvas 显示缓冲
    // ═══════════════════════════════════════════════════════
    const postPass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        // getCurrentTexture()：从 swapchain 取当前帧的后缓冲区（双缓冲/三缓冲之一）。
        // 每帧调用以确保写入正确的缓冲，不能缓存其 view（swapchain 会轮转）。
        view: context.getCurrentTexture().createView(),
        clearValue: { r: 0, g: 0, b: 0, a: 1 },
        loadOp: 'clear',
        storeOp: 'store'
      }]
      // 无 depthStencilAttachment：全屏后处理不需要深度测试
    })

    postPass.setPipeline(postPipeline)
    postPass.setBindGroup(0, postBindGroup) // sceneTexture + sampler
    postPass.draw(6) // 6 个顶点 = 2 个三角形 = 覆盖全屏的四边形
    postPass.end()

    // finish() 封闭命令缓冲区，submit() 提交给 GPU Queue 异步执行。
    // 两步分离允许同时提交多个 commandBuffer（本例只有一个）。
    device.queue.submit([commandEncoder.finish()])

    // 注册下一帧，形成持续渲染循环。
    // RAF 在浏览器绘制前触发，自动匹配显示器刷新率（60/120/144Hz 均适用）。
    requestID.value = requestAnimationFrame(render)
  }

  initWebGPU()
}

const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    onRunning()
  } else {
    isRunning.value = false
    destroy()
  }
}

const destroy = () => {
  cancelAnimationFrame(requestID.value)
  requestID.value = null

  destroyCanvasFunc()

  // 释放每个球体占用的 GPU 缓冲区
  spheres.forEach(sphere => {
    sphere.vertexBuffer.destroy()
    sphere.indexBuffer.destroy()
    sphere.uniformBuffer.destroy()
  })
  spheres = []

  // 释放离屏纹理（显存）
  sceneTexture?.destroy()
  depthTexture?.destroy()
  sceneTexture = null
  depthTexture = null

  // 断开 canvas 与 WebGPU 的关联，释放 swapchain
  context?.unconfigure()
  context = null

  // 销毁 GPUDevice，释放所有设备级资源（pipeline、shader 等由 device 统一回收）
  device?.destroy()
  device = null

  // 清空管线引用（pipeline 对象由 device 销毁后自动失效，这里只是置空 JS 引用）
  scenePipeline = null
  postPipeline = null
  postBindGroup = null

  canvas = null
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>