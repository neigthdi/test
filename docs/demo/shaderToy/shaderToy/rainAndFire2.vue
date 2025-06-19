<template>
   <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '打开' : '关闭' }}</div>
      <div  v-if="isRunning">
      <h4>1. 雨滴下降效果的减法</h4>
      <p>雨滴的下降效果是通过减法实现的。具体代码如下：</p>
      <p>vec2 pos = randomRainPos(val, u_resolution.xy, velocity);</p>
      <p>vec2 currentPos = pos + velocity * elapsedTime;</p>
      <p>velocity 是雨滴的速度向量，其垂直分量为负值（-0.8 * u_resolution.y），表示雨滴在垂直方向上向下移动。</p>
      <p>elapsedTime 是从雨滴开始下落到现在的时间。</p>
      <p>currentPos 是雨滴在当前时间的位置，通过 pos + velocity * elapsedTime 计算得到。</p>
      <p>由于 velocity.y 是负值，随着时间的推移，currentPos.y 会逐渐减小，从而实现雨滴从屏幕顶部向下移动的效果。</p>
      <h4>2. 火焰上升效果的减法</h4>
      <p>float finalFbm = fbm(vec2(uv.x, uv.y - u_time * 1.2) * 1.74588 + vec2(0.2155, 0.5654));</p>
      <p>uv 是归一化后的屏幕坐标，范围在 [0, 1] 之间。</p>
      <p>u_time 是时间变量，随着时间的推移，u_time 会逐渐增加。</p>
      <p>uv.y - u_time * 1.2：这里的减法是为了让火焰的纹理在垂直方向上向上移动。</p>
      <p>在屏幕坐标系中，uv.y 的值从屏幕底部的 0 增加到屏幕顶部的 1。</p>
      <p>通过减去 u_time * 1.2，随着时间的推移，uv.y - u_time * 1.2 的值会逐渐减小。</p>
      <p>由于纹理采样是基于 uv 坐标进行的，uv.y 的减小会导致纹理在屏幕上的显示位置向上移动，从而实现火焰向上移动的效果。</p>
      <h4>3. 为什么减法可以实现上升和下降效果？</h4>
      <p>坐标系的定义：在屏幕坐标系中，y 轴的正方向是从屏幕底部向上。因此，y 值的增加表示向上移动，而 y 值的减小表示向下移动。</p>
      <p>纹理采样：纹理的采样是基于 uv 坐标进行的。当 uv.y 减小时，纹理的采样点会向上移动，从而在视觉上产生火焰向上移动的效果。</p>
      <p>运动方向的表示：对于雨滴，速度向量的垂直分量为负值（-0.8 * u_resolution.y），表示雨滴向下移动。而对于火焰，通过减去时间变量，使得纹理在垂直方向上向上移动。</p>
      <h4>4. 总结</h4>
      <p>雨滴下降：通过减法实现，因为雨滴的速度向量的垂直分量为负值，随着时间的推移，雨滴的位置在垂直方向上逐渐减小。</p>
      <p>火焰上升：通过减法实现，因为减去时间变量会导致纹理在垂直方向上向上移动，从而在视觉上产生火焰向上移动的效果。</p>
      <p>这两种效果都利用了坐标系的定义和纹理采样的特性，通过减法实现了不同的运动方向。</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue'

const isRunning = ref(false)

const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
  } else {
    isRunning.value = false
  }
}
</script>