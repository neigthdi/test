## 粒子系统

创建粒子

```javascript
// 粒子的名称
// 粒子的总量
// scene
let particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene)
```

可以使用 ParticleHelper 来创建一个默认的配置

```javascript
BABYLON.ParticleHelper.CreateDefault(emitter)
```

系统启动、停止、延迟

```javascript
particleSystem.start()
particleSystem.stop()
particleSystem.startDelay = 3000 // 定义延迟（以毫秒为单位）
particleSystem.start(3000) // 定义延迟（以毫秒为单位）
```

设置粒子系统的运行时间

```javascript
particleSystem.targetStopDuration = 5 //五秒后粒子效果会停止
```

运行一次就销毁掉，可以调用粒子系统的 particleSystem.dispose()方法。  
这对于制作射击粒子系统是非常有用的。

```javascript
particleSystem.disposeOnStop = true //粒子效果停止后销毁粒子系统
```

## 预运行

可以设置粒子提前运行，以确保在显示之前达到预期显示的效果。  
需要设置两个属性：  
&emsp;&emsp;system.preWarmCycles： 获取或设置一个值，设置在首次渲染之前提前执行多少帧（必须在启动系统之前设置此值）。默认值为 0。  
&emsp;&emsp;system.preWarmStepOffset：获取或设置一个值，指在预启动模式下时每一帧运行的速度和默认速度比。默认值为 1。

```javascript
// 将在运行前提前运行100帧
system.preWarmCycles = 100
// 每一帧的运算为原来的五倍
system.preWarmStepOffset = 5
system.start()
```

## 粒子纹理

将纹理图片应用于粒子

```javascript
particleSystem.particleTexture = new BABYLON.Texture('PATH TO IMAGE', scene)
```

还可以将蒙版应用于纹理以过滤某些颜色，或过滤透明通道的一部分

```javascript
particleSystem.textureMask = new BABYLON.Color4(0.1, 0.8, 0.8, 1.0)
```

## 粒子发射器

粒子发射器可以受用三维向量或者模型网格定位，在这种情况下，网格的位置用于定位。

```javascript
particleSystem.emitter = new BABYLON.Vector3(-1, 2, 3)
let source = BABYLON.MeshBuilder.CreateBox('source', 1.0, scene)
particleSystem.emitter = source
```

## 世界偏移量

从 Babylon.js v4.0 开始，可以使用以下方法设置粒子的世界偏移量。  
此代码使用世界偏移移动粒子（当的相机需要保持在世界坐标的原点以提高精度，然后移动世界坐标时）。

```javascript
particleSystem.worldOffset = new BABYLON.Vector3(100, 20, -453)
```

## 粒子扩散和位置

粒子的扩散来自于定义的盒子，盒子的位置是相对于发射器的位置。  
发射器的盒子需要知道六个面的位置，这里只需要知道盒子的最大点和最小点既可以设置出发射器的扩散位置。  
即设置粒子系统的 minEmitBox 和完成的 maxEmitBox：

```javascript
particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0)
particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0)
```

## 生命周期

个单独的粒子的生命周期是在产生后到消失（或死亡）所花费的时间。一旦粒子死掉，粒子就会被回收。  
它的寿命可以通过配置一下两个配置，并从里面随机一个时间作为存活时间：

```javascript
//存活时间从最小到最大值中间取一个随机时间
particleSystem.minLifeTime = 0.3
particleSystem.maxLifeTime = 1.5
```

从 Babylon.js v3.3 版本开始，还可以为有声明周期的粒子系统定义它的粒子的生命周期。  
比如，如果设置粒子系统的生命周期为 5 秒。

```javascript
particleSystem.targetStopDuration = 5
```

addLifeTimeGradient()方法  
&emsp;&emsp;第一个参数定义了粒子在粒子系统生命周期出现的时间(0 为粒子系统启动时间，1 为粒子系统结束时间)。  
&emsp;&emsp;第二个参数是粒子的存活时间

下面分别设置了粒子在粒子系统开始时的存活时间为 0.5 秒，而如果在结束时出现，则存活时间接近 0 秒。

