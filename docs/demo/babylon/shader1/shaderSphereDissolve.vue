<template>
  <div>
    <div class="flex space-between">
      <div>fps: {{ fps }}</div>
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '暂停' }}</div>
    </div>
    <div v-if="isRunning">
      <span class="pointer" @click="changeSituation(1)">效果1</span>
      <span class="pointer m-l-20" @click="changeSituation(2)">效果2</span>
      <span class="pointer m-l-20" @click="changeSituation(3)">效果3</span>
    </div>
    <canvas id="shaderSphereDissolve" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'

import { pkg } from '../index.js'
const {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  HemisphericLight,
  MeshBuilder,
  Effect,
  ShaderMaterial,
  Texture
} = pkg

let sceneResources

const fps = ref(0)
const isRunning = ref(false)

const onTrigger = async () => {
  if(!isRunning.value) {
    isRunning.value = true
    sceneResources = await initScene()
  } else {
    isRunning.value = false
    destroy()
  }
}

const situation1Text = () => {
  return `
    float noiseValue = noise(p + uTime * 1.0); // 随时间变化的噪声

    float dissolve = smoothstep(baseColor.g, baseColor.b, noiseValue); // 循环
    gl_FragColor = mix(vec4(0.0), baseColor, dissolve);
  `
}

const situation2Text = () => {
  return `
    float noiseValue = noise(p + uTime * 1.0); // 随时间变化的噪声

    // 大于某个值则消失
    // baseColor.b * noiseValue应该是其他合适的值，现结果的溶解边缘不够圆润
    if(uTime > baseColor.g * noiseValue) {
    	discard;
    } else {
    	gl_FragColor = baseColor;
    }
  `
}

const situation3Text = () => {
  return `
    float noiseValue = noise(p + uRandom); // 随时间变化的噪声

    // 大于某个值则消失
    // baseColor.b * noiseValue应该是其他合适的值，现结果的溶解边缘不够圆润
    if(uTime > noiseValue) {
    	discard;
    } else {
    	gl_FragColor = baseColor;
    }
  `
}

const situationObj = {
 '1': situation1Text(),
 '2': situation2Text(),
 '3': situation3Text()
}


const curSituation = ref(1)

const changeSituation = async (cur) => {
  if(isRunning.value) {
    destroy()
    curSituation.value = cur
    await nextTick()
    setTimeout(async() => {
      sceneResources = await initScene()
    }, 500)
  }
}

const initScene = async () => {
  let time = 0

  const ele = document.getElementById("shaderSphereDissolve") as any

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
  camera.setPosition(new Vector3(20, 20, 20))

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

  const createShader = () => {
    Effect.ShadersStore['customVertexShader'] = `
      precision highp float;
    
      attribute vec3 position;
      uniform mat4 worldViewProjection;
      
      attribute vec2 uv; // 纹理坐标，通常在0到1之间
      
      varying vec2 vUv;
      
      void main(void) {
        vUv = uv;
        gl_Position = worldViewProjection * vec4(position, 1.0);
      }
    `

    Effect.ShadersStore['customFragmentShader'] = `
      precision highp float;
    
      uniform sampler2D uSampler;
      
      uniform float uTime;
      uniform float uRandom;
      
      varying vec2 vUv;
      
      vec2 grad(vec2 z) {
        int n = int(z.x) + int(z.y) * 11111;
        n = (n << 13) ^ n;
        n = (n * (n * n * 15731 + 789221) + 1376312589) >> 16;
      
        return vec2(cos(float(n)) ,sin(float(n)));
      }
      
      // 柏林噪音
      float noise(vec2 p) {
        vec2 i = vec2(floor(p));
        vec2 f = fract(p);

        vec2 u = f * f * (3.0 - 2.0 * f);
        
        float mix1 = mix(dot(grad(i + vec2(0, 0)), f - vec2(0.0, 0.0)), dot(grad(i + vec2(1, 0)), f - vec2(1.0, 0.0)), u.x);
        float mix2 = mix(dot(grad(i + vec2(0, 1)), f - vec2(0.0, 1.0)), dot(grad(i + vec2(1, 1)), f - vec2(1.0, 1.0)), u.x);
        return mix(mix1, mix2, u.y) * 0.5 + 0.5;
      }
      
      void main(void) {
        // texSampler：一个二维纹理采样器，它是纹理对象的引用
        // texCoord：纹理坐标，通常在0到1之间（如果纹理没有使用非归一化坐标的话）
        
        // OpenGL ES 2.0 或 OpenGL 3.x 之前的版本
        // vec4 color = texture2D(texSampler, texCoord);
        // gl_FragColor = texture2D(textureSampler, vUv); 
        
        // OpenGL 3.x 及更高版本
        // vec4 color = texture(texSampler, texCoord);
        
        
        // 基础颜色
        vec4 baseColor = texture(uSampler, vUv);
                  
        vec2 p = vUv * 10.0; // 缩放噪声
        
        ${situationObj[curSituation.value]}
      }
    `

    const sphereMat = new ShaderMaterial(
      'custom',
      scene, {
        vertex: 'custom',
        fragment: 'custom'
      }, {
        attributes: ['position', 'uv'],
        uniforms: ['worldViewProjection', 'uSampler', 'uTime'],
        samplers: ['uSampler'],
      }
    )

    const texture = new Texture('/images/ground.jpg', scene)
    sphereMat.setTexture('uSampler', texture)
    sphereMat.setFloat('uTime', time)
    sphereMat.setFloat('uRandom', Number((Math.random() * 123).toFixed(8)))

    const sphere = MeshBuilder.CreateSphere('sphere', {
      diameter: 10
    }, scene)
    sphere.material = sphereMat
    sphere.material.alpha = 0 // 透明度未0

    return sphereMat
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
  const sphereMat = createShader()
  runAnimate()

  scene.onBeforeRenderObservable.add(() => {
    time += curSituation.value === 1 ? 0.02 : 0.005
    sphereMat.setFloat('uTime', time)
  })

  return {
    scene,
    engine, 
  }
}

const destroy = () => {
  if(sceneResources) {
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
