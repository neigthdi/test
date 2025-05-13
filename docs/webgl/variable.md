### 何时在顶点着色器写逻辑    
顶点着色器主要负责处理每个顶点的数据，包括顶点的位置、颜色、纹理坐标等。以下情况适合在顶点着色器中写逻辑：     
1、顶点变换：顶点着色器需要执行模型变换、视图变换和投影变换，将顶点从模型空间变换到裁剪空间。   
2、顶点光照：如果需要逐顶点光照计算，可以在顶点着色器中实现。不过，逐顶点光照通常用于简化光照模型，以节省计算量。     
3、纹理坐标处理：顶点着色器可以传递或修改纹理坐标，以便在片元着色器中使用。   
 
### 何时在片元着色器写逻辑   
片元着色器负责处理光栅化阶段产生的每个片元的数据，计算片元的最终颜色。以下情况适合在片元着色器中写逻辑：     
1、逐片元光照：对于更精确的光照计算，如逐片元光照模型，需要在片元着色器中实现。  
2、纹理采样：片元着色器根据纹理坐标和采样器对纹理进行采样，获取纹理颜色。   
3、颜色混合：片元着色器可以执行颜色混合操作，将计算出的颜色与帧缓冲区中对应位置的颜色进行混合。   
   
## attribute 

(数据传递)javascript 语言传给——>顶点着色器  
(声明变量)声明顶点数据变量

### 作用

attribute 关键字通常用来声明与顶点数据相关的变量，比如顶点位置坐标数据、顶点颜色数据、顶点法向量数据，等等。

顶点着色器中通过 attribute 关键字声明的顶点变量，javascript 代码可以通过相关的 WebGL API 把顶点的数据传递给着色器中相应的顶点变量。

因为 javascript 没必要给片元着色器传递顶点数据，所以规定 attribute 关键字只能在顶点着色器中声明变量使用。只要注意 attribute 关键字声明顶点变量代码位于主函数 main 之外就可以。

```javascript
// attribute声明顶点位置变量
attribute vec4 position;
// attribute声明顶点颜色变量
attribute vec4 a_color;
// attribute声明顶点法向量
attribute vec4 normal;
// 与顶点相关的浮点数
attribute float scale;
```

同一个顶点着色器通常需要处理是一批顶点数据，一个顶点可能会有多种数据，比如顶点位置、颜色、法向量，还有其它自定义的，比如 attribute float scale;，声明了一个 scale 变量。

```javascript
// attribute声明顶点位置变量
attribute vec4 position;
// 与顶点相关的浮点数
attribute float scale;
void main() {
  // 每个顶点的x坐标乘以该顶点对应的一个系数scale
  gl_Position = vec4(position.x*scale,position.y,position.z,1.0);
}
```

## uniform

(数据传递)javascript 语言传给——>顶点、片元着色器  
(声明变量)声明非顶点数据变量

### 作用

uniform 关键字出现的目的就是为了 javascript 可以通过相关的 WebGL API 给着色器变量传递数据，比如传递一个光源的位置数据、一个光源的方向数据、一个光源的颜色数据、一个用于顶点变换的模型矩阵、一个用于顶点变换的视图矩阵，等等。

不过要注意如果是顶点相关的变量，比如顶点位置、顶点颜色等顶点数据相关变量不能使用关键字 uniform 去声明，主要是顶点的数据往往不是一个，通常有很多个顶点，而且这些顶点都要逐顶点执行 main 函数中的程序，所以为了声明顶点数据相关的变量，着色器语言规定了一个新的关键字 attribute。

javascript 可以给顶点着色器的变量传递数据，也可以给片元着色器的变量传递数据，也就是说 uniform 关键字既可以在顶点着色器中使用，也可以在片元着色器中使用。只要注意 uniform 关键字声明变量需要在主函数 main 之前声明。

```javascript
uniform mat4 worldViewProjection;
uniform sampler2D textureSampler;
```

## varying

(数据传递)顶点着色器传给——>片元着色器  
(声明变量)声明需要插值计算的顶点变量

### 作用

attribute vec4 a_color;在顶点着色器中声明了一个顶点颜色变量，如果想在片元着色器中获得顶点颜色插值计算以后的数据，需要同时在顶点着色器和片元着色器中执行 varying vec4 v_color;，也就是在顶点、片元两个着色器代码中都需要通过关键字 varying 声明一个新变量 v_color,最后再顶点着色器中执行 v_color = a_color;即可  
顶点着色器

