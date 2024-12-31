<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div v-if="isRunning" id="zoomAndDrag" class="stage"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)

class Chart {
  width
  height
  El
  ctx
  shapes
  doc
  scale
  maxScale
  minScale
  step
  offsetX
  offsetY
  wrapDom
  mousedownOriginX
  mousedownOriginY
  targetX
  targetY
  bindScroll
  bindDrag
  activeShape

  constructor(params) {
    const wrapDomStyle = getComputedStyle(params.el)
    this.width = parseInt(wrapDomStyle.width, 10)
    this.height = parseInt(wrapDomStyle.height, 10)

    this.El = document.createElement('canvas')
    this.El.width = this.width
    this.El.height = this.height
    this.ctx = this.El.getContext('2d')
    params.el.appendChild(this.El)

    this.shapes = []
    this.doc = params.doc

    this.scale = 1
    this.maxScale = 3
    this.minScale = 1
    this.step = 0.1
    this.offsetX = 0
    this.offsetY = 0
    this.addScaleFunc()

    this.wrapDom = params.el
    this.mousedownOriginX = 0
    this.mousedownOriginY = 0
    this.targetX = 0
    this.targetY = 0
    this.addDragFunc()

    this.bindScroll = null
    this.bindDrag = null
  }

  bindScrollFunc() {
    this.bindScroll = this.scrollFunc.bind(this)
  }

  bindDragFunc() {
    this.bindDrag = this.moveCanvasFunc.bind(this)
  }

  addScaleFunc() {
    this.El.addEventListener('mouseenter', this.addMouseWheel.bind(this))
    this.El.addEventListener('mouseleave', this.removeMouseWheel.bind(this))
  }

  addDragFunc() {
    this.El.addEventListener('mousedown', this.addMouseDrag.bind(this))
    this.doc.addEventListener('mouseup', this.removeMouseDrag.bind(this))
  }

  addMouseDrag(e) {
    this.bindDragFunc()
    this.targetX = e.offsetX
    this.targetY = e.offsetY

    this.mousedownOriginX = this.offsetX
    this.mousedownOriginY = this.offsetY

    this.activeShape = null

    this.wrapDom.style.cursor = 'grabbing'
    this.El.addEventListener('mousemove', this.bindDrag, false)
  }

  removeMouseDrag() {
    this.wrapDom.style.cursor = ''
    this.El.removeEventListener('mousemove', this.bindDrag, false)
  }

  moveCanvasFunc(e) {
    const maxDragX = this.El.width / 2
    const maxDragY = this.El.height / 2

    const offsetX = this.mousedownOriginX + (e.offsetX - this.targetX)
    const offsetY = this.mousedownOriginY + (e.offsetY - this.targetY)

    this.offsetX = Math.abs(offsetX) > maxDragX ? this.offsetX : offsetX
    this.offsetY = Math.abs(offsetY) > maxDragY ? this.offsetY : offsetY

    this.render()
  }

  addMouseWheel() {
    this.bindScrollFunc()
    this.doc.addEventListener('mousewheel', this.bindScroll, {
      passive: false
    })
  }

  removeMouseWheel() {
    this.doc.removeEventListener('mousewheel', this.bindScroll, {
      passive: false
    })
  }

  scrollFunc(e) {
    e.preventDefault()

    if (e.wheelDelta) {
      const x = e.offsetX - this.offsetX
      const y = e.offsetY - this.offsetY

      const offsetX = (x / this.scale) * this.step
      const offsetY = (y / this.scale) * this.step

      if (e.wheelDelta > 0) {
        this.offsetX -= this.scale >= this.maxScale ? 0 : offsetX
        this.offsetY -= this.scale >= this.maxScale ? 0 : offsetY

        this.scale += this.step
      } else {
        this.offsetX += this.scale <= this.minScale ? 0 : offsetX
        this.offsetY += this.scale <= this.minScale ? 0 : offsetY

        this.scale -= this.step
      }

      this.scale = Math.min(this.maxScale, Math.max(this.scale, this.minScale))

      this.render()
    }
  }

  drawCircle(data) {
    this.ctx.beginPath()
    this.ctx.fillStyle = data.fillStyle
    this.ctx.arc(data.x, data.y, data.r, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  drawLine(data) {
    const arr = data.data.concat()

    this.ctx.beginPath()
    this.ctx.moveTo(arr.shift(), arr.shift())
    this.ctx.lineWidth = data.lineWidth || 1
    this.ctx.strokeStyle = data.strokeStyle || 'black'
    do {
      this.ctx.lineTo(arr.shift(), arr.shift())
    } while (arr.length)

    this.ctx.stroke()
  }

  drawRect(data) {
    this.ctx.beginPath()
    this.ctx.fillStyle = data.fillStyle
    this.ctx.fillRect(...data.data)
  }

  draw(info) {
    switch (info.type) {
      case 'line':
        this.drawLine(info)
        break
      case 'rect':
        this.drawRect(info)
        break
      case 'circle':
        this.drawCircle(info)
        break
      default:
        break
    }
  }

  push(data) {
    this.shapes.push(data)
  }

  render() {
    // 先重置为单位矩阵
    this.ctx.setTransform(1, 0, 0, 1, 0, 0)
    // 再清除画布
    this.ctx.clearRect(0, 0, this.width, this.height)
    // 最后再设置矩阵
    this.ctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY)

    this.shapes.forEach(item => {
      this.draw(item)
    })
  }
}

const onRunning = async() => {
  await nextTick()
  const chartObj = new Chart({
    el: document.getElementById('zoomAndDrag'),
    doc: document
  })

  chartObj.push({
  	type: 'circle',
    fillStyle: 'pink',
    x: 400,
    y: 400,
    r: 50
  })

  chartObj.push({
    type: 'line',
    lineWidth: 2,
    strokeStyle: 'orange',
    data: [100, 300, 200, 90, 250, 200, 400, 200]
  })

  chartObj.push({
    type: 'rect',
    fillStyle: '#0f00ff',
    data: [200, 300, 100, 100]
  })

  chartObj.render()
}

const onTrigger = async () => {
  if(!isRunning.value) {
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