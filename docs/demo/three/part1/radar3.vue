<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div>把多个geo合并成一个并添加shader</div>
    <div v-if="isRunning" id="radar3" class="stage"></div>
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
  BufferGeometry,
  BufferAttribute,
  BoxGeometry,
  MeshStandardMaterial,
} from 'three'

const requestID = ref<any>()
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

function mergeAttributes(attributes) {
  let TypedArray
  let itemSize
  let normalized
  let gpuType = -1
  let arrayLength = 0
  for (let i = 0; i < attributes.length; ++i) {
    const attribute = attributes[i]
    if (TypedArray === undefined) TypedArray = attribute.array.constructor
    if (TypedArray !== attribute.array.constructor) {
      console.error(
        'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.'
      )
      return null
    }
    if (itemSize === undefined) itemSize = attribute.itemSize
    if (itemSize !== attribute.itemSize) {
      console.error(
        'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.'
      )
      return null
    }
    if (normalized === undefined) normalized = attribute.normalized
    if (normalized !== attribute.normalized) {
      console.error(
        'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.'
      )
      return null
    }
    if (gpuType === -1) gpuType = attribute.gpuType
    if (gpuType !== attribute.gpuType) {
      console.error(
        'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.'
      )
      return null
    }
    arrayLength += attribute.count * itemSize
  }
  const array = new TypedArray(arrayLength)
  const result: any = new BufferAttribute(array, itemSize, normalized)
  let offset = 0
  for (let i = 0; i < attributes.length; ++i) {
    const attribute = attributes[i]
    if (attribute.isInterleavedBufferAttribute) {
      const tupleOffset = offset / itemSize
      for (let j = 0, l = attribute.count; j < l; j++) {
        for (let c = 0; c < itemSize; c++) {
          const value = attribute.getComponent(j, c)
          result.setComponent(j + tupleOffset, c, value)
        }
      }
    } else {
      array.set(attribute.array, offset)
    }
    offset += attribute.count * itemSize
  }
  if (gpuType !== undefined) {
    result.gpuType = gpuType
  }
  return result
}

function mergeGeometries(geometries, useGroups = false) {
  const isIndexed = geometries[0].index !== null
  const attributesUsed = new Set(Object.keys(geometries[0].attributes))
  const morphAttributesUsed = new Set(Object.keys(geometries[0].morphAttributes))
  const attributes = {}
  const morphAttributes: any = {}
  const morphTargetsRelative = geometries[0].morphTargetsRelative
  const mergedGeometry = new BufferGeometry()
  let offset = 0
  for (let i = 0; i < geometries.length; ++i) {
    const geometry = geometries[i]
    let attributesCount = 0
    // ensure that all geometries are indexed, or none
    if (isIndexed !== (geometry.index !== null)) {
      console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i +
        '. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.'
      )
      return null
    }
    // gather attributes, exit early if they're different
    for (const name in geometry.attributes) {
      if (!attributesUsed.has(name)) {
        console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i +
          '. All geometries must have compatible attributes; make sure "' + name +
          '" attribute exists among all geometries, or in none of them.')
        return null
      }
      if (attributes[name] === undefined) attributes[name] = []
      attributes[name].push(geometry.attributes[name])
      attributesCount++
    }
    // ensure geometries have the same number of attributes
    if (attributesCount !== attributesUsed.size) {
      console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i +
        '. Make sure all geometries have the same number of attributes.')
      return null
    }
    // gather morph attributes, exit early if they're different
    if (morphTargetsRelative !== geometry.morphTargetsRelative) {
      console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i +
        '. .morphTargetsRelative must be consistent throughout all geometries.')
      return null
    }
    for (const name in geometry.morphAttributes) {
      if (!morphAttributesUsed.has(name)) {
        console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i +
          '.  .morphAttributes must be consistent throughout all geometries.')
        return null
      }
      if (morphAttributes[name] === undefined) morphAttributes[name] = []
      morphAttributes[name].push(geometry.morphAttributes[name])
    }
    if (useGroups) {
      let count
      if (isIndexed) {
        count = geometry.index.count
      } else if (geometry.attributes.position !== undefined) {
        count = geometry.attributes.position.count
      } else {
        console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i +
          '. The geometry must have either an index or a position attribute')
        return null
      }
      mergedGeometry.addGroup(offset, count, i)
      offset += count
    }
  }
  // merge indices
  if (isIndexed) {
    let indexOffset = 0
    const mergedIndex: any = []
    for (let i = 0; i < geometries.length; ++i) {
      const index = geometries[i].index
      for (let j = 0; j < index.count; ++j) {
        mergedIndex.push(index.getX(j) + indexOffset)
      }
      indexOffset += geometries[i].attributes.position.count
    }
    mergedGeometry.setIndex(mergedIndex)
  }
  // merge attributes
  for (const name in attributes) {
    const mergedAttribute = mergeAttributes(attributes[name])
    if (!mergedAttribute) {
      console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ' + name +
        ' attribute.')
      return null
    }
    mergedGeometry.setAttribute(name, mergedAttribute)
  }
  // merge morph attributes
  for (const name in morphAttributes) {
    const numMorphTargets = morphAttributes[name][0].length
    if (numMorphTargets === 0) break
    mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {}
    mergedGeometry.morphAttributes[name] = []
    for (let i = 0; i < numMorphTargets; ++i) {
      const morphAttributesToMerge: any = []
      for (let j = 0; j < morphAttributes[name].length; ++j) {
        morphAttributesToMerge.push(morphAttributes[name][j][i])
      }
      const mergedMorphAttribute = mergeAttributes(morphAttributesToMerge)
      if (!mergedMorphAttribute) {
        console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ' +
          name + ' morphAttribute.')
        return null
      }
      mergedGeometry.morphAttributes[name].push(mergedMorphAttribute)
    }
  }
  return mergedGeometry
}

