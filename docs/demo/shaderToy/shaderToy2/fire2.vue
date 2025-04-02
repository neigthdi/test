<template>
  <div>
    <div>未完成</div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="fire2" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue'

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

onMounted(async () => {
  await nextTick()
})

const onStart = () => {
  import('glslCanvas').then(module => {
    const canvas = document.getElementById('fire2')
    const glslCanvas: any = new module.default(canvas)

    glslCanvas.load(`
      #extension GL_OES_standard_derivatives : enable
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = (fragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x); // 归一化 uv 的坐标，范围在 [-1, 1] 之间
        
        gl_FragColor = vec4(1.0, 0.2, 0.3, 1.0);
      }`)
  })
}
</script>