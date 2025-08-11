复数乘法
```javascript
(a+bi)×(c+di) = ac + adi + bci + bdi^2
进一步化简，考虑到i^2 = -1，得到：
ac + adi + bci - bd = (ac - bd) + (ad + bc)i
```
## 取W的原理
```javascript
/**
 * w的取值计算
 * W_N_k 中，k 的取值是： J * 2^(M - L)【M 是log2*(8) = 3、L 是从1开始的第几轮、J 是每块大小中从0开始循环的值】
 */
```
![image](./img/fft-0.png)
![image](./img/fft-1.png)
![image](./img/fft-2.png)
![image](./img/fft-3.png)
![image](./img/fft-4.png)
![image](./img/fft-5.png)
![image](./img/fft-6.png)
![image](./img/fft-7.png)

## Stockham FFT
以8*8为例子
![image](./img/fft-stockham.png)

```javascript
/** 
  W_8_0 = 1 + 0i
  W_8_1 = 0.7071 - 0.7071i
  W_8_2 = 0 - i
  W_8_3 = -0.7071 - 0.7071i
*/

/**
  是每一次的输出，都是下一次的输入。
*/

/**
  第一轮 ☆☆☆☆☆☆☆☆
  输入：[0, 1, 2, 3, 4, 5, 6, 7]

  W_8_0 = 1

  [
    0 + (4 * 1 + 4 * 0i),  => 4
    0 - (4 * 1 + 4 * 0i),  => -4
    1 + (5 * 1 + 5 * 0i),  => 6
    1 - (5 * 1 + 5 * 0i),  => -4
    2 + (6 * 1 + 6 * 0i),  => 8
    2 - (6 * 1 + 6 * 0i),  => -4
    3 + (7 * 1 + 7 * 0i),  => 10
    3 - (7 * 1 + 7 * 0i),  => -4
  ]

  输出：[4, -4, 6, -4, 8, -4, 10, -4]

  ---------------------------------------------------------

  第二轮 ☆☆☆☆☆☆☆☆
  输入：[4, -4, 6, -4, 8, -4, 10, -4]

  W_8_0 = 1 + 0i
  W_8_2 = 0 - i

  [
    4 + (8 * 1 + 8 * 0i),      => 12
    -4 + (-4 * 0 + -4 * (-i))   => -4 + 4i
    4 - (8 * 1 + 8 * 0i),      => -4
    -4 - (-4 * 0 + -4 * (-i))   => -4 - 4i
    6 + (10 * 1 + 10 * 0i)      => 16
    -4 + (-4 * 0 + -4 * (-i))   => -4 + 4i
    6 - (10 * 1 + 10 * 0i)      => -4
    -4 - (-4 * 0 + -4 * (-i))   => -4 - 4i
  ]

  输出：[12, -4 + 4i, -4, -4 - 4i, 16, -4 + 4i, -4 -4 - 4i]

  ---------------------------------------------------------

  第三轮 ☆☆☆☆☆☆☆☆
  输入：[12, -4 + 4i, -4, -4 - 4i, 16, -4 + 4i, -4, -4 - 4i]

  W_8_0 = 1 + 0i
  W_8_1 = 0.7071 - 0.7071i
  W_8_2 = 0 - i
  W_8_3 = -0.7071 - 0.7071i

  [
  0、  12 + (16 * 1 + 16 * 0i)
      = 28 + 0i

  1、  -4 + 4i + ((-4 + 4i) * 0.7071 + (-4 + 4i) * -0.7071i)
      = -4 + 4i -2.8284 + 2.8284i + 2.8284i + 2.8284
      = -4 + 9.6568i

  2、  -4 + ((-4) * 0 + (-4) * -i)
      = -4 + 4i

  3、  -4 - 4i + ((-4 - 4i) * -0.7071 + (-4 - 4i) * - 0.7071i)
      = -4 - 4i + 2.8284 + 2.8284i + 2.8284i - 2.8284
      = -4 + 1.6568i

  4、  12 - (16 * 1 + 16 * 0i)
      = -4 + 0i
      
  5、 -4 + 4i - ((-4 + 4i) * 0.7071 + (-4 + 4i) * -0.7071i)
      = -4 + 4i + 2.8284 - 2.8284i -2.8284i - 2.8284
      = -4 - 1.6568i

  6、 -4 - ((-4) * 0 + (-4) * -i)
      = -4 - 4i

  7、 -4 - 4i - ((-4 - 4i) * -0.7071 + (-4 - 4i) * - 0.7071i)
      = -4 - 4i - (2.8284 + 2.8284i + 2.8284i - 2.8284)
      = -4 - 4i - 5.6568i
      = -4 - 9.6568i
  ]

  输出：[
    28 + 0i,
    -4 + 9.6568i,
    -4 + 4i,
    -4 + 1.6568i,
    -4 + 0i,
    -4 - 1.6568i,
    -4 - 4i,
    -4 - 9.6568i
  ]

  至此，和下面的 python 运算结果一致。
*/
```
```javascript
// http://www.fun-ai.org.cn/scratch/python/
import numpy as np
x = np.array([0, 1, 2, 3, 4, 5, 6, 7], dtype=np.complex128)  # 显式使用复数类型
theoretical_result = np.fft.fft(x)
print("Theoretical FFT:", theoretical_result)

// Theoretical FFT: [
//   28.+0.j, 
//   -4.+9.65685425j,
//   -4.+4.j, 
//   -4.+1.65685425j,
//   -4.+0.j,
//   -4.-1.65685425j,
//   -4.-4.j,
//   -4.-9.65685425j
//   ]
```
### 输出的下标
每一轮中，循环的次数都是4（即n*k=4）。   
输出下标的公式是：
 - (x - u) * 2 + u
 - x 是第几个蝶形变换，x ∈ 0，1，2，3。
 - u 是 x mod 2^m ， m ∈ 0，1，2
 - 这个算法为什么这样，看 https://zhuanlan.zhihu.com/p/208511211 【详尽的快速傅里叶变换推导】

 - 第一轮
   - m=0、n=4、k=1
     - n=4 是因为 blockNum=4
     - k=1 是因为 blockSize=2，所以 k=blockSize/2=1
 
 - 第二轮
   - m=1、n=2、k=2
     - n=2 是因为 blockNum=2
     - k=2 是因为 blockSize=4，所以 k=blockSize/2=2

- 第三轮
   - m=2、n=1、k=4
     - n=1 是因为 blockNum=1
     - k=4 是因为 blockSize=8，所以 k=blockSize/2=4

```javascript
var tempArray = OutputData
var logRes = log2(8) // 即 3

for (var m = 0; m < logRes; m ++) {

  var indexIn = 0
  var step = 2^m // 即：1，2，4。这个是间隔步长。
  var blockSize = 2^(m+1) // 即：2，4，8。
  var blockNum = 8 / blockSize // 即：4，2，1。一共有多少块需要循环。
  var kFor = blockSize / 2 // 即：1，2，4。每个块需要循环从次数。

  for (var n = 0; n < blockNum; n ++) {

    for (var k = 0; k < kFor; k ++) {
      
      var in1 = OutputData[indexIn]
      var in2 = OutputData[indexIn + 4]

      var out1 = 2 * (indexIn - (indexIn mod 2^m)) + (indexIn mod 2^m)
      var out2 = out1 + step

      var indexW = kFor * 2^(logRes - m)
      var w = dataW[indexW]

      var p1 = in1
      var p2 = 复数乘法(in2, w)

      tempArray[out1] = p1 + p2
      tempArray[out2] = p1 - p2
    
      indexIn ++
    }

  }

  OutputData = tempArray
}
```