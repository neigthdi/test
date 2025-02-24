<template>
  <div>
    <div @click="onTrigger" class="pointer">点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <div id="aStartRandomMazeBox">
      <canvas v-if="isRunning" id="aStartRandomMaze" class="stage"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'

const requestID = ref<any>()
const isRunning = ref(false)
const eventListeners = ref<any>([])


const onTrigger = async () => {
  if (!isRunning.value) {
    eventListeners.value = []
    isRunning.value = true
    await nextTick()
    onRunning()
  } else {
    isRunning.value = false
    destroy()
    eventListeners.value = []
  }
}




const onRunning = async() => {
  await nextTick()
  const canvas: any = document.getElementById('aStartRandomMaze')
  const ctx = canvas.getContext('2d')

  const width = Number(window.getComputedStyle(canvas).width.split('px')[0])
  const height = Number(window.getComputedStyle(canvas).height.split('px')[0])
  canvas.width = width
  canvas.height = height

  const row = 19
  const col = 35
  const size = 9
  
  // 取区域随机数 x>=min && x<max
  const randInt = (min, max) => {
    const _max = max || 0
    const _min = min || 0

    // 计算范围的绝对值
    const step = Math.abs(_max - _min) 

    // 如果只有一个参数，st = 0
    const st = (max === undefined) ? 0 : _min 

    // 生成随机整数
    const result = st + (Math.ceil(Math.random() * step)) - 1 
    return result
  }

  // 普里姆算法生成连通图的二维数组 row 行 column 列
  const primMaze = (c, r) => {
    const init = (c, r) => {
      const tempArr = new Array(2 * r + 1)
      // 全部置1
      for (let i = 0; i < tempArr.length; i++) {
        const cols = 2 * c + 1
        tempArr[i] = new Array(cols).fill(1)
      }

      // 中间格子置0
      // 在迷宫生成算法中，1 表示墙，0 表示通道
      // 这种初始化方式可以创建一个“棋盘格”式的迷宫框架，其中每隔一个单元格是一个通道（0），其余部分是墙（1）
      // 这种结构为后续的迷宫生成算法（如深度优先搜索或Prim算法）提供了一个基础框架
      for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
          tempArr[2 * i + 1][2 * j + 1] = 0
        }
      }

      return tempArr
    }

    const process = (arr) => {
      // acc存放已访问队列
      const acc: any = []
      // noAcc存放没有访问队列
      const noAcc: any = []

      // 迷宫的实际行数和列数
      // arr.length 右移一位，相当于整除 2
      // 位运算 >> 是一种高效的整数除法操作，特别适合除以 2 的幂
      // 在这个场景中，使用 >> 1 比使用传统的除法操作（如 / 2）更高效，且结果是整数
      const r = arr.length >> 1
      const c = arr[0].length >> 1

      // 单元格总数
      const total = r * c

      for (let i = 0; i < total; i++) {
        // 初始化未访问队列
        noAcc[i] = 0
      }

      // 表示上下左右四个方向在 《一维数组》 中的偏移量，用于在 《一维数组》 中快速找到相邻单元格的位置
      const offs = [-c, c, -1, 1]
      // 表示上下左右四个方向在 《二维数组》 中的行偏移量，用于在 《二维数组》 中计算相邻单元格的行列坐标
      const offR = [-1, 1, 0, 0]
      // 表示上下左右四个方向在 《二维数组》 中的列偏移量， 用于在 《二维数组》 中计算相邻单元格的行列坐标
      const offC = [0, 0, -1, 1]

      // 随机从noAcc取出一个位置
      let pos = randInt(total, undefined)
      // 标记为已访问
      noAcc[pos] = 
      // 将起始点加入已访问队列
      acc.push(pos)

      while (acc.length < total) {
        // 初始化变量
        let ls = -1
        let	offPos = -1
        // 找出pos位置在二维数组中的坐标
        let pr = pos / c | 0 // 当前行
        let	pc = pos % c// 当前列
        let	co = 0
        let	o = 0
        // 随机取上下左右四个单元
        while (++co < 5) {
          o = randInt(0, 5)
          ls = offs[o] + pos
          var tpr = pr + offR[o]
          var tpc = pc + offC[o]
          if (tpr >= 0 && tpc >= 0 && tpr <= r - 1 && tpc <= c - 1 && noAcc[ls] == 0) {
            offPos = o
            break
          }
        }
        if (offPos < 0) {
          pos = acc[randInt(acc.length, undefined)]
        } else {
          pr = 2 * pr + 1
          pc = 2 * pc + 1
          // 相邻空单元中间的位置置0
          arr[pr + offR[offPos]][pc + offC[offPos]] = 0
          pos = ls
          noAcc[pos] = 1
          acc.push(pos)
        }
      }
    }

    let a = init(c, r)
    process(a)

    // 返回一个二维数组，行的数据为2r+1个,列的数据为2c+1个
    return a
  }

  // 栅格线条
  const drawGrid = (context, color, stepX, stepY) =>{
    context.strokeStyle = color
    context.lineWidth = 0.5

    for (let i = stepX + 0.5; i < context.canvas.width; i += stepX) {
      context.beginPath()
      context.moveTo(i, 0)
      context.lineTo(i, context.canvas.height)
      context.stroke()
    }
    for (let i = stepY + 0.5; i < context.canvas.height; i += stepY) {
      context.beginPath()
      context.moveTo(0, i)
      context.lineTo(context.canvas.width, i)
      context.stroke()
    }
  }

  // 方块创造方法
  const createRect = (x, y, r, c) => {
    ctx.beginPath()
    ctx.fillStyle = c
    ctx.rect(x, y, r, r)
    ctx.fill()
  }

  // 定义点对象【a*点对象】
  function Point(x, y) {
    this.x = x
    this.y = y
    this.parent = null
    this.f = 0
    this.g = 0
    this.h = 0
    //当前点状态，0：表示在openlist 1:表示closelist,-1表示还没处理
    this.state = -1
    //flag表明该点是否可通过
    this.flag = 0
  }

  // 把普通二维数组(全部由1，0表示)的转换成a*所需要的点数组
  function convertArrToAS (arr) {
    const r = arr.length
    const c = arr[0].length
    const a = new Array(r)
    for (let i = 0; i < r; i++) {
      a[i] = new Array(c)
      for (let j = 0; j < c; j++) {
        const pos = new Point(i, j)
        pos.flag = arr[i][j]
        a[i][j] = pos
      }
    }
    return a
  }

  // A*算法，pathArr表示最后返回的路径
  function findPathA (pathArr, start, end, row, col) {
    // 添加数据到排序数组中
    function addArrSort (descSortedArr, element, compare) {
      let left = 0
      let right = descSortedArr.length - 1
      let mid = (left + right) >> 1
      while (left <= right) {
        mid = (left + right) >> 1
        if (compare(descSortedArr[mid], element) === 1) {
          left = mid + 1
        } else if (compare(descSortedArr[mid], element) == -1) {
          right = mid - 1
        } else {
          break
        }
      }
      for (let i = descSortedArr.length - 1; i >= left; i--) {
        descSortedArr[i + 1] = descSortedArr[i]
      }
      descSortedArr[left] = element
    }

    // 判断两个点是否相同
    function pEqual (p1, p2) {
      return p1.x == p2.x && p1.y == p2.y
    }

    // 获取两个点距离，采用曼哈顿方法
    function posDist (pos, pos1) {
      return (Math.abs(pos1.x - pos.x) + Math.abs(pos1.y - pos.y))
    }

    function between (val, min, max) {
      return (val >= min && val <= max)
    }

    // 比较两个点f值大小
    function compPointF (pt1, pt2) {
      return pt1.f - pt2.f
    }

    // 处理当前节点
    function processCurPoint (arr, openList, row, col, currPoint, destPoint) {
      // 获取上下左右
      const ltx = currPoint.x - 1
      const lty = currPoint.y - 1
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const cx = ltx + i
          const cy = lty + j
          if ((cx === currPoint.x || cy === currPoint.y) && between(ltx, 0, row - 1) && between(lty, 0, col - 1)) {
            const tp = arr[cx][cy]
            if (tp.flag === 0 && tp.state !== 1) {
              if (pEqual(tp, destPoint)) {
                tp.parent = currPoint
                return true
              }
              if (tp.state === -1) {
                tp.parent = currPoint
                tp.g = 1 + currPoint.g
                tp.h = posDist(tp, destPoint)
                tp.f = tp.h + tp.f
                tp.state = 0
                addArrSort(openList, tp, compPointF)
              } else {
                const g = 1 + currPoint.g
                if (g < tp.g) {
                  tp.parent = currPoint
                  tp.g = g
                  tp.f = tp.g + tp.h
                  openList.quickSort(compPointF)
                }
              }
            }
          }
        }
      }
      return false
    }

    // 定义openList
    const openList = []
    // 定义closeList
    const closeList: any = []
    start = pathArr[start[0]][start[1]]
    end = pathArr[end[0]][end[1]]
    // 添加开始节点到openList
    addArrSort(openList, start, compPointF)
    let finish = false
    while ((openList.length > 0)) {
      const currPoint: any = openList.pop()
      currPoint.state = 1
      closeList.push(currPoint)
      finish = processCurPoint(pathArr, openList, row, col, currPoint, end)
      if (finish) {
        break
      }
    }
    if (finish) {
      const farR: any = []
      var tp = end.parent
      farR.push(end)
      while (tp != null) {
        farR.push(tp)
        tp = tp.parent
      }
      return farR
    } else {
      return null
    }
  }

  // 定位屏幕坐标到数组位置
  function mapSCPos(i, j) {
    return [i / size | 0, j / size | 0]
  }

  // 检测数组中的位置是否存在方块
  function mapHasRect(map, i, j) {
    return (map[i][j])
  }


  // 迷宫
  const mapArr = primMaze(col, row)

  const startRect = {
    x: function() {
      for (var i = 0, len = mapArr.length; i < len; i++) {
        for (var j = 0, len1 = mapArr[i].length; j < len1; j++) {
          if (!mapArr[i][j]) {
            return j * size
          }
        }
      }
    }(),
    y: function() {
      for (var i = 0, len = mapArr.length; i < len; i++) {
        for (var j = 0, len1 = mapArr[i].length; j < len1; j++) {
          if (!mapArr[i][j]) {
            return i * size
          }
        }
      }
    }(),
    pos: function() {
      return [this.x, this.y]
    }
  }
  const	endRect: any = {
    hasCreate: false,
    x: null,
    y: null,
    pos: function() {
      return [this.x, this.y]
    }
  }
  let startPoint = mapSCPos(startRect.pos()[1], startRect.pos()[0])
  let endPoint
  let path: any = null
  let next: any = null

  
  const mouseClick = (event) => {
    // 标准的获取鼠标点击相对于canvas画布的坐标公式
    const x = event.offsetX
    const y = event.offsetY
    var endRectPos = mapSCPos(y, x) // [i, j]
    endRect.x = endRectPos[1] * size
    endRect.y = endRectPos[0] * size
    if (mapHasRect(mapArr, endRectPos[0], endRectPos[1])) {
      console.log('这个位置已经有方块啦！')
    } else {
      endRect.pos()
      endRect.hasCreate = true
    }
    console.log(endRect.hasCreate)
  }

  eventListeners.value.push(mouseClick)
  const parent = document.getElementById('aStartRandomMazeBox') as any
  parent.addEventListener('click', mouseClick)


  const runAnimate = () => {
    ctx.clearRect(0, 0, width, height)
    requestID.value = requestAnimationFrame(runAnimate)

    drawGrid(ctx, 'lightgray', size, size)

    // 根据地图二维数组创建色块
    for (let i = 0, len = mapArr.length; i < len; i++) {
      for (let j = 0, len1 = mapArr[i].length; j < len1; j++) {
        if (mapArr[i][j]) {
          createRect(j * size, i * size, size, '#fd8e00')
        }
      }
    }

    // 绘制开始方块
    createRect(startRect.x, startRect.y, size, 'red')

    if (endRect.hasCreate) {
      // 绘制跟随方块
      createRect(endRect.pos()[0], endRect.pos()[1], size, 'blue')
      endPoint = mapSCPos(endRect.pos()[1], endRect.pos()[0])
      if (path === null) {
        const ASmap = convertArrToAS(mapArr)
        path = findPathA(ASmap, startPoint, endPoint, ASmap.length, ASmap[0].length)
      } else {
        next = path.pop()
        startRect.y = next.x * size
        startRect.x = next.y * size
        if (path.length === 0) {
          startPoint = mapSCPos(startRect.pos()[1], startRect.pos()[0])
          path = null
          endRect.hasCreate = false
        }
      }
    }
  }
  runAnimate()
}


