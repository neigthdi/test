<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="ballCollision2" class="stage"></canvas>
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


const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('ballCollision2')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const gravity = 0.05
  const bounce = -0.3
  const lines: any = []
  const lineInfo = [[200, 80, 20], [220, 160, 28], [320, 120, -20], [310, 200, -25], [190, 240, 15], [300, 260, -30], [210, 300, 20]]
  const ball = new Ball(12, '#ff0000')
  ball.x = 200
  ball.y = 50

  for (let i = 0; i < lineInfo.length; i++) {
    const info = lineInfo[i]
    const line = new Line(-50, 0, 50, 0)
    line.x = info[0]
    line.y = info[1]
    line.rotation = info[2] * Math.PI / 180
    lines.push(line)
  }

  const checkLine = (line) => {
    // 调用 line.getBounds() 方法获取线段的边界框（bound）
    // 边界框是一个矩形，通常包含属性 x、y、width 和 height，表示线段在旋转前的最小外接矩形
    const bound = line.getBounds()
  
    // ball.x + ball.radius > bound.x：球的右边界是否超出边界框的左边界
    // ball.x - ball.radius < bound.x + bound.width：球的左边界是否在边界框的右边界内
    if (ball.x + ball.radius > bound.x && ball.x - ball.radius < bound.x + bound.width) {
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

      // vy1 是球的速度在旋转后的 y 方向上的分量
      let vy1 = ball.vy * cos - ball.vx * sin


      // 检查旋转后的球的 y 坐标 y2 是否在 -ball.radius 和 vy1 之间，判断球是否与线段发生碰撞
      if (y2 > -ball.radius && y2 < vy1) {

        // 使用旋转矩阵公式计算旋转后的 x 坐标 x2
        const x2 = x1 * cos + y1 * sin
                       
        // 计算旋转后的球的速度在 x 方向上的分量 vx1
        const vx1 = ball.vx * cos + ball.vy * sin
        
        // 将球的 y 坐标调整为 -ball.radius，表示球与线段碰撞后的位置
        // 目的是为了确保球在碰撞后不会嵌入线段内部，而是正确地“贴合”在线段的边缘
        y2 = -ball.radius

        // 将球的速度分量 vy1 乘以反弹系数 bounce，模拟碰撞后的反弹效果
        vy1 *= bounce
          
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

  const drawLines = (line) => {
    checkLine(line)
    line.draw(ctx)
  }

  
  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    ball.vy += gravity
    ball.x += ball.vx
    ball.y += ball.vy

    checkWalls()

    lines.forEach(drawLines)
    ball.draw(ctx)

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