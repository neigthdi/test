## 常用相机

### 一、通用相机

支持由键盘，鼠标，触摸屏或者游戏手柄控制器操控，可以自动判断输入设备。  
扩展并取代了仍然可以使用的自由相机（Free Camera），触摸相机（Touch Camera）和游戏手柄相机（Gamepad Camera）。  
现在 Universal Camera 为 Babylon.js 的默认相机，如果想在场景中使用类似于 FPS 操控的空间，这种相机是最佳选择。  
Universal Camera 的默认操作方式是：  
&emsp;&emsp;1、键盘 - 左右箭头左右移动相机，上下箭头前后移动相机。  
&emsp;&emsp;2、鼠标 - 将以相机为中心点旋转相机。  
&emsp;&emsp;3、触摸屏幕 - 向左向右滑动可以左右移动相机，向上向下滑动可以向前向后移动相机。  
&emsp;&emsp;4、游戏操作手柄

```javascript
// 实例化相机，并传入相关值: 名称，位置，场景对象
let camera = new BABYLON.UniversalCamera(
  'UniversalCamera',
  new BABYLON.Vector3(0, 0, -10),
  scene
)
// 使用setTarget方法设置相机交点，并传入一个场景的位置点
camera.setTarget(BABYLON.Vector3.Zero())
// 设置相机将事件绑定到画布上面
camera.attachControl(canvas, true)
```

### 二、弧形旋转相机

使用鼠标和光标键将相机绕着一个三维点(此处时 0 坐标处) 旋转

```javascript
// 参数1定义相机的 name，
// 参数2定义相机沿y轴的旋转弧度，
// 参数3定义相机沿x轴的旋转弧度，
// 参数4定义相机与目标的距离，
// 参数5定义相机的目标，
// 参数6定义相机所属的场景
let camera = new BABYLON.ArcRotateCamera(
  'ArcRotateCamera',
  1,
  0.8,
  10,
  new BABYLON.Vector3(0, 0, 0),
  scene
)
// 通过设置相机位置来覆盖 alpha, beta, radius
// 既上面的1，0.8，10这三个数值
camera.setPosition(new BABYLON.Vector3(0, 0, 20))
// 将相机绑定到画布上面
camera.attachControl(canvas, true)
```

### 三、跟随相机

跟随相机可以通过按照的设置，设置一个模型网格作为它的焦点，从所处的位置到移动来观察焦点模型的。当模型移动时，相机也会跟随移动。  
在创建跟随相机时，需要设置它的三个参数：  
&emsp;&emsp;1、相机与目标模型的距离 - camera.radius  
&emsp;&emsp;2、相机高度与目标模型的高度差 - camera.heightOffset  
&emsp;&emsp;3、在 x y 平面上围绕目标的角度。相机移动到目标位置是通过它的加速度（camera.cameraAcceleration），并可以限制最大速度（camera.maxCameraSpeed）。

```javascript
// 创建相机配置项: name, position, scene
let camera = new BABYLON.FollowCamera(
  'FollowCam',
  new BABYLON.Vector3(0, 10, -10),
  scene
)
// 在全局坐标系下相机距离场景的距离
camera.radius = 30
//在局部坐标下相机的高度高于目标的高度的值
camera.heightOffset = 10
// 相机在x y平面内围绕目标的局部原点旋转值
camera.rotationOffset = 0
// 摄像机从当前位置移动到目标位置的加速度
camera.cameraAcceleration = 0.005
// 最大加速值
camera.maxCameraSpeed = 10
// 相机绑定到画布上面
camera.attachControl(canvas, true)
// 注意：在目标创建后要设置相机的目标，注意Babylon.js在2.5版本以后变更设置。
// 在此处设置相机的目标网格
camera.target = targetMesh // 2.4版本以及更低版本
camera.lockedTarget = targetMesh //2.5以后的版本
```

## 其他相机

### 一、立体相机

立体相机扩展了通用相机和弧形旋转相机，可用于红蓝 3d 眼镜查看立体效果。它是通过后处理实现的效果。  
创建立体通用相机 AnaglyphUniversalCamera

```javascript
// 配置项：名称，相机位置，左右眼偏移量，场景对象
let camera = new BABYLON.AnaglyphUniversalCamera(
  'af_cam',
  new BABYLON.Vector3(0, 1, -15),
  0.033,
  scene
)
```

#### 创建立体弧形旋转相机 AnaglyphArcRotateCamera

```javascript
// 配置项：名称，初始经度，初始纬度，与焦点距离，焦点位置，眼距，场景对象
let camera = new BABYLON.AnaglyphArcRotateCamera(
  'aar_cam',
  -Math.PI / 2,
  Math.PI / 4,
  20,
  new BABYLON.Vector3.Zero(),
  0.033,
  scene
)
```

### 二、陀螺仪相机

这个相机会对于设备陀螺仪做出反应的相机，例如现在的手机都会有相关的功能。