const destroy = () => {
  cancelAnimationFrame(requestID.value)
  const parent = document.getElementById('aStartRandomMazeBox') as any
  if(parent) {
    eventListeners.value.forEach(listener => {
      parent.removeEventListener('click', listener)
    })
  }
}

onUnmounted(() => {
  destroy()
})

// 迷宫的二维结构与一维表示
// 假设我们有一个迷宫，其二维结构如下：
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// 这是一个 5×5 的迷宫，其中每个格子可以用二维坐标 (row, col) 表示。例如，左上角的格子是 (0, 0)，右下角的格子是 (4, 4)。
// 为了简化计算，我们还可以用一维数组来表示迷宫的格子。假设迷宫的格子用一维数组表示如下：
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
// 其中，每个数字对应一个格子的位置。例如，0 表示 (0, 0)，5 表示 (1, 0)，24 表示 (4, 4)。
// 偏移量的设置
// 偏移量的目的是帮助我们从当前格子快速找到它的上下左右相邻格子。在代码中，偏移量定义如下：
// var offs = [-c, c, -1, 1];    // 一维数组中的偏移量
// var offR = [-1, 1, 0, 0];     // 二维数组中的行偏移量
// var offC = [0, 0, -1, 1];     // 二维数组中的列偏移量
// 1. 一维偏移量 offs
// 在一维数组中，相邻格子的位置可以通过偏移量快速计算：
// ·向上：当前格子的索引减去 c（列数）。
// ·向下：当前格子的索引加上 c。
// ·向左：当前格子的索引减去 1。
// ·向右：当前格子的索引加上 1。
// 例如，假设当前格子是 (1, 1)，在一维数组中的索引是 6（假设 c = 5）：
// ·向上：6 - 5 = 1（索引为 1，对应 (0, 1)）。
// ·向下：6 + 5 = 11（索引为 11，对应 (2, 1)）。
// ·向左：6 - 1 = 5（索引为 5，对应 (1, 0)）。
// ·向右：6 + 1 = 7（索引为 7，对应 (1, 2)）。
// 2. 二维偏移量 offR 和 offC
// 在二维数组中，相邻格子的行和列坐标可以通过偏移量计算：
// ·向上：行坐标减去 1，列坐标不变。
// ·向下：行坐标加上 1，列坐标不变。
// ·向左：行坐标不变，列坐标减去 1。
// ·向右：行坐标不变，列坐标加上 1。
// 例如，当前格子是 (1, 1)：
// ·向上：(1 - 1, 1) = (0, 1)。
// ·向下：(1 + 1, 1) = (2, 1)。
// ·向左：(1, 1 - 1) = (1, 0)。
// ·向右：(1, 1 + 1) = (1, 2)。
// 图解
// 假设当前格子是 (1, 1)，其一维索引为 6，迷宫如下：
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// |   | X |   |   |   |   <- 当前格子 (1, 1)
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+
// 通过偏移量，我们可以找到相邻格子：
// ·向上：(0, 1)，一维索引为 6 - 5 = 1。
// ·向下：(2, 1)，一维索引为 6 + 5 = 11。
// ·向左：(1, 0)，一维索引为 6 - 1 = 5。
// ·向右：(1, 2)，一维索引为 6 + 1 = 7。
// 总结
//   偏移量的设置是为了：
//   1、快速计算相邻格子的索引：在一维数组中，通过 offs 可以直接找到相邻格子的位置。
//   2、快速计算相邻格子的坐标：在二维数组中，通过 offR 和 offC 可以快速计算相邻格子的行和列坐标。
//   3、简化逻辑：通过统一的偏移量数组，可以方便地处理上下左右四个方向的移动，避免重复代码。
//   这种设计使得迷宫生成算法能够高效地随机选择相邻格子，从而生成复杂的迷宫结构。
</script>