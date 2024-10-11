## 创建动画

name - string，动画的名称。  
property - string，将应用动画的对象的属性。 例如 position 是 Vector3 属性或 position.x 是浮点数属性。  
frames per second - number，每秒动画帧数(与每秒的场景渲染帧数无关)。  
property type - number，属性参数的属性类型。这可以使用以下常量进行设置：  
&emsp;&emsp;BABYLON.Animation.ANIMATIONTYPE_COLOR3  
&emsp;&emsp;BABYLON.Animation.ANIMATIONTYPE_FLOAT  
&emsp;&emsp;BABYLON.Animation.ANIMATIONTYPE_MATRIX  
&emsp;&emsp;BABYLON.Animation.ANIMATIONTYPE_QUATERNION  
&emsp;&emsp;BABYLON.Animation.ANIMATIONTYPE_VECTOR2  
&emsp;&emsp;BABYLON.Animation.ANIMATIONTYPE_VECTOR3  
loop mode - number，循环模式，数字可选，可以使用以下参数设置：  
&emsp;&emsp;BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE - 从初始值重新启动动画  
&emsp;&emsp;BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT - 在最终值处暂停动画  
&emsp;&emsp;BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE - 使用键值渐变重复动画递增。

```javascript
const myAnim = new BABYLON.Animation(name, property, frames per second, property type, loop mode)
```

## 设置关键帧

myKeys 是一个对象数组。每个对象都有两个属性：  
&emsp;&emsp;frame - 帧号  
&emsp;&emsp;value - 用于被更改的属性  
一旦构建，它就会被添加到动画中：

```javascript
myAnim.setKeys(myKeys)
```

## 开始动画

为了运行动画，它被推送到网格的动画数组属性上：

```javascript
mesh.animations.push(myAnim)
```

```javascript
// target - object，要动画化的 Babylon.js 对象
// from - number，开始动画的帧
// to - number，结束动画的帧
// 希望动画循环播放时，第四个参数为 true
scene.beginAnimation(target, from, to, true)
```

## 动画和 Promise

从 Babylon.js v3.3 开始，可以使用 Promise 等待动画结束

```javascript
let anim = scene.beginAnimation(box1, 0, 100, false)
console.log('before')
await anim.waitAsync()
console.log('after')
```

## 控制动画

每个动画都有一个名为 currentFrame 的属性，它指示了当前动画关键帧。  
对于高级关键帧动画，可以定义用于在关键点之间插入(过渡)的函数。  
默认情况下，这些函数如下：  
&emsp;&emsp;floatInterpolateFunction  
&emsp;&emsp;quaternionInterpolateFunction  
&emsp;&emsp;quaternionInterpolateFunctionWithTangents  
&emsp;&emsp;vector3InterpolateFunction  
&emsp;&emsp;vector3InterpolateFunctionWithTangents  
&emsp;&emsp;vector2InterpolateFunction  
&emsp;&emsp;vector2InterpolateFunctionWithTangents  
&emsp;&emsp;sizeInterpolateFunction  
&emsp;&emsp;color3InterpolateFunction  
&emsp;&emsp;matrixInterpolateFunction

```javascript
BABYLON.Animation.prototype.floatInterpolateFunction = function (
  startValue,
  endValue,
  gradient
) {
  return startValue + (endValue - startValue) * gradient
}
BABYLON.Animation.prototype.quaternionInterpolateFunction = function (
  startValue,
  endValue,
  gradient
) {
  return BABYLON.Quaternion.Slerp(startValue, endValue, gradient)
}
BABYLON.Animation.prototype.vector3InterpolateFunction = function (
  startValue,
  endValue,
  gradient
) {
  return BABYLON.Vector3.Lerp(startValue, endValue, gradient)
}
```

## 辅助函数

可以使用扩展函数来创建快速动画  
为了能够使用此功能，需要知道：  
&emsp;&emsp;动画将具有预定义的关键帧(仅生成 2 个关键帧：开始和结束)  
&emsp;&emsp;动画仅适用于 AbstractMesh 对象  
&emsp;&emsp;动画在方法调用之后立即开始

```javascript
BABYLON.Animation.CreateAndStartAnimation(
  name,
  mesh,
  targetProperty,
  framePerSecond,
  totalFrame,
  from,
  to,
  loopMode,
  undefined,
  () => {}
)
```

```javascript
BABYLON.Animation.CreateAndStartAnimation(
  'boxscale',
  box1,
  'scaling.x',
  30,
  120,
  1.0,
  1.5
)
```

## 动画权重

从 Babylon.js 3.2 开始，可以启动具有特定权重的动画。这意味着可以使用此 API 在同一目标上同时运行多个动画。最终值将是基于所有动画权重值进行加权计算后的和。  
要使用权重启动动画，可以使用新的 scene.beginWeightedAnimation API：  
该函数接受以下参数：  
&emsp;&emsp;target - any，目标  
&emsp;&emsp;from - number，fps 起始帧  
&emsp;&emsp;to - number，fps 结束帧  
&emsp;&emsp;weight - number，可选，此动画的权重。 默认为 1.0  
&emsp;&emsp;loop - boolean，可选，如果为真，动画将循环播放(取决于 BABYLON.Animation.ANIMATIONLOOPMODE)  
&emsp;&emsp;speedRatio - number，可选，默认值：1。此动画的速度比  
&emsp;&emsp;onAnimationEnd - function，可选，动画结束时触发的函数，即使手动停止动画(也依赖于 ANIMATIONLOOPMODE)  
&emsp;&emsp;animatable - Animatable，可选，可选的特定动画

