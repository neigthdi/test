<template>
  <canvas id="pointsWave" class="stage"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, nextTick, onUnmounted } from 'vue'

let animationFrame 

const initScene = () => {
  let canvas = document.getElementById('pointsWave') as any
  let gl: any = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  let w = canvas.width
  let h = canvas.height
  let num = 100
  initWebGl()
  window.addEventListener('resize', function () {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  })
  // attribute声明vec4类型变量a_Position
  // precision mediump float; 表示片元着色器中所有浮点型精度为中精度
  // uniform vec4类型的color变量,并设置为片元着色器的输出
  function initWebGl() {
    let vs_source = `
    attribute vec4 a_Position;
      void main() {
        gl_Position = a_Position;
        gl_PointSize = 3.0;
      }
    `
    // 绘制圆
    // 距离大于0.5都舍去
    let fs_source = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    uniform vec4 color;
      void main() {
        float d = distance(gl_PointCoord, vec2(0.5, 0.5));
        if(d<0.5){
          gl_FragColor = vec4(0.2, 0.3, 0.5, 1.0);
        }else{
          discard;
        }
      }
    `
    // 创建顶点着色器
    let sShader = gl.createShader(gl.VERTEX_SHADER)
    // 创建片段着色器
    let fShader = gl.createShader(gl.FRAGMENT_SHADER)
    // 创建一个着色器程序
    let glprogam = gl.createProgram()

    // 绑定资源
    gl.shaderSource(sShader, vs_source)
    gl.shaderSource(fShader, fs_source)

    // 编译着色器
    gl.compileShader(sShader)
    gl.compileShader(fShader)
    gl.attachShader(glprogam, sShader) // 把顶点着色器添加到着色器程序
    gl.attachShader(glprogam, fShader) // 把片元着色器添加到着色器程序

    // 链接程序，在链接操作执行以后，可以任意修改 shader 的源代码，对 shader 重新编译
    // 不会影响整个程序，除非重新链接程序
    gl.linkProgram(glprogam)

    // 加载并使用链接好的程序
    gl.useProgram(glprogam)
    gl.program = glprogam

    render()
  }

  function render() {
    animationFrame = requestAnimationFrame(render)

    if (!animationFrame) return


    num = num - 2
    let pointdata = createPointData()
    setPointType(pointdata.data, pointdata.nums)
  }

  function createPointData() {
    let max = 10
    let number = 100
    let tier = 10
    let arr = []
    let degs = function (deg) {
      return (Math.PI * deg) / 180
    }
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < tier; j++) {
        let gap = i * 7 - j * 20 + num
        let x = webX(-(w / 2) - 280 + i * ((w + 300) / number) + j * 20)
        let y = webY(
          -(h / 2) + Math.sin(degs(gap)) * (max + j * 10) + j * 20
        )
        let z = -1
        let arrtwo: any = [x, y, z]
        arr = arr.concat(arrtwo)
      }
    }
    return {
      data: new Float32Array(arr),
      nums: number * tier
    }
  }

  function setPointType(data, num) {
    // 1.创建缓冲区对象
    let buffer = gl.createBuffer()
    if (!buffer) {
      console.log('缓冲区创建失败')
      return -1
    }

    // 2.绑定缓冲区对象
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

    // 3.向缓冲区对象中写入数据
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)

    // 4.获取存储位置变量
    let aPosition = gl.getAttribLocation(gl.program, 'a_Position')

    // 5.把缓冲区对象分配给a_Position变量
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0)

    // 连接缓冲区对象和a_Position 变量
    gl.enableVertexAttribArray(aPosition)

    //用設置的顔色清空畫布
    gl.clearColor(0.1, 0.7, 0.8, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)

    //繪製畫布内容
    gl.drawArrays(gl.POINTS, 0, num)
  }

  //X軸
  function webX(n) {
    return n / (w / 2)
  }

  //Y軸
  function webY(n) {
    return n / (h / 2)
  }

  return {
    gl
  }
}

let sceneResources

const destroy = () => {
  cancelAnimationFrame(animationFrame)
  animationFrame = null
}

onMounted(async () => {
  await nextTick()
  sceneResources = initScene()
})

onUnmounted(() => {
  if (sceneResources) {
    sceneResources.gl && sceneResources.gl.getExtension("WEBGL_lose_context").loseContext()
  }
  destroy()
})
</script>