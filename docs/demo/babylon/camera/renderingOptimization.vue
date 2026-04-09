<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div
        @click="onTrigger"
        class="pointer"
      >
        点击{{ !isRunning ? '运行' : '关闭' }}
      </div>
    </div>
    <div>Selected：{{ selectedInfo || '-' }}</div>
    <div>Bake Status：{{ bakeStatus || '-' }}</div>
    <div>Update Status：{{ updateStatus || '-' }}</div>
    <div>Visible Count：{{ visibleCount || '-' }} / 10000</div>
    <div>Cell Info：{{ cellInfo || '-' }}</div>
    <canvas
      v-if="isRunning"
      id="renderingOptimization"
      class="stage"
    ></canvas>
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
  DirectionalLight,
  MeshBuilder,
  Color3,
  StandardMaterial,
  Material,
  PointerEventTypes
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
  Rectangle,
  TextWrapping
} from 'babylonjs-gui'

let sceneResources: any, adt: any

const fps = ref(0)
const isRunning = ref(false)
const selectedInfo = ref('')
const bakeStatus = ref('')
const updateStatus = ref('')
const visibleCount = ref(0)
const cellInfo = ref('')

const isRightHandedSystem = false

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
  const ele = document.getElementById('renderingOptimization') as any

  ele.addEventListener('wheel', function (event: any) {
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
  // 使用左手坐标系
  scene.useRightHandedSystem = isRightHandedSystem

  const camera: any = new ArcRotateCamera(
    'camera',
    0,
    0,
    100,
    new Vector3(0, 0, 0),
    scene
  )
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(50, 50, 50))

  const createAxis = () => {
    const axisX = MeshBuilder.CreateLines(
      'axisX',
      {
        colors: [new Color4(1, 0, 0, 1), new Color4(1, 0, 0, 1)],
        points: [new Vector3(0, 0, 0), new Vector3(80, 0, 0)]
      },
      scene
    )

    const axisY = MeshBuilder.CreateLines(
      'axisY',
      {
        colors: [new Color4(0, 1, 0, 1), new Color4(0, 1, 0, 1)],
        points: [new Vector3(0, 0, 0), new Vector3(0, 80, 0)]
      },
      scene
    )

    const axisZ = MeshBuilder.CreateLines(
      'axisZ',
      {
        colors: [new Color4(0, 0, 1, 1), new Color4(0, 0, 1, 1)],
        points: [new Vector3(0, 0, 0), new Vector3(0, 0, 80)]
      },
      scene
    )

    return [axisX, axisY, axisZ]
  }

  const createGui = async () => {
    adt = AdvancedDynamicTexture.CreateFullscreenUI('UI', true, scene)

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

  const createLight = () => {
    const light = new DirectionalLight('dir01', new Vector3(0, -1, -0.3), scene)
    light.position = new Vector3(20, 60, 30)
    return light
  }

  const createBakingEffect = () => {
    // ── 材质（5种颜色模拟"不同类型"的物体）────────────────────────────
    // 每种颜色对应一个 StandardMaterial，共享给同类型的实例
    // 好处：5种材质 = 最多5个 draw call batches（相比10000个独立材质）
    const colors = [
      new Color3(0.2, 0.6, 1.0), // 蓝色
      new Color3(1.0, 0.4, 0.2), // 橙色
      new Color3(0.2, 0.9, 0.3), // 绿色
      new Color3(0.9, 0.8, 0.1), // 黄色
      new Color3(0.7, 0.2, 0.9) // 紫色
    ]

    // 为每种颜色创建一个 base mesh（共享几何体的模板）
    // base mesh 自身设为不可见，只作为 createInstance 的几何体来源
    const bases = colors.map((c, i) => {
      const mat = new StandardMaterial('mat' + i, scene)
      mat.diffuseColor = c // 漫反射颜色
      mat.alpha = 1.0 // 完全不透明
      mat.transparencyMode = Material.MATERIAL_OPAQUE // 不透明模式，禁用透明度排序
      const b = MeshBuilder.CreateSphere(
        'base' + i,
        { diameter: 0.6, segments: 8 }, // 直径0.6，8段（低多边形，性能优先）
        scene
      )
      b.material = mat
      b.isVisible = false // base mesh 本身不渲染，仅作为 createInstance 的几何体模板
      return b
    })

    // ── 创建 10000 个球体实例 ────────────────────────────────────────
    const sphereCount = 10000 // 总球体数量
    const instances: any = [] // 存储所有 InstancedMesh，用于运行时控制可见性

    // 使用 Float32Array 存储所有球体坐标（比 Vector3 对象节省内存，烘焙计算更快）
    // 布局：[x0, y0, z0, x1, y1, z1, ...]
    const positions = new Float32Array(sphereCount * 3)

    for (let i = 0; i < sphereCount; i++) {
      // 在 X/Y 各 ±20 范围内随机分布，Z 在 -10 到 -30 之间（位于遮挡物后方）
      const x = (Math.random() - 0.5) * 40
      const y = (Math.random() - 0.5) * 40
      const z = -10 - Math.random() * 20 // Z: -10 ~ -30

      // 从对应颜色的 base mesh 创建实例（共享几何体，各自独立变换/可见性）
      const inst = bases[i % 5].createInstance('sphere_' + i) // 使用createInstance创建实例，如果使用clone则只有20不到的帧率，除非被遮挡了才会恢复60帧率
      inst.position.set(x, y, z) // 设置实例位置
      inst.freezeWorldMatrix() // 球体不会移动，冻结变换矩阵避免每帧重新计算

      instances.push(inst) // 加入列表备用
      // 将坐标写入 Float32Array（用于烘焙阶段的快速批量计算）
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    // ── 遮挡长方体（Occluder）──────────────────────────────────────────
    // 位于 Z=5，球体在 Z=-10~-30，相机在 Z>0 时长方体会挡住所有球
    const occluder = MeshBuilder.CreateBox(
      'occluder',
      { width: 50, height: 50, depth: 2 }, // 50×50 的薄平板
      scene
    )
    occluder.position.set(0, 0, 5) // 放置在 Z=5

    const occMat = new StandardMaterial('occMat', scene)
    occMat.diffuseColor = new Color3(0.8, 0.2, 0.2) // 红色，便于辨认
    occMat.alpha = 1.0
    occMat.transparencyMode = Material.MATERIAL_OPAQUE
    occluder.material = occMat

    // ── GUI 悬浮标签 ─────────────────────────────────────────────────
    // 复用 createGui() 已创建的全屏 GUI 层，避免重复创建

    // 标签基准尺寸（对应相机距离 BASE_DIST 时的大小）
    const BASE_DIST = 80 // 基准距离，与相机初始 radius 一致
    const BASE_W = 180 // 基准宽度（px）
    const BASE_H = 44 // 基准高度（px）
    const BASE_FONT = 11 // 基准字号（px）
    const BASE_OFFSET = -40 // 基准 Y 偏移（px，负数 = 向上）

    // 当前被选中的球体实例（null 表示无选中），用于每帧计算距离
    let selectedMesh: any = null

    // 标签背景容器（Rectangle = 带边框的矩形）
    const label = new Rectangle()
    label.width = '180px'
    label.height = '44px'
    label.cornerRadius = 6 // 圆角
    label.color = '#7ef' // 边框颜色
    label.thickness = 1 // 边框宽度
    label.background = 'rgba(0,0,0,0.82)' // 半透明黑色背景
    label.isVisible = false // 初始隐藏，点击后才显示
    adt.addControl(label)

    // 标签内的文字控件
    const labelText = new TextBlock()
    labelText.color = '#fff'
    labelText.fontSize = 11
    labelText.fontFamily = 'monospace'
    labelText.lineSpacing = '4px'
    labelText.textWrapping = TextWrapping.WordWrap
    label.addControl(labelText)

    // ── 点击事件（场景级别 picking）──────────────────────────────────
    // 用一个场景级监听器代替 10000 个独立 ActionManager，性能更高
    scene.onPointerObservable.add((info: any) => {
      // 只处理 POINTERPICK 事件（鼠标点击拾取）
      if (info.type !== PointerEventTypes.POINTERPICK) return
      const mesh = info.pickInfo.pickedMesh // 被点击的 mesh（可能是 InstancedMesh）
      // 判断是否点中了球体实例（名称以 'sphere_' 开头）
      if (mesh && mesh.name.startsWith('sphere_')) {
        // 从名称中解析出索引，推算其颜色类型并显示
        const idx = parseInt(mesh.name.split('_')[1])
        const colorHex = colors[idx % 5].toHexString()

        // 更新标签文字（名称 + 颜色）
        labelText.text = mesh.name + '\n' + colorHex
        // linkWithMesh：让标签每帧自动跟随该 mesh 的屏幕投影位置
        label.linkWithMesh(mesh)
        label.isVisible = true
        selectedMesh = mesh // 记录选中对象，供 registerBeforeRender 计算距离

        selectedInfo.value = mesh.name + ' | ' + colorHex
      } else {
        // 点击空白处：隐藏标签并解除绑定
        label.isVisible = false
        label.linkWithMesh(null)
        selectedMesh = null // 清除选中，停止每帧缩放计算
      }
    })

    // ════════════════════════════════════════════════════════════════
    // BAKED OCCLUSION CULLING（烘焙遮挡剔除）
    //
    // 核心思路：
    //   1. [烘焙阶段] 启动时把相机空间划分为 GRID×GRID 个格子，
    //      为每个格子预计算"从该区域哪些球可见"，结果存入 visibilityCache。
    //   2. [运行时] 每帧判断相机落在哪个格子，直接查表得到可见列表，
    //      用差量算法只更新"发生变化"的实例 isVisible，开销接近零。
    //
    // 保守策略（避免误隐藏）：
    //   每个格子取4个角点采样，球必须从【所有角点】都被遮挡才标为不可见。
    //   这样即使相机在格子边缘，也不会出现"长方体还没挡住却已消失"的瑕疵。
    // ════════════════════════════════════════════════════════════════

    const GRID = 16 // 将相机角度空间划分为 16×16 = 256 个格子
    const OCC_Z = 5 // 遮挡平面的 Z 坐标（与 occluder.position.z 一致）
    const HALF_W = 25 // 遮挡物在 X 方向的半宽（width/2 = 25）occluder.width/2
    const HALF_H = 25 // 遮挡物在 Y 方向的半高（height/2 = 25）occluder.height/2

    let visibilityCache: any = null // 烘焙结果：Map<cellKey(number), Uint16Array(可见球索引)>
    let lastCellKey: any = -1 // 上一帧相机所在的格子 key，-1 表示尚未初始化
    let lastVisible: any = null // 上一帧的可见列表，用于差量计算

    /**
     * 判断球体是否被遮挡物遮挡（从给定相机位置观察）
     * 原理：将相机到球体的射线与 Z=OCC_Z 平面求交，
     *        若交点落在遮挡物范围内，则球体被遮挡。
     * @param {number} px/py/pz - 球体世界坐标
     * @param {number} cx/cy/cz - 相机世界坐标
     * @returns {boolean} true 表示被遮挡（不可见）
     */
    const isOccluded = (
      px: number,
      py: number,
      pz: number,
      cx: number,
      cy: number,
      cz: number
    ): boolean => {
      // 相机在遮挡平面后方，或球体在遮挡平面前方：不可能被遮挡
      if (cz <= OCC_Z || pz >= OCC_Z) return false

      // 参数 t：射线从相机到球体，t=0 在相机处，t=1 在球体处
      // 求射线与 z=OCC_Z 平面的交点参数
      const t = (OCC_Z - cz) / (pz - cz)

      // 交点在遮挡平面上的 X/Y 坐标（线性插值）
      const projX = cx + t * (px - cx)
      const projY = cy + t * (py - cy)

      // 判断投影点是否落在遮挡物的矩形范围内
      return (
        projX > -HALF_W && projX < HALF_W && projY > -HALF_H && projY < HALF_H
      )
    }

    /**
     * 将相机位置映射到格子编号（整数 key）
     * 用球坐标：水平角(angle) + 仰角(elev) → 格子行列 → 一维整数 key
     * 用整数 key 比字符串 key 在 Map 查找中更快
     * @param {BABYLON.Vector3} pos - 相机当前世界坐标
     * @returns {number} 格子编号（0 ~ GRID²-1）
     */
    const getCellKey = (pos: Vector3): number => {
      // 水平角：atan2(x, z)，范围 -π ~ π
      const angle = Math.atan2(pos.x, pos.z)
      // 仰角：atan2(y, xz平面距离)，范围 -π/2 ~ π/2
      const elev = Math.atan2(pos.y, Math.sqrt(pos.x * pos.x + pos.z * pos.z))

      // 将水平角映射到 [0, GRID) 的整数列索引
      const gx = Math.max(
        0,
        Math.min(
          GRID - 1,
          Math.floor(((angle + Math.PI) / (2 * Math.PI)) * GRID)
        )
      )
      // 将仰角映射到 [0, GRID) 的整数行索引
      const gy = Math.max(
        0,
        Math.min(GRID - 1, Math.floor(((elev + Math.PI / 2) / Math.PI) * GRID))
      )

      // 合并为一维整数 key（行优先）
      return gx * GRID + gy
    }

    /**
     * 根据格子 key 更新所有球体实例的 isVisible
     *
     * 差量更新算法：
     *   比较新旧可见列表，只对"状态发生变化"的实例进行设置
     *   避免每次全量遍历 10000 个实例（当相机缓慢移动时效率极高）
     *
     * @param {number} cellKey - 当前相机所在格子的编号
     */
    const applyVisibility = (cellKey: number) => {
      if (!visibilityCache) return // 烘焙未完成，跳过

      const newVisible = visibilityCache.get(cellKey) // 新格子的可见列表
      if (!newVisible) return // 格子不存在（理论上不会发生）

      if (lastVisible === null) {
        // 首次调用：没有上一帧数据，全量初始化
        for (let i = 0; i < sphereCount; i++) instances[i].isVisible = false // 全部先隐藏
        for (let i = 0; i < newVisible.length; i++)
          instances[newVisible[i]].isVisible = true // 再显示可见的
      } else {
        // 后续帧：差量更新，只改变需要切换状态的实例
        const newSet = new Set(newVisible) // 新可见集合（用 Set 做 O(1) 查找）
        const oldSet = new Set(lastVisible) // 旧可见集合

        // 遍历旧可见列表：不在新列表中的 → 变为不可见
        for (let i = 0; i < lastVisible.length; i++) {
          if (!newSet.has(lastVisible[i]))
            instances[lastVisible[i]].isVisible = false
        }
        // 遍历新可见列表：不在旧列表中的 → 变为可见
        for (let i = 0; i < newVisible.length; i++) {
          if (!oldSet.has(newVisible[i]))
            instances[newVisible[i]].isVisible = true
        }
      }

      lastCellKey = cellKey // 记录当前格子 key，供下帧比较
      lastVisible = newVisible // 记录当前可见列表，供下帧差量计算

      // 更新 UI 显示
      visibleCount.value = newVisible.length
      cellInfo.value = Math.floor(cellKey / GRID) + '_' + (cellKey % GRID)
    }

    /**
     * 烘焙遮挡数据（异步，启动时运行一次）
     *
     * 遍历所有 GRID×GRID 个格子，为每个格子：
     *   1. 计算格子4个角点对应的相机采样位置
     *   2. 对每个球体判断：若从所有4个角点都被遮挡 → 该球在此格子不可见
     *   3. 把可见球的索引存为 Uint16Array，写入 visibilityCache
     *
     * 异步分帧执行（每隔2列 yield 一次），避免烘焙期间页面卡死
     */
    const bakeOcclusion = async () => {
      const cache = new Map() // 临时存储烘焙结果
      const R = 80 // 采样用的相机距原点距离（与实际相机初始半径匹配）

      for (let gx = 0; gx < GRID; gx++) {
        for (let gy = 0; gy < GRID; gy++) {
          // ── 计算格子4个角点的相机采样位置 ──────────────────────────
          // 保守策略：取角点而非中心，确保格子内任意相机位置都不会产生误隐藏
          const samples = [] // 4个采样点的 [cx, cy, cz] 数组
          for (let sx = 0; sx <= 1; sx++) {
            // sx=0: 左边界, sx=1: 右边界
            for (let sy = 0; sy <= 1; sy++) {
              // sy=0: 下边界, sy=1: 上边界
              // 角点对应的水平角（从格子边界索引反算弧度）
              const angle = ((gx + sx) / GRID) * 2 * Math.PI - Math.PI
              // 角点对应的仰角
              const elev = ((gy + sy) / GRID) * Math.PI - Math.PI / 2
              // 将球坐标(R, angle, elev)转换为笛卡尔坐标(cx, cy, cz)
              samples.push([
                R * Math.sin(angle) * Math.cos(elev), // cx
                R * Math.sin(elev), // cy
                R * Math.cos(angle) * Math.cos(elev) // cz
              ])
            }
          }

          // ── 遍历所有球体，判断在此格子中是否可见 ────────────────────
          const visible = [] // 在此格子可见的球体索引列表
          for (let i = 0; i < sphereCount; i++) {
            // 从 Float32Array 读取球体坐标（比访问 Vector3 对象快）
            const px = positions[i * 3],
              py = positions[i * 3 + 1],
              pz = positions[i * 3 + 2]

            // 保守判断：只有从4个角点【全部】都被遮挡，才认为不可见
            let occludedFromAll = true
            for (let s = 0; s < 4; s++) {
              if (
                !isOccluded(
                  px,
                  py,
                  pz,
                  samples[s][0],
                  samples[s][1],
                  samples[s][2]
                )
              ) {
                occludedFromAll = false // 有任意角点能看见，则此球可见
                break // 提前退出，不需要检查剩余角点
              }
            }

            // 可见的球加入列表
            if (!occludedFromAll) visible.push(i)
          }

          // 用 Uint16Array 存储索引（每个索引2字节，最大值9999 < 65535）
          // 相比普通 Array 节省约3倍内存
          cache.set(gx * GRID + gy, new Uint16Array(visible))
        }

        // 每处理2列 yield 一次，将控制权交还给浏览器事件循环
        // 这样渲染循环可以继续运行，页面不会在烘焙期间冻结
        if (gx % 2 === 1) {
          await new Promise((r) => setTimeout(r, 0))
          // 更新进度显示（百分比）
          updateStatus.value =
            'Baking ' + Math.round(((gx + 1) / GRID) * 100) + '%...'
        }
      }

      // 烘焙完成，将结果写入全局 cache
      visibilityCache = cache
      bakeStatus.value = 'Ready'

      // 立即根据当前相机位置应用可见性（不等到下一帧）
      applyVisibility(getCellKey(camera.position))
    }

    // 每帧执行：检查相机是否跨越了格子边界
    // 只有跨格子时才调用 applyVisibility，否则直接跳过（每帧仅一次整数比较）
    scene.registerBeforeRender(() => {
      // ① 遮挡剔除：只有相机跨格子才更新可见性
      if (visibilityCache) {
        const cellKey = getCellKey(camera.position)
        if (cellKey !== lastCellKey) applyVisibility(cellKey)
      }

      // ② 标签缩放：相机离球越近标签越大，越远越小
      if (!selectedMesh || !label.isVisible) return
      // 计算相机到选中球体的欧氏距离
      const dist = Vector3.Distance(camera.position, selectedMesh.position)
      // 线性缩放比例：基准距离/当前距离，并限制在 [0.3, 2.5] 区间防止极端值
      const scale = Math.max(0.3, Math.min(2.5, BASE_DIST / dist))
      // 同步缩放宽高、字号、Y偏移（保持标签始终贴在球体正上方）
      label.width = Math.round(BASE_W * scale) + 'px'
      label.height = Math.round(BASE_H * scale) + 'px'
      label.linkOffsetY = Math.round(BASE_OFFSET * scale)
      labelText.fontSize = Math.max(8, Math.round(BASE_FONT * scale))
    })

    // 启动异步烘焙（不阻塞当前帧的渲染）
    bakeOcclusion()
  }

  const runAnimate = () => {
    engine.runRenderLoop(function () {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }

  createAxis()
  createGui()
  createLight()
  createBakingEffect()
  runAnimate()

  // scene.registerBeforeRender(() => {})

  return {
    scene,
    engine
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

onMounted(async () => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>
