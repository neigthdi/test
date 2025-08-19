<template>
  <div>
    <div class="flex space-between">
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
      <div @click="onShowImg = !onShowImg" class="pointer">点击展示图片</div>
    </div>
    <img v-if="onShowImg" src="/public/markdown/webgl/lineWidthAndMap.png" alt="lineWidthAndMap" />
    <canvas v-if="isRunning" id="lineWidthAndMap" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onUnmounted } from 'vue'
import earcut from 'earcut'

// gl.POINTS：绘制单个点。
// gl.LINES：绘制线段，每两个顶点构成一条线段。
// gl.LINE_LOOP：绘制线环，所有顶点依次连接成一个闭合的环。
// gl.LINE_STRIP：绘制线带，所有顶点依次连接成一条连续的线。
// gl.TRIANGLES：绘制三角形，每三个顶点构成一个三角形。
// gl.TRIANGLE_STRIP：绘制三角形带，每三个连续的顶点构成一个三角形。
// gl.TRIANGLE_FAN：绘制三角形扇，第一个顶点作为中心点，后续每两个顶点与中心点构成一个三角形。

const lineVertex = `
	precision mediump float;
	
	attribute vec2 a_Position;
	
	varying vec3 vColor;
	
	void main() {
		
		vColor = vec3(0.0, 0.0, 1.0);
		
		gl_Position = vec4(a_Position, 0.0, 1.0);
		gl_PointSize = 1.0;
	}
`

const lineFragment = `
	precision mediump float;
	
	varying vec3 vColor;
	
	void main() {
		gl_FragColor = vec4(vColor, 1.0);
	}
`

const areaVertex = `
	precision mediump float;
	
	attribute vec2 a_Area;
	
	varying vec3 vColor;
	
	void main() {
		
		vColor = vec3(1.0, 0.0, 0.0);
		
		gl_Position = vec4(a_Area, 0.0, 1.0);
		gl_PointSize = 1.0;
	}
`

const areaFragment = `
	precision mediump float;
	
	varying vec3 vColor;
	
	void main() {
		gl_FragColor = vec4(vColor, 0.1);
	}
`

const imgVertex = `
	precision mediump float;
	
	attribute vec2 a_Position;
	
	attribute vec2 a_TexCoord;
	
	varying vec2 v_TexCoord;
	
	void main(){
		gl_Position = vec4(a_Position, 0.0, 1.0);; // 顶点坐标
		v_TexCoord = a_TexCoord; // 纹理坐标系下的坐标
	}
`

const imgFragment = `
	precision mediump float;
	
	uniform sampler2D u_Sampler0; // 纹理
	
	varying vec2 v_TexCoord; // 纹理坐标系下的坐标
	
	void main(){
		vec4 color0 = texture2D(u_Sampler0,v_TexCoord);
		gl_FragColor = color0; 
	}
`

const lineWidthVertex = `
	precision mediump float;
	
	attribute vec2 a_center;
	attribute vec2 a_prev_point;
	attribute vec2 a_next_point;
	attribute float a_side;
	
	uniform float u_line_width;
	
	varying vec3 vColor;
	
	vec2 calculateNormal(vec2 dir) {
		// 只能两行两列乘以两行一列，第一个的列数=第二个的行数
		// 旋转矩阵 |cos, -sin||x| ---> 【x * cosθ - y * sinθ】 ---> x' 
		// 旋转矩阵 |sin, +cos||y| ---> 【x * sinθ + y * cosθ】 ---> y' 
		return normalize(vec2(-dir.y, dir.x));
	}
	
	void main() {
		vColor = vec3(1.0, 0.0, 1.0);
		
		float len = u_line_width * 0.5;
		vec2 extrudedPosition;
		
		// 特殊情况处理：起点和终点
		if (distance(a_prev_point, a_center) < 0.000001) {
			
			// 起点 - 使用下一段的法线
			vec2 nextDir = normalize(a_center - a_next_point); // 注意：这两个※※※※这里是 a_center - a_next_point
			vec2 normal = calculateNormal(nextDir);
			extrudedPosition = a_center + normal * len * a_side;
			
		} else if (distance(a_next_point, a_center) < 0.000001) {
			
			// 终点 - 使用前一段的法线
			vec2 prevDir = normalize(a_prev_point - a_center); // 注意：这两个※※※※这里是 a_prev_point - a_center
			vec2 normal = calculateNormal(prevDir);
			extrudedPosition = a_center + normal * len * a_side;
			
		} else {
			
			vec2 v1Norm = normalize(a_center - a_next_point);
			vec2 v2Norm = normalize(a_center - a_prev_point);
			vec2 v3Norm = calculateNormal(v1Norm);
			vec2 vNorm = normalize(v1Norm + v2Norm);
			float scale = len / dot(v3Norm, vNorm);
			extrudedPosition = a_center + vNorm * scale * a_side;
			
		}
		
		gl_Position = vec4(extrudedPosition, 0.0, 1.0);
		gl_PointSize = 1.0;
	}
`

