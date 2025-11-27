<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderPipe1" class="stage"></canvas>
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
  const ele = document.getElementById("shaderPipe1") as any

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
    // 创建管道函数
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
    
    // 1. 直线管道
    // const straightPath = [
    //   new Vector3(-8, 0, 0),
    //   new Vector3(8, 0, 0)
    // ]
    // createPipe('straightPipe', straightPath, 0.4, scene)

    // 2. L形弯管
    // const lPath = [
    //   new Vector3(-4, -3, 0),
    //   new Vector3(-4, 0, 0),
    //   new Vector3(0, 0, 0)
    // ]
    // createPipe('lPipe', lPath, 0.3, scene)

    // 3. U形管道
    // const uPath = [
    // 	new BABYLON.Vector3(0, 0, -1),
    // 	new BABYLON.Vector3(0, 0, 1),
    // 	new BABYLON.Vector3(2, 0, 1),
    // 	new BABYLON.Vector3(2, 0, -1)
    // ]
    // createPipe('uPipe', uPath, 0.25, scene)

    // 4. S形复杂管道
    const sPath: any = []
    for (let i = 0; i <= 40; i++) {
      const t = i / 40 * Math.PI * 2
      const x = Math.cos(t) * 4
      const y = Math.sin(t * 2) * 2 // 双重频率创造S形
      const z = Math.sin(t) * 4
      sPath.push(new Vector3(x, y, z))
    }
    // createPipe('sPipe', sPath, 0.2, scene)


    // 5. 垂直管道（带法兰）
    // const verticalPipe = createPipe('verticalPipe', [
    //   new Vector3(6, -4, 0),
    //   new Vector3(6, 4, 0)
    // ], 0.35, scene)

    // 创建法兰
    // const createFlange = (name, position, scene) => {
    //   const flange = MeshBuilder.CreateCylinder(name, {
    //     height: 0.2,
    //     diameter: 1.2
    //   }, scene)
    //   flange.position = position
    //   return flange
    // }
    // createFlange('flange1', new Vector3(6, -4, 0), scene)
    // createFlange('flange2', new Vector3(6, 4, 0), scene)



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
      
      uniform float uLen;
      uniform float uCurInd;
      // uniform float uTotal;
      
      varying vec2 vUV;
      
      void main(void) {
        // 顶点在路径上的位置 (0 到 1)
        float vertexPos = vUV.y;  // 直接使用UV坐标
          
        // 将动画位置归一化到 0-1 范围
        float curPos = mod(uCurInd, 1.0);
        
        // 红色块的起始和结束位置
        float blockStart = curPos;
        float blockEnd = curPos + uLen;
        
        // 检查顶点是否在红色块范围内（考虑循环）
        bool inBlock = false;
        
        if (blockEnd <= 1.0) {
          // 红色块不跨越边界
          inBlock = (vertexPos >= blockStart && vertexPos < blockEnd);
        } else {
          // 红色块跨越边界（分成两段）
          inBlock = (vertexPos >= blockStart || vertexPos < (blockEnd - 1.0));
        }
        
        if (inBlock) {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);  // 红色
        } else {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);  // 黑色
        }
      }
    `
    const shaderMaterial = new ShaderMaterial(
      'shader',
      scene, {
        vertex: 'customs',
        fragment: 'customs'
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'uLen', 'uCurInd', /** 'uTotal' */]
      }
    )

    const pipe = createPipe('sPipe', sPath, 0.2, scene)

    let curInd = 0.0
    shaderMaterial.setFloat('uLen', 0.2)
    shaderMaterial.setFloat('uCurInd', curInd)
    // shaderMaterial.setFloat('uTotal', pipe.getTotalIndices())

    pipe.material = shaderMaterial

    scene.registerBeforeRender(() => {
      curInd += 0.005
      shaderMaterial.setFloat('uCurInd', curInd)
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
