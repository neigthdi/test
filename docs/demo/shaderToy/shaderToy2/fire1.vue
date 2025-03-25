<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div @click="showText = !showText" class="pointer">点击{{ !showText ? '展开': '收起'}}文字</div>
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
import { ref, nextTick } from 'vue'

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

const onStart = () => {
  import('glslCanvas').then(module => {
    const canvas = document.getElementById('fire1')
    const glslCanvas: any = new module.default(canvas)

    glslCanvas.load(`
      #extension GL_OES_standard_derivatives : enable
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;

      // 噪声函数
      // 作用：这是一个 3D 噪声函数，用于生成平滑的随机值。
      // 原理：
      // 1、floor(p)：将输入坐标 p 向下取整，得到格点坐标 i。
      // 2、dot(i, vec3(1., 57., 21.))：计算格点的哈希值，用于生成随机数。
      // 3、cos((p - i) * acos(-1.)) * (-0.5) + 0.5：计算插值系数 f，用于在格点之间平滑过渡。
      // 4、mix 和 sin(cos(...))：通过混合和调制生成平滑的噪声值。
      // 输出：返回一个 [0, 1] 范围内的随机值，用于模拟火焰的动态和不规则性。
      float noise(vec3 p) {
        vec3 i = floor(p);
        vec4 a = dot(i, vec3(1.0, 57.0, 21.0)) + vec4(0.0, 57.0, 21.0, 78.0);
        vec3 f = cos((p - i) * acos(-1.)) * (-0.5) + 0.5;
        a = mix(sin(cos(a) * a), sin(cos(1. + a) * (1. + a)), f.x);
        a.xy = mix(a.xz, a.yw, f.y);
        return mix(a.x, a.y, f.z);
      }

      // 火焰形状函数
      // 作用：定义火焰的形状。
      // 原理：
      // 1、length(p * vec3(1., 0.5, 1.) - vec3(0., -1., 0.)) - 1.0：
      //    这是一个椭球体的形状公式，p 是当前点的坐标。
      //    vec3(1.0, 0.5, 1.0) 使火焰在 Y 轴方向上更扁平。
      //    vec3(0.0, -1., 0.0) 是火焰的中心位置。
      //    -1.0 是椭球体的半径。
      // 2、noise(p + vec3(0.0, u_time * 2.0, 0.0))：
      //    添加动态噪声，使火焰随时间变化。
      // 3、noise(p * 3.0) * 0.5：
      //    添加更高频率的噪声，用于增加火焰的细节。
      // 4、0.25 * p.y：
      //    火焰的动态效果在 Y 轴方向上逐渐减弱，模拟火焰向上延伸时逐渐变细的特性。
      // 输出：返回一个值，表示当前点是否在火焰内部（负值表示在内部，正值表示在外部）。
      float flame(vec3 p) {
        float d = length(p * vec3(1.0, 0.5, 1.0) - vec3(0.0, -1.0, 0.0)) - 1.0;
        return d + (noise(p + vec3(0.0, u_time * 2.0, 0.0)) + noise(p * 3.0) * 0.5) * 0.25 * p.y;
      }

      // 场景函数
      // 作用：定义整个场景的形状。
      // 原理：
      // 1、100. - length(p)：定义一个半径为 100 的球体，用于限制火焰的范围。
      // 2、abs(flame(p))：取火焰形状函数的绝对值，确保火焰的边界清晰。
      // 3、min(...)：取两者之间的最小值，用于组合火焰和边界。
      // 输出：返回当前点到场景边界的距离。
      float scene(vec3 p) {
        return min(100.0 - length(p), abs(flame(p)));
      }

      // 光线行进算法
      // 作用：通过光线行进算法渲染火焰效果。
      // 原理：
      // 1、org 和 dir：分别表示光线的起点和方向。
      // 2、scene(p)：计算当前点到场景边界的距离。
      // 3、p += d * dir：沿着光线方向逐步前进。
      // 4、flame(p) < 0.0：判断当前点是否在火焰内部。
      // 5、glow：记录火焰的发光强度，用于后续的颜色计算。
      // 输出：返回一个 vec4，包含最终点的位置和发光强度。
      vec4 rayMarch(vec3 org, vec3 dir) {
        float d = 0.0;
        float glow = 0.0;
        float eps = 0.02;
        vec3 p = org;
        bool glowed = false;

        for (int i = 0; i < 64; i++) {
          // 计算当前点到最近表面的距离
          d = scene(p) + eps;

          // 根据当前点到最近表面的距离 d，沿着光线方向 dir 更新光线的位置
          p += d * dir;

          // 如果当前点到最近表面的距离大于 eps，表示光线还没有到达表面
          if (d > eps) {
            // flame(p)是一个函数，返回点 p 的发光值。如果返回值小于 0.0，表示点 p 在发光区域内
            if (flame(p) < 0.0)
              glowed = true;
            if (glowed)
              glow = float(i) / 64.0;
          }
        }
        return vec4(p, glow);
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = (fragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        vec2 u = fragCoord.xy / u_resolution.xy; // 将屏幕坐标归一化到[0, 1]范围内
        u.x *= u_resolution.x / u_resolution.y; // 修正宽高比，避免火焰变形。



        vec3 org = vec3(0.0, -2.0, 4.0); // 观察点，观察点的坐标，位于火焰下方
        vec3 dir = normalize(vec3(uv.x * 1.6, -uv.y, -1.5)); // 观察方向，光线的方向，根据屏幕坐标 uv 计算

        vec4 result = rayMarch(org, dir); // 用光线行进算法，计算火焰的发光强度，计算光线与火焰的交点
        float glow = result.w; // 返回火焰的发光强度

        vec4 col = mix(vec4(1.0, 0.5, 0.1, 1.0), vec4(0.1, 0.5, 1.0, 1.0), result.y * 0.02 + 0.4); // 混合火焰的颜色，从橙色（底部）到蓝色（顶部）
        gl_FragColor = mix(vec4(0.0), col, pow(glow * 2.0, 4.0)); // 根据发光强度调整
      }`)
  })
}
</script>