
<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="sinCos" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const isRunning = ref(false)

const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    onStart()
  } else {
    isRunning.value = false
  }
}

const onStart = () => {
  import('glslCanvas').then(module => {
    const canvas = document.getElementById('sinCos')
    const glslCanvas: any = new module.default(canvas)
 
    glslCanvas.load(`
      precision highp float;

      uniform float u_time;
      uniform vec2 u_resolution;

      const int AA = 2; // 抗锯齿级别，可以根据需要调整

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = (fragCoord - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        uv *= 10.0;

        vec3 color = vec3(0.0);
        float amplitude = 1.0;
        float frequency = 1.0;

        // 没有AA采样
        // float y = amplitude * sin(u_time) * cos(uv.x * frequency + u_time);
        // if(uv.y < y) {
        //   color = vec3(1.0);
        // }

        // 对每个像素进行多次采样
        vec3 finalColor = vec3(0.0);
        for (int i = 0; i < AA; ++i) {
          for (int j = 0; j < AA; ++j) {
            // 计算偏移量
            vec2 offset = vec2(float(i), float(j)) / float(AA) - 0.5;
            vec2 sampleUV = uv + offset / min(u_resolution.y, u_resolution.x);
            float y = amplitude * sin(u_time) * cos(sampleUV.x * frequency + u_time);
            if (sampleUV.y < y) {
                color = vec3(1.0);
            } else {
                color = vec3(0.0);
            }
            finalColor += color;
          }
        }
        // 平均采样结果
        finalColor /= float(AA * AA);

        gl_FragColor = vec4(finalColor, 1.0);
      }`)
  })
}

</script>
