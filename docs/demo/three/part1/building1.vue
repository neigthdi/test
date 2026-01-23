<template>
  <div>
    <div>把多个geo合并成一个并添加shader</div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="radar2" class="stage"></div>
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
  Texture,
  ShaderMaterial,
  BoxGeometry,
  BufferAttribute,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments
} from 'three'

const requestID = ref<any>()
const isRunning = ref(false)
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

const initScene = () => {
  const ele = document.getElementById('radar2') as HTMLElement
  const width = Number(window.getComputedStyle(ele).width.split('px')[0])
  const height = Number(window.getComputedStyle(ele).height.split('px')[0])

  const scene = new Scene()

  const camera: any = new PerspectiveCamera(75, width / height, 0.1, 3000)
  camera.position.set(80, 80, 80)
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

  const buildingSweepingLightShader = {
    uniforms: {
      boxH: {
        type: 'f',
        value: -10.0
      }
    },
    vertexShader: `
      attribute vec3 color;

      varying vec3 vColor;
      varying float v_pz;
      
      void main() {
        v_pz = position.y;
        vColor = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float boxH;
      varying vec3 vColor;
      varying float v_pz;
      
      float plot(float pct) {
        return smoothstep(pct - 8.0, pct, v_pz) - smoothstep(pct, pct + 0.02, v_pz);
      }
      
      void main() {
        float f1 = plot(boxH);
        vec4 b1 = mix(vec4(0.8, 0.1, 0.1, 0.1), vec4(f1, f1, f1, 1.0), 0.1);
        
        gl_FragColor = mix(vec4(vColor, 1.0), b1, b1);
        gl_FragColor = vec4(vec3(gl_FragColor), 0.9);
      }
    `
  }

  const createBuildings = () => {
    const buildMat = new ShaderMaterial({
      uniforms: buildingSweepingLightShader.uniforms,
      vertexShader: buildingSweepingLightShader.vertexShader,
      fragmentShader: buildingSweepingLightShader.fragmentShader,
    })
    buildMat.needsUpdate = true
    
    
    for (let i = 0; i < 10; i++) {
      const height = Math.random() * 10 + 2
      const width = 3
      const cubeGeom = new BoxGeometry(width, height, width)
      cubeGeom.setAttribute('color', new BufferAttribute(new Float32Array(24 * 3), 3))

      const colors = cubeGeom.attributes.color
      let r = Math.random() * 0.2
      let g = Math.random() * 0.2
      let b = Math.random() * 0.2
      // 设置立方体的6个面的24个顶点的颜色
      for (let i = 0; i < 24; i++) {
        colors.setXYZ(r, g, b, 0.8)
      }
      // 重置立方体顶部的四边形的4个顶点的颜色
      const k = 2
      colors.setXYZ(k * 4 + 0, .0, g, 1.0)
      colors.setXYZ(k * 4 + 1, .0, g, 1.0)
      colors.setXYZ(k * 4 + 2, .0, g, 1.0)
      colors.setXYZ(k * 4 + 3, .0, g, 1.0)
      const cube = new Mesh(cubeGeom, buildMat)
      cube.position.set(Math.random() * 100 - 50, height / 2, Math.random() * 100 - 50)
      scene.add(cube)

      // 绘制边框线
      const lineGeom = new EdgesGeometry(cubeGeom)
      const lineMaterial = new LineBasicMaterial({
        color: 0x0F8BF5,
        linewidth: 10,
        linecap: 'round',
        linejoin: 'round'
      })
      const line = new LineSegments(lineGeom, lineMaterial)
      line.scale.copy(cube.scale)
      line.rotation.copy(cube.rotation)
      line.position.copy(cube.position)
      scene.add(line)
    }
  }

  createLight()
  createBuildings()

  const runAnimate = () => {
    buildingSweepingLightShader.uniforms.boxH.value += 0.1
    if (buildingSweepingLightShader.uniforms.boxH.value > 10) {
      buildingSweepingLightShader.uniforms.boxH.value = -10.0
    }

    requestID.value = requestAnimationFrame(runAnimate)
    renderer.render(scene, camera)
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