<template>
  <div id="roadFlowingLight" class="stage"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Color,
  AmbientLight,
  DirectionalLight,
  PlaneGeometry,
  MeshLambertMaterial,
  Mesh,
  Vector2,
  Vector3,
  LineCurve3,
  BufferGeometry,
  Float32BufferAttribute,
  ShaderMaterial,
  Points,
  Shape,
  Path,
  ShapeGeometry,
  MeshPhongMaterial,
  DoubleSide,
  Texture,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const ratio = ref<any>({ value: 0 })
const requestID = ref<any>()
let next = 0

const vertexShader = `
  // 接收js传入的attribute值，会经过线性插值
  attribute float current;

  // 接收js传入的uniform值
  uniform float uSize;
  uniform float uTime;
  uniform float uRange;
  uniform float uTotal;
  uniform float uSpeed;

  // 向片元着色器传值颜色和透明度
  varying float vOpacity;

  void main () {
    float size = uSize;
    // 根据时间确定当前飞线的位置， 以结束点为准
    float currentEnd = mod(uTime * uSpeed, uTotal);
    // 判断当前像素点是否在飞线范围内，如果在范围内设置尺寸和透明度
    if (current < currentEnd && current > currentEnd - uRange) {
      // 设置渐变的尺寸，头大尾小
      float sizePct = (uRange - (currentEnd - current)) / uRange;
      // size *= sizePct;
      vOpacity = clamp(1.0 * sizePct, 0.2, 1.0);
    } else if (current < currentEnd - uRange){
      vOpacity = 0.05;
    } else {
      vOpacity = 0.05;
    }
    // 将颜色传递给片元着色器
    // 设置点的大小
    gl_PointSize = size * 0.4;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const fragmentShader = `
  precision mediump float;
  // 接收顶点着色器传入的值
  varying float vOpacity;
  uniform vec3 uColor;

  void main () {
    // 设置颜色
    gl_FragColor = vec4(uColor, vOpacity);
  }
`

 // 道路的点数据
 const pointArr = [
  // 外圈
  300, -300, 0, 300, 300, 0,
  300, 300, 0, -300, 300, 0,
  -300, 300, 0, -300, -300, 0,
  -300, -300, 0, 300, -300, 0,
  // 内圈
  200, -200, 0, 200, 200, 0,
  200, 200, 0, -200, 200, 0,
  -200, 200, 0, -200, -200, 0,
  -200, -200, 0, 200, -200, 0
]

// 流光配置数据
const flyConf = {
  range: 100, // 飞线长度
  color: '#fe7', // 颜色
  speed: 80, // 速度
  size: 14 // 飞线点点的大小
}

const pointsArr1: any = []
const pointsArr2: any = []

const initScene = () => {
  const ele = document.getElementById('roadFlowingLight') as HTMLElement
  const width = Number(window.getComputedStyle(ele).width.split('px')[0])
  const height = Number(window.getComputedStyle(ele).height.split('px')[0])

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(75, width / height, 0.1, 3000)
  camera.position.set(0, 0, 1000)
  scene.add(camera)

  const renderer: any = new WebGLRenderer({
    antialias: true,
    alpha: true
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(new Color('#32373E'), 1)
  ele.appendChild(renderer.domElement)

  // 添加 OrbitControls
  const createOrbitControls = () => {
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true
    return controls
  }

  const createLight = () => {
    // 环境光
    const light = new AmbientLight(0xadadad) // soft white light
    scene.add(light)

    // 平行光源
    const directionalLight: any = new DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1000, 1000, 0)
    scene.add(directionalLight)
  }
  
  // 创建地板
  const createGround = () => {
    const planeGeo = new PlaneGeometry(800, 800) // width = 1, height = 1, widthSegments(宽度分段) = 1, heightSegments(高度分段) = 1
    const planeMaterial: any = new MeshLambertMaterial({
      color: new Color('#efe')
    })
    const planeMesh: any = new Mesh(planeGeo, planeMaterial)
    planeMesh.rotation.x = -Math.PI / 2
    scene.add(planeMesh)
  }
 
  // 创建流光
  const createLightLine = () => {
    for (let i = 0; i < pointArr.length; i += 6) {
      if (i < 24) {
        pointsArr1.push(new Vector2(pointArr[i], pointArr[i + 1]))
      } else {
        pointsArr2.push(new Vector2(pointArr[i], pointArr[i + 1]))
      }

      let start = new Vector3(
        pointArr[i],
        pointArr[i + 1],
        pointArr[i + 2]
      )

      let end = new Vector3(
        pointArr[i + 3],
        pointArr[i + 4],
        pointArr[i + 5]
      )

      const curve = new LineCurve3(start, end)
      const number = start.distanceTo(end)

      const points = curve?.getPoints(number)
      const positions: any = []
      const current: any = []
      points.forEach((item: any, index) => {
        current.push(index)
        positions.push(item.x, item.y, item.z)
      })

      const flyGeo = new BufferGeometry()
      flyGeo.setAttribute(
        'position',
        new Float32BufferAttribute(positions, 3)
      )
      flyGeo.setAttribute(
        'current',
        new Float32BufferAttribute(current, 1)
      )

      const flyMaterial: any = new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        depthTest: false,
        // blending: THREE.AdditiveBlending,
        uniforms: {
          uSize: {
            // 点的大小
            value: flyConf.size
          },
          uTime: ratio.value, // 时间
          uColor: {
            // 颜色
            value: new Color(flyConf.color)
          },
          uRange: {
            // 飞线长度
            value: flyConf.range
          },
          uTotal: {
            // 轨迹总长度，（点的总个数）
            value: number
          },
          uSpeed: {
            // 飞行速度
            value: flyConf.speed
          }
        },
        vertexShader,
        fragmentShader
      })

      // 创建并添加到场景中
      const flyPoints = new Points(flyGeo, flyMaterial)
      scene.add(flyPoints)
    }
  }

  // 内圈外圈之间的颜色
  const createBetweenBackground = () => {
    const shape = new Shape(pointsArr1)
    const holePath = new Path(pointsArr2)
    shape.holes.push(holePath)
    const geometry1 = new ShapeGeometry(shape)
    const material1: any = new MeshPhongMaterial({
      color: new Color('#5fc2ef'),
      side: DoubleSide
    })
    const mesh1 = new Mesh(geometry1, material1)
    scene.add(mesh1)
  }
 

  const runAnimate = () => {
    next += 0.12
    ratio.value.value = next

    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
  }

  
 
  createLight()
  createGround()
  createLightLine()
  createBetweenBackground()
  runAnimate()
  const controls = createOrbitControls()

  return {
    renderer,
    scene,
    controls
  }
}

let sceneResources

onMounted(async () => {
  await nextTick() // 等待DOM更新
  sceneResources = initScene()
})

onUnmounted(() => {
  if (sceneResources) {
    sceneResources.scene.clear()
    sceneResources.scene.traverse((child) => {
      if (child.geometry) child.geometry?.dispose()
      if (child.material) {
        if (child.material.map) child.material.map?.dispose()
        child.material?.dispose()
      }
    })
    if (sceneResources.scene.background) {
      if (sceneResources.scene.background instanceof Texture) {
        sceneResources.scene.background?.dispose()
      }
    }
    sceneResources.renderer?.dispose()
    sceneResources.renderer.forceContextLoss()
    sceneResources.controls?.dispose()

    cancelAnimationFrame(requestID.value)

    ratio.value = null

    sceneResources = null
  }
})
</script>

<style scoped>
</style>