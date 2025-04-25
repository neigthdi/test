<template>
  <div>
    <div>为什么是-u_time，而不是u_time，具体解释看fire2的 main 函数里面的解析</div>
    <div class="flex space-between">
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
      <div @click="showText = !showText" class="pointer">点击{{ !showText ? '展开': '收起'}}文字</div>
    </div>
    <div v-if="showText">
      <p>1、为什么选择椭球体作为火焰的基础形状？</p>
      <p>&nbsp;&nbsp;1.1---火焰的形状通常是一个向上延伸的、逐渐变细的形状。椭球体（或扁平的椭球体）是一个很好的基础形状，因为它可以近似火焰的整体轮廓。</p>
      <p>&nbsp;&nbsp;1.2---通过调整椭球体的参数（如扁平程度），可以更好地控制火焰的形状。</p>
      <p>----------------------------------------</p>
      <p>2、为什么使用光线行进算法（Ray Marching）？</p>
      <p>&nbsp;&nbsp;2.1---光线行进算法是一种用于渲染复杂场景（如体积效果、SDF 等）的算法。它通过沿着光线方向逐步前进，计算光线与场景的交点。</p>
      <p>&nbsp;&nbsp;2.2---这种方法非常适合渲染火焰，因为它可以处理火焰的不规则形状和动态变化。</p>
    </div>
    <canvas v-if="isRunning" id="fire1" class="stage bg-black"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue'

const isRunning = ref(false)
const showText = ref(false)

const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    onStart()
  } else {
    isRunning.value = false
  }
}

onMounted(async () => {
  await nextTick()
})

// scene(p) === min(100.0 - length(p), abs(fireDist))
// flame(p) === fireDist

// -------------------------------------------
// 1. 场景距离（scene(p)）
// scene(p) 是一个全局的距离场函数，它计算点 p 到整个场景中所有物体的最近距离。这个场景可能包含多个物体，例如火焰、边界球体、地面等
// 具体作用
// 全局距离计算：scene(p) 返回的是点 p 到场景中所有物体的最近距离。它是一个综合的距离场，用于判断点 p 是否接近或到达场景中的任何物体
// 光线行进的终止条件：在光线行进算法中，当 scene(p) <= eps 时，认为光线已经到达或穿过场景的表面，此时应该停止行进。eps 是一个小的阈值，用于避免数值误差

// 2. 火焰距离（flame(p)）
// flame(p) 是一个局部的距离场函数，它专门计算点 p 到火焰形状的最近距离。这个函数只关注火焰的形状，不考虑其他物体
// 具体作用
// 局部距离计算：flame(p) 返回的是点 p 到火焰形状的最近距离。它是一个局部的距离场，用于判断点 p 是否在火焰内部、表面或外部
// 火焰效果的模拟：通过 flame(p)，可以判断点 p 是否在火焰内部，从而模拟火焰的发光效果。如果 flame(p) < 0，说明点 p 在火焰内部；如果 flame(p) = 0，说明点 p 在火焰表面；如果 flame(p) > 0，说明点 p 在火焰外部

// 3. 场景距离和火焰距离的区别
// 范围：
//    scene(p)：全局范围，考虑场景中的所有物体
//    flame(p)：局部范围，只考虑火焰形状
// 用途：
//    scene(p)：用于控制光线行进的终止条件，确保光线不会穿透场景表面
//    flame(p)：用于模拟火焰的发光效果，判断点 p 是否在火焰内部