```javascript
// 权重为 1.0
let idleAnim = scene.beginWeightedAnimation(skeleton, 0, 89, 1.0, true)
// 权重为 0
let walkAnim = scene.beginWeightedAnimation(skeleton, 90, 124, 0, true)
// 权重为 0
let runAnim = scene.beginWeightedAnimation(skeleton, 125, 146, 0, true)
```

与 beginAnimation 一样，此函数返回一个动画对象，但在这里对象的 weight 属性被设置为一个值。  
还可以随时设置任何 Animatable 的 weight 属性以切换到加权模式。该值必须介于 0 和 1 之间。同样，可以将其设置为 -1 以关闭权重模式。如果将权重设置为 0，则动画将被视为暂停。

```javascript
let idleAnim = scene.beginWeightedAnimation(skeleton, 0, 89, 1.0, true)
let runAnim = scene.beginWeightedAnimation(skeleton, 125, 146, 0, true)
idleAnim.weight = 0.5
runAnim.weight = 0.5
```

如果动画不是相同的长度(从开始帧到结束帧之间的长度相同)，那么需要使用以下代码打开动画同步：

```javascript
// 同步动画
idleAnim.syncWith(runAnim)
```

要禁用动画同步，只需调用

```javascript
animation.syncWith(null)
```

## 将事件附加到动画

从 Babylon.js 版本 2.3 开始，可以将动画事件附加到动画的特定帧

```javascript
// 创建事件的3个参数：
// - 触发事件的帧
// - 要执行的动作
// - 如果事件应该只执行一次，则为布尔值（默认为 false）
let event1 = new BABYLON.AnimationEvent(
  50,
  function () {
    console.log('Yeah!')
  },
  true
)
// 将的事件附加到的动画中
animation.addEvent(event1)
```

## 烘焙纹理动画

动画由 CPU 计算，将骨骼效果应用于网格。这相当慢，并且对于多个动画对象来说可能是一个瓶颈。  
优化这一点的一种方法是预先计算(或烘焙)动画，将它们存储到纹理(通常称为顶点动画纹理或 VAT)中并在顶点着色器上使用它。  
这释放了 CPU，但需要权衡执行此初始烘焙步骤(可以在开发时完成)、在下载中添加新纹理文件并消耗更多 GPU 内存。  
这种权衡通常非常好，因为 CPU 往往是瓶颈。

```javascript
let baker = null,
  mesh = null
const animationRanges = [
  {
    from: 1,
    to: 20,
    name: 'My animation'
  }
]
BABYLON.SceneLoader.ImportMeshAsync(
  '',
  'https://raw.githubusercontent.com/RaggarDK/Baby/baby/',
  'arr.babylon',
  scene,
  undefined
)
  .then((importResult) => {
    mesh = importResult.meshes[0]
    // 创建面烘焙助手，这样就可以生成纹理
    baker = new BABYLON.VertexAnimationBaker(scene, mesh)
    // 可以在此处使用多个动画范围对动画进行切片
    return baker.bakeVertexData(ranges)
  })
  .then((vertexData) => {
    // 得到了顶点数据。 从中创建纹理：
    const vertexTexture = baker.textureFromBakedVertexData(vertexData)
    // 创建一个管理器来存储它。
    const manager = new BABYLON.BakedVertexAnimationManager(scene)
    // 存储纹理
    manager.texture = vertexTexture
    // 设置动画参数。 可以随时更改此设置。
    manager.setAnimationParameters(
      animationRanges[0].from, // 初始帧
      animationRanges[0].to, // 最后一帧
      0, // offset
      30 // 每秒帧数
    )
    // 将管理器与网格相关联
    mesh.bakedVertexAnimationManager = manager
    // 更新播放动画的时间
    scene.registerBeforeRender(() => {
      manager.time += engine.getDeltaTime() / 1000.0
    })
  })
```

## VAT 的实例

实例是使用硬件加速渲染绘制大量相同网格的绝佳方式。  
VAT 可以进一步用于有效地处理动画。  
在这种情况下，需要注册一个缓冲区来为每个实例设置动画参数：

```javascript
// 创建实例化缓冲区
mesh.registerInstancedBuffer('bakedVertexAnimationSettingsInstanced', 4)
// 为基础网格设置它
mesh.instancedBuffers.bakedVertexAnimationSettingsInstanced =
  new BABYLON.Vector4(0, 0, 0, 0)
```

## 精简实例的 VAT

VAT 也可用于精简实例。然后为精简实例设置参数：

```javascript
// 分配参数
const animParameters = new Float32Array(numInstances * 4)
// 对于每个实例
for (let i = 0; i < numInstances; i++) {
  // 使用的代码生成动画参数：
  // returns a BABYLON.Vector4()
  const params = setAnimationParameters()
  // 存储在基本数组中
  animParameters.set(params.asArray(), i * 4)
}
// 使用所有设置更新网格
mesh.thinInstanceSetBuffer(
  'bakedVertexAnimationSettingsInstanced',
  animParameters,
  4
)
```
