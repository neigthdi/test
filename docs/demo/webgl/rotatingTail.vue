<template>
  <canvas id="rotatingTail" class="stage"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, nextTick, onUnmounted } from 'vue'

let animationFrame 

const initScene = () => {
  const c = document.getElementById('rotatingTail') as HTMLCanvasElement
  const gl: any = c.getContext('webgl', {
      preserveDrawingBuffer: true
    })
  let width = c.width
  let height = c.height
  const webgl: any = {}

  webgl.vertexShaderSource = `
        attribute vec2 a_position;
        attribute vec2 a_color;
        uniform float u_tick;
        uniform vec2 u_resolution;
        varying vec2 v_color;

        void main(){

          gl_Position = vec4( vec2( 1, -1 ) * ( a_position / u_resolution ) * 2., 0, 1 );

          v_color = a_color;
          if( a_color.x > 0. )
            v_color = vec2( a_color.x + u_tick / 100., a_color.y );
        }
        `
  webgl.fragmentShaderSource = `
        precision mediump float;
        varying vec2 v_color;

        vec3 h2rgb( float h ){
          return clamp( abs( mod( h * 6. + vec3( 0, 4, 2 ), 6. ) - 3. ) -1., 0., 1. );
        }
        void main(){
          vec4 color = vec4( 0, 0, 0, v_color.y );
          if( v_color.x > 0. )
            color.rgb = h2rgb( v_color.x / 5.0 );

          gl_FragColor = color;
        }
        `

  webgl.vertexShader = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(webgl.vertexShader, webgl.vertexShaderSource)
  gl.compileShader(webgl.vertexShader)

  webgl.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(webgl.fragmentShader, webgl.fragmentShaderSource)
  gl.compileShader(webgl.fragmentShader)

  webgl.shaderProgram = gl.createProgram()
  gl.attachShader(webgl.shaderProgram, webgl.vertexShader)
  gl.attachShader(webgl.shaderProgram, webgl.fragmentShader)
  gl.linkProgram(webgl.shaderProgram)
  gl.useProgram(webgl.shaderProgram)
  webgl.attribLocs = {
    // 从之前创建的 GLSL 着色程序中找到这个属性值所在的位置a_position
    position: gl.getAttribLocation(webgl.shaderProgram, 'a_position'),
    color: gl.getAttribLocation(webgl.shaderProgram, 'a_color')
  }
  webgl.buffers = {
    position: gl.createBuffer(),
    color: gl.createBuffer()
  }
  webgl.uniformLocs = {
    tick: gl.getUniformLocation(webgl.shaderProgram, 'u_tick'),
    resolution: gl.getUniformLocation(webgl.shaderProgram, 'u_resolution')
  }

  // 需要告诉 WebGL 怎么从之前准备的缓冲中获取数据给着色器中的属性。
  // 1、首先需要启用对应属性
  gl.enableVertexAttribArray(webgl.attribLocs.position)
  gl.enableVertexAttribArray(webgl.attribLocs.color)
  // 2、指定从缓冲中读取数据的方式
  // gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, webgl.buffers.position)
  // 一个隐藏信息是 gl.vertexAttribPointer 是将属性绑定到当前的 ARRAY_BUFFER。
  // 换句话说就是属性绑定到了 positionBuffer 上。
  // 意味着现在利用绑定点将 ARRAY_BUFFER 绑定到其它数据上后，该属性依然从 positionBuffer 上读取数据。
  // gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

  // var positionAttributeLocation = webgl.attribLocs.position
  // var size = 2 每次迭代运行提取两个单位数据
  // var type = gl.FLOAT 每个单位的数据类型是32位浮点型
  // var normalize = false 不需要归一化数据
  // var stride = 0 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)），每次迭代运行运动多少内存到下一个数据开始点
  // var offset = 0 从缓冲起始位置开始读取
  gl.vertexAttribPointer(
    webgl.attribLocs.position,
    2,
    gl.FLOAT,
    false,
    0,
    0
  )

  gl.bindBuffer(gl.ARRAY_BUFFER, webgl.buffers.color)
  gl.vertexAttribPointer(webgl.attribLocs.color, 2, gl.FLOAT, false, 0, 0)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

  // 需要告诉 WebGL 怎样把提供的 gl_Position 裁剪空间坐标对应到画布像素坐标。
  // 通常也把画布像素坐标叫做屏幕空间。
  // 为了实现这个目的，只需要调用 gl.viewport 方法并传递画布的当前尺寸。
  gl.viewport(0, 0, width, height)
  // 设置全局变量 分辨率
  gl.uniform2f(webgl.uniformLocs.resolution, width, height)

  webgl.data = {
    position: [],
    color: []
  }

  webgl.draw = function (glType, glAmount) {
    // 绑定位置信息缓冲
    gl.bindBuffer(gl.ARRAY_BUFFER, webgl.buffers.position)
    // 通过绑定点向缓冲中存放数据
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(webgl.data.position),
      gl.STATIC_DRAW
    )

    gl.bindBuffer(gl.ARRAY_BUFFER, webgl.buffers.color)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(webgl.data.color),
      gl.STATIC_DRAW
    )

    // 绘制
    // var primitiveType = gl.TRIANGLES或者其他的gl形状;
    // var offset = 0;

    // var count = 3;
    // 因为 count = 3，所以顶点着色器将运行三次。
    // 第一次运行将会从位置缓冲中读取前两个值赋给属性值 a_position.x 和 a_position.y。
    // 第二次运行 a_position.xy 将会被赋予后两个值，最后一次运行将被赋予最后两个值。

    // var count = 6;
    // 显然需要告诉 WebGL 要运行六次顶点着色器来画两个三角形，所以将 count 改成 6。
    // 此时的各个顶点为var positions = [10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30]

    // gl.drawArrays(primitiveType, offset, count);

    gl.drawArrays(glType, 0, glAmount)
  }

  webgl.clear = function (z) {
    const a = width / 2,
      A = -a,
      b = height / 2,
      B = -b

    // 将位置信息转换为像素坐标，通过绘制两个三角形来绘制一个矩形，每个三角形有三个点
    webgl.data.position = [A, B, a, B, A, b, A, b, a, b, a, B]
    webgl.data.color = [-1, z, -1, z, -1, z, -1, z, -1, z, -1, z]

    webgl.draw(gl.TRIANGLES, 6)
    webgl.data.color.length = webgl.data.position.length = 0
  }

  const particles: any = []
  let tick = 0
  const opts = {
      baseW: 0.01,
      addedW: 0.03
    }

  function Particle(radius, radian) {
    this.radius = radius
    this.radian = radian + 6.2831853071
    this.x = this.radius * Math.cos(this.radian)
    this.y = this.radius * Math.sin(this.radian)
    this.w = opts.baseW + opts.addedW * Math.random()
    this.wcos = Math.cos(this.w)
    this.wsin = Math.sin(this.w)
  }
  Particle.prototype.step = function () {
    if (Math.random() < 0.1) {
      this.w += (Math.random() - 0.5) / 100000
      this.wcos = Math.cos(this.w)
      this.wsin = Math.sin(this.w)
    }

    const px = this.x,
      py = this.y,
      pr = this.radian

    this.x = this.x * this.wcos - this.y * this.wsin
    this.y = px * this.wsin + this.y * this.wcos

    this.radian += this.w

    webgl.data.position.push(px, py, this.x, this.y, 0, 0, this.x, this.y)
    webgl.data.color.push(
      pr,
      1,
      this.radian,
      1,
      this.radian,
      0.01,
      this.radian,
      0.04
    )
  }

  function anim() {
    animationFrame = requestAnimationFrame(anim)

    if (!animationFrame) return

    webgl.clear(0.1)

    if (particles.length < 1000) {
      for (let i = 0; i < 3; ++i) {
        particles.push(
          new Particle(
            Math.random() * Math.min(width, height),
            Math.random() * 6.283185307179586476925286766559
          )
        )
      }
    }

    particles.map(function (particle) {
      particle.step()
    })

    ++tick
    gl.uniform1f(webgl.uniformLocs.tick, tick)

    webgl.draw(gl.LINES, webgl.data.position.length / 2)
    webgl.data.position.length = 0
    webgl.data.color.length = 0
  }
  anim()

  return {
    gl
  }

}

let sceneResources

const destroy = () => {
  cancelAnimationFrame(animationFrame)
  animationFrame = null
}

onMounted(async ()=> {
  await nextTick()
  sceneResources = initScene()
})

onUnmounted(()=>{
  if (sceneResources) {
    sceneResources.gl && sceneResources.gl.getExtension("WEBGL_lose_context").loseContext();
  }
  destroy()
})
</script>

<style scoped>
canvas {
  background-color: #111;
}
</style>