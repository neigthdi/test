<template>
  <div>
    <div>为什么是-u_time，而不是u_time？主要是glow的影响，如何理解？</div>
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
    <canvas v-if="isRunning" id="fire1" class="stage"></canvas>
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

const onStart = () => {
  import('glslCanvas').then(module => {
    const canvas = document.getElementById('fire1')
    const glslCanvas: any = new module.default(canvas)

    glslCanvas.load(`
      #extension GL_OES_standard_derivatives : enable
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
      // 原理：
      // 1、floor(p)：将输入坐标 p 向下取整，得到格点坐标 i
      // 2、dot(i, vec3(1.0, 57.0, 21.0))：计算格点的哈希值，用于生成随机数
      // 3、cos((p - i) * acos(-1.0)) * (-0.5) + 0.5：计算插值系数 f，用于在格点之间平滑过渡
      // 4、mix 和 sin(cos(...))：通过混合和调制生成平滑的噪声值
      // 输出：返回一个 [0, 1] 范围内的随机值，用于模拟火焰的动态和不规则性
      float noise(vec3 p) {
        vec3 i = floor(p);
        vec4 a = dot(i, vec3(1.0, 57.0, 21.0)) + vec4(0.0, 57.0, 21.0, 78.0);
        vec3 f = cos((p - i) * acos(-1.0)) * (-0.5) + 0.5;
        vec4 d = mix(sin(cos(a) * a), sin(cos(1.0 + a) * (1.0 + a)), f.x);
        d.xy = mix(d.xz, d.yw, f.y);
        return mix(d.x, d.y, f.z);
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
        // return p.y + u_time; // 随着u_time的增大，是往下运动的
        
        float n = noise(p + vec3(0.0, u_time * 3.0, 0.0) + noise(p * 3.0) * 0.5) * 0.5 * p.y;
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

          // 调整火焰的形状和边界
          float fireDist = dist + n;

          // 作用：计算当前点到最近表面的距离
          // 100.0 - length(p)：定义一个半径为 100 的球体，用于限制火焰的范围
          // abs(fireDist)：取火焰形状函数的绝对值，确保火焰的边界清晰
          // min(...)：取两者之间的最小值，用于组合火焰和边界
          // + eps：确保d的值避免数值不稳定性或除零错误
          float d = min(100.0 - length(p), abs(fireDist)) + eps;

          p += d * rayDirection;

          // 表明 min(100.0 - length(p), abs(fireDist)) 取的是abs(fireDist)的值
          if (d > eps) {
            // 检查当前点是否在发光源的范围内（通过 fireDist < 0.0 判断，在内部）
            // 如果在发光源范围内，标记当前点为被照亮（glowed = true）
            // 如果当前点被照亮，则计算辉光强度（glow），其值随着迭代步数的增加而增加，但被归一化到 [0, 1) 的范围内
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
        
        vec3 cameraPos = vec3(0.0, 0.0, -2.0); // 相机位置
        vec3 cameraTarget = vec3(0.0, u_mouse.y * 0.01, 0.0); // 相机看向的位置
        vec3 cameraUp = vec3(0.0, 1.0, 0.0); // 相机上方向

        // rayDirection 是光线的方向向量，表示光线沿着哪个方向行进
        // 之所以 * vec3(uv, 1.0)，uv.x 表示水平方向的偏移，uv.y 表示垂直方向的偏移，1.0 表示沿着相机的前进方向（即深度方向）的偏移
        // vec3(uv, 1.0) 将二维的 uv 坐标扩展为一个三维向量，其中 z 分量为 1.0
        vec3 rayDirection = getCameraMat(cameraPos, cameraTarget, cameraUp) * vec3(uv, 1.0);
        vec4 result = rayMarching(cameraPos, rayDirection);
        float glow = result.w; // 返回火焰的发光强度


        // 这个是固定视角的
        // vec3 org = vec3(0.0, -2.0, 4.0);
        // vec3 dir = normalize(vec3(uv.x * 1.6, -uv.y, -1.5));
        // vec4 result = rayMarching(org, dir);
        // float glow = result.w;

        vec4 col = mix(vec4(1.0, 0.5, 0.1, 1.0), vec4(0.1, 0.5, 1.0, 1.0), result.y * 0.02 + 0.4); // 混合火焰的颜色，从橙色（底部）到蓝色（顶部）
         
        gl_FragColor = mix(vec4(0.0), col, pow(glow * 4.0, 5.0)); // 根据发光强度调整
      }`)
  })
}
</script>