## 材质对光的反应

可以将设置颜色和纹理材质应用到网格上面，并且需要有光源才能显示出来。一种材质可以用于任意数量的模型网格。  
通过不同的方法设置材质的颜色和纹理，会出现不同的反应。  
1、Diffuse - 漫反射 - 在光下面观察到的材质的基本颜色或者纹理  
2、Specular - 高光 - 光线给材质的高亮点  
3、Emissive - 自发光 - 材质的颜色和纹理，自身的亮光  
4、Ambient - 环境 - 由环境背景照明点亮的材质的颜色或纹理

### 注意：

漫反射和高光的设置需要场景内有光源才可显示出效果。  
设置环境颜色或者环境纹理时，需要首先给场景设置环境颜色。

```javascript
scene.ambientColor = new BABYLON.Color3(1, 1, 1)
```

使用 diffuseColor，specularColor，emissiveColor 和 ambientColor 中的一个或多个设置材质颜色。注意，ambientColor 只有才场景设置了环境颜色才有效果。

```javascript
let myMaterial = new BABYLON.StandardMaterial('myMaterial', scene)
myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1)
myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87)
myMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1)
myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53)
mesh.material = myMaterial
```

### 设置透明材质

```javascript
myMaterial.alpha = 0.5
```

## 设置纹理

可以在材质上面使用图片设置纹理。

```javascript
// 首先创建一个材质
let myMaterial = new BABYLON.StandardMaterial('myMaterial', scene)
// 通过设置diffuseTexture，specularTexture，emissiveTexture和ambientTexture中的一个或多个属性设置相关纹理。同样，ambientTexture也只在设置场景环境色时有效。
let myMaterial = new BABYLON.StandardMaterial('myMaterial', scene)
myMaterial.diffuseTexture = new BABYLON.Texture('图片路径', scene)
myMaterial.specularTexture = new BABYLON.Texture('图片路径', scene)
myMaterial.emissiveTexture = new BABYLON.Texture('图片路径', scene)
myMaterial.ambientTexture = new BABYLON.Texture('图片路径', scene)
mesh.material = myMaterial
```

### 动态纹理

书写文字的参数：  
参数 1、text：字符串，要写入的单词。  
参数 2、x：数字，距左侧边缘的距离。  
参数 3、y：数字，与顶部或底部边缘的距离，取决于 invertY。  
参数 4、font：字符串，字体定义形式为 font-style、font-size、font_name。  
参数 5、invertY：布尔值，默认为 true，此时 y 是到顶部的距离，当为 false 时，y 是到底部的距离并且字母反转。  
参数 6、update：布尔值，默认为 true，动态纹理会立即更新。

```javascript
let dynaicTexture = new BABYLON.DynamicTexture(
  'test',
  { width: 100, height: 100 },
  scene
)
dynaicTexture.drawText(
  'someting',
  50,
  50,
  'Times New Roman',
  'green',
  'red',
  true,
  true
)

sphereMaterial.diffuseTexture = dynaicTexture
sphere.material = sphereMaterial
```

### 通过动态纹理获取画布对象

```javascript
let dynaicTexture = new BABYLON.DynamicTexture(
  'test',
  { width: 100, height: 100 },
  scene
)
dynaicTexture.drawText(
  'someting',
  50,
  50,
  'Times New Roman',
  'green',
  'white',
  true,
  true
)
sphereMaterial.diffuseTexture = dynaicTexture
// sphere.material=sphereMaterial
// 获取画布对象
let ctx = dynaicTexture.getContext()
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(100, 100)
ctx.lineTo(50, 100)
ctx.lineTo(50, 50)
ctx.fillStyle = 'red'
ctx.fill()
ctx.stroke()
// 更新纹理
dynaicTexture.update()
```

### 通过动态纹理加载图像

```javascript
let dynaicTexture = new BABYLON.DynamicTexture(
  'test',
  { width: 100, height: 100 },
  scene
)

sphereMaterial.diffuseTexture = dynaicTexture
//sphere.material=sphereMaterial
//获取画布对象
let ctx = dynaicTexture.getContext()

let img = new Image()
img.src = '../img/10.png'
//注意此处不能使用箭头函数
img.onload = function () {
  // ctx.drawImage(this, img_start_x, img_start_y,img_w, img_h, can_x, can_y, destination_w, destination_h);
  ctx.drawImage(this, 0, 0, 1000, 1000, 0, 0, 100, 100)
  dynaicTexture.update()
}
```

### 设置透明纹理

对于颜色材质，通过设置 alpha 属性的值来设置透明度。  
如果图片是有透明度的纹理，比如使用了一张具有透明区域的 png 的图片。如果只是想让它透明的区域显示透明，这种情况下，需要将纹理的 hasAlpha 属性设置为 true。

```javascript
myMaterial.diffuseTexture.hasAlpha = true
```

### 背景剔除

在正常渲染时，通常不会绘制物体的背面，因为它在正常情况下会被证明遮挡。但是如果当使用的是透明纹理时，并且将图片透明，将能够透明场景的证明查看到背面，但是背面是默认剔除掉了，所以无法查看到。  
如果需要查看到背部，需要将 backFaceCulling 属性设置为 false，即禁止掉背景剔除。

```javascript
myMaterial.backFaceCulling = false
```

### 显示线框

可以通过设置材质的 wireframe 属性来查看当前模型网格的线框。

```javascript
materialSphere1.wireframe = true
```
