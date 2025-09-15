<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderSea2" class="stage"></canvas>
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

const fps = ref(0)
const isRunning = ref(false)

let sceneResources, adt
let uTime = 0.0

const IMG_SIZE = 128
const half = IMG_SIZE / 2
const logN = Math.log2(IMG_SIZE)
const workGroupSizeRowX = IMG_SIZE
const workGroupSizeRowY = 1
const workGroupSizeColX = 1
const workGroupSizeColY = IMG_SIZE
const wData = new Float32Array(IMG_SIZE * 4)

const Code_Phillips = `
  const TWO_PI: f32 = 6.283185307179586;

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
  
  // 快速随机函数
  fn randValueFast(uv: vec2<f32>, seed: f32) -> f32 {
    return fract(sin(dot(uv, vec2<f32>(12.9898, 78.12345)) + seed) * 43759.54321);
  }
  
  // 高斯图
  fn gauss(uv: vec2<f32>) -> vec2<f32> {
    var u1 = randValueFast(uv, 1753.21);
    var u2 = randValueFast(uv, 3547.15);
    
    if(u1 < 0.00001) {
      u1 = 0.00001;
    }
    
    let mag = sqrt(-2.0 * log(u1));
    let ang = TWO_PI * u2;
    
    return vec2<f32>(mag * cos(ang), mag * sin(ang));
  }
  
  // phillips图谱
  fn phillips(k: vec2<f32>) -> f32 {
    let windDir = vec2<f32>(1.0, -1.0); // 风向向量
    let windV = 10.3; // 风速
    let A = 10.5; // 振幅参数
    let G = 9.8;
    
    let L = windV * windV / G; // 最大波长
    let L2 = L * L;
    
    let kLen = max(0.0001, length(k));
    let kLen2 = kLen * kLen;
    let kLen4 = kLen2 * kLen2;
    
    var kNorm = vec2<f32>(0.0, 0.0);
    if(k.x == 0 && k.y == 0) {
      kNorm = vec2<f32>(0.0, 0.0);
    } else {
      kNorm = normalize(k);
    }
    let wNorm = normalize(windDir);
    let dotNormKW = dot(kNorm, wNorm);
    
    var phi = A * exp(-1.0 / (kLen2 * L2)) / kLen4; // 基础 Phillips 谱
    
    phi *= dotNormKW * dotNormKW; // 风向对齐项
    
    if (dotNormKW > 0.0) { // 仅保留与风向同方向的波
      phi *= windV;
    }
    
    return phi;
  }
  
  @group(0) @binding(1) var phillipsTexture: texture_storage_2d<rgba16float, write>;
  @group(0) @binding(2) var<uniform> uTime: f32;
  @compute @workgroup_size(8, 8, 1)
  fn main(
    @builtin(global_invocation_id) global_id: vec3<u32>
  ) {
    var color = vec4<f32>(0.0, 0.0, 0.0, 1.0);
    
    let x = f32(global_id.x);
    let y = f32(global_id.y);
    
    let gaussValue1 = gauss(vec2<f32>(x + 3.2, y + 5.3));
    let gaussValue2 = gauss(vec2<f32>(x + 7.2, y + 15.3));
    
    let size = f32(${IMG_SIZE});
    let nx = x - size / 2.0;
    let ny = y - size / 2.0;
    
    let k = vec2<f32>(TWO_PI * nx / size, TWO_PI * ny / size);
    
    let phillipsRes1 = sqrt(phillips(k) * 0.5);
    let h0k = vec2<f32>(gaussValue1.x * phillipsRes1, gaussValue2.y * phillipsRes1);
    
    let phillipsRes2 = sqrt(phillips(-1.0 * k) * 0.5);
    let h0kConj = vec2<f32>(gaussValue1.x * phillipsRes2, -1.0 * gaussValue2.y * phillipsRes2);
    
    let omega = dispersion(k) * uTime;
    let c = cos(omega);
    let s = sin(omega);
    
    let h1 = complexMultiply(h0k, vec2<f32>(c, s));
    let h2 = complexMultiply(h0kConj, vec2<f32>(c, -1.0 * s));
    
    let hTildeY = vec2<f32>(h1.x + h2.x, h1.y + h2.y); // 这个是y的
    
    // 下面是计算x和z的
    var kLen = length(k);
    if(kLen < 0.0001) {
      kLen = 0.0001;
    }
    let maxK = vec2<f32>(k.x / kLen, k.y / kLen);
    let hTildeX = complexMultiply(vec2<f32>(0, -1 * maxK.x), hTildeY);
    let hTildeZ = complexMultiply(vec2<f32>(0, -1 * maxK.y), hTildeY);
    
    
    // y的color
    color.r = hTildeY.r;
    color.g = hTildeY.g;
    
    // x的color
    // color.r = hTildeX.r;
    // color.g = hTildeX.g;
    
    // z的color
    // color.r = hTildeZ.r;
    // color.g = hTildeZ.g;
    
    textureStore(phillipsTexture, vec2<i32>(global_id.xy), color);
  }
`

