<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="fourier" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

const controls = ref(4)
const requestID = ref<any>()
const isRunning = ref(false)
let canvas
let ctx
let running
let draw

const onRunning = async () => {
  await nextTick()
  canvas = document.getElementById('fourier')
  ctx = canvas.getContext('2d')

  canvas?.addEventListener('click', onAddEvent)

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height
  
  const arr: any = []
  const colorArr = ['#00bcd4', '#dd5866', '#335678', '#28a745']

  let time = 0

  const createDisc = (r, color, x?, y?) => {
    ctx.beginPath()
    ctx.arc(x || 0, y || 0, r, 0, Math.PI * 2, true)
    ctx.strokeStyle = color || '#00bcd4'
    ctx.stroke()
  }

  const createLine = (d, rotate) => {
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(d, 0)
    ctx.stroke()
  }

  draw = () => {
    time -= Math.PI / 180
    // 设置canvas大小
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 绘制左侧的圆
    ctx.save() // 将第一个状态推入到栈中
    ctx.translate(150, 150)
    let lastR = 50;
    for (let i = 0; i < controls.value; i++) {
      if (i === 0) {
        ctx.rotate(time)
      } else {
        ctx.translate(50 - (i - 1) * 15, 0)
        ctx.rotate(time * 2)
        lastR = 50 - i * 15
      }
      createDisc(50 - i * 15, colorArr[i])
      createLine(50 - i * 15, 2 * time)
    }
    // 绘制圆上的线
    ctx.translate(lastR, 0)
    ctx.rotate(-(controls.value * 2 - 1) * time)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    let x = 150
    for (let i = 0; i < controls.value; i++) {
      x -= Math.cos((i * 2 + 1) * time) * (50 - i * 15)
    }
    ctx.lineTo(x, 0)
    ctx.stroke()
    // 绘制箭头
    ctx.translate(x, 0)
    ctx.save() // 将第二个状态推入到栈中
    ctx.rotate(-2.5)
    ctx.lineTo(5, 0)
    ctx.stroke()
    ctx.restore() // 取出堆栈 （第二个状态）
    ctx.save() // 将第三个状态推入到栈中
    ctx.moveTo(0, 0)
    ctx.rotate(2.5)
    ctx.lineTo(5, 0)
    ctx.stroke()
    ctx.restore() // 取出堆栈 （第三个状态）
    // 记录频域
    let arrY = 150
    for (let i = 0; i < controls.value; i++) {
      arrY += Math.sin((i * 2 + 1) * time) * (50 - i * 15)
    }
    arr.unshift(arrY)
    if (arr.length > 500) arr.pop()

    ctx.restore() // 取出堆栈 （第一个状态）
    ctx.strokeStyle = 'red'
    ctx.beginPath()
    ctx.moveTo(300, arrY)
    let arrX = 0;
    arr.forEach(v => {
      ctx.lineTo(300 + arrX++, v)
    })
    ctx.stroke()

    requestID.value = window.requestAnimationFrame(draw)
  }

  draw()
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

const onAddEvent = () => {
  if (isRunning.value) {
    running = !running
    running ? cancelAnimationFrame(requestID.value) : requestID.value = requestAnimationFrame(draw)
  }
}

const destroy = () => {
  cancelAnimationFrame(requestID.value)
  canvas?.removeEventListener('click', onAddEvent)
  if (draw) draw = null
}

onMounted(async() => {
  await nextTick()
})

onUnmounted(() => {
  destroy()
})
</script>