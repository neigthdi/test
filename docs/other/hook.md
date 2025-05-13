## 钩子
在 Babylon.js 中，除了 fragment_Before_Fog 钩子外，还有几个其他的钩子（hooks）可以用来自定义着色器代码。这些钩子允许开发者在不同的渲染阶段插入自定义代码，以实现特定的视觉效果或优化。以下是一些常见的着色器钩子：

vertex_Definitions:   
用于在顶点着色器（Vertex Shader）中插入自定义定义，如变量或函数。  

vertex:   
用于替换顶点着色器中的主体代码。  

fragment_Definitions:   
用于在片段着色器（Fragment Shader）中插入自定义定义。  

fragment:     
用于替换片段着色器中的主体代码。    

fragment_Begin:   
用于在片段着色器的开始部分插入自定义代码。   

fragment_Before_Fog:   
用于在片段着色器中，在雾效果处理之前插入自定义代码。    

fragment_Before_Lighting:   
用于在片段着色器中，在光照处理之前插入自定义代码。   

light:   
用于在片段着色器中，替换或扩展光照计算的代码。   

shadow:   
用于自定义阴影的计算方式。  

alpha:   
用于自定义透明度的处理方式。   

alphaF:
用于自定义片段着色器中透明度的最终计算。   

alphaTest:   
用于自定义alpha测试的阈值。    

pick:   
用于自定义拾取（picking）过程中的颜色编码。  

使用这些钩子时，可以在材质的 customType 属性中指定相应的代码块。例如：   
```javascript
const material = new BABYLON.StandardMaterial('material', scene);

material.customType = {
    vertex: [
        // 顶点着色器自定义代码
    ],
    fragment_Begin: [
        // 片段着色器开始部分的自定义代码
    ],
    light: [
        // 光照计算自定义代码
    ],
    // ... 其他钩子
};

```

请注意，使用自定义着色器代码需要对 GLSL ES 语言有一定的了解，并且要确保代码的正确性和性能。此外，自定义着色器可能会影响渲染性能，因此在实际应用中需要进行适当的测试和优化。

## fragment_Before_Fog

#### 案例1：

```javascript
const material = new BABYLON.StandardMaterial('material', scene);
// 添加自定义片段着色器代码
material.customFragment = `
  // 定义自定义变量或函数
  float customFunction() {
      return 1.0;
  }
  // 使用 fragment_Before_Fog 钩子
  #fragment_Before_Fog
  {
      // 在这里添加在雾效果之前执行的代码
      gl_FragColor.rgb *= customFunction();
  }
`;
// 应用材质到一个网格上
mesh.material = material;
```

#### 案例2：

```javascript
const material = new BABYLON.CustomMaterial('material', scene)
material.Fragment_Definitions(`
    #define TAU 6.28318530718
    #define MAX_ITER 5
    #define SPEED 0.3
    #define SCALE 30.0

    vec4 caustic(vec2 uv) {
        vec2 p = mod(uv*TAU, TAU)-150.0;
        float t = time * SPEED + 23.0;

        vec2 i = vec2(p);
        float c = 1.0;
        float inten = .005;

        for (int n = 0; n < MAX_ITER; n++) {
            float t = t * (1.0 - (3.5 / float(n+1)));
            i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
            c += 1.0/length(vec2(p.x / (sin(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));
        }

        c /= float(MAX_ITER);
        c = 1.17-pow(c, 1.4);
        vec3 color = vec3(pow(abs(c), 8.0));
        color = clamp(color + vec3(0.0, 0.0, 0.0), 0.0, 1.0);

        float contrast=0.0;
        color = mix(color, vec3(1.0,1.0,1.0),contrast);
        vec4 color4 = vec4(color,0.0);

        return color4;
    }
`)

material.Fragment_Before_Fog(`
    vec2 coord = vec2(fract(vPositionW.x/SCALE), fract(vPositionW.z/SCALE));
    vec4 causticColor = clamp(caustic(vDiffuseUV), 0.0, 0.5);
    color = vec4(clamp(mix(color, causticColor, 0.5), 0.0, 1.0).rgb, 1.0);
`)

material.AddUniform('time', 'float')

const startTime = new Date()

material.onBindObservable.add(function() {
    const endTime = new Date()
    const timeDiff = (endTime - startTime) / 1000.0
    material.getEffect().setFloat('time', timeDiff)
})
```

#### 案例3：

```javascript
// fragment_Before_Fog 是一个用于自定义片段着色器（Fragment Shader）的钩子（hook）
// 允许开发者在应用雾效果（fog）之前插入自定义代码
// 这个特性非常有用，因为它允许修改片段的颜色或进行其他计算，然后再应用雾效果
// 如果想要自定义片段着色器的某些部分，可以这样设置材质：
const material = new BABYLON.StandardMaterial('material', scene);
material.customType = {
    fragment: {
        fragment_Definitions: [
            // 在这里添加自定义的片段定义
            'float customValue = 1.0;'
        ],
        fragment_Before_Fog: [
            // 在这里添加在雾效果之前执行的自定义代码
            'color.rgb *= customValue;'
        ]
    }
};
```