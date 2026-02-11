<template>
  <div>
    <div>以下是参考</div>
    <div>
      <a href="https://zhuanlan.zhihu.com/p/501039307">体积云效果的实现，游戏世界的云合雾集</a>
    </div>
    <div>
      <a href="https://zhuanlan.zhihu.com/p/622654876">体积云渲染（Volumetric Clouds），技术美术教程</a>
    </div>
    <div>
      <a href="https://zhuanlan.zhihu.com/p/503274042">小白也能看懂的Ray March体积云</a>
    </div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="cloud" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  HemisphericLight,
  MeshBuilder,
  Color4,
  ArcRotateCamera,
  Vector3,
  Color3,
  RawTexture3D,
  Texture,
  Effect,
  ShaderMaterial,
  StandardMaterial,
  Material,
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

const vertex = `
  precision highp float;
  
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 worldViewProjection;
  uniform mat4 world;
  
  varying vec3 vWorld;
  varying vec2 vUV;
  
  void main() {
    // position：顶点在模型局部空间中的坐标
    // world：世界变换矩阵 (World Matrix / Model Matrix)，将顶点从模型空间转换到世界空间。平移、旋转、缩放
    // worldPos：顶点变换到世界空间后的坐标
    vec4 worldPos = world * vec4(position, 1.0);
    gl_Position = worldViewProjection * vec4(position, 1.0);
    
    vWorld = worldPos.xyz;
    vUV = uv;
  }
`

