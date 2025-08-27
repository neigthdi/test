<template>
  <div>
    <div class="flex space-between">
      <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    </div>
    <canvas v-if="isRunning" id="lineWidthAndShadow" class="stage-webgl"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onUnmounted } from 'vue'

// gl.POINTS：绘制单个点。
// gl.LINES：绘制线段，每两个顶点构成一条线段。
// gl.LINE_LOOP：绘制线环，所有顶点依次连接成一个闭合的环。
// gl.LINE_STRIP：绘制线带，所有顶点依次连接成一条连续的线。
// gl.TRIANGLES：绘制三角形，每三个顶点构成一个三角形。
// gl.TRIANGLE_STRIP：绘制三角形带，每三个连续的顶点构成一个三角形。
// gl.TRIANGLE_FAN：绘制三角形扇，第一个顶点作为中心点，后续每两个顶点与中心点构成一个三角形。

// uv的垂直距离到当前线段的距离
const lineWidthVertex = `
  precision highp float;
  
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
    vColor = vec3(0.9, 0.0, 1.0);
    
    float len = u_line_width * 0.5;
    vec2 extrudedPosition;
    
    // 特殊情况处理：起点和终点
    if (distance(a_prev_point, a_center) < 0.00001) {
      
      // 起点 - 使用下一段的法线
      vec2 nextDir = normalize(a_center - a_next_point); // 注意：这两个※※※※这里是 a_center - a_next_point
      vec2 normal = calculateNormal(nextDir);
      extrudedPosition = a_center + normal * len * a_side;
      
    } else if (distance(a_center, a_next_point) < 0.00001) {
      
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
  precision highp float;
  
  uniform vec2 u_viewport;
  uniform vec2 u_points[6];
  uniform int u_points_len;
  
  varying vec3 vColor;
  
  void main() {
    vec3 finalColor = vColor;
    
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (fragCoord / u_viewport) * 2.0 - 1.0;
    
    
    float distanceCenterToLine = 1000000.0; // 初始化为一个很大的值
    // 定义线段的点
    vec2 points[7];
    points[0] = vec2(0.5, 0.5);
    points[1] = vec2(0.5, 0.0);
    points[2] = vec2(0.0, 0.0);
    points[3] = vec2(0.0, -0.5);
    points[4] = vec2(0.5, -0.5);
    points[5] = vec2(0.5, -0.25);
    points[6] = vec2(0.7, -0.35);
    // 遍历所有线段
    // 这个10不能设置得太高，在某些移动端 GPU 上无法正确执行
    for (int i = 0; i < 10; i++) {
      
      if (i >= u_points_len - 1) break;
      
      	vec2 p1 = points[i];
      	vec2 p2 = points[i + 1];
      // vec2 p1 = u_points[i];
      // vec2 p2 = u_points[i + 1];

      // 计算线段的方向向量 lineDir，即终点 p2 减去起点 p1。
      vec2 lineDir = p2 - p1;
      
      // 计算线段的长度 lineLength，即方向向量 lineDir 的长度。
      float lineLength = length(lineDir);
      // float lineLength = distance(p2, p1);
      
      // 将方向向量 lineDir 归一化，使其长度为 1。归一化后的方向向量可以用于后续的计算。
      lineDir /= lineLength;

      // 计算从线段起点 p1 到当前片段位置 uv 的向量 toFrag（碎片）。
      vec2 toFrag = uv - p1;
      
      // 计算向量 toFrag 在方向向量 lineDir 上的投影长度 projection。投影长度表示 uv 在线段方向上的位置。
      float projection = dot(toFrag, lineDir);
      
      // 计算当前片段 uv 在线段上的最近点 closestPoint。clamp(projection, 0.0, lineLength) 确保投影长度在 [0, 线段长度] 的范围内，避免超出线段范围。然后将投影长度乘以方向向量 lineDir，并加到起点 p1 上，得到最近点。
      vec2 closestPoint = p1 + lineDir * clamp(projection, 0.0, lineLength);
      
      // 计算当前片段 uv 到最近点 closestPoint 的距离 distance。
      float distance = length(uv - closestPoint);

      // 更新最小距离 distanceCenterToLine，取当前距离 distance 和之前计算的最小距离中的较小值。
      distanceCenterToLine = min(distanceCenterToLine, distance);
    }
    if (distanceCenterToLine < 0.04) {
      finalColor = vec3(0.0, 1.0, 0.0);
    }
    
    
    // 这个有瑕疵
    // float distanceCenterToLine = 0.0; // 初始化
    // float disA = distance(vPrev, vCenter);
    // float disB = distance(vCenter, vNext);
    // vec2 pointA = vec2(0.0);
    // vec2 pointB = vec2(0.0);
    // if (disA >= disB) {
    // 	pointA = vCenter;
    // 	pointB = vNext;
    // } else {
    // 	pointA = vPrev;
    // 	pointB = vCenter;
    // }
    // vec2 lineDir = normalize(pointA - pointB);
    // float distanceCenterToPoint = distance(pointA, uv);
    // float distanceProject = distanceCenterToPoint * dot(lineDir, normalize(pointA - uv));
    // distanceCenterToLine = pow(distanceCenterToPoint * distanceCenterToPoint - distanceProject * distanceProject, 0.5);
    // if (distanceCenterToLine > 0.02) {
    // 	finalColor = vec3(0.0, 1.0, 0.0);
    // }
    
  
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`

