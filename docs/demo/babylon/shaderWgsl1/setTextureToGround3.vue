<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="setTextureToGround3" class="stage"></canvas>
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
    // UniformBuffer,
  } from 'babylonjs'
  import {
    AdvancedDynamicTexture,
    StackPanel,
    Control,
    TextBlock,
  } from 'babylonjs-gui'
  
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
    const ele = document.getElementById("setTextureToGround3") as any
  
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

      const groundRow = MeshBuilder.CreateGround('Ground', { width: 128, height: 128, subdivisions: 128 }, scene)
      groundRow.position = new Vector3(-74, 0, -74)

      const groundCol = MeshBuilder.CreateGround('Ground', { width: 128, height: 128, subdivisions: 128 }, scene)
      groundCol.position = new Vector3(74, 0, -74)

      /* 读入原始纹理 ------------------------------------------------------- */
      const srcTexture = new Texture('/images/mergeImage1.jpg', scene)

      /* 准备两张可 ping-pong 的 storage 纹理 -------------------------------- */
      const texRow = RawTexture.CreateRGBAStorageTexture(null, imgSize, imgSize, scene, false, false)
      const texCol = RawTexture.CreateRGBAStorageTexture(null, imgSize, imgSize, scene, false, false)

      const computeShaderRow = `
        @group(0) @binding(0) var sampler_src: sampler;
        @group(0) @binding(1) var src: texture_2d<f32>;
        @group(0) @binding(2) var dest: texture_storage_2d<rgba8unorm, write>;

        var<workgroup> sharedData: array<vec4<f32>, ${imgSize}>;

        // workgroup_size 定义了每个工作组（workgroup）中线程（thread）的数量。它是一个三维向量 (x, y, z)，表示每个工作组在三个维度上的线程数。
        // workgroup_size = (256, 1, 1)：
        //    x：表示每个工作组在 x 方向上有 256 个线程。
        //    y：表示每个工作组在 y 方向上有 1 个线程。
        //    z：表示每个工作组在 z 方向上有 1 个线程。
        // 这意味着每个工作组包含 256 个线程，这些线程可以并行处理一行像素（256 个像素）。每个工作组只处理一行像素，因此 y 方向和 z 方向的线程数为 1。
        @compute @workgroup_size(${workGroupSizeRowX}, ${workGroupSizeRowY}, 1)

        fn main(
          @builtin(global_invocation_id) global_id: vec3<u32>, // global_id.x 范围是 0~255 ， global_id.y 范围是 0~255
          @builtin(local_invocation_id) local_id: vec3<u32> // local_id.x 范围是 0~255 共256个线程 ， local_id.y 范围是 0 共1个线程
        ) {
          // 要进行采样，不然后面就不能运行，即使 origin_texture 并没有使用到
          let dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
          let origin_texture: vec4<f32> = textureSampleLevel(src, sampler_src, vec2<f32>(global_id.xy) / dims, 0.0);


          // 对行进行操作
          for (var i = 0u; i < ${imgSize / 2}u; i++) {
            let idx1 = vec2<u32>(i, global_id.y);
            let idx2 = vec2<u32>(i + ${imgSize / 2}u, global_id.y);

            let p1 = textureLoad(src, vec2<i32>(idx1), 0);
            let p2 = textureLoad(src, vec2<i32>(idx2), 0);
            sharedData[i] = p1 + p2 * 0.5;
            sharedData[i + ${imgSize / 2}u] = p1 - p2 * 0.5;
          }

          workgroupBarrier();

          // 第二次变换（基于第一次结果）
          // for (var i = 0u; i < ${imgSize / 2}u; i++) {
          //   let p1 = sharedData[i];
          //   let p2 = sharedData[i + ${imgSize / 2}u];
          //   sharedData[i] = p1 + p2 * 0.5;
          //   sharedData[i + ${imgSize / 2}u] = p1 - p2 * 0.5;
          // }

          // workgroupBarrier();

          let final_texture: vec4<f32> = sharedData[local_id.x];
      
          // 原图输出
          // let pixel = global_id.xy;
          // sharedData[local_id.x] = textureLoad(src, pixel, 0); 
          // let final_texture: vec4<f32> = sharedData[local_id.x];

          textureStore(dest, vec2<i32>(global_id.xy), final_texture);
        }
      `

      const computeShaderCol = `
        @group(0) @binding(0) var sampler_src: sampler;
        @group(0) @binding(1) var src: texture_2d<f32>;
        @group(0) @binding(2) var dest: texture_storage_2d<rgba8unorm, write>;

        var<workgroup> sharedData: array<vec4<f32>, ${imgSize}>;

        // workgroup_size 定义了每个工作组（workgroup）中线程（thread）的数量。它是一个三维向量 (x, y, z)，表示每个工作组在三个维度上的线程数。
        // workgroup_size = (1, 256, 1)：
        //    x：表示每个工作组在 x 方向上有 1 个线程。
        //    y：表示每个工作组在 y 方向上有 256 个线程。
        //    z：表示每个工作组在 z 方向上有 1 个线程。
        // 这意味着每个工作组包含 256 个线程，这些线程可以并行处理一列像素（256 个像素）。每个工作组只处理一列像素，因此 y 方向和 z 方向的线程数为 1。
        @compute @workgroup_size(${workGroupSizeColX}, ${workGroupSizeColY}, 1)

        fn main(
          @builtin(global_invocation_id) global_id: vec3<u32>, // global_id.x 范围是 0~255 ， global_id.y 范围是 0~255
          @builtin(local_invocation_id) local_id: vec3<u32> // local_id.x 范围是 0 共1个线程 ， local_id.y 范围是 0~255 共256个线程
        ) {
          // 要进行采样，不然后面就不能运行，即使 origin_texture 并没有使用到
          let dims: vec2<f32> = vec2<f32>(textureDimensions(src, 0));
          let origin_texture: vec4<f32> = textureSampleLevel(src, sampler_src, vec2<f32>(global_id.xy) / dims, 0.0);


          // 对列进行操作
          for (var i = 0u; i < ${imgSize / 2}u; i++) {
            let idx1 = vec2<u32>(global_id.x, i);
            let idx2 = vec2<u32>(global_id.x, i + ${imgSize / 2}u);

            let p1 = textureLoad(src, vec2<i32>(idx1), 0);
            let p2 = textureLoad(src, vec2<i32>(idx2), 0);
            sharedData[i] = p1 + p2 * 0.5;
            sharedData[i + ${imgSize / 2}u] = p1 - p2 * 0.5;
          }

          workgroupBarrier();

          // 第二次变换（基于第一次结果）
          // for (var i = 0u; i < ${imgSize / 2}u; i++) {
          //   let p1 = sharedData[i];
          //   let p2 = sharedData[i + ${imgSize / 2}u];
          //   sharedData[i] = p1 + p2 * 0.5;
          //   sharedData[i + ${imgSize / 2}u] = p1 - p2 * 0.5;
          // }

          // workgroupBarrier();

          let final_texture: vec4<f32> = sharedData[local_id.y];
      
          // 原图输出
          // let pixel = global_id.xy;
          // sharedData[local_id.y] = textureLoad(src, pixel, 0); 
          // let final_texture: vec4<f32> = sharedData[local_id.y];

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

      /* 绑定纹理 ----------------------------------------------------------- */
      shaderRow.setTexture('src', srcTexture)
      shaderRow.setStorageTexture('dest', texRow)

      shaderCol.setTexture('src', srcTexture)
      shaderCol.setStorageTexture('dest', texCol)

      // dispatchWhenReady = (1, 256, 1)：
      //     x：表示在 x 方向上启动 1 个工作组。只启动 1 个工作组，因为每行只需要一个工作组来处理。
      //     y：表示在 y 方向上启动 256 个工作组。启动 256 个工作组，因为图像有 256 行，每行需要一个工作组来处理。
      //     z：表示在 z 方向上启动 1 个工作组。只启动 1 个工作组，因为处理的是二维图像。
      // ☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️
      // ☑️☑️即 shaderRow.dispatchWhenReady(1, 256, 1) 把 256*256 分割成 256 行，然后 workgroup_size = (256, 1, 1) 把每行分割成256个元素。
      await shaderRow.dispatchWhenReady(imgSize / workGroupSizeRowX, imgSize / workGroupSizeRowY, 1)


      // dispatchWhenReady = (256, 1, 1)：
      //     x：表示在 x 方向上启动 256 个工作组。启动 256 个工作组，因为图像有 256 列，每行需要一个工作组来处理。
      //     y：表示在 y 方向上启动 1 个工作组。只启动 1 个工作组，因为每列只需要一个工作组来处理。
      //     z：表示在 z 方向上启动 1 个工作组。只启动 1 个工作组，因为处理的是二维图像。
      await shaderCol.dispatchWhenReady(imgSize / workGroupSizeColX, imgSize / workGroupSizeColY, 1)

      /* 第二次 dispatch：列变换  texA → texB ------------------------------- */
      // dirBuffer.updateInt('dir', 2) // dir = 2 -> 列
      // dirBuffer.update()
      // shader.setTexture('src', texA) // 输入改为上一轮输出
      // shader.setStorageTexture('dest', texB)

      // await shader.dispatchWhenReady(X, Y, 1)

      /* 把最终结果挂到材质 -------------------------------------------------- */
      const matOrigin = new StandardMaterial('matOrigin', scene)
      matOrigin.diffuseTexture = srcTexture
      groundOrigin.material = matOrigin

      const matRow = new StandardMaterial('matRow', scene)
      matRow.diffuseTexture = texRow
      groundRow.material = matRow

      const matCol = new StandardMaterial('matCol', scene)
      matCol.diffuseTexture = texCol
      groundCol.material = matCol

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
  