<template>
  <div id="fireWork-box">
    <div>鼠标点击生成烟花</div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="fireWork" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)

const PI2 = Math.PI * 2
const random = (min, max) => Math.random() * (max - min + 1) + min | 0
const timestamp = () => new Date().getTime()

let box
let scene

class Scene {
  fireworks: any[] = []
  counter = 0
  width = 0
  height = 0
  center = 0
  spawnA = 0
  spawnB = 0
  spawnC = 0
  spawnD = 0
  ctx: any = null

  constructor(el) {
    const canvas = document.getElementById(el) as any
    this.ctx = canvas.getContext('2d')
    const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
    const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
    canvas.width = width
    canvas.height = height

    this.width = width
    this.height = height
    this.center = this.width / 2
    this.spawnA = this.center - this.center / 4 | 0
    this.spawnB = this.center + this.center / 4 | 0
    this.spawnC = this.height * 0.1
    this.spawnD = this.height * 0.5
  }

  onClick(e) {
    const x = e.offsetX
    const y = e.offsetY
    
    const count = random(3, 5) // 生成多个烟花

    for(let i = 0; i< count; i++) {
      const obj = new FireWork(this.fireworks, this.ctx, random(this.spawnA, this.spawnB), this.height, x, y, random(0, 260), random(30, 110))
      this.fireworks.push(obj)
      this.counter = -1
    }
  }

  update(delta) {
    this.ctx.globalCompositeOperation = 'hard-light'
    this.ctx.fillStyle = `rgba(20,20,20,${ 7 * delta })`
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.ctx.globalCompositeOperation = 'lighter'

    for (let firework of this.fireworks) firework.update(delta)

    this.counter += delta * 3

    if (this.counter >= 1) {
      this.fireworks.push(
        new FireWork(
          this.fireworks,
          this.ctx,
          random(this.spawnA, this.spawnB),
          this.height,
          random(0, this.width),
          random(this.spawnC, this.spawnD),
          random(0, 360),
          random(30, 110)
        )
      )
      this.counter = 0
    }

    if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)
  }
}

class FireWork {
  dead= false
  madeChildren = false
  x = 0
  y = 0
  targetX = 0
  targetY = 0
  shade = 0
  offsprings = 0
  history: any[] = []
  fireworks: any[] = []
  ctx:any = null

  constructor(fireworks, ctx, x, y, targetX, targetY, shade, offsprings) {
    this.fireworks = fireworks
    this.ctx = ctx

    this.dead = false
    this.offsprings = offsprings

    this.x = x
    this.y = y
    this.targetX = targetX
    this.targetY = targetY

    this.shade = shade
    this.history = []
  }

  update(delta) {
    if (this.dead) return

    const xDiff = this.targetX - this.x
    const yDiff = this.targetY - this.y
    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) {
      this.x += xDiff * 2 * delta
      this.y += yDiff * 2 * delta

      this.history.push({
        x: this.x,
        y: this.y
      })

      if (this.history.length > 20) {
        this.history.shift()
      }

    } else {
      if (this.offsprings && !this.madeChildren) {
        // 生成子烟花
        const babies = this.offsprings / 2
        for (let i = 0; i < babies; i++) {
          const targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
          const targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0
          this.fireworks.push(new FireWork(this.fireworks, this.ctx, this.x, this.y, targetX, targetY, this.shade, 0))
        }
      }
      this.madeChildren = true
      this.history.shift()
    }

    if (!this.history.length) {
      this.dead = true
    } else if (this.offsprings) {
      for (let i = 0; this.history.length > i; i++) {
        const point = this.history[i]
        this.ctx.beginPath()
        this.ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
        this.ctx.arc(point.x, point.y, 1, 0, PI2, false)
        this.ctx.fill()
      }
    } else {
      this.ctx.beginPath()
      this.ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
      this.ctx.arc(this.x, this.y, 1, 0, PI2, false)
      this.ctx.fill()
    }
  }
}

const onAddEvent = (evt) => {
  scene.onClick(evt)
}

const onRunning = async () => {
  await nextTick()
  box =  document.getElementById('fireWork-box') as any
  let then = timestamp()
  scene = new Scene('fireWork')
  box.addEventListener('click', onAddEvent)

  function loop() {
    const now = timestamp()
    const delta = now - then
    then = now

    // 不加这个if，可能会导致烟花回流
    if (delta < 50) {
      scene.update(delta / 1000)
    }

    requestID.value = window.requestAnimationFrame(loop)
  }
  loop()
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
  box?.removeEventListener('click', onAddEvent)
  cancelAnimationFrame(requestID.value)
  scene = null
}


onMounted(async() => {
  await nextTick()
})


onUnmounted(() => {
  destroy()
})
</script>