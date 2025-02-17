<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="gravity1" class="stage"></canvas>
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

function parseColor (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return (color | 0) // chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1)
    }
    return window.parseInt(color, 16)
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6)
    }
    return color
  }
}

function Ball(radius, color){
  if (radius === undefined) { radius = 40 }
  if (color === undefined) { color = '#00ff00' }
  this.x = 0
  this.y = 0
  this.vx = 0
  this.vy = 0
  this.radius = radius
  this.rotation = 0
  this.mass = 1
  this.scaleX = 1
  this.scaleY = 1
  this.name = ""
  this.color = parseColor(color, false)
  this.lineWidth = 1
}

Ball.prototype.draw = function (context) {
  context.save()
  context.translate(this.x, this.y)
  context.rotate(this.rotation)
  context.scale(this.scaleX, this.scaleY)
  context.lineWidth = this.lineWidth
  context.fillStyle = this.color
  context.strokeStyle = this.color
  context.beginPath()
  context.arc(0, 0, this.radius, 0, Math.PI * 2, false)
  context.closePath()
  context.fill()
  context.stroke()
  context.restore()
}

// 得到球体的左上角坐标
Ball.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  }
}

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('gravity1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const particles: any = []
  const totalNum = 50

  for (let i = 0; i < totalNum; i++) {
    const color = Math.random() * (0xffffff)
    const ball = new Ball(5, color)
    ball.x = Math.random() * canvas.width
    ball.y = Math.random() * canvas.height
    ball.mass = 1
    particles.push(ball)
  }

  const gravitate = (partA, partB) => {
    const dx = partB.x - partA.x
    const dy = partB.y - partA.y
    const distQ = dx * dx + dy * dy
    const dist = Math.sqrt(distQ)

    // F = (G * m1 * m2) / (r * r)
    // r 是两者的距离，不是半径
    // 此处省略G
    const F = partA.mass * partB.mass / distQ

    // F = m * a
    // 在 x 轴方向上，加速度分量 ax 为 
    // ax = Fx / mA
    // (F * △x / r) / mA
    // (F * △x) / (mA * r)
    // 其中 r = Math.sqrt(distQ)

    // 加速度
    // dx/dist 和 dy/dist 是单位向量的分量，分别表示引力在水平方向和垂直方向上的加速度分量，表示引力在水平和垂直方向上的投影
    const ax = F * dx / dist
    const ay = F * dy / dist
    partA.vx += ax / partA.mass
    partA.vy += ay / partA.mass
    partB.vx -= ax / partB.mass
    partB.vy -= ay / partB.mass
  }

  const draw = (particle) => {
    particle.draw(ctx)
  }

  // 受引力移动
  const move = (partA, i) => {
    partA.x += partA.vx
    partA.y += partA.vy

    for (let j = i + 1; j < totalNum; j++) {
      const partB = particles[j]
      gravitate(partA, partB)
    }
  }

  


  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    particles.forEach(move)
    particles.forEach(draw)
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