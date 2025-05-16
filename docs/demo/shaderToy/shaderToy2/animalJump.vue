<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div>getObjectY要使用fract是为了和heightWave的时间一致</div>
    <div style="opacity: 0;">https://juejin.cn/post/7393533296242114598</div>
    <canvas v-if="isRunning" id="animalJump" class="stage"></canvas>
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
  // isRunning.value = true
  // await nextTick()
  // onStart()
})

const onStart = () => {
  import('glslCanvas').then(module => {
    const canvas = document.getElementById('animalJump')
    const glslCanvas: any = new module.default(canvas)

    glslCanvas.load(`
      #extension GL_OES_standard_derivatives: enable
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      const float MAX_DIST = 1000.0;
      const float JUMP_SPEED = 4.0;
      const float MOVE_SPEED = 0.0;
      const float PI = 3.1415926;
      const float IS_LESS_THAN_GROUND_Y = 0.1;

      
      // 物体跳动时候的y值
      float getObjectY() {
        float t = fract(u_time);
        return sin(t * JUMP_SPEED);
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


      // 黑白网格
      vec3 groundGrid(vec3 p) {
        vec3 c1 = vec3(1.0);
        vec3 c2 = vec3(0.0);

        // 这段函数，远处的格子会变形
        // floor(p.x) 和 floor(p.z) 分别取 p.x 和 p.z 的整数部分
        // p.x + floor(p.z) 将 x 坐标和 z 坐标的整数部分相加
        // mod(..., 2.0) 取上述和对 2 的模，结果为 0 或 1
        float s = mod(floor(p.x + floor(p.z)), 2.0);

        // 调整网格的大小，使其在远处更小
        // float scale = 1.0 + abs(p.z) * 0.1; // 根据 z 距离调整网格大小
        // float s = mod(floor(p.x / scale + floor(p.z / scale)), 2.0);

        // mix(c1, c2, s) 根据 s 的值在 c1 和 c2 之间进行插值
        // 当 s 为 0 时，返回 c1（白色）
        // 当 s 为 1 时，返回 c2（黑色）
        vec3 groundColor = mix(c1, c2, s);

        return groundColor;
      }


      // 计算一个点 p 到一个无限大水平平面（地面）的距离
      // 这个平面通常被定义为 y=0 的平面，即地面位于 y 轴的零点
      float getGroundDist(vec3 p) {
        float groundY = p.y;

        return groundY;
      }


      // 计算一个点 p 到一个球体的距离
      // 球体的中心由 sphere 表示，半径由 radius 表示
      float getSphereDist(vec3 p) {
        float y = sin(u_time * JUMP_SPEED) + 2.0;
        float z = 0.0 - u_time * MOVE_SPEED;
        vec3 spherePos = vec3(0.0, y , z);
        float radius = 1.0;

        // 从当前点的位置 p 到球体中心的距离中减去球体的半径，得到点 p 到球体表面的最短距离
        // 如果点 p 在球体内部，sphereDist 为负值
        // 如果点 p 在球体表面，sphereDist 为零
        // 如果点 p 在球体外部，sphereDist 为正值
        float sphereDist = length(p - spherePos) - radius;

        return sphereDist;
      }


      // 计算一个点 p 到一个立方体的（最近的）距离，要考虑 p 在内部和外部的情况，二者都要计算得出结果，外部返回正值，内部返回负值
      // 假设立方体的半尺寸为 cubeSize = vec3(1.0, 1.0, 1.0)，表示立方体在 x、y、z 轴上的半长度都为 1.0，立方体的中心位于原点 (0, 0, 0)
      // 如果点 p = vec3(1.5, 1.5, 1.5)，则 p 在立方体外部
      // 如果点 p = vec3(0.5, 0.5, 0.5)，则 p 在立方体内部
      // 如果点 p = vec3(1.0, 1.0, 1.0)，则 p 在立方体边界上
      // 通过 getCubeDist 函数，可以计算出点 p 到立方体的最短距离
      float getCubeDist(vec3 p) {
        float size = 0.8;
        float y = getObjectY() + 1.0 + size;
        float z = 0.0 - u_time * MOVE_SPEED;
        vec3 cubePos = vec3(0.0, y, z);

        // 改变高度，0.8->0.5->0.8......
        float h = 0.5 + 0.3 * step(0.8, y);

        vec3 cubeSize = vec3(size, size, size);

        // 旋转矩阵，围绕 y 轴旋转
        // 将 u_time 映射到 -30 到 30 度
        float angle = sin(u_time * JUMP_SPEED / 2.0) * 30.0;
        angle = radians(angle); // 将角度转换为弧度
        // x            y      z    
        mat3 rotationMatrix = mat3(
          cos(angle),  0.0,   sin(angle),
          0.0,         1.0,   0.0,
          -sin(angle), 0.0,   cos(angle)
        );

        // 应用旋转
        vec3 rotatedP = rotationMatrix * (p - cubePos) + cubePos;

        // 应用旋转
        vec3 tempDist = abs(rotatedP - cubePos) - cubeSize;

        // abs(p - cubePos) - cubeSize 计算点 p 相对于立方体中心 cubePos 的距离
        // 首先计算点 p 与立方体中心 c 之间的差值 p − cubePos
        // 然后取绝对值 abs(p − cubePos)，表示点 p 相对于立方体中心的水平、垂直和深度方向的距离
        // 最后减去立方体的半尺寸 cubeSize，得到 tempDist
        // tempDist 的每个分量表示点在对应方向上超出立方体边界的距离
        // 点在立方体内部，所有值是负值
        // 点在立方体边界，至少一个是 0
        // 点在立方体外，至少一个是正值
        // vec3 tempDist = abs(p - cubePos) - cubeSize;


        // max(tempDist, 0.0) 将 tempDist 的所有负分量设置为 0，只保留正分量，表示点到立方体外部的距离（假如其中有一个是负值，则 p 是在立方体内）
        // length(max(tempDist, 0.0)) 计算这个向量的长度，即点到立方体外部的最短距离
        // -----------------------------------------------------------------------
        // min(max(tempDist.x, max(tempDist.y, tempDist.z)), 0.0) 这部分的作用是处理点在立方体内部的情况
        // max(tempDist.x, max(tempDist.y, tempDist.z)) 找出 tempDist 中最大的分量，表示点在立方体内部最深的轴向距离
        // min(..., 0.0) 确保这个值不会超过 0，因为点在立方体内部时，tempDist 的所有分量都是负值
        // min(max(tempDist.x, tempDist.y, tempDist.z), 0.0) 将这个最大值与 0 比较，取较小值，表示点距离立方体在某个轴上最近的面的距离为（x）个单位
        // -----------------------------------------------------------------------
        // 最后合并距离，将点到立方体外部的距离和点到立方体内部的距离相加，得到点到立方体的最短距离
        // -----------------------------------------------------------------------
        // 假如点在外部，则会使用 length(max(tempDist, 0.0))
        // 假如点在内部，则会使用 min(max(tempDist.x, max(tempDist.y, tempDist.z)), 0.0)
        float cubeDist = length(max(tempDist, 0.0)) + min(max(tempDist.x, max(tempDist.y, tempDist.z)), 0.0);
        return cubeDist;
      }


      // 扩散波，控制产生扩散波的周期
      float heightWave(vec3 pos) {
        float groundWave = 0.0;

        float time = fract(u_time + 0.1);
        float len = length(pos.xz);
        float tt = time * 15.0 - PI * 2.0 - len * 3.0;
        groundWave = 0.1 * exp(-len * len) * sin(tt) * exp(-max(tt, 0.0) / 2.0) * smoothstep(0.0, 0.01, time);

        return groundWave;
      }


      // 取物体距离相机最近的 dist
      float getDist(vec3 pos) {
        float sphereDist = getSphereDist(pos);

        float cubeDist = getCubeDist(pos);
       
        float groundDist = getGroundDist(pos);

        // 扩散波
        float wave = heightWave(pos);
        groundDist = groundDist - wave;

        // return min(groundDist, min(cubeDist, sphereDist));
        return min(groundDist, cubeDist);
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
        vec3 grad_x = vec3((getDist(p + vec3(e, 0.0, 0.0)) - getDist(p - vec3(e, 0.0, 0.0))) / (2.0 * e), 0.0, 0.0);
        
        // vec3(0.0, ..., 0.0)：构造一个三维向量，只有 y 分量有效
        // 通过对点 p 在 y 方向上加上和减去 e，然后计算距离差，这个差值反映了距离场在 y 方向上的变化率，可以得到 y 方向上的梯度
        // 结果是一个三维向量，但只有 y 分量是非零的，表示梯度在 y 方向上的分量
        vec3 grad_y = vec3(0.0, (getDist(p + vec3(0.0, e, 0.0)) - getDist(p - vec3(0.0, e, 0.0))) / (2.0 * e), 0.0);
      
        // vec3(0.0, 0.0, ...)：构造一个三维向量，只有 z 分量有效
        // 通过对点 p 在 z 方向上加上和减去 e，然后计算距离差，这个差值反映了距离场在 z 方向上的变化率，可以得到 z 方向上的梯度
        // 结果是一个三维向量，但只有 z 分量是非零的，表示梯度在 z 方向上的分量
        vec3 grad_z = vec3(0.0, 0.0, (getDist(p + vec3(0.0, 0.0, e)) - getDist(p - vec3(0.0, 0.0, e))) / (2.0 * e));

        // 将三个方向上的梯度向量相加，得到该点的总梯度向量
        // 然后使用 normalize 函数将其标准化（即长度变为 1），得到法向量
        // 因为梯度向量指向函数值增长最快的方向，而对于表示表面的函数，其法向量与梯度向量方向相反（或相同，取决于表面函数的定义，但通常通过取梯度来近似法向量，并可能需要根据具体情况调整方向）
        // 标准化确保了返回的法向量是一个单位向量
        return normalize(grad_x + grad_y + grad_z);
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
      float rayMarching(vec3 rayOrigin, vec3 rayDirection) {
        // disTotal 是视线（或光线）从 rayOrigin 出发后行进的总距离
        float disTotal = 0.0;

        const float MAX_STEPS = 100.0;
        float SURFACE_DIST = 0.0001;
        
        for (float i = 0.0; i < MAX_STEPS; i += 1.0) {
          // 视线（或光线）的当前位置 pos
          // rayDirection * disTotal 计算视线（或光线）在方向 rayDirection 上行进距离 disTotal 后的向量，然后将这个向量加到源点 rayOrigin 上，得到新的位置 pos。
          vec3 pos = rayOrigin + disTotal * rayDirection;
          // dS 表示从当前视线（或光线）位置 p 到最近的场景物体表面的距离
          float dS = getDist(pos);
          disTotal += dS;
          // 如果从当前位置到球面的距离 dS 小于某个阈值 SURFACE_DIST，则可能表示视线（或光线）已经“击中”了表面，因此退出循环
          // 因为点 p 可能在物体内，float dS = getDist(pos) 中的 dS 会返回负值
          // 如果视线（或光线）行进的距离 disTotal 大于某个最大距离 MAX_DIST，则退出循环，可能是因为视线（或光线）已经行进得太远而没有“击中”任何物体
          if (dS < SURFACE_DIST || disTotal > MAX_DIST) {
            break;
          }
        }
        return disTotal;
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
        float dis = rayMarching(p + 0.01 * n, l);
        if (dis < length(lightPos - p)) {
          // 存在遮挡则减弱光照
          dif *= SHADOW;
        }

        return dif;
      }
      

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;

        // 归一化 uv 的坐标范围到 [-1, 1]
        // [0, 1] -> [-0.5, 0.5]<* 0.5>
        vec2 uv = (fragCoord.xy - u_resolution.xy * 0.5) / min(u_resolution.y, u_resolution.x);

        // 这行会导致样式错乱
        // uv *= 5.0;

        vec3 color = vec3(0.0);

        float t = u_time * MOVE_SPEED;

        vec3 lightPos = vec3(3.0, 8.0, -5.0 - t);

        // 相机信息
        vec3 cameraPos = vec3(0.0, 3.0, -8.0 - t);
        vec3 cameraUp = vec3(0.0, 1.0, 0.0);
        vec3 cameraTarget = vec3(0.0, 0.0, 0.0 - t);

        // rayDirection 是视线（或光线）的方向向量，表示视线（或光线）沿着哪个方向行进
        // 之所以 * vec3(uv, 1.0)，uv.x 表示水平方向的偏移，uv.y 表示垂直方向的偏移，1.0 表示沿着相机的前进方向（即深度方向）的偏移
        // 1.0 表示沿着相机的前进方向（即深度方向）的偏移
        // vec3(uv, 1.0) 将二维的 uv 坐标扩展为一个三维向量，其中 z 分量为 1.0
        vec3 rayDirection = getCameraMat(cameraPos, cameraTarget, cameraUp) * vec3(uv, 1.0);

        // 视线（或光线）步进行进了多少距离
        float rayDist = rayMarching(cameraPos, rayDirection);

        // 视线（或光线）的当前位置 p（从相机发出一条射线，一直延伸到接触了物体表面，这之间的距离）
        // rayDirection * rayDist 计算视线（或光线在方向 rayDirection 上行进距离 rayDist 后的向量，然后将这个向量加到源点 cameraTarget 上，得到新的位置 p。
        vec3 pointOfCameraTouchObject = cameraPos + rayDirection * rayDist;

        float lightDif = getLightDif(lightPos, pointOfCameraTouchObject);

        // 天空颜色
        vec3 skyColor = getSkyColor(rayDirection);

        // 除天空外的颜色
        vec3 exceptSkyColor = vec3(0.0);
        if (pointOfCameraTouchObject.y < IS_LESS_THAN_GROUND_Y) { // 如果在地面上，返回地面的黑白格子光照
          exceptSkyColor = groundGrid(pointOfCameraTouchObject) * lightDif;
        } else { // 如果不在地面上，返回普通的漫反射光照
          exceptSkyColor = vec3(lightDif);
        }


        if (rayDist < MAX_DIST) { // 击中物体，直接使用物体颜色
          color = exceptSkyColor;
        } else { // 未击中物体，混合天空颜色
          float mixFactor = pow(smoothstep(0.0, -0.02, rayDirection.y), 0.1);
          color = mix(skyColor, exceptSkyColor, mixFactor);
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `)
  })
}
</script>