const lineWidthFragment = `
	precision mediump float;
	
	varying vec3 vColor;
	
	void main() {
		gl_FragColor = vec4(vColor, 1.0);
	}
`

class Webgl {
  gl: any = null
  ele: any = null
  width = 0
  height = 0
  constructor(ele, width, height) {
    this.ele = ele
    this.width = width
    this.height = height
    this.gl = null
  }

  init() {
    const canvas = document.querySelector(this.ele)
    canvas.width = this.width // 设置绘制缓冲区宽度
    canvas.height = this.height // 设置绘制缓冲区高度
    this.gl = canvas.getContext('webgl2', {
      antialias: true,
      depth: true
    })
  }

  initShader(vsSource, fsSource) {
    // 创建程序对象
    const program = this.gl.createProgram()

    // 创建着色对象
    const vertexShader = this._loadShader(this.gl.VERTEX_SHADER, vsSource)
    const fragmentShader = this._loadShader(this.gl.FRAGMENT_SHADER, fsSource)

    // 把顶点着色对象/片元着色对象，装进程序对象中
    this.gl.attachShader(program, vertexShader)
    this.gl.attachShader(program, fragmentShader)

    // 连接webgl上下文对象和程序对象
    this.gl.linkProgram(program)

    // 启动程序对象
    this.gl.useProgram(program)

    // 将程序对象挂到上下文对象上
    this.gl.program = program
  }

  _loadShader(type, source) {
    // 根据着色类型，创建着色器对象
    const shader = this.gl.createShader(type)

    // 将着色器源文件传入着色器对象中
    this.gl.shaderSource(shader, source)

    // 编译着色器对象
    this.gl.compileShader(shader)

    // 检查编译是否成功
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error('Shader compile error: ', this.gl.getShaderInfoLog(shader))
      this.gl.deleteShader(shader)
      return null
    }

    // 返回着色器对象
    return shader
  }

  setAttribute(info) {
    // 缓冲对象
    const vertexBuffer = this.gl.createBuffer()

    // 绑定缓冲对象
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer)

    // 写入数据
    this.gl.bufferData(this.gl.ARRAY_BUFFER, info.data, this.gl.STATIC_DRAW)

    // 获取 attribute 变量
    const attribute = this.gl.getAttribLocation(this.gl.program, info.attrName)

    // 修改 attribute 变量
    this.gl.vertexAttribPointer(attribute, info.size, this.gl.FLOAT, false, 0, 0)

    // 赋能-批处理
    this.gl.enableVertexAttribArray(attribute)
  }

  setIndexBuffer(indices) {
    const indexBuffer = this.gl.createBuffer()
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW)
  }

  setUniform(name, value) {
    const location = this.gl.getUniformLocation(this.gl.program, name)
    if (location) {
      this.gl.uniform1f(location, value)
    }
  }

  setTexture(imgObj, uSamplerName, texturePassNum, textureIndex) {
    const uSampler = this.gl.getUniformLocation(this.gl.program, uSamplerName)

    const texture = this.gl.createTexture()

    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, 1)

    //开始 texturePassNum 号纹理通道
    this.gl.activeTexture(this.gl[texturePassNum])

    //想目标绑定纹理对象
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture)

    //配置纹理的参数
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR)
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE)
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.MIRRORED_REPEAT)

    //设置着色器参数
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGB, this.gl.RGB, this.gl.UNSIGNED_BYTE, imgObj)

    //设置纹理数据
    this.gl.uniform1i(uSampler, textureIndex)
  }

  clear() {
    this.gl.clearColor(0, 0, 0, 1)
  }

  // gl.drawArrays 是一种直接使用顶点数组进行绘制的方法。它会按照顶点数组的顺序依次绘制顶点。
  // gl.drawElements 是一种使用索引数组进行绘制的方法。它通过索引数组来指定顶点的顺序，从而可以重复使用顶点数据，减少顶点数据的冗余。
  draw(type, count, useIndices = false) {
    if (useIndices) {
      this.gl.drawElements(this.gl[type], count, this.gl.UNSIGNED_SHORT, 0)
    } else {
      this.gl.drawArrays(this.gl[type], 0, count)
    }
  }
}


