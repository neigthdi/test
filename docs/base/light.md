# 光线

## 光的优先级的表现

自发光覆盖其它任何选项。  
环境光覆盖除自发光以外的任何选项。  
散射光、镜面光可以同时存在。  
其实所有光都是叠加表现的，这里说的“覆盖”指的都是白光的情况。

## 光的类型

### 一、点光源

点光源是有三维空间中的一个点定义的光。从这一点开始，光向每一个方向发射光线。  
点光源的一个很好的例子是灯泡。  
创建点光源需要配置：光源名称，光源位置，场景对象。

```javascript
let light1 = new BABYLON.PointLight(
  'light',
  new BABYLON.Vector3(10, 10, 10),
  scene
)
```

### 二、平衡光（定向光）

平行光是有方向的光源，所有的光线向一个统一的方向照射，并具有无限的范围。  
平衡光一个典型的例子就是太阳光。向下的光将点亮物体的顶部。  
创建平衡光需要的配置：光源名称，光源照射方向，场景对象。

```javascript
let light1 = new BABYLON.DirectionalLight(
  'DirectionalLight',
  new BABYLON.Vector3(0, -1, 0),
  scene
)
```

### 三、聚光灯

聚光灯由位置，方向，角度和指数定义。这些值定义了从位置点朝哪个方向发射聚光灯的光锥。  
角度是以弧度表示的角度，定义的聚光灯光锥的光束的大小，指数定义了光线随着照射距离衰减的速度。  
创建聚光灯光源：光源名称，光源位置，光源照射方向，照射的角度，照射指数，场景对象。

```javascript
let light1 = new BABYLON.SpotLight(
  'spotLight',
  new BABYLON.Vector3(0, 30, -10),
  new BABYLON.Vector3(0, -1, 0),
  Math.PI / 3,
  2,
  scene
)
```

### 四、半球光

半球光源是模拟周围环境光的简单方法。半球形的光是由方向定义，通常是朝向天空就是“向上”。  
可以通过设置颜色属性可以实现完整效果。  
创建半球光的配置：光源名称，光源的朝向，场景对象。

```javascript
let light1 = new BABYLON.HemisphericLight(
  'HemiLight',
  new BABYLON.Vector3(0, 1, 0),
  scene
)
```

### 五、区域光源
RectAreaLight 是一种特殊的光源类型，用于模拟真实世界中的区域光源     
它与传统的点光源（PointLight）、方向光源（DirectionalLight）和聚光灯（SpotLight）不同，RectAreaLight 可以模拟一个具有面积的光源，从而产生更自然的光照效果    
作用。

#### 作用    
&emsp;&emsp;1、模拟真实光源：     
&emsp;&emsp;&emsp;&emsp;RectAreaLight 可以模拟真实世界中的光源，例如：     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;一盏灯（如台灯、吊灯）。   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;一扇窗户（自然光通过窗户照射进来）。    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;一个发光的平面（如广告牌、LED屏幕）。    
&emsp;&emsp;&emsp;&emsp;这种光源的光线是从一个区域（而不是一个点）发出的，因此可以产生更柔和的阴影和更自然的光照效果。    
&emsp;&emsp;2、改善光照质量：    
&emsp;&emsp;&emsp;&emsp;与传统的点光源相比，RectAreaLight 可以减少阴影的硬边，使阴影更加柔和，它可以更好地模拟环境光，使场景看起来更加真实。    
&emsp;&emsp;3、支持多种形状：     
&emsp;&emsp;&emsp;&emsp;RectAreaLight 支持多种形状，如矩形、圆形等，可以根据需要选择合适的形状来模拟不同的光源。    