```javascript
particleSystem.addLifeTimeGradient(0, 0.5)
particleSystem.addLifeTimeGradient(1, 0)
```

可以通过为每个渐变增加第三个值来定义更复杂的渐变。
只要渐变值介于 0 到 1 之间，就可以根据需要添加任意渐变。  
要删除某个渐变，可以调用 particleSystem.removeLifeTimeGradient(0.5)。

```javascript
particleSystem.addLifeTimeGradient(0, 0.5, 0.8)
particleSystem.addLifeTimeGradient(1.0, 0, 0.1)
```

在这种情况下，第一个值还是定义了处于粒子系统存活的时间段，后两个值代表粒子将会在两个值中间随机一个粒子的寿命。

## 粒子大小

粒子的大小也可以通过设定范围，并在范围内随机生成

```javascript
// 设置大小的最大值和最小值
particleSystem.minSize = 0.1
particleSystem.maxSize = 0.5
```

如果将粒子修改为长方形，而不是必须为正方形，则可以使用 ScaleX/Y 来设置最大值和最小值：

```javascript
particleSystem.minScaleX = 0.1
particleSystem.maxScaleX = 0.5

particleSystem.minScaleY = 0.2
particleSystem.maxScaleY = 0.4
```

从 Babylon.js v3.3 版本开始，还可以定义粒子系统生命周期内的粒子大小渐变。
要添加大小渐变，请使用以下代码：

addSizeGradient()方法  
&emsp;&emsp;第一个参数定义了粒子的某个时间点（0 代表粒子生成时，1 代表粒子消失时间）。  
&emsp;&emsp;第二个参数是粒子处于当前时间时的大小。

```javascript
particleSystem.addSizeGradient(0, 0.5)
```

还可以通过提供第三个值来定义更复杂的渐变。  
在这种情况下，大小缩放会从第二个值和第三个值中间随机一个值来设置粒子大小缩放。  
要删除渐变，可以调用 particleSystem.removeSizeGradient(0.5)。

```javascript
particleSystem.addSizeGradient(0, 0.5, 0.8)
particleSystem.addSizeGradient(1.0, 3, 4)
```

处理粒子大小时，可能需要移动变换中心。默认情况下，变换中心为粒子的中心，如果需要在粒子的顶部或者底部。值需要调用：

```javascript
// 这个的变换中心在粒子的底部
particleSystem.translationPivot = new BABYLON.Vector2(0, -0.5)
```

## 粒子颜色

可以为粒子设置三种颜色，两种颜色在粒子的生命周期内混合生成，第三种颜色会在粒子消失之前生成。

```javascript
particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0)
particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0)
particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0)
```

还可以定义颜色的渐变。如果定义颜色的渐变，则将忽略掉 color1，color2 和 colorDead 属性。
addSizeGradient()方法  
&emsp;&emsp;第一个参数定义了粒子的某个时间点（0 代表粒子生成时，1 代表粒子消失时间）。
&emsp;&emsp;第二个参数是粒子处于当前时间时的颜色。

```javascript
particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0))
```

只要渐变值介于 0 和 1 之间，就可以根据需要添加任意渐变。  
还可以通过设置第三个值的一个颜色来定义更复杂的渐变。  
当到达相应的梯度时，粒子颜色将会从两个颜色中间随机出来一个颜色。  
要删除一个设置的渐变，可以调用 particleSystem.removeColorGradient(0.5)。

```javascript
particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0), new BABYLON.Color4(1, 0, 1, 0));
particleSystem.addColorGradient(1.0, new BABYLON.Color4(1, 1, 1, 1)new BABYLON.Color4(1, 0, 1, 1));
```

## 粒子混合

粒子和场景混合的方式有多重，通过设置粒子系统的 blendMode 属性。  
BLENDMODE*ONEONE 是默认值，如果没有手动设置，blendMode 的值将会是这个。  
其它可设置的值是：  
&emsp;&emsp;BLENDMODE_ONEONE - 设置颜色不会影响到粒子的 alpha（透明部分）。  
&emsp;&emsp;BLENDMODE_STANDARD- 使用粒子的 alpha（即颜色（1-alpha）+ particleColor alpha）添加颜色。  
&emsp;&emsp;BLENDMODE_ADD - 添加颜色，但只有粒子颜色使用粒子的 alpha（即 color + particleColor * alpha）。  
&emsp;&emsp;BLENDMODE*MULTIPLY - 颜色相乘并添加到（1 - alpha）（即 color * particleColor + 1 - alpha）。  
&emsp;&emsp;BLENDMODE_MULTIPLYADD- 用两个渲染 BLENDMODE_MULTIPLY 然后渲染 BLENDMODE_ADD。

