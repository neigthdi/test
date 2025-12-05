<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderPipe2" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  Mesh,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial
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
  const ele = document.getElementById("shaderPipe2") as any

  ele.addEventListener('wheel', function(event: any) {
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

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.panningSensibility = 10
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(20, 20, 20))

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


  const createPipeEffect = () => {
    Effect.ShadersStore['customsVertexShader'] = `
      precision highp float;
      
      attribute vec3 position;
      attribute vec2 uv;
      
      uniform mat4 worldViewProjection;
      
      varying vec2 vUV;
      
      void main(void) {
        vUV = uv;
        gl_Position = worldViewProjection * vec4(position, 1.0);
      }
    `

    Effect.ShadersStore['customsFragmentShader'] = `
      precision highp float;
      
      uniform float uCurInd;
      uniform float uTotal;
      
      varying vec2 vUV;
      
      void main(void) {
        float yDist = vUV.y * uTotal;
        float curDist = uCurInd;
        if(curDist > yDist) {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);  // 红色
        } else {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);  // 黑色
        }
      }
    `

    const shaderMaterial1 = new ShaderMaterial(
      'shader1',
      scene, {
        vertex: 'customs',
        fragment: 'customs'
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'uCurInd', 'uTotal']
      }
    )

    const shaderMaterial2 = new ShaderMaterial(
      'shader2',
      scene, {
        vertex: 'customs',
        fragment: 'customs'
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'uCurInd', 'uTotal']
      }
    )

    const shaderMaterial3 = new ShaderMaterial(
      'shader3',
      scene, {
        vertex: 'customs',
        fragment: 'customs'
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'uCurInd', 'uTotal']
      }
    )

    const shaderMaterial4 = new ShaderMaterial(
      'shader4',
      scene, {
        vertex: 'customs',
        fragment: 'customs'
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'uCurInd', 'uTotal']
      }
    )

    const createPipe = (name, path, radius, scene) => {
      const tubeOptions = {
        path: path,
        radius: radius,
        tessellation: 24, // 圆周分段，越高越圆
        cap: Mesh.CAP_ALL, // 封口
        sideOrientation: Mesh.DOUBLESIDE
      }

      const pipe = MeshBuilder.CreateTube(name, tubeOptions, scene)
      return pipe
    }

    const uPath1 = [
      new Vector3(0, 0, -1),
      new Vector3(0, 0, 1),
      new Vector3(2, 0, 1),
      new Vector3(2, 0, -1)
    ]

    const uPath2 = [
      new Vector3(0, 0, -1),
      new Vector3(0, 0, 1),
      new Vector3(2, 0, 1),
      new Vector3(3, 0, 1),
      new Vector3(3, 0, -1)
    ]

    const uPath3 = [
      new Vector3(0, 0, -1),
      new Vector3(0, 0, 1),
      new Vector3(2, 0, 1),
      new Vector3(3, 0, 1),
      new Vector3(4, 0, 1),
      new Vector3(4, 0, -1)
    ]

    const uPath4 = [
      new Vector3(0, 0, -1),
      new Vector3(0, 0, 1),
      new Vector3(2, 0, 1),
      new Vector3(3, 0, 1),
      new Vector3(4, 0, 1),
      new Vector3(5, 0, 1),
      new Vector3(5, 0, -1)
    ]

    const pipe1 = createPipe('uPipe1', uPath1, 0.25, scene)
    const pipe2 = createPipe('uPipe2', uPath2, 0.25, scene)
    const pipe3 = createPipe('uPipe3', uPath3, 0.25, scene)
    const pipe4 = createPipe('uPipe4', uPath4, 0.25, scene)

    let curInd = 0.0

    pipe1.material = shaderMaterial1
    shaderMaterial1.setFloat('uTotal', pipe1.getTotalIndices())
    shaderMaterial1.setFloat('uCurInd', curInd)
    pipe2.material = shaderMaterial2
    shaderMaterial2.setFloat('uTotal', pipe2.getTotalIndices())
    shaderMaterial2.setFloat('uCurInd', curInd)
    pipe3.material = shaderMaterial3
    shaderMaterial3.setFloat('uTotal', pipe3.getTotalIndices())
    shaderMaterial3.setFloat('uCurInd', curInd)
    pipe4.material = shaderMaterial4
    shaderMaterial4.setFloat('uTotal', pipe4.getTotalIndices())
    shaderMaterial4.setFloat('uCurInd', curInd)

    // 这个可以防止管道pipe2被pipe4给覆盖了
    pipe2.renderingGroupId = 1

    scene.registerBeforeRender(() => {
      curInd += 10.0

      shaderMaterial1.setFloat('uCurInd', curInd)
      shaderMaterial2.setFloat('uCurInd', curInd)
      // shaderMaterial3.setFloat('uCurInd', curInd)
      // shaderMaterial4.setFloat('uCurInd', curInd)
    })
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
  createPipeEffect()
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
