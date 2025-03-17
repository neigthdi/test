<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="gravity2" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)

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

class BlackHold {
  ctx: CanvasRenderingContext2D | null = null
  mass = 100
  radius = 25
  outerRadius = 55
  innerRadius = 35
  rotation = 0
  x = 0
  y = 0

  constructor(canvas, ctx) {
    this.ctx = ctx
    this.x = canvas.width / 2
    this.y = canvas.height / 2
  }


  drawBall() {
    this.ctx?.save()
    this.ctx?.rotate(this.rotation)
    this.ctx?.beginPath()
    this.ctx?.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    if (this.ctx) {
      this.ctx.fillStyle = 'orange'
    }
    this.ctx?.fill()
    this.ctx?.restore()
  }

  drawRing() {
    this.ctx?.save()
    this.ctx?.beginPath()
    this.ctx?.arc(this.x, this.y, this.outerRadius, 0, Math.PI * 2, false)
    if (this.ctx) {
      this.ctx.fillStyle = 'pink'
    }
    this.ctx?.fill()
    
    if(this.ctx) {
      this.ctx.globalCompositeOperation = 'destination-out'; // 使用透明色擦除
    }
    this.ctx?.beginPath()
    this.ctx?.arc(this.x, this.y, this.innerRadius, 0, Math.PI * 2, false)
    this.ctx?.fill()
    if(this.ctx) {
      this.ctx.globalCompositeOperation = 'source-over' // 恢复默认绘制模式
    }
    this.ctx?.restore()
  }

  increaseMass(ball) {

  }
}

class Ball {
  ctx: CanvasRenderingContext2D | null = null
  mass = 0
  radius = 0
  rotation = 0
  x = 0
  y = 0

  constructor(ctx, canvas)  {
    this.ctx = ctx
    this.createBallInfo(canvas)
  }

  createBallInfo(canvas) {
    this.x = canvas.width * Math.random()
    this.y = canvas.height * Math.random()
    this.mass = Math.random() * 40 + 40
    this.radius = this.mass / 4
  }

  draw() {
    this.ctx?.save()
    this.ctx?.rotate(this.rotation)
    this.ctx?.beginPath()
    this.ctx?.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    if (this.ctx) {
      this.ctx.fillStyle = 'orange'
    }
    this.ctx?.fill()
    this.ctx?.restore()
  }

  isAlive(blackHold) {

  }
}

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('gravity2')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const blackHold = new BlackHold(canvas, ctx)

  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

   
    blackHold.drawRing()

    blackHold.drawBall()

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