```javascript
particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE
particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD
```

## 粒子产生速率

可以通过设置 emitRate 粒子每秒的产生量。设置的数值越大，发出的粒子云就密集。  
当单个粒子消失时，它会再次被加入循环中被生成。  
如果它们存在时间够长，而且设置的产生速率过快，粒子产生可能会出现间歇期。

```javascript
particleSystem.emitRate = 1000
```

可以通过设置手动发射计数来停止连续发射粒子。  
如果产生的粒子到达设置的数量时，粒子将停止产生。

```javascript
particleSystem.manualEmitCount = 300
```

## 粒子方向

粒子可以设置两个方向。  
如果仅设置了一个方向，粒子会沿这个方向随机一个方向移动。  
如果设置了两个方向，粒子通常会在两个方向值范围内随机。  
方向也会受重力影响。

```javascript
particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3)
particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3)
```

## 重力

可以设置粒子应用重力。例如，如果设置 Y 轴上面一个负值，粒子会有缓慢下降的效果。

```javascript
particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0)
```

## 旋转

可以为粒子设置一个绕 Z 轴旋转速度，以弧度/秒为单位。

```javascript
particleSystem.minAngularSpeed = 0
particleSystem.maxAngularSpeed = Math.PI
```

还可以通过以下方法设置粒子随机初始旋转角度的范围。

```javascript
particleSystem.minInitialRotation = 0
particleSystem.maxInitialRotation = Math.PI
```

从 Babylon.js v3.3 版本开始，还可以定义旋转速度的渐变。  
要设置粒子旋转速度变化，请使用以下方法。
addAngularSpeedGradient()方法  
&emsp;&emsp;第一个参数是粒子的相应时间阶段（0 代表为粒子产生时，1 代表粒子消失时）。  
&emsp;&emsp;第二个参数是要设置的旋转速度。  
在下面设置情况下，粒子产生后将以每帧 0.5 弧度的速度旋转。

```javascript
particleSystem.addAngularSpeedGradient(0, 0.5)
particleSystem.addAngularSpeedGradient(1.0, 3)
```

只要渐变值处于 0 到 1 之间，就可以根据需要添加任意的渐变。  
也可以通过给渐变设置两个旋转速度，让粒子从中随机一个旋转速度。  
到达当前阶段时，粒子会从两个值中间随机出一个旋转速度。  
要删除渐变，可以调用 particleSystem.removeAngularSpeedGradient(0.5)。

```javascript
particleSystem.addAngularSpeedGradient(0, 0.5, 0.8)
particleSystem.addAngularSpeedGradient(1.0, 3, 4)
```

## 速度

可以定义粒子的产生的功率范围，以及粒子运动速度（0.01 是默认的速度，值越大则速度约快）。

```javascript
particleSystem.minEmitPower = 1
particleSystem.maxEmitPower = 3
particleSystem.updateSpeed = 0.005
```

可以通过渐变定义速度随时间的变化。速度随时间的变化是应用于粒子方向的。  
如果值为 2，则实际速度将是原来的两倍。  
要添加速度渐变，请通过以下方式。  
addAngularSpeedGradient()方法  
&emsp;&emsp;第一个参数定义的时间段（0 为粒子产生时间，1 为粒子消失时间）。  
&emsp;&emsp;第二个参数是要使用的速度。

```javascript
particleSystem.addVelocityGradient(0, 0.5)
```

还可以通过提供第三个值来定义更复杂的渐变。  
这种情况下，粒子到达相应的阶段，将从后两个值范围内随机一个速度。  
要删除渐变，可以调用 particleSystem.removeVelocityGradient(0.5)。

