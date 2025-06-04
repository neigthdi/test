## Vec

### Vec2

可以用于保存 2D 纹理坐标。

### Vec3

是一个三维浮点数数组。

### Vec4

用于保存颜色数据。  
gl_Position 是用 vec4，因为是齐次坐标。

## 取样器

### sampler2D

WebGL 在处理图片纹理编写片元着色器的时候，会通过 sampler2D 关键字声明一个纹理相关的变量，sampler2D 和 vec2、float 表示一种数据类型，只不过 sampler2D 关键字声明的变量表示一种取样器类型变量，简单点说就是该变量对应纹理图片的像素数据。

```javascript
uniform sampler2D u_Sampler;
```

## 向量相关信息

向量类型的变量互相转换，比如 viewLight 是一个 vec4 类型，如果将它前三个维度给一个 vec3 类型，就可以写成：viewLight.xyz。  
同时，打乱顺序也是可以的，也就是说，viewLight.zx 能将第三个维度和第一个维度赋值给一个 vec2 类型。