const fragment = `
  precision highp float;
  precision highp sampler3D;
  
  varying vec3 vWorld;
  varying vec2 vUV;
  
  uniform sampler3D worleyTexture;
  uniform vec3 cameraPosition;
  uniform float uTime;
  uniform float uCloudDensity;
  uniform vec3 uSunDirection;
  uniform vec3 uCloudColor;
  uniform vec3 uBoxMin;
  uniform vec3 uBoxMax;
  
  // boxMin 和 boxMax 是 AABB（轴对齐包围盒，Axis-Aligned Bounding Box） 的两个对角顶点，用来定义一个与坐标轴对齐的长方体区域。
  // 				 Y
  // 				 ↑
  // 				 |
  // 				 ┌───────────────● boxMax (右上后)
  // 				/|              /|
  // 			 / |             / |
  // 			/  |            /  |
  // 		 /   |           /   |
  // 		┌────┼──────────┐    |
  // 		│    │          │    |
  // 		│    │          │    |
  // 		│    │          │    |
  // 		│    └──────────┼────┘----X
  // 		│   /           │   /
  // 		│  /            │  /
  // 		│ /             │ /
  // 		│/              │/
  // 		●───────────────┘
  // 	 /↑
  // 	Z	boxMin (左下前)
  // 
  // 		X → 右
  // 		Z → 出屏幕
  // ---------------------------------------------------------------------
  // ro：射线原点（Ray Origin）
  // boxMin/boxMax：AABB 的最小/最大顶点
  // ---------------------------------------------------------------------
  // 逐步拆解
  // 第一步：tMin, tMax（原始交点）
  // 				vec3 tMin = (boxMin - ro) * invRd;  // 到"左下前"3个平面的t值
  // 				vec3 tMax = (boxMax - ro) * invRd;  // 到"右上前"3个平面的t值
  // 		问题：不知道哪个是"进入"，哪个是"离开"（取决于射线方向）
  // 第二步：t1, t2（排序后）
  // 				vec3 t1 = min(tMin, tMax);  // 每个轴的"进入"（较小的t）
  // 				vec3 t2 = max(tMin, tMax);  // 每个轴的"离开"（较大的t）
  // 		解决：统一了方向，t1一定是进入，t2一定是离开
  // 第三步：dEnter, dExit（最终区间）
  // 				float dEnter = max(t1.x, t1.y, t1.z);  // 最晚进入 = 真正进入
  // 				float dExit  = min(t2.x, t2.y, t2.z);  // 最早离开 = 真正离开
  // 		解决：三个轴的区间求交集，得到3D盒子的相交区间
  // X轴:  tMin.x=8  tMax.x=2  ──→  t1.x=2(进)  t2.x=8(离)
  // Y轴:  tMin.y=1  tMax.y=5  ──→  t1.y=1(进)  t2.y=5(离)  
  // Z轴:  tMin.z=6  tMax.z=3  ──→  t1.z=3(进)  t2.z=6(离)
  //                               ↓
  //                          dEnter = max(2,1,3) = 3
  //                          dExit  = min(8,5,6) = 5
  // 最终相交区间: [3, 5]
  // ---------------------------------------------------------------------
  // 为什么必须分三步？
  // tMin/tMax     	计算与6个平面的原始交点
  // t1/t2	          消除方向歧义（处理射线正负方向）
  // dEnter/dExit	  三维求交（三个轴的区间交集）
  // 跳过任何一步都会错：
  // 		跳过排序：不知道哪个是进/出
  // 		跳过max/min：不知道3D空间的真正进出点
  // ---------------------------------------------------------------------
  vec2 intersectBox(vec3 ro, vec3 rd, vec3 boxMin, vec3 boxMax) {
    
    // 预计算倒数，将除法转为乘法（GPU 上 * 比 / 快）
    vec3 invRd = 1.0 / rd;
    
    // 射线-包围盒相交检测的核心数学计算
    // 计算射线到 6 个包围盒平面的距离参数 d
    // ---------------------------------------
    // 射线方程回顾
    // 射线上的任意点可以表示为：P(d) = ro + rd * d；其中 d 是沿射线方向的距离参数。
    // ---------------------------------------
    // 为什么要算这个？
    // 包围盒有 6 个面，对应 3 组平行平面：
    // X轴: x = boxMin.x  和  x = boxMax.x
    // Y轴: y = boxMin.y  和  y = boxMax.y  
    // Z轴: z = boxMin.z  和  z = boxMax.z
    // 求解射线与每个平面的交点：
    // 以 X 轴的 min 平面为例：
    // ro.x + rd.x * d = boxMin.x
    // 		=> d = (boxMin.x - ro.x) / rd.x
    // 代码中正是这个计算，只是用乘法优化了除法：
    // dMin.x = (boxMin.x - ro.x) * invRd.x  // 等价于 (boxMin.x - ro.x) / rd.x
    // ---------------------------------------
    // 						boxMax
    //          ┌────────┐
    //         /│       /│
    //        / │      / │
    //       ┌──┼─────┐  │    rd
    //       │  └─────┼──┘   ↗
    //       │ /boxMin│ /   /
    //       │/       │/   ro
    //       └────────┘
    // dMin 存储射线到达 "左下前" 三个平面 的 d 值
    // dMax 存储射线到达 "右上后" 三个平面 的 d 值
    // ---------------------------------------
    // 这两行把 3D 相交问题分解为 3 个独立的 1D 相交问题，计算出射线与 6 个平面相交的"候选"距离值。
    // ---------------------------------------
    vec3 dMin = (boxMin - ro) * invRd; // 射线与 min 平面（boxMin.x, boxMin.y, boxMin.z）相交的 d 值
    vec3 dMax = (boxMax - ro) * invRd; // 射线与 max 平面（boxMax.x, boxMax.y, boxMax.z）相交的 d 值
    
    // 由于算出的 dMin 和 dMax 不一定真的对应"进入"和"离开"：
    // 		rd.x > 0	dMin.x 是进入 X 轴， dMax.x 是离开
    // 		rd.x < 0	dMin.x 是离开 X 轴， dMax.x 是进入
    // 所以后续需要：
    vec3 d1 = min(dMin, dMax); // 真正的"进入"距离
    vec3 d2 = max(dMin, dMax); // 真正的"离开"距离
    
    // 这两行是 射线-包围盒相交检测的最终判定逻辑，核心思想是：
    // 		射线必须同时穿过三个轴的"进入区间"，且在任意一个轴"离开"之前就完成了相交
    // ---------------------------------------
    // 含义
    // 		射线真正"进入"盒子的时间 = 最晚进入的那个轴
    // ---------------------------------------
    // 为什么用 max？
    // 		射线要同时在 X、Y、Z 三个方向都进入 slab【面板】，才算进入盒子
    // 假设：
    // 		X 轴：d=1 时进入
    // 		Y 轴：d=2 时进入
    // 		Z 轴：d=0 时进入
    // 射线在 d=2 时才真正进入 3D 盒子（此时 X 和 Z 已经在里面了，Y 刚进来）
    // 射线在 一个轴上"进入" = 只是进入了那个方向的"两片平行平面之间"
    // 射线要 三个轴都"进入" = 才真正在盒子内部
    // 类比：三个人要同时到场才能开会，会议开始时间 = 最晚到的人到达时间
    // ---------------------------------------
    float dEnter = max(max(d1.x, d1.y), d1.z);
    // 与上同理
    // 类比：三个人开会，会议结束时间 = 最早离开的人时间
    float dExit = min(min(d2.x, d2.y), d2.z);
    
    // dEnter <= dExit	区间有效	射线确实穿过盒子
    // dExit < 0	无交点	整个盒子在射线后方
    // dEnter < 0 && dExit > 0	有交点	射线起点在盒子内部
    // dEnter > dExit	无交点	射线错过盒子（三个轴区间无交集）
    return vec2(dEnter, dExit);
  }
  
  vec3 worldToTexCoord(vec3 worldPos, vec3 boxMin, vec3 boxMax) {
    return (worldPos - boxMin) / (boxMax - boxMin);
  }
  
  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    return (1.0 - g2) / (4.0 * 3.14159 * pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5));
  }
  
  void main() {
    vec3 color = vec3(0.0);
    vec3 ro = cameraPosition;
    // 射线方向 = 像素世界坐标 - 相机世界坐标
    vec3 rd = normalize(vWorld - cameraPosition);
    
    // 计算一次相交区间
    vec2 intersect = intersectBox(ro, rd, uBoxMin, uBoxMax);
    float dEnter = intersect.x;
    float dExit = intersect.y;
    
    // 无效则提前退出
    if (dExit < 0.0 || dEnter > dExit) {
      gl_FragColor = vec4(0.0);
      return;
    }
    
    // 限制步进在box内
    dEnter = max(dEnter, 0.0);
    
    // 光线步进只在这个区间内进行
    float maxStep = 128.0;
    float stepSize = (dExit - dEnter) / maxStep;
    vec3 accumulatedColor = vec3(0.0); // 累积颜色
    float transmittance = 1.0; // 透射率
    
    for (float i = 0.0; i < maxStep; i+=1.0) {
      float d = dEnter + float(i) * stepSize;
      vec3 currentPos = ro + rd * d;
      
      // 现在 worldToTexCoord 已经定义，可以正常调用
      vec3 texCoord = worldToTexCoord(currentPos, uBoxMin, uBoxMax);
      vec3 animatedCoord = texCoord + vec3(uTime * 0.2, uTime * 0.1, 0.0);
      vec4 noiseSample = texture(worleyTexture, animatedCoord);
      
      float lowFreq = noiseSample.r;
      float highFreq = noiseSample.g * 0.5;
      float densityNoise = lowFreq - highFreq;
      float density = max(0.0, densityNoise - 0.3) * uCloudDensity;
      
      vec3 edgeFactor = smoothstep(0.0, 0.1, texCoord) * smoothstep(1.0, 0.9, texCoord);
      density *= edgeFactor.x * edgeFactor.y * edgeFactor.z;
      
      if (density > 0.001) {
        float lightTransmittance = exp(-density * 2.0);
        float cosTheta = dot(rd, normalize(uSunDirection));
        float phase = hgPhase(cosTheta, 0.3);
        
        vec3 scattering = uCloudColor * phase * density * stepSize * transmittance;
        accumulatedColor += scattering;
        
        float stepOpticalDepth = density * stepSize * 2.0;
        transmittance *= exp(-stepOpticalDepth);
        
        if (transmittance < 0.01) break;
      }
    }
    
    // 添加背景色（天空渐变）
    vec3 skyColor = mix(vec3(0.3, 0.5, 0.8), vec3(0.6, 0.8, 1.0), rd.y * 0.5 + 0.5);
    vec3 finalColor = skyColor * transmittance + accumulatedColor;
    
    // 增强对比度，让云更白
    finalColor = 1.0 - pow(finalColor, vec3(0.8)); // 伽马校正提亮
    
    // 计算最终 alpha（基于累积密度）
    float finalAlpha = 1.0 - transmittance;
    
    gl_FragColor = vec4(finalColor, finalAlpha);
  }
  
`

