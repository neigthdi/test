<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div @click="showText = !showText" class="pointer">{{ !showText ? '点击展开文字' : '点击收起文字' }}</div>
    <div v-if="showText">
      <div>缓动</div>
      <div>object.x += (targetX - object.x) * easing;</div>
      <div>object.y += (targetY - object.y) * easing;</div>
    </div>
    <div id="easing1Box">
      <canvas v-if="isRunning" id="easing1" class="stage"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const showText = ref(false)
const mouseInfo = ref({ x: 0, y: 0 })
const easing1 = 0.05
const easing2 = 0.07
let vx1 = 0
let vy1 = 0
let vx2 = 0
let vy2 = 0


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
  const canvas: any = document.getElementById('easing1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const parent = document.getElementById('easing1Box') as any
  parent.addEventListener('mousemove', onMouseMove)

  
  const ball1 = new Ball(20, '#ff0000')
  const ball2 = new Ball(10, '#ffff00')

  const ballMove = () => {
    vx1 = (mouseInfo.value.x - ball1.x) * easing1
    vy1 = (mouseInfo.value.y - ball1.y) * easing1
    
    vx2 = (ball1.x - ball2.x) * easing2
    vy2 = (ball1.y - ball2.y) * easing2

    ball1.x += vx1
    ball1.y += vy1
    
    ball2.x += vx2
    ball2.y += vy2
               
    ball1.draw(ctx)
    ball2.draw(ctx)
  }


 

  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    ballMove()
  }

  runAnimate()
}

const destroy = () => {
  cancelAnimationFrame(requestID.value)
  const parent = document.getElementById('easing1Box') as any
  if (parent) parent.removeEventListener('mousemove', onMouseMove)
}

onUnmounted(() => {
  destroy()
})
</script>