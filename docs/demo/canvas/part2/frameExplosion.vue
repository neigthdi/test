<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="easing1" class="frameExplosion"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
// 图片数量 8
const len = 8
// 宽高 256
const size = 256
// 当前帧
let fm = 0
let start = 0


const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    onRunning()
  } else {
    isRunning.value = false
    destroy()
  }
}

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('easing1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height


  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = size * len
  tempCanvas.height = size
  const tempCtx = tempCanvas.getContext('2d')


  const draw = () => {
    tempCtx?.drawImage(img, 0, 0, size * len, size)
  }

  // 建立图像源
  const img = new Image()
  img.src = '/images/bomb.jpg'
  img.onload = draw


  const runAnimate = () => {
    // ctx.clearRect(0, 0, width, height)

    const end = Date.now()
    if (end - start >= 120) {
      start = end

      const data = tempCtx?.getImageData(fm * size, 0, size, size)
      ctx.putImageData(data, 0, 0)

      fm++
      if (fm >= len) {
        fm = 0
      }
    }

    requestID.value = requestAnimationFrame(runAnimate)
  }

  runAnimate()
}

const destroy = () => {
  cancelAnimationFrame(requestID.value)
}

onUnmounted(() => {
  destroy()
})
</script>