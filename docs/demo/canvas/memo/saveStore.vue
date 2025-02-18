<template>
  <div>
    <div @click="showText = !showText" class="pointer">{{ !showText ? '点击展开文字' : '点击收起文字' }}</div>
    <div v-if="showText">
      <div>ctx.save() 和 ctx.restore() 是非常重要的方法，用于保存和恢复绘图上下文（context）的状态。它们的作用是临时保存当前的绘图状态，并在需要时恢复到之前的状态。这种机制在复杂的绘图任务中非常有用，尤其是在需要频繁切换绘图样式或变换（如平移、旋转、缩放）时。</div>
      <div>---------------------------------------------------</div>
      <div>this.ctx.save()：保存当前的绘图上下文状态。</div>
      <div>保存的内容包括：</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;当前的绘图样式（如 fillStyle, strokeStyle, lineWidth 等）。</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;变换矩阵（如 translate, rotate, scale 等）。</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;剪切区域（clip）。</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;其他绘图属性（如 globalAlpha, lineCap, lineJoin 等）。</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;保存的状态被压入一个栈中，可以通过 restore 方法恢复。</div>
      <div>---------------------------------------------------</div>
      <div>this.ctx.restore()：恢复最近一次保存的状态。</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;恢复后，所有保存的绘图属性和变换矩阵都会被还原。</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;如果没有保存的状态，调用 restore 不会有任何效果。</div>
      <div>---------------------------------------------------</div>
      <div>使用场景</div>
      <div>---------------------------------------------------</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;场景 1：局部变换，当需要对某个图形进行局部变换（如平移、旋转或缩放）时，使用 save 和 restore 可以避免影响其他图形的绘制。</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.save();  // 保存当前状态</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.translate(100, 100);  // 平移</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.rotate(Math.PI / 4);  // 旋转45度</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.fillRect(-50, -50, 100, 100);  // 绘制一个矩形</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.restore();  // 恢复到保存的状态</div>
      <div>---------------------------------------------------</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;场景 2：临时修改样式，当需要临时修改绘图样式（如颜色、线宽等）时，使用 save 和 restore 可以避免修改全局状态。</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.save();  // 保存当前状态</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.fillStyle = "red";  // 修改填充颜色</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.fillRect(10, 10, 100, 100);  // 绘制一个红色矩形</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.restore();  // 恢复到保存的状态</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.fillStyle = "blue";  // 修改填充颜色</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.ctx.fillRect(120, 10, 100, 100);  // 绘制一个蓝色矩形</div>
      <div>---------------------------------------------------</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;场景 3：复杂的分形或递归绘图，在分形树或递归绘图中，每次递归调用可能需要不同的变换状态。使用 save 和 restore 可以确保每次递归调用不会相互影响。</div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'

const showText = ref(false)
</script>