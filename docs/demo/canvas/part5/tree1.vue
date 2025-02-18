<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="tree1" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const vz = ref(0)
const trees = ref<any>([]) // 树的数组
const treeNum = 5 // 树的数量
const vpX = 648 / 2 // 视点
const vpY = 360 / 2 // 视点
const floor = 200 // 地面高度
const fl = 250 // 焦距

const onTrigger = async () => {
  trees.value = []
  vz.value = 0
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    onRunning()
  } else {
    isRunning.value = false
    destroy()
  }
}

function ranColor () {
	return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6)
}

function NatureTree (ctx) {
  this.ctx = ctx
  this.x = 0 // 位置
  this.y = 0 // 位置
  this.xpos = 0 // 位置
  this.ypos = 0 // 位置
  this.zpos = 0 // 位置
  this.scaleX = 0.85 // 缩放
  this.scaleY = 0.85 // 缩放
  this.alpha = 1 // 透明度
  this.spread = 0.6 // 树枝分叉状态
  this.drawLeaves = true // 是否绘制树叶
  this.leavesColor = ranColor() // 树叶颜色
  this.max_branch_width = 20 // 树枝最大宽度
  this.max_branch_height = 60 // 树枝最大高度

  this.small_leaves = 10 // 小叶子
  this.medium_leaves = 200 // 中叶子
  this.big_leaves = 500 // 大叶子
  this.thin_leaves = 900 // 细叶子
  
  this.leaveType = this.medium_leaves // 树叶类型
}

NatureTree.prototype.draw = function (spread, leaves, leaveType) {
  // 设置树杈分多少枝
  if (spread >= 0.3 && spread <= 1) {
    this.spread = spread
  } else {
    this.spread = 0.6
  }

  // 是否绘制树叶
  if (leaves === true || leaves === false) {
    this.drawLeaves = leaves
  } else {
    this.drawLeaves = true
  }

  if (leaveType === this.small_leaves ||
      leaveType === this.medium_leaves ||
      leaveType === this.big_leaves ||
      leaveType === this.thin_leaves) {
    this.leaveType = leaveType
  } else {
    this.leaveType = this.medium_leaves
  }

  this.ctx.save()
  this.ctx.lineWidth = 1 + Math.random() * this.max_branch_width
  this.ctx.lineCap = 'round'
  this.ctx.lineJoin = 'round'
  this.ctx.translate(this.x, this.y)
  this.ctx.scale(this.scaleX, this.scaleY)
  this.branchAndLeaves(0)
  this.ctx.restore()
}

// 当前递归的层级（代数）是gen，当gen小于12时，继续递归，画树枝，否则画树叶
// 使用 rotate 和 scale 方法模拟树枝的分支
NatureTree.prototype.branchAndLeaves = function (gen) {
  if (gen < 12) {
    this.ctx.save()

    this.ctx.beginPath()
    this.ctx.moveTo(0, 0)
    this.ctx.lineTo(0, -this.max_branch_height)
    this.ctx.stroke()

    this.ctx.translate(0, -this.max_branch_height)

    const randomN = -(Math.random() * 0.1) + 0.1
    this.ctx.rotate(randomN)

    // 画树枝
    if ((Math.random() * 1) < this.spread) {
      // 画左侧树枝
      this.ctx.rotate(-0.35)
      this.ctx.scale(0.7, 0.7)
      this.ctx.save()
      this.branchAndLeaves(gen + 1) // 递归绘制左侧分支
      this.ctx.restore()
    		
      // 画右侧树枝
      this.ctx.rotate(0.6)
      this.ctx.save()
      this.branchAndLeaves(gen + 1) // 递归绘制右侧分支
      this.ctx.restore()
    } else {
      this.branchAndLeaves(gen)
    }

    this.ctx.restore()

  } else {
    // 枝条画完画树叶
    if (this.drawLeaves) {
      let lengthFactor = 200
      if (this.leaveType === this.thin_leaves) {
        lengthFactor = 10
      }
      this.ctx.save()
      this.ctx.fillStyle = this.leavesColor
      this.ctx.fillRect(0, 0, this.leaveType, lengthFactor)
      this.ctx.restore()
    }
  }
}

const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('tree1')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  for (let i = 0; i < treeNum; i++) {
    const tree = new NatureTree(ctx)
    tree.xpos = Math.random() * 1000 - 500
    tree.ypos = floor
    tree.zpos = Math.random() * 1000
    trees.value.push(tree)
  }

  const move = (tree) => {
    tree.zpos += vz.value
    if (tree.zpos < -fl) {
      tree.zpos += 1000
    }
    if (tree.zpos > 1000 - fl) {
      tree.zpos -= 1000
    }
    const scale = fl / (fl + tree.zpos)
    tree.scaleX =scale
    tree.scaleY = scale
    tree.x = vpX + tree.xpos * scale
    tree.y = vpY + tree.ypos * scale
    tree.alpha = scale
  }

  const zSort = (a, b) => {
    return (b.zpos - a.zpos)
  }
      
  const draw = (tree) => {
    tree.draw(0.6, true, tree.medium_leaves)
  }

  
  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)
    trees.value.forEach(move)
    trees.value.sort(zSort)
    trees.value.forEach(draw)

    // requestID.value = requestAnimationFrame(runAnimate)
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