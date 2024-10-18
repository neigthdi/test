# 三大属性 场景 相机 渲染引擎

## 第一步先获取 canvas

```javascript
const canvas = document.querySelector('canvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
```

## 第二步创建 engine、scene、camera

```javascript
// 创建渲染引擎
const engine = new BABYLON.Engine(canvas, true),
  // 创建场景
  scene = new BABYLON.Scene(engine),
  // 创建相机 弧形旋转相机
  // 参数1定义相机的 name，
  // 参数2定义相机沿y轴的旋转弧度，
  // 参数3定义相机沿x轴的旋转弧度，
  // 参数4定义相机与目标的距离，
  // 参数5定义相机的目标，
  // 参数6定义相机所属的场景
  camera = new BABYLON.ArcRotateCamera(
    'camera',
    -Math.PI / 2,
    Math.PI / 2,
    2,
    new BABYLON.Vector3(0, 0, 0),
    scene
  )
// 可以通过鼠标旋转视角
camera.attachControl(canvas, true)
// 停止通过鼠标旋转视角
camera.detachControl()
// 相机的滚轮速度，数值越大，前进后退速度越慢
camera.wheelPrecision = 30

// babylon.js默认左手坐标系，转成右手，因为游戏引擎的坐标基本上都是左手坐标系
// 左右手坐标系的X、Y方向都是一样，左手坐标系的Z的正方向是向前，右手则相反
scene.useRightHandedSystem = true
```

## 第三步循环渲染场景 以及监听浏览器窗口变化

```javascript
engine.runRenderLoop(() => {
  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})
```
