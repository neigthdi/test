<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="postProcess1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import 'babylonjs-loaders'
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  PostProcess,
  Effect,
  PostProcessRenderPipeline,
  PostProcessRenderEffect,
} from 'babylonjs'

let sceneResources

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
  const ele = document.getElementById("postProcess1") as any

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
  scene.useRightHandedSystem = true

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 5, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(5, 5, 5))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene)
    return light
  }

  const createEffect = () => {
    const box = MeshBuilder.CreateBox("box", { size: 2 }, scene)
    box.position.y = -1

    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 1 }, scene)
    sphere.position.y = 2

    Effect.ShadersStore["customFragmentShader"] = `
      #ifdef GL_ES
        precision highp float;
      #endif

      // 像素化的本质：通过量化UV坐标实现"块状"视觉效果

      // Samplers
      varying vec2 vUV;
      uniform sampler2D textureSampler; // 输入的屏幕纹理采样器（Babylon.js 自动传入的渲染结果）

      // Parameters
      uniform vec2 screenSize; // 屏幕分辨率（像素单位）
      uniform float pixelSize; // 用户定义的像素块大小

      void main(void) {
        // 将用户设定的像素块大小转换为纹理空间中的尺寸
        // 例如：pixelSize=5, screenSize=1920×1080 → 每个大像素占 (5/1920, 5/1080) 的纹理空间
        vec2 pixelSize = pixelSize / screenSize;

        // 将平滑的 UV 坐标" snapping"（对齐）到最近的像素网格
        // vUV / pixelSize：将坐标转换到"像素块"坐标系
        // floor(...)：向下取整，锁定到整数网格（关键！这导致同一"像素块"内的所有片元得到相同坐标）
        // * pixelSize：转换回纹理空间
        // 效果：一个像素块内的所有片元采样同一个颜色，形成块状像素感
        vec2 snappedTexCoord = floor(vUV / pixelSize) * pixelSize;

        // 使用对齐后的坐标对屏幕纹理进行采样
        // 同一像素块内的所有片元将返回相同的颜色值
        vec4 color = texture2D(textureSampler, snappedTexCoord);

        gl_FragColor = color;
      }
    `

    const postProcess = new PostProcess('Pixelation Post Process', 'custom', ['screenSize', 'pixelSize'], null, 1, null, undefined, engine)
    postProcess.onApply = function (effect) {
      effect.setFloat2('screenSize', postProcess.width, postProcess.height)
      effect.setFloat('pixelSize', 5)
    }

    // 创建并应用一个后期处理渲染管线（PostProcess Render Pipeline），将自定义像素化效果应用到相机画面上
    // 优点：
    //   -- 便于管理：多个效果可以打包成一个管线，统一控制
    //   -- 可重用：一个管线可以附加到多个相机
    //   -- 可切换：可以动态启用/禁用整个管线或单个效果
    //   -- 顺序控制：效果按添加顺序依次执行
    // 缺点：
    //   -- 稍显繁琐：单个效果时代码量比直接附加更复杂
    
    // 1. 创建一个渲染管线容器
    const pipeline1 = new PostProcessRenderPipeline(engine, "pipeline1")
    // 2. 将后期处理包装成"效果"
    const pixelate = new PostProcessRenderEffect(engine, "pixelate", function () {
      return [postProcess]  // 返回包含像素化处理器的数组
    })
    // 3. 将效果添加到管线
    pipeline1.addEffect(pixelate)
    // 4. 注册管线到场景
    scene.postProcessRenderPipelineManager.addPipeline(pipeline1)
    // 5. 将管线绑定到相机
    scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("pipeline1", camera)
   
    // 更简单的写法（适合单个效果）
    // camera.attachPostProcess(postProcess)

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
  createEffect()
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
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>
