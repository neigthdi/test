<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="collisionAndFriction" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const eventListeners= ref<any>([])
const f = 0.97
let vr = 0
let vx = 0
let vy = 0
let ax = 0
let ay = 0
let speed = 0
let angle = 0


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

function SpaceShip () {
  this.x = 0
  this.y = 0
  this.width = 25
  this.height = 25
  this.rotation = 0
  this.showFlame = false
}

SpaceShip.prototype.draw = function (context) {
  context.save()
  context.beginPath()
  context.translate(this.x, this.y)
  context.rotate(this.rotation)
  context.strokeStyle = "#dc6aff"
  context.moveTo(10, 0)
  context.lineTo(-10, 10)
  context.lineTo(-5, 0)
  context.lineTo(-10, -10)
  context.lineTo(10, 0)
  context.closePath()
  context.stroke()
  if (this.showFlame === true) {
    context.save()
    context.beginPath()
    context.strokeStyle = "#f00"
    context.moveTo(-7.5, -5)
    context.lineTo(-15, 0)
    context.lineTo(-7.5, 5)
    context.stroke()
    context.restore()
  }
  context.restore()
}




const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('collisionAndFriction')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const ship = new SpaceShip()
  ship.x = canvas.width / 2
  ship.y = canvas.height / 2

  function keyDown (event) {
    event.preventDefault()

    switch (event.keyCode) {
      case 68:
        vr = -3
        break
      case 65:
        vr = 3
        break
      case 87:
        speed = 0.5
        ship.showFlame = true
        break
      }
  }

  function keyUp(event) {
    event.preventDefault()
    vr = 0
    speed = 0
    ship.showFlame = false
  }

  eventListeners.value.push(keyDown, keyUp)

  window.addEventListener('keydown', keyDown)
  window.addEventListener('keyup', keyUp)

  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    ship.rotation += vr * Math.PI / 180
    angle = ship.rotation

    ax = Math.cos(angle) * speed
    ay = Math.sin(angle) * speed
    
    vx += ax
    vy += ay
    
    vx *= f
    vy *= f
    
    ship.x += vx
    ship.y += vy

    if (ship.x + ship.width / 2 > canvas.width) {
      ship.x = canvas.width - ship.width
      vx *= -1
    } else if (ship.x < ship.width / 2) {
      ship.x = ship.width / 2
      vx *= -1
    }
    
    if (ship.y + ship.height / 2 > canvas.height) {
      ship.y = canvas.height - ship.height / 2
      vy *= -1
    } else if (ship.y < ship.height / 2) {
      ship.y = ship.height / 2
      vy *= -1
    }

    ship.draw(ctx)
  }

  runAnimate()
}


const destroy = () => {
  cancelAnimationFrame(requestID.value)
  eventListeners.value.forEach(listener => {
    window.removeEventListener('keydown', listener)
    window.removeEventListener('keyup', listener)
  })
}

onUnmounted(() => {
  destroy()
})
</script>