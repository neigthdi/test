
<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="perlinNoiseMap" class="stage"></canvas>
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
    const canvas = document.getElementById('perlinNoiseMap')
    const glslCanvas: any = new module.default(canvas)

    const random = Math.random()
 
    glslCanvas.load(`
      #extension GL_OES_standard_derivatives: enable
      precision highp float;

      uniform vec2 u_resolution;

      #define amp 1.9 // 噪声的振幅（amplitude），控制噪声的强度
      #define fre 1.0 // 噪声的频率（frequency），控制噪声的细节程度
      #define oct 5.0 // 噪声的八度数（octaves），用于生成更复杂的噪声

      #define laun 2.0 // 每八度的频率倍数（lacunarity），通常为2.0，表示每增加一个八度，频率翻倍
      #define pers 0.8 // 振幅衰减率（persistence），通常为0.8，表示每增加一个八度，振幅减少20%，用于控制每个八度对最终噪声的贡献

      #define zoom 5.0 // 用于缩放UV坐标，控制地形的“放大”或“缩小”程度

      #define edge 1.0 // 边缘宽度，用于控制地形的边缘效果，平滑过渡
      #define delta_edge 0.2 // 边缘宽度的过渡范围，用于控制边缘效果的过渡程度

      #define snow        vec3(0.9, 0.9, 0.9)
      #define mountains   vec3(0.4, 0.4, 0.2)
      #define hills       vec3(0.6, 0.6, 0.1)
      #define plain       vec3(0.1, 0.8, 0.2)
      #define beach       vec3(0.8, 0.8, 0.1)
      #define shallow_sea vec3(0.1, 0.1, 0.9)
      #define deep_sea    vec3(0.1, 0.1, 0.6)

      #define v_snow         0.95
      #define v_mountains    0.90
      #define v_hills        0.80
      #define v_plain        0.70
      #define v_beach        0.55
      #define v_shallow_sea  0.50
      #define v_deep_sea     0.30

      float rand(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453 * ${random});
      }

      float noise(vec2 x) {
        vec2 i = floor(x);
        vec2 f = fract(x);

        float a = rand(i);
        float b = rand(i + vec2(1.0, 0.0));
        float c = rand(i + vec2(0.0, 1.0));
        float d = rand(i + vec2(1.0, 1.0));
        vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

        float x1 = mix(a, b, u.x);
        float x2 = mix(c, d, u.x);
        return mix(x1, x2, u.y);
      }


      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = (fragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        vec2 u = fragCoord.xy / u_resolution.xy; // 将屏幕坐标归一化到[0, 1]范围内
        float d = min(min(u.x, edge - u.x), min(u.y, edge - u.y)); // 计算当前像素到边缘的距离

        float dw = smoothstep(0.0, delta_edge, d); // 使用smoothstep函数在边缘处平滑过渡，避免边缘突变

        float val = 0.0; // 初始化噪声值val为0
        uv *= zoom; // 缩放UV坐标，控制地形的“放大”或“缩小”程度

        // 使用循环生成分形噪声
        // 每个八度的振幅 a 和频率 f 根据 pers 和 laun 衰减
        // 将每个八度的噪声值累加到val中
        for (float i = 0.; i < oct; i++) {
          float a = amp * pow(pers, i);
          float f = fre * pow(laun, i);
          val += a * noise(uv * f) / oct;
        }

        // 将噪声值val乘以dw，在边缘处平滑过渡
        val *= dw;

        vec3 col = vec3(0.0);
  
        if (val < v_deep_sea) col = deep_sea;
            
        if (val >= v_deep_sea && val < v_shallow_sea) col = shallow_sea;
            
        if (val >= v_shallow_sea && val < v_beach) col = beach;
            
        if (val >= v_beach && val < v_plain) col = plain;
            
        if (val >= v_plain && val < v_hills) col = hills ;
            
        if (val >= v_hills && val < v_mountains) col = mountains;
            
        if (val >= v_mountains) col = snow; 

        gl_FragColor = vec4(col, 1.0);
      }`)
  })
}

</script>
