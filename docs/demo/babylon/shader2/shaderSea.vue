<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderSea" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import { 
  CustomMaterial 
} from 'babylonjs-materials'
import {
  Engine,
  Scene,
  Texture,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  Color4,
  ArcRotateCamera,
  Vector3
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources
let uTime = 0.0

const fps = ref(0)
const isRunning = ref(false)

const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    sceneResources = await initScene()
  } else {
    isRunning.value = false
    destroy()
  }
}

const initScene = async () => {
  const ele = document.getElementById("shaderSea") as any

  ele.addEventListener('wheel', function(event) {
    // 根据需要处理滚动
    // 例如，可以修改相机的半径或角度
    event.preventDefault() // 阻止默认滚动行为
  })

  const engine: any = new Engine(ele, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false
  })

  const scene = new Scene(engine)
  scene.useRightHandedSystem = false

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 200
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(50, 50, -50))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(0, 50, 0), scene)
    return light
  }

  const createAxis = () => {
    const axisX = MeshBuilder.CreateLines(
      'axisX', {
        colors: [new Color4(1, 0, 0, 1), new Color4(1, 0, 0, 1)],
        points: [new Vector3(0, 0, 0), new Vector3(80, 0, 0)]
      },
      scene
    )

    const axisY = MeshBuilder.CreateLines(
      'axisY', {
        colors: [new Color4(0, 1, 0, 1),  new Color4(0, 1, 0, 1)  ],
        points: [new Vector3(0, 0, 0), new Vector3(0, 80, 0) ]
      },
      scene
    )

    const axisZ = MeshBuilder.CreateLines(
      'axisZ', {
        colors: [new Color4(0, 0, 1, 1), new Color4(0, 0, 1, 1)],
        points: [new Vector3(0, 0, 0), new Vector3(0, 0, 80)]
      },
      scene
    )

    return [axisX, axisY, axisZ]
  }

  const createGui = async () => {
    const adt = AdvancedDynamicTexture.CreateFullscreenUI('UI')

    const xBox = MeshBuilder.CreateBox('x', { size: 1 }, scene)
    xBox.position = new Vector3(80, 0, 0)
    const xPanel = new StackPanel()
    xPanel.width = '20px'
    xPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
    xPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    const x = new TextBlock()
    x.text = 'X'
    x.height = '30px'
    x.color = 'red'
    adt.addControl(xPanel)
    xPanel.addControl(x)
    xPanel.linkWithMesh(xBox)

    const yBox = MeshBuilder.CreateBox('x', { size: 1 }, scene)
    yBox.position = new Vector3(0, 80, 0)
    const yPanel = new StackPanel()
    yPanel.width = '20px'
    yPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
    yPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    const y = new TextBlock()
    y.text = 'Y'
    y.height = '30px'
    y.color = 'green'
    adt.addControl(yPanel)
    yPanel.addControl(y)
    yPanel.linkWithMesh(yBox)

    const zBox = MeshBuilder.CreateBox('x', { size: 1 }, scene)
    zBox.position = new Vector3(0, 0, 80)
    const zPanel = new StackPanel()
    zPanel.width = '20px'
    zPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
    zPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    const z = new TextBlock()
    z.text = 'Z'
    z.height = '30px'
    z.color = 'blue'
    adt.addControl(zPanel)
    zPanel.addControl(z)
    zPanel.linkWithMesh(zBox)
  }

  const createGround = () => {
    const ground = MeshBuilder.CreateGroundFromHeightMap(
      "heightMap", 
      "/images/heightMap.png", 
      { width: 100, height: 100, subdivisions: 500, maxHeight: 30 }
    )
    const mat = new CustomMaterial('grass', scene)
    mat.diffuseTexture = new Texture('/images/ground.jpg', scene)
    ground.material = mat
    return ground
  }

  const createSphereShader = () => {
    Effect.ShadersStore['customShaderVertexShader'] = `
      precision highp float;

      attribute vec3 position;
      attribute vec2 uv;

      uniform mat4 worldViewProjection;
      uniform sampler2D textureSampler;
      uniform float uTime;

      varying vec3 vColor;

      // fract的返回值在 0 ~ 1
      float random(vec2 uv) {
        return fract(sin(dot(uv.xy, vec2(12.354121, 91.321))) * 452361.21321);
      }

      float noise(vec2 uv) {
        vec2 i = floor(uv); // 将输入的二维向量 uv 向下取整，得到包含 uv 点所在网格块的整数坐标 i。这是为了确定 uv 点位于哪个 2D 网格单元内。
        vec2 f = fract(uv); // 得到 uv 的小数部分，即 uv 点在其所在网格单元内的相对位置 f。f 的范围是 [0, 1)。

        // 2d 块的四个角，这四行计算了 uv 所在 2D 块的四个角上的随机值。
        float a = random(i); // 当前网格块左下角的随机值 a。这里使用 random 函数和网格块的整数坐标 i 作为输入。
        float b = random(i + vec2(1.0, 0.0)); // 当前网格块右下角的随机值 b。通过给 i 的 x 坐标加 1，可以定位到相邻的右侧网格块的左下角（因为 i 是整数坐标，加 1 后仍然是整数坐标）。
        float c = random(i + vec2(0.0, 1.0)); // 当前网格块左上角的随机值 c。通过给 i 的 y 坐标加 1，可以定位到相邻的上侧网格块的左下角。
        float d = random(i + vec2(1.0, 1.0)); // 当前网格块右上角的随机值 d。通过同时给 i 的 x 和 y 坐标加 1，可以定位到相邻的右上角网格块的左下角（或者说当前网格块的右上角，取决于如何看待相邻和当前的关系）。
        
        vec2 u = f * f * (3.0 - 2.0 * f); // 计算一个平滑的插值因子 u，用于在四个角点之间进行平滑过渡。f * f * (3.0 - 2.0 * f) 是一个三次插值函数，在 [0, 1] 区间内生成一个平滑的曲线，用于在四个噪声值之间进行插值。

        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y; // 使用 mix 函数和之前计算的插值因子 u 来在水平方向（x 轴）上插值 a 和 b，并手动计算垂直方向（y 轴）以及斜对角方向的插值，得到最终的噪声值。这个计算考虑了所有四个角点的贡献，并通过插值因子 u 来平滑过渡，从而生成一个平滑的二维噪声。
      }

      float fbm(vec2 uv) {
        float value = 0.0;
        float amplitude = 0.75; // 振幅
        float frequency = 0.4; // 频率

        for (int i = 0; i < 6; i++) {
          value += amplitude * noise(uv) * frequency;
          uv *= 3.0;
          amplitude *= 0.5;
        }

        return value;
      }

      vec3 getGerstner(float x, float y, float z, float time) {
        // ---------------------------------------------------------
        // 法线相关的计算，用于光照。本案例使用y的高度来显示海面的白色和蓝色，没用到法线
        // ---------------------------------------------------------
        // 以sin函数为例，求P点的切线
        // P(x, sin(x))   --->   f(x)=sin(x)  --->   f'(x)=cos(x)
        // 带入P(π/2, 1)，求得 f'(π/2)=0，即P点的斜率为0
        // 对x求导的结果为1，最后得(1, 0)，即切线的方向向量（切线的方向向量可以通过导数来确定）（切线的方向向量可以表示为 (1, dy/dx)）
        // ---------------------------------------------------------
        // 将曲线表示为参数方程。设 x=t，y=f(t)，那么曲线可以表示为 r(t)=(t,f(t))。在 t=t0时，对应的点是 (t0,f(t0))。
        // 切向量是曲线在该点的导数
        // r′(t)=(dx/dt, dy/dt)=(1,f′(t))
        // 这里， dx/dt=1 是因为 x=t，所以 dx/dt=1
        // ---------------------------------------------------------
        // 假设 y=x^2，在 x=1 处：
        // 斜率  dy/dx=2x，在 x=1 时为 2
        // 切向量可以是 (1,2)
        // 这意味着在 x 方向移动 1，y 方向移动 2，与斜率一致
        // ---------------------------------------------------------
        // 如果曲线不是以 x=t 参数化，比如 x=t^2，y=t^3，那么
        // dx/dt=2t，dy/dt=3(t^2)
        // 切向量为(2t, 3(t^2))，斜率为3(t^2)/2t=(3/2)t
        // 此时需要归一化，比如有一个方向向量 v=(2,3)（例如，在 t=1 时，x=t^2， y=t^3 的切向量为 (2⋅1,3⋅12)=(2,3)）
        // 计算模：∥v∥= (2*2 + 3*3)^0.5 = 13^0.5
        // 归一化后 u=(2/(13^0.5), 3/(13^0.5))
        // u 是一个单位向量，方向与 v 相同
        // ---------------------------------------------------------
        // x轴的切线的方向向量(dx/dx, dy/dx, dz/dx)
        // z轴的切线的方向向量(dx/dz, dy/dz, dz/dz)
        // 法线是 N = Z 叉乘 X
        // 为什么是 Z 叉乘 X ？
        // 规定大拇指，食指和中指分别是x，y，z方向，伸出左手，本案例的 useRightHandedSystem 是使用左手定则的
        // 那么就要使用左手螺旋定则确定切线和副切线的叉乘顺序
        // 接着再伸出左手握拳，由于已经海面需要的法线方向朝上，因此大拇指朝上指向法线方向，发现四指的旋向从上往下看是顺时针旋转，由B旋转到T，所以叉乘顺序是B×T
        // 一定要注意使用左右手螺旋定则与左右坐标系有关，右手系要使用右手定则
        // ---------------------------------------------------------
        // 最终计算如下：
        // 设模型空间顶点变换到世界空间后的位置(x, y, z)
        // 经过SineWave偏移后顶点的位置为(x, y + A * sin(k * x - omega * t), z)
        // z的切线方向为(0, 0, 1)，所以只要计算x的切线方向。z是这样的结果，是因为把摄像机绕y轴顺时针旋转90看这个正弦波，会发现z方向都是平的
        // X.x = dx/dx = x' = 1
        // X.y = dy/dx = (y + a * sin(k * x - omega * t))' = a * k * cos(k * x - omega * t)
        // X.z = dz/dx = 0' = 0
        // X = (1, a * k * cos(k * x - omega * t), 0)
        // Z = (0, 0, 1)
        // N = Z 叉乘 X
        // vec3 x = vec3(1, a * k * cos(k * x - omega * t), 0)
        // vec3 z = vec3(0, 0, 1)
        // vec3 n = normalize(cross(z, x))
        // ---------------------------------------------------------




        // ---------------------------------------------------------
        // direction = vec4(1, 1, 0, 0)
        // dir = normalize(direction.xy)
        // value = k * D_x * x + k * D_y * z - ω * t  ---> dot(dir * k, xz) - ω * t
        // P_x = x + A * D_x * cos(value)
        // P_y = A * sin(value)
        // P_z = z + A * D_y * cos(value)
        // ---------------------------------------------------------
        // speed 是波的速度（自己定义）
        // A 是波的振幅，表示波浪的高低起伏程度（自己定义）
        // λ 是波长（自己定义）
        // t 是时间，表示当前时刻（外部传参）
        // k 是波数，与波长λ的关系为 k = 2π / λ ，波长是波峰到波峰的距离
        // D 是波的传播方向向量（方向余弦），表示波的传播方向，通常是一个单位向量
        // frequency 是频率，f = speed / λ;   f = 1 / T
        // ω 是角频率，与波的周期T的关系为 ω = 2π / T ，周期是波完成一个完整周期的时间
        // ---------------------------------------------------------
        // 振幅A：决定了波浪的高低起伏程度。振幅越大，波浪越高
        // 波数k：与波长成反比，波长越长，波数越小
        // 传播方向向量D：决定了波的传播方向。例如，如果D=(1,0)，则波沿x轴正方向传播
        // 角频率ω：与波的周期成反比，周期越短，角频率越高
        // ---------------------------------------------------------




        vec3 result = vec3(x, y, z);

        // 初始化法线为垂直向上的向量，法线的作用是光照，因为即使顶点改变了，但是法线不会改变
        // X和Z也需要累加
        // 每个波对表面的影响是独立的，但最终的表面状态是所有波的叠加结果
        // 这意味着每个波对切线和副切线的贡献也需要逐波累加，而不是在所有波的位置影响计算完成后才统一计算
        vec3 normalX = vec3(0.0); // 切线（Tangent，T）
        vec3 normalZ = vec3(0.0); // 副切线（Binormal，B）


        // 这里是单个的波
        // float A = 0.8;
        // float speed = 10.0;
        // float waveLength = 6.0; // 波长影响波的叠加，比如0.2会多个波叠到一起，太大会呈现一条线，所以尽量找合适的数值
        // float k = 2.0 * 3.14 / waveLength;
        // float f = speed / waveLength;
        // float omega = 2.0 * 3.14 / f;
        // float value = dot(dir * k, vec2(x, z)) - omega * time;
        // result.x = x + A * dir.x * cos(value);
        // result.y = A * sin(value);
        // result.z = z + A * dir.y * cos(value);

        const int wavesCount = 4;

        for(int i = 0; i < wavesCount; i++) {
          float step = float(i) + 0.212;

          // 随机方向分布，都是正方向
          // 这个的vec2的x和y分别对应了xyz轴的x和z，因为高度的y不用考虑方向
          // x是切线，z是副切线
          float angle = random(vec2(float(i), float(i) + 1.1234123)) * 6.28318530718; // 0 - 2π
          vec2 dir = vec2(cos(angle), sin(angle));
          
          float A = random(vec2(step + 0.134, step + 0.442)) * 0.5 + 0.1;
          float waveLength = random(vec2(step + 0.134, step + 0.442)) * 15.0 + 5.0;
          float speed = random(vec2(step + 0.134, step + 0.2)) * 2.0 + 1.0;
          float k = 2.0 * 3.14 / waveLength;
          float f = speed / waveLength;
          float omega = 2.0 * 3.14 * f; // 等于 k * speed

          float value = dot(dir * k, vec2(x, z)) - omega * time;

          result.x += A * dir.x * cos(value);
          result.y += A * sin(value);
          result.z += A * dir.y * cos(value);


          // T=dP/dx
          // Tx=dPx/dx   --->   dx * k * a * (-sin(value))
          // Ty=dPy/dx   --->   k * a * cos(value)
          // Tz=dPz/dx   --->   dy * k * a * (-sin(value))
          // ---------------------------------------------------------
          // 为什么会得到 normalX.x += dir.x * dir.x * k * A * -sin(value); 这个方程
          // 首先，Px的计算方式是 Px = x + dir.x * a * cos(value)
          // 对x求偏导 dPx / dx = 1 + d(dir.x * a * cos(value)) / dx
          // 由于 dir.x 和 a 是常数，且 value 是 x 的函数，可以进一步计算
          // d(dir.x * a * cos(value)) / dx   --->    dir.x * a * d(cos(value)) / dx 
          // 根据链式法则：
          // d(cos(value)) / dx    --->    -sin(value) * d(value) / dx
          // value 可以表示为：
          // value = k * (dir.x * x + dir.y * z) - omega * t
          // 其中，k 是波数，omega 是角频率，t 是时间
          // 对 value 求 x 的偏导数：
          // d(value) / dx = k * dir.x
          // 将上面的式子带入前面的表达式，得到：
          // d(cos(value)) / dx = -sin(value) * dir.x * k
          // 因此：
          // dPx / dx = 1 + dir.x * a * (-sin(value) * k * dir.x)   --->   dPx / dx = 1 - dir.x * a * sin(value) * k * dir.x
          // 这里的 1 表示初始的切线方向在 x 轴上的分量。在没有波的影响时，切线方向是沿着 x 轴的
          // normalX = vec3(1.0 + normalX.x, normalX.y, normalX.z);
          // ---------------------------------------------------------
          normalX.x += dir.x * dir.x * k * A * -sin(value);
          normalX.y += dir.x * k * A * cos(value);
          normalX.z += dir.x * dir.y * k * A * -sin(value);

          // T=dP/dz
          // Tx=dPx/dz   --->   dx * k * a * (-sin(value))
          // Ty=dPy/dz   --->   k * a * cos(value)
          // Tz=dPz/dz   --->   dy * k * a * (-sin(value))
          normalZ.x += dir.x * dir.y * k * A * -sin(value);
          normalZ.y += dir.y * k * A * cos(value);
          normalZ.z += dir.y * dir.y * k * A * -sin(value);
        }


        // 将所有波的切线和副切线贡献累加到初始的切线和副切线上，得到最终的切线和副切线
        // 需要注意的是，这里对切线和副切线的x和z分量分别加了1，这是因为初始的切线和副切线是单位向量，分别指向x轴和z轴方向。
        normalX = vec3(1.0 + normalX.x, normalX.y, normalX.z);
        normalZ = vec3(normalZ.x, normalZ.y, 1.0 + normalZ.z);

        vec3 finalNormal = normalize(cross(normalZ, normalX));

        return result;
      }

      void main() {
        float x = position.x;
        float y = position.y;
        float z = position.z;

        // -------------------------------------------------------xyz和uv-------------------------------------------------------
        // 由此段可以看出，x、y、z的分布。右手坐标系的中心为中点，向右x正，向下y正。左手坐标系，向右x正，向上y正。
        // vec3 color = vec3(0.0);
        // if(x > 0.0 && x < 30.0 && z > 0.0 && z < 50.0) {
        //   color = vec3(1.0, 1.0, 0.0);
        // }
        // vColor = color;
        // gl_Position = worldViewProjection * vec4(vec3(x, y, z), 1.0);


        // 由此段可以看出，uv的x、y的分布。y从右手坐标系的左上角开始，到左下角是 0 ~ 1。x从右手坐标系的左上角开始，到右上角是 0 ~ 1。
        // vec3 color = vec3(0.0);
        // if(uv.x > 0.0 && uv.x < 0.5 && uv.y > 0.0 && uv.y < 0.8) {
        //   color = vec3(1.0, 1.0, 0.0);
        // }
        // vColor = color;
        // gl_Position = worldViewProjection * vec4(vec3(x, y, z), 1.0);
        // -------------------------------------------------------xyz和uv-------------------------------------------------------


        // -------------------------------------------------------这个是使用fbm的noise来模拟海浪-------------------------------------------------------
        // 通过将多个不同频率和振幅的噪声层叠加在一起，生成更复杂的纹理。这种技术可以模拟许多自然现象，包括云、山脉、水面等
        // 但直接使用它可能效果不够理想，因为海浪具有更复杂的动态特性，例如波浪的传播、反射、破碎等
        // vec4 baseColor = texture(textureSampler, uv);
        // float allBlackColor = baseColor.r + baseColor.g + baseColor.b;
        // // if (allBlackColor == 0.0) { // 只有黑色的区域是河流
        // vec2 move1 = vec2(0.0);
        // move1.x = fbm(uv * 3.0);
        // move1.y = fbm(uv * 2.0);

        // vec2 move2 = vec2(0.0);
        // move2.x = fbm(uv + -0.2 * uTime + move1 + vec2(0.82, 0.32));
        // move2.y = fbm(uv + 0.5 * uTime + move1 + vec2(0.42, 0.732));

        // float fbm_value = fbm(uv + move2);

        // vec3 yColor = mix(vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0), clamp((fbm_value * fbm_value) * 4.0, 0.0, 1.0));
        // y += yColor.r * yColor.g * yColor.b * 1.2; // y 的最大值是 1.2

        // vColor = mix(vec3(0.1, 0.56, 1.0), vec3(0.48, 0.75, 1.0), clamp(y, 0.0, 1.0)); // vec3(0.1, 0.56, 1.0) 蓝色  vec3(0.48, 0.75, 1.0) 蓝白色  由低到高 
        // // }

        // gl_Position = worldViewProjection * vec4(vec3(x, y, z), 1.0);
        // -------------------------------------------------------这个是使用fbm的noise来模拟海浪-------------------------------------------------------




        // -------------------------------------------------------sin，y通过sin在上下周期运动，根本没有发生水平移动-------------------------------------------------------
        // vec3 color = vec3(0.0);
        // vColor = color;
        // float Amplitude = 0.2; // 波幅
        // float waveLength = 10.0; // 波长
        // float frequency = 2.0 * 3.14 / waveLength; // 频率
        // float speed = 50.0;
        // y = Amplitude * sin(frequency * (x - speed * uTime));
        // gl_Position = worldViewProjection * vec4(vec3(x, y, z), 1.0);
        // -------------------------------------------------------sin，y通过sin在上下周期运动，根本没有发生水平移动-------------------------------------------------------




        // -------------------------------------------------------使用 Gerstner 波-------------------------------------------------------
        // vec3 color = vec3(0.0);
        // vColor = color;

        vec3 xyz = getGerstner(x, y, z, uTime);
        xyz.y *= 0.5;
        xyz.y += 0.7;
        vColor = mix(vec3(0.1, 0.56, 1.0), vec3(0.48, 0.75, 1.0), clamp(xyz.y, 0.0, 1.0)); // vec3(0.1, 0.56, 1.0) 蓝色  vec3(0.48, 0.75, 1.0) 蓝白色  由低到高

        gl_Position = worldViewProjection * vec4(vec3(xyz.x, xyz.y, xyz.z), 1.0);
        // -------------------------------------------------------使用 Gerstner 波-------------------------------------------------------
      }
    `

    Effect.ShadersStore['customShaderFragmentShader'] = `
      precision highp float;

      varying vec3 vColor;
      
      void main(void) {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `

    const customShader = new ShaderMaterial(
      'customShader',
      scene, {
        vertex: 'customShader',
        fragment: 'customShader',
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'textureSampler', 'uTime'],
        samplers: ['textureSampler'],
        needAlphaBlending: true,
      },
    )

    const texture = new Texture('/images/heightMap.png', scene)
    customShader.setTexture('textureSampler', texture)
    customShader.setFloat('uDown', uTime)
    
    return customShader
  }

  const createPlane = () => {
    const plane = MeshBuilder.CreateGround(
      'plane', 
      { 
        width: 110, 
        height: 110, 
        subdivisions: 550 
      },
      scene
    )
    const material = createSphereShader()
   
    plane.material = material
    return material
  }


  const runAnimate = () => {
    engine.runRenderLoop(function() {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }

  createLight()
  createAxis()
  createGui()
  createGround()
  const material = createPlane()
  runAnimate()

  scene.registerBeforeRender(function() {
    material.setFloat('uTime', uTime)
    uTime += 0.04

  })

  return {
    scene,
    engine, 
  }
}

const destroy = () => {
  if (sceneResources) {
    sceneResources.engine.stopRenderLoop() 
    sceneResources.engine.dispose()
    sceneResources.scene.dispose()
    sceneResources = null
  }
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>