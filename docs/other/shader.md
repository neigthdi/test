着色器材质提供材料作为输出。可以将此材质应用于任何网格。它基本上将数据从场景传递到顶点和片段着色器。  
要获取着色器材质，下面的类称为:

```javascript
var myShaderMaterial = new BABYLON.ShaderMaterial(name, scene, route, options)
```

```javascript
// 名称 : 一个字符串，命名着色器。
// 场景 : 要使用着色器的场景。
// 路线 : 以三种方式之一的着色器代码的路径 :
object - {
   vertex: "custom",
   fragment: "custom"
}, used with
BABYLON.Effect.ShadersStore["customVertexShader"] and
BABYLON.Effect.ShadersStore["customFragmentShader"]
// --------------------------------------------
object - {
   vertexElement: "vertexShaderCode",
   fragmentElement: "fragmentShaderCode"
},
used with shader code in <script> tags
// --------------------------------------------
string - "./COMMON_NAME",

// 选项 : 包含属性和制服数组的对象，其名称为字符串。
```

## 一般用到的创建着色器程序的两种方法

### 方法一

```javascript
// 注意名字的拼写
// ShadersStore的xxxVertexShader，那么ShaderMaterial的vertex就是叫xxx
// ShadersStore的kxkaFragmentShader，那么ShaderMaterial的fragment就是叫kxka
BABYLON.Effect.ShadersStore['xxxVertexShader'] = `
  precision highp float;
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 worldViewProjection;
  varying vec2 vUV;
  void main(void) {
    gl_Position = worldViewProjection * vec4(position, 1.0);
    vUV = uv;
  }`

BABYLON.Effect.ShadersStore['customssFragmentShader'] = `
  precision highp float;
  varying vec2 vUV;
  uniform sampler2D textureSampler;
  void main(void) {
    gl_FragColor = texture2D(textureSampler, vUV);
  }`

//----------------------------------------------------------------------
// attributes: ["position", "normal", "uv"]
// position   ---> 位置
// normal     ---> 法线
// uv         ---> uv（因为xy被占用了，所以用uv表示xy）
// projection ---> 投影
var shaderMaterial = new BABYLON.ShaderMaterial(
  'shader',
  scene,
  {
    vertex: 'xxx',
    fragment: 'customss'
  },
  {
    attributes: ['position', 'normal', 'uv'],
    uniforms: [
      'world',
      'worldView',
      'worldViewProjection',
      'view',
      'projection'
    ]
  }
)

var mainTexture = new BABYLON.Texture('amiga.jpg', scene)
shaderMaterial.setTexture('textureSampler', mainTexture)
```

### 方法二

```javascript
var shaderMat = new BABYLON.ShaderMaterial(
  'cloud',
  scene,
  {
    vertexElement: 'simpleColor',
    fragmentElement: 'simpleColor'
  },
  {
    attributes: ['position', 'normal', 'uv', 'customColor', 'myfloat'],
    uniforms: ['world', 'viewProjection'],
    needAlphaBlending: true
  }
)
```

## 使用自定义的 attribute 传入着色器

```javascript
let material = new BABYLON.ShaderMaterial('particle', scene, './js/particle', {
  uniforms: [
    'worldViewProjection',
    'uTime',
    'uTranslation',
    'axis',
    'alpha',
    /*"resolution",*/ 'pointSize',
    'baseColor',
    /*"rebuilding",*/ 'status',
    'scatter',
    'uvMode',
    'mobile'
  ],
  attributes: ['position', 'uv', 'aRotation', 'aAnimation', 'raxis'],
  needAlphaBlending: true //通过material.alphaMode = true/false 来设置混合模式
})
material.fillMode = 2
material.setFloat('uTime', 0)
material.setVector3('uTranslation', new BABYLON.Vector3(0, 500, 0))
material.setVector3('axis', new BABYLON.Vector3(0, 1, 0))
material.setColor3('baseColor', new BABYLON.Color3(1, 1, 1))
material.setFloat('status', 0.5)
material.setFloat('scatter', 0)
material.setFloat('uvMode', 0)
```

## 传参方法

```javascript
// setTexture
// setFloat
// setFloats
// setColor3
// setColor4
// setVector2
// setVector3
// setVector4
// setMatrix

// attributes:
mesh.setVerticesBuffer(
  new BABYLON.VertexBuffer(engine, aRotation, 'aRotation', true, false, 2)
)
```

## BABYLON 默认传入的参数

### 自动传入的 attribute 变量

```javascript
position
normal
uv
uv2
```

### 自动传入的 uniform 变量

```javascript
world
view
projection
worldView
worldViewProjection
cameraPosition
```