```javascript
particleSystem.addVelocityGradient(0, 0.5, 0.8)
particleSystem.addVelocityGradient(1.0, 3, 4)
```

## 限制粒子极限速度

由于设置的速度是一个加速度，因此速度会不断叠加，当前配置可以限制粒子的极限速度。  
要添加极限速度，请通过以下方式。
addLimitVelocityGradient()方法  
&emsp;&emsp;第一个参数定义的时间段（0 为粒子产生时间，1 为粒子消失时间）。  
&emsp;&emsp;第二个参数为粒子的极限速度。  
在这种情况下，粒子在产生以后就会直接检测当前速度，如果大于极限速度，则会应用阻尼参数（实际速度乘以阻尼值得到的结果）。

```javascript
particleSystem.addLimitVelocityGradient(0, 0.5)
```

还可以通过提供第三个值来定义更复杂的渐变。  
要删除渐变，可以调用 particleSystem.removeLimitVelocityGradient(0.5)。

```javascript
particleSystem.addLimitVelocityGradient(0, 0.5, 0.8)
particleSystem.addLimitVelocityGradient(1.0, 3, 4)
```

## 阻力渐变

可以设置随着时间改变的阻力渐变。改设置将用于向粒子移动方向施加阻力来模拟空气摩擦。例如，如果阻力系数设置为 0.8，那粒子只能移动默认的 20%的距离。  
要添加阻力渐变，请通过以下方式。
addDragGradient()方法  
&emsp;&emsp;第一个参数定义的时间段（0 为粒子产生时间，1 为粒子消失时间）。  
&emsp;&emsp;第二个参数是当前阶段施加的阻力。  
在这种情况下，粒子的位置将是 particle.position = particle.direction \* (1.0 - 0.5) 粒子的位置等于粒子的方向乘以 1-阻力。建议至少为 0 和 1 定义一个渐变。

```javascript
particleSystem.addDragGradient(0, 0.5)
```

还可以通过为每一个渐变设置两个阻力值来实现更复杂的渐变。
这种情况下，当到达当前阶段时，粒子将在两个值范围内随机一个阻力值。
要删除渐变，可以调用 particleSystem.removeDragGradient(0.5)。

```javascript
particleSystem.addDragGradient(0, 0.5, 0.8)
particleSystem.addDragGradient(1.0, 0, 0.1)
```

## 粒子产生的渐变

可以通过使用渐变设置粒子产生速度。随着时间的推移，设置的值将覆盖 system.emitRate（个数/秒）属性的值。  
要添加粒子产生的渐变，请通过以下方式。
addEmitRateGradient()方法  
&emsp;&emsp;第一个参数定义的时间段（0 为粒子产生时间，1 为粒子消失时间）。  
&emsp;&emsp;第二个参数是当前阶段生成速度。

```javascript
particleSystem.addEmitRateGradient(0, 10)
```

还可以通过为每一个渐变设置两个值来实现更复杂的渐变。
这种情况下，当到达当前阶段时，粒子将在两个值范围内随机一个产生速度。
要删除渐变，可以调用 particleSystem.removeEmitRateGradient(0.5)。

```javascript
particleSystem.addEmitRateGradient(0, 5, 10)
particleSystem.addEmitRateGradient(1.0, 800, 1000)
```

## 粒子系统设置粒子大小渐变

可以设置粒子大小随粒子系统的时间的渐变。  
注意，只有粒子系统定义明确的生命周期（设置 system.targetStopDuration）后，粒子大小的渐变才会生效。  
addStartSizeGradient()方法  
&emsp;&emsp;第一个参数定义的时间段（0 为粒子产生时间，1 为粒子消失时间）。  
&emsp;&emsp;第二个参数是当前粒子系统阶段粒子的大小。

```javascript
particleSystem.addStartSizeGradient(0, 2)
```

还可以通过为每一个渐变设置两个值来实现更复杂的渐变。  
当到达当前阶段时，粒子将在两个值范围内随机一个大小尺寸。  
要删除渐变，可以调用 particleSystem.removeStartSizeGradient(0.5)。

```javascript
particleSystem.addStartSizeGradient(0, 5, 10)
particleSystem.addStartSizeGradient(1.0, 800, 1000)
```