const Code_Row = `
  fn complexMultiply(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    var result: vec4<f32>;
    result.x = a.x * b.x - a.y * b.y;  // 实部
    result.y = a.x * b.y + a.y * b.x;  // 虚部
    return result;
  }
  
  @group(0) @binding(0) var samplerSrc: sampler;
  @group(0) @binding(1) var src: texture_2d<f32>;
  @group(0) @binding(2) var rowTexture: texture_storage_2d<rgba16float, write>;
  @group(1) @binding(0) var samplerW: sampler;
  
  @group(1) @binding(1) var wData: texture_2d<f32>;
  
  var<workgroup> sharedData: array<vec4<f32>, ${IMG_SIZE}u>;
  var<workgroup> tempData: array<vec4<f32>, ${IMG_SIZE}u>;
  
  @compute @workgroup_size(${workGroupSizeRowX}, ${workGroupSizeRowY}, 1)
  fn main(
    @builtin(global_invocation_id) global_id: vec3<u32>,
    @builtin(local_invocation_id) local_id: vec3<u32>
  ) {
  
    let src_dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
    let src_texture: vec4<f32> = textureSampleLevel(src, samplerSrc, vec2<f32>(global_id.xy) / src_dims, 0.0);
  
    let w_dims: vec2<f32> = vec2<f32>(textureDimensions(wData, 0));
    let w_texture: vec4<f32> = textureSampleLevel(wData, samplerW, vec2<f32>(global_id.xy) / w_dims, 0.0);
  
    // 该行存入到 sharedData 中
    // 使用 global_id.x 作为索引，因为要存储行数据
    sharedData[global_id.x] = textureLoad(src, vec2<i32>(i32(global_id.x), i32(global_id.y)), 0);
  
    
    // 开始计算
    for (var m = 0u; m < ${logN}u; m++) {
      workgroupBarrier(); // 同步点①：确保所有线程完成上一轮数据写入
  
      tempData[global_id.x] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
      
      workgroupBarrier(); // 同步点②：确保初始化完成
  
      var inputIndex = 0u;
      var step = 1u << m; // 等于pow
      var blockSize = 1u << (m + 1u);
      var blockNum = ${IMG_SIZE}u / blockSize;
      var kFor = blockSize / 2u;
  
      for (var n = 0u; n < blockNum; n++) {
        for(var k = 0u; k < kFor; k++) {
          var inputData1 = sharedData[inputIndex];
          var inputData2 = sharedData[inputIndex + ${half}u];
  
          var outputIndex1 = 2u * (inputIndex - (inputIndex % (1u << m))) + (inputIndex % (1u << m));
          var outputIndex2 = outputIndex1 + step;
  
          var indexW = k * (1u << (${logN}u - m - 1u));
          var w = textureLoad(wData, vec2<i32>(i32(indexW), 0), 0);
  
          var p1 = inputData1;
          var p2 = complexMultiply(inputData2, w);
  
          tempData[outputIndex1] = p1 + p2;
          tempData[outputIndex2] = p1 - p2;
  
          workgroupBarrier(); // 同步点③：确保所有蝶形运算完成
  
          inputIndex = inputIndex + 1u;
        }
      }
  
      workgroupBarrier(); // 同步点④：确保所有运算完成
  
      sharedData[global_id.x] = tempData[global_id.x];
  
      workgroupBarrier(); // 同步点⑤：确保交换完成
  
    }
  
    // 使用 clamp 函数，将值限制在 [0, 1] 范围内
    // var color = vec4<f32>(clamp(sharedData[global_id.x].r, 0.0, 1.0), clamp(sharedData[global_id.x].g, 0.0, 1.0), 0.0, 1.0);
    var color = vec4<f32>(sharedData[global_id.x].r, sharedData[global_id.x].g, 0.0, 1.0);
  
    textureStore(rowTexture, vec2<i32>(global_id.xy), color);
  }
`