```javascript
attribute vec4 a_color;// attribute声明顶点颜色变量
varying vec4 v_color;//varying声明顶点颜色插值后变量
void main() {
  //顶点颜色插值计算
  v_color = a_color;
}
```

片元着色器

```javascript
// 接收顶点着色器中v_color数据
varying vec4 v_color;
void main() {
  // 插值后颜色数据赋值给对应的片元
  gl_FragColor = v_color;
}
```

varying 类型变量主要是为了完成顶点着色器和片元着色器之间的数据传递和插值计算。比如在一个 WebGL 程序中通过三个顶点绘制一个彩色三角形，三个顶点的位置坐标定义了一个三角形区域，这个三角形区域经过片元着色器处理后会得到由一个个片元或者说像素组成的三角形区域，在片元化的过程中，顶点的颜色数据也会进行插值计算，插值计算之前每个顶点对应一个颜色，插值计算之后，每个片元对应一个颜色值，通过 varying 关键字就可以在片元着色器中获得插值后的颜色数据，然后赋值给片元。

```javascript
<!-- 顶点着色器源码 -->
<script id='vertexShader' type='x-shader/x-vertex'>
  //attribute声明vec4类型变量apos
  attribute vec4 apos;
  // attribute声明顶点颜色变量
  attribute vec4 a_color;
  //varying声明顶点颜色插值后变量
  varying vec4 v_color;
  void main() {
    // 顶点坐标apos赋值给内置变量gl_Position
    gl_Position = apos;
    //顶点颜色插值计算
    v_color = a_color;
  }

</script>
<!-- 片元着色器源码 -->
<script id='fragmentShader' type='x-shader/x-fragment'>
  // 所有float类型数据的精度是lowp
  precision lowp float;
  // 接收顶点着色器中v_color数据
  varying vec4 v_color;
  void main() {
    // 插值后颜色数据赋值给对应的片元
    gl_FragColor = v_color;
  }

</script>
```

## gl\_

gl_PointSize：在点渲染模式中，控制方形点区域渲染像素大小（注意这里是像素大小，而不是 three.js 单位，因此在移动相机是，所看到该点在屏幕中的大小不变）  
gl_Position：控制顶点的位置  
gl_FragColor：片元的 RGB 颜色值  
gl_FragCoord：片元的坐标，同样是以像素为单位  
gl_PointCoord：在点渲染模式中，对应方形像素坐标

## 内置的Attributes
position (类型: vec3 或 vec4)：顶点的位置。     
normal (类型: vec3)：顶点的法线。     
uv (类型: vec2 或 vec3 或 vec4)：顶点的纹理坐标。     
color (类型: vec4)：顶点的颜色，如果启用了颜色。     
tangent (类型: vec3)：顶点的切线，用于法线贴图等高级效果。     

## 内置的Uniforms
world (类型: mat4)：模型矩阵，表示网格的全局变换状态（移动、旋转、缩放）。      
worldView (类型: mat4)：模型视图矩阵，是模型矩阵和视图矩阵的乘积。      
worldViewProjection (类型: mat4)：模型视图投影矩阵，用于将顶点从模型空间转换到裁剪空间。      
view (类型: mat4)：视图矩阵，表示相机的位置和朝向。      
projection (类型: mat4)：投影矩阵，用于将裁剪空间的坐标转换为屏幕空间的坐标。      
viewProjection (类型: mat4)：视图投影矩阵，是视图矩阵和投影矩阵的乘积。      
worldInverse (类型: mat4)：世界矩阵的逆矩阵。      
worldViewInverse (类型: mat4)：模型视图矩阵的逆矩阵。      
worldViewProjectionInverse (类型: mat4)：模型视图投影矩阵的逆矩阵。      
viewInverse (类型: mat4)：视图矩阵的逆矩阵。      
projectionInverse (类型: mat4)：投影矩阵的逆矩阵。      
viewProjectionInverse (类型: mat4)：视图投影矩阵的逆矩阵。      
time (类型: float)：每帧的时间，用于动画和动态效果。      
cameraPosition (类型: vec3)：相机在世界空间中的位置。       