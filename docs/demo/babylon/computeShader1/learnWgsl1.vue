<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="learnWgsl1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  WebGPUEngine,
  Scene,
  HemisphericLight,
  ShaderStore,
  ShaderMaterial,
  ShaderLanguage,
  ArcRotateCamera,
  Vector3,
  Color3,
  StorageBuffer,
  UniformBuffer,
  Constants,
  Texture,
  MeshBuilder,
  TextureSampler
} from 'babylonjs'

const fps = ref(0)
const isRunning = ref(false)

 let sceneResources: any, adt: any

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
  const ele = document.getElementById("learnWgsl1") as any

  ele.addEventListener('wheel', function(event: any) {
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
  camera.setPosition(new Vector3(0, 0, 10))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(40, 40, 40), scene)
    light.direction = new Vector3(0.0, 1.0, 0.0)
    light.diffuse = new Color3(1.0, 0.95, 0.8)
    return light
  }


  ShaderStore.ShadersStoreWGSL['customVertexShader'] = `
    #include<sceneUboDeclaration>
    #include<meshUboDeclaration>
    
    attribute position: vec3<f32>;
    attribute uv: vec2<f32>;
    
    varying vUV: vec2<f32>;
    
    @vertex
    fn main(input: VertexInputs) -> FragmentInputs {
      vertexOutputs.vUV = vertexInputs.uv;
      vertexOutputs.position = scene.viewProjection * mesh.world * vec4<f32>(vertexInputs.position, 1.0);
    }
  `

  ShaderStore.ShadersStoreWGSL['customFragmentShader'] = `
    var<storage, read_write> colors: array<f32>;
    
    struct MyUBO {
      time: f32,
    };
    
    var<uniform> myUBO: MyUBO;
    
    uniform vColor : array<vec4<f32>, 2>;
    
    varying vUV: vec2<f32>;
    
    var diffuse: texture_2d<f32>;
    var mySampler: sampler;
    
    @fragment
    fn main(input: FragmentInputs) -> FragmentOutputs {
      let offset = u32(floor(fragmentInputs.vUV.x * sin(myUBO.time) * 5)) * 3;
      let textureColor = textureSample(diffuse, mySampler, fragmentInputs.vUV) + uniforms.vColor[0];
      fragmentOutputs.color = vec4<f32>(colors[offset], colors[offset + 1], colors[offset + 2], 1.0) + textureColor;
    }
  `
  
  const shaderMaterial = new ShaderMaterial('shader', scene, {
    vertex: 'custom',
    fragment: 'custom',
  }, {
    attributes: ['position', 'normal', 'uv', 'rgb'],
    uniformBuffers: ['Scene', 'Mesh'],
    shaderLanguage: ShaderLanguage.WGSL,
  })


  const colors = new Float32Array([
    1, 0, 1, // Purple
    1, 1, 0 // Yellow
  ])
  const colorsBuffer = new StorageBuffer(engine, colors.byteLength)
  colorsBuffer.update(colors)
  shaderMaterial.setStorageBuffer('colors', colorsBuffer)

  shaderMaterial.setFloats('vColor', [1, 0, 0, 1, 0, 1, 0, 1])

  let time = 0.2
  const myUBO = new UniformBuffer(engine)
  myUBO.addUniform('time', time)
  shaderMaterial.setUniformBuffer('myUBO', myUBO)

  const sampler = new TextureSampler()
  var mainTexture = new Texture('/images/wood.jpg', scene)
  sampler.setParameters()
  sampler.samplingMode = Constants.TEXTURE_NEAREST_SAMPLINGMODE
  shaderMaterial.setTextureSampler('mySampler', sampler)
  shaderMaterial.setTexture('diffuse', mainTexture)


  const tri = MeshBuilder.CreateDisc('tri', { tessellation: 3, radius: 2 })
  tri.material = shaderMaterial
  tri.rotation = new Vector3(Math.PI, 0, 0)




  scene.registerBeforeRender(async () => {
    time += 0.01
    myUBO.updateFloat('time', time)
    myUBO.update()
  })



  const runAnimate = () => {
    engine.runRenderLoop(function() {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }

  createLight()
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