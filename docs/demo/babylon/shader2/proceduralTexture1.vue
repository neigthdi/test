<template>
  <div>
    <div>proceduralTexture1和proceduralTexture2的区别：</div>
    <div>如果第一个proceduralTexture传入了rawTextureY这些数据，想通过uTime改变texture(uSampler, vUV)是不起效果的，还会报错。</div>
    <div>只有等创建了一份ProceduralTexture后，才能在第二份的ProceduralTexture传入uTime改变texture(uSampler, vUV)。</div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="proceduralTexture1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  ArcRotateCamera,
  Vector3,
  Color3,
  Color4,
  ProceduralTexture,
} from 'babylonjs'
import {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
} from 'babylonjs-gui'

let sceneResources, adt

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

let uTime = 0.2

const initScene = async () => {
  const ele = document.getElementById("proceduralTexture1") as any

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
  scene.useRightHandedSystem = false

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 1
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(0, 560, -560))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(40, 40, 40), scene)
    light.direction = new Vector3(1.0, 0.0, 1.0)
    light.diffuse = new Color3(1.0, 0.95, 0.8)
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


  Effect.ShadersStore['firstShaderVertexShader'] = `
    precision highp float;
    
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 worldViewProjection;

    varying vec2 vUV;

    void main() {
      vUV = uv;
      gl_Position = worldViewProjection * vec4(position, 1.0);
    }
  `

  Effect.ShadersStore['firstShaderFragmentShader'] = `
    precision highp float;

    varying vec2 vUV;
    uniform float uTime;

    void main() {
      vec3 c = vec3(0.0);
      if(vUV.x < 0.5) c.r = cos(uTime);
      gl_FragColor = vec4(c, 1.0);
    }
  `

  Effect.ShadersStore['secondShaderVertexShader'] = `
    precision highp float;
    
    attribute vec3 position;
    uniform mat4 worldViewProjection;
    
    attribute vec2 uv;

    varying vec2 vUV;

    void main() {
      vUV = uv;
      gl_Position = worldViewProjection * vec4(position, 1.0);
    }
  `

  Effect.ShadersStore['secondShaderFragmentShader'] = `
    precision highp float;

    uniform sampler2D uSampler;

    varying vec2 vUV;
    uniform float uTime;

    void main() {

      vec4 baseColor = texture(uSampler, vUV);

      if(vUV.y > 0.5) baseColor.g = 0.5;
      baseColor.b += sin(uTime);

      gl_FragColor = vec4(baseColor);
    }
  `

  Effect.ShadersStore['thirdShaderVertexShader'] = `
    precision highp float;
    
    attribute vec3 position;
    uniform mat4 worldViewProjection;
    
    attribute vec2 uv;

    varying vec2 vUV;

    void main(void) {
      vUV = uv;
      gl_Position = worldViewProjection * vec4(position, 1.0);
    }
  `

  Effect.ShadersStore['thirdShaderFragmentShader'] = `
    precision highp float;

    uniform sampler2D uSampler;

    varying vec2 vUV;

    void main(void) {

      vec4 baseColor = texture(uSampler, vUV);

      if(vUV.y < 0.5) baseColor.b = 0.3;

      gl_FragColor = vec4(baseColor);
    }
  `

  const createProceduralTexture = () => {
    const finalShader = new ShaderMaterial(
      'thirdShader',
      scene, {
        vertex: 'thirdShader',
        fragment: 'thirdShader',
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'uSampler'],
        samplers: ['uSampler'],
        needAlphaBlending: true,
      },
    )

    const procTex1 = new ProceduralTexture('first', 256, 'firstShader', scene)
    const procTex2 = new ProceduralTexture('second', 256, 'secondShader', scene)
    
    const finalPlane = MeshBuilder.CreateGround('plane', { width: 256, height: 256, subdivisions: 256 },  scene)
    finalPlane.material = finalShader

    procTex2.setTexture('uSampler', procTex1)
    finalShader.setTexture('uSampler', procTex2)

    return { procTex1, procTex2 }
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
  runAnimate()


  const { procTex1, procTex2  } = createProceduralTexture()
  scene.registerBeforeRender(() => {
    procTex1.setFloat('uTime', uTime)
    procTex2.setFloat('uTime', uTime)
    uTime += 0.02
  })

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
  // isRunning.value = true
  // await nextTick()
  // sceneResources = await initScene()
})

onUnmounted(() => {
  destroy()
})
</script>