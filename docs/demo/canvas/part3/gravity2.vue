<template>
  <div>
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

const BLACK_HOLD_RADIUS = 50
const BLACK_HOLD_MASS = Math.pow(10, 3)

class BlackHold {
  ctx: any
  x: number
  y: number
  radius: number
  color: string
  mass: number
  rotationAngle: number

	constructor(ctx, config) {
		const {
			x,
			y,
			radius,
			color
		} = config
		this.ctx = ctx
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.mass = BLACK_HOLD_MASS
		this.rotationAngle = 0
	}

	addRotatinAngle() {
		this.rotationAngle += 0.005
	}

	draw() {
		this.addRotatinAngle()
		this.drawRound()
		this.drawRect()
	}

	drawRound() {
		this.ctx.save()
		this.ctx.beginPath()
		this.ctx.fillStyle = this.color
		this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
		this.ctx.fill()
		this.ctx.restore()
	}

	drawRect() {
		this.ctx.save()
		this.ctx.beginPath()
		// 将画布原点移动到矩形的中心
		this.ctx.translate(this.x, this.y)
		// 应用旋转
		this.ctx.rotate(this.rotationAngle)
		this.ctx.fillStyle = 'orange'
		// this.ctx.fillRect(this.x - 25, this.y - 25, 50, 50) // 因为平移到this.x, this.y，所以不用this.x - 25, this.y - 25
		this.ctx.fillRect(-25, -25, 50, 50)
		this.ctx.fill()
		this.ctx.restore()
	}
}


class Ball {
  ctx: any
  x: number
  y: number
  radius: number
  color: string
  mass: number
  angle: number
  orbitRadius: number // 设置轨道半径
  tangentialSpeed: number // 切向速度
  vx: number
  vy: number
  isAlive: boolean

	constructor(ctx, config) {
		const {
			radius,
			x,
			y,
			color,
			mass,
			angle,
			orbitRadius, // 设置轨道半径
		} = config
		this.ctx = ctx
		this.radius = radius
		this.x = x
		this.y = y
		this.color = color
		this.mass = mass
		this.angle = angle
		this.orbitRadius = orbitRadius // 设置轨道半径
		this.tangentialSpeed = Math.sqrt(BLACK_HOLD_MASS / this.orbitRadius) // 根据轨道半径计算切向速度，v = √￣(GM/r)，M是被围绕的物体，r是两者的距离

		this.vx = 0
		this.vy = 0

		this.isAlive = true
	}


	draw() {
		this.ctx.save()
		this.ctx.beginPath()
		this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
		this.ctx.fillStyle = this.color
		this.ctx.fill()
		this.ctx.restore()
	}

	destroy() {
		this.isAlive = false
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
  const centerX = width / 2
  const centerY = height / 2

  const gravitate = (blackHold, star) => {
    const dx = star.x - blackHold.x
    const dy = star.y - blackHold.y
    const distQ = dx * dx + dy * dy
    const dist = Math.sqrt(distQ)

    // 引力计算，计算朝着黑洞前进的x，y
    const F = blackHold.mass * star.mass / distQ
    // 引力加速度分量
    const ax = F * dx / dist
    const ay = F * dy / dist
    star.vx -= ax / star.mass
    star.vy -= ay / star.mass
    star.x += star.vx
    star.y += star.vy

    // 计算完引力后，计算围绕黑洞旋转的x，y
    const afterDx = star.x - blackHold.x
    const afterDy = star.y - blackHold.y
    const afterDistQ = afterDx * afterDx + afterDy * afterDy
    const afterDist = Math.sqrt(afterDistQ)
    star.angle += star.tangentialSpeed / star.orbitRadius
    star.orbitRadius = afterDist
    star.x = blackHold.x + star.orbitRadius * Math.cos(star.angle)
    star.y = blackHold.y + star.orbitRadius * Math.sin(star.angle)
  }

  const draw = particle => {
    particle.draw(particle.ctx)
  }

  const move = (blackHold, star) => {
    gravitate(blackHold, star)
  }

  const destroy = (blackHold, star) => {
    const blackHoldRadius = blackHold.radius
    const starRadius = star.radius

    const dx = star.x - blackHold.x
    const dy = star.y - blackHold.y
    const distQ = dx * dx + dy * dy
    const dist = Math.sqrt(distQ)

    const deathLine = Math.abs(starRadius - blackHoldRadius)

    return dist <= deathLine
  }

  let starAliveList: any = []
  
  const blackHold = new BlackHold(ctx, {
    radius: BLACK_HOLD_RADIUS,
    x: centerX,
    y: centerY,
    color: '#000',
    mass: BLACK_HOLD_MASS
  })

  for (let i = 0; i < 2; i++) {
    const radius = Math.random() * 15
    const mass = radius * Math.random()
    const orbitRadius = 50 + Math.random() * 200 // 随机生成轨道半径
    const angle = Math.random() * 2 * Math.PI // 随机生成初始角度
    const x = centerX + orbitRadius * Math.cos(angle) // 根据轨道半径和角度计算初始 x 坐标
    const y = centerY + orbitRadius * Math.sin(angle) // 根据轨道半径和角度计算初始 y 坐标
    const star = new Ball(ctx, {
      radius: radius,
      x: x,
      y: y,
      color: '#0c7',
      mass: Math.pow(10, mass),
      angle: angle,
      orbitRadius: orbitRadius // 设置轨道半径
    })

    starAliveList.push(star)
  }


  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)

    starAliveList.forEach(star => {
      move(blackHold, star)
      draw(star)

      const isDeath = destroy(blackHold, star)
      if (isDeath) star.destroy()
    })

    

    starAliveList = starAliveList.filter(v => v.isAlive)
    if(starAliveList.length <= 0 ) {
      for (let i = 0; i < 2; i++) {
        const radius = Math.random() * 15
        const mass = radius * Math.random()
        const orbitRadius = 50 + Math.random() * 200 // 随机生成轨道半径
        const angle = Math.random() * 2 * Math.PI // 随机生成初始角度
        const x = centerX + orbitRadius * Math.cos(angle) // 根据轨道半径和角度计算初始 x 坐标
        const y = centerY + orbitRadius * Math.sin(angle) // 根据轨道半径和角度计算初始 y 坐标
        const star = new Ball(ctx, {
          radius: radius,
          x: x,
          y: y,
          color: '#0c7',
          mass: Math.pow(10, mass),
          angle: angle,
          orbitRadius: orbitRadius // 设置轨道半径
        })

        starAliveList.push(star)
      }
    }

    blackHold.draw()


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