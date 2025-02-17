<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="autoMove1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('autoMove1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const start = { x: 50, y: 50 }
  const middle = { x: 20, y: 360 }
  const end = { x: 600, y: 50 }
  let prevPos
  let nextPos
  let add = 0

  
  // 获取二次贝塞尔曲线上的x和y
  // 贝塞尔曲线方程B(t)=(1−t)^2 * P0 + 2 * t * (1−t) * P1 + t^2 * P2 
  const getBezierPoints = (p0, p1, p2, pointNum) => {
    const points: any = []
    for (let i = 0; i < pointNum; i++) {
      const t = i / pointNum
      const x = (1 - t) ** 2 * p0.x + 2 * t * (1 - t) * p1.x + t ** 2 * p2.x
      const y = (1 - t) ** 2 * p0.y + 2 * t * (1 - t) * p1.y + t ** 2 * p2.y
      points.push({ x, y })
    }
    return points
  }

  // 计算两点之间的角度
  const calculateAngle = (x1, y1, x2, y2) => {
    const dx = x2 - x1
    const dy = y2 - y1
    const angle = Math.atan2(dy, dx)
    return angle
  }

  const drawWay = (p0, p1, p2) => {
    ctx.beginPath()
    ctx.moveTo(p0.x, p0.y)
    ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y)
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 2
    ctx.stroke()
  }

  const drawLine = (arr) => {
    const start = arr.shift()
    const end = arr.pop()
    ctx.beginPath()
    ctx.moveTo(start.x + 10, start.y + 10)
    for (let i=0;i<arr.length;i++){
      ctx.lineTo(arr[i].x + 10, arr[i].y + 10)
    }
    ctx.lineTo(end.x + 10, end.y + 10)
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 2
    ctx.stroke()
  }

  const drawCar = (prevPos, nextPos) => {
    // 保存当前的绘图状态
    ctx.save()

    // 移动绘图原点到矩形的中心
    ctx.translate(nextPos.x, nextPos.y)
    
    if(prevPos) {
      // 旋转绘图上下文
      const angle = calculateAngle(prevPos.x, prevPos.y, nextPos.x, nextPos.y)
      ctx.rotate(angle)
    }

    // 移动回矩形左上角的位置
    ctx.translate(-nextPos.x, -nextPos.y)

    ctx.beginPath()
    ctx.rect(nextPos.x - 10, nextPos.y - 5, 20, 10)
    ctx.fillStyle = 'orange'
    ctx.fill()

    // 恢复之前的绘图状态
    ctx.restore()
  }

  
  const dealPoints = (pointList) => {
    const newPointList: any = []
    for (let i = 0; i < pointList.length; i += 10) {
      newPointList.push(pointList[i])
    }
    return newPointList
  }

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const pointList = getBezierPoints(start, middle, end, 300)
  drawLine([...pointList])
  drawWay(start, middle, end)
  const newPointList = dealPoints(pointList)
  
  const firstPoint = newPointList.shift()
  nextPos = firstPoint

  requestID.value = setInterval(() => {
    clearCanvas()
    drawLine([...pointList])
    drawWay(start, middle, end)
    if(add >= newPointList.length) {
      add = 0
      prevPos = null
      nextPos = start
    }
    
    drawCar(prevPos, nextPos)

    prevPos = nextPos
    nextPos = newPointList[add]
    add += 1
    
  }, 1000 / 4)
}

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

const destroy = () => {
  cancelAnimationFrame(requestID.value)
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>