<template>
  <div>
    <div>文字：{{ text || '--' }}</div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="clickEvent" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
let canvas
let ctx
const idPool = {}
const text = ref('')

const ActionType = {
  Down: 'down',
  Up: 'up',
  Move: 'move'
}
const EventNames = {
  click: 'click',
  mousedown: 'mousedown',
  mousemove: 'mousemove',
  mouseup: 'mouseup',
  mouseenter: 'mouseenter',
  mouseleave: 'mouseleave'
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

const createOnceId = () => {
  return Array(3).fill(0).map(() => parseInt(String(Math.random() * 255))).concat(255).join('-')
}

const rgbaToId = (rgba) => {
  return rgba.join('-')
}

const idToRgba = (id) => {
  return id.split('-')
}

const createId = () => {
  let id = createOnceId()
  while (idPool[id]) {
    id = createOnceId()
  }
  return id
}

class EventSimulator {
  listenersMap
  lastMoveId
  lastDownId
  constructor() {
    this.listenersMap = {}
    this.lastMoveId = null
    this.lastDownId = null
  }

  addAction(action, evt) {
    const {
      type,
      id
    } = action

    // mousemove
    if (type === ActionType.Move) {
      this.fire(id, EventNames.mousemove, evt)
    }

    // mouseover
    // mouseenter
    if (type === ActionType.Move && (!this.lastMoveId || this.lastMoveId !== id)) {
      this.fire(id, EventNames.mouseenter, evt)
      this.fire(this.lastMoveId, EventNames.mouseleave, evt)
    }

    // mousedown
    if (type === ActionType.Down) {
      this.fire(id, EventNames.mousedown, evt)
    }

    // mouseup
    if (type === ActionType.Up) {
      this.fire(id, EventNames.mouseup, evt)
    }

    // click
    if (type === ActionType.Up && this.lastDownId === id) {
      this.fire(id, EventNames.click, evt)
    }

    if (type === ActionType.Move) {
      this.lastMoveId = action.id
    } else if (type === ActionType.Down) {
      this.lastDownId = action.id
    }
  }

  addListeners(id, listeners) {
    this.listenersMap[id] = listeners
  }

  fire(id, eventName, evt) {
    if (this.listenersMap[id] && this.listenersMap[id][eventName]) {
      console.log(this.listenersMap)
      this.listenersMap[id][eventName].forEach(listener => listener(evt))
    }
  }
}

class Stage {
  canvas
  ctx
  osCanvas
  osCtx
  shapeIds
  shapeList
  eventSimulator
  constructor(customCanvas) {
    this.canvas = customCanvas
    this.canvas.width = parseInt(customCanvas.width)
    this.canvas.height = parseInt(customCanvas.height)

    
    this.ctx = this.canvas.getContext('2d')
    this.osCanvas = new OffscreenCanvas(this.canvas.width, this.canvas.height)
    this.osCtx = this.osCanvas.getContext('2d')

    this.canvas.addEventListener('mousedown', this.handleCreator(ActionType.Down))
    this.canvas.addEventListener('mouseup', this.handleCreator(ActionType.Up))
    this.canvas.addEventListener('mousemove', this.handleCreator(ActionType.Move))

    this.shapeIds = new Set()
    this.shapeList = new Set()
    this.eventSimulator = new EventSimulator()
  }

  add(shape) {
    const id = shape.getId()
    this.eventSimulator.addListeners(id, shape.getListeners())
    this.shapeIds.add(id)
    this.shapeList.add(shape)
  }

  start() {
    this.clearCanvas()
    this.collision()
    this.shapeList.forEach(item => {
      item.draw(this.ctx, this.osCtx)
    })
    window.requestAnimationFrame(this.start.bind(this))
  }


  collision() {
    // this.shapeList.forEach(item => {
    // 	console.log(item.x, item.y)
    // })
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.osCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  handleCreator(type) {
    return evt => {
      const x = evt.offsetX
      const y = evt.offsetY
      const id = this.hitJudge(x, y)
      // 首先判断是否点击元素，并移动
      // 防止冒泡
      // 最后再判断是否触发元素的on事件
      if (id) {
        this.eventSimulator.addAction({ type, id }, evt)
      }
    }
  }

  hitJudge(x, y) {
    const rgba = Array.from(this.osCtx.getImageData(x, y, 1, 1).data)
    const id = rgbaToId(rgba)
    return this.shapeIds.has(id) ? id : undefined
  }
}

class Base {
  listeners
  id
  constructor() {
    this.listeners = { }
    this.id = createId()
  }

  getId() {
    return this.id
  }

  draw(ctx, osCtx) {
    throw new Error('Method not implemented.')
  }

  on(eventName, listener) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].push(listener)
    } else {
      this.listeners[eventName] = [listener]
    }
  }

  getListeners() {
    return this.listeners
  }
}

class Arc extends Base {
  props
  ctx
  osCtx
  isCollision
  x
  y
  radius
  fillColor

  constructor(p) {
    super()
    this.props = p
    this.ctx = null
    this.osCtx = null
    this.isCollision = false

  }

  move({ x,  y }) {
    // 暂停不给移动
    if (!this.isCollision) {
      this.props.x = x
      this.props.y = y
    }
    this.draw(this.ctx, this.osCtx)

  }

  collision() {
    this.isCollision = true
  }

  draw(ctx, osCtx) {
    this.ctx = ctx
    this.osCtx = osCtx
    const {
      x,
      y,
      radius,
      fillColor
    } = this.props
    this.x = x
    this.y = y
    this.radius = radius
    this.fillColor = fillColor

    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fillStyle = this.fillColor
    ctx.fill()
    ctx.restore()

    const [r, g, b, a] = idToRgba(this.id)
    osCtx.save()
    osCtx.beginPath()
    osCtx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    osCtx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
    osCtx.fill()
    osCtx.restore()
  }
}

const onRunning = async () => {
  await nextTick()
  canvas = document.getElementById('clickEvent')
  console.log(canvas)
  ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const stage = new Stage(canvas)
  const arc1 = new Arc({
    x: 20,
    y: 120,
    radius: 10,
    fillColor: 'red'
  })

  const arc2 = new Arc({
    x: 220,
    y: 120,
    radius: 10,
    fillColor: 'orange'
  })

  stage.add(arc1)
  stage.add(arc2)
  stage.start()

  arc1.on(EventNames.click, () => { text.value = '点击了红色' })
  // arc2.on(EventNames.click, () => console.log('arc2 click'))
  arc2.on(EventNames.mousedown, (e) => { text.value = `点击了橙色，x：${e.offsetX}，y：${e.offsetY}` })
  // arc2.on(EventNames.mouseup, () => console.log('arc2 click'))

  let x = 220
	let y = 120

  const runAnimate = () => {
    x = x - 1
    if(x <= 10) x = canvas.width / 2
    arc2.move({ x, y })
    requestID.value = requestAnimationFrame(runAnimate)
  }

  runAnimate()
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