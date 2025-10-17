<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <div>巧妙的创建镜像世界，把view变成镜像世界的矩阵，并不是真的new一个相机来观察</div>
    <canvas v-if="isRunning" id="mirrorTexture2" class="stage"></canvas>
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
  Color4,
  Color3,
  HemisphericLight,
  DirectionalLight,
  MeshBuilder,
  StandardMaterial,
  RenderTargetTexture,
  Plane,
  Matrix,
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
  const ele = document.getElementById("mirrorTexture2") as any

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

  const scene: any = new Scene(engine)

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 30, -200))

  const createLight = () => {
    const dir = new DirectionalLight('dir', new Vector3(-1, -2, -1), scene)
    dir.position.set(10, 15, 10)
    dir.intensity = 0.7
    const hemispheric = new HemisphericLight('hemispheric', new Vector3(0, 1, 0), scene)
    hemispheric.intensity = 0.8
    hemispheric.groundColor = new Color3(0.2, 0.5, 0.2)
  }

  const createMirrorTexture = () => {
    const box = MeshBuilder.CreateBox('box', {
      size: 20,
      faceColors: [
        new Color4(1, 0, 0, 1), new Color4(0, 1, 0, 1),
        new Color4(0, 0, 1, 1), new Color4(1, 1, 0, 1),
        new Color4(1, 0, 1, 1), new Color4(1, 1, 1, 1)
      ]
    }, scene)
    box.position.y = 30

    const ground = MeshBuilder.CreateGround('ground', { width: 1000, height: 1000 }, scene)
    ground.position.y = 0


    let name = 'mirror'

    // 在 onBeforeRenderObservable 里，临时保存主场景当前的裁剪平面，以便在 onAfterRenderObservable 里恢复
    // 画镜像时，必须只渲染镜子平面以上的物体（否则会出现“地下”的倒影），因此需要启用 裁剪平面（clipPlane）——即只保留平面一侧的像素
    // saveClipPlane 就是用来 临时保存场景原来的裁剪平面，以便在画完镜像后再恢复回去，避免影响后续正常渲染
    // 渲染镜像前
    //       saveClipPlane = scene.clipPlane   // 备份
    //       scene.clipPlane = rrt.mirrorPlane // 设为镜面平面，启用裁剪
    // 渲染镜像后
    //         scene.clipPlane = saveClipPlane   // 还原备份，恢复现场
    // saveClipPlane 起到“现场保护”作用，保证镜像渲染不会破坏场景原有的裁剪状态。
    let saveClipPlane: any = null

    const rrt: any = new RenderTargetTexture('mirror', { width: 1000, height: 1000 }, scene, false, true)

    // 定义镜子的平面，用于计算反射矩阵和裁剪平面
    rrt.mirrorPlane = new Plane(0, -1, 0, 0)

    // 临时存储反射后的视图矩阵，避免每帧 new 新矩阵
    rrt._transformMatrix = Matrix.Zero()

    // 临时存储反射矩阵，避免每帧 new 新矩阵
    rrt._mirrorMatrix = Matrix.Zero()

    // 告诉 RenderTargetTexture：只画这个物体，别的都不画
    rrt.renderList.push(box)

    scene.customRenderTargets.push(rrt)

    // 防止主场景和反射场景之间的 Uniform 数据冲突
    if (engine.supportsUniformBuffers) {
      rrt._sceneUBO = scene.createSceneUniformBuffer(`Scene for Mirror Texture (name "${name}")`)
    }


     
    // 时序图
    // 时刻：scene 状态
    // 进入 onBefore：主场景 UBO、V 矩阵、clipPlane 都是“正常”
    // 镜子绘制期间：全部被换成“反射专用”
    // 离开 onAfter：一次性全部还原，主场景完全感知不到



    // 这 10 行代码在 GPU 里“临时造了一个平行宇宙”：
    // 世界被沿地面翻过去，相机矩阵被替换，裁剪平面被启用，
    // 画完再把所有状态还原，主场景完全感知不到。
    rrt.onBeforeRenderObservable.add(() => {
      // UBO 是 Uniform Buffer Object 的缩写，直译为“统一缓冲区对象”。
      // 是 OpenGL / WebGL2 的一项底层功能，Babylon.js 把“一大块 uniform 变量”打包成一次 GPU 上传，而不是逐个 uniform* 调用。
      // 切换 UniformBuffer（如果支持）
      // 在 WebGL2 下，给镜子单独准备一块 uniform 内存，画完再换回去
      if (rrt._sceneUBO) {
        // 把主场景当前正在用的 UBO暂存到 rrt._currentSceneUBO
        // 后面画完镜子还要换回来，否则主场景会拿到错误的 uniform 数据
        rrt._currentSceneUBO = scene.getSceneUniformBuffer()

        // 把镜子专用 UBO设为场景当前 UBO
        // 后续所有 scene.uniformBuffer.update() 都会写进这块 buffer，不会污染主场景
        scene.setSceneUniformBuffer(rrt._sceneUBO)

        // 先强制解绑 shader 与 UBO 的关联
        // 避免 Babylon 的缓存逻辑以为“同一 buffer 已绑定”而跳过真正的 glBindBufferBase 调用
        scene.getSceneUniformBuffer().unbindEffect()
      }

      // 计算反射矩阵
      // rrt.mirrorPlane，平面方程 y = 0（法线朝下）
      // rrt._mirrorMatrix，输出矩阵，原地写入
      // 得到 4×4 矩阵
      // R = I – 2 · n⊗n / (n·n)
      // 其中 n = (0,–1,0,0)ᵀ，所以
      // R = diag(1, –1, 1, 1)
      // 对任意点 (x,y,z) 变换后变成 (x,–y,z)——这就是镜面反射
      // 一句话：用一条指令算出“把世界沿镜子翻过去”的矩阵
      // ---------------------------------------------------------------------
      // 第一步：镜子平面是哪？
      //     平面方程给出法线向量
      //     n = (0, -1, 0)
      //     意思：镜子就是 地面（y = 0），法线竖直朝下
      // 第二步：公式在算什么？
      //    R = I – 2 · n⊗n / (n·n)：是“对任意一个点，沿这个平面翻过去”的通用反射矩阵
      //    I 是单位矩阵，什么都不变
      //    n⊗n 叫“外积”，当 n 已经是单位长度时，n⊗n 就是一个能把向量“投影到法线方向”的小机器
      //    整个式子就是在说：先把待反射的向量投影到法线方向，再两倍减掉，就得到了镜像
      // 第三步：代入具体数字
      //       n = (0, -1, 0)
      //       n·n = 0² + (-1)² + 0² = 1【点乘 == 点积 == 内积】“乘出来是个数”
      //       所以分母消失，公式变成
      //       R = I – 2 · n⊗n
      //       把 n⊗n 写出来【外积】“乘出来是个矩阵”
      //       n⊗n = [ +0 ] [ 0 -1 0 ] = [ 0  0  0 ]
      //              [ -1 ]              [ 0  1  0 ]
      //              [ +0 ]              [ 0  0  0 ]
      //       乘以 -2 后
      //       2·n⊗n = [ 0  0  0 ]
      //                [ 0  2  0 ]
      //                [ 0  0  0 ]
      //       单位矩阵减去：
      //       R = I - 2·n⊗n = [ 1 0 0 ] - [ 0 0 0 ] = [ 1  0  0 ]
      //                        [ 0 1 0 ]   [ 0 2 0 ]   [ 0 -1  0 ]
      //                        [ 0 0 1 ]   [ 0 0 0 ]   [ 0  0  1 ]
      //       这就是 diag(1, –1, 1) 的来历。
      // 第四步：到底对点干了什么？
      //         拿任意点 (x, y, z) 乘这个矩阵：
      //         [ 1  0  0 ] [x]   [ x ]
      //         [ 0 -1  0 ] [y] = [-y ]
      //         [ 0  0  1 ] [z]   [ z ]
      //         y 坐标被取反，x 和 z 不变。
      //         换句话说：把点沿地面（y=0）翻过去，上半空间变下半空间，这就是镜面反射。
      // 那个公式只是“沿地面照镜子”的数学写法，算出来的是个简单对角矩阵，作用就是把 y 变成 -y，别的啥也没干
      Matrix.ReflectionToRef(rrt.mirrorPlane, rrt._mirrorMatrix)

      // 计算反射后的视图矩阵
      // scene.getViewMatrix()，主相机视图矩阵 V（世界→相机）
      // rrt._mirrorMatrix，反射矩阵 R（世界→反射世界）
      // rrt._transformMatrix，输出 V' = R · V
      // 几何意义：
      //       不是“把相机移到镜子下面”，而是把整个世界先沿镜子翻过去，再用原来的相机去看。
      //       这样做不需要第二台相机，只用矩阵乘法就得到“反射视角”。
      // 一句话：“虚拟相机”不是 new 出来的，是矩阵乘出来的。
      rrt._mirrorMatrix.multiplyToRef(scene.getViewMatrix(), rrt._transformMatrix)

      // 强制设置场景的视图矩阵
      // scene.setTransformMatrix 是 Babylon.js 中用于手动覆盖场景视图矩阵的低阶 API
      // 直接把“世界→视图→投影”链条里最上游的视图矩阵（以及可选的投影矩阵）换成你传进去的值
      // 之后整个场景在那一帧就会按你给的矩阵去渲染
      // 换句话说：它绕开了 Babylon 自带的相机系统，让你“劫持”了摄像机。
      // ---------------------------------------------------------------------
      // 作用：
      //       “把当前场景里所有后续绘制命令的 viewMatrix（和 projectionMatrix）换成我指定的矩阵，直到我再次调用 setTransformMatrix 或 Babylon 在下一帧自动重置它。”
      // ---------------------------------------------------------------------
      // 调用后：场景对象 scene._viewMatrix / scene._projectionMatrix 被立即覆盖
      // 所有 mesh.getWorldMatrix() 依然正常算世界矩阵，但最终 MVP 里的 V 和 P 就是所给的
      // ---------------------------------------------------------------------
      // 什么时候用
      //       需要把 Babylon 场景嵌入到已有引擎/AR/VR 框架里，而头部姿态矩阵由外部 SDK 给出（如 WebXR、OpenCV、ARKit、Kinect）。
      //       做离线渲染、截图、立方体贴图生成时，想一次性把 6 个方向的视图矩阵塞进去，而懒得创建 6 个相机。
      //       做特殊投影（斜投影、非对称视锥、浮雕投影、光场显示）而 Babylon 相机参数 UI 里调不出来。
      //       做“画中画”分屏、多眼渲染：同一帧里先 setTransformMatrix(eye0View, eye0Proj) 画一遍，再 setTransformMatrix(eye1View, eye1Proj) 画第二遍，只需一个场景、一个相机对象即可。
      // ---------------------------------------------------------------------
      // 最小可运行示例：
      //       // 假设外部已经给你算好了 view / proj
      //       const customView = BABYLON.Matrix.LookAtLH(eye, target, up);
      //       const customProj = BABYLON.Matrix.PerspectiveFovLH(fov, aspect, zn, zf);
      //       // 每帧刷新，劫持摄像机
      //       scene.registerBeforeRender(() => {
      //           scene.setTransformMatrix(customView, customProj);
      //       });
      // ---------------------------------------------------------------------
      // 参数 1：	视图矩阵已被换成 V' = R·V
      // 参数 2：	投影矩阵保持原样（P）
      // WebGL 侧实际动作：
      //       立即把 uniform mat4 view 换成 V'
      //       把 uniform mat4 viewProjection 换成 P·V'
      //       下一帧所有 draw call 都会用这套新矩阵
      // 一句话：“欺骗”整个场景，以为“相机已经在镜子下方”。
      scene.setTransformMatrix(rrt._transformMatrix, scene.getProjectionMatrix())

      // 临时设置裁剪平面为镜子平面
      // 备份	主场景可能已有别的裁剪平面（例如水面、UI 裁剪），必须先存起来
      // 启用	把 WebGL 裁剪平面设为 0x –1y +0z +0w ≥ 0（即 y ≤ 0）
      // WebGL 侧实际动作：
      //       若扩展 GL_ARB_clip_distance 可用，Babylon 会编译一份带 gl_ClipDistance[0] 的 shader
      //       在顶点着色器里写入 dot(worldPos, plane)，GPU 自动丢弃 y>0 的片元
      //       避免把镜子以上的物体画到纹理里（否则地面会出现“重影”）
      // 一句话：“只画镜子下方的世界”，上半部分直接裁掉。
      saveClipPlane = scene.clipPlane // 备份
      scene.clipPlane = rrt.mirrorPlane // 启用

      // 记录反射后的相机位置
      // globalPosition	主相机在世界坐标系的真实位置
      // rrt._mirrorMatrix	反射矩阵 R
      // 输出	镜子里的“虚拟相机”位置
      // 用途：
      //       后续材质计算反射向量时，直接用这个世界坐标当做“眼睛”位置，不用再算一次反射
      //       水面 Fresnel、镜面高光、SSR 等效果都会读这个只读属性
      //       不写也行，但写了可以省一次矩阵乘法
      // 一句话：“提前帮后面所有 shader 算好虚拟眼睛在哪”。
      scene._mirroredCameraPosition = Vector3.TransformCoordinates(scene.activeCamera.globalPosition, rrt
        ._mirrorMatrix)
    })

    rrt.onAfterRenderObservable.add(() => {
      // 恢复 UniformBuffer（如果支持）
      // 之前做了什么	onBeforeRender 里把场景的 UBO 换成了镜子专用 UBO (rrt._sceneUBO)，防止 uniform 数据被覆盖。
      // 现在做什么	把场景 UBO 指针换回去，让主场景继续用自己的那块 GPU 内存。
      // 不恢复的后果	主场景会永远用镜子的 uniform 数据（视图矩阵、相机位置等），画面瞬间错乱。
      if (rrt._sceneUBO) {
        scene.setSceneUniformBuffer(rrt._currentSceneUBO)
      }
      // 恢复场景的视图矩阵
      // 之前做了什么：onBeforeRender 里手动调了 scene.setTransformMatrix(R·V, P)，把视图矩阵换成了“反射视角”。
      // 现在做什么：updateTransformMatrix() 让 Babylon 重新计算：主相机的视图矩阵 V × 投影矩阵 P，恢复成正常视角。
      // 不恢复的后果：主场景会一直用“镜子视角”渲染，整个世界上下颠倒。
      scene.updateTransformMatrix()

      // 清空临时相机位置
      // 之前做了什么：onBeforeRender 里写了 scene._mirroredCameraPosition = ...，供后续 shader 或材质使用。
      // 现在做什么：把它清掉，标记“当前不在反射通道”。
      // 不恢复的后果：后续材质或后处理如果依赖这个字段，会误以为仍在反射通道，可能算错反射向量或高光。
      scene._mirroredCameraPosition = null

      // 恢复裁剪平面
      // 之前做了什么：onBeforeRender 里把 scene.clipPlane 设成镜子平面 y=0，只画镜子下方的物体。
      // 现在做什么：恢复成进入镜子前的原始裁剪平面（通常是 null，也就是不裁剪）。
      // 不恢复的后果：主场景会继续用 y=0 裁剪，上半部分世界被切掉，画面缺一块。
      scene.clipPlane = saveClipPlane
    })

    const mat = new StandardMaterial('groundMat', scene)
    mat.diffuseColor = new Color3(0.1, 0.1, 0.1)
    mat.specularColor = new Color3(1, 1, 1)
    mat.reflectionTexture = rrt // ← 关键
    ground.material = mat

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
  createMirrorTexture()
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