#### 使用场景     
&emsp;&emsp;1、室内场景：     
&emsp;&emsp;&emsp;&emsp;（1）：模拟窗户光：在室内场景中，可以通过 RectAreaLight 模拟窗户的光线。例如，设置一个矩形的 RectAreaLight，使其方向指向室内，模拟自然光通过窗户照射进来的效果。     
&emsp;&emsp;&emsp;&emsp;（2）：模拟室内灯具：如吊灯、台灯等。通过设置光源的形状和位置，可以模拟这些灯具发出的光线 。    
&emsp;&emsp;2、建筑可视化：     
&emsp;&emsp;&emsp;&emsp;（1）：在建筑可视化中，RectAreaLight 可以用来模拟建筑内部的照明系统。例如，模拟走廊中的灯光、会议室的吊灯等。     
&emsp;&emsp;&emsp;&emsp;（2）：模拟建筑外部的灯光，如广告牌、路灯等。     
&emsp;&emsp;3、游戏开发：     
&emsp;&emsp;&emsp;&emsp;（1）：环境光模拟：在游戏场景中，使用 RectAreaLight 可以模拟环境光，使场景更加真实。例如，模拟森林中的阳光透过树叶的效果。     
&emsp;&emsp;&emsp;&emsp;（2）：动态光源：可以将 RectAreaLight 与动态对象结合，例如，模拟一个移动的光源（如手电筒）。     
&emsp;&emsp;4、艺术和动画：     
&emsp;&emsp;&emsp;&emsp;（1）：在艺术作品和动画中，RectAreaLight 可以用来创造特定的氛围和效果。例如，模拟舞台灯光、特效灯光等。     
&emsp;&emsp;&emsp;&emsp;（2）：可以通过调整光源的形状和颜色，实现创意的光照效果。     

```javascript
// 创建环境光（避免完全黑暗）
const ambientLight = new BABYLON.HemisphericLight(
  'ambientLight',
  new BABYLON.Vector3(1, 1, 0),
  scene
)
ambientLight.intensity = 0.3

// 创建区域光（模拟荧光灯）
const areaLight = new BABYLON.RectAreaLight(
  'areaLight', // 名称
  new BABYLON.Vector3(0, 0, 0), // 位置
  5, // width
  1, // height
  scene
)
areaLight.diffuse = new BABYLON.Color3(1, 1, 1) // 漫反射颜色（白色）
areaLight.intensity = 1.5 // 光照强度

const ground = BABYLON.MeshBuilder.CreateGround(
  'ground', {
    width: 10,
    height: 10
  },
  scene
)
const groundMaterial = new BABYLON.StandardMaterial('groundMat', scene)
groundMaterial.diffuseColor = new BABYLON.Color3(0.3, 1, 1)
ground.material = groundMaterial

// 创建一个受光物体（球体）
const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
  diameter: 1
}, scene)
sphere.position.y = 1
sphere.position.x = 0

const sphereMaterial = new BABYLON.StandardMaterial('sphereMat', scene)
sphereMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.2, 0.2) // 红色球体
sphereMaterial.specularPower = 64 // 高光强度
sphere.material = sphereMaterial

// const pbrMaterial = new BABYLON.PBRMaterial('pbrMat', scene)
// pbrMaterial.baseColor = new BABYLON.Color3(0.8, 0.8, 0.8) // 金属颜色
// pbrMaterial.metallic = 1.0 // 金属度
// pbrMaterial.roughness = 0.1 // 粗糙度
// sphere.material = pbrMaterial
```

## 光的颜色属性

光源有三个属性会影响到颜色。其中有两个属性 diffuse(漫反射)和 specular(镜面反射)适用于所有的四种光源，而第三种 groundColor(地面反射)仅适用于半球光

```javascript
// 设置灯光的颜色，赤橙黄绿青蓝紫
light.diffuse = new BABYLON.Color3(1, 0, 0)
// 镜面光是指高亮反光位置的颜色表现，经常会在玻璃上看到镜面光。
light.specular = new BABYLON.Color3(0, 1, 0)
// 只有环境光有groundColor，代表地上反射光的颜色
light.groundColor = new BABYLON.Color3(0, 1, 0)
```

## 开启，关闭或者调整强度

每个光都可以使用 setEnabled 方法传入 false，禁掉光的使用，或者，传入 true 来开启使用

```javascript
light.setEnabled(false / true)
```

通过调整 intensity 属性调整光的亮度，默认值为 1：

```javascript
light0.intensity = 0.5
light1.intensity = 2.4
```

对于点光源和聚光灯光源，还可以调整 range 属性来设置光的照射范围

```javascript
light.range = 100
```

## 设置选择照亮的模型

### 创建光源时，默认是所有的网格都会被它点亮。有两种方式可以排除某些网格被点亮。

1、可以将不需要照亮的模型添加到 light.excludedMeshes 数组中，光源将影响除了数组内的其它所有模型。  
2、可以将不要排除掉的网格添加到 light.includedOnlyMeshes 数组中，光源将只会影响到数组内的模型。  
两种方式具体使用哪种是通过模型的数量决定的。如果照亮的比排除的较少，推荐第二种，如果照亮的比排除掉的多，推荐第一种。

```javascript
// 设置作用物体
light.includedOnlyMeshes = [sphere1]
// 设置排除物体
light.excludedMeshes = [sphere1]
```