## 透明度渐变色

可以使用这个渐变来根据透明度来修改粒子的颜色。  
透明度渐变非常强大，但需要一些设置。
首先，需要设置渐变颜色：

addRampGradient()方法  
&emsp;&emsp;第一个参数为当前透明度的索引。  
&emsp;&emsp;第二个参数是当前透明度时使用的颜色。

```javascript
system.addRampGradient(0.0, new BABYLON.Color3(1, 1, 1))
system.addRampGradient(0.09, new BABYLON.Color3(209 / 255, 204 / 255, 15 / 255))
system.addRampGradient(0.18, new BABYLON.Color3(221 / 255, 120 / 255, 14 / 255))
system.addRampGradient(0.28, new BABYLON.Color3(200 / 255, 43 / 255, 18 / 255))
system.addRampGradient(0.47, new BABYLON.Color3(115 / 255, 22 / 255, 15 / 255))
system.addRampGradient(0.88, new BABYLON.Color3(14 / 255, 14 / 255, 14 / 255))
system.addRampGradient(1.0, new BABYLON.Color3(14 / 255, 14 / 255, 14 / 255))
```

然后需要设置使用它们：

```javascript
system.useRampGradients = true
```

通过粒子的透明度（通过计算 textureAlpha 纹理透明度 _ particleColorAlpha 粒子颜色透明度）来获取当前的实际显示透明度渐变色（透明度会作为从前面设置的渐变的索引去获取颜色）。  
获取到透明度渐变里面的颜色以后，将通过以下公式获取到最终显示的颜色：  
 finalColor = textureColor _ particleColor \* rampColor[alphaIndex]  
 （最终颜色等于纹理颜色乘以粒子颜色再乘以获取到透明度索引到的渐变的颜色）。  
为了实现更多的控制，可以使用 remap 重映射函数来重新定义这个透明度的索引。

```javascript
system.addColorRemapGradient(0, 0, 0.1)
system.addColorRemapGradient(0.2, 0.1, 0.8)
system.addColorRemapGradient(0.3, 0.2, 0.85)
system.addColorRemapGradient(0.35, 0.4, 0.85)
system.addColorRemapGradient(0.4, 0.5, 0.9)
system.addColorRemapGradient(0.5, 0.95, 1.0)
system.addColorRemapGradient(1.0, 0.95, 1.0)
```

颜色重新映射渐变定义了随着时间的变化的透明度的最小值和最大值。  
然后使用下面的公式将 alpha（透明度索引）从[min, max]重新映射到[0,1]  
finalAlphaIndex = clamp((alphaIndex - min) / (max - min), 0.0, 1.0)  
（最终的透明度索引将是透明度减去最小值，然后再除以最大值减去最小值的值。这个值的取值范围为 0 到 1，如果这个值小于 0，则被设置为 0，如果这个值大于 1，将被设置为 1）。  
还可以通过重新映射来设置粒子每一个像素的透明度的值：

```javascript
system.addAlphaRemapGradient(0, 0, 0.1)
system.addAlphaRemapGradient(1.0, 0.1, 0.8)
```

透明度的重新映射将使用以下公式计算最终的透明度的值  
finalAlpha = clamp((textureAlpha _ particleColorAlpha _ rampColor.a - min) / (max - min), 0.0, 1.0)  
（最终的透明值等于纹理透明度乘以粒子颜色透明度再乘以透明度渐变的透明度减去最小的值除以最大值减去最小值的值。这个值的取值范围为 0 到 1，如果这个值小于 0，则被设置为 0，如果这个值大于 1，将被设置为 1）。

## 对准

默认情况下，所有的粒子都显示为广告牌（一直朝向与相机）。  
但是可以通过设置粒子系统 system.isBillboardBased = false 将粒子的朝向与它们的方向对准。  
启用了广告牌效果后，还可以决定是否要使用完整的效果（在所有的坐标轴上），还是仅仅在 Y 轴上：

```javascript
system.billboardMode = BABYLON.ParticleSystem.BILLBOARDMODE_Y
```

还可以设置 BILLBOARDMODE_STRETCHED，它将像一个完整的广告牌模式，但具有一个额外的旋转，这个旋转用于对准它们的朝向。

