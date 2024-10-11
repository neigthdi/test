## 公式

![image](./img/coordinateSystem.png)
![image](./img/formula.png)
又称为 MVP 矩阵  
从逻辑上来说，是先把模型点坐标向量乘以模型矩阵，然后乘以视图矩阵，然后乘以投影矩阵，然后乘以视口矩阵的。所以顺序的确是 MVP。

```javascript
            model        world      view        view      projection  projection   viewport
模型坐标---(模型变换)--->世界坐标---(视图变换)--->视图坐标--->(投影变换)--->投影坐标---(视口变换)--->视口坐标

                       projection   view   modelMatrix   position
变换后的坐标 = 视口矩阵 x 投影矩阵 x 视图矩阵 x 模型矩阵 x 模型点坐标向量
mvp

模型视图矩阵-------->由于矩阵结合律，view和model可以先相乘后，再乘以模型点坐标向量，称为model-view矩阵
```

#### 一个物体的三维坐标向量(position)，乘以模型视图矩阵(modelView)后，能够得到它在视图坐标系中的位置，也就是它相对于摄像机的坐标位置。

#### ----------------------------------------------------------------------------------------------

#### 以下这个是获取到 xyz 的位置

```javascript
v_position = vec3(modelMatrix * vec4(position, 1.0))
f_position = (modelMatrix * vec4(position, 1.0)).xyz
```

## 如何进行光照计算

1、将光源位置（这是通过参数传入的）乘以模型视图矩阵（这是着色器提供给的），就能得到光源相对于摄像机的位置；  
2、将这一位置归一化（就是计算单位向量），得到光源相对于摄像机的角度；  
3、将其点乘单位法向量，得到亮度值（两个向量点乘的意思是，获得一个向量在另一个向量上的投影，所以，这里得到的是光源在法向量方向的投影长度，它决定了一个点有多亮）。

#### 注意：点乘（点积）、叉乘（叉积），二者不一样

---

#### 顶着色器：

```javascript
uniform vec3 color;
uniform vec3 light;

varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vLight;

void main()
{
  // pass to fs
  vColor = color;
  // normalize: 归一化方法
  // 法向矩阵乘以法向量，并将其归一化后，传递给 vNormal。
  // 这是为了将物体坐标系下的法向量方向，转变成视图坐标系下的法向量方向。
  // 但是不能和光源位置 light 一样乘以 modelViewMatrix。
  // 虽然都是三维向量，但法向量表示的是一个方向，而光源位置表示的是一个坐标。
  // 如果用法向量乘以 modelViewMatrix 的话，得到的结果就可能不再垂直于面片了。
  vNormal = normalize(normalMatrix * normal);

  // viewMatrix: 视图矩阵
  // 使用光源位置乘以视图矩阵，得到光源在视图坐标系下的位置，传递给 vLight
  vec4 viewLight = viewMatrix * vec4(light, 1.0);
  vLight = viewLight.xyz;
  // projectionMatrix: 投影矩阵
  // modelViewMatrix: 模型视图矩阵，相当于视图矩阵 x 模型矩阵
  // position: 模型点坐标向量
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

#### 片着色器：

```javascript
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vLight;

// 这个 main 函数会被每个片元执行一次，并且是在 GPU 中并行执行的。
void main() {
  // 根据把归一化后的光源方向，和法向量进行点乘，计算每个片元的亮度值。
  float diffuse = dot(normalize(vLight), vNormal);

  // 根据亮度值，分别阶梯式地映射到新的亮度值，得到的 diffuse 是一个 0 到 1 之间的值。
  if (diffuse > 0.8) {
      diffuse = 1.0;
  }
  else if (diffuse > 0.5) {
      diffuse = 0.6;
  }
  else if (diffuse > 0.2) {
      diffuse = 0.4;
  }
  else {
      diffuse = 0.2;
  }

  // 基础颜色的 RGB 通道分别乘以阶梯式的亮度值，得到每个片元的颜色。
  // 并复制给 gl_FragColor 作为片元的颜色输出。
  gl_FragColor = vec4(vColor * diffuse, 1.0);
}
```

```javascript
var material = new THREE.ShaderMaterial({
  vertexShader: ...,  // 可以通过 AJAX 加载 *.vs 代码，内容传给这个变量
  fragmentShader: ...,
  uniforms: {
      color: {        // 苹果的基础色
          type: 'v3', // 指定变量类型为三维向量
          value: new THREE.Color('#60371b')
      },
      light: {
          type: 'v3',
          value: keyLight.position
      }
  }
});
mesh.material = material;
```
