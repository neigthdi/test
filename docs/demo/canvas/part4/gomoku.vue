<template>
  <div>
    <div @click='onTrigger' class='pointer'>点击{{ !isRunning ? '运行' : '关闭' }}</div>
    <canvas v-if='isRunning' id='gomoku' class='stage'></canvas>
  </div>
</template>

<script lang='ts' setup>
import { ref, onUnmounted, nextTick } from 'vue'

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

const onRunning = () => {
  let over = false
  let me = true // 我

  let chessBoard: any = [] // 棋盘
  for (let i = 0; i < 15; i++) {
    chessBoard[i] = []
    for (let j = 0; j < 15; j++) {
      chessBoard[i][j] = 0
    }
  }

  // 赢法的统计数组
  let myWin: any = []
  let computerWin: any = []

  // 赢法数组
  let wins: any = []
  for (let i = 0; i < 15; i++) {
    wins[i] = []
    for (let j = 0; j < 15; j++) {
      wins[i][j] = []
    }
  }

  let count = 0 // 赢法总数
  // 横线赢法
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      for (let k = 0; k < 5; k++) {
        wins[i][j + k][count] = true
      }
      count++
    }
  }

  // 竖线赢法
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      for (let k = 0; k < 5; k++) {
        wins[j + k][i][count] = true
      }
      count++
    }
  }

  // 正斜线赢法
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      for (let k = 0; k < 5; k++) {
        wins[i + k][j + k][count] = true
      }
      count++
    }
  }

  // 反斜线赢法
  for (let i = 0; i < 11; i++) {
    for (let j = 14; j > 3; j--) {
      for (let k = 0; k < 5; k++) {
        wins[i + k][j - k][count] = true
      }
      count++
    }
  }

  for (let i = 0; i < count; i++) {
    myWin[i] = 0
    computerWin[i] = 0
  }

  let chess: any = document.getElementById('gomoku')
  const width = Number(window.getComputedStyle(chess).width.split('px')[0])
  const height = Number(window.getComputedStyle(chess).height.split('px')[0])
  chess.width = width
  chess.height = height
  let context = chess.getContext('2d');
  context.strokeStyle = '#bfbfbf' // 边框颜色

  let logo = new Image();
  logo.src = '/images/wood.jpg'
  logo.onload = function() {
    context.drawImage(logo, 0, 0, width, height)
    drawChessBoard()
  }

  chess.onclick = function(e) {
    if (over) {
      return
    }
    if (!me) {
      return
    }
    let x = e.offsetX
    let y = e.offsetY
    let i = Math.floor(x / 30)
    let j = Math.floor(y / 30)
    if (chessBoard[i][j] == 0) {
      oneStep(i, j, me)
      chessBoard[i][j] = 1 // 我        

      for (let k = 0; k < count; k++) {
        if (wins[i][j][k]) {
          myWin[k]++
          computerWin[k] = 6 // 这个位置对方不可能赢了
          if (myWin[k] == 5) {
            window.alert('你赢了')
            over = true
          }
        }
      }
      if (!over) {
        me = !me
        computerAI()
      }
    }

  }
  // 计算机下棋
  let computerAI = function() {
    let myScore: any = []
    let computerScore: any = []
    let max = 0, u = 0, v = 0;
    for (let i = 0; i < 15; i++) {
      myScore[i] = []
      computerScore[i] = []
      for (let j = 0; j < 15; j++) {
        myScore[i][j] = 0
        computerScore[i][j] = 0
      }
    }
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        if (chessBoard[i][j] == 0) {
          for (let k = 0; k < count; k++) {
            if (wins[i][j][k]) {
              if (myWin[k] == 1) {
                myScore[i][j] += 200;
              } else if (myWin[k] == 2) {
                myScore[i][j] += 400;
              } else if (myWin[k] == 3) {
                myScore[i][j] += 2000;
              } else if (myWin[k] == 4) {
                myScore[i][j] += 10000;
              }

              if (computerWin[k] == 1) {
                computerScore[i][j] += 220;
              } else if (computerWin[k] == 2) {
                computerScore[i][j] += 420;
              } else if (computerWin[k] == 3) {
                computerScore[i][j] += 2100;
              } else if (computerWin[k] == 4) {
                computerScore[i][j] += 20000;
              }
            }
          }

          if (myScore[i][j] > max) {
            max = myScore[i][j];
            u = i;
            v = j;
          } else if (myScore[i][j] == max) {
            if (computerScore[i][j] > computerScore[u][v]) {
              u = i;
              v = j;
            }
          }

          if (computerScore[i][j] > max) {
            max = computerScore[i][j];
            u = i;
            v = j;
          } else if (computerScore[i][j] == max) {
            if (myScore[i][j] > myScore[u][v]) {
              u = i;
              v = j;
            }
          }

        }
      }
    }
    oneStep(u, v, false);
    chessBoard[u][v] = 2;
    for (let k = 0; k < count; k++) {
      if (wins[u][v][k]) {
        computerWin[k]++;
        myWin[k] = 6; // 这个位置对方不可能赢了
        if (computerWin[k] == 5) {
          window.alert('计算机赢了');
          over = true;
        }
      }
    }
    if (!over) {
      me = !me;
    }
  }

  // 绘画棋盘
  let drawChessBoard = function() {
    for (let i = 0; i < 21; i++) {
      context.moveTo(15 + i * 30, 15);
      context.lineTo(15 + i * 30, 345);
      context.stroke();
    }

    for (let i = 0; i < 12; i++) {
      context.moveTo(15, 15 + i * 30);
      context.lineTo(616, 15 + i * 30);
      context.stroke();
    }
  }

  // 画棋子
  let oneStep = function(i, j, me) {
    context.beginPath();
    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI); // 画圆
    context.closePath();
    // 渐变
    let gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j *
      30 - 2, 0);

    if (me) {
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(1, '#636766');
    } else {
      gradient.addColorStop(0, '#d1d1d1');
      gradient.addColorStop(1, '#f9f9f9');
    }
    context.fillStyle = gradient;
    context.fill();
  }
}

const destroy = () => {

}

onUnmounted(() => {
  destroy()
})
</script>