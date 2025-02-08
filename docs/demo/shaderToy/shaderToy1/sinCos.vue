
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

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

        uv *= 8.0;

        vec3 color = vec3(0.0);

        float amplitude = 1.0;
        float frequency = 1.0;

        float y = amplitude * sin(u_time) * cos(uv.x * frequency + u_time);

        vec2 point = vec2(uv.x, y);

        if(uv.y < y) {
          color = vec3(1.0);
        }

        gl_FragColor = vec4(color, 1.0);
      }`)
  })
}

</script>