## 粒子发射器的形状-----点形状

要创建点形状的粒子发射器，可以运行以下代码：

```javascript
let pointEmitter = particleSystem.createPointEmitter(
  new BABYLON.Vector3(-7, 8, 3),
  new BABYLON.Vector3(7, 8, -3)
)
```

该 createPointEmitter 方法接收两个参数：  
&emsp;&emsp;direction1：Vector3  
&emsp;&emsp;direction2：Vector3  
粒子将从一个点，沿着设置的两个方向之间随机发射。  
通过返回的 pointEmitter 对象，可以动态修改这些值：

```javascript
pointEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1)
pointEmitter.direction2 = new BABYLON.Vector3(5, 2, 1)
```

## 粒子发射器的形状-----盒子形状

如果想创建一个盒子形状的发射器

```javascript
let boxEmitter = particleSystem.createBoxEmitter(
  new BABYLON.Vector3(-7, 8, 3),
  new BABYLON.Vector3(7, 8, -3),
  new BABYLON.Vector3(-1, 0, 0),
  new BABYLON.Vector3(1, 0, 0)
)
```

该 createBoxEmitter 方法按以下顺序采用四个参数  
&emsp;&emsp;direction1：Vector3， - 第一个方向  
&emsp;&emsp;direction2：Vector3， - 第二个方向  
&emsp;&emsp;minEmitBox：Vector3， - 盒子的最小值  
&emsp;&emsp;maxEmitBox：Vector3， - 盒子的最大值  
返回的 boxEmitter 对象可用于更改这些属性的值。

```javascript
boxEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1)
boxEmitter.direction2 = new BABYLON.Vector3(5, 2, 1)
boxEmitter.minEmitBox = new BABYLON.Vector3(-2, -3, -4)
boxEmitter.maxEmitBox = new BABYLON.Vector3(2, 3, 4)
```

## 粒子发射器的形状-----球型发射器

可以创建可以设置球的半径的发射器，比如半径为 1.2：

```javascript
let sphereEmitter = particleSystem.createSphereEmitter(1.2)
```

还可以通过返回的 sphereEmitter 动态修改半径。  
粒子会在球的内部区域随机一个产生位置，并且沿着当球心到产生位置的方向移动。  
还可以设置 sphereEmitter.radiusRange 属性是沿表面还是在球内。  
如果值为 0，表示随机在球的表面，如果值为 1，则在球内随机产生。  
如果需要设置粒子的方向，则可以创建定向球发射器：

```javascript
let sphereEmitter = particleSystem.createDirectedSphereEmitter(
  1.2,
  new BABYLON.Vector3(1, 1, 1),
  new BABYLON.Vector3(2, 8, 2)
)
```

该 createDirectedSphereEmitter 方法按以下顺序采用三个参数：  
&emsp;&emsp;radius：数字 - 球体发射器的半径  
&emsp;&emsp;direction1：Vector3 - 第一个方向  
&emsp;&emsp;direction2：Vector3 - 第二个方向  
也可以直接在创建的对象上面修改：

```javascript
sphereEmitter.radius = 3.4
sphereEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1)
sphereEmitter.direction2 = new BABYLON.Vector3(5, 2, -1)
```

第一个参数是半径，第二个是 direction1，第三个是 direction2。（方向将在 direction1 和 direction2 之间随机生成）

## 粒子发射器的形状-----半球型发射器

可以创建设置半径的半球发射器。

```javascript
let hemisphericEmitter = particleSystem.createHemisphericEmitter(1.2)
```

半球和球体一样，粒子也是沿着球心到生成位置的方向移动。  
还可以设置 hemisphericEmitter.radiusRange 属性是沿表面还是在球内。如果值为 0，表示随机在球的表面，如果值为 1，则在球内随机产生。

## 粒子发射器的形状-----圆柱发射器

可以通过设置半径，高度，生成位置，以及是否随机方向来创建圆柱发射器：

```javascript
let cylinderEmitter = particleSystem.createCylinderEmitter(1, 1, 0, 0)
```

