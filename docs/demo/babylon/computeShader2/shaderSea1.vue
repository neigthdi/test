<template>
  <div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/41455378">傅里叶系列(只看第一和第三)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/1913515900235153904">傅里叶系列(作为上面的第二节，j是复数i)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/64414956">fft海面模拟(一)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/64726720">fft海面模拟(二)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/65156063">fft海面模拟(三)</a></div>
    <div><a target="_blank" href="https://zhuanlan.zhihu.com/p/208511211">详尽的快速傅里叶变换推导</a></div>
    <div><a target="_blank" href="/math/fft.html">蝶形变换的 WN_k</a></div>
    <div>没有优化，法向量也没计算，泡沫也没计算（雅可比行列式）</div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderSea1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  WebGPUEngine,
  Scene,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  Color4,
  ArcRotateCamera,
  Vector3,
  Color3,
  StandardMaterial,
  RawTexture,
  Constants,
  ComputeShader,
  UniformBuffer,
  Texture,
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources, adt
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
  const ele = document.getElementById("shaderSea1") as any

  ele.addEventListener('wheel', function(event) {
    // 根据需要处理滚动
    // 例如，可以修改相机的半径或角度
    event.preventDefault() // 阻止默认滚动行为
  })

  const engine: any = new WebGPUEngine(ele)
  await engine.initAsync()

  const scene = new Scene(engine)
  scene.useRightHandedSystem = false

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 1
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 560, -560))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(40, 40, 40), scene)
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

  const PI = 3.14159265358979323846
  const TWO_PI = 2 * PI
  const G = 9.8
  const IMG_SIZE = 128

  // 复数乘法
  function complexMultiply(a, b) {
    return {
      x: a.x * b.x - a.y * b.y,  // 实部
      y: a.x * b.y + a.y * b.x   // 虚部
    }
  }
 
  // 色散关系函数
  function dispersion(k) {
    return Math.sqrt(G * vectorLength(k))
  }
 
  // 计算向量长度（模）
  function vectorLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y)
  }
 
  // 归一化向量
  function normalize(v) {
    const len = vectorLength(v)
    return { x: v.x / len, y: v.y / len }
  }
 
  // 点积计算
  function dot(a, b) {
    return a.x * b.x + a.y * b.y
  }
 
  // 快速随机值生成函数
  function randValueFast(uv, seed) {
    return fract(Math.sin(dot(uv, {x: 12.9898, y: 78.233}) + seed) * 43758.5453)
  }
 
  // fract函数
  function fract(x) {
    return x - Math.floor(x)
  }
 
  // 计算两个相互独立的高斯随机数
  function gauss(uv) {
    let u1 = randValueFast(uv, 1753.0)
    let u2 = randValueFast(uv, 3571.0)
    
    if (u1 < 1e-6) {
      u1 = 1e-6
    }
 
    const g1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(TWO_PI * u2)
    const g2 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(TWO_PI * u2)
 
    return { x: g1, y: g2 }
  }
 
  // 菲利普频谱计算，输入波数 K
  function phillips(K) {
    const W = { x: 1.0, y: -1.0 } // 风的方向向量
    const V = 10.0 // 风速
    const A = 10.0 // 振幅参数
    
    const L = V * V / G // 最大波长
    const L2 = L * L
    
    const kLen = Math.max(0.0001, vectorLength(K))
    const kLen2 = kLen * kLen
    const kLen4 = kLen2 * kLen2
 
    const K_norm = normalize(K)
    const W_norm = normalize(W)
    const dot_KW = dot(K_norm, W_norm)
 
    // 基础 Phillips 谱
    let phi = A * Math.exp(-1.0 / (kLen2 * L2)) / kLen4
 
    // 风向对齐项
    phi *= dot_KW * dot_KW
 
    // 仅保留与风向同方向的波
    if (dot_KW > 0.0) {
      phi *= V
    }
 
    // 衰减因子（减少长波）
    const l = 0.001 * L
    const kSqr = dot(K, K)
    phi *= Math.exp(l * l * -kSqr)
 
    return phi
  }

  function createXyzTexture (scene) {
    const xData = new Uint8Array(IMG_SIZE * IMG_SIZE * 4)
    const yData = new Uint8Array(IMG_SIZE * IMG_SIZE * 4)
    const zData = new Uint8Array(IMG_SIZE * IMG_SIZE * 4)
    const fftData = new Uint8Array(IMG_SIZE * IMG_SIZE * 4)
    const fftK = new Float32Array(IMG_SIZE * IMG_SIZE * 4)
    const wData = new Float32Array(IMG_SIZE * IMG_SIZE * 4)
   
    for (let y = 0; y < IMG_SIZE; y++) {
      for (let x = 0; x < IMG_SIZE; x++) {
        const index = (x + y * IMG_SIZE) * 4
        const gaussValue1 = gauss({x: x + 3, y: y + 5})
        const gaussValue2 = gauss({x: x + 7, y: y + 11})

        const nx = x - IMG_SIZE / 2
        const ny = y - IMG_SIZE / 2

        const K = {
          x: TWO_PI * nx / IMG_SIZE,
          y: TWO_PI * ny / IMG_SIZE,
        }

        const phillipsRes1 = Math.sqrt(phillips(K) * 0.5)
        const h0k = {
          x: gaussValue1.x * phillipsRes1,
          y: gaussValue1.y * phillipsRes1
        }

        const phillipsRes2 = Math.sqrt(phillips({x: K.x * -1, y: K.y * -1}) * 0.5)
        const h0kConj = {
          x: gaussValue2.x * phillipsRes2,
          y: gaussValue2.y * phillipsRes2 * -1
        }

        const omega = dispersion(K)
        const c = Math.cos(omega)
        const s = Math.sin(omega)
        const h1 = complexMultiply(h0k, {x: c, y: s})
        const h2 = complexMultiply(h0kConj, {x: c, y: s * -1})

        const H_Tilde = {
          x: h1.x + h2.x,
          y: h1.y + h2.y
        }

        let kLen = vectorLength(K)
        kLen = kLen < 0.001 ? 0.001 : kLen
        const maxK = {x: K.x / kLen, y: K.y / kLen}

        const KxHTilde = complexMultiply({x: 0, y: -1 * maxK.x}, H_Tilde);
        const KzHTilde = complexMultiply({x: 0, y: -1 * maxK.y}, H_Tilde);

        yData[index] = H_Tilde.x
        yData[index + 1] = H_Tilde.y
        yData[index + 2] = 0
        yData[index + 3] = 255

        
        fftData[index] = h0k.x
        fftData[index + 1] = h0k.y
        fftData[index + 2] = h0kConj.x
        fftData[index + 3] = h0kConj.y


        fftK[index] = K.x
        fftK[index + 1] = K.y
        fftK[index + 2] = maxK.x
        fftK[index + 3] = maxK.y


        // x 方向，叉积计算法向量
        xData[index] = KxHTilde.x
        xData[index + 1] = KxHTilde.y
        xData[index + 2] = 0
        xData[index + 3] = 255


        // z 方向，叉积计算法向量
        zData[index] = KzHTilde.x
        zData[index + 1] = KzHTilde.y
        zData[index + 2] = 0
        zData[index + 3] = 255

        // 旋转W的数据
        if(y === 0) {
          const angle = (2 * Math.PI * x) / IMG_SIZE;
          const re  = Math.cos(angle)
          const im  = Math.sin(angle)
          wData[index] = re
          wData[index + 1] = im
          wData[index + 2] = 0
          wData[index + 3] = 0
        } else {
          wData[index] = 0
          wData[index + 1] = 0
          wData[index + 2] = 0
          wData[index + 3] = 0
        }

      }
    }

    const rawTextureY = new RawTexture(
      yData,
      IMG_SIZE,
      IMG_SIZE,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE
    )

    const rawTextureX = new RawTexture(
      xData,
      IMG_SIZE,
      IMG_SIZE,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE
    )

    const rawTextureZ = new RawTexture(
      zData,
      IMG_SIZE,
      IMG_SIZE,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE
    )

    const rawTextureFft = new RawTexture(
      fftData,
      IMG_SIZE,
      IMG_SIZE,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE
    )

    const rawTextureFftK = new RawTexture(
      fftK,
      IMG_SIZE,
      IMG_SIZE,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE,
    )

    const rawTextureW = new RawTexture(
      wData,
      IMG_SIZE,
      IMG_SIZE,
      Constants.TEXTUREFORMAT_RGBA,
      scene,
      false, // 不生成 mipmap
      false, // 不使用线性空间
      Constants.TEXTURE_NEAREST_SAMPLINGMODE,
    )

    return {
      rawTextureY,
      rawTextureX,
      rawTextureZ,
      rawTextureFft,
      rawTextureFftK,
      rawTextureW
    }
  }

  const createXyzPlane = ({ rawTextureX, rawTextureY, rawTextureZ }) => {
    const planeX = MeshBuilder.CreateGround('planeX', { width: IMG_SIZE, height: IMG_SIZE, subdivisions: IMG_SIZE }, scene)
    planeX.position = new Vector3(-IMG_SIZE - 10, 0, IMG_SIZE + 10)
    const materialX = new StandardMaterial("planeMaterial", scene)
    materialX.diffuseTexture = rawTextureX
    planeX.material = materialX

    const planeY = MeshBuilder.CreateGround('planeY', { width: IMG_SIZE, height: IMG_SIZE, subdivisions: IMG_SIZE }, scene)
    planeY.position = new Vector3(0, 0, IMG_SIZE + 10)
    const materialY = new StandardMaterial("planeMaterial", scene)
    materialY.diffuseTexture = rawTextureY
    planeY.material = materialY

    const planeZ = MeshBuilder.CreateGround('planeZ', { width: IMG_SIZE, height: IMG_SIZE, subdivisions: IMG_SIZE }, scene)
    planeZ.position = new Vector3(IMG_SIZE + 10, 0, IMG_SIZE + 10)
    const materialZ = new StandardMaterial("planeMaterial", scene)
    materialZ.diffuseTexture = rawTextureZ
    planeZ.material = materialZ
  }

  const ifftComputed = async (rawTextureFft, rawTextureFftK, rawTextureW) => {
    const workGroupSizeRowX = IMG_SIZE
    const workGroupSizeRowY = 1
    const workGroupSizeColX = 1
    const workGroupSizeColY = IMG_SIZE

    const totalStep = Math.log2(IMG_SIZE)

    /** 第一步 计算 omega 和 uTime ，得到 textureHTilde */
    const Code_Phillips_Texture = `
      @group(0) @binding(0) var samplerSrc: sampler;
      @group(0) @binding(1) var src: texture_2d<f32>;
      @group(0) @binding(2) var phillipsTexture: texture_storage_2d<rgba32float, write>;
      @group(0) @binding(3) var<uniform> uTime: f32;

      @group(1) @binding(0) var samplerFft: sampler;
      @group(1) @binding(1) var fftK: texture_2d<f32>;
      
      // 复数乘法
      fn complexMultiply(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
        var result: vec2<f32>;
        result.x = a.x * b.x - a.y * b.y;  // 实部
        result.y = a.x * b.y + a.y * b.x;  // 虚部
        return result;
      }

      // 色散关系函数
      fn dispersion(k: vec2<f32>) -> f32 {
        return sqrt(9.8 * length(k));
      }
 
      @compute @workgroup_size(1, 1, 1)
      fn main(
        @builtin(global_invocation_id) global_id: vec3<u32>,
        @builtin(local_invocation_id) local_id: vec3<u32>
      ) {
        let src_dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
        let src_texture: vec4<f32> = textureSampleLevel(src, samplerSrc, vec2<f32>(global_id.xy) / src_dims, 0.0);

        let fft_dims: vec2<f32> = vec2<f32>(textureDimensions(fftK, 0));
        let fft_texture: vec4<f32> = textureSampleLevel(fftK, samplerFft, vec2<f32>(global_id.xy) / fft_dims, 0.0);

        var color = vec4<f32>(0.0, 0.0, 0.0, 1.0);

        let k = vec2<f32>(fft_texture.r, fft_texture.g);

        let omega = dispersion(k) * uTime;
        let c = cos(omega);
        let s = sin(omega);
        let h0k = src_texture.rg;
        let h0k_conj = src_texture.ba;

        let h1 = complexMultiply(h0k, vec2<f32>(c, s));
        let h2 = complexMultiply(h0k_conj, vec2<f32>(c, -s));

        color.r = h1.r + h2.r;
        color.g = h1.g + h2.g;

        textureStore(phillipsTexture, vec2<i32>(global_id.xy), color);
      }
    `

    /** 第二步 计算 row ，得到 textureRow */
    const Code_Row = `
      @group(0) @binding(0) var samplerSrc: sampler;
      @group(0) @binding(1) var src: texture_2d<f32>;
      @group(0) @binding(2) var rowTexture: texture_storage_2d<rgba32float, write>;

      @group(1) @binding(0) var samplerW: sampler;
      @group(1) @binding(1) var wData: texture_2d<f32>;

      var<workgroup> sharedData: array<vec4<f32>, ${IMG_SIZE}>;

      @compute @workgroup_size(${workGroupSizeRowX}, ${workGroupSizeRowY}, 1)

      fn main(
        @builtin(global_invocation_id) global_id: vec3<u32>,
        @builtin(local_invocation_id) local_id: vec3<u32>
      ) {

        let src_dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
        let src_texture: vec4<f32> = textureSampleLevel(src, samplerSrc, vec2<f32>(global_id.xy) / src_dims, 0.0);

        let w_dims: vec2<f32> = vec2<f32>(textureDimensions(wData, 0));
        let w_texture: vec4<f32> = textureSampleLevel(wData, samplerW, vec2<f32>(global_id.xy) / w_dims, 0.0);

        var color = vec4<f32>(0.0, 0.0, 0.0, 1.0);

        // 该行存入到 sharedData 中
        for(var i = 0u; i < ${IMG_SIZE}u; i++) {
          sharedData[i] = textureLoad(src, vec2<i32>(i, global_id.y), 0);
        }

        // 开始计算
        var temp: array<vec4<f32>, ${IMG_SIZE}> = [];
        let totalStep = ${totalStep}u;

        // 进行 log2(128) 7次循环，每次循环获取 W
        // for(var i = 0; i < totalStep; i++) {
        //   for(var j = 0; j < i; j++) {
        //   }
        // }


        workgroupBarrier();
      }
    `

    /** 第三步 计算 col ，得到 textureCol */
    const Code_Col = `
      @group(0) @binding(0) var samplerSrc: sampler;
      @group(0) @binding(1) var src: texture_2d<f32>;
      @group(0) @binding(2) var colTexture: texture_storage_2d<rgba32float, write>;

      @group(1) @binding(0) var samplerW: sampler;
      @group(1) @binding(1) var wData: texture_2d<f32>;

      var<workgroup> sharedData: array<vec4<f32>, ${IMG_SIZE}>;

      @compute @workgroup_size(${workGroupSizeColX}, ${workGroupSizeColY}, 1)
    `

    // 这里对uv进行细节优化，因为都是方块，一块一块的像素
    Effect.ShadersStore['seaVertexShader'] = `
      precision highp float;
      
      attribute vec3 position;
      attribute vec2 uv;

      uniform mat4 worldViewProjection;
      uniform sampler2D uSampler;

      varying vec3 vColor;

      void main() {
        vec4 baseColor = texture(uSampler, uv);

        vec3 color = vec3(0.0, 0.0, 0.0);

        vColor = color;

        gl_Position = worldViewProjection * vec4(position, 1.0);
      }
    `

    Effect.ShadersStore['seaFragmentShader'] = `
      precision highp float;

      varying vec3 vColor;

      void main() {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `

    const phillips = MeshBuilder.CreateGround('phillips', { width: IMG_SIZE, height: IMG_SIZE, subdivisions: IMG_SIZE }, scene)
    const phillipsTexture = RawTexture.CreateRGBAStorageTexture(
      null, 
      IMG_SIZE, 
      IMG_SIZE, 
      scene, 
      false, 
      false, 
      Texture.BILINEAR_SAMPLINGMODE, 
      Constants.TEXTURETYPE_FLOAT
    )

    const finalSea = MeshBuilder.CreateGround('finalSea', { width: IMG_SIZE, height: IMG_SIZE, subdivisions: IMG_SIZE }, scene)
    // const finalSeaTexture = RawTexture.CreateRGBAStorageTexture(
    //   null, 
    //   IMG_SIZE, 
    //   IMG_SIZE, 
    //   scene, 
    //   false, 
    //   false, 
    //   Texture.BILINEAR_SAMPLINGMODE, 
    //   Constants.TEXTURETYPE_FLOAT
    // )

    const shaderPhillips = new ComputeShader(
      'shaderPhillips', 
      engine, 
      { computeSource: Code_Phillips_Texture }, 
      { bindingsMapping: {
          'src': { group: 0, binding: 1 },
          'phillipsTexture': { group: 0, binding: 2 },
          'uTime': { group: 0, binding: 3 },
          'fftK': { group: 1, binding: 1 },
        }
      }
    )

    const shaderRow = new ComputeShader(
      'shaderRow', 
      engine, 
      { computeSource: Code_Row }, 
      { bindingsMapping: {
          'src': { group: 0, binding: 1 },
          'rowTexture': { group: 0, binding: 2 },
          'wData': { group: 1, binding: 1 },
        }
      }
    )

    // const shaderCol = new ComputeShader(
    //   'shaderCol', 
    //   engine, 
    //   { computeSource: Code_Col }, 
    //   { bindingsMapping: {
    //       'src': { group: 0, binding: 1 },
    //       'colTexture': { group: 0, binding: 2 },
    //       'wData': { group: 1, binding: 1 },
    //     }
    //   }
    // )

    // const seaShader = new ShaderMaterial(
    //   'sea',
    //   scene, {
    //     vertex: 'sea',
    //     fragment: 'sea',
    //   }, {
    //     attributes: ['position', 'uv'],
    //     uniforms: ['worldViewProjection', 'uSampler'],
    //     samplers: ['uSampler'],
    //     needAlphaBlending: true,
    //   },
    // )
    // seaShader.setTexture('uSampler', finalSeaTexture)

    const uniformBuffer = new UniformBuffer(engine)
    uniformBuffer.addUniform('uTime', 4)

    shaderPhillips.setTexture('src', rawTextureFft)
    shaderPhillips.setTexture('fftK', rawTextureFftK)
    shaderPhillips.setStorageTexture('phillipsTexture', phillipsTexture)

    const mat = new StandardMaterial('mat', scene)
    mat.diffuseTexture = phillipsTexture
    phillips.material = mat
    phillips.position = new Vector3(0, 0, IMG_SIZE * 2 + 20)


   

    scene.registerBeforeRender(async() => {
      uTime += 0.02
      uniformBuffer.updateFloat('uTime', uTime)
      uniformBuffer.update()

      shaderPhillips.setUniformBuffer('uTime', uniformBuffer)
      
      await shaderPhillips.dispatchWhenReady(phillipsTexture.getSize().width, phillipsTexture.getSize().height, 1)
    })
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
  const { rawTextureX, rawTextureY, rawTextureZ, rawTextureFft, rawTextureFftK, rawTextureW } = createXyzTexture(scene)
  createXyzPlane({ rawTextureX, rawTextureY, rawTextureZ })
  ifftComputed(rawTextureFft, rawTextureFftK, rawTextureW)
  runAnimate()

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