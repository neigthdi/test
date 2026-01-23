
<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if="isRunning" id="mergeImage" class="stage-webgl"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onUnmounted } from 'vue'

let animationFrame
let sceneResources: any

const vertexSource = `
  precision mediump float;
  attribute vec4 a_Position;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;
  void main() {
    gl_Position = a_Position; // 顶点坐标
    v_TexCoord = a_TexCoord; // 纹理坐标系下的坐标
  }
`
const fragmentSource = `
  precision mediump float;
  uniform sampler2D u_Sampler0; // 纹理
  uniform sampler2D u_Sampler1; // 纹理
  varying vec2 v_TexCoord; // 纹理坐标系下的坐标
  void main() {
    vec4 color0 = texture2D(u_Sampler0, v_TexCoord);
    vec4 color1 = texture2D(u_Sampler1, v_TexCoord);
    gl_FragColor = color0 * color1; 
  }
`

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
  const canvas: any = document.getElementById('mergeImage')
  const gl = canvas.getContext('webgl')

  // 创建顶点着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  // 给顶点着色器赋值
  gl.shaderSource(vertexShader, vertexSource)
  // 编译顶点着色器
  gl.compileShader(vertexShader)

  // 创建片元着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  // 给片元着色器赋值
  gl.shaderSource(fragmentShader, fragmentSource)
  // 编译片元着色器
  gl.compileShader(fragmentShader)
  // 检测着色器创建是否正确
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(fragmentShader))
  }
  // 创建程序
  const program = gl.createProgram()
  // 给程序赋值
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  // 连接程序
  gl.linkProgram(program)
  // 使用此着色器
  gl.useProgram(program)


  // 变量的处理
  // 获取顶点着色器中的变量a_Position
  const a_Position = gl.getAttribLocation(program, 'a_Position')
  // 获取顶点着色器中的变量a_TexCoord
  const a_TexCoord = gl.getAttribLocation(program, 'a_TexCoord')
  // 获取片元着色器中的变量u_Sampler
  const u_Sampler0 = gl.getUniformLocation(program, 'u_Sampler0')
  // 获取片元着色器中的变量u_Sampler
  const u_Sampler1 = gl.getUniformLocation(program, 'u_Sampler1')
  // 顶点坐标与纹理坐标
  // -0.5, 0.5, 0.0, 1.0：
  // U坐标 -0.5 和 V坐标 0.5 表示这个顶点位于平面的左上角。纹理图像的左边缘（U=0）和上边缘（V=1）被映射到这里。
  // 最后两个数字 0.0 和 1.0 可能是用来表示颜色或者其他属性的，但在标准的UV坐标中，它们不是UV坐标的一部分。
  // -0.5, -0.5, 0.0, 0.0：
  // U坐标 -0.5 和 V坐标 -0.5 表示这个顶点位于平面的左下角。纹理图像的左边缘（U=0）和下边缘（V=0）被映射到这里。
  // 最后两个数字 0.0 和 0.0 同样表示额外的数据。
  // 0.5, 0.5, 1.0, 1.0：
  // U坐标 0.5 和 V坐标 0.5 表示这个顶点位于平面的右上角。纹理图像的右边缘（U=1）和上边缘（V=1）被映射到这里。
  // 最后两个数字 1.0 和 1.0 表示额外的数据。
  // 0.5, -0.5, 1.0, 0.0：
  // U坐标 0.5 和 V坐标 -0.5 表示这个顶点位于平面的右下角。纹理图像的右边缘（U=1）和下边缘（V=0）被映射到这里。
  // 最后两个数字 1.0 和 0.0 表示额外的数据。
  const vertexTexCoords = new Float32Array([
    -0.5, 0.5, 0.0, 1.0,
    -0.5, -0.5, 0.0, 0.0,
    0.5, 0.5, 1.0, 1.0,
    0.5, -0.5, 1.0, 0.0,
  ])
  const f32Seize = vertexTexCoords.BYTES_PER_ELEMENT
  // 给定点设置坐标 几何图形与纹理的坐标
  const vertexBuffer = gl.createBuffer()
  // 绑定buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
  // 绑定数据
  gl.bufferData(gl.ARRAY_BUFFER, vertexTexCoords, gl.STATIC_DRAW)
  // 给a_Position赋值
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, f32Seize * 4, 0)
  // 使用此变量
  gl.enableVertexAttribArray(a_Position)
  // 纹理坐标
  const texCoordBuffer = gl.createBuffer()
  // 绑定buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
  // 绑定数据
  gl.bufferData(gl.ARRAY_BUFFER, vertexTexCoords, gl.STATIC_DRAW)
  // 给a_TexCoord赋值
  gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, f32Seize * 4, f32Seize * 2)
  // 使用此变量
  gl.enableVertexAttribArray(a_TexCoord)

  gl.clearColor(0, 0, 0, 1.0)
  // 获取图片的素材  
  getImage('/images/mergeImage1.jpg', u_Sampler0, gl.TEXTURE0, 0)
  getImage('/images/mergeImage2.jpg', u_Sampler1, gl.TEXTURE1, 1)

  function getImage(imgYrl, u_Sampler, TEXTURE, num) {
    // 文件里的文本会在这里被打印出来 
    const img = new Image()
    img.src = imgYrl
    img.crossOrigin = ''
    img.onload = () => {
      const texture = gl.createTexture()
      showImage(texture, img, u_Sampler, TEXTURE, num)
    }
  }

  function showImage(texture, img, u_Sampler, TEXTURE, texUnit) {
    // document.body.appendChild(img)
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
    // 开始0号纹理通道
    gl.activeTexture(TEXTURE)
    // 想目标绑定纹理对象
    gl.bindTexture(gl.TEXTURE_2D, texture)
    // 配置纹理的参数
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT)
    // 设置着色器参数
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img)
    // 设置纹理数据
    gl.uniform1i(u_Sampler, texUnit)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
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