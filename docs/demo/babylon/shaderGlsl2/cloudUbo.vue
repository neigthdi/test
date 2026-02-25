<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="cloudUbo" class="stage"></canvas>
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
  UniformBuffer,
  Matrix,
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

  // std140 布局对齐规则：
  // - vec4: 16字节对齐
  // - vec3: 16字节对齐（实际占用12字节，但下一个元素从16字节边界开始）
  // - float: 4字节对齐
  // - mat4: 16字节对齐，每列占16字节
  
  // UBO 声明 - 包含高频更新的矩阵数据
  layout(std140) uniform SceneData {
    mat4 worldViewProjection;
    mat4 world;
    vec3 cameraPosition;
    float uTime;
    vec3 uBoxMin;
    float uCloudDensity;
    vec3 uBoxMax;
    float _padding1;
    vec3 uSunDirection;
    float _padding2;
    vec3 uCloudColor;
    float _padding3;
  };
  
  varying vec3 vWorld;
  varying vec2 vUV;
  
  void main() {
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

  // std140 布局对齐规则：
  // - vec4: 16字节对齐
  // - vec3: 16字节对齐（实际占用12字节，但下一个元素从16字节边界开始）
  // - float: 4字节对齐
  // - mat4: 16字节对齐，每列占16字节
  
  // UBO 声明 - 必须与 vertex shader 中的布局一致
  layout(std140) uniform SceneData {
    mat4 worldViewProjection;
    mat4 world;
    vec3 cameraPosition;
    float uTime;
    vec3 uBoxMin;
    float uCloudDensity;
    vec3 uBoxMax;
    float _padding1;
    vec3 uSunDirection;
    float _padding2;
    vec3 uCloudColor;
    float _padding3;
  };
  

  uniform sampler3D worleyTexture;
  
  vec2 intersectBox(vec3 ro, vec3 rd, vec3 boxMin, vec3 boxMax) {
    
    vec3 invRd = 1.0 / rd;

    vec3 dMin = (boxMin - ro) * invRd;
    vec3 dMax = (boxMax - ro) * invRd;
    
    vec3 d1 = min(dMin, dMax);
    vec3 d2 = max(dMin, dMax);
    
    float dEnter = max(max(d1.x, d1.y), d1.z);

    float dExit = min(min(d2.x, d2.y), d2.z);

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
    
    vec3 rd = normalize(vWorld - cameraPosition);
    
    vec2 intersect = intersectBox(ro, rd, uBoxMin, uBoxMax);
    float dEnter = intersect.x;
    float dExit = intersect.y;
    
    if (dExit < 0.0 || dEnter > dExit) {
      gl_FragColor = vec4(0.0);
      return;
    }
    
    dEnter = max(dEnter, 0.0);
    
    float maxStep = 128.0;
    float stepSize = (dExit - dEnter) / maxStep;
    vec3 accumulatedColor = vec3(0.0);
    float transmittance = 1.0; // 透射率
    
    for (float i = 0.0; i < maxStep; i+=1.0) {
      float d = dEnter + float(i) * stepSize;
      vec3 currentPos = ro + rd * d;
      
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
    
    vec3 skyColor = mix(vec3(0.3, 0.5, 0.8), vec3(0.6, 0.8, 1.0), rd.y * 0.5 + 0.5);
    vec3 finalColor = skyColor * transmittance + accumulatedColor;
    
    finalColor = 1.0 - pow(finalColor, vec3(0.8));
    
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

  for (let z = 0; z < gridSize; z++) {
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
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

        const normalizedDist = Math.min(minDist / (gridSize * 0.8), 1.0)

        const density = 1.0 - normalizedDist

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


let sceneResources: any, adt: any, cloudUniformBuffer: UniformBuffer | null = null

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
  const ele = document.getElementById("cloudUbo") as any

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
  camera.setPosition(new Vector3(20, 20, 20))

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

    // 创建 Uniform Buffer
    // 计算大小：mat4(64) + mat4(64) + vec3(16) + float(4) + vec3(16) + float(4) + vec3(16) + float(4) + vec3(16) + float(4) + vec3(16) + float(4) = 224字节，对齐到256
    cloudUniformBuffer = new UniformBuffer(engine)

    // 定义 UBO 结构
    cloudUniformBuffer.addUniform("worldViewProjection", 16)  // mat4
    cloudUniformBuffer.addUniform("world", 16)                // mat4  
    cloudUniformBuffer.addUniform("cameraPosition", 3)        // vec3
    cloudUniformBuffer.addUniform("uTime", 1)                 // float
    cloudUniformBuffer.addUniform("uBoxMin", 3)               // vec3
    cloudUniformBuffer.addUniform("uCloudDensity", 1)         // float
    cloudUniformBuffer.addUniform("uBoxMax", 3)               // vec3
    cloudUniformBuffer.addUniform("_padding1", 1)             // float (对齐用)
    cloudUniformBuffer.addUniform("uSunDirection", 3)         // vec3
    cloudUniformBuffer.addUniform("_padding2", 1)             // float (对齐用)
    cloudUniformBuffer.addUniform("uCloudColor", 3)           // vec3
    cloudUniformBuffer.addUniform("_padding3", 1)             // float (对齐用)

    cloudUniformBuffer.create()

    Effect.ShadersStore['worleyNoiseVertexShader'] = vertex
    Effect.ShadersStore['worleyNoiseFragmentShader'] = fragment

    const worleyNoiseShader = new ShaderMaterial('worleyNoise', scene, {
      vertex: 'worleyNoise',
      fragment: 'worleyNoise'
    }, {
      attributes: ['position', 'uv'],
      uniforms: ['SceneData'],  // 声明使用 UBO
      uniformBuffers: ['SceneData'],  // 关键：声明使用的 UBO 名称
      samplers: ['worleyTexture'],
    })

    // 绑定 UBO 到 shader
    worleyNoiseShader.setUniformBuffer("SceneData", cloudUniformBuffer)
    worleyNoiseShader.setTexture('worleyTexture', worleyTexture3D)

    worleyNoiseShader.transparencyMode = Material.MATERIAL_ALPHABLEND
    worleyNoiseShader.backFaceCulling = false
    worleyNoiseShader.needDepthPrePass = true

    box.material = worleyNoiseShader


    const sphere: any = MeshBuilder.CreateSphere('sphere', {
      diameter: 2,
    }, scene)
    sphere.material = new StandardMaterial('', scene)
    sphere.material.emissiveColor = new Color3(1, 0, 0)


    // 初始化 UBO 静态数据
    const initialSunDirection = new Vector3(10, 10, 10).normalize()
    const initialCloudColor = new Color3(1.0, 0.95, 0.9)
    
    cloudUniformBuffer.updateMatrix("worldViewProjection", Matrix.Identity())
    cloudUniformBuffer.updateMatrix("world", box.getWorldMatrix())
    cloudUniformBuffer.updateFloat3("cameraPosition", camera.position.x, camera.position.y, camera.position.z)
    cloudUniformBuffer.updateFloat("uTime", 0)
    
    const bbox = box.getBoundingInfo().boundingBox
    cloudUniformBuffer.updateFloat3("uBoxMin", bbox.minimumWorld.x, bbox.minimumWorld.y, bbox.minimumWorld.z)
    cloudUniformBuffer.updateFloat("uCloudDensity", 3.0)
    cloudUniformBuffer.updateFloat3("uBoxMax", bbox.maximumWorld.x, bbox.maximumWorld.y, bbox.maximumWorld.z)
    cloudUniformBuffer.updateFloat("_padding1", 0)
    cloudUniformBuffer.updateFloat3("uSunDirection", initialSunDirection.x, initialSunDirection.y, initialSunDirection.z)
    cloudUniformBuffer.updateFloat("_padding2", 0)
    cloudUniformBuffer.updateFloat3("uCloudColor", initialCloudColor.r, initialCloudColor.g, initialCloudColor.b)
    cloudUniformBuffer.updateFloat("_padding3", 0)
    
    cloudUniformBuffer.update()

    //-------------------------------------------
    scene.registerBeforeRender(() => {
      const time = performance.now() * 0.001
     
      // 获取世界矩阵和视图投影矩阵
      const worldMatrix = box.getWorldMatrix()
      const viewProjection = scene.getTransformMatrix()
      const wvp = worldMatrix.multiply(viewProjection)
      
      // 更新 UBO 数据
      cloudUniformBuffer!.updateMatrix("worldViewProjection", wvp)
      cloudUniformBuffer!.updateMatrix("world", worldMatrix)
      cloudUniformBuffer!.updateFloat3("cameraPosition", scene.activeCamera.position.x, scene.activeCamera.position.y, scene.activeCamera.position.z)
      cloudUniformBuffer!.updateFloat("uTime", time)
      
      const currentBbox = box.getBoundingInfo().boundingBox
      cloudUniformBuffer!.updateFloat3("uBoxMin", currentBbox.minimumWorld.x, currentBbox.minimumWorld.y, currentBbox.minimumWorld.z)
      cloudUniformBuffer!.updateFloat3("uBoxMax", currentBbox.maximumWorld.x, currentBbox.maximumWorld.y, currentBbox.maximumWorld.z)
      
      // 一次性提交所有更新到 GPU
      cloudUniformBuffer!.update()
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