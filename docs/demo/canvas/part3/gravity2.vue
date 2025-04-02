<template>
  <div>
    <div>未完成</div>
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

<!-- <!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Canvas with Background Image and Rings</title>
	</head>
	<body>
		<canvas id="myCanvas" width="400" height="400"></canvas>
		<script>
			const canvas = document.getElementById('myCanvas');
			const ctx = canvas.getContext('2d');

			// 加载背景图片

			// 等待图片加载完成
			// 绘制背景图片

			// 圆 A 和圆环 A 的参数
			const centerX = 200;
			const centerY = 200;
			const radiusA = 50; // 圆 A 的半径
			const outerRadiusRing = 120; // 圆环 A 的外半径
			const innerRadiusRing = 80; // 圆环 A 的内半径

			// 圆 B 的参数
			let positionBX = 150; // 圆 B 的初始 X 坐标
			const positionBY = 200; // 圆 B 的初始 Y 坐标
			const radiusB = 30; // 圆 B 的半径

			// 绘制圆 A
			function drawCircleA() {
				ctx.beginPath();
				ctx.arc(centerX, centerY, radiusA, 0, Math.PI * 2, false);
				ctx.fillStyle = 'red';
				ctx.fill();
			}

			// 绘制圆环 A
			function drawRingA() {
				// 绘制外圆（黑色）
				ctx.beginPath();
				ctx.arc(centerX, centerY, outerRadiusRing, 0, Math.PI * 2, false);
				ctx.fillStyle = 'black';
				ctx.fill();

				// 擦除内圆（透明色或背景色）
				ctx.globalCompositeOperation = 'destination-out'; // 使用透明色擦除
				ctx.beginPath();
				ctx.arc(centerX, centerY, innerRadiusRing, 0, Math.PI * 2, false);
				ctx.fill();
				ctx.globalCompositeOperation = 'source-over'; // 恢复默认绘制模式
				
				// ctx.beginPath();
				// ctx.arc(centerX, centerY, radiusA, 0, Math.PI * 2, false);
				// ctx.fillStyle = 'red';
				// ctx.fill();
			}

			// 绘制圆 B
			function drawCircleB() {
				ctx.beginPath();
				ctx.arc(positionBX, positionBY, radiusB, 0, Math.PI * 2, false);
				ctx.fillStyle = 'blue';
				ctx.fill();
			}

			// 动画逻辑
			function animate() {
				ctx.clearRect(0,0,canvas.width,canvas.height)

				// 绘制圆 A
				

				// 绘制圆环 A
				drawRingA();
				
				// 绘制圆 B
				drawCircleB();
				
				drawCircleA();

				

				// 更新圆 B 的位置
				positionBX += 1; // 每帧向右移动 1 像素

				// 如果圆 B 移出画布，重置位置
				if (positionBX > canvas.width) {
					positionBX = -radiusB;
				}

				requestAnimationFrame(animate);
			}

			// 开始动画
			animate();
		</script>
	</body>
</html> -->