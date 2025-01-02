<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderLine" class="stage"></canvas>
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
  Color3,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial
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


// const vertexShader = `
//   attribute vec3 position;
//   attribute vec2 uv;

//   uniform mat4 worldViewProjection;

//   varying vec3 vPosition;
//   varying vec2 vUv;

//   void main() { 
//     vUv = uv; 
//     gl_Position = worldViewProjection * vec4(position, 1.0);
//   }
//   `
// const fragmentShader = `
//   uniform float iTime;
//   uniform vec2 iResolution; 
//   varying vec2 vUv;

//   vec3 hsb2rgb(in vec3 c) {
//     vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0,1.0 );
//     rgb = rgb*rgb*(3.0-2.0*rgb);
//     return c.z * mix( vec3(1.0), rgb, c.y);
//   }
//   void main(void) {
//     vec2 p = (2.0*vUv.xy-iResolution.xy)/iResolution.y;
//     float r = length(p) * 0.9;
//     vec3 color = hsb2rgb(vec3(0.24, 0.7, 0.4));

//     float a = pow(r, 2.0);
//     float b = sin(r * 0.8 - 1.6);
//     float c = sin(r - 0.010);
//     float s = sin(a - iTime * 3.0 + b) * c;

//     color *= abs(1.0 / (s * 10.8)) - 0.01;
//     gl_FragColor = vec4(color, 1.);
//     }
//   `

const sinCosPosition = (i, dense) => {
  let r = 20
  let deg = (i / 180) * Math.PI * dense
  let x = Math.cos(deg) * r
  let y = Math.sin(deg) * r
  return {
    x,
    y
  }
}

const initScene = async () => {
  const ele = document.getElementById("shaderLine") as any

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
  scene.useRightHandedSystem = true

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(200, 200, 200))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(1, 1, 0), scene)
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
  }

  const createLine = () => {
    let uLen = 80.0
    let uTotal = 360.0
    let uVelocity = 1.0
    let uSize = 5.0
    let uTime = 0.0
    let uColor = new Color3(1, 0, 0)
    Effect.ShadersStore['lineShaderVertexShader'] = `
      // 设置着色器精度
      precision highp float;

      attribute vec3 position;
      uniform mat4 worldViewProjection;

      attribute float current;
      uniform float uSize;
      uniform float uTime;
      uniform float uLen;
      uniform float uTotal;
      uniform float uVelocity;
      uniform vec3 uColor;

      varying float vOpacity;

      void main(void) {
        float size = uSize;

        // speed*time得到当前路程，然后除以总路程，就是当前第几个粒子
        // mod(a, b) --> a / b的余数，20/100=0.2 --> 2
        float curDis = mod(uTime * uVelocity, uTotal * 2.0);

        // 判断当前像素点是否在uLen范围内
        if (current < curDis && curDis - current < uLen) {
          // 设置渐变大小，头大尾小
          float sizePct = (uLen  - (curDis - current)) / uLen;
          // clamp函数将一个值限制在另外两个值之间
          // clamp(a, min, max)
          size *= sizePct;
          vOpacity = clamp(1.0 * sizePct, 0.2, 1.0);
        } else if (current < curDis) {
          vOpacity = 0.2;
        } else {
          vOpacity = 0.2;
        }

        // gl_PointSize = size * 1.0;
        gl_Position = worldViewProjection * vec4(position, 1.0);
      }`
    Effect.ShadersStore['lineShaderFragmentShader'] = `
      precision highp float;

      varying float vOpacity;

      void main(void) {
        if (vOpacity <= 0.2) {
          gl_FragColor = vec4(0.0, 1.0, 0.0, vOpacity);
          // discard;
        } else {
          gl_FragColor = vec4(1.0, 0.0, 0.0, vOpacity);
        }
      }`

    const lineShader = new ShaderMaterial(
      'lineShader',
      scene, {
        vertex: 'lineShader',
        fragment: 'lineShader'
      }, {
        attributes: ['position', 'current'],
        uniforms: [
          'worldViewProjection',
          'uLen',
          'uTotal',
          'uSize',
          'uVelocity',
          'uTime',
          'uColor'
        ]
      }
    )

    lineShader.setFloat('uLen', uLen)
    lineShader.setFloat('uTotal', uTotal)
    lineShader.setFloat('uSize', uSize)
    lineShader.setFloat('uVelocity', uVelocity)
    lineShader.setColor3('uColor', uColor)

    let idx: any = []
    let vPos: any = []
    let index = 0
    let add = 0

    while (index < uTotal * 2) {
      const {
        x,
        y
      } = sinCosPosition(add, 2 * Math.PI)
      vPos.push(new Vector3(add, x, y))
      idx.push(index)
      index++
      add += 0.5
    }

    let me = MeshBuilder.CreateLines(
      'tex', {
        points: vPos,
        updatable: true
      },
      scene
    )
    me.position = new Vector3(0, 20, 0)
    me.setVerticesData('current', idx, true, 1)
    me.material = lineShader

    scene.registerBeforeRender(function() {
      lineShader.setFloat('uTime', uTime)
      uTime += 5
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
  createLine()
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
