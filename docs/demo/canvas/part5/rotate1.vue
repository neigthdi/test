<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div id="rotate1Box">
      <canvas v-if="isRunning" id="rotate1" class="stage"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const mouseInfo = ref({ x: 0, y: 0 })

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

function Ball3d (radius, color) {
  if (radius === undefined) { radius = 40 }
  if (color === undefined) { color = '#00ff00' }
  this.x = 0
  this.y = 0
  this.xpos = 0
  this.ypos = 0
  this.zpos = 0
  this.vz = 0
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
  this.visible = true
}

Ball3d.prototype.draw = function (context) {
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

const rotateMouseMove = (event) => {
  mouseInfo.value = {
    x: event.offsetX < 0 ? 0 : event.offsetX,
    y: event.offsetY < 0 ? 0 : event.offsetY   
  }
}

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('rotate1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const parent = document.getElementById('rotate1Box') as any
  parent.addEventListener('mousemove', rotateMouseMove)

  let balls: any = []
  let numBalls = 250
  let fl = 250
  let vpX = width / 2
  let vpY = height / 2
  let angleY // 绕Y轴旋转的角度
  let angleX // 绕X轴旋转的角度


  for (let i = 0; i < numBalls; i++) {
    let size = Math.random() * 10 + 5
    let color = Math.random() * (0xffffff)
    let ball = new Ball3d(size, color)
    
    ball.xpos = Math.random() * 300 - 150
    ball.ypos = Math.random() * 300 - 150
    ball.zpos = Math.random() * 300 - 150
    
    balls.push(ball)
  }

  const rotateY = (ball, angle) => {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const x1 = ball.xpos * cos - ball.zpos * sin
    const z1 = ball.zpos * cos + ball.xpos * sin
    
    ball.xpos = x1
    ball.zpos = z1
  }

  const rotateX = (ball, angle) => {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const y1 = ball.ypos * cos - ball.zpos * sin
    const z1 = ball.zpos * cos + ball.ypos * sin
    
    ball.ypos = y1
    ball.zpos = z1
  }

  const setPerspective = (ball) => {
    if (ball.zpos > -fl) {
      const scale = fl / (fl + ball.zpos)
      ball.scaleX = scale
      ball.scaleY = scale
      ball.x = vpX + ball.xpos * scale
      ball.y = vpY + ball.ypos * scale
      ball.visible = true
    } else {
      ball.visible = false
    }
  }

  const move = (ball) => {
    rotateY(ball, angleY)
    rotateX(ball, angleX)
    setPerspective(ball)
  }
  
  const zSort = (a, b) => {
    return (b.zpos - a.zpos)
  }
  
  const draw = (ball) => {
    if (ball.visible) {
      ball.draw(ctx)
    }
  }

  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    angleY = (mouseInfo.value.x - vpX) * 0.0001
    angleX = (mouseInfo.value.y - vpY) * 0.0001

    balls.forEach(move)
    balls.sort(zSort)
    balls.forEach(draw)
  }

  runAnimate()
}


const destroy = () => {
  cancelAnimationFrame(requestID.value)
  const parent = document.getElementById('rotate1Box') as any
  if (parent) parent.addEventListener('mousemove', rotateMouseMove)
}

onUnmounted(() => {
  destroy()
})
</script>