let animationFrame 
let sceneResources

const isRunning = ref(false)
const onShowImg = ref(false)

const onTrigger = async () => {
  if (!isRunning.value) {
    isRunning.value = true
    await nextTick()
    sceneResources = initScene()
  } else {
    isRunning.value = false
    destroy()
  }
}

const initScene = () => {
  const points = [
    { x: 0, y: 0 },
    { x: 0.5, y: 0.5 },
    { x: 0.5, y: 0 },
    { x: 0.25, y: -0.25 },
    { x: 0.5, y: -0.5 },
    { x: 0, y: -0.5 },
    { x: -0.5, y: -0.25 },
    { x: -0.5, y: 0.25 },
    { x: 0, y: 0 }, // 这两个补充线段的闭合
    { x: 0.5, y: 0.5 }, // 这两个补充线段的闭合
  ]

  const lw = 0.04
  const centers: any = []
  const prevPoints: any = []
  const nextPoints: any = []
  const sides: any = []
  const indices: any = []

  for (let i = 0; i < points.length; i++) {
    const now = points[i]

    let prev, next

    // 开始的点
    if (i === 0) {
      prev = now
    } else {
      prev = points[i - 1]
    }

    // 结束的点
    if (i === points.length - 1) {
      next = now
    } else {
      next = points[i + 1]
    }

    // 旋转90度 1
    centers.push(now.x, now.y)
    prevPoints.push(prev.x, prev.y)
    nextPoints.push(next.x, next.y)
    sides.push(1)

    // 旋转90度 -1
    centers.push(now.x, now.y)
    prevPoints.push(prev.x, prev.y)
    nextPoints.push(next.x, next.y)
    sides.push(-1)

  }

  // 创建三角形索引
  for (let i = 0; i < points.length - 1; i++) {
    const base = i * 2
    // 两个三角形组成一个四边形段
    // 0   2   4
    // ---------
    // |  /|  /|
    // | / | / |
    // |/  |/  |
    // ---------
    // 1   3   5
    indices.push(base, base + 1, base + 2)
    indices.push(base + 1, base + 2, base + 3)
  }

  const tempLines: any = []
  points.forEach((v: any) => {
    tempLines.push(v.x)
    tempLines.push(v.y)
  })
  const lines = new Float32Array(tempLines)

  const ele: any = document.querySelector('#lineWidthAndMap')
  const w = ele.clientWidth
  const h = ele.clientHeight

  const myGl = new Webgl('#lineWidthAndMap', w, h)
  myGl.init()
  myGl.clear()

  const img = new Image()
  img.src = '/images/star.jpg'
  img.crossOrigin = ''
  img.onload = () => {
    // 区域填充色
    const areaIndices = earcut(tempLines, [], 2) // 2表示每个顶点有2个坐标(x, y)。返回的是组成三角形的index。
    const triangles = new Float32Array(areaIndices.length * 2)
    for (let i = 0; i < areaIndices.length; i++) {
    triangles[i * 2] = lines[areaIndices[i] * 2]
    triangles[i * 2 + 1] = lines[areaIndices[i] * 2 + 1]
    }
    myGl.initShader(areaVertex, areaFragment)
    myGl.setAttribute({ data: triangles, size: 2, attrName: 'a_Area' })
    myGl.draw('TRIANGLES', triangles.length / 2)

    // 创建纹理坐标
    // 1、indices 和 lines 的含义
    // 	---- indices 是一个数组，表示三角形的顶点索引。这些索引是从 earcut 函数返回的，用于将多边形的顶点分割成三角形。
    // 	---- lines 是一个 Float32Array，包含多边形的所有顶点坐标。每个顶点由两个浮点数表示（x 和 y 坐标）。
    // 2、texCoords 的作用
    // 	---- texCoords 是一个 Float32Array，用于存储每个顶点的纹理坐标。纹理坐标是二维的，范围通常是 [0, 1]，表示纹理图像上的位置。
    // 	---- 纹理坐标用于告诉 GPU 如何将纹理图像映射到几何图形上。每个顶点都有一个对应的纹理坐标，GPU 会根据这些坐标将纹理图像映射到三角形上。
    // 3、映射顶点坐标到纹理坐标
    // 	---- 顶点坐标范围是 [-1, 1]（这是常见的归一化坐标范围），需要将这些坐标映射到 [0, 1] 范围，以便作为纹理坐标。
    // 	---- texCoords[i * 2] = (lines[indices[i] * 2] + 1) / 2：将 x 坐标从 [-1, 1] 映射到 [0, 1]。
    // 	---- texCoords[i * 2 + 1] = (lines[indices[i] * 2 + 1] + 1) / 2：将 y 坐标从 [-1, 1] 映射到 [0, 1]。
    // 	---- 原始范围：[−1,1]
    // 	---- 目标范围：[0,1]
    // 	---- 新坐标 = (旧坐标+1) / 2
    const texCoords = new Float32Array(areaIndices.length * 2)
    for (let i = 0; i < areaIndices.length; i++) {
      texCoords[i * 2] = (lines[areaIndices[i] * 2] + 1) / 2 // 将顶点坐标映射到 [0, 1] 范围
      texCoords[i * 2 + 1] = (lines[areaIndices[i] * 2 + 1] + 1) / 2
    }
    myGl.initShader(imgVertex, imgFragment)
    myGl.setAttribute({ data: triangles, size: 2, attrName: 'a_Position' })
    myGl.setAttribute({ data: texCoords, size: 2, attrName: 'a_TexCoord' })
    myGl.setTexture(img, 'u_Sampler0', 'TEXTURE0', 0)
    myGl.draw('TRIANGLES', triangles.length / 2)

    // 画有宽度的线段
    myGl.initShader(lineWidthVertex, lineWidthFragment)
    myGl.setAttribute({ data: new Float32Array(centers), size: 2, attrName: 'a_center' })
    myGl.setAttribute({ data: new Float32Array(prevPoints), size: 2, attrName: 'a_prev_point' })
    myGl.setAttribute({ data: new Float32Array(nextPoints), size: 2, attrName: 'a_next_point' })
    myGl.setAttribute({ data: new Float32Array(sides), size: 1, attrName: 'a_side' })
    myGl.setIndexBuffer(indices)
    myGl.setUniform('u_line_width', lw)
    myGl.draw('TRIANGLES', indices.length, true)

    // 画线段
    myGl.initShader(lineVertex, lineFragment)
    myGl.setAttribute({ data: lines, size: 2, attrName: 'a_Position' })
    myGl.draw('LINE_STRIP', lines.length / 2)
  }
}

const destroy = () => {
  cancelAnimationFrame(animationFrame)
  animationFrame = null
}

onUnmounted(() => {
  if (sceneResources) {
    sceneResources.gl && sceneResources.gl.getExtension("WEBGL_lose_context").loseContext()
  }
  destroy()
})
</script>