<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="tree2" class="stage bg-black"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const eventListeners = ref<any>([])

const onTrigger = async () => {
  if (!isRunning.value) {
    eventListeners.value = []
    isRunning.value = true
    await nextTick()
    onRunning()
  } else {
    isRunning.value = false
    destroy()
    eventListeners.value = []
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

function colorToRGB (color, alpha) {
  // 如果是字符串格式，转换为数字
  if (typeof color === "string" && color[0] === "#") {
    // parseInt(('#ffffff').slice(1),16) 为 16777215
    color = window.parseInt(color.slice(1), 16)
  }
  alpha = (alpha === undefined) ? 1 : alpha
    
  // 将color转换成r,g,b值，>>右移  <<左移
  const r = color >> 16 & 0xff // 例如：16777215 >> 16 变成 255， 255 & 0xff为255
  const g = color >> 8 & 0xff
  const b = color & 0xff
  const a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha)
    
  return `rgb(${r}, ${g}, ${b}, ${a})`
}

function Tree (color) {
  this.x = 0
  this.y = 0
  this.xpos = 0
  this.ypos = 0
  this.zpos = 0
  this.scaleX = 1
  this.scaleY = 1
  this.color = parseColor(color, false)
  this.alpha = 1
  this.lineWidth = 1
  this.branch = []
  
  // 生成一些随机分支位置
  this.branch[0] = -140 - Math.random() * 20
  this.branch[1] = -30 - Math.random() * 30
  this.branch[2] = Math.random() * 80 - 40
  this.branch[3] = -100 - Math.random() * 40
  this.branch[4] = -60 - Math.random() * 40
  this.branch[5] = Math.random() * 60 - 30
  this.branch[6] = -110 - Math.random() * 20
}

Tree.prototype.draw = function (context) {
  context.save()
  context.translate(this.x, this.y)
  context.scale(this.scaleX, this.scaleY)
  
  context.lineWidth = this.lineWidth
  context.strokeStyle = colorToRGB(this.color, this.alpha)
  context.beginPath()
  context.moveTo(0, 0)
  context.lineTo(0, this.branch[0])
  context.moveTo(0, this.branch[1])
  context.lineTo(this.branch[2], this.branch[3])
  context.moveTo(0, this.branch[4])
  context.lineTo(this.branch[5], this.branch[6])
  context.stroke()
  context.restore()
}


const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('tree2')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const trees: any = []
  const treeNum = 1000 // 树的数量
  const fl = 250 // 焦距
  const vpX = width / 2 // 视点中心x坐标
  const vpY = height / 2  // 视点中心y坐标
  const floor = 50 // 地板位置
  const gravity = 0.3 // 重力
  const friction = 0.98 // 摩擦力
  let ax = 0
  let ay = 0
  let az = 0
  let vx = 0
  let vy = 0
  let vz = 0

  for (let i = 0; i < treeNum; i++) {
    const color = Math.random() * (0xffffff)
    const tree = new Tree(color)
    tree.xpos = Math.random() * 2000 - 1000
    tree.ypos = floor
    tree.zpos = Math.random() * 10000
    trees.push(tree)
  }

  const move = (tree) => {
    tree.xpos += vx
    tree.ypos += vy
    tree.zpos += vz
      
    if (tree.ypos < floor) {
        tree.ypos = floor
    }
    
    if (tree.zpos < -fl) {
      tree.zpos += 10000
    }

    if (tree.zpos > 10000 - fl) {
      tree.zpos -= 10000
    }

    const scale = fl / (fl + tree.zpos)
    tree.scaleX = scale
    tree.scaleY = scale
    tree.x = vpX + tree.xpos * scale
    tree.y = vpY + tree.ypos * scale
    tree.alpha = scale
  }

  const zSort = (a, b) => {
    return (b.zpos - a.zpos)
  }
      
  const draw = (tree) => {
    tree.draw(ctx)
  }


  const onKeyDown = (event) => {
    console.log(event.keyCode)
    switch (event.keyCode) {
      case 87: // w
        az = -1
        break
      case 83: // s
        az = 1
        break
      case 65: // a
        ax = 1
        break
      case 68: // d
        ax = -1
        break
      case 32: // space
        ay = 1
        break
    }
  }

  const onKeyUp = (event) => {
    switch (event.keyCode) {
      case 87: // w
      case 83: // s
        az = 0
        break
      case 65: // a
      case 68: // d
        ax = 0
        break
      case 32: // space
        ay = 0
        break
    }
  }

  eventListeners.value.push(onKeyDown, onKeyUp)

  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  
  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    requestID.value = requestAnimationFrame(runAnimate)

    vx += ax
    vy += ay
    vz += az
    vy -= gravity
    trees.forEach(move)
    vx *= friction
    vy *= friction
    vz *= friction
    trees.sort(zSort)
    trees.forEach(draw)
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