<template>
  <div>
    <div @click="onTrigger" class="pointer flex flex-end">
      <div>点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <div id="ballCollision3Box">
      <canvas v-if="isRunning" id="ballCollision3" class="stage bg-white"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const angle = ref(0)
const lineX = 50
const lineY = 180

const onTrigger = async () => {
  angle.value = 0
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    onRunning()
  } else {
    isRunning.value = false
    destroy()
  }
}

function intersects (rectA, rectB) {
  return !(rectA.x + rectA.width < rectB.x ||
            rectB.x + rectB.width < rectA.x ||
            rectA.y + rectA.height < rectB.y ||
            rectB.y + rectB.height < rectA.y)
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

function Line (x1, y1, x2, y2) {
  this.x = 0
  this.y = 0
  this.x1 = (x1 === undefined) ? 0 : x1
  this.y1 = (y1 === undefined) ? 0 : y1
  this.x2 = (x2 === undefined) ? 0 : x2
  this.y2 = (y2 === undefined) ? 0 : y2
  this.rotation = 0
  this.scaleX = 1
  this.scaleY = 1
  this.lineWidth = 1
}

Line.prototype.draw = function (context) {
  context.save()
  context.translate(this.x, this.y)
  context.rotate(this.rotation)
  context.scale(this.scaleX, this.scaleY)
  context.lineWidth = this.lineWidth
  context.beginPath()
  context.moveTo(this.x1, this.y1)
  context.lineTo(this.x2, this.y2)
  context.closePath()
  context.stroke()
  context.restore()
}

Line.prototype.getBounds = function () {
  if(this.rotation === 0){
    const minX = Math.min(this.x1, this.x2)
    const minY = Math.min(this.y1, this.y2)
    const maxX = Math.max(this.x1, this.x2)
    const maxY = Math.max(this.y1, this.y2)
    return {
      x: this.x + minX,
      y: this.y + minY,
      width: maxX - minX,
      height: maxY - minY
    }
  } else {
    const sin = Math.sin(this.rotation)
    const cos = Math.cos(this.rotation)
    const x1r = cos * this.x1 + sin * this.y1
    const x2r = cos * this.x2 + sin * this.y2
    const y1r = cos * this.y1 + sin * this.x1
    const y2r = cos * this.y2 + sin * this.x2
    return {
      x: this.x + Math.min(x1r, x2r),
      y: this.y + Math.min(y1r, y2r),
      width: Math.max(x1r, x2r) - Math.min(x1r, x2r),
      height: Math.max(y1r, y2r) - Math.min(y1r, y2r)
    } 
  }
}

const onMouseMove = (e) => {
  const x = e.offsetX
  const y = e.offsetY
  angle.value = Math.atan2(y - lineY, x - lineX)
}


const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('ballCollision3')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const parent = document.getElementById('ballCollision3Box') as any
  parent.addEventListener('mousemove', onMouseMove)

  const gravity = 0.1
  const bounce = -0.3
  const ball = new Ball(12, '#ff0000')
  ball.x = 100
  ball.y = 50

  const newLine = new Line(0, 0, 400, 0)
  newLine.x = lineX
  newLine.y = lineY
  newLine.rotation = 0
  
  const checkLine = (line) => {
    if (intersects(ball.getBounds(), line.getBounds())) {
      // 计算线段的旋转角度 line.rotation 的余弦值 cos 和正弦值 sin
      // 这些值将用于后续的旋转坐标变换
      const cos = Math.cos(line.rotation)
      const sin = Math.sin(line.rotation)

      // 将球的坐标 (ball.x, ball.y) 转换为相对于线段起点 (line.x, line.y) 的局部坐标 (x1, y1)
      let x1 = ball.x - line.x
      let y1 = ball.y - line.y

      // 使用旋转矩阵公式将球的局部坐标 (x1, y1) 旋转到线段的旋转方向
      // y2 是旋转后的 y 坐标
      let y2 = cos * y1 - sin * x1


      // 检查旋转后的球的 y 坐标 y2 是否大于 -ball.radius
      if (y2 > -ball.radius) {

        // 使用旋转矩阵公式计算旋转后的 x 坐标 x2
        const x2 = x1 * cos + y1 * sin
                       
        // 计算旋转后的球的速度在 x 方向上的分量 vx1
        const vx1 = ball.vx * cos + ball.vy * sin

        // vy1 是球的速度在旋转后的 y 方向上的分量
        // 将球的速度分量 vy1 乘以反弹系数 bounce，模拟碰撞后的反弹效果
        const vy1 = (ball.vy * cos - ball.vx * sin) * bounce
        
        // 将球的 y 坐标调整为 -ball.radius，表示球与线段碰撞后的位置
        y2 = -ball.radius

        // 使用逆旋转矩阵公式将球的坐标 (x2, y2) 旋转回全局坐标系 (x1, y1)
        x1 = x2 * cos - y2 * sin
        y1 = y2 * cos + x2 * sin

        // 使用逆旋转矩阵公式将球的速度 (vx1, vy1) 旋转回全局坐标系 (ball.vx, ball.vy)
        ball.vx = vx1 * cos - vy1 * sin
        ball.vy = vy1 * cos + vx1 * sin
      
        // 将球的局部坐标 (x1, y1) 转换回全局坐标 (ball.x, ball.y)，并更新球的位置
        ball.x = line.x + x1
        ball.y = line.y + y1
      }
    }
  }

  const checkWalls = () => {
    if (ball.x + ball.radius > width) {
      ball.x = width - ball.radius
      ball.vx *= bounce
    } else if (ball.x - ball.radius < 0) {
      ball.x = ball.radius
      ball.vx *= bounce
    }
    
    if (ball.y + ball.radius > height) {
      ball.y = height - ball.radius
      ball.vy *= bounce
    } else if (ball.y - ball.radius < 0) {
      ball.y = ball.radius
      ball.vy *= bounce
    }
  }

  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    newLine.rotation = angle.value

    ball.vy += gravity
    ball.x += ball.vx
    ball.y += ball.vy

    
    checkLine(newLine)

    checkWalls()
    newLine.draw(ctx)
    ball.draw(ctx)

  }

  runAnimate()
}

const destroy = () => {
  cancelAnimationFrame(requestID.value)
  const parent = document.getElementById('ballCollision3Box') as any
  if(parent) parent.removeEventListener('mousemove', onMouseMove)
}

onUnmounted(() => {
  destroy()
})
</script>