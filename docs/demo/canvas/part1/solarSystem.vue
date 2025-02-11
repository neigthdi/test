<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="solarSystem" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)

const onRunning = async () => {
  const canvas: any = document.getElementById('solarSystem')
  const ctx = canvas.getContext('2d')

  const wrapDomStyle = getComputedStyle(canvas)
  const width = parseInt(wrapDomStyle.width, 10)
  const height = parseInt(wrapDomStyle.height, 10)

  // 需要设置canvas的width和height
  canvas.width = width
  canvas.height = height

  const drawLine = () => {
    for (let i = 0; i < 8; i++) {
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, (i + 1) * 20, 0, 360, false)
      ctx.closePath()
      ctx.strokeStyle = '#00f77c'
      ctx.stroke()
    }
  }

  class Star {
    ctx
    x
    y
    radius
    cycle
    sColor
    eColor
    color
    time

    constructor(ctx, x, y, radius, cycle, sColor, eColor) {
      this.ctx = ctx
      this.x = x
      this.y = y
      this.radius = radius
      this.cycle = cycle
      this.sColor = sColor
      this.eColor = eColor

      this.color = null
      //设置一个计时器
      this.time = 0
    }

    draw() {
      this.ctx.save() // 保存之前的内容
      this.ctx.translate(width / 2, height / 2) // 重置0，0坐标
      this.ctx.rotate(this.time * (360 / this.cycle) * Math.PI / 180) //旋转角度   
      
      // 画星球
      this.ctx.beginPath()
      this.ctx.arc(this.x, this.y, this.radius, 0, 360, false)
      this.ctx.closePath()
      // //设置星球的填充颜色
      this.color = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
      this.color.addColorStop(0, this.sColor)
      this.color.addColorStop(1, this.eColor)
      this.ctx.fillStyle = this.color
      this.ctx.fill()
      //恢复之前画布的内容
      this.ctx.restore()
      this.time += 1
    }
  }

  const sun = new Star(ctx, 0, 0, 10, 0, '#FFFF00', '#FF9900')
  const mercury = new Star(ctx, 0, -20, 5, 87.70, '#A69697', '#5C3E40')
  const venus = new Star(ctx, 0, -40, 5, 224.701, '#C4BBAC', '#1F1315')
  const earth = new Star(ctx, 0, -60, 5, 365.2422, '#78B1E8', '#050C12')
  const mars = new Star(ctx, 0, -80, 5, 686.98, '#CEC9B6', '#76422D')
  const jupiter = new Star(ctx, 0, -100, 5, 4332.589, '#C0A48E', '#322222')
  const saturn = new Star(ctx, 0, -120, 5, 10759.5, '#F7F9E3', '#5C4533')
  const uranus = new Star(ctx, 0, -140, 5, 30799.095, '#A7E1E5', '#19243A')
  const neptune = new Star(ctx, 0, -160, 5, 60152, '#0661B2', '#1E3B73')

  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)
    drawLine()
    sun.draw()
    mercury.draw()
    venus.draw()
    earth.draw()
    mars.draw()
    jupiter.draw()
    saturn.draw()
    uranus.draw()
    neptune.draw()
    requestID.value = requestAnimationFrame(runAnimate)
  }

  runAnimate()
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