返回的 cylinderEmitter 对象也可以进行修改相关属性。  
设置 cylinderEmitter .radiusRange 属性是沿表面还是在圆柱内。  
如果值为 0，表示随机在圆柱的表面，如果值为 1，则在圆柱内随机产生。  
设置 cylinderEmitter.directionRandomizer 可以改变粒子方向随机化的程度。0 为不随机，1 为随机。  
通过 createDirectedCylinderEmitter 创建设置方向的圆柱发射器：  
&emsp;&emsp;radius：Number，- 圆柱的半径  
&emsp;&emsp;height：Number，- 圆柱的高度  
&emsp;&emsp;radiusRange：Number，- 圆柱的粒子产生位置 值为 0 或 1  
&emsp;&emsp;direction1：Vector3， - 第一个方向  
&emsp;&emsp;direction2：Vector3， - 第二个方向  
返回的 cylinderEmitter 对象可用于更改这些属性的值。

```javascript
cylinderEmitter.radius = 3.4
cylinderEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1)
cylinderEmitter.direction2 = new BABYLON.Vector3(5, 2, -1)
```

第一个参数是半径，第二个是 direction1，第三个是 direction2。（方向将在 direction1 和 direction2 之间随机生成）

## 粒子发射器的形状-----锥形发射器

创建一个简单的锥形发射器：

```javascript
let coneEmitter = particleSystem.createConeEmitter(2, Math.PI / 3)
```

该 createConeEmitter 方法按以下顺序采用两个参数  
&emsp;&emsp;radius：Number; - 半径  
&emsp;&emsp;angle：以弧度为单位测量的数字，锥体的角度  
创建的圆锥的顶点在底部，锥的中心线在 Y 轴。  
设置 coneEmitter.radiusRange 属性是沿表面还是在圆锥内。如果值为 0，表示随机在圆锥的表面，如果值为 1，则在圆锥内随机产生。  
这个同样适用于 coneEmitter.heightRange：let 可以定义粒子产生位置的高度，0 表示仅在顶部表面，1 则表示整个高度。  
返回的 coneEmitter 对象可用于更改这些属性的值。

```javascript
coneEmitter.radius = 3.4
coneEmitter.angle = Math.PI / 2
```

设置 coneEmitter.emitFromSpawnPointOnly = true 可以强制粒子在圆锥的顶点产生。

## 粒子发射器-----噪音纹理

从 Babylon.js v3.3 版本开始，let 可以使用噪音纹理来改变粒子的方向：

```javascript
let noiseTexture = new BABYLON.NoiseProceduralTexture('perlin', 256, scene)
noiseTexture.animationSpeedFactor = 5
noiseTexture.persistence = 2
noiseTexture.brightness = 0.5
noiseTexture.octaves = 2

particleSystem.noiseTexture = noiseTexture
particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100)
```

除了设置 noiseTexture，let 还可以通过 particleSystem.noiseStrength 控制每个轴上面的强度。

## GPU 粒子

从 Babylon.js v3.2 版本开始，可以使用 WebGL2 的特性（transform feedback buffer 变换反馈缓冲区）来大幅提升粒子的性能。  
常规的粒子使用 CPU 进行动画，而用于渲染新 WebGL2 API 的 GPU 允许 Babylon.js 将 GPU 用于动画和渲染。  
不幸的是，此功能仅在支持 WebGL2 的浏览器上面可用。  
可以使用 BABYLON.GPUParticleSystem.IsSupported 来检测当前是否可用 GPU 粒子。如果支持它们，GPU 粒子几乎可以像常规粒子一样使用：

```javascript
let particleSystem = new BABYLON.GPUParticleSystem(
  'particles',
  { capacity: 1000000 },
  scene
)
```

以上设置了创建了一个 1000000 个粒子的粒子系统。  
此外，如果要限制 GPU 使用量，可以使用 particleSystem.activeParticleCount 来定义活动粒子量。  
注意：GPU 粒子不支持粒子发射器。

## 停止使用 GPU 粒子系统

停止使用一个粒子系统需要使用 system.stop()，这样依然会让当前 GPU 粒子系统产生新的粒子。但是即使是不可见，粒子仍然被渲染。  
要销毁一个 GPU 粒子系统，必须调用 dispose()来销毁它。
