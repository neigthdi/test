<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div @click="isShowImg = !isShowImg" class="pointer">{{ !isShowImg ? '点击展开' : '点击收起' }}</div>
    <div v-if="isShowImg">
      <img src="/public/markdown/canvas/part4/ballCollision1-1.png" alt="">
      <img src="/public/markdown/canvas/part4/ballCollision1-2.png" alt="">
      <img src="/public/markdown/canvas/part4/ballCollision1-3.png" alt="">
      <img src="/public/markdown/canvas/part4/ballCollision1-4.png" alt="">
      <img src="/public/markdown/canvas/part4/ballCollision1-5.png" alt="">
    </div>
    <canvas v-if="isRunning" id="ballCollision1" class="stage"></canvas>
  </div>
</template>


<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const isShowImg = ref(false)

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
  const canvas: any = document.getElementById('ballCollision1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const ball0 = new Ball(80, 'red')
  const ball1 = new Ball(40, 'orange')
           
  const bounce = -1.0
           
  ball0.mass = 2
  ball0.x = width
  ball0.y = height
  ball0.vx = Math.random() * 10 - 5
  ball0.vy = Math.random() * 10 - 5
  
  ball1.mass = 1
  ball1.x = 100
  ball1.y = 100
  ball1.vx = Math.random() * 10 - 5
  ball1.vy = Math.random() * 10 - 5

  // 实现二维坐标旋转的功能，根据给定的正弦值（sin）和余弦值（cos）将一个点 (x,y) 旋转到新的位置
  // reverse 参数，用于控制旋转的方向（顺时针或逆时针），true是顺时针，false是逆时针
  function rotate (x, y, sin, cos, reverse) {
    return {
      x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
      y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
    }
  }

  function checkWalls (ball) {
    if (ball.x + ball.radius > canvas.width) {
      ball.x = canvas.width - ball.radius
      ball.vx *= bounce
    } else if (ball.x - ball.radius < 0) {
      ball.x = ball.radius
      ball.vx *= bounce
    }
    
    if (ball.y + ball.radius > canvas.height) {
      ball.y = canvas.height - ball.radius
      ball.vy *= bounce
    } else if (ball.y - ball.radius < 0) {
      ball.y = ball.radius
      ball.vy *= bounce
    }
  }

  // 为什么是
  // const dx = ballB.x - ballA.x
  // const dy = ballB.y - ballA.y
  // 而不能
  // const dx = ballA.x - ballB.x
  // const dy = ballA.y - ballB.y
  // 因为选择 dx = ballA.x - ballB.x 和 dy = ballA.y - ballB.y，那么后续的计算需要相应调整：
  // 1. 角度计算
  //   如果选择 dx = ballA.x - ballB.x 和 dy = ballA.y - ballB.y，那么计算角度时：
  //   const angle = Math.atan2(dy, dx);
  //   这里的 angle 将是从 B 到 A 的方向，而不是从 A 到 B
  // 2. 旋转方向
  //   在旋转坐标和速度时，需要调整旋转的方向。例如：
  //   const posB = rotate(dx, dy, sin, cos, true);
  //   如果 dx 和 dy 的方向相反，那么旋转后的坐标和速度也会受到影响
  // 3. 碰撞响应
  //   在碰撞响应中，相对速度的计算也会受到影响。例如：
  //   const vxTotal = velA.x - velB.x;
  //   如果 dx 和 dy 的方向相反，那么 velA.x 和 velB.x 的方向也会相反，这可能需要调整碰撞响应的公式
  function checkCollision (ballA, ballB) {
    const dx = ballB.x - ballA.x
    const dy = ballB.y - ballA.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < ballA.radius + ballB.radius) {
      // 计算两物体间的夹角，得出坐标旋转需要的sin，cos
      const angle = Math.atan2(dy, dx)
      const sin = Math.sin(angle)
      const cos = Math.cos(angle)

      // ballA旋转后的坐标，假设ballA是原点
      const posA = { x: 0, y: 0 }
      // ballB旋转后的坐标
      const posB = rotate(dx, dy, sin, cos, true)

      // ballA旋转后的速度
      const velA = rotate(ballA.vx, ballA.vy, sin, cos, true)
      // ballB旋转后的速度
      const velB = rotate(ballB.vx, ballB.vy, sin, cos, true)

      // vxTotal 碰撞前的相对速度
      // 弹性碰撞公式
      // vA' = ((mA - mB) * vA + 2 * mB * vB) / (mA + mB)
      // vB' = vA' + (vA - vB)
      // 当然，vB' 也可以用公式计算 vB' = ((mB - mA) * vB + 2 * mA * vA) / (mA + mB)
      // 这里是节省计算采用 vB' = vA' + (vA - vB)
      const vxTotal = velA.x - velB.x

      // 计算碰撞后的速度
      velA.x = ((ballA.mass - ballB.mass) * velA.x + 2 * ballB.mass * velB.x) / (ballA.mass + ballB.mass)
      velB.x = vxTotal + velA.x

      // 更新ballA和ballB的坐标
      posA.x += velA.x
      posB.x += velB.x

      // 此时要旋转回去
      const posA2Back = rotate(posA.x, posA.y, sin, cos, false)
      const posB2Back = rotate(posB.x, posB.y, sin, cos, false)

      // 1、先调整球体实际位于屏幕的位置
      // 要先调整B再调整A
      ballB.x = ballA.x + posB2Back.x
      ballB.y = ballA.y + posB2Back.y
      ballA.x = ballA.x + posA2Back.x
      ballA.y = ballA.y + posA2Back.y

      // 2、再调整球体实际位于屏幕的速度
      const velA2Back = rotate(velA.x, velA.y, sin, cos, false)
      const velB2Back = rotate(velB.x, velB.y, sin, cos, false)

      ballA.vx = velA2Back.x
      ballA.vy = velA2Back.y
      ballB.vx = velB2Back.x
      ballB.vy = velB2Back.y
    }
  }


  
  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    ball0.x += ball0.vx
    ball0.y += ball0.vy
    ball1.x += ball1.vx
    ball1.y += ball1.vy
    
    checkCollision(ball0, ball1)
    checkWalls(ball0)
    checkWalls(ball1)
    
    ball0.draw(ctx)
    ball1.draw(ctx)

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