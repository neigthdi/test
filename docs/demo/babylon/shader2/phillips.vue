<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="phillips" class="stage"></canvas>
  </div>
</template>
  
<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  Color4,
  ArcRotateCamera,
  Vector3,
  Vector2,
  Color3,
  StandardMaterial
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources: any, adt: any
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
  const ele = document.getElementById("phillips") as any

  ele.addEventListener('wheel', function(event: any) {
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
  camera.wheelPrecision = 1
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(160, 160, -160))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(40, 40, 40), scene)
    light.direction = new Vector3(1.0, 0.0, 1.0)
    light.diffuse = new Color3(1.0, 0.95, 0.8)
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
    adt = AdvancedDynamicTexture.CreateFullscreenUI('UI')

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

    const yBox = MeshBuilder.CreateBox('y', { size: 1 }, scene)
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

    const zBox = MeshBuilder.CreateBox('z', { size: 1 }, scene)
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

  const createSphere = () => {
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 10 }, scene)
    const sphereMat = new StandardMaterial('sphere')
    sphereMat.diffuseColor = new Color3(1.0, 0.6, 0.2)
    sphere.material = sphereMat
    sphere.position.x = 70
    sphere.position.y = 70
    sphere.position.z = 70
  }

  const createSphereShader = () => {
    Effect.ShadersStore['customShaderVertexShader'] = `
      precision highp float;

      const float PI = 3.14159265358979323846;
      const float TWO_PI = 2.0 * PI;
      const float G = 9.8;
      const float N = 64.0;

      attribute vec3 position;
      attribute vec2 uv;

      uniform mat4 worldViewProjection; // 投影

      uniform float uTime;
      uniform vec2 uResolution;


      varying vec3 vColor;
      varying vec2 vResolution;

      // 快速的伪随机
      float randValueFast(vec2 uv, float magic) {
        vec2 random2 = (1.0 / 4320.0) * uv + vec2(0.25, 0.0);
        float random = fract(dot(random2 * random2, vec2(magic)));
        random = fract(random * random * (2.0 * magic));

        return random; 
      }


      // 复数乘法
      vec2 complexMultiply(vec2 a, vec2 b){
        return vec2(
          a.x * b.x - a.y * b.y,  // 实部
          a.x * b.y + a.y * b.x   // 虚部
        );
      }


      // 色散关系函数
      float dispersion(vec2 k){
        return sqrt(G * length(k));
      }


      //计算两个相互独立的高斯随机数
      vec2 gauss(vec2 uv) {
        float u1 = randValueFast(uv, 1753.0);
        float u2 = randValueFast(uv, 3571.0);
        if(u1 < 1e-6) {
          u1 = 1e-6;
        }

        float g1 = sqrt(-2.0 * log(u1)) * cos(TWO_PI * u2);
        float g2 = sqrt(-2.0 * log(u1)) * sin(TWO_PI * u2);

        return vec2(g1, g2);
      }


      // 菲利普计算，输入波数 K
      float phillips(vec2 K) {
        // vec2 K = vec2(TWO_PI * n.x / 100.0, TWO_PI * n.y / 100.0); // 计算波数向量 K
        
        vec2 W = vec2(1.0, -1.0); // 定义一个方向向量（风）

        float V = 10.0; // 定义一个速度变量 V

        float A = 10.0; // 定义一个振幅变量 A。

        float L = V * V / G; // 计算波长 L。
        float L2 = L * L;
        
        float kLen = length(K); // 计算波数向量 K 的模长
        kLen = max(0.0001, kLen);
        float kLen2 = kLen * kLen;
        float kLen4 = kLen2 * kLen2;

        vec2 K_norm = normalize(K);
        vec2 W_norm = normalize(W);
        float dot_KW = dot(K_norm, W_norm);

        // 基础 Phillips 谱
        float phi = A * exp(-1.0 / (kLen2 * L2)) / kLen4;

        // dot_KW * dot_KW（称为风向拓展函数）
        // 风向对齐项（加强沿风向的波能）
        phi *= dot_KW * dot_KW;

        // 这一行的思想，必须要记住★★★★★★★★★★★★★★★★★★★★★★★★★★
        // 只要与方向有关的，一律优先思考dot
        // 这个是判断dot的方向是否与风的方向一致
        // 没有这一行，则两个椭圆一样大
        // 可以通过dot来---1：uv的增大缩小、2：光照强度、3：相似度 ......
        if(dot_KW > 0.0) {
          phi *= V;
        }
        // 这一行的思想，必须要记住★★★★★★★★★★★★★★★★★★★★★★★★★★

        // 衰减因子
        float l = 0.001 * L;
        float kSqr = dot(K, K);
        phi *= exp(l * l * -kSqr);

        return phi;
      }

      void main() {
        float x = position.x;
        float y = position.y;
        float z = position.z;

        vec3 color = vec3(0.0);

        // ★★★★★★★★★★★★★★ 必须要注意uResolution，和纯shader的用法不一样 ★★★★★★★★★★★★★★

        // 如果没有 pixelCoord 则 color.xy = vec2(gaussValue2); 的高斯图会有谐波出现，而不是噪点图
        vec2 pixelCoord = uv * uResolution; // 将归一化UV转换为像素坐标
        vec2 gaussValue1 = gauss(pixelCoord + vec2(3.0, 5.0)); // 用于 h0k
        vec2 gaussValue2 = gauss(pixelCoord + vec2(7.0, 11.0)); // 用于 h0kConj

        
        float nx = (uv.x - 0.5) * uResolution.x; // 还原到像素尺度
        float ny = (uv.y - 0.5) * uResolution.y; // 还原到像素尺度
        

        // 计算波数 K
        vec2 K = vec2(TWO_PI * nx / N, TWO_PI * ny / N);
        // 计算 h0(k) 和 h0*(-k)
        // 这个使用风向拓展函数
        vec2 h0k = gaussValue1 * sqrt(phillips(K) * 0.5);  // 初始频谱（由菲利普频谱与高斯随机数生成）
        vec2 h0kConj = gaussValue2 * sqrt(phillips(-K) * 0.5); // 共轭复数
        h0kConj.y *= -1.0; // 为什么 *-1.0 ， ax + i·b，其共轭复数是 ax - i·b

        float omega = dispersion(K) * uTime;
        float c = cos(omega);
        float s = sin(omega);
        vec2 h1 = complexMultiply(h0k, vec2(c, s));
        vec2 h2 = complexMultiply(h0kConj, vec2(c, -s));

        vec2 H_Tilde = h1 + h2; // H_Tilde 波浪H是数学公式中的写法



        // 计算 KxHTilde 和 KzHTilde 是为了获取到法线

        vec2 maxK = K / max(0.001, length(K));
        vec2 KxHTilde = complexMultiply(vec2(0, -maxK.x), H_Tilde);
        vec2 KzHTilde = complexMultiply(vec2(0, -maxK.y), H_Tilde);


        // 默认法线向上，即没有波浪时候
        vec3 normal = vec3(0.0, 1.0, 0.0);
        if (length(K) > 0.001) {  // 跳过直流分量

          // 这里取实数部分，不用虚数
          // 在数学和物理的多个领域（如波动理论、电磁学、量子力学等）中，当处理 dh/dx 和 dh/dz 等导数时，若函数 h 是复数形式，通常只取其实数部分
          vec2 dHdx = complexMultiply(vec2(0, K.x), H_Tilde);
          vec2 dHdz = complexMultiply(vec2(0, K.y), H_Tilde);

          // 为什么是负数？
          // 梯度是“上升最快的方向”
          // 法线是“垂直于表面”的方向
          // 法线在水平面上的投影，正好是梯度的反方向
          // 直观理解：
          // 因为法线必须垂直于斜坡表面
          // 如果斜坡向东倾斜（东高西低），那么法线必须向西倾斜（西高东低）才能垂直于斜坡
          // 因此，法线在水平面上的投影指向西方（即梯度的反方向）
          normal = normalize(vec3(-dHdx.x, 1.0, -dHdz.x));
        }



        color.xy = vec2(H_Tilde);
        vColor = color;

        gl_Position = worldViewProjection * vec4(vec3(x, y, z), 1.0);
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
        uniforms: ['worldViewProjection', 'uResolution', 'uTime'],
        needAlphaBlending: true,
      },
    )


    customShader.setFloat('uDown', uTime)
    
    return customShader
  }

  const createPlane = () => {
    const plane = MeshBuilder.CreateGround(
      'plane', 
      { 
        width: 256, 
        height: 256, 
        subdivisions: 256 
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
  createSphere()
  const material = createPlane()
  material.setVector2('uResolution', new Vector2(256, 256))
  runAnimate()

  scene.registerBeforeRender(function() {
    material.setFloat('uTime', uTime)
    uTime += 0.02
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
  if (adt) {
    adt.dispose()
    adt = null
  }
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>