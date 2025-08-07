```javascript
(a+bi)×(c+di) = ac + adi + bci + bdi^2
进一步化简，考虑到i^2 = -1，得到：
ac + adi + bci - bd = (ac - bd) + (ad + bc)i
```
## 原理

![image](./img/fft-0.png)
![image](./img/fft-1.png)
![image](./img/fft-2.png)
![image](./img/fft-3.png)
![image](./img/fft-4.png)
![image](./img/fft-5.png)
![image](./img/fft-6.png)
![image](./img/fft-7.png)

## stockham fft
![image](./img/fft-stockham.png)

### 第一轮
D[K] 和 D[K + 4] 计算
```javascript
const list = array[all]
const p1 = list[k]
const p2 = list[k + 4]
array[k] = p1 + w * p2
array[k + 4] = p1 - w * p2
```

### 第二轮
D[K] 和 D[K + 2] 计算
```javascript
const list = array[all]
const p1 = list[k]
const p2 = list[k + 2]
array[k] = p1 + w * p2
array[k + 2] = p1 - w * p2
```

### 第三轮
D[K] 和 D[K + 1] 计算
```javascript
const list = array[all]
const p1 = list[k]
const p2 = list[k + 1]
array[k] = p1 + w * p2
array[k + 1] = p1 - w * p2
```