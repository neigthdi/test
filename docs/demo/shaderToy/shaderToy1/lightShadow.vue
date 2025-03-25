
<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="lightShadow" class="stage"></canvas>
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
    const canvas = document.getElementById('lightShadow')
    const glslCanvas: any = new module.default(canvas)
 
    glslCanvas.load(`
      #extension GL_OES_standard_derivatives : enable
      precision highp float;

      uniform float u_time;
      uniform vec2 u_resolution;

      // minVec2 比较两个 vec2 类型的向量 a 和 b，返回其中第一个分量（x）较小的那个向量
      // 假设一个函数
      // vec2 tempFun(vec3 p) {
      //   vec2 a = vec2(sdSphere(p - vec3(0., 1., 0.), 1.), 2.0);
      //   vec2 b = vec2(sdPlane(p), 1.);
      //   return minVec2(a, b);
      // }
      // 光线的当前位置 p 为 (0.5, 0.5, 0.5)
      // 球体的距离：sdSphere(p - vec3(0., 1., 0.), 1.) = length(vec3(0.5, -0.5, 0.5)) - 1.0 ≈ 0.3536
      // 平面的距离：sdPlane(p) = 0.5
      // 比较两个距离：min(vec2(0.3536, 2.0), vec2(0.5, 1.0))，返回 vec2(0.3536, 2.0)，表示最近的物体是球体
      // 通过这种方式，tempFun 函数可以有效地组合多个物体，并在光线行进算法中正确地处理它们
      vec2 minVec2(vec2 a, vec2 b) {
        return a.x < b.x ? a : b;
      }

      // 计算一个点 p 到一个无限大水平平面（地面）的距离
      // 这个平面通常被定义为 y=0 的平面，即地面位于 y 轴的零点
      float getGroundDist(vec3 p) {
        float groundDist = p.y;
        return groundDist;
      }

      // 计算一个点 p 到一个球体的距离
      // 球体的中心由 sphere 表示，半径由 radius 表示
      float getSphereDist(vec3 p, vec3 spherePos, float radius) {
        // 从当前点的位置 p 到球体中心的距离中减去球体的半径，得到点 p 到球体表面的最短距离
        // 如果点 p 在球体内部，sphereDist 为负值
        // 如果点 p 在球体表面，sphereDist 为零
        // 如果点 p 在球体外部，sphereDist 为正值
        float sphereDist = length(p - spherePos) - radius;
        return sphereDist;
      }

      // 计算一个点 p 到一个立方体的（最近的）距离，要考虑p在内部和外部的情况，二者都要计算得出结果，外部返回正值，内部返回负值
      // 假设立方体的半尺寸为 cubeSize = vec3(1.0, 1.0, 1.0)，表示立方体在 x、y、z 轴上的半长度都为 1.0，立方体的中心位于原点 (0, 0, 0)
      // 如果点 p = vec3(1.5, 1.5, 1.5)，则 p 在立方体外部
      // 如果点 p = vec3(0.5, 0.5, 0.5)，则 p 在立方体内部
      // 如果点 p = vec3(1.0, 1.0, 1.0)，则 p 在立方体边界上
      // 通过 getCubeDist 函数，可以计算出点 p 到立方体的最短距离
      float getCubeDist(vec3 p, vec3 cubePos, vec3 cubeSize) {
        // abs(p - cubePos) - cubeSize 计算点 p 相对于立方体中心 cubePos 的距离
        // 首先计算点 p 与立方体中心 c 之间的差值 p − cubePos
        // 然后取绝对值 abs(p − cubePos)，表示点 p 相对于立方体中心的水平、垂直和深度方向的距离
        // 最后减去立方体的半尺寸 cubeSize，得到 tempDist
        // tempDist 的每个分量表示点在对应方向上超出立方体边界的距离
        // 点在立方体内部，所有值是负值
        // 点在立方体边界，至少一个是0
        // 点在立方体外，至少一个是正值
        vec3 tempDist = abs(p - cubePos) - cubeSize;


        // max(tempDist, 0.0) 将 tempDist 的所有负分量设置为 0，只保留正分量，表示点到立方体外部的距离（假如其中有一个是负值，则 p 是在立方体内）
        // length(max(tempDist, 0.0)) 计算这个向量的长度，即点到立方体外部的最短距离
        // -----------------------------------------------------------------------
        // min(max(tempDist.x, max(tempDist.y, tempDist.z)), 0.0)这部分的作用是处理点在立方体内部的情况
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

      // 多个物体的合并的dist取min，即物体距离相机最近的dist
      float getDist(vec3 pos) {
        vec3 SPHERE_POS = vec3(0.5, 1.0, 6.0);
        float SPHERE_RADIUS = 1.0;

        vec3 CUBE_POS = vec3(0.0, 0.0, 6.0);
        vec3 CUBE_SIZE = vec3(1.0, 1.0, 1.0);
        
        float groundDist = getGroundDist(pos);
        float cubeDist = getCubeDist(pos, CUBE_POS, CUBE_SIZE);
        float sphereDist = getSphereDist(pos, SPHERE_POS, SPHERE_RADIUS);
        return min(groundDist, min(cubeDist, sphereDist));
      }

      // 联合形状
      // 两个形状距离值的最小值，表示两个形状的并集
      float unionShape(float shapeA, float shapeB) {
        return min(shapeA, shapeB);
      }


      // ro：相机的位置（Ray Origin），即相机在三维空间中的坐标。这个点是所有视线（或光线）的起点
      // target：相机的目标点，即相机“看”向的点。这个点决定了相机的前进方向（Forward向量）
      // up：相机的向上方向（Up向量），通常与相机的前进方向垂直，这个向量用于确定相机的右侧方向（Right向量）和确保相机的坐标系是正交的
      // 相机源点、目标、向上方向
      // R、U、F分别是Right、Up和Forward向量
      mat3 getCameraMat(vec3 ro, vec3 target, vec3 up) {
        vec3 f = normalize(target - ro); // 计算Forward向量（F）

        // 叉积 cross(a, b) 的结果是一个垂直于向量 a 和 b 的向量
        // cross(U, F) 生成的向量指向相机的右侧，而 cross(F, U) 生成的向量指向相机的左侧
        // 使用右手：伸开右手
        // 使食指指向（Up向量）的方向
        // 使中指指向 （Forward向量）的方向
        vec3 r = normalize(cross(up, f)); // Right向量（R）是Forward向量和Up向量的叉积，表示相机的右侧方向

        vec3 u = normalize(cross(f, r)); // 为了确保Up向量垂直于Forward向量，需要重新计算Up向量为Right向量和Forward向量的叉积

        return mat3(r, u, f);
      }

      // rayOrigin 代表光线的起点
      // rayDirection 代表光线的方向
      float rayMarching(vec3 rayOrigin, vec3 rayDirection) {
        // d0 是光线从 rayOrigin 出发后行进的总距离
        float d0 = 0.0;

        const float MAX_STEPS = 100.0;
        float SURFACE_DIST = 0.0001;
        float MAX_DIST = 1000.0;
        
        for (float i = 0.0; i < MAX_STEPS; i += 1.0) {
          // 光线的当前位置 pos
          // rayDirection * d0 计算光线在方向 rayDirection 上行进距离 d0 后的向量，然后将这个向量加到源点 rayOrigin 上，得到新的位置 pos。
          vec3 pos = rayOrigin + d0 * rayDirection;
          // dS 表示从当前光线位置 p 到最近的场景物体表面的距离
          float dS = getDist(pos);
          d0 += dS;
          // 如果从当前位置到球面的距离 dS 小于某个阈值 SURFACE_DIST，则可能表示光线已经“击中”了表面，因此退出循环
          // 因为点p可能在物体内，float dS = getDist(pos)中的dS会返回负值
          // 如果光线行进的距离 d0 大于某个最大距离 MAX_DIST，则退出循环，可能是因为光线已经行进得太远而没有“击中”任何物体
          if (dS < SURFACE_DIST || d0 > MAX_DIST) {
            break;
          }
        }
        return d0;
      }

      // 黑白网格
      vec3 groundGrid(vec3 p) {
        vec3 c1 = vec3(1.0);
        vec3 c2 = vec3(0.0);

        // floor(p.x) 和 floor(p.z) 分别取 p.x 和 p.z 的整数部分
        // p.x + floor(p.z) 将 x 坐标和 z 坐标的整数部分相加
        // mod(..., 2.0) 取上述和对 2 的模，结果为 0 或 1
        float s = mod(floor(p.x + floor(p.z)), 2.0);

        // mix(c1, c2, s) 根据 s 的值在 c1 和 c2 之间进行插值
        // 当 s 为 0 时，返回 c1（白色）
        // 当 s 为 1 时，返回 c2（黑色）
        return mix(c1, c2, s);
      }

      // 在基于距离场（Distance Field）的渲染中，法线（Normal）的计算是一个关键步骤
      // 距离场是一种标量场，其中每个点的值表示该点到最近表面的距离
      // 由于距离场本身是一个标量函数，而法线是一个向量，因此需要通过某种方式从标量场中提取出向量信息
      // 有限差分法（Finite Difference Method）是一种自然且有效的方法，用于从标量场中近似计算梯度，进而得到法线
      // 对于x方向
      // grad_x ≈ [f(p + eps_x) - f(p - eps_x)] / (2 * eps) * ex
      // 具体查看（自定义效果-两个物体的合并-1.png）、（自定义效果-两个物体的合并-2.png）、（自定义效果-两个物体的合并-3.png）
      vec3 getNormal(vec3 p) {
        float e = 0.001;

        // vec3(..., 0.0, 0.0)：构造一个三维向量，只有x分量有效
        // 通过对点p在x方向上加上和减去e，然后计算距离差，这个差值反映了距离场在x方向上的变化率，可以得到x方向上的梯度
        // 结果是一个三维向量，但只有x分量是非零的，表示梯度在x方向上的分量
        vec3 grad_x = vec3((getDist(p + vec3(e, 0.0, 0.0)) - getDist(p - vec3(e, 0.0, 0.0))) / (2.0 * e), 0.0, 0.0);
        
        // vec3(0.0, ..., 0.0)：构造一个三维向量，只有y分量有效
        // 通过对点p在y方向上加上和减去e，然后计算距离差，这个差值反映了距离场在y方向上的变化率，可以得到y方向上的梯度
        // 结果是一个三维向量，但只有y分量是非零的，表示梯度在y方向上的分量
        vec3 grad_y = vec3(0.0, (getDist(p + vec3(0.0, e, 0.0)) - getDist(p - vec3(0.0, e, 0.0))) / (2.0 * e), 0.0);
      
        // vec3(0.0, 0.0, ...)：构造一个三维向量，只有z分量有效
        // 通过对点p在z方向上加上和减去e，然后计算距离差，这个差值反映了距离场在z方向上的变化率，可以得到z方向上的梯度
        // 结果是一个三维向量，但只有z分量是非零的，表示梯度在z方向上的分量
        vec3 grad_z = vec3(0.0, 0.0, (getDist(p + vec3(0.0, 0.0, e)) - getDist(p - vec3(0.0, 0.0, e))) / (2.0 * e));

        // 将三个方向上的梯度向量相加，得到该点的总梯度向量
        // 然后使用normalize函数将其标准化（即长度变为1），得到法向量
        // 因为梯度向量指向函数值增长最快的方向，而对于表示表面的函数，其法向量与梯度向量方向相反（或相同，取决于表面函数的定义，但通常通过取梯度来近似法向量，并可能需要根据具体情况调整方向）
        // 标准化确保了返回的法向量是一个单位向量
        return normalize(grad_x + grad_y + grad_z);
      }

      // 计算一个3D点p与光源之间的漫反射光照强度
      vec3 getLight(vec3 lightPos, vec3 p) {
        float SHADOW = 0.1;

        // 计算从点p到光源的方向，方向的箭头指向lightPos
        // 首先计算从点p到光源lightPos的向量
        // 然后，使用normalize函数将这个向量标准化（或归一化），使其长度为1
        // 标准化后的向量l表示，从点p指向光源的方向
        vec3 l = normalize(lightPos - p);

        vec3 n = getNormal(p);

        // 计算漫反射光照强度
        // 使用点积（dot函数）来计算法线向量n和光源方向向量l之间的角度的余弦值
        // 这个余弦值表示了光源方向和表面法线之间的“对齐”程度，从而决定了光照的强度
        // 由于余弦值可能是负的（当光源在表面的背面时），使用max函数确保结果始终是非负的
        // 因此，dif变量存储了漫反射光照的强度
        float dif = max(dot(n, l), 0.0);

        // 如果不需要阴影
        // return dif;

        // 阴影检测（偏移起点防止自相交）
        float dis = rayMarching(p + 0.01 * n, l);
        if (dis < length(lightPos - p)) {
          // 存在遮挡则减弱光照
          dif *= SHADOW;
        }

        // 地面的黑白格子
        // 由于getDist中有planeDist，所以p点包含了地面
        // 修改不同的groundY，会看到最远处的变化
        float groundY = 0.05;
        if(p.y < groundY) {
          return groundGrid(p) * dif;
        }

        return vec3(dif);
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = (fragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

        vec3 color = vec3(0.0, 0.0, 0.0);
        vec3 lightPos = vec3(2.0, 5.0, 2.0);
        lightPos.xz += vec2(sin(u_time) + 2.0, cos(u_time)) * 2.0;

        // 相机信息
        vec3 cameraPos = vec3(0.0, 3.0, 0.0);
        vec3 cameraUp = vec3(0.0, 1.0, 0.0);
        vec3 cameraTarget = vec3(0.0, 1.0, 6.0);
        
        // rayDirection 是光线的方向向量，表示光线沿着哪个方向行进
        // 之所以 * vec3(uv, 1.0)
        // uv.x 表示水平方向的偏移
        // uv.y 表示垂直方向的偏移
        // 1.0 表示沿着相机的前进方向（即深度方向）的偏移
        // vec3(uv, 1.0) 将二维的 uv 坐标扩展为一个三维向量，其中 z 分量为 1.0
        vec3 rayDirection = getCameraMat(cameraPos, cameraTarget, cameraUp) * vec3(uv, 1.0);

        // 光线步进行进了多少距离
        float rayDist = rayMarching(cameraPos, rayDirection);

        // 光线的当前位置 p （从相机发出一条射线，一直延伸到接触了物体表面，这之间的距离）
        // rayDirection * rayDist 计算光线在方向 rayDirection 上行进距离 rayDist 后的向量，然后将这个向量加到源点 cameraTarget 上，得到新的位置 p。
        vec3 cameraToThingFace = cameraPos + rayDirection * rayDist;

        vec3 curLightColor = getLight(lightPos, cameraToThingFace);

        // 没有光照
        // color = vec3(rayDist / 6.0);

        color = curLightColor;

        gl_FragColor = vec4(color, 1.0);
      }`)
  })
}

</script>
