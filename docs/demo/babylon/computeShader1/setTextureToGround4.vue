<template>
  <div>
    <div class="flex space-between">
    <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="setTextureToGround4" class="stage"></canvas>
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
  } from 'babylonjs'
  import {
    AdvancedDynamicTexture,
    StackPanel,
    Control,
    TextBlock,
  } from 'babylonjs-gui'
  
  let sceneResources, adt
  let uTime = 0.002
  
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
    const ele = document.getElementById("setTextureToGround4") as any
  
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
    camera.setPosition(new Vector3(0, 320, -200))
  
    const createLight = () => {
      const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene)
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
      const imgSize = 256
      const workGroupSizeRowX = 256
      const workGroupSizeRowY = 1
      const workGroupSizeColX = 1
      const workGroupSizeColY = 256

      const groundOrigin = MeshBuilder.CreateGround('Ground', { width: 128, height: 128, subdivisions: 128 }, scene)
      groundOrigin.position = new Vector3(0, 0, 74)

      const groundChange = MeshBuilder.CreateGround('Ground', { width: 128, height: 128, subdivisions: 128 }, scene)
      groundChange.position = new Vector3(0, 0, -74)

      /* 读入原始纹理 ------------------------------------------------------- */
      const srcTexture = new Texture('/images/mergeImage1.jpg', scene)

      /* 准备两张可 ping-pong 的 storage 纹理 -------------------------------- */
      const texRow = RawTexture.CreateRGBAStorageTexture(null, imgSize, imgSize, scene, false, false)
      const texCol = RawTexture.CreateRGBAStorageTexture(null, imgSize, imgSize, scene, false, false)

      const computeShaderRow = `
        @group(0) @binding(0) var sampler_src: sampler;
        @group(0) @binding(1) var src: texture_2d<f32>;
        @group(0) @binding(2) var dest: texture_storage_2d<rgba8unorm, write>;
        @group(0) @binding(3) var<uniform> uTime: f32;

        var<workgroup> sharedData: array<vec4<f32>, ${imgSize}>;
        @compute @workgroup_size(${workGroupSizeRowX}, ${workGroupSizeRowY}, 1)

        fn main(
          @builtin(global_invocation_id) global_id: vec3<u32>, // global_id.x 范围是 0~255 ， global_id.y 范围是 0~255
          @builtin(local_invocation_id) local_id: vec3<u32> // local_id.x 范围是 0~255 共256个线程 ， local_id.y 范围是 0 共1个线程
        ) {
          let dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
          let origin_texture: vec4<f32> = textureSampleLevel(src, sampler_src, vec2<f32>(global_id.xy) / dims, 0.0);


          for (var i = 0u; i < ${imgSize / 2}u; i++) {
            let idx1 = vec2<u32>(i, global_id.y);
            let idx2 = vec2<u32>(i + ${imgSize / 2}u, global_id.y);

            let p1 = textureLoad(src, vec2<i32>(idx1), 0);
            let p2 = textureLoad(src, vec2<i32>(idx2), 0);
            sharedData[i] = p1 + p2 * sin(uTime);
            sharedData[i + ${imgSize / 2}u] = p1 - p2 * cos(uTime);
          }

          workgroupBarrier();

          // for (var i = 0u; i < ${imgSize / 2}u; i++) {
          //   let p1 = sharedData[i];
          //   let p2 = sharedData[i + ${imgSize / 2}u];
          //   sharedData[i] = p1 + p2 * 0.5;
          //   sharedData[i + ${imgSize / 2}u] = p1 - p2 * 0.5;
          // }

          // workgroupBarrier();

          let final_texture: vec4<f32> = sharedData[local_id.x];

          textureStore(dest, vec2<i32>(global_id.xy), final_texture);
        }
      `

      const computeShaderCol = `
        @group(0) @binding(0) var sampler_src: sampler;
        @group(0) @binding(1) var src: texture_2d<f32>;
        @group(0) @binding(2) var dest: texture_storage_2d<rgba8unorm, write>;

        var<workgroup> sharedData: array<vec4<f32>, ${imgSize}>;

        @compute @workgroup_size(${workGroupSizeColX}, ${workGroupSizeColY}, 1)

        fn main(
          @builtin(global_invocation_id) global_id: vec3<u32>, // global_id.x 范围是 0~255 ， global_id.y 范围是 0~255
          @builtin(local_invocation_id) local_id: vec3<u32> // local_id.x 范围是 0 共1个线程 ， local_id.y 范围是 0~255 共256个线程
        ) {
          let dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
          let origin_texture: vec4<f32> = textureSampleLevel(src, sampler_src, vec2<f32>(global_id.xy) / dims, 0.0);


          // for (var i = 0u; i < ${imgSize / 2}u; i++) {
          //   let idx1 = vec2<u32>(global_id.x, i);
          //   let idx2 = vec2<u32>(global_id.x, i + ${imgSize / 2}u);

          //   let p1 = textureLoad(src, vec2<i32>(idx1), 0);
          //   let p2 = textureLoad(src, vec2<i32>(idx2), 0);
          //   sharedData[i] = p1 + p2 * 0.5;
          //   sharedData[i + ${imgSize / 2}u] = p1 - p2 * 0.5;
          // }

          // workgroupBarrier();

          // for (var i = 0u; i < ${imgSize / 2}u; i++) {
          //   let p1 = sharedData[i];
          //   let p2 = sharedData[i + ${imgSize / 2}u];
          //   sharedData[i] = p1 + p2 * 0.5;
          //   sharedData[i + ${imgSize / 2}u] = p1 - p2 * 0.5;
          // }

          // workgroupBarrier();

          // let final_texture: vec4<f32> = sharedData[local_id.y];

          let pixel = global_id.xy;
          sharedData[local_id.y] = textureLoad(src, pixel, 0); 
          let final_texture: vec4<f32> = sharedData[local_id.y];

          textureStore(dest, vec2<i32>(global_id.xy), final_texture);
        }
      `

      const shaderRow = new ComputeShader(
        'myCompute', 
        engine, 
        { computeSource: computeShaderRow }, 
        { bindingsMapping: { 
            'src': { group: 0, binding: 1 },
            'dest': { group: 0, binding: 2 },
            'uTime': { group: 0, binding: 3 },
          }
        }
      )

      const shaderCol = new ComputeShader(
        'myCompute', 
        engine, 
        { computeSource: computeShaderCol }, 
        { bindingsMapping: { 
            'src': { group: 0, binding: 1 },
            'dest': { group: 0, binding: 2 },
          }
        }
      )

      const timeBuffer = new UniformBuffer(engine)
      timeBuffer.addUniform('uTime', 4)

      /* 绑定纹理 ----------------------------------------------------------- */
      // shaderRow.setTexture('src', srcTexture)
      // shaderRow.setStorageTexture('dest', texRow)
      // await shaderRow.dispatchWhenReady(imgSize / workGroupSizeRowX, imgSize / workGroupSizeRowY, 1)

      // shaderCol.setTexture('src', texRow)
      // shaderCol.setStorageTexture('dest', texCol)
      // await shaderCol.dispatchWhenReady(imgSize / workGroupSizeColX, imgSize / workGroupSizeColY, 1)


      const matOrigin = new StandardMaterial('matOrigin', scene)
      matOrigin.diffuseTexture = srcTexture
      groundOrigin.material = matOrigin

      const matFinal = new StandardMaterial('matFinal', scene)
      matFinal.diffuseTexture = texCol
      groundChange.material = matFinal

      shaderRow.setTexture('src', srcTexture)
      shaderRow.setStorageTexture('dest', texRow)

      shaderCol.setTexture('src', texRow)
      shaderCol.setStorageTexture('dest', texCol)

      scene.registerBeforeRender(async() => {
        uTime += 0.02
        timeBuffer.updateFloat('uTime', uTime)
        timeBuffer.update()
      
        // 重新执行 Compute Shader
        shaderRow.setUniformBuffer('uTime', timeBuffer)
        // shaderRow.setTexture('src', srcTexture)
        // shaderRow.setStorageTexture('dest', texRow)
        await shaderRow.dispatchWhenReady(imgSize / workGroupSizeRowX, imgSize / workGroupSizeRowY, 1)
        // shaderRow.dispatch(imgSize / workGroupSizeRowX, imgSize / workGroupSizeRowY, 1)

        // shaderCol.setTexture('src', texRow)
        // shaderCol.setStorageTexture('dest', texCol)
        await shaderCol.dispatchWhenReady(imgSize / workGroupSizeColX, imgSize / workGroupSizeColY, 1)
        // shaderCol.dispatch(imgSize / workGroupSizeColX, imgSize / workGroupSizeColY, 1)
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
  