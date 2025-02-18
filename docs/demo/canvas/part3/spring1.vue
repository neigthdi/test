<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div @click="showText = !showText" class="pointer">{{ !showText ? '点击展开文字' : '点击收起文字' }}</div>
    <div v-if="showText">
      <div>1、基本弹簧</div>
      <div>vx += (targetX - object.x) * spring;</div>
      <div>vy += (targetY - object.y) * spring;</div>
      <div>object.x += (vx *= f);</div>
      <div>object.y += (vy *= f);</div>
      <div>------------------------------------------</div>
      <div>2、偏移弹簧</div>
      <div>dx = object.x - fixedX;</div>
      <div>dy = object.y - fixedY;</div>
      <div>angle = Math.atan2(dy, dx);</div>
      <div>targetX = fixed + Math.cos(angle) * springLength;</div>
      <div>targetY = fixed + Math.sin(angle) * springLength;</div>
    </div>
    <div id="spring1Box">
      <canvas v-if="isRunning" id="spring1" class="stage"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const showText = ref(false)
const handles = ref<any>([])
const movingHandle = ref<any>(null)
const handleNum = 3
const spring = 0.03
const f = 0.9


const onTrigger = async () => {
  handles.value = []
  movingHandle.value = null
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

const containsPoint = (rect, x, y) => {
  return !(x < rect.x || x > rect.x + rect.width || y < rect.y || y > rect.y + rect.height)
}

const onMouseDown = (event) => {
  handles.value.forEach((handle) => {
    if (containsPoint(handle.getBounds(), event.offsetX, event.offsetY)) {
      movingHandle.value = handle
    }
  })
}

const onMouseUp = (event) => {
  if (movingHandle.value) {
    movingHandle.value = null
  }
}

const onMouseMove = (event) => {
  if (movingHandle.value) {
    movingHandle.value.x = event.offsetX
    movingHandle.value.y = event.offsetY
  }
}

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('spring1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const parent = document.getElementById('spring1Box') as any
  parent.addEventListener('mousedown', onMouseDown)
  parent.addEventListener('mouseup', onMouseUp)
  parent.addEventListener('mousemove', onMouseMove)

  
  const ball = new Ball(20, '#ff0000')

  for(let i = 0; i < handleNum; i++){
    const handle = new Ball(10, '#0000ff')
    handle.x = Math.random() * width
    handle.y = Math.random() * height
    handles.value.push(handle)
  }

  // 根据一个“把手”（handle）的位置来更新球（ball）的速度
  // 这种实现通常用于模拟弹簧力对球的作用，使球朝向把手移动
  const applyHandle = (handle) => {
    // dx 表示水平方向的位移差，即把手的 x 坐标减去球的 x 坐标
    // dy 表示垂直方向的位移差，即把手的 y 坐标减去球的 y 坐标
    const dx = handle.x - ball.x
    const dy = handle.y - ball.y
    
    // 位移差 dx 和 dy 分别乘以一个常数 spring，这个常数可以理解为弹簧的弹性系数（或强度）
    // 决定了球朝向把手移动的速度大小
    // 如果 spring 是正数，球会朝向把手移动
    // 如果 spring 是负数，球会远离把手移动
    ball.vx += dx * spring
    ball.vy += dy * spring
  }
    
  // 画操作点到小球的线
  const drawHandle = (handle) => {
    ctx.strokeStyle = 'orange'
    ctx.moveTo(ball.x, ball.y)
    ctx.lineTo(handle.x, handle.y)
    ctx.stroke()
    handle.draw(ctx)
  }


  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    handles.value.forEach(applyHandle)

    // f 是一个小于1的正数（例如0.9），这表示球的速度会逐渐减小，模拟了空气阻力或摩擦力对球运动的阻尼效果
    ball.vx *= f
    ball.vy *= f

    ball.x += ball.vx
    ball.y += ball.vy
    
    
    ctx.beginPath()
    handles.value.forEach(drawHandle)
    ctx.closePath()
    
    ball.draw(ctx)
  }

  runAnimate()
}

const destroy = () => {
  cancelAnimationFrame(requestID.value)
  const parent = document.getElementById('spring1Box') as any
  if (parent) {
    parent.removeEventListener('mousedown', onMouseDown)
    parent.removeEventListener('mouseup', onMouseUp)
    parent.removeEventListener('mousemove', onMouseMove)
  }
}

onUnmounted(() => {
  destroy()
})
</script>