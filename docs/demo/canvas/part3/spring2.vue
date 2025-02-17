<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div id="spring2Box">
      <canvas v-if="isRunning" id="spring2" class="stage"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const mouseInfo = ref({ x: 0, y: 0 })
const f = 0.9
const spring = 0.03
const springLength = 100
const gravity = 0.2
let dx = 0
let dy = 0
let vx = 0
let vy = 0
let targetX = 0
let targetY = 0
let angle = 0


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

const onMouseMove = (e) => {
  mouseInfo.value = {
    x: e.offsetX,
    y: e.offsetY
  }
}

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('spring2')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const parent = document.getElementById('spring2Box') as any
  parent.addEventListener('mousemove', onMouseMove)
  
  const ball = new Ball(20, '#ff0000')

  // 模拟一个带有弹簧效果和重力影响的球的运动
  const ballSpring = () => {
    // 计算了球的当前位置与鼠标位置之间的水平和垂直位移差
    dx = ball.x - mouseInfo.value.x
    dy = ball.y - mouseInfo.value.y

    angle = Math.atan2(dy, dx);
    
    // 根据夹角和弹簧长度（springLength）计算球的目标位置
    // targetX 是鼠标位置加上沿 x 方向的弹簧长度分量
    // targetY 是鼠标位置加上沿 y 方向的弹簧长度分量
    // 这个是保留一段距离
    // targetX = mouseInfo.value.x + Math.cos(angle) * springLength
    // targetY = mouseInfo.value.y + Math.sin(angle) * springLength
    // 这个是不保留距离
    targetX = mouseInfo.value.x
    targetY = mouseInfo.value.y
    
    // 根据目标位置和球的当前位置计算弹簧力，并更新球的速度
    // (targetX - ball.x) 和 (targetY - ball.y) 分别是球在 x 和 y 方向上与目标位置的位移差
    // 乘以 spring（弹簧系数）后，得到弹簧力对速度的影响
    // 这种实现模拟了弹簧力的线性特性，即力与位移成正比
    vx += (targetX - ball.x) * spring
    vy += (targetY - ball.y) * spring
    
    // 将球的速度乘以衰减因子 f，模拟空气阻力或摩擦力
    vx *= f
    vy *= f
    
    // 将重力加速度 gravity 加到球的垂直速度上，模拟重力对球的影响
    vy += gravity
    
    ball.x += vx
    ball.y += vy

    ball.draw(ctx)
  }

  const drawLine = () => {
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = 'orange'
    ctx.moveTo(ball.x, ball.y)
    ctx.lineTo(mouseInfo.value.x, mouseInfo.value.y)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }


  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)
    
    ballSpring()
    drawLine()
  }

  runAnimate()
}

const destroy = () => {
  cancelAnimationFrame(requestID.value)
  const parent = document.getElementById('spring2Box') as any
  if (parent) {
    parent.removeEventListener('mousemove', onMouseMove)
  }
}

onUnmounted(() => {
  destroy()
})
</script>