const lineVertex = `
	precision highp float;
	
	attribute vec2 a_Position;
	
	varying vec3 vColor;
	
	void main() {
		
		vColor = vec3(0.0, 0.0, 1.0);
		
		gl_Position = vec4(a_Position, 0.0, 1.0);
		gl_PointSize = 1.0;
	}
`

const lineFragment = `
	precision highp float;
	
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

  /**
   * 开启混合模式
   * 这里的混合模式是指：当两个图形重叠时，如何处理它们的颜色
   */
  runBlend() {
    // 即重合部分的，则会叠加颜色
    this.gl.enable(this.gl.BLEND)
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE)
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

  // gl.uniform1f 用于传递 float 类型
  // gl.uniform2f 用于传递 vec2 类型
  // gl.uniform3f / gl.uniform4f：分别传递 vec3 和 vec4 类型的数据
  // gl.uniform1fv（传递浮点数组）、gl.uniformMatrix4fv（传递 4x4 矩阵）
  setUniform1f(name, value) {
    const location = this.gl.getUniformLocation(this.gl.program, name)
    if (location) {
      this.gl.uniform1f(location, value)
    }
  }

  setUniform2f(name, value1, value2) {
    const location = this.gl.getUniformLocation(this.gl.program, name)
    if (location) {
      this.gl.uniform2f(location, value1, value2)
    }
  }

  setUniform1i(name, value) {
    const location = this.gl.getUniformLocation(this.gl.program, name)
    if (location) {
      this.gl.uniform1i(location, value)
    }
  }

  setUniform2fv(name, value) {
    const location = this.gl.getUniformLocation(this.gl.program, name)
    if (location) {
      if (Array.isArray(value[0])) { // 如果是数组的数组（如 vec2 数组）
        const flat = value.flat() // 需要浏览器支持 .flat()
        this.gl.uniform2fv(location, new Float32Array(flat))
      } else {
        this.gl.uniform2fv(location, value) // 假设是已扁平化的数组
      }
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
    { x: 0.5, y: 0.5 },
    { x: 0.5, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: -0.5 },
    { x: 0.5, y: -0.5 },
    { x: 0.5, y: -0.25 },
    { x: 0.7, y: -0.35 },
  ]

  let lw = 0.16
  let centers: any = []
  let prevPoints: any = []
  let nextPoints: any = []
  let sides: any = []
  let indices: any = []

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

  const ele: any = document.querySelector('#lineWidthAndShadow')
  const w = ele.clientWidth
  const h = ele.clientHeight

  const myGl = new Webgl('#lineWidthAndShadow', w, h)
  myGl.init()
  myGl.clear()

  myGl.initShader(lineWidthVertex, lineWidthFragment)
  myGl.setAttribute({ data: new Float32Array(centers), size: 2, attrName: 'a_center' })
  myGl.setAttribute({ data: new Float32Array(prevPoints), size: 2, attrName: 'a_prev_point' })
  myGl.setAttribute({ data: new Float32Array(nextPoints), size: 2, attrName: 'a_next_point' })
  myGl.setAttribute({ data: new Float32Array(sides), size: 1, attrName: 'a_side' })

  myGl.setUniform1i('u_points_len', points.length)
  myGl.setUniform1f('u_line_width', lw)
  myGl.setUniform2fv('u_viewport', [w, h])
  myGl.setUniform2fv('u_points', points.map(point => [point.x, point.y]))

  myGl.setIndexBuffer(indices)
  myGl.draw('TRIANGLES', indices.length, true)


  const tempLines: any = []
  points.forEach((v: any) => {
    tempLines.push(v.x)
    tempLines.push(v.y)
  })

  const lines = new Float32Array(tempLines)
  myGl.initShader(lineVertex, lineFragment)
  myGl.setAttribute({ data: lines, size: 2, attrName: 'a_Position' })
  myGl.draw('LINE_STRIP', lines.length / 2)
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