const vertexShader = `
  varying vec3 vp;
  void main() {
    vp = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec3 vp;
					
  uniform vec3 u_color;
  uniform float u_pi;
  uniform float u_radius;
  uniform float u_rotation_step;
  
  float getLength(float x, float y) {
    return sqrt((x - 0.0) * (x - 0.0) + (y - 0.0) * (y - 0.0));
  }
  
  void main() {
    // 旋转
    float angOffset = u_rotation_step * 0.05;
    float cosAng = cos(angOffset);
    float sinAng = sin(angOffset);
    mat2 modelMatrix = mat2(
      cosAng,sinAng,
      -sinAng,cosAng
    );
    vec2 point = modelMatrix * vp.xy;
    
    
    // ang=[-π,π]
    // atan(y,x)用于将XY坐标，返回弧度
    float ang = atan(point.y, point.x);
    // (u_pi - π)  或者 (u_pi - - π) 取值 0 ~ 2π
    float radians = u_pi - ang;
    float opacity = radians / (u_pi * 1.0);
    // float opacity = 1.0;
    
    // 隐藏某些部分
    if (abs(radians) > 1.0) {
      opacity = 0.0;
    }
    
    // 距离
    float uLength = getLength(point.x, point.y);
    if (uLength > u_radius) {
      opacity = 0.0;
    }
    
    gl_FragColor = vec4(u_color, opacity);
  }
`

const initScene = () => {
  const ele = document.getElementById('radar3') as HTMLElement
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

  function getRandomInt(min, max) {
    // 包括 min，不包括 max
    min = Math.ceil(min);  // 如果 min 不是整数，向上取整
    max = Math.floor(max); // 如果 max 不是整数，向下取整
    return Math.floor(Math.random() * (max - min + 1)) + min; // 含 min，不含 max
  }

  const createPlane = () => {
    const radarGeom = new PlaneGeometry(100, 100, 1, 1)
    const mat = new MeshStandardMaterial({
      color: '#f00',
      side: DoubleSide
    })
    const plane = new Mesh(radarGeom, mat)
    scene.add(plane)
  }

  const createMergeGeo = () => {
    const radarMat = new ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: DoubleSide,
      uniforms: {
        u_color: { value: new Color('#0f0') },
        u_radius: { value: 50.0 },
        u_rotation_step: { value: 0.0 },
        u_pi: {  value: 3.14  }
      },
      transparent: true,
      depthWrite: false,
    })

    const mergeGeoArr: any = []
    for (let i = 0; i < 3; i++) {
      const boxGeometry = new BoxGeometry(10, 10, 10)
      const x = getRandomInt(0, 40)
      const y = getRandomInt(0, 40)
      boxGeometry.translate(x, y, 0)
      mergeGeoArr.push(boxGeometry)
    }
    const radarGeom = new PlaneGeometry(100, 100, 1, 1)
    const mergeGeo: any = mergeGeometries([...mergeGeoArr, radarGeom])
    const radar = new Mesh(mergeGeo, radarMat)
    scene.add(radar)
    return radar
  }

  createLight()
  createPlane()
  const radar = createMergeGeo()

  const runAnimate = () => {
    radar.material.uniforms.u_rotation_step.value += 0.5

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