```javascript
//配置项：相机名称，相机位置，场景对象
let camera = new BABYLON.DeviceOrientationCamera(
  'DevOr_camera',
  new BABYLON.Vector3(0, 0, 0),
  scene
)
// 设置相机朝向一个特定的位置
camera.setTarget(new BABYLON.Vector3(0, 0, -10))
// 设置相机对移动和旋转的灵敏度
camera.angularSensibility = 10
camera.moveSensibility = 10

// 将相机事件绑定到canvas上面
camera.attachControl(canvas, true)
```

### 三、飞行相机

```javascript
// 配置项：相机名称，相机位置，场景对象
let camera = new BABYLON.FlyCamera(
  'FlyCamera',
  new BABYLON.Vector3(0, 5, -10),
  scene
)
// 类似飞机的旋转，具有更快的滚转修正和倾斜转弯。
// 默认值为100。数字越大，校正速度越慢。
camera.rollCorrect = 10 //滚动修正
// 默认值为false
camera.bankedTurn = true //倾斜旋转
//默认值九十度，以弧度赋值，配置相机滚动多远
camera.bankedTurnLimit = Math.PI / 2
// 设置偏航（转弯）如何影响滚动（转弯）。
// 小于1将减少滚动，并且超过1将增加滚动。
camera.bankedTurnMultiplier = 1
// 相机事件绑定到画布
camera.attachControl(canvas, true)
```

### 四、虚拟操纵杆相机

虚拟操纵杆相机会在界面上生成虚拟的操作图形，用于控制相机或其他场景的物体。

### 五、VR 陀螺仪相机

用于拥有 VR 头显设备的开发者。

## 相机多个动画的正确顺序

```javascript
targetScreenOffet->target->beta->alpha->radius
```

## 相机运动触发的事件

```javascript
camera.onViewMatrixChangedObservable
```

## 漫游相机定制跳跃转向碰撞等功能

```javascript
//下面两种方法可以根据世界矢量进行碰撞位移
camera._collideWithWorld(camera.getFrontPosition(10).subtract(camera.position))
camera.cameraDirection.addInPlace(camera._transformedDirection)

//如跳跃，则相对世界向上
scene.activeCamera.cameraDirection.addInPlace(new BABYLON.Vector3(0, 4, 0))
//重力回到地面
camera._needMoveForGravity = true
//定制位移方向
let speedXX = camera._computeLocalCameraSpeed() * (左右惯性因子 * panel)
let speed = camera._computeLocalCameraSpeed() * (前后惯性因子 * panel)
camera._localDirection.copyFromFloats(speedX, 0, speedZ)
camera.getViewMatrix().invertToRef(camera._cameraTransformMatrix)
BABYLON.Vector3.TransformNormalToRef(
  camera._localDirection,
  camera._cameraTransformMatrix,
  camera._transformedDirection
)
camera.cameraDirection.addInPlace(camera._transformedDirection)

//定制旋转方向
camera.rotation.x = beta惯性因子 * panel
camera.rotation.y = alpha惯性因子 * panel
```

## 相机碰撞

```javascript
//添加重力
scene.gravity = new BABYLON.Vector3(0, -9.81, 0)
camera.applyGravity = true
//添加碰撞
scene.collisionsEnabled = true
camera.checkCollisions = true
ground.checkCollisions = true
box.checkCollisions = true
//相机碰撞椭圆体
camera.ellipsoid = new BABYLON.Vector3(0.5, 1, 0.5)
//arcRotateCamera的碰撞椭圆体
camera.collisionRadius = new BABYLON.Vector3(0.5, 0.5, 0.5)
//防止向上跳后无法落地
camera._needMoveForGravity = true
//物体碰撞
mesh.moveWithCollisions(vec3)
//使用webworker运行碰撞检测
scene.workerCollisions = true | false
```

## 第二视图

```javascript
let camera = new BABYLON.ArcRotateCamera(
  'Camera',
  0,
  0,
  0,
  BABYLON.Vector3.Zero(),
  scene
)
camera.setPosition()

let followCamera = new BABYLON.FollowCamera(
  'follow',
  new BABYLON.Vector3(400, 500, 1000),
  scene,
  ground
)
followCamera.radius = 0
followCamera.heightOffset = 400
scene.activeCameras.push(followCamera)
scene.activeCameras.push(camera)

followCamera.viewport = new BABYLON.Viewport(0, 0, 0.3, 0.3)
camera.viewport = new BABYLON.Viewport(0, 0.3, 1, 0.7)
```

## 四元数转换为欧拉角

```javascript
sphere2.lookAt(sphere.position)
camera.position = sphere2.position
camera.rotation.x = -sphere2.rotationQuaternion.toEulerAngles().x
camera.rotation.y = sphere2.rotationQuaternion.toEulerAngles().y + Math.PI
camera.rotation.z = sphere2.rotationQuaternion.toEulerAngles().z
```