// 4. 具体例子
// 假设场景中包含以下物体：
// 一个火焰形状，由 flame(p) 定义
// 一个边界球体，用于限制光线的行进范围
// 一个地面平面
// scene(p) 的计算
// scene(p) 会综合考虑这些物体，返回点 p 到这些物体的最近距离。例如：
// float scene(vec3 p) {
//     float d1 = sphere(p, vec4(0., 0., 0., 10.)); // 边界球体
//     float d2 = flame(p); // 火焰形状
//     float d3 = plane(p, vec4(0., 1., 0., -5.)); // 地面平面
//     return min(min(d1, d2), d3); // 返回最近距离
// }
// 在这个例子中，scene(p) 返回的是点 p 到边界球体、火焰形状和地面平面的最近距离
// flame(p) 的计算
// flame(p) 只考虑火焰形状，返回点 p 到火焰的最近距离。例如：
// float flame(vec3 p) {
//     float d = sphere(p * vec3(1., 0.5, 1.), vec4(0., -1., 0., 1.));
//     return d + (noise(p + vec3(0., iTime * 2., 0.)) + noise(p * 3.) * 0.5) * 0.25 * p.y;
// }
// 在这个例子中，flame(p) 返回的是点 p 到火焰形状的最近距离，并结合噪声函数模拟火焰的动态效果

// 5. 为什么需要两个距离
//      scene(p)：确保光线在场景中正确行进，不会穿透任何物体表面。它是一个全局的距离场，用于控制光线行进的终止条件
//      flame(p)：专门用于模拟火焰的发光效果。它是一个局部的距离场，用于判断点 p 是否在火焰内部

// 6. 总结
//      scene(p) 是全局的距离场，用于控制光线行进的终止条件，确保光线不会穿透场景表面
//      flame(p) 是局部的距离场，用于模拟火焰的发光效果，判断点 p 是否在火焰内部

// 通过这两个距离的计算，可以确保光线在场景中正确行进，并在火焰区域产生正确的发光效果

// -------------------------------------------
// fireDist 和 min(100.0 - length(p), abs(fireDist))  都是计算距离场
// 场景表面：由 min(100.0 - length(p), abs(fireDist)) 定义，表示点 p 到整个场景的最近距离为零的集合，场景可能包含多个物体（如火焰、边界等），用于控制光线行进的终止条件
// 火焰表面：由 fireDist 定义，表示点 p 到火焰形状的最近距离为零的集合，用于模拟火焰的发光效果
// -------------------------------------------
// 为什么在未到达场景表面时（d > eps）判断是否在火焰内部？
// 关键在于距离场的性质：
// min(100.0 - length(p), abs(fireDist)) 返回的是点 p 到整个场景的最小距离。如果  > 0，说明点 p 在场景的外部；如果  = 0，说明点 p 在场景的表面上；如果 < 0，说明点 p 在场景的内部
// fireDist 返回的是点 p 到火焰形状的最小距离。如果  > 0，说明点 p 在火焰的外部；如果 = 0，说明点 p 在火焰的表面上；如果  < 0，说明点 p 在火焰的内部
// -------------------------------------------
// 为什么只能在d>eps才能继续判断fireDist < .0，如果d<eps时候判断fireDist < .0，会怎么样？
// 在光线行进算法中，d 表示当前点 p 到整个场景的最近距离。如果 d > eps，说明当前点 p 还在场景的外部，光线可以继续向前行进。如果 d <= eps，则认为光线已经到达或穿过场景的表面，此时应该停止行进。
// 如果在 d < eps 时仍然判断 fireDist < .0，可能会导致以下问题：
//    a. 光线穿透表面
//        如果 d < eps，说明点 p 已经非常接近或已经到达场景的表面。此时，如果 fireDist < 0，说明点 p 在火焰内部，但光线可能已经穿过了火焰表面。这会导致光线在火焰内部行进，而不是在表面或外部。
//    b. 错误的发光效果
//        在 d < eps 时，如果 fireDist < 0，可能会错误地计算发光强度 glow。因为此时点 p 已经非常接近或已经到达场景的表面，继续计算发光强度可能会导致不正确的火焰效果。
//    c. 光线行进终止
//        在光线行进算法中，当 d < eps 时，通常认为光线已经到达场景的表面，应该停止行进。如果此时仍然判断 fireDist < 0，可能会导致光线在火焰内部行进，而不是在表面或外部，从而影响最终的渲染结果。
// -------------------------------------------
// 正确的逻辑
// 正确的逻辑是在 d > eps 时判断 fireDist < .0，这样可以确保：
//     光线在场景的外部行进
//     当光线进入火焰区域时，可以正确地计算发光强度 glow
//     当光线到达场景的表面时，可以正确地终止行进