const Code_Col = `
  fn complexMultiply(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    var result: vec4<f32>;
    result.x = a.x * b.x - a.y * b.y;  // 实部
    result.y = a.x * b.y + a.y * b.x;  // 虚部
    return result;
  }
  
  @group(0) @binding(0) var samplerSrc: sampler;
  @group(0) @binding(1) var src: texture_2d<f32>;
  @group(0) @binding(2) var colTexture: texture_storage_2d<rgba32float, write>;
  
  @group(1) @binding(0) var samplerW: sampler;
  @group(1) @binding(1) var wData: texture_2d<f32>;
  
  var<workgroup> sharedData: array<vec4<f32>, ${IMG_SIZE}u>;
  var<workgroup> tempData: array<vec4<f32>, ${IMG_SIZE}u>;
  
  @compute @workgroup_size(${workGroupSizeColX}, ${workGroupSizeColY}, 1)
  fn main(
    @builtin(global_invocation_id) global_id: vec3<u32>,
    @builtin(local_invocation_id) local_id: vec3<u32>
  ) {
    let src_dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
    let src_texture: vec4<f32> = textureSampleLevel(src, samplerSrc, vec2<f32>(global_id.xy) / src_dims, 0.0);
  
    let w_dims: vec2<f32> = vec2<f32>(textureDimensions(wData, 0));
    let w_texture: vec4<f32> = textureSampleLevel(wData, samplerW, vec2<f32>(global_id.xy) / w_dims, 0.0);
  
    // 该列存入到 sharedData 中
    // 使用 global_id.y 作为索引，因为要存储列数据
    sharedData[global_id.y] = textureLoad(src, vec2<i32>(i32(global_id.x), i32(global_id.y)), 0);
  
  
    // 开始计算
    for (var m = 0u; m < ${logN}u; m++) {
      workgroupBarrier(); // 同步点①：确保所有线程完成上一轮数据写入
  
      tempData[global_id.y] = vec4<f32>(0.0, 0.0, 0.0, 0.0);
      
      workgroupBarrier(); // 同步点②：确保初始化完成
  
      var inputIndex = 0u;
      var step = 1u << m; // 等于pow
      var blockSize = 1u << (m + 1u);
      var blockNum = ${IMG_SIZE}u / blockSize;
      var kFor = blockSize / 2u;
  
      for (var n = 0u; n < blockNum; n++) {
        for(var k = 0u; k < kFor; k++) {
          var inputData1 = sharedData[inputIndex];
          var inputData2 = sharedData[inputIndex + ${half}u];
  
          var outputIndex1 = 2u * (inputIndex - (inputIndex % (1u << m))) + (inputIndex % (1u << m));
          var outputIndex2 = outputIndex1 + step;
  
          var indexW = k * (1u << (${logN}u - m - 1u));
          var w = textureLoad(wData, vec2<i32>(i32(indexW), 0), 0);
  
          var p1 = inputData1;
          var p2 = complexMultiply(inputData2, w);
  
          tempData[outputIndex1] = p1 + p2;
          tempData[outputIndex2] = p1 - p2;
  
          workgroupBarrier(); // 同步点③：确保所有蝶形运算完成
  
          inputIndex = inputIndex + 1u;
        }
      }
  
      workgroupBarrier(); // 同步点④：确保所有运算完成
  
      sharedData[global_id.y] = tempData[global_id.y];
  
      workgroupBarrier(); // 同步点⑤：确保交换完成
    }
  
    // 使用 clamp 函数，将值限制在 [0, 1] 范围内
    // var color = vec4<f32>(clamp(sharedData[global_id.y].r, 0.0, 1.0), clamp(sharedData[global_id.y].g, 0.0, 1.0), 0.0, 1.0);
    var color = vec4<f32>(sharedData[global_id.y].r, sharedData[global_id.y].g, 0.0, 1.0);
  
    textureStore(colTexture, vec2<i32>(global_id.xy), color);
  }
`

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
  const ele = document.getElementById("shaderSea2") as any

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
  camera.wheelPrecision = 1.5
  camera.panningSensibility = 8
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

  const createSea = () => {
    for (let i = 0; i < IMG_SIZE; i++) {
      const angle = (2 * Math.PI * i) / IMG_SIZE
      const re = Math.cos(angle)
      const im = Math.sin(angle)
      wData[i * 4] = re // re
      wData[i * 4 + 1] = im === 0 ? 0 : -1 * im // im
    }
    const rawTextureW = new RawTexture(wData, IMG_SIZE, 1, Constants.TEXTUREFORMAT_RGBA, scene, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE)

    const uniformBuffer = new UniformBuffer(engine)
    uniformBuffer.addUniform('uTime', 4)

    // phillips 相关
    const phillips = MeshBuilder.CreatePlane('phillips', { width: IMG_SIZE, height: IMG_SIZE }, scene)

    const phillipsTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_HALF_FLOAT)

    const shaderPhillips = new ComputeShader(
      'shaderPhillips',
      engine, { computeSource: Code_Phillips }, {
        bindingsMapping: {
          'phillipsTexture': { group: 0, binding: 1 },
          'uTime': { group: 0, binding: 2 },
        }
      }
    )
    shaderPhillips.setStorageTexture('phillipsTexture', phillipsTexture)
    const phillipsMat = new StandardMaterial('phillipsMat', scene)
    phillipsMat.diffuseTexture = phillipsTexture
    phillips.material = phillipsMat
    phillips.position = new Vector3(-IMG_SIZE - 20, 0, 0)
    phillips.rotation = new Vector3(Math.PI / 2, 0, 0)


    // row 相关
    const rowGround = MeshBuilder.CreatePlane('row', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const rowTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_HALF_FLOAT)
    const shaderRow = new ComputeShader(
      'shaderRow',
      engine, { computeSource: Code_Row }, {
        bindingsMapping: {
          'src': { group: 0, binding: 1 },
          'rowTexture': { group: 0, binding: 2 },
          'wData': { group: 1, binding: 1 },
        }
      }
    )
    shaderRow.setTexture('src', phillipsTexture)
    shaderRow.setTexture('wData', rawTextureW)
    shaderRow.setStorageTexture('rowTexture', rowTexture)
    const rowMat = new StandardMaterial('rowMat', scene)
    rowMat.diffuseTexture = rowTexture
    rowGround.material = rowMat
    rowGround.position = new Vector3(0, 0, 0)
    rowGround.rotation = new Vector3(Math.PI / 2, 0, 0)


    // col 相关
    const colGround = MeshBuilder.CreatePlane('col', { width: IMG_SIZE, height: IMG_SIZE }, scene)
    const colTexture = RawTexture.CreateRGBAStorageTexture(null, IMG_SIZE, IMG_SIZE, scene, false, false, Texture.NEAREST_SAMPLINGMODE, Constants.TEXTURETYPE_FLOAT)
    const shaderCol = new ComputeShader(
      'shaderCol',
      engine, { computeSource: Code_Col }, {
        bindingsMapping: {
          'src': { group: 0, binding: 1 },
          'colTexture': { group: 0, binding: 2 },
          'wData': { group: 1, binding: 1 },
        }
      }
    )
    shaderCol.setTexture('src', rowTexture)
    shaderCol.setTexture('wData', rawTextureW)
    shaderCol.setStorageTexture('colTexture', colTexture)
    const colMat = new StandardMaterial('colMat', scene)
    colMat.diffuseTexture = colTexture
    colGround.material = colMat
    colGround.position = new Vector3(IMG_SIZE + 20, 0, 0)
    colGround.rotation = new Vector3(Math.PI / 2, 0, 0)

    let add = 0


    scene.registerBeforeRender(async () => {
      add++
      uTime += 0.02
      uniformBuffer.updateFloat('uTime', uTime)
      uniformBuffer.update()

      shaderPhillips.setUniformBuffer('uTime', uniformBuffer)

      // 计算 Phillips 纹理
      await shaderPhillips.dispatchWhenReady(IMG_SIZE / 8, IMG_SIZE / 8, 1)

      // 计算 row 纹理
      await shaderRow.dispatchWhenReady(IMG_SIZE / workGroupSizeRowX, IMG_SIZE / workGroupSizeRowY, 1)

      // 计算 col 纹理
      await shaderCol.dispatchWhenReady(IMG_SIZE / workGroupSizeColX, IMG_SIZE / workGroupSizeColY, 1)
      
      // if (add > 12 && add < 14) {
      // 	const pixels = await phillipsTexture.readPixels()
      // 	console.log('phillips', pixels)
      // 	pixels.forEach((v, i) => {
      // 		if (isNaN(v)) console.log('phillips', v, i)
      // 	})
      // }

      // if (add > 20 && add < 22) {
      // 	const pixels = await rowTexture.readPixels()
      // 	console.log('row', pixels)
      // 	pixels.forEach(v => {
      // 		if (isNaN(v)) console.log('row', v)
      // 	})
      // }

      // if (add > 28 && add < 30) {
      // 	const pixels = await colTexture.readPixels()
      // 	console.log('col', pixels)
      // 	pixels.forEach(v => {
      // 		if (isNaN(v)) console.log('col', v)
      // 	})
      // }
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
  createSea()
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