<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
      {{ tips }}
    <canvas v-if="isRunning" id="waveGround" class="stage"></canvas>
  </div>
</template>
  
  <script lang="ts" setup>
  import { onMounted, ref, nextTick, onUnmounted } from 'vue'
  import {
    Scene,
    ArcRotateCamera,
    Vector3,
    Color4,
    HemisphericLight,
    MeshBuilder,
    StandardMaterial,
    WebGPUEngine,
    Texture,
    RawTexture,
    ComputeShader,
    UniformBuffer,
    Effect,
    ShaderMaterial,
  } from 'babylonjs'
  import {
    AdvancedDynamicTexture,
    StackPanel,
    Control,
    TextBlock,
  } from 'babylonjs-gui'
  
  let sceneResources, adt, uTime = 0.02
  
  const fps = ref(0)
  const isRunning = ref(false)
  const tips = ref('')
  
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
    const ele = document.getElementById("waveGround") as any
  
    ele.addEventListener('wheel', function(event) {
      // 根据需要处理滚动
      // 例如，可以修改相机的半径或角度
      event.preventDefault() // 阻止默认滚动行为
    })
  
    const engine: any = new WebGPUEngine(ele)
    if(!engine.isWebGPU) {
      tips.value = '设备不支持WebGpu'
      return false
    }
    await engine.initAsync()
  
    const scene = new Scene(engine)
    scene.useRightHandedSystem = false
  
    const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
    camera.upperBetaLimit = Math.PI / 2.2
    camera.wheelPrecision = 1
    camera.panningSensibility = 200
    camera.attachControl(ele, true)
    camera.setPosition(new Vector3(0, 160, -160))
  
    const createLight = () => {
      const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
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


    const createGround = async () => {
      const ground = MeshBuilder.CreateGround('Ground', { width: 128, height: 128, subdivisions: 128 }, scene)

      Effect.ShadersStore['waveGroundVertexShader'] = `
        precision highp float;
        
        attribute vec3 position;
        attribute vec2 uv;

        uniform mat4 worldViewProjection;
        uniform sampler2D uSampler;

        varying vec2 vUV;

        void main() {
          vUV = uv;
          vec4 baseColor = texture(uSampler, vUV);
          // position.y = baseColor.r;
          vec3 newPosition = position;
          newPosition.y = cos(position.x + sin(baseColor.r) * 5.0) * 2.0;
          gl_Position = worldViewProjection * vec4(newPosition, 1.0);
        }
      `

      Effect.ShadersStore['waveGroundFragmentShader'] = `
        precision highp float;

        uniform sampler2D uSampler;

        varying vec2 vUV;

        void main() {
          vec4 baseColor = texture(uSampler, vUV);
          gl_FragColor = baseColor;
        }
      `

      const copyTextureComputeShader = `
        @group(0) @binding(1) var samplerSrc: sampler;

        @group(0) @binding(2) var src: texture_2d<f32>;

        @group(0) @binding(3) var dest: texture_storage_2d<rgba8unorm, write>;

        @group(0) @binding(4) var<uniform> uTime: f32;

        @compute @workgroup_size(1, 1, 1)

        fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {

          let dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));

          var pix: vec4<f32> = textureSampleLevel(src, samplerSrc, vec2<f32>(global_id.xy) / dims, 0.0);

          pix.r = sin(uTime) + pix.g;

          textureStore(dest, vec2<i32>(global_id.xy), pix);
        }
      `

      const shader = new ComputeShader(
        'myCompute', 
        engine, 
        { computeSource: copyTextureComputeShader }, 
        { bindingsMapping: { 
            'src': { group: 0, binding: 2 },
            'dest': { group: 0, binding: 3 },
            'uTime': { group: 0, binding: 4 },
          }
        }
      )

      const src = new Texture('/images/grass.png', scene)
      const dest = RawTexture.CreateRGBAStorageTexture(null, 512, 512, scene, false, false)
 
      const timeBuffer = new UniformBuffer(engine)
      timeBuffer.addUniform('uTime', 4) // float 类型大小是4

      const mat = new StandardMaterial('mat', scene)
      mat.diffuseTexture = dest

      const waveGroundShader = new ShaderMaterial(
        'waveGround',
        scene, {
          vertex: 'waveGround',
          fragment: 'waveGround',
        }, {
          attributes: ['position', 'uv'],
          uniforms: ['worldViewProjection', 'uSampler'],
          samplers: ['uSampler'],
          needAlphaBlending: true,
        },
      )
      waveGroundShader.setTexture('uSampler', dest)

      // 使用shader
      ground.material = waveGroundShader

      // 使用标准材质
      // ground.material = mat

      scene.registerBeforeRender(() => {

        uTime += 0.02
        timeBuffer.updateFloat('uTime', uTime)
        timeBuffer.update()

        shader.setUniformBuffer('uTime', timeBuffer)
        shader.setTexture('src', src)
        shader.setStorageTexture('dest', dest)
        shader.dispatch(dest.getSize().width, dest.getSize().height, 1)
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
    createGround()
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
  