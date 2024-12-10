#### ModelMatrix（模型矩阵）、ModelViewMatrix（模型视图矩阵）、ProjectionMatrix（投影矩阵）、NormalMatrix（正规矩阵）

position 是顶点在物体坐标系（而不是世界坐标系）中的位置  
意味着，一个正方体位于世界坐标系的(2, 0, 0)与位于(0, 0, 0)将不会改变任何顶点的 position  
position 是相对于正方体的锚点而言的  
因此，顶点着色器的作用就是将 uv 信息传递到片元着色器中，并按默认的方式计算顶点位置

```javascript
gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0)
```

```javascript
precision highp float;
varying vec3 fPosition;
varying vec2 vUv;

void main() {
  vec4 pos = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * pos;

  fPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vUv = uv;
}
```

```javascript
precision highp float;
uniform float time;
varying vec3 fPosition;
varying vec2 vUv;
uniform float interval;

void d_color() {
  float dataY = fPosition.y;
  float dataI = interval;
  if (dataY <= -dataI) {
    // 蓝色-蓝绿
    // 0,0,1 -> 0,1,1
    gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
  } else if (dataY > -dataI && dataY <= 0.0) {
    float g = 1.0 - (-dataY / dataI);
    gl_FragColor = vec4(0.0, g, 1.0, 1.0);
  } else if (dataY > 0.0 && dataY <= dataI) {
    // 蓝绿-绿
    // 0,1,1 -> 0,1,0
    float g = 1.0 - dataY / dataI;
    gl_FragColor = vec4(0.0, 1.0, g, 1.0);
  } else if (dataY > dataI && dataY <= 2.0 * dataI) {
    // 绿-浅绿
    // 0,1,0 -> 0.5,1,0
    float r = 0.5 * ((dataY - dataI) / dataI);
    gl_FragColor = vec4(r, 1.0, 0.0, 1.0);
  } else if (dataY > 2.0 * dataI && dataY <= 3.0 * dataI) {
    // 浅绿-黄
    // 0.5,1,0 -> 1,1,0
    float r = 0.5 + ((dataY - 2.0 * dataI) / dataI) * 0.5;
    gl_FragColor = vec4(r, 1.0, 0.0, 1.0);
  } else if (dataY > 3.0 * dataI && dataY <= 4.0 * dataI) {
    // 黄-土黄
    // 1,1,0 -> 1,0.76,0
    float g = 1.0 - ((dataY - 3.0 * dataI) / dataI) * (1.0 - 0.76);
    gl_FragColor = vec4(1.0, g, 0.0, 1.0);
  } else if (dataY > 4.0 * dataI && dataY <= 5.0 * dataI) {
    // 土黄-橙
    // 1,0.76,0 -> 1,0.58,0
    float g = 0.76 - ((dataY -  4.0 * dataI) / dataI) * (0.76 - 0.58);
    gl_FragColor = vec4(1.0, g, 0.0, 1.0);
  } else if (dataY > 5.0 * dataI && dataY <= 6.0 * dataI) {
    // 橙-红
    // 1,0.58,0 -> 1,0,0
    float g = 0.58 - ((dataY - 5.0 * dataI) / dataI) * 0.58;
    gl_FragColor = vec4(1.0, g, 0.0, 1.0);
  } else {
    // 红
    // 1.0,0.0,0.0
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
}
void main() {
  d_color();
}
```
