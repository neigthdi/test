<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div class="color-red">注意：这里雨点滴下来中的“减法”，和fire2中的 “float finalFbm = fbm(vec2(uv.x, uv.y - u_time * 1.2) * 1.74588 + vec2(0.2155, 0.5654));” 的“减法”的区别。</div>
    <canvas v-if="isRunning" id="rain" class="shader-toy-stage bg-black"></canvas>
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
    const canvas = document.getElementById('rain')
    const glslCanvas: any = new module.default(canvas)

    glslCanvas.load(`
      #extension GL_OES_standard_derivatives: enable
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      #define WATER_PLANE 0;
      #define PI 3.1415926

      const float MAX_DIST = 1000.0;
      const float rainNum = 20.0;

      float random1d(float dt) {
        float c = 43758.5453;
        float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }

      // pos与屏幕的分辨率相关
      vec2 randomRainPos(float val, vec2 u_resolution, vec2 velocity) {
        // 计算雨滴在水平方向上可能的最大偏移量 maxX
        // velocity.x 是雨滴水平方向上的速度分量
        // abs(u_resolution.y / velocity.y) 计算的是雨滴从屏幕顶部下落到屏幕底部的过程中，水平方向上可能移动的最大距离的比例因子
        // maxX 表示雨滴在水平方向上可能的最大偏移量，这个偏移量取决于雨滴的速度和屏幕的高度
        float maxX = velocity.x * abs(u_resolution.y / velocity.y);

        // 计算雨滴的水平位置 x
        // step(0.0, maxX) 是一个阶跃函数，当 maxX 大于 0.0 时返回 1.0，否则返回 0.0。这里的作用是确保 maxX 是一个正数
        // -maxX * step(0.0, maxX) 用于确定雨滴水平位置的最小值，即 -maxX
        // u_resolution.x + abs(maxX) 是雨滴水平位置的最大值，即屏幕宽度加上雨滴可能的最大水平偏移量
        // random1d(val) 是一个随机数生成函数，根据输入的种子值 val 生成一个 [0, 1) 范围内的随机数
        // x 的值是通过将随机数缩放到 [-maxX, u_resolution.x + abs(maxX)] 的范围内得到的，这样可以确保雨滴的水平位置是随机的，并且在屏幕范围内
        float x = -maxX * step(0.0, maxX) + (u_resolution.x + abs(maxX)) * random1d(val);

        // 计算雨滴的垂直位置 y
        // random1d(1.234 * val) 是一个随机数生成函数，根据输入的种子值 1.234 * val 生成一个 [0, 1) 范围内的随机数
        // 0.05 * random1d(1.234 * val) 将随机数缩放到 [0, 0.05) 的范围内
        // 1.0 + 0.05 * random1d(1.234 * val) 将随机数偏移 1.0，得到一个 [1.0, 1.05) 范围内的随机数
        // y 的值是通过将这个随机数乘以屏幕高度 u_resolution.y 得到的，这样可以确保雨滴的垂直位置在屏幕高度的 [u_resolution.y, 1.05 * u_resolution.y] 范围内
        // 这意味着雨滴的起始位置会略高于屏幕顶部，这样可以避免雨滴从屏幕边缘出现时看起来不自然
        float y = (1.0 + 0.05 * random1d(1.234 * val)) * u_resolution.y;

        return vec2(x, y);
      }

      // rainSize
      // rainLen
      // currentPos：当前的屏幕像素，经过 elapsedTime 秒后，所在的位置
      // fragCoord：当前的屏幕像素
      // velocityDir：雨滴运动方向的单位向量
      vec3 drawRain(float rainSize, float rainLen, vec2 currentPos, vec2 fragCoord, vec2 velocityDir) {
        // 这两行的计算原理如下：
        // 1、gpu的并行计算的，所以是 fragCoord 中所有的xy都需要计算得出 currentPosToFragCoordDir ，从而计算当前的 projectedDist
        // 2、通过计算 currentPosToFragCoordDir 在 -velocityDir 的投影长度，得到 >0 和 <= 0 两个结果
        // 如果是 >0 ，即夹角小于90°，则表明了当前的像素在雨滴后方（轨迹线区域），此时雨滴已经经过了
        // 如果是 <=0 ，即夹角小于等于90°，则表明了当前的像素在雨滴前方或与雨滴位置重合（不显示轨迹线），此时雨滴还没有进入
        // 投影的长度，值越大，像素距离雨滴越远，轨迹线透明度越高（可以通过 smoothstep 实现淡出效果）
        // ------------------------------------------------------------------------------------------------------------------
        // |         这条虚线是 velocityDir ，方向是斜向右下
        // |         \       · 像素A的 fragCoord.xy           计算 A 的投影长度，首先 velocityDir 反方向，得到斜向左上
        // |          \                                                        然后 fragCoord - currentPos 得到从 pos 指向 A 的向量
        // |           \                                                       最后计算dot，此时可以看到 结果 >0 ，因为夹角是小于90°
        // |            * 这个是当前的 pos.xy
        // |             \       · 像素B的 fragCoord.xy       计算 B 的投影长度，首先 velocityDir 反方向，得到斜向左上   
        // |              \                                                    然后 fragCoord - currentPos 得到从 pos 指向 B 的向量
        // |               \                                                   最后计算dot，此时可以看到 结果 <0 ，因为夹角是大于90°
        // |____________________________
        // ------------------------------------------------------------------------------------------------------------------
        // 计算当前像素位置与雨滴位置之间的向量差。这个向量表示从雨滴位置指向当前像素的方向
        vec2 currentPosToFragCoordDir = fragCoord - currentPos;
        // 计算当前像素在雨滴运动方向上的投影距离
        // dot 函数计算两个向量的点积，结果是一个标量，表示当前像素在雨滴运动方向上的投影长度。
        // -velocityDir 是雨滴运动方向的反方向，因为雨滴是从上方落下，所需要的投影方向是从雨滴位置指向像素位置
        float projectedDist = dot(currentPosToFragCoordDir, -velocityDir);

        // 通过上面两行，计算 fragCoord.xy 在雨滴后方，还是前方
        // 接下来，开始计算切向距离的平方（tanjential distance squared）
        // 切向距离的平方，是描述一个点到一条直线的垂直距离的平方
        // 为什么要计算切向距离的平方？1、判断点是否在轨迹宽度内；2、用于生成虚线效果；3、用于生成渐变效果
        // 计算步骤：
        // 1、计算从点 pos 到点 fragCoord 的向量 currentPosToFragCoordDir（currentPosToFragCoordDir = fragCoord - currentPos）
        // 2、计算 currentPosToFragCoordDir 在 velocity_dir 方向上的投影距离 projectedDist（dot(currentPosToFragCoordDir, -velocityDir)）
        // 3、计算 currentPosToFragCoordDir 的模的平方（dot(currentPosToFragCoordDir, currentPosToFragCoordDir)）
        // 4、利用勾股定理，计算切向距离的平方
        float tanjentialDistanceSquared = dot(currentPosToFragCoordDir, currentPosToFragCoordDir) - pow(projectedDist, 2.0);

        // 由于是平方，所以size也要平方
        float sizeSquared = pow(rainSize, 2.0);

        // 两个计算步骤
        // 使用 step 和 smoothstep 函数来确定点 fragCoord.xy 是否在直线的 size 范围内
        // -----------------------------------------------------------------------------
        // 1、
        // 当 projectedDist < 0.0，返回0，否则返回1
        // 作用：判断点是否在轨迹的投影方向上
        // -----------------------------------------------------------------------------
        // 2、
        // 由于 edge0 < edge1，当 tanjentialDistanceSquared < sizeSquared / 2.0，返回0；当 tanjentialDistanceSquared > sizeSquared，返回1
        // 作用：生成一个从轨迹中心向外逐渐衰减的效果
        // 如果 tanjentialDistanceSquared 接近轨迹中心（即较小的值）， smoothstep 返回接近 0 的值
        // 如果 tanjentialDistanceSquared 接近轨迹的边缘（即较大的值）， smoothstep 返回接近 1 的值
        // 使用 1.0 - smoothstep(...) 的原因是为了反转 smoothstep 的效果
        float line = step(0.0, projectedDist) * (1.0 - smoothstep(sizeSquared / 2.0, sizeSquared, tanjentialDistanceSquared));

        // 计算原理是通过结合直线的宽度范围和周期性的余弦函数来创建一个虚线效果
        // cos(0.3 * projectedDist - PI / 3.0)：计算一个周期性的余弦函数，其周期由 0.3 决定，相位由 -PI / 3.0 决定
        // 这个余弦函数的值在 -1 到 1 之间变化
        // step(0.5, cos(0.3 * projectedDist - PI / 3.0))：使用 step 函数将余弦函数的值转换为二值
        // 当余弦函数的值大于 0.5 时为 1，否则为 0。这创建了一个虚线的模式，其中 1 表示虚线的实线部分，0 表示虚线的空隙部分
        // <<< 可以使用sin，不使用cos >>>
        // 将 line 与虚线模式相乘，得到最终的虚线效果
        // 只有当点 fragCoord.xy 在直线的 size 范围内且在虚线的实线部分时， dashedLine 才为 1，否则为 0
        float dashedLine = line * step(0.5, cos(0.3 * projectedDist - PI / 3.0));

        // 目的是为虚线添加一个渐隐效果，使其在远离起点 pos 的方向上逐渐变淡
        // projectedDist：这是点 fragCoord.xy 在 -velocityDir 方向上（即沿着虚线的方向）的投影距离
        // rainLen / 5.0 和 rainLen：这两个值定义了一个渐变范围。rainLen / 5.0 是渐变的起始点，rainLen 是渐变的结束点。
        // smoothstep 函数：是一个平滑的阶梯函数，用于在两个值之间进行平滑过渡。其定义如下：
        // 因此，smoothstep(rainLen / 5.0, rainLen, projected_dist) 的作用是：
        // 当点 fragCoord.xy 靠近起点 pos（即 projected_dist 小于 rainLen / 5.0）时，返回接近 0 的值
        // 当点 fragCoord.xy 远离起点 pos（即 projected_dist 大于 rainLen）时，返回接近 1 的值
        // 在中间区域，返回一个平滑过渡的值
        float fadingDashedLine = dashedLine * (1.0 - smoothstep(rainLen / 5.0, rainLen, projectedDist));

        return vec3(fadingDashedLine);
      }

      vec3 drawDiffusionWave(vec2 endPos, vec2 fragCoord, float time) {
        // waveSize 扩散波由小变大得更加明显
        float waveSize = 10.0;
        float innerRadius = (0.05 + 0.8 * time) * waveSize;
        float outerRadius = innerRadius + 0.25;


        // 这两行这样计算的原因
        // 在上面设置了内圈和外圈，那么接下来就需要知道整个屏幕中所有 fragCoord.xy 和 endPos 的距离
        // 只有符合的距离（即下面的 ring 的计算），才能渲染到屏幕中
        // ------------------------------------------------------------------------------------------------------------------
        // |         这条虚线是 velocityDir ，方向是斜向右下
        // |         \  
        // |          \  · 像素A的 fragCoord.xy 
        // |           \  
        // |            \    · 像素B的 fragCoord.xy 
        // |             \      
        // |              \    · 像素C的 fragCoord.xy 
        // |               \    
        // |                * 这个是结束的 pos.xy
        // |           ( (------)·)像素D的 fragCoord.xy     此时只有像素D符合 ring 的计算范围内
        // |         这里是 wave 有内圈和外圈
        // |____________________________
        // ------------------------------------------------------------------------------------------------------------------
        vec2 endPosToFragCoordDir = fragCoord - endPos;
        // 进行 * vec2(1.0, 3.0) 操作，是为了把Y轴给压扁
        // 比如期望得到的结果是1.0，此时y的值只需要是0.5即可
        float distortedDist = length(endPosToFragCoordDir * vec2(1.0, 3.0));

        // 假设 innerRadius 是0.5，那么 outerRadius 是0.75
        // smoothstep(0.5, 0.5 + 5.0, distortedDist) 小于0.5的位置都0.0（消失），0.5 ~ 5.5之间的渐变，大于5.5的位置都是1.0
        // smoothstep(0.75, 0.75 + 5.0, distortedDist) 小于0.75的位置都0.0（消失），0.75 ~ 5.75之间的渐变，大于5.75的位置都是1.0
        // 有个 1-，所以大于5.75的位置都是0.0（消失），小于0.75的位置都是1.0
        // 两个相乘，0 ~ 0.5，是0.0；0.5 ~ 0.75是渐变A，0.75 ~ 5.5是渐变B，5.0 ~ 5.75是渐变C，大于5.75是0.0
        float ring = smoothstep(innerRadius, innerRadius + 5.0, distortedDist) * (1.0 - smoothstep(outerRadius, outerRadius + 5.0, distortedDist));

        // elapsedTime - fallTime 是正数或者0，所以smoothstep的范围是 0 ~ 1
        // 1- 的作用就是让 ring 逐渐消失
        float fadingRing = ring * (1.0 - smoothstep(0.0, 0.7, time));

        return vec3(fadingRing);
      }

      vec3 getWaterPlaneColor(vec3 p) {
        vec3 color = vec3(0.0, 0.0, 0.0);

        return color;
      }

      // 计算一个点 p 到一个无限大水平平面（地面）的距离
      // 这个平面通常被定义为 y=0 的平面，即地面位于 y 轴的零点
      float getWaterPlaneDist(vec3 p) {
        float planeY = p.y;

        // 添加一个小的偏移量防止除零
        float epsilon = 0.0001;

        // 使用更稳定的水面距离计算
        return p.y + epsilon;  // 保持简单但稳定的计算
      }


      // 取物体距离相机最近的 dist
      vec2 getDist(vec3 pos) {
        float waterPlaneDist = getWaterPlaneDist(pos);

        // 使用数组和循环找到最小距离
        float distances[1];
        distances[0] = waterPlaneDist;

        // 使用数组和循环找到对应的物体类型
        int objectTypes[1];
        objectTypes[0] = WATER_PLANE;

        float minDist = distances[0];
        int objectType = objectTypes[0];

        return vec2(minDist, float(objectType));
      }

      // 在基于距离场（Distance Field）的渲染中，法线（Normal）的计算是一个关键步骤
      // 距离场是一种标量场，其中每个点的值表示该点到最近表面的距离
      // 由于距离场本身是一个标量函数，而法线是一个向量，因此需要通过某种方式从标量场中提取出向量信息
      // 有限差分法（Finite Difference Method）是一种自然且有效的方法，用于从标量场中近似计算梯度，进而得到法线
      // 对于 x 方向
      // grad_x ≈ [f(p + eps_x) - f(p - eps_x)] / (2 * eps) * ex
      // 具体查看（自定义效果 - 两个物体的合并 -1.png）、（自定义效果 - 两个物体的合并 -2.png）、（自定义效果 - 两个物体的合并 -3.png）
      vec3 getNormal(vec3 p) {
        float e = 0.001;

        // vec3(..., 0.0, 0.0)：构造一个三维向量，只有 x 分量有效
        // 通过对点 p 在 x 方向上加上和减去 e，然后计算距离差，这个差值反映了距离场在 x 方向上的变化率，可以得到 x 方向上的梯度
        // 结果是一个三维向量，但只有 x 分量是非零的，表示梯度在 x 方向上的分量
        float x1 = getDist(p + vec3(e, 0.0, 0.0)).x;
        float x2 = getDist(p - vec3(e, 0.0, 0.0)).x;
        vec3 grad_x = vec3((x1 - x2) / (2.0 * e), 0.0, 0.0);
        
        // vec3(0.0, ..., 0.0)：构造一个三维向量，只有 y 分量有效
        // 通过对点 p 在 y 方向上加上和减去 e，然后计算距离差，这个差值反映了距离场在 y 方向上的变化率，可以得到 y 方向上的梯度
        // 结果是一个三维向量，但只有 y 分量是非零的，表示梯度在 y 方向上的分量
        float y1 = getDist(p + vec3(0.0, e, 0.0)).x;
        float y2 = getDist(p - vec3(0.0, e, 0.0)).x;
        vec3 grad_y = vec3(0.0, (y1 - y2) / (2.0 * e), 0.0);
      
        // vec3(0.0, 0.0, ...)：构造一个三维向量，只有 z 分量有效
        // 通过对点 p 在 z 方向上加上和减去 e，然后计算距离差，这个差值反映了距离场在 z 方向上的变化率，可以得到 z 方向上的梯度
        // 结果是一个三维向量，但只有 z 分量是非零的，表示梯度在 z 方向上的分量
        float z1 = getDist(p + vec3(0.0, 0.0, e)).x;
        float z2 = getDist(p - vec3(0.0, 0.0, e)).x;
        vec3 grad_z = vec3(0.0, 0.0, (z1 - z2) / (2.0 * e));

        // 将三个方向上的梯度向量相加，得到该点的总梯度向量
        // 然后使用 normalize 函数将其标准化（即长度变为 1），得到法向量
        // 因为梯度向量指向函数值增长最快的方向，而对于表示表面的函数，其法向量与梯度向量方向相反（或相同，取决于表面函数的定义，但通常通过取梯度来近似法向量，并可能需要根据具体情况调整方向）
        // 标准化确保了返回的法向量是一个单位向量
        // return normalize(grad_x + grad_y + grad_z);

        vec3 normal = normalize(grad_x + grad_y + grad_z);

        return normal;
      }

      // 左手坐标系
      // ro：相机的位置（Ray Origin），即相机在三维空间中的坐标。这个点是所有视线（或光线）的起点
      // target：相机的目标点，即相机“看”向的点。这个点决定了相机的前进方向（Forward 向量）
      // up：相机的向上方向（Up 向量），通常与相机的前进方向垂直，这个向量用于确定相机的右侧方向（Right 向量）和确保相机的坐标系是正交的
      // 相机源点、目标、向上方向
      // R、U、F 分别是 Right、Up 和 Forward 向量
      mat3 getCameraMat(vec3 ro, vec3 target, vec3 up) {
        vec3 f = normalize(target - ro); // 计算 Forward 向量（F）

        // 叉积 cross(a, b) 的结果是一个垂直于向量 a 和 b 的向量
        // 注意：由于使用的是左手坐标系，所以是使用 up 叉乘 f，而不是反过来进行叉乘，进行叉乘运算时一定要注意其方向性！
        vec3 r = cross(up, f); // Right 向量（R）是 Forward 向量和 Up 向量的叉积，表示相机的右侧方向

        vec3 u = normalize(cross(f, r)); // 为了确保 Up 向量垂直于 Forward 向量，需要重新计算 Up 向量为 Right 向量和 Forward 向量的叉积

        return mat3(r, u, f);
      }

      // rayOrigin 代表视线（或光线）的起点
      // rayDirection 代表视线（或光线）的方向
      vec2 rayMarching(vec3 rayOrigin, vec3 rayDirection) {
        // disTotal 是视线（或光线）从 rayOrigin 出发后行进的总距离
        float disTotal = 0.0;

        const float MAX_STEPS = 100.0;
        float SURFACE_DIST = 0.0001;

        float objectType = -1.0;
        
        for (float i = 0.0; i < MAX_STEPS; i += 1.0) {
          // 视线（或光线）的当前位置 pos
          // rayDirection * disTotal 计算视线（或光线）在方向 rayDirection 上行进距离 disTotal 后的向量，然后将这个向量加到源点 rayOrigin 上，得到新的位置 pos。
          vec3 pos = rayOrigin + disTotal * rayDirection;

          // dS 表示从当前视线（或光线）位置 p 到最近的场景物体表面的距离
          float dS = getDist(pos).x;
          disTotal += dS;

          // 射中的物体类型
          objectType = getDist(pos).y;

          // 如果从当前位置到球面的距离 dS 小于某个阈值 SURFACE_DIST，则可能表示视线（或光线）已经“击中”了表面，因此退出循环
          // 因为点 p 可能在物体内，float dS = getDist(pos).x 中的 dS 会返回负值
          // 如果视线（或光线）行进的距离 disTotal 大于某个最大距离 MAX_DIST，则退出循环，可能是因为视线（或光线）已经行进得太远而没有“击中”任何物体
          if (dS < SURFACE_DIST || disTotal > MAX_DIST) {
            break;
          }
        }

        // 返回是否命中的标志，未命中的，则是天空色
        bool hit = disTotal < MAX_DIST;

        return vec2(disTotal, hit ? objectType : -1.0);
      }

       // 计算一个 3D 点 p 与光源之间的漫反射光照强度
      float getLightDif(vec3 lightPos, vec3 p) {
        float SHADOW = 0.1;

        // 计算从点 p 到光源的方向，方向的箭头指向 lightPos
        // 首先计算从点 p 到光源 lightPos 的向量
        // 然后，使用 normalize 函数将这个向量标准化（或归一化），使其长度为 1
        // 标准化后的向量 l 表示，从点 p 指向光源的方向
        vec3 l = normalize(lightPos - p);

        vec3 n = getNormal(p);

        // 计算漫反射光照强度
        // 使用点积（dot 函数）来计算法线向量 n 和光源方向向量 l 之间的角度的余弦值
        // 这个余弦值表示了光源方向和表面法线之间的“对齐”程度，从而决定了光照的强度
        // 由于余弦值可能是负的（当光源在表面的背面时），使用 max 函数确保结果始终是非负的
        // 因此，dif 变量存储了漫反射光照的强度
        float dif = max(dot(n, l), 0.0);

        // 如果不需要阴影
        // return dif;

        // 阴影检测（偏移起点防止自相交）
        float dis = rayMarching(p + 0.01 * n, l).x;
        if (dis < length(lightPos - p)) {
          // 存在遮挡则减弱光照
          dif *= SHADOW;
        }

        return dif;
      }

      // 根据给定的方向向量 eye 计算天空的颜色这个函数模拟了天空的渐变效果，从地平线到天顶的颜色变化
      vec3 getSkyColor(vec3 eye) {
        // 方案1   -------------------------------------------------------------------
        // max(e.y, 0.0)：确保 e.y 的值不小于 0，因为天空的颜色通常在地平线以上
        // max(e.y, 0.0) * 0.8：将 e.y 的值乘以 0.8，使颜色变化更加平缓
        // max(e.y, 0.0) * 0.8 + 0.2：在乘以 0.8 的基础上加上 0.2，确保地平线处的颜色不会太暗
        // (max(e.y, 0.0) * 0.8 + 0.2) * 0.8：再次乘以 0.8，进一步调整颜色的亮度
        eye.y = (max(eye.y, 0.0) * 0.8 + 0.2) * 0.8;

        // pow(1.0 - eye.y, 2.0)：计算 1.0 - eye.y 的平方，用于模拟天空颜色的非线性变化这个值将用于红色分量，使天空在地平线处更红
        // 1.0 - eye.y：直接使用 1.0 - eye.y 作为绿色分量，使天空在地平线处更绿
        // 0.6 + (1.0 - eye.y) * 0.4：计算蓝色分量，使天空在地平线处更蓝 0.6 是基础蓝色，(1.0 - eye.y) * 0.4 根据 eye.y 的值增加蓝色
        // vec3(pow(1.0 - eye.y, 2.0), 1.0 - eye.y, 0.6 + (1.0 - eye.y) * 0.4)：将计算得到的红、绿、蓝分量组合成一个颜色向量
        // vec3(pow(1.0 - eye.y, 2.0), 1.0 - eye.y, 0.6 + (1.0 - eye.y) * 0.4) * 1.1：将颜色向量乘以 1.1，增加颜色的亮度
        return vec3(pow(1.0 - eye.y, 2.0), 1.0 - eye.y, 0.6 + (1.0 - eye.y) * 0.4) * 1.1;

        // 方案2   -------------------------------------------------------------------
        // // 归一化 eye.y 到 [0, 1] 范围
        // eye.y = (eye.y + 1.0) * 0.5;

        // // 使用更平滑的渐变公式
        // float t = clamp(eye.y * 0.5 + 0.5, 0.0, 1.0);
        // vec3 skyTop = vec3(0.2, 0.5, 1.0);    // 天顶颜色（亮蓝色）
        // vec3 skyHorizon = vec3(0.8, 0.8, 0.9); // 地平线颜色（亮白色）

        // // 使用平滑过渡
        // return mix(skyHorizon, skyTop, pow(t, 0.5));
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;


        // 归一化 uv 的坐标范围到 [-1, 1]
        // [0, 1] -> [-0.5, 0.5]<* 0.5>
        vec2 uv = (fragCoord.xy - u_resolution.xy * 0.5) / min(u_resolution.y, u_resolution.x);


        vec3 finalColor = vec3(0.0);


        // 相机信息
        vec3 cameraPos = vec3(0.0, 2.0, -8.0);
        vec3 cameraUp = vec3(0.0, 1.0, 0.0);
        vec3 cameraTarget = vec3(0.0, 0.0, 0.0);


        // 光源的位置
        vec3 lightPos = vec3(3.0 + sin(u_time), 8.0, -5.0 + cos(u_time));
        vec3 lightColor = vec3(1.0, 1.0, 1.0);


        // rayDirection 是视线（或光线）的方向向量，表示视线（或光线）沿着哪个方向行进
        // 之所以 * vec3(uv, 1.0)，uv.x 表示水平方向的偏移，uv.y 表示垂直方向的偏移，1.0 表示沿着相机的前进方向（即深度方向）的偏移
        // 1.0 表示沿着相机的前进方向（即深度方向）的偏移
        // vec3(uv, 1.0) 将二维的 uv 坐标扩展为一个三维向量，其中 z 分量为 1.0
        vec3 rayDirection = getCameraMat(cameraPos, cameraTarget, cameraUp) * vec3(uv, 1.0);


        // 射中物体的结果
        vec2 rayResult = rayMarching(cameraPos, rayDirection);


        // 视线（或光线）步进行进了多少距离
        float rayDist = rayResult.x;


        // 射中的当前的物体
        float objectType = rayResult.y;


        // 视线（或光线）的当前位置 p（从相机发出一条射线，一直延伸到接触了物体表面，这之间的距离）
        // rayDirection * rayDist 计算视线（或光线在方向 rayDirection 上行进距离 rayDist 后的向量，然后将这个向量加到源点 cameraTarget 上，得到新的位置 p。
        vec3 pointOfCameraTouchObject = cameraPos + rayDirection * rayDist;


        // 点 p 与光源之间的漫反射光照强度
        float lightDif = getLightDif(lightPos, pointOfCameraTouchObject);


        vec3 waterPlaneColor = getWaterPlaneColor(pointOfCameraTouchObject);


        // 获取物体颜色
        vec3 objectColor = vec3(0.0);


        if(int(objectType) == -1) { // 如果没有碰到物体或者水面,使用天空颜色


          finalColor = getSkyColor(normalize(rayDirection)); // 直接使用天空色
        } else if(int(objectType) == 0) { // 碰撞到水面，对水面进行反射计算

          // 1、水面的法线
          // 水面法线的计算基于距离场的梯度，使用有限差分法近似计算
          // ∇f(p) ≈ (f(p + ϵ) - f(p - ϵ)) / 2ϵ  f(p) 是距离场函数，表示点 p 到最近表面的距离。ϵ 是一个小的偏移量，用于数值计算

          // 2、反射光线方向
          // 反射定律描述了光线在光滑表面上的反射行为，即入射角等于反射角
          // 公式是 reflectDir = rayDirection - 2 * (rayDirection ⋅ waterNormal) * waterNormal

          // 3、反射光线的追踪

          // 4、菲涅尔效应
          // 菲涅尔效应描述了光线在不同入射角下的反射强度变化
          // 公式是 R(θ)=R0 + (1 - R0) * (1 - cosθ)^5
          // R(θ) 是反射率
          // R0是法线方向上的反射率，通常为((n1 - n2) / (n1 + n2))^2，其中 n1和 n2分别是两种介质的折射率
          // θ 是入射角
          // 改案例简化了菲涅尔公式，使用了 (1 - cosθ)^2来近似反射率的变化，并通过 clamp 函数限制了反射强度的范围

          // 5、光照模型


          // 动态水面法线（这里可以添加波纹噪声计算）
          vec3 waterNormal = normalize(getNormal(pointOfCameraTouchObject));

          
          // 调整水面法线以创建波纹效果
          float waveHeight = 0.05; // 波纹高度
          float waveFreq = 1.0;   // 波纹频率
          waterNormal.y += sin(pointOfCameraTouchObject.x * waveFreq + u_time * 0.5) * waveHeight * 0.5;
          waterNormal.y += sin(pointOfCameraTouchObject.z * waveFreq * 0.5 + u_time * 0.5) * waveHeight * 0.5;
          waterNormal = normalize(waterNormal);
          

          // 反射光线方向
          vec3 reflectDir = reflect(rayDirection, waterNormal);


          // 反射光线的追踪
          vec2 reflectResult = rayMarching(pointOfCameraTouchObject + waterNormal * 0.01, reflectDir);
          

          // 反射点的颜色
          vec3 reflectColor = vec3(0.0);


          // 天空反射
          reflectColor = getSkyColor(normalize(reflectDir));
          

          // 水面基础颜色
          vec3 waterColor = getWaterPlaneColor(pointOfCameraTouchObject);


          // 菲涅尔效应（根据视角调整反射强度）
          float fresnel = pow(1.0 - abs(dot(rayDirection, waterNormal)), 2.0);
          fresnel = clamp(fresnel, 0.3, 0.9); // 限制反射强度范围
          

          // 混合反射颜色和水面颜色
          vec3 finalReflectColor = mix(waterColor, reflectColor, fresnel);
          

          // 添加环境光
          float ambient = 0.2;
          objectColor = finalReflectColor * (lightDif + ambient);


          finalColor = objectColor * lightColor * max(lightDif, 0.1); // 确保最小光照强度;
        } else { // 碰撞到物体


          // objectColor = getObjectColor(int(objectType));


          // 计算最终颜色（物体颜色 * 光照颜色 * 光照强度）
          // finalColor = objectColor * lightColor * lightDif;
        }



        float rainSize = 1.0;
        float rainLen = 70.0;
        float fallTime = 0.7; // 所有雨滴最多可以存在的时间，固定为0.7或者其他正数。
        float lifeTime = fallTime * 2.0;
        // 必须要乘以 u_resolution.y
        // 如果不乘以 u_resolution.y，雨滴的垂直速度将是一个固定的值（例如 -0.9），而与屏幕高度无关
        // 在高分辨率屏幕上（例如 1920x1080），雨滴的垂直速度会显得非常小，因为屏幕高度较大，雨滴需要很长时间才能从屏幕顶部移动到底部。这会导致雨滴看起来几乎不动，或者移动得非常缓慢，无法产生明显的下落效果
        // 在低分辨率屏幕上（例如 320x240），雨滴的垂直速度会显得过大，因为屏幕高度较小，雨滴会瞬间从屏幕顶部移动到底部，导致雨滴看起来像是瞬间消失，而不是自然地下落
        // 通过将速度与屏幕高度成比例（即乘以 u_resolution.y），可以确保雨滴在不同分辨率的屏幕上都能以类似的时间从顶部移动到底部
        // -0.5 * u_resolution.x ，表示雨滴在水平方向上的速度分量
        // -0.8 * u_resolution.y ，表示雨滴在垂直方向上的速度分量
        vec2 velocity = vec2(-0.5 * u_resolution.x, -0.8 * u_resolution.y) / fallTime;
        vec2 velocityDir = normalize(velocity);

        for(float i = 0.0; i < rainNum; i+= 1.0) {
          float time = u_time + lifeTime * (i + i / rainNum); // time需要逐渐增大
          float elapsedTime = mod(time, lifeTime); // 当前已过的时间，范围是 0 ~ fallTime

          float val = i + floor(time / lifeTime - i) * rainNum;
          vec2 pos = randomRainPos(val, u_resolution.xy, velocity);
          
          if(elapsedTime < fallTime) { // 如果还没到地面（消失）的时刻
            vec2 currentPos = pos + velocity * elapsedTime;
            finalColor += drawRain(rainSize, rainLen, currentPos, fragCoord, velocityDir);
          } else {
            vec2 endPos = pos + velocity * fallTime;
            finalColor += drawDiffusionWave(endPos, fragCoord, elapsedTime - fallTime);
          }
        }


        gl_FragColor = vec4(finalColor, 1.0);
      }
    `)
  })
}
</script>