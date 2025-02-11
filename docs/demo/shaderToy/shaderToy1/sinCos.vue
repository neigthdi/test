
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

        float amplitude = 1.0;
        float frequency = 1.0;

        // 没有AA采样
        // float y = amplitude * sin(u_time) * cos(uv.x * frequency + u_time);
        // if(uv.y < y) {
        //   color = vec3(1.0);
        // }

        // 累积采样结果
        float totalSampled = 0.0;

        // 对每个像素进行多次采样
        for (int i = 0; i < AA; ++i) {
          for (int j = 0; j < AA; ++j) {
            // 计算当前采样点的偏移量，范围是[-0.5, 0.5]，但经过除以AA后，范围会缩小到[-(1/2AA), (1/2AA)]
            vec2 offset = vec2(float(i), float(j)) / float(AA) - 0.5;

            // 根据偏移量和原始UV坐标计算采样点的UV坐标。这里再次考虑了分辨率的纵横比，以确保采样均匀
            vec2 sampleUV = uv + offset / min(u_resolution.y, u_resolution.x);

            // 根据采样点的UV坐标和时间计算波形的高度
            float y = amplitude * sin(u_time) * cos(sampleUV.x * frequency + u_time);
 
            // 使用step函数判断采样点的y坐标是否小于波形的y坐标。如果是，则返回1；否则返回0
            float sample = step(sampleUV.y, y); // step 函数返回0或1

            // 将判断结果累加到totalSampled中
            totalSampled += sample;
          }
        }
        
        // 计算平均采样结果，并根据结果决定颜色
        float alpha = totalSampled / float(AA * AA); // 平均后的透明度值
        vec3 color = vec3(1.0) * alpha; // 根据透明度值决定颜色

        gl_FragColor = vec4(color, 1.0);
      }`)
  })
}

</script>
