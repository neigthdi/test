<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="heavyMetal" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('heavyMetal')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const text = '天元突破'
  const fontSize = 120
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.font = 'italic bold 120px arial'
  const widthText = ctx.measureText(text).width
  ctx.translate(width / 2 - widthText / 2, height / 2 - fontSize / 2)

  ctx.save()
  ctx.miterLimit = 4
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)'
  ctx.shadowOffsetY = 5
  ctx.shadowBlur = 3
  const gradient1 = ctx.createLinearGradient(0, 0, 0, fontSize)
  gradient1.addColorStop(0, '#999')
  gradient1.addColorStop(0.2, '#333')
  gradient1.addColorStop(1, '#696970')
  ctx.strokeStyle = gradient1
  ctx.lineWidth = 10
  ctx.strokeText(text, 0, 0)
  ctx.restore()

  ctx.save()
  ctx.lineJoin = 'bevel'
  const gradient2 = ctx.createLinearGradient(0, 0, 0, fontSize)
  gradient2.addColorStop(0, '#868487')
  gradient2.addColorStop(0.3, '#3d3b3e')
  gradient2.addColorStop(1, '#fff')
  ctx.strokeStyle = gradient2
  ctx.lineWidth = 5
  ctx.strokeText(text, 0, 0)
  ctx.restore()

  ctx.save()
  const gradient3 = ctx.createLinearGradient(0, 0, 0, fontSize)
  gradient3.addColorStop(0, '#9d9d9d')
  gradient3.addColorStop(0.3, '#ffffff')
  gradient3.addColorStop(0.6, '#3e3f41')
  gradient3.addColorStop(1, '#67686b')
  ctx.fillStyle = gradient3
  ctx.fillText(text, 0, 0)
  ctx.restore()
}

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

const destroy = () => {
  cancelAnimationFrame(requestID.value)
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>