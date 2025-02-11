<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="rotate1" class="stage"></canvas>
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

function captureMouse (element) {
  let mouse = { x: 0, y: 0 }
  
  element.addEventListener('mousemove',function(event){
    let x,y
    if (event.pageX || event.pageY) {
      x = event.pageX
      y = event.pageY
    } else {
      x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
      y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }
    
    x -= element.offsetLeft
    y -= element.offsetTop
    
    mouse.x = x
    mouse.y = y          
  }, false)

  return mouse  
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

Ball3d.prototype.draw = function(context){
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



const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('rotate1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const mouse = captureMouse(canvas)
  let balls: any = []
  let numBalls = 50
  let fl = 250
  let vpX = canvas.width / 2
  let vpY = canvas.height / 2
  let angleY // 绕Y轴旋转的角度


  for (let i = 0; i < numBalls; i++) {
    let size = Math.random() * 5 + 5
    let color = Math.random() * (0xffffff)
    let ball = new Ball3d(size, color)
    
    ball.xpos = Math.random() * 300 - 150
    ball.ypos = Math.random() * 300 - 150
    ball.zpos = Math.random() * 300 - 150
    
    balls.push(ball)
  }

  function rotateY (ball, angle) {
    let cos = Math.cos(angle)
    let sin = Math.sin(angle)
    let x1 = ball.xpos * cos - ball.zpos * sin
    let z1 = ball.zpos * cos + ball.xpos * sin
    
    ball.xpos = x1
    ball.zpos = z1
    
    if (ball.zpos > -fl) {
      let scale = fl / (fl + ball.zpos)
      ball.scaleX = ball.scaleY = scale
      ball.x = vpX + ball.xpos * scale
      ball.y = vpY + ball.ypos * scale
      ball.visible = true
    } else {
      ball.visible = false
    }
  }

  function move (ball) {
    rotateY(ball, angleY)
  }
  
  function zSort (a, b) {
    return (b.zpos - a.zpos)
  }
  
  function draw (ball) {
    if(ball.visible){
      ball.draw(ctx)
    }
  }

  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    angleY = (mouse.x - vpX) * 0.00001
    balls.forEach(move)
    balls.sort(zSort)
    balls.forEach(draw)
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