<template>
  <div>
    <div>点击左上角图片(需要优化，noise太卡顿了)</div>
    <div>1、获取图片；2、ShaderMaterial；3、把图片映射到shader中；4、noise函数；5、创建（点击爆炸效果），并运行动画</div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" style="position: relative">
      <img style="position: absolute;z-index: 10;opacity: 1;width: 150px;" id="image" src="/images/star.jpg" alt="">
      <div id="img2Particle" class="stage"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  AmbientLight,
  Mesh,
  PlaneGeometry,
  Points,
  ShaderMaterial,
  DoubleSide,
  Clock,
  Texture,
  DirectionalLight,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

const {
  to
} = gsap

const requestID = ref<any>()
let clock: any = new Clock()
const isRunning = ref(false)
let sceneResources

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

const noiseFunc = `
  vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }
    
  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  
  float sNoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
				    
    // First corner
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
				    
    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
				    
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
				    
    // Permutations
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));
				                
    // Gradients
    // ( N*N points uniformly over a square, mapped onto an octahedron.)
    float n_ = 1.0 / 7.0; // N=7
    vec3 ns = n_ * D.wyz - D.xzx;
				                
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z); // mod(p,N*N)
      
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)
      
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
      
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    // Normalize gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
   
  vec3 noiseVec3(vec3 x) {
    return vec3(sNoise(vec3(x) * 2.0 - 1.0),
      sNoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2)) * 2.0 - 1.0,
      sNoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4) * 2.0 - 1.0)
    );
  }

  vec3 curlNoise(vec3 p) {
    const float e = 0.1;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(0.0, e, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);
    
    vec3 p_x0 = noiseVec3(p - dx);
    vec3 p_x1 = noiseVec3(p + dx);
    vec3 p_y0 = noiseVec3(p - dy);
    vec3 p_y1 = noiseVec3(p + dy);
    vec3 p_z0 = noiseVec3(p - dz);
    vec3 p_z1 = noiseVec3(p + dz);
    
    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;
    
    const float divisor = 1.0 / (2.0 * e);
    return normalize(vec3(x, y, z) * divisor);
  }
`

const vertexShader = `
  uniform float uTime;
  uniform float uProgress;
  
  varying vec2 vUv;
  
  ${noiseFunc}
  
  void main() {
    vUv = uv;
    
    vec3 noise = curlNoise(vec3(position.x * 0.02, position.y * 0.008, uTime * 0.05));
    vec3 distortion = vec3(position.x * 2.0 ,position.y, 1.0) * noise * uProgress;
    vec3 newPos = position + distortion;
    vec4 modelPosition = modelMatrix * vec4(newPos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = 2.0;
  }
`

const fragmentShader = `
  uniform sampler2D uTexture;
  
  varying vec2 vUv;
  
  void main() {
    vec4 color = texture2D(uTexture, vUv);
    if (color.r < 0.1 && color.g < 0.1 && color.b < 0.1) {
      // discard;
    }
    gl_FragColor = color;
  }
`

const initScene = () => {
  const ele = document.getElementById('img2Particle') as HTMLElement
  const width = Number(window.getComputedStyle(ele).width.split('px')[0])
  const height = Number(window.getComputedStyle(ele).height.split('px')[0])

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(45, width / height, 1, 10000)
  camera.position.set(0, 0, 1000)
  camera.rotation.set(0, 0, 0)
  scene.add(camera)
  
  const renderer: any = new WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
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
  }

  
  // 光
  const createLight = () => {
    const ambient = new AmbientLight(0xadadad)
    scene.add(ambient)

    const directionalLight = new DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1000, 1000, 0)
    scene.add(directionalLight)
  }

  class DomMesh {
    w
    h
    el
    rect
    mesh

    constructor(el, scene, material, isPoints = false) {
      this.el = el
      const geometry = new PlaneGeometry(600, 400, 600, 400) // width = 1, height = 1, widthSegments(宽度分段) = 1, heightSegments(高度分段) = 1
      const mesh = isPoints ? new Points(geometry, material) : new Mesh(geometry, material)
      this.mesh = mesh
      scene.add(mesh)
    }

    setPosition() {
      const {
        mesh,
        // rect
      } = this
      // const {
      //   width,
      //   height,
      //   top,
      //   left
      // } = rect
      // console.log(width, height, top, left)
      mesh.position.set(0, 0, 0)
    }
  }

  class ParticleExplode {
    imageDOMMeshObj
    isOpen = false

    constructor(imageDOMMeshObj) {
      this.imageDOMMeshObj = imageDOMMeshObj
    }

    createClickEffect() {
      const material = this.imageDOMMeshObj.mesh.material
      this.imageDOMMeshObj.el.addEventListener('click', () => {
        if (!this.isOpen) {
          to(material.uniforms.uProgress, {
            value: 3,
            duration: 1
          })
          this.isOpen = true
        } else {
          to(material.uniforms.uProgress, {
            value: 0,
            duration: 1
          })
          this.isOpen = false
        }
      })
    }

    update() {
      // 获取自时钟启动后的秒数
      const elapsedTime = clock.getElapsedTime()
      if (this.imageDOMMeshObj) {
        const material = this.imageDOMMeshObj.mesh.material
        material.uniforms.uTime.value = elapsedTime
      }
    }
  }

  const image: any = document.getElementById('image')

  const createPlane = () => {
    // const {
    //   width,
    //   height
    // } = image.getBoundingClientRect()
    const texture = new Texture(image)
    image.onload = () => {
      texture.needsUpdate = true
    }

    const material = new ShaderMaterial({
      side: DoubleSide,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTexture: {
          value: null
        },
        uTime: {
          value: 0
        },
        uProgress: {
          value: 0
        },
      }
    })
    material.uniforms.uTexture.value = texture
    const imageDOMMeshObj = new DomMesh(
      image,
      scene,
      material,
      true
    )
    imageDOMMeshObj.setPosition();

    const plane = new ParticleExplode(imageDOMMeshObj)
    plane.createClickEffect()
    return plane
  }

  const plane = createPlane()

  const runAnimate = () => {
    plane.update()

    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
  }


  createLight()
  runAnimate()
  
  const controls = createOrbitControls()

  return {
    renderer,
    scene,
    controls,
  }
}

const destroy = () => {
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

    sceneResources = null
  }
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
  clock = null
})
</script>