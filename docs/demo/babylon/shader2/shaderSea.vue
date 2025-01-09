<template>
  <div>
    <div class="color-blue">平面+噪音形成高低(效果不好，需要优化)</div>
    <div class="color-red">法线+灯光模拟阳光照射，蓝色深浅(未完成，现阶段是y的高低判断蓝色还是白色)</div>
    <div class="color-red">镜面倒影(未完成)</div>
    <div class="color-red">在shadertoy中搜索ice，学习水面如何渲染</div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="shaderSea" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import { 
  CustomMaterial 
} from 'babylonjs-materials'
import {
  Engine,
  Scene,
  Texture,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  Color4,
  ArcRotateCamera,
  Vector3
} from 'babylonjs'

let sceneResources
let uTime = 0.0

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
  const ele = document.getElementById("shaderSea") as any

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
  camera.panningSensibility = 200
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(50, 50, 50))

  const createLight = () => {
    const light = new HemisphericLight('light',new Vector3(0, 50, 0), scene)
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

  const createGround = () => {
    const ground = MeshBuilder.CreateGroundFromHeightMap(
      "heightMap", 
      "/images/heightMap.png", 
      { width: 100, height: 100, subdivisions: 500, maxHeight: 30 }
    )
    const mat = new CustomMaterial('grass', scene)
    mat.diffuseTexture = new Texture('/images/ground.jpg', scene)
    ground.material = mat
    return ground
  }

  const createSphereShader = () => {
    Effect.ShadersStore['customShaderVertexShader'] = `
      precision highp float;

      attribute vec3 position;
      attribute vec2 uv;

      uniform mat4 worldViewProjection;
      uniform sampler2D textureSampler;
      uniform float uTime;

      varying vec3 vColor;

      float random(vec2 uv) {
        return fract(sin(dot(uv.xy, vec2(12.354121, 91.321))) * 452361.21321);
      }

      float noise(vec2 uv) {
        vec2 i = floor(uv); // 将输入的二维向量uv向下取整，得到包含uv点所在网格块的整数坐标i。这是为了确定uv点位于哪个2D网格单元内。
        vec2 f = fract(uv); // 得到uv的小数部分，即uv点在其所在网格单元内的相对位置f。f的范围是[0, 1)。

        // 2d块的四个角，这四行计算了uv所在2D块的四个角上的随机值。
        float a = random(i); // 当前网格块左下角的随机值a。这里使用random函数和网格块的整数坐标i作为输入。
        float b = random(i + vec2(1.0, 0.0)); // 当前网格块右下角的随机值b。通过给i的x坐标加1，可以定位到相邻的右侧网格块的左下角（因为i是整数坐标，加1后仍然是整数坐标）。
        float c = random(i + vec2(0.0, 1.0)); // 当前网格块左上角的随机值c。通过给i的y坐标加1，可以定位到相邻的上侧网格块的左下角。
        float d = random(i + vec2(1.0, 1.0)); // 当前网格块右上角的随机值d。通过同时给i的x和y坐标加1，可以定位到相邻的右上角网格块的左下角（或者说当前网格块的右上角，取决于如何看待相邻和当前的关系）。
        
        vec2 u = f * f * (3.0 - 2.0 * f); // 计算一个平滑的插值因子u，用于在四个角点之间进行平滑过渡。f * f * (3.0 - 2.0 * f)是一个三次插值函数，在[0, 1]区间内生成一个平滑的曲线，用于在四个噪声值之间进行插值。

        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y; // 使用mix函数和之前计算的插值因子u来在水平方向（x轴）上插值a和b，并手动计算垂直方向（y轴）以及斜对角方向的插值，得到最终的噪声值。这个计算考虑了所有四个角点的贡献，并通过插值因子u来平滑过渡，从而生成一个平滑的二维噪声。
      }

      float fbm(vec2 uv) {
        float value = 0.0;
        float amplitude = 0.75; // 振幅
        float frequency = 0.4; // 频率

        for(int i = 0; i < 6; i++) {
          value += amplitude * noise(uv) * frequency;
          uv *= 3.0;
          amplitude *= 0.5;
        }

        return value;
      }
      
      void main() {
        float x = position.x;
        float y = position.y;
        float z = position.z;

        vec4 baseColor = texture(textureSampler, uv);
        float allBlackColor = baseColor.r + baseColor.g + baseColor.b;
        // if (allBlackColor == 0.0) { // 只有黑色的区域是河流
        vec2 move1 = vec2(0.0);
        move1.x = fbm(uv * 3.0);
        move1.y = fbm(uv * 2.0);

        vec2 move2 = vec2(0.0);
        move2.x = fbm(uv + -0.2 * uTime + move1 + vec2(0.82, 0.32));
        move2.y = fbm(uv + 0.5 * uTime + move1 + vec2(0.42, 0.732));

        float fbm_value = fbm(uv + move2);

        vec3 yColor = mix(vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0), clamp((fbm_value * fbm_value) * 4.0, 0.0, 1.0));
        y += yColor.r * yColor.g * yColor.b * 1.2; // y的最大值是1.2

        vColor = mix(vec3(0.1, 0.56, 1.0), vec3(0.48, 0.75, 1.0), clamp(y, 0.0, 1.0)); // vec3(0.1, 0.56, 1.0)蓝色  vec3(0.48, 0.75, 1.0)蓝白色  由低到高 
        // }

        gl_Position = worldViewProjection * vec4(vec3(x, y, z), 1.0);
      }
    `

    Effect.ShadersStore['customShaderFragmentShader'] = `
      precision highp float;

      varying vec3 vColor;
      
      void main(void) {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `

    const customShader = new ShaderMaterial(
      'customShader',
      scene, {
        vertex: 'customShader',
        fragment: 'customShader',
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'textureSampler', 'uTime'],
        samplers: ['textureSampler'],
        needAlphaBlending: true,
      },
    )

    const texture = new Texture('/images/heightMap.png', scene)
    customShader.setTexture('textureSampler', texture)
    customShader.setFloat('uDown', uTime)
    
    return customShader
  }

  const createPlane = () => {
    const plane = MeshBuilder.CreateGround(
      'plane', 
      { 
        width: 110, 
        height: 110, 
        subdivisions: 550 
      },
      scene
    )
    const material = createSphereShader()
   
    plane.material = material
    return material
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
  createGround()
  const material = createPlane()
  runAnimate()

  scene.registerBeforeRender(function() {
    material.setFloat('uTime', uTime)
    uTime += 0.002

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
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>