const generateWorleyNoise3D = (width: any, height: any, depth: any) => {
  const size = width * height * depth * 4

  const data = new Uint8Array(size)

  function randomF(p: any) {
    return ((Math.sin(p[0] * 12.9898 + p[1] * 78.233 + p[2] * 53.53) * 43758.5453) % 1 + 1) % 1
  }

  function randomV3(p: any) {
    return [
      randomF([p[0], p[1], p[2]]),
      randomF([p[0] + 1.0, p[1] + 2.0, p[2] + 3.0]),
      randomF([p[0] + 4.0, p[1] + 5.0, p[2] + 6.0])
    ]
  }

  const gridSize = 4

  const featurePoints = []

  for (let z = 0; z < gridSize; z++) { // z: 0, 1, 2, 3
    for (let y = 0; y < gridSize; y++) { // y: 0, 1, 2, 3
      for (let x = 0; x < gridSize; x++) { // x: 0, 1, 2, 3
        const seed = [x * 1.5, y * 1.5, z * 1.5]

        const offset = randomV3(seed)

        featurePoints.push({
          x: x + offset[0],
          y: y + offset[1],
          z: z + offset[2]
        })
      }
    }
  }

  let index = 0
  for (let z = 0; z < depth; z++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {

        const u = (x / width) * gridSize
        const v = (y / height) * gridSize
        const w = (z / depth) * gridSize

        let minDist = 999999.0

        for (let fp of featurePoints) {

          let dx = Math.abs(u - fp.x)
          let dy = Math.abs(v - fp.y)
          let dz = Math.abs(w - fp.z)

          if (dx > gridSize * 0.5) {
            dx = gridSize - dx
          }
          if (dy > gridSize * 0.5) dy = gridSize - dy
          if (dz > gridSize * 0.5) dz = gridSize - dz

          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
          if (dist < minDist) {
            minDist = dist
          }
        }

        // 归一化距离并反转（距离越近越亮/密度越高）
        // 使用 gridSize * sqrt(3)/2 作为最大可能距离（体对角线的一半）
        const maxPossibleDist = gridSize * 0.866 // sqrt(3)/2 ≈ 0.866
        const normalizedDist = Math.min(minDist / (gridSize * 0.8), 1.0)

        // 反转：特征点附近密度高（云），远离密度低（透明）
        const density = 1.0 - normalizedDist

        // 可选：应用曲线调整对比度
        const contrastedDensity = Math.pow(density, 2.0)

        const gray = Math.floor(contrastedDensity * 255)

        data[index++] = gray
        data[index++] = gray
        data[index++] = gray
        data[index++] = 255
      }
    }
  }

  return data
}