const onStart = () => {
  import('glslCanvas').then(module => {
    const canvas = document.getElementById('fire1')
    const glslCanvas: any = new module.default(canvas)

    glslCanvas.load(`
      #extension GL_OES_standard_derivatives: enable
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      // 左手坐标系
      // ro：相机的位置（Ray Origin），即相机在三维空间中的坐标这个点是所有视线（或光线）的起点
      // target：相机的目标点，即相机“看”向的点这个点决定了相机的前进方向（Forward向量）
      // up：相机的向上方向（Up向量），通常与相机的前进方向垂直，这个向量用于确定相机的右侧方向（Right向量）和确保相机的坐标系是正交的
      // 相机源点、目标、向上方向
      // R、U、F分别是Right、Up和Forward向量
      mat3 getCameraMat(vec3 ro, vec3 target, vec3 up) {
        vec3 f = normalize(target - ro); // 计算Forward向量（F）

        // 叉积 cross(a, b) 的结果是一个垂直于向量 a 和 b 的向量
        // 注意：由于使用的是左手坐标系，所以是使用 up 叉乘 f，而不是反过来进行叉乘，进行叉乘运算时一定要注意其方向性！
        vec3 r = cross(up, f); // Right向量（R）是Forward向量和Up向量的叉积，表示相机的右侧方向

        vec3 u = normalize(cross(f, r)); // 为了确保Up向量垂直于Forward向量，需要重新计算Up向量为Right向量和Forward向量的叉积

        return mat3(r, u, f);
      }

      // 基于Perlin噪声的火焰效果噪声函数
      // 作用：这是一个 3D 噪声函数，用于生成平滑的随机值
      // 由于 Perlin 噪声的性质，这个函数的输出值在 [−1,1] 范围内
      float noise(vec3 p) {
        vec3 i = floor(p);

        // a 是一个四维向量，它的每个分量都是 i 与向量 (1.0,57.0,21.0) 的点积，再加上一个常数向量 (0.0,57.0,21.0,78.0)
        vec4 a = dot(i, vec3(1.0, 57.0, 21.0)) + vec4(0.0, 57.0, 21.0, 78.0);

        // f 是一个三维向量，它的每个分量都是 (p−i) 乘以 π（即 acos(-1.0)），然后取余弦值，再进行线性变换得到的。这个变换将 (p−i) 的范围从 [0,1] 映射到 [−0.5,0.5]，然后平移到 [0,1]
        vec3 f = cos((p - i) * acos(-1.0)) * (-0.5) + 0.5;

        // d 是一个四维向量，它的每个分量都是通过在两个正弦值之间进行插值得到的。这两个正弦值分别是 sin(cos(a)∗a) 和 sin(cos(1.0+a)∗(1.0+a))，插值因子是 f.x
        vec4 d = mix(sin(cos(a) * a), sin(cos(1.0 + a) * (1.0 + a)), f.x);

        // d 的前两个分量被更新为在 (d.x,d.z) 和 (d.y,d.w) 之间进行插值得到的值，插值因子是 f.y
        d.xy = mix(d.xz, d.yw, f.y);

        // 最后，函数返回 d.x 和 d.y 之间的插值，插值因子是 f.z
        return mix(d.x, d.y, f.z);
      }

      // 球体的定义
      // spr.xyz 是球心的坐标，spr.w 是球的半径
      float getSphereDist(vec3 p) {
        vec4 sphere = vec4(0.0, 0.0, 0.0, 1.0); // 把第二个设成-1.0可以看到下半部，把第二个设成1.0看到上半部，把第二个设成0.0看到全部
        vec3 sphereVec = vec3(1.0, 1.0, 1.0);
        vec3 ellipseVec = vec3(1.0, 0.5, 1.0);
        return length(sphere.xyz - p * sphereVec) - sphere.w;
      }

      // 椭圆的定义：
      // 椭圆可以看作是一个被拉伸或压缩的圆
      // 如果在某个轴上压缩点的坐标，那么在该轴方向上，椭圆会看起来被拉伸
      // ---------------------------------------------
      // 椭圆的公式
      // ((x - h) * (x - h)) / (a * a) + ((y - k) * (y - k)) / (b * b) + ((z - m) * (z - m)) / (c * c) = 1
      // ---------------------------------------------
      // (x * x) / (1 * 1) + (y * y) / (0.5 * 0.5) + (z * z) / (1 * 1) = 1
      // x^2 + 4y^2 = 1
      // 由于x的系数是1，y的系数是4，可以知道椭圆的长轴在y轴上，短轴在x轴上
      float getEllipseDist(vec3 p) {
        // point进行非均匀的缩放，x轴保持原比例，y轴压缩为原来的0.5倍，z轴保持原比例
        // 由于是y轴被压缩，椭圆在y轴被被拉伸
        vec3 pointScale = vec3(1.0, 0.5, 1.0);

        // 平移
        vec3 pointTranslate = vec3(0.0, 0.0, 0.0);

        // 减去 1.0 是为了创建一个包含椭圆形状的隐式函数，定义了一个单位椭圆
        float dist = length(p * pointScale - pointTranslate) - 1.0;

        return dist;
      }

      // 太奇怪，思考不明白
      // 正常而言，p是随时间而向上移动，即 p + vec3(0.0, u_time * 3.0, 0.0) 。但是要-u_time才能正确显示效果，即等于 p - vec3(0.0, u_time * 3.0, 0.0)
      // noise(p * 3.0) * 0.5： 添加更高频率的噪声，用于增加火焰的细节
      // 0.25 * p.y：  火焰的动态效果在 Y 轴方向上逐渐减弱，模拟火焰向上延伸时逐渐变细的特性
      float fireNoise(vec3 p) {
        // float n = noise(vec3(0.0, p.y + u_time, 0.0)); // 随着u_time的增大，是往下运动的
        // return n;

        // return p.y + u_time; // 随着u_time的增大，是往下运动的

        // return u_time; // 随着u_time的增大，椭圆是逐渐变小

        float n = noise(p + vec3(0.0, -u_time * 3.0, 0.0) + noise(p * 3.0) * 0.5) * 0.5 * p.y;
        return n;
      }


      // rayOrigin 代表光线的起点
      // rayDirection 代表光线的方向
      vec4 rayMarching(vec3 rayOrigin, vec3 rayDirection) {
        float glow = 0.0;
        float eps = 0.02;
        vec3 p = rayOrigin;
        const float MAX_STEPS = 64.0;

        for(float i = 0.0; i < MAX_STEPS; i += 1.0) {
          float n = fireNoise(p);
          float dist = getEllipseDist(p);
          // float dist = getSphereDist(p);
          
          // fireDist：计算点 p 到火焰形状的最近距离，调整火焰的形状和边界
          // 目的是将椭圆形状（dist）与噪声（n）结合起来，从而生成一个动态的、不规则的火焰形状
          float fireDist = dist + n;

          // 100.0 - length(p)
          // 这个表达式计算点 p 到场景边界的距离
          // 假设场景是一个半径为 100 的球体，那么：
          // length(p)：计算点 p 到原点的距离
          // 100.0 - length(p)：计算点 p 到场景边界的距离
          //      如果 length(p) < 100.0，则点 p 在场景内部，距离为正
          //      如果 length(p) = 100.0，则点 p 在场景边界上，距离为零
          //      如果 length(p) > 100.0，则点 p 在场景外部，距离为负
          //-----------------------------------------------------------
          // abs(fireDist)
          // 这个表达式计算点 p 到火焰表面的绝对距离
          // 火焰距离场 fireDist 可能是正数（点在火焰外部）、零（点在火焰表面）或负数（点在火焰内部）
          // 取绝对值 abs(fireDist) 可以得到点 p 到火焰表面的最近距离
          //-----------------------------------------------------------
          // min(100.0 - length(p), abs(fireDist))
          // 这个表达式取 100.0 - length(p) 和 abs(fireDist) 中的最小值，用于确定点 p 到场景中最近表面的距离
          // 这可以确保：
          //      如果点 p 更接近场景边界，使用 100.0 - length(p) 作为距离
          //      如果点 p 更接近火焰表面，使用 abs(fireDist) 作为距离
          //-----------------------------------------------------------
          // + eps：确保d的值避免数值不稳定性或除零错误
          //-----------------------------------------------------------
          // 为什么不是 abs(fireDist) + eps？
          // 如果只使用 abs(fireDist) + eps，则只考虑了点 p 到火焰表面的距离，而没有考虑点 p 到场景边界的距离。这可能导致以下问题：
          //      当点 p 接近场景边界但远离火焰表面时，abs(fireDist) 可能很大，导致光线继续行进，穿透场景边界
          //      当点 p 在火焰内部但接近场景边界时，abs(fireDist) 为正，但光线可能已经到达场景边界，应该停止行进
          float d = min(100.0 - length(p), abs(fireDist)) + eps;

          p += d * rayDirection;

          // 如果 d > eps，说明当前点距离表面还有一段距离，光线可以继续前进
          // 如果 d <= eps，说明光线已经接近表面，可以停止前进
          // 这个条件用于避免光线在表面附近发生数值不稳定或无限循环的情况
          // 表明 min(100.0 - length(p), abs(fireDist)) 取的是abs(fireDist)的值
          if (d > eps) {
            // 检查当前点是否在发光源的范围内（通过 fireDist < 0.0 判断，在内部）
            // 如果在发光源范围内，标记当前点为被照亮（glowed = true）
            // 如果当前点被照亮，则计算辉光强度（glow），其值随着迭代步数的增加而增加，但被归一化到 [0, 1) 的范围内
            // 当光线在火焰内部时：glow 会逐渐增加，表示光线越接近火焰表面，发光强度越高
            // 当光线在火焰外部时：glow 保持为 0，表示没有发光
            // 当光线接近火焰边界时：glow 的值会接近 1，表示发光强度最大
            if (fireDist < 0.0) {
              glow = i / MAX_STEPS;
            }
          }
        }

        return vec4(p, glow);
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = 2.0 * (fragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x); // 归一化 uv 的坐标，范围在 [-1, 1] 之间
        // vec2 uv = fragCoord.xy / u_resolution.xy; // 将屏幕坐标归一化到[0, 1]范围内
        uv.x *= u_resolution.x / u_resolution.y; // 修正宽高比，使得火焰变细或变粗
        

        // 方式一：
        // rayDirection 是光线的方向向量，表示光线沿着哪个方向行进
        // 之所以 * vec3(uv, 1.0)，uv.x 表示水平方向的偏移，uv.y 表示垂直方向的偏移，1.0 表示沿着相机的前进方向（即深度方向）的偏移
        // vec3(uv, 1.0) 将二维的 uv 坐标扩展为一个三维向量，其中 z 分量为 1.0
        vec3 cameraPos = vec3(0.0, 0.0, -2.0); // 相机位置
        vec3 cameraTarget = vec3(0.0, u_mouse.y * 0.01, 0.0); // 相机看向的位置
        vec3 cameraUp = vec3(0.0, 1.0, 0.0); // 相机上方向
        vec3 rayDirection = getCameraMat(cameraPos, cameraTarget, cameraUp) * vec3(uv, 1.0);
        vec4 result = rayMarching(cameraPos, rayDirection);
        float glow = result.w; // 返回火焰的发光强度

        // 方式二：
        // 这个是固定视角的
        // vec3 org = vec3(0.0, -2.0, 4.0);
        // vec3 dir = normalize(vec3(uv.x * 1.6, -uv.y, -1.5));
        // vec4 result = rayMarching(org, dir);
        // float glow = result.w; // 返回火焰的发光强度

        vec4 col = mix(vec4(1.0, 0.5, 0.1, 1.0), vec4(0.1, 0.5, 1.0, 1.0), result.y * 0.02 + 0.4); // 混合火焰的颜色，从橙色（底部）到蓝色（顶部）
         
        gl_FragColor = mix(vec4(0.0), col, pow(glow * 4.0, 5.0)); // 根据发光强度调整
      }`)
  })
}
</script>