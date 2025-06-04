
<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="sea1" class="shader-toy-stage bg-black"></canvas>
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
    const canvas = document.getElementById('sea1')
    const glslCanvas: any = new module.default(canvas)
 
    glslCanvas.load(`
      #extension GL_OES_standard_derivatives: enable
      precision highp float;

      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      #define EPSILON_NRM (0.1 / u_resolution.x) // 是一个宏定义，用于定义一个常量 
      const int NUM_STEPS = 32;
      const float PI = 3.1415926;
      const float EPSILON	= 1e-3; // 'epsilon'(ε)

      // sea
      const int ITERATION_GEOMETRY = 3; // 迭代几何
      const int ITERATION_FRAGMENT = 5; // 迭代片段
      const float SEA_HEIGHT = 0.6; // 海平面高度
      const float SEA_CHOPPY = 4.0; // 海浪的波动
      const float SEA_SPEED = 0.8; // 海浪的速度
      const float SEA_FREQ = 0.16; // 海浪的频率
      const vec3 SEA_BASE = vec3(0.0, 0.09, 0.18); // 海浪的基础颜色
      const vec3 SEA_WATER_COLOR = vec3(0.8, 0.9, 0.6) * 0.6; // 海水的颜色
      #define SEA_TIME (1.0 + u_time * SEA_SPEED) // 海浪的时间
      const mat2 octave_m = mat2(1.6, 1.2, -1.2, 1.6); // 倍频程矩阵

      // 这段代码将一个包含欧拉角的向量 vec3 ang 转换为一个旋转矩阵 mat3 m
      // 欧拉角是三个角度，分别表示绕 x 轴、y 轴和 z 轴的旋转
      // 这个函数的目的是根据这三个角度计算出相应的旋转矩阵
      // 旋转矩阵的计算基于欧拉角的旋转顺序
      // 通常，旋转顺序可以是任意的，但这段代码假设的旋转顺序是先绕 x 轴旋转，然后绕 y 轴旋转，最后绕 z 轴旋转
      // 旋转矩阵的计算公式是：
      // R=RzRyRx
      // --------------------
      // Rx=
      // 1	0	       0
      // 0	cos⁡(θx)	−sin⁡(θx)
      // 0	sin⁡(θx)	cos⁡(θx)
      // --------------------
      // Ry=
      // cos⁡(θy)	  0	 sin⁡(θy)
      // 0	       1  0
      // −sin⁡(θy)	0	 cos⁡(θy)
      // --------------------
      // Rz=
      // cos⁡(θz)	−sin⁡(θz)	0
      // sin⁡(θz)	cos⁡(θz)	0
      // 0	     0	      1
      // --------------------
      // RyRx=
      // cos⁡(θy)	  sin⁡(θy)sin⁡(θx)	sin⁡(θy)cos⁡(θx)
      // 0	       cos⁡(θx)	        −sin⁡(θx)
      // −sin⁡(θy)	cos⁡(θy)sin⁡(θx)	cos⁡(θy)cos⁡(θx)
      // --------------------
      // Rz(RyRx)=
      // cos⁡(θz)	−sin⁡(θz)	0          cos⁡(θy)	  sin⁡(θy)sin⁡(θx)	sin⁡(θy)cos⁡(θx)
      // sin⁡(θz)	cos⁡(θz)	0     *    0	       cos⁡(θx)	        −sin⁡(θx) 
      // 0	     0	      1          −sin⁡(θy)	cos⁡(θy)sin⁡(θx)	cos⁡(θy)cos⁡(θx)
      // 得到最终的 finalMatrix
      // cos⁡(θy)cos⁡(θz)	   sin⁡(θy)sin⁡(θx)cos⁡(θz)−cos⁡(θx)sin⁡(θz)	   sin⁡(θy)cos⁡(θx)cos⁡(θz)+sin⁡(θx)sin⁡(θz)
      // cos⁡(θy)sin⁡(θz)	   sin⁡(θy)sin⁡(θx)sin⁡(θz)+cos⁡(θx)cos⁡(θz)	   sin⁡(θy)cos⁡(θx)sin⁡(θz)−sin⁡(θx)cos⁡(θz)
      // −sin⁡(θy)	        cos⁡(θy)sin⁡(θx)	                         cos⁡(θy)cos⁡(θx)
      mat3 getRotationMatrixByEulerAngle(vec3 ang) {
        vec2 a1 = vec2(sin(ang.x), cos(ang.x)); // 计算绕 x 轴旋转的角度 ang.x 的正弦和余弦值类似人头上下点头的动作
        vec2 a2 = vec2(sin(ang.y), cos(ang.y)); // 计算绕 y 轴旋转的角度 ang.y 的正弦和余弦值类似人头左右摇头的动作
        vec2 a3 = vec2(sin(ang.z), cos(ang.z)); // 计算绕 z 轴旋转的角度 ang.z 的正弦和余弦值类似人头左右摆头的动作
        mat3 finalMatrix; // 定义一个 3x3 的矩阵
        finalMatrix[0] = vec3(a1.y * a3.y + a1.x * a2.x * a3.x, a1.y * a2.x * a3.x + a3.y * a1.x, -a2.y * a3.x); // 计算旋转矩阵的第一行
        finalMatrix[1] = vec3(-a2.y * a1.x, a1.y * a2.y, a2.x); // 计算旋转矩阵的第二行
        finalMatrix[2] = vec3(a3.y * a1.x * a2.x + a1.y * a3.x, a1.x * a3.x  -a1.y * a3.y * a2.x, a2.y * a3.y); // 计算旋转矩阵的第三行
        return finalMatrix;
      }



      // sky
      // 根据给定的方向向量 e 计算天空的颜色这个函数模拟了天空的渐变效果，从地平线到天顶的颜色变化
      vec3 getSkyColor(vec3 e) {
        // max(e.y, 0.0)：确保 e.y 的值不小于 0，因为天空的颜色通常在地平线以上
        // max(e.y, 0.0) * 0.8：将 e.y 的值乘以 0.8，使颜色变化更加平缓
        // max(e.y, 0.0) * 0.8 + 0.2：在乘以 0.8 的基础上加上 0.2，确保地平线处的颜色不会太暗
        // (max(e.y, 0.0) * 0.8 + 0.2) * 0.8：再次乘以 0.8，进一步调整颜色的亮度
        e.y = (max(e.y, 0.0) * 0.8 + 0.2) * 0.8;
        
        // pow(1.0 - e.y, 2.0)：计算 1.0 - e.y 的平方，用于模拟天空颜色的非线性变化这个值将用于红色分量，使天空在地平线处更红
        // 1.0 - e.y：直接使用 1.0 - e.y 作为绿色分量，使天空在地平线处更绿
        // 0.6 + (1.0 - e.y) * 0.4：计算蓝色分量，使天空在地平线处更蓝 0.6 是基础蓝色，(1.0 - e.y) * 0.4 根据 e.y 的值增加蓝色
        // vec3(pow(1.0 - e.y, 2.0), 1.0 - e.y, 0.6 + (1.0 - e.y) * 0.4)：将计算得到的红、绿、蓝分量组合成一个颜色向量
        // vec3(pow(1.0 - e.y, 2.0), 1.0 - e.y, 0.6 + (1.0 - e.y) * 0.4) * 1.1：将颜色向量乘以 1.1，增加颜色的亮度
        return vec3(pow(1.0 - e.y, 2.0), 1.0 - e.y, 0.6 + (1.0 - e.y) * 0.4) * 1.1;
      }



      float hash(vec2 p) {
        float h = dot(p,vec2(127.1, 311.7));	
        return fract(sin(h) * 43758.5453123);
      }


      float noise(in vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);	
        vec2 u = f * f * (3.0 - 2.0 * f);
        return -1.0 + 2.0 * mix(mix(hash(i + vec2(0.0, 0.0)), 
                                hash(i + vec2(1.0, 0.0)), u.x),
                                mix(hash(i + vec2(0.0, 1.0)), 
                                hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }


      // 函数旨在计算漫反射光的强度
      // 接受三个参数：法向量 n、光源方向 l 和一个粗糙度参数 p（有时也称为“漫反射指数”）
      // 函数返回一个浮点数，代表漫反射光的强度
      float diffuse(vec3 n, vec3 l, float p) {
        // 首先，使用 dot 函数计算法向量 n 和光源方向 l 之间的夹角的余弦值
        // 这个余弦值表示了光线与表面法线之间的对齐程度：当光线垂直于表面时，余弦值为 1；当光线与表面平行时，余弦值为 0（或负值，但在此上下文中我们只关心其绝对值，因为负值表示光线实际上是从表面后面照射过来的，这在物理上是没有意义的）
        // 接下来，将这个余弦值乘以 0.4 并加上 0.6，这个操作为了调整漫反射光的强度分布（可要可不要）
        // 乘以 0.4 会降低余弦值对最终强度的影响，而加上 0.6 则确保即使余弦值为 0（即光线与表面几乎平行）时，漫反射光也会有一定的基础强度，这种调整可能是基于特定的光照模型或艺术效果需求
        // 然后，使用 pow 函数将这个调整后的值提升到 p 次方
        // 这个操作通常用于模拟表面的粗糙度
        // 当 p 值较大时，漫反射光的强度分布会更加集中在法线附近（即光线更垂直于表面时强度更高），模拟出更光滑的表面
        // 而当 p 值较小时，漫反射光的强度分布会更加均匀，模拟出更粗糙的表面
        return pow(dot(n, l) * 0.4 + 0.6, p);
      }


      // 函数旨在计算镜面反射光的强度
      // 它接受四个参数：法向量 n、光源方向 l、观察方向 e 和一个光泽度参数 s（通常称为“镜面高光指数”或“粗糙度”的倒数）
      // 函数返回一个浮点数，代表镜面反射光的强度
      float specular(vec3 n, vec3 l, vec3 e, float s) {    
        float nrm = (s + 8.0) / (PI * 8.0);

        // 首先，reflect(e, n) 函数计算光线从表面反射的方向
        // 然后，使用 dot 函数计算这个反射方向与光源方向 l 之间的夹角的余弦值
        // max 函数确保这个余弦值不会小于 0.0，因为余弦值在光线和表面法线之间的夹角大于 90 度时为负，而负值在物理上是没有意义的（因为这意味着光线实际上并没有照射到表面上）
        // 接下来，使用 pow 函数将这个余弦值的 s 次方计算出来
        // 这个操作增强了高光效果：当 s 值较大时，只有反射方向与光源方向几乎完全对齐时，结果才会显著（产生尖锐的高光）；而当 s 值较小时，即使反射方向与光源方向不完全对齐，结果也会相对较大（产生柔和的高光）
        return pow(max(dot(reflect(e, n), l), 0.0), s) * nrm;
      }



      // choppy 需要每次迭代都不一样，计算海浪的波浪起伏
      float seaOctave(vec2 uv, float choppy) {
        uv += noise(uv);        
        vec2 wave1 = 1.0 - abs(sin(uv)); // 计算海浪的波浪起伏
        vec2 wave2 = abs(cos(uv)); // 计算海浪的波浪起伏
        wave1 = mix(wave1, wave2, wave1); // 混合
        return pow(1.0 - pow(wave1.x * wave1.y, 0.65), choppy);
      }



      // 该函数基于给定的位置返回海洋平面的高度
      float computedSeaPlaneHeight(vec3 point, int iteration) {
        float freq = SEA_FREQ;
        float amplitude = SEA_HEIGHT;
        float choppy = SEA_CHOPPY;
        vec2 tempUv = point.xz; 
        tempUv.x *= 0.75;

        float d = 0.0; // 每个海浪分量的高度差
        float h = 0.0; // 海洋高度


        // 由于 WebGL 1.0 的限制，最简单且通常最可行的解决方案是使用固定的迭代次数
        // WebGL 2.0 则不用这样，可以用动态传入的 iteration
        if(iteration == ITERATION_GEOMETRY) {
          for (int j = 0; j < ITERATION_GEOMETRY; j += 1) {
            d = seaOctave((tempUv + SEA_TIME) * freq, choppy); // 计算海浪分量的高度差
            d += seaOctave((tempUv - SEA_TIME) * freq, choppy); // 计算海浪分量的高度差
            h += d * amplitude; // 将当前海浪分量的高度差 d 乘以振幅 amp，然后累加到总高度 h 上
            tempUv *= octave_m;
            freq *= 1.9;  // 频率
            amplitude *= 0.22; // 振幅
            choppy = mix(choppy, 1.0, 0.2); // 混合
          }
        }

        // 由于 WebGL 1.0 的限制，最简单且通常最可行的解决方案是使用固定的迭代次数
        // WebGL 2.0 则不用这样，可以用动态传入的 iteration
        if(iteration == ITERATION_FRAGMENT) {
          for (int j = 0; j < ITERATION_FRAGMENT; j += 1) {
            d = seaOctave((tempUv + SEA_TIME) * freq, choppy); // 计算海浪分量的高度差
            d += seaOctave((tempUv - SEA_TIME) * freq, choppy); // 计算海浪分量的高度差
            h += d * amplitude; // 将当前海浪分量的高度差 d 乘以振幅 amp，然后累加到总高度 h 上
            tempUv *= octave_m;
            freq *= 1.9;  // 频率
            amplitude *= 0.22; // 振幅
            choppy = mix(choppy, 1.0, 0.2); // 混合
          }
        }

        

        // 返回输入位置 point 的 y 分量减去计算出的海浪高度 h 这给出了该点相对于海平面的高度
        return point.y - h;
      }



      // 目的是计算给定空间位置 p 处的法向量 n
      // 这个函数采用了数值微分的方法来估算法向量，这通常用于基于体素（voxel）、高度图（heightMap）或其他形式的三维数据集中
      // eps 是一个小的浮点数，用于计算相邻位置之间的差异，从而估算法向量的方向
      vec3 getNormal(vec3 p, float eps) {
        vec3 n;
        n.y = computedSeaPlaneHeight(p, ITERATION_FRAGMENT); // 计算位置 p 处的地形高度或密度，并将其存储在 n.y 中
        
        // 为什么减去 n.y，因为通过计算偏移点的高度与原始点高度（n.y）的差值，可以得到该方向上的高度变化率，即斜率，查看（自定义效果 - 海浪 -1.png）
        // computedSeaPlaneHeight(vec3(p.x + eps, p.y, p.z), ITERATION_FRAGMENT) 计算点 p+ϵi 处的高度
        // 计算位置 p 在 x 方向偏移 eps 后的地形高度或密度，并将其与 n.y（即原始位置 p 的高度或密度）相减，以估算 x 方向的斜率
        // n.x ≈ h(p+ϵi)−h(p) / ϵ
        n.x = computedSeaPlaneHeight(vec3(p.x + eps, p.y, p.z), ITERATION_FRAGMENT) - n.y; 
        
        // 为什么减去 n.y，因为通过计算偏移点的高度与原始点高度（n.y）的差值，可以得到该方向上的高度变化率，即斜率，查看（自定义效果 - 海浪 -1.png）
        // computedSeaPlaneHeight(vec3(p.x, p.y, p.z + eps), ITERATION_FRAGMENT) 计算点 p+ϵk 处的高度
        // 计算位置 p 在 z 方向偏移 eps 后的地形高度或密度，并将其与 n.y（即原始位置 p 的高度或密度）相减，以估算 z 方向的斜率
        // n.z ≈ h(p+ϵk)−h(p) / ϵ
        n.z = computedSeaPlaneHeight(vec3(p.x, p.y, p.z + eps), ITERATION_FRAGMENT) - n.y; 

        // eps 是 dot(distanceVector, distanceVector) * EPSILON_NRM
        // 简化处理：在某些情况下，开发者可能会为了简化计算而进行一些近似处理
        // 特殊需求：可能在你的应用场景中，法线的 y 分量需要根据 ϵ 进行调整
        // 通常应该将法线的 y 分量设置为 1，而不是 ϵ，即 n.y = 1.0;
        n.y = eps;
        return normalize(n);
      }


      // 函数旨在计算海洋表面某一点 p 的颜色，考虑到法向量 n、光源方向 l、观察方向 eye 和到观察者的距离 dist
      vec3 getSeaColor(vec3 p, vec3 n, vec3 l, vec3 eye, vec3 dist) {
        // 计算菲涅耳效应，即光线从一种介质进入另一种介质时反射和折射的比例
        // 这里使用点积来计算法向量 n 和观察方向 -eye (因为观察方向通常指向观察者，而我们需要的是指向光源或表面的相反方向) 之间的夹角的余弦值，然后用 1.0 减去这个值得到菲涅耳因子
        // clamp 函数确保这个值在 0.0 到 1.0 之间
        float fresnel = clamp(1.0 - dot(n, -eye), 0.0, 1.0);
        
        // 对菲涅耳因子进行三次方运算，以增强菲涅耳效应在高角度时的效果（即当观察方向几乎与表面平行时）
        // 然后，使用 min 函数确保结果不会超过 0.5，这可能是为了限制反射光的强度
        fresnel = min(fresnel * fresnel * fresnel, 0.5);
        
        // 计算反射光颜色 reflect 函数计算光线从表面反射的方向，然后 getSkyColor 函数返回该方向上的天空颜色
        vec3 reflected = getSkyColor(reflect(eye, n));

        // 计算折射光颜色
        // 这里 SEA_BASE 表示海水的基础颜色
        // diffuse 函数根据法向量 n、光源方向 l 和一个粗糙度参数（这里是 80.0）返回漫反射光的强度
        // 这个强度乘以 SEA_WATER_COLOR（海水的颜色）和一个缩放因子（0.12）来得到折射光的颜色部分
        // 然后，将这个部分加到 SEA_BASE 上
        vec3 refracted = SEA_BASE + diffuse(n, l, 80.0) * SEA_WATER_COLOR * 0.12; 
        
        // 使用 mix 函数根据菲涅耳因子将折射光和反射光的颜色混合在一起菲涅耳因子越高，反射光的成分就越多；反之，折射光的成分就越多
        vec3 color = mix(refracted, reflected, fresnel);
        
        // 计算衰减因子
        // 这里使用 dist 向量与其自身的点积（即 dist 的长度的平方）乘以一个衰减系数（0.001）
        // 然后从 1.0 中减去这个结果
        // max 函数确保结果不会小于 0.0
        // 这个衰减因子用于模拟随着距离增加海水颜色逐渐减弱的效果
        float attenuation = max(1.0 - dot(dist, dist) * 0.001, 0.0);

        // 根据点 p 的 y 坐标与海面高度 SEA_HEIGHT 的差异来调整颜色
        // 这个差异乘以一个缩放因子（0.18）和之前计算的衰减因子 atten
        // 然后乘以 SEA_WATER_COLOR 并加到最终颜色上
        // 这可能用于模拟海水深浅不同时的颜色变化
        color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * attenuation;
        
        // 计算并添加镜面反射光颜色
        // specular 函数返回镜面反射光的颜色
        // 这个颜色被直接加到最终颜色上
        color += specular(n, l, eye, 60.0);
        
        return color;
      }



      // 高度图的描图
      // 作用是进行光线与高度图（如海面）的交点追踪，用于在给定起点和方向的情况下，找到与海面相交的位置
      // 具体来说，通过一系列的迭代计算，确定光线从起点 rayOrigin 沿着方向 direction 出发，与高度图（在这个场景中是海面）相交的具体位置，并将这个交点位置输出到参数 intersectionPoint 中
      // 这个函数是渲染海洋场景的关键部分，它结合了深度映射（depth mapping）和步进（stepping）技术来确定光线与海洋表面的交点
      float heightMapTracing(vec3 rayOrigin, vec3 direction, out vec3 intersectionPoint) {
        float nearPlane = 0.0; // 初始化近平面（near plane）的距离为 0
        float farPlane = 1000.0; // 初始化远平面（far plane）的距离 farPlane 为一个较大的数（1000.0），这是光线投射的最大距离
        
        // 先计算 farHeight，再计算 nearHeight 的原因
        // 在渲染或图形处理中，远处的物体通常对最终图像的影响较小，因此可以先以较低的精度或分辨率计算远处的高度（hx），以减少计算量
        // 随后，再对近处的物体进行更精细的计算（hm），以确保图像质量
        // 所以会 return farPlane

        float farHeight = computedSeaPlaneHeight(rayOrigin + direction * farPlane, ITERATION_GEOMETRY); // 计算远平面位置的高度
        // 如果 farHeight 小于 0，则表明了远平面位置的高度小于 0，即光线投射方向上没有海面的交点，这时直接返回 0.0，表示没有交点
        // 需要计算近平面位置的高度，以确定光线投射方向上的海面交点位置
        if(farHeight > 0.0) {
          intersectionPoint = rayOrigin + direction * farPlane; // 如果远平面位置的高度大于 0，则将远平面位置作为交点位置
          return farPlane; // 返回远平面的距离
        }

        // for 循环用于迭代计算光线投射方向上的海面交点位置，光线步进算法
        float nearHeight = computedSeaPlaneHeight(rayOrigin + direction * nearPlane, ITERATION_GEOMETRY); // 计算近平面位置的高度
        for (int i = 0; i < NUM_STEPS; i++) { // 开始一个循环，循环次数由 NUM_STEPS 定义，这是光线投射过程中的步进次数
          // 计算当前步的中点距离 middle distance 这是通过线性插值（mix）nearPlane 和 farPlane 得到的，插值因子基于当前步的高度差与总高度差的比例
          float tempDistance = mix(nearPlane, farPlane, nearHeight / (nearHeight - farHeight)); // 注意，此时的 farHeight 永远是小于 0 的
          intersectionPoint = rayOrigin + direction * tempDistance;
          float tempHeight = computedSeaPlaneHeight(rayOrigin + direction * tempDistance, ITERATION_GEOMETRY);
          
          // 如果 tempHeight < 0.0，这意味着中点位置 p 的高度低于基准面，即光线投射方向上没有海面的交点，这时需要继续迭代步进，以确定交点位置，因此，更新远平面的时间（或距离）和高度
          // 由于近平面的高度值 nearHeight 通常是正数（因为近平面被设置为稍高于地形表面），所以交点不可能位于近平面和中点之间
          // 因此，可以推断出交点必定位于当前步的中点到远平面之间的某个位置
          // 为了缩小搜索范围，算法将远平面的时间（或距离）farPlane 和高度值 farHeight 更新为中点的时间 tempDistance 和高度 tempHeight
          // 因为所有比此刻的 tempDistance 更大的值，求出来的 tempHeight 也是小于 0 的，所以要把 farPlane 的值，变小
          if(tempHeight < 0.0) {    
            farPlane = tempDistance; 
            farHeight = tempHeight;
          } else {
            nearPlane = tempDistance;
            nearHeight = tempHeight;
          }        
          if(abs(tempHeight) < EPSILON) break;
        }

        // 循环结束后，通过线性插值返回最终的交点距离这个插值是基于最终步的高度差与总高度差的比例来计算的
        return mix(nearPlane, farPlane, nearHeight / (nearHeight - farHeight));
      }




      vec3 getPixel(in vec2 uv, float time) {

        // ray 的内容---start
        // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
        // 这一行定义了一个三维向量 ang，表示欧拉角（Euler angles），用于描述光线方向的旋转
        vec3 angle = vec3(sin(1.25 * time) * 0.1, sin(time) * 0.2 + 0.3, time * 0.5);   

        // 表示从观察点（通常是相机位置）到屏幕上的某个像素点的方向向量这个向量用于光线追踪，确定光线从相机出发，穿过屏幕上的某个像素点，进入场景的方向
        // 通过归一化操作，将从相机位置到屏幕上的某个像素点的方向向量转换为一个单位向量
        // 这个方向向量用于光线追踪，确定光线在场景中的传播路径，确保计算结果的准确性和高效性
        vec3 direction = normalize(vec3(uv.xy, -2.0));
        // 这一行的作用是对光线的方向向量 dir 的 z 分量进行调整具体来说，通过增加一个与 uv 向量长度成比例的值来改变光线的倾斜角度这种调整可以模拟出从不同视角观察场景时，光线方向的变化，从而增强场景的立体感和深度感
        direction.z += length(uv) * 0.14;
        // 这一行的作用是将光线的方向向量 dir 进行归一化，保持方向一致性，并根据欧拉角 ang 对光线方向进行旋转
        direction = normalize(direction) * getRotationMatrixByEulerAngle(angle);

        // rayOrigin 表示光线的起源点，即射线的起点
        // 作用：
        // 1、光线追踪的起点：在光线追踪算法中，从 rayOrigin 这个点出发，沿着 direction（光线的方向向量）进行追踪，与场景中的物体（如海面）进行交点计算
        // 2、影响观察视角和场景动态：rayOrigin 的 z 坐标随时间变化，使得光线的起点在 z 轴方向上随时间移动，从而产生动态的观察效果，增加了场景的真实感和动态感同时，其 y 坐标值决定了观察视角的高度，影响观察者对场景的视野范围和细节感知
        vec3 rayOrigin = vec3(0.0, 3.5, 5.0); 
        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        // ray 的内容---end

        // tracing 的内容---start
        // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
        // 相交点
        vec3 intersectionPoint;
        // distanceFromStart2End 表示从起点到相交点的距离
        float distanceFromStart2End = heightMapTracing(rayOrigin, direction, intersectionPoint);
        vec3 distanceVector = intersectionPoint - rayOrigin; // 计算相交点与起点的距离
        vec3 n = getNormal(intersectionPoint, dot(distanceVector, distanceVector) * EPSILON_NRM);
        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        // tracing 的内容---end


        // light
        // light 表示光源的方向
        // normalize(vec3(0.0, 1.0, 0.8)) 得到的结果是一个单位向量，大约为 vec3(0.0, 0.7810, 0.6248)
        // 这个向量的方向与原始向量相同，但长度为 1，常用于表示方向，特别是在光照计算中作为光源方向向量
        // 作用：
        // 1、光照计算的依据：在光照模型中，light 用于计算光线与物体表面的交互效果，如漫反射和镜面反射等它指定了光源相对于场景中物体的方向，从而影响物体表面的明暗、颜色和高光等视觉效果
        // 2、影响场景的光照效果：通过与物体表面的法线向量等进行点乘等运算，计算出不同光照成分（如漫反射光、镜面反射光等）的强度，进而影响最终渲染出的图像的光影效果，使场景具有立体感和真实感
        vec3 light = normalize(vec3(0.0, 1.0, 0.8)); 

        return mix(
              getSkyColor(direction),
              getSeaColor(intersectionPoint, n, light, direction, distanceVector),
              pow(smoothstep(0.0, -0.02, direction.y), 0.2));
      }



      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = (fragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        uv *= 3.0;


        float time = u_time * 0.3 + u_mouse.x * 0.01;
        vec3 color = getPixel(uv, time);

        gl_FragColor = vec4(pow(color, vec3(0.65)), 1.0);
      }`)
  })
}

</script>