let sceneResources: any, adt: any

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
  const ele = document.getElementById("cloud") as any

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

  const scene: any = new Scene(engine)

  // 需要使用右手系，因为shader的boxMin和boxMax
  scene.useRightHandedSystem = true

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 1
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(50, 50, 50))

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


  const createCloud = () => {
    const textureSize = 32
    const noiseData = generateWorleyNoise3D(textureSize, textureSize, textureSize)
    const worleyTexture3D = new RawTexture3D(
      noiseData,
      textureSize,
      textureSize,
      textureSize,
      Engine.TEXTUREFORMAT_RGBA,
      scene,
      false,
      false,
      Texture.TRILINEAR_SAMPLINGMODE,
      Engine.TEXTURETYPE_UNSIGNED_BYTE
    )
    worleyTexture3D.wrapU = Texture.WRAP_ADDRESSMODE
    worleyTexture3D.wrapV = Texture.WRAP_ADDRESSMODE
    worleyTexture3D.wrapR = Texture.WRAP_ADDRESSMODE

    const box = MeshBuilder.CreateBox('box', {
      size: 5,
    }, scene)

    Effect.ShadersStore['worleyNoiseVertexShader'] = vertex
    Effect.ShadersStore['worleyNoiseFragmentShader'] = fragment
    const worleyNoiseShader = new ShaderMaterial('worleyNoise', scene, {
      vertex: 'worleyNoise',
      fragment: 'worleyNoise'
    }, {
      attributes: ['position', 'uv'],
      uniforms: ['worldViewProjection', 'world', 'worleyTexture', 'cameraPosition', 'uTime', 'uBoxMin',
        'uBoxMax', 'uCloudDensity', 'uSunDirection', 'uCloudColor'
      ],
      samplers: ['worleyTexture'],
    })

    worleyNoiseShader.transparencyMode = Material.MATERIAL_ALPHABLEND
    worleyNoiseShader.backFaceCulling = false
    worleyNoiseShader.needDepthPrePass = true

    worleyNoiseShader.setTexture('worleyTexture', worleyTexture3D)
    worleyNoiseShader.setFloat('time', 0)
    worleyNoiseShader.setFloat('uCloudDensity', 3.0)
    worleyNoiseShader.setVector3('uSunDirection', new Vector3(10, 10, 10))
    worleyNoiseShader.setColor3('uCloudColor', new Color3(1.0, 0.95, 0.9))
    worleyNoiseShader.setVector3('uBoxMin', box.getBoundingInfo().boundingBox.minimumWorld)
    worleyNoiseShader.setVector3('uBoxMax', box.getBoundingInfo().boundingBox.maximumWorld)
    worleyNoiseShader.setVector3('cameraPosition', scene.activeCamera.position)

    box.material = worleyNoiseShader


    const sphere: any = MeshBuilder.CreateSphere('sphere', {
      diameter: 2,
    }, scene)
    sphere.material = new StandardMaterial('', scene)
    sphere.material.emissiveColor = new Color3(1, 0, 0)

    //-------------------------------------------
    scene.registerBeforeRender(() => {
      const time = performance.now() * 0.001
      worleyNoiseShader.setFloat('uTime', time)
      worleyNoiseShader.setVector3('uBoxMin', box.getBoundingInfo().boundingBox.minimumWorld)
      worleyNoiseShader.setVector3('uBoxMax', box.getBoundingInfo().boundingBox.maximumWorld)
      worleyNoiseShader.setVector3('cameraPosition', scene.activeCamera.position)
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
  runAnimate()
  createCloud()

  scene.registerBeforeRender(function() {
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

<style lang='scss' scoped>

</style>