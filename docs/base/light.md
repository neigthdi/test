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

## 光的颜色属性

光源有三个属性会影响到颜色。其中有两个属性 diffuse(漫反射)和 specular(镜面反射)适用于所有的四种光源，而第三种 groundColor(地面反射)仅适用于半球光。

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
