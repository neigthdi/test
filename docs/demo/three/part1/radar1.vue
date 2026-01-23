<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="radar1" class="stage"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Color,
  AmbientLight,
  Mesh,
  DoubleSide,
  Texture,
  PlaneGeometry,
  ShaderMaterial,
  Clock
} from 'three'

const requestID = ref<any>()
const addTime = ref<any>({ value: 0 })
const isRunning = ref(false)
let clock: any = new Clock()
let sceneResources: any

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

const vertexShader = `
  varying vec2 vUv;
  varying vec3 v_position;

  void main() {
    vUv = uv;
    v_position =  position;

    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform vec3 uColor;
  uniform float uTime;
  varying vec3 v_position;

  float sdCircle(vec2 p, float r) {
    return length(p) - r;
  }

  float sdBox(in vec2 p, in vec2 b) {
    vec2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
  }

  float opSubtraction(float d1, float d2) {
    return max(-d1, d2);
  }

  // 旋转函数
  vec2 rotate(vec2 uv, float rotation, vec2 mid) {
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x , 
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
  }

  // 等边三角形
  float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + r / k;
    if (p.x + k * p.y > 0.0) p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
  }

  // 设置三角形
  float mixSjx(float progress, vec2 uv, float rotateNumber) {
    float sjxd = sdEquilateralTriangle(rotate(uv, rotateNumber, vec2(0.5)) - vec2(0.5, (progress * 0.05) + 0.03), 0.006);
    float sjxc = smoothstep(0.0007, 0.0007, sjxd);
    return sjxc;
  }

  void main() {
    vec2 uv = vUv;
    float txUtime = 2.2;
    float dis = length(v_position - vec3(0));

    // 画缺角的圆
    if (dis < (txUtime + 0.02) && dis > txUtime) {
      gl_FragColor = vec4(vec3(0.74, 0.95, 1.00), 1.0); 
    }
    if (uv.x > 0.48 && uv.x < 0.52) {
      gl_FragColor = vec4(0.0); 
    }
    if (uv.y > 0.48 && uv.y < 0.52) {
      gl_FragColor = vec4(0.0); 
    }
    if (uv.x + uv.y > 1.0 && uv.x + uv.y < 1.03) {
      gl_FragColor = vec4(0.0); 
    }
    if (uv.x - uv.y > 0.05 && uv.x - uv.y < 0.08) {
      gl_FragColor = vec4(0.0); 
    }

    // 画可缩小的圆
    float progress = abs(sin(uTime)) ;
    float d1 = sdCircle(uv - vec2(0.5), 0.36);
    float d2 = sdBox(uv - vec2(0.5), vec2(0.4, ((progress + 1.4) * 0.5) * 0.2));
    float d3 = sdCircle(uv - vec2(0.5), 0.35);

    float d4 = opSubtraction(d1, d3);
    float d5 = opSubtraction(d2, d4);

    float c = smoothstep(0.007, 0.007, d5);
    gl_FragColor = mix(vec4(vec3(0.87, 0.98, 1.00), 1.0) ,gl_FragColor, c);


    // 画中心的 雷达
    vec2 rotateVuv = rotate(vUv , uTime ,vec2(0.5));
    float opacity = 1.0 - step(0.276, distance(uv, vec2(0.5)));
    float st = 1.0 - step(0.01, mod(dis, 0.456));
    float angle = atan(rotateVuv.x - 0.5, rotateVuv.y - 0.5);
    float strength = (angle + 3.14) / 6.28 * 5.0; 

    if (st == 1.0) {
      gl_FragColor = mix(vec4(0.0), vec4(vec3(0.87, 0.98, 1.00), 1.0), opacity);
    } else {
      vec4 atanColor = mix(vec4(vec3(0.35, 0.76, 0.83), 1.0), vec4(1.0, 1.0, 1.0, 0.0), opacity * strength);
      vec4 color = mix(gl_FragColor, atanColor, opacity);
      gl_FragColor = color;
    }

    // 画十字架
    if (uv.x + uv.y >0.998 && uv.x + uv.y < 0.99999) {
      gl_FragColor = mix(gl_FragColor, vec4(vec3(0.953, 0.969, 0.89), 1.0), opacity); 
    }
    if (uv.x - uv.y > 0.0 && uv.x - uv.y < 0.002) {
      gl_FragColor = mix(gl_FragColor, vec4(vec3(0.953, 0.969, 0.89), 1.0), opacity); 
    }


    // 画三角形
    float colors[4];
    colors[0] = 0.0;
    colors[1] = 1.57;
    colors[2] = -1.57;
    colors[3] = 3.14;

    for (int i = 0; i < 4; ++i) {
      gl_FragColor = mix(vec4(vec3(1.0, 1.0, 0.0), 1.0), gl_FragColor, mixSjx(progress, uv, colors[i]));
    }
  }
`

const initScene = () => {
  const ele = document.getElementById('radar1') as HTMLElement
  const width = Number(window.getComputedStyle(ele).width.split('px')[0])
  const height = Number(window.getComputedStyle(ele).height.split('px')[0])

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(75, width / height, 0.1, 3000)
  camera.position.set(0, 0, 50)
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

   // 光
  const createLight = () => {
    const ambient = new AmbientLight(0x444444)
    scene.add(ambient)
  }

  const createPlane = () => {
    const geometry = new PlaneGeometry(200, 200) // width = 1, height = 1, widthSegments(宽度分段) = 1, heightSegments(高度分段) = 1
    const material = new ShaderMaterial({
      uniforms: {
        uTime: addTime.value,
      },
      side: DoubleSide,
      transparent: true,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    })

    const mesh = new Mesh(geometry, material)
    scene.add(mesh)
    mesh.rotation.z = Math.PI / 2

    return mesh
  }

  createPlane()
  createLight()

  const runAnimate = () => {
    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)

    addTime.value.value = clock.getElapsedTime()
  }


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

    addTime.value.value = 0
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