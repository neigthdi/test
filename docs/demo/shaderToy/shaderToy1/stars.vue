
<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="stars" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const isRunning = ref(false)

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
    const canvas = document.getElementById('stars')
    const glslCanvas: any = new module.default(canvas)
 
    glslCanvas.load(`
      #extension GL_OES_standard_derivatives: enable
      precision highp float;

      uniform float u_time;
      uniform vec2 u_resolution;

      // 旋转
      mat2 rot(float a) {
        float s = sin(a);
        float c = cos(a);
        return mat2(c, -s, s, c);
      }

      // uv , 星辉的亮度
      float star(vec2 uv, float flare) {
        // 画圆形
        float d = length(uv);
        float m = 0.05 / d;

        // 大的十字
        float r = max(0.0, 1.0 - abs(uv.x * uv.y * 1000.0));
        m += r * flare;

        // 小的十字
        uv *= rot(3.1415926 / 4.0);
        float r2 = max(0.0, 1.0 - abs(uv.x * uv.y * 1000.0));
        m += r2 * flare * 0.25;

        // d > 0.8 为0， d < 0.2 为1
        return  m * smoothstep(0.8, 0.2, d);
      }

      // 将星星绘制的更加错落有致，利用一个Hash函数来让每个格子里的星星发生一点点偏移
      float hash21(vec2 p) {
        p = fract(p * vec2(123.45, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x + p.y);
      }

      vec3 layer(vec2 uv) {
        vec3 col = vec3(0.0);

        float splitNumb = 3.0;

        vec2 st = fract(uv * splitNumb) - 0.5;

        // 由于想要的是每个格子产生的随机数需要保持一致，所以不能够使用st 坐标来产生随机数
        // 而是要获取每个格子的index或者说是 id来产生随机数
        // 即每次遍历都是该id为参数的随机函数产生的结果
        // 使用floor 函数来获取每个格子的id。
        vec2 id = floor(uv * splitNumb);

        // 此时会有断层出现
        // float offset = hash21(id) * 0.3;
        // col += star(st - offset, 1.0);

        // 解决断层
        // y -> -1.0，0.0，1.0
        // x -> -1.0，0.0，1.0
        // 在一个3x3的邻域内，对于每个邻域点，都计算一个基于哈希函数的内部偏移
        // 并使用这个偏移和邻域偏移来调用一个Star函数来计算某种效果（可能是星星或亮点）
        // 然后将这个效果累加到col上。这种技术常用于生成复杂的纹理、噪声或其他视觉效果
        // ------------------------------------------------------------------------
        // 这两个循环，正在遍历一个3x3的网格（以当前点为中心），这通常用于某种邻域操作或采样
        // 代码遍历了当前像素 uv 周围的一些格子（即邻近的格子），并对每个格子应用星星效果
        // 循环遍历了y值从-1到1的整数范围，代表垂直方向上的三个点（通常是中心点以及上下两个相邻的点）
        for (float y = -1.0; y <= 1.0; y++) {
          // 循环遍历了x值从-1到1的整数范围，代表水平方向上的三个点（通常是中心点以及左右两个相邻的点）
          for (float x = -1.0; x <= 1.0; x++) {

            // 创建了一个二维向量neighborOffset，它表示从当前点到邻域中某个点的偏移
            // 用于定义当前正在处理的邻居（或称为“邻近格子”）的偏移量
            // 代码的目的是遍历当前像素所在位置（由 uv 表示）附近的格子或“细胞”（cells），并为每个这样的格子或细胞计算星星的效果
            vec2 neighborOffset = vec2(x, y);

            // 使用哈希函数Hash21，结合一个标识符id和邻域偏移来计算一个浮点数值n
            // 这是一个伪随机值，用于生成某种噪声或纹理
            float n = hash21(id + neighborOffset);

            // 计算了一个内部偏移innerOffset，它基于之前计算的哈希值n
            // 可以把下面三个innerOffset分别查看效果
            // fract函数返回其参数的小数部分，所以fract(n * 52.)将n乘以52并取其小数部分
            // 这会为innerOffset引入某种随机或周期性的变化
            // vec2 innerOffset = vec2(n - 0.5, n - 0.3);
            // vec2 innerOffset = vec2(x - 0.5, y - 0.3);
            vec2 innerOffset = vec2(n - 0.5, fract(n * 25.) - 0.5);
            
            // 通过size来改变星辉的亮度
            float size = fract(n * 345.34) * 0.8 + 0.2;
            float flare = smoothstep(0.4, 0.8, size);

            // 星星颜色
            vec3 color = sin(vec3(0.2, 0.5, 0.9) * fract(n * 2345.2) * 6.28) * 0.5 + 0.5;
            color *= vec3(0.3 + size * 0.2, 0.5, 0.5 + size * 1.5);

            // st 是一个二维向量，表示当前像素或片段的屏幕空间位置（通常是一个 (x, y) 坐标对）
            // neighborOffset 是一个二维向量，表示从当前位置到某个邻接位置的偏移量（例如，上下左右或对角线方向的偏移）
            // innerOffset 同样是一个二维向量，是基于某种哈希函数或其他随机机制生成的，用于为邻接位置引入额外的随机或周期性偏移
            // st - neighborOffset - innerOffset 的结果就是计算出一个新的二维位置，相对于当前位置的一个偏移点，并且这个偏移点被 innerOffset 进一步随机化或扰动了
            // 把innerOffset换成0.1之类的值，则是所有的星星都偏移固定的值
            float s = star(st - neighborOffset - innerOffset, flare);
            col += s * size * color;
          }
        }

        vec2 nuv = fract(uv * splitNumb);

        // 网格
        // if (abs(nuv.x) < fwidth(nuv.x) || abs(nuv.y) < fwidth(nuv.y)) {
        //   col = vec3(1.0);
        // }
        // if (abs(uv.x) < fwidth(uv.x)) {
        //   col = vec3(0.0, 1.0, 0.0);
        // }
        // if (abs(uv.y) < fwidth(uv.y)) {
        //   col = vec3(1.0, 0.0, 0.0);
        // }

        return col;
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = (fragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        // vec3 col = layer(uv);

        vec3 col = vec3(0.0);
        float t = u_time * 0.1;
        // 把uv旋转
        uv *= rot(t);

        for (float i = 0.0; i < 1.0; i += 1. / 2.0) {
          // t的作用是模拟深度，z轴的方向
          float depth = fract(i + t);
          float fade = smoothstep(0.0, 0.3, depth) * smoothstep(1.0, 0.9, depth);
          float scale = mix(20.0, .05, depth);
          col += layer(uv * scale + i * 435.32) * fade;
        }

        gl_FragColor = vec4(col, 1.0);
      }`)
  })
}

</script>
