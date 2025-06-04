<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="fire2" class="shader-toy-stage bg-black"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue'

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

onMounted(async () => {
  await nextTick()
})

const onStart = () => {
  import('glslCanvas').then(module => {
    const canvas = document.getElementById('fire2')
    const glslCanvas: any = new module.default(canvas)

    glslCanvas.load(`
      #extension GL_OES_standard_derivatives: enable
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      // 将一个二维向量 p 映射到一个二维向量，这个向量的每个分量都是在 -1.0 到 1.0 之间的随机值
      // hash 函数的步骤如下：
      // 首先，通过 dot 函数计算 p 与两个特定向量的点积，得到两个标量值
      // 然后，将这两个标量值分别乘以一个特定的常数 43758.5453123，并取其正弦值
      // 最后，将正弦值乘以 2.0 并减去 1.0，得到在 -1.0 到 1.0 之间的随机值
      // 这个 hash 函数在 noise 函数中被用来生成随机的梯度向量，这些梯度向量被用来计算 Perlin 噪声。在 Perlin 噪声的计算中，每个格点上的梯度向量是随机的，而 hash 函数就是用来生成这些随机梯度向量的
      // 在 FBM 函数中，noise 函数被多次调用，每次调用都会生成一个噪声值，这些噪声值被加起来形成一个分形布朗运动（FBM）噪声
      // FBM 噪声可以用来生成自然界的纹理，如云、山、水等
      // 因此，hash 函数是生成随机梯度向量的关键函数，为 Perlin 噪声的计算提供了基础
      vec2 hash(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }


      // hash 函数的返回值范围：
      //    hash 函数返回的值在 −1.0,1.0 之间。这是因为 hash 函数通过 fract 和 sin 函数生成随机值，并将其映射到 −1.0,1.0 范围内
      // 权重计算：
      //    权重 h 是基于点到当前点的距离的平方计算的，并通过 max 函数确保不会为负值。权重的范围是 0.0,0.5
      // 噪声值计算：
      //    每个点的噪声值通过 h * h * h * h 进行平滑插值，这使得权重值更小，进一步缩小了噪声值的范围
      // 最后通过 dot(n, vec3(70.0)) 进行缩放，这可能会稍微扩大返回值的范围，但仍然不会超出 −1.0,1.0
      float noise(vec2 p) {

        // K1 和 K2 是用于计算 Perlin 噪声的常数，它们的值是根据 Perlin 噪声的数学原理精心选择的
        // 这些值的来源是 Perlin 噪声的原始论文，它们是基于正六边形的几何性质
        // 在 Perlin 噪声中，每个格点上的梯度向量是随机的，而这些梯度向量的长度是 1
        // 为了确保梯度向量的长度是 1，需要使用 K1 和 K2 这两个常数来调整梯度向量的坐标
        // 具体来说，K1 是正六边形的边长，而 K2 是正六边形的高
        // 这两个值的比值是 sqrt(3)/2，这是正六边形的几何性质决定的
        const float K1 = 0.366025404; // (sqrt(3) - 1) / 2  用于将点 p 映射到 Simplex 网格中，这个值确保了网格的对称性和均匀性
        const float K2 = 0.211324865; // (3 - sqrt(3)) / 6  用于调整点 a、b 和 c 的坐标，确保它们位于 Simplex 单元的正确位置

        // i、a、o、b、c 的几何意义
        // 在二维 Simplex 噪声中，每个点 p 被映射到一个三角形单元（Simplex）中
        // 这个三角形单元由三个顶点组成：当前点 a、点 b 和点 c
        // 通过计算这三个点的噪声值，并进行插值，可以生成平滑的噪声

        // 计算格点坐标
        // 当前点 p 所在的 Simplex 网格的格点坐标
        // K1 是一个常数，用于将点 p 映射到网格中
        // floor 函数用于取整，确保 i 是网格中的整数坐标
        vec2 i = floor(p + (p.x + p.y) * K1);

        // 计算相对坐标
        // 点 p 相对于其所在的格点 i 的坐标
        // K2 是另一个常数，用于调整坐标，确保 a 是在单位 Simplex 内的相对坐标
        vec2 a = p - (i - (i.x + i.y) * K2);

        // 确定相邻点
        // 确定了当前点 p 所在的 Simplex 单元内的其他两个点 b 和 c
        // o 是一个偏移向量，用于选择 b 点的方向
        // 这一步的作用是根据点 a 的坐标来确定偏移向量 o
        // 点 a 是当前点 p 相对于其所在格点 i 的相对坐标
        // 通过比较 a.x 和 a.y 的大小，可以确定 p 在当前 Simplex 单元中的位置
        // 如果 a.x<a.y，则 o=vec2(0.0,1.0)。这意味着 p 更接近于 Simplex 单元的左下角
        // 如果 a.x≥a.y，则 o=vec2(1.0,0.0)。这意味着 p 更接近于 Simplex 单元的右下角
        // b 和 c 是相对于 a 的其他两个顶点的坐标
        vec2 o = (a.x < a.y) ? vec2(0.0, 1.0) : vec2(1.0, 0.0);

        // 确定相邻点
        // b 和 c 是相对于 a 的其他两个顶点的坐标
        // 点 b 是 Simplex 单元内的第二个顶点
        // 通过从 a 中减去偏移向量 o，然后加上常数 K2，可以得到点 b 的坐标
        // 这里的 K2 是一个调整因子，用于确保 b 位于 Simplex 单元的正确位置
        vec2 b = a - o + K2;

        // 确定相邻点
        // b 和 c 是相对于 a 的其他两个顶点的坐标
        // 点 c 是 Simplex 单元内的第三个顶点
        // 通过从 a 中减去 1.0，然后加上 2.0×K2，可以得到点 c 的坐标
        // 这里的 1.0 和 2.0×K2 是调整因子，用于确保 c 位于 Simplex 单元的正确位置
        vec2 c = a - 1.0 + 2.0 * K2;
        
        // 计算的每个点的权重
        // 权重是基于点到当前点的距离的平方，通过 dot 函数计算
        // max 函数确保权重不会为负值
        vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
      
        // 计算每个点的噪声值
        // hash 函数用于生成随机梯度向量
        // dot 函数计算点积
        // h * h * h * h 是一个平滑的权重函数，用于插值
        vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
        
        return dot(n, vec3(70.0));
      }

      // 遇见过多种 fbm，主要看自己想怎么写
      // 1、hash 生成随机梯度向量
      // 2、noise 函数的选择
      // 3、fbm 计算
      // ------------------------------------
      // noise 函数的返回值范围：
      //    noise 函数返回的值在 −1.0,1.0 之间，通常集中在 −0.6,0.6 之间
      // fbm 函数的结构：
      //    fbm 函数通过多次调用 noise 函数，并对每次的结果进行加权求和，从而生成分形布朗运动（FBM）噪声
      // fbm 函数的返回值范围：
      //    每次调用 noise 函数的返回值范围是 −1.0,1.0，但通常集中在 −0.6,0.6 之间
      //    通过加权求和，fbm 函数的返回值范围被限制在 0.0,1.0 之间
      //    最后通过 f = f + 0.5，将结果整体向上移动，使得返回值范围更接近 0.0,1.0
      // ------------------------------------
      // noise 函数的返回值范围是 −1.0,1.0，则：
      //    第一次调用 noise(uv) 的返回值范围是 −1.0,1.0，乘以 0.5 后范围是 −0.5,0.5
      //    第二次调用 noise(uv) 的返回值范围是 −1.0,1.0，乘以 0.25 后范围是 −0.25,0.25
      //    第三次调用 noise(uv) 的返回值范围是 −1.0,1.0，乘以 0.125 后范围是 −0.125,0.125
      //    第四次调用 noise(uv) 的返回值范围是 −1.0,1.0，乘以 0.0625 后范围是 −0.0625,0.0625
      // 将这些值相加：
      //    最小值：−0.5−0.25−0.125−0.0625=−1.0
      //    最大值：0.5+0.25+0.125+0.0625=1.0
      // f = f + 0.5 将结果整体向上移动：
      //    最小值：−1.0+0.5=−0.5
      //    最大值：1.0+0.5=1.5
      float fbm(vec2 uv) {
        float f = 0.0;
        uv = uv * 2.0;
        f  = 0.5 * noise(uv); 
        uv = 2.0 * uv;
        f += 0.25 * noise(uv); 
        uv = 2.0 * uv;
        f += 0.125 * noise(uv); 
        uv = 2.0 * uv;
        f += 0.0625 * noise(uv); 
        f = f + 0.5;
        return f;
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        // vec2 uv = (fragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x); // 归一化 uv 的坐标，范围在 [-1, 1] 之间
        vec2 uv = fragCoord.xy /u_resolution.xy; // 归一化到 [0, 1]

        uv.x *= 5.0; // 将 x 轴的范围拉伸到 [0, 5]，同时会使得火苗变得更加细

        uv.x -= 2.5; // 将 uv.x 的范围从 [0, 5] 偏移到 [-2.5, 2.5]。火焰的生成范围现在以 0 为中心，对称分布在屏幕的 x 轴上，即 Ox = 2.5
        uv.y -= 0.25; // 与上同理，即 Oy = 0.25

        // 这个的运动方向是从右上角往左下角运动
        // 因为 uv 的范围是从左下角的 (-1, -1) 到右上角的 (1, 1)，加上时间变量 u_time，所以会导致噪声从右上角向左下角移动
        // color += fbm(uv * 4.0 + u_time * 0.5);

        // 如果想改变方向，比如垂直方向，只在垂直方向上加上时间变量，这样噪声只会在垂直方向移动，而不会在水平方向移动
        // color += fbm(vec2(uv.x, uv.y + u_time * 0.5) * 4.0);

        // -------------------------------------------
        // 为什么是“uv.y - u_time * 1.2”而不是“uv.y + u_time * 1.2”？
        // 当减小 uv.y 时，纹理上的点会向下移动
        // 但是，由于纹理被映射到屏幕上的一个固定区域（这个“固定区域”是重点），这些点在屏幕上的位置实际上会向上移动（因为屏幕上的 y 坐标是向上增加的）
        // 这就造成了视觉上的错觉：纹理看起来像是从下往上移动
        // -------------------------------------------
        // 可以通过以下代码查看相关效果
        // 正常情况下，每个颜色在屏幕的视觉中占领 0.2 个单位，但是红色是 -无穷大到 0.2，紫色是 0.8 到 +无穷大
        // 如果 uv.y - 0.1，那么采样点在噪声纹理中向下移动了 0.1 个单位，此时红色的范围会变大，紫色的范围变小，屏幕（即上面说的“固定区域”）所展示的效果是往上滚动，坐标范围从 0~1 变成 -0.1~0.9
        // void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        //   vec2 uv = fragCoord.xy / iResolution.xy;
        //   vec3 col = vec3(0.0, 0.0, 0.0);
        //   float y = uv.y - 0.0;
        //   if (y < 0.2) {  col = vec3(1.0, 0.0, 0.0); }
        //   if (y > 0.2 && y < 0.4) { col = vec3(0.0, 1.0, 0.0); }
        //   if (y > 0.4 && y < 0.6) { col = vec3(0.0, 0.0, 1.0); }
        //   if (y > 0.6 && y < 0.8) { col = vec3(1.0, 1.0, 0.0); }
        //   if (y > 0.8 && y < 1.0) { col = vec3(1.0, 0.0, 1.0); }
        //   fragColor = vec4(col, 1.0);
        // }
        // -------------------------------------------
        float finalFbm = fbm(vec2(uv.x, uv.y - u_time * 1.2) * 1.74588 + vec2(0.2155, 0.5654));

        // 1、火焰的颜色（亮度）的变化：內焰颜色亮度最低，外焰颜色偏亮，再往外，变成了烟，亮度就又变暗了
        // 2、亮度应该和像素的 y 坐标有联系
        // 用 finalFbm * uv.y 来达到这一效果（有高亮部分，也有明暗的变换）
        // float c = 1.0 - 1.0 * pow(finalFbm * uv.y, 1.0);
        // ------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓------------
        // 用 length(uv) 限定了只要“中间”的这一块区域，20 则是慢慢调试出来的
        float c = 1.0 - 20.0 * pow(length(uv) - finalFbm * uv.y, 2.0);

        // 由于 float c = 1.0 - 20.0 * pow(length(uv) - finalFbm * uv.y, 2.0); 的取值范围是 −115.568,1.0
        // 所以 c1 使用 clamp 限制在 0 - 1 之间，如果输入值小于 0，则输出 0；如果输入值大于 1，则输出 1；如果输入值在 0 到 1 之间，则输出该值本身

        float c1 = c * (1.0 - pow(uv.y, 4.0));
        c1 = clamp(c1, 0.0, 1.0);
        c1 = c1 * finalFbm; // 使得颜色正常一些，c1 乘以其他的也行
        
        float c2 = c * (1.0 - pow(uv.y, 4.0));

        vec3 color = vec3(1.5 * c1, 1.5 * c1 * c1 * c1, c1 * c1 * c1 * c1 * c1 * c1);
        color = mix(vec3(0.0), color, c2); // 这个 mix 主要是防止超出 length 范围的一些噪音（火焰）出现

        gl_FragColor = vec4(color, 1.0);
      }`)
  })
}
</script>