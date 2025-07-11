## abs

float abs(float x) 返回 x 的无符号绝对值，即如果 x 大于 0 则返回 x，否则返回-x。

## bool all(bvec x)

如果向量 x 的所有组件均为 true，则结果返回 true。

## bool any(bvec x)

如果向量 x 的任何组件为 true，则结果返回 true。

## bvec not(bvec x)

返回向量 x 的互补矩阵。

## ceil

float ceil(float x) 返回大于等于 x 并且最接近 x 的整数，就是向上取整。

## clamp

float clamp(float x, float minVal, float maxVal) 将 x 限制在 minVal 和 maxVal 之间。
```javascript
#version 330 core  
out vec4 FragColor;  
void main() {  
  float x = -1.0; // 输入值  
  float minVal = 0.0; // 最小值  
  float maxVal = 1.0; // 最大值  
  float clampedX = clamp(x, minVal, maxVal); // 将 x 限制在 0.0 和 1.0 之间  
  // 假设要将 clampedX 用作红色分量，绿色和蓝色分量设为 0，透明度设为 1  
  FragColor = vec4(clampedX, 0.0, 0.0, 1.0);  
}
```

## cross

vec3 cross(vec3 x, vec3 y)  
值得注意的是此函数只允许输入的变量为两个 vec3 类型，并且会返回一个 vec3 类型的值，该向量是 x 和 y 的叉积结果。   
叉积的结果是一个向量，该向量垂直于 x 和 y 所在的平面，且其方向遵循右手定则（即，如果将右手的四指从 x 向量旋转到 y 向量，那么大拇指所指的方向就是叉积向量的方向）。    
第一个参数 a(x0, x1, x2)，第二个参数 b(y0, y1, y2)  
result[0]=x[1]*y[2]-y[1]*x[2]  
result[1]=x[2]*y[0]-y[2]*x[0]  
result[2]=x[0]*y[1]-y[0]*x[1]  
***

<font color=orange>右手坐标系：</font>在右手坐标系中，使用右手定则来确定叉积的方向。如果你用右手的食指指向 a 的方向<font color=red>（y轴正方向，向上）</font>，中指指向 b 的方向<font color=red>（z轴正方向，向后）</font>，那么大拇指指向的方向就是 a×b 的方向<font color=red>（x轴正方向，向右）</font>。 
***

<font color=orange>左手坐标系：</font>在左手坐标系中，使用左手定则来确定叉积的方向。如果你用左手的食指指向 a 的方向<font color=red>（y轴正方向，向上）</font>，中指指向 b 的方向<font color=red>（z轴正方向，向前）</font>，那么大拇指指向的方向就是 a×b 的方向<font color=red>（x轴正方向，向右）</font>。       
***

应用场景：   
cross 函数在图形学和物理计算中有多种应用场景，包括但不限于：   
1、表面法线计算：在三维建模和渲染中，经常需要计算表面的法线向量。对于由三角形网格组成的模型，可以通过计算三角形两个边的叉积来获取顶点的法线向量（通常需要对相邻三角形的法线进行平均或采用其他平滑技术）。   
2、物理模拟：在物理模拟中，叉积可以用于计算力矩（Torque），力矩是力和力的转动半径的叉积，它描述了力如何使物体围绕某个点旋转。    
3、模长与面积：叉乘结果的模长（长度）等于 x 和 y 构成的平行四边形的面积。这在三维图形学中非常有用，比如计算三角形面积或检测两个向量是否平行。   
4、方向判断：叉乘还可以用于判断两个向量的相对方向。例如，在光照和阴影计算中，可以利用叉乘来判断表面法线（Normal）与光源方向（Light Direction）之间的相对位置，确定光线方向与表面法线之间的角度，从而确定光照效果。   
***

注意事项：  
1、cross 函数只适用于三维向量。    
2、叉积的结果向量垂直于原始的两个向量所在的平面，但如果将其中一个向量乘以一个标量（除了 -1 或 1），叉积的结果向量将保持相同的方向但长度会发生变化。   
3、叉积的结果向量的长度（即模长）等于原始两个向量构成的平行四边形的面积。     
```javascript
#version 330 core  
out vec4 FragColor;  
void main() {  
  vec3 vecA = vec3(1.0, 0.0, 0.0); // X 轴单位向量  
  vec3 vecB = vec3(0.0, 1.0, 0.0); // Y 轴单位向量  
  vec3 crossResult = cross(vecA, vecB); // 计算叉积  
  // 叉积结果应为 Z 轴单位向量 (0.0, 0.0, 1.0)，因为 X 轴和 Y 轴的叉积是 Z 轴  
  FragColor = vec4(crossResult, 1.0); // 将叉积结果作为颜色输出（这里仅作示例，实际上颜色值会被归一化到 [0,1] 范围内）  
}
```

## distance

float distance(vecType p0, vecType p1);        
参数 p0 和 p1 是两个相同类型的向量（如 vec2、vec3 或 vec4）。       
返回值是一个 float 类型，表示两个点之间的距离。         
对于二维点 vec2(x0, y0) 和 vec2(x1, y1)，距离为：    
distance = ((x1 - x0)^2 + (y1 - y0)^2)^(1/2)
***

<font color=red>注意：distance 必须两个参数。length 可以一个参数（距离原点的距离），也可以两个参数。</font>        
***

在图形渲染中，distance 函数可以用于多种场景，如：  
1、碰撞检测：通过计算物体间的距离来判断它们是否发生了碰撞。  
2、光照计算：在光照模型中，计算光源与物体表面点之间的距离，以决定光照的强度和方向，以及用于衰减计算。  
3、阴影生成：在生成阴影时，需要计算物体与光源以及物体与接收阴影的平面之间的距离。   
4、空间分割：在空间分割算法（如八叉树、四叉树等）中，distance 函数用于确定物体与空间分割边界的距离，以决定物体应该被分配到哪个子空间中。  
5、地形生成：在生成地形高度图时，计算地形点之间的距离。

## dot

float dot(float x, float y)       
float dot(vec2 x, vec2 y)     
此函数会返回 x 和 y 的点积，也就是矢量中每一个点的乘积相加，这是一个标量值。          
点积是一种可以衡量两个向量相似度的方式。具体来说，反映了向量 A 沿着向量 B 的方向的投影，有多长。    
也可说是某个点 pixel （向量x）在直线方向（向量y）上的“偏移量”，表示点在直线方向上的<font color=red>相对位置</font>。 
***

可以想象，把向量 A 投影到向量 B 上，点积就是投影的长度与向量 B 的长度的乘积。      
两个向量 A 和 B 的点积定义为 A·B = ∥a∥∥b∥cos⁡(θ) ，其中∥a∥和∥b∥分别是向量 A 和 B 的模长（长度），θ是它们之间的夹角。         
当向量被归一化以后，即长度变为 1，则：a⋅b=cos(θ)，此时，点积就直接等于两个向量之间夹角的余弦值。     
***

例如 a 向量为 (x1, y1),b 向量 (x2, y2) 那么 dot(a, b) 就会返回 x1 * x2 + y1 * y2。    
***

<font color=red>特殊点：</font>      
&emsp;&emsp;<font color=purple>如果是dot(a, b)，计算的是两个不同向量的点积，结果是一个标量，表达式是a⋅b=∥a∥∥b∥cosθ，表示两个向量的长度和夹角的余弦值的乘积。</font>     
&emsp;&emsp;<font color=orange>如果是dot(a, a)，计算的是向量与自身的点积，即 a⋅a，是模的平方。注意length，length是要开方的。</font>
***

#### 余弦距离 = 1 - 余弦相似度    
余弦相似度是通过计算两个向量的夹角的余弦值来衡量它们之间的相似程度的，取值范围是 [−1,1]。      
&emsp;&emsp;当两个向量的点积大于0，即夹角小于90°时，这两个向量的方向大致相同。               
&emsp;&emsp;如果点积小于0，即夹角大于90°时，这两个向量的方向相反。                
&emsp;&emsp;如果点积等于0，二者垂直。                    
&emsp;&emsp;&emsp;&emsp;当两个向量完全相同或方向完全相同时，余弦相似度为 1。    
&emsp;&emsp;&emsp;&emsp;当两个向量完全相反或方向完全相反时，余弦相似度为 -1。   
&emsp;&emsp;&emsp;&emsp;当两个向量正交（即夹角为 90 度）时，余弦相似度为 0。          
余弦距离是余弦相似度的补数，取值范围是 [0,2]。     
&emsp;&emsp;当两个向量完全相同或方向完全相同时，余弦距离为 0。    
&emsp;&emsp;当两个向量完全相反或方向完全相反时，余弦距离为 2。    
&emsp;&emsp;当两个向量正交（即夹角为 90 度）时，余弦距离为 1。    
***

应用场景：       
1、方向判断：点积的符号（正、负或零）可以判断两个向量的相对方向。如果点积为正，则两向量夹角小于 90 度；如果为负，则夹角大于 90 度；如果为零，则两向量垂直。       
2、计算投影：点积也可以用来计算一个向量在另一个向量上的投影长度。     
3、光照计算：在图形渲染中，点积常用于光照模型中，以计算光源方向与表面法线之间的夹角，从而确定光照的强度和方向。        
4、归一化验证：通过比较向量与其自身的点积（即长度的平方），可以验证向量是否已被归一化（即长度为 1）。      
5、dot 可以被用来间接地实现画圆的功能。虽然 dot 方法本身不直接用于画圆，但它是绘制点的基本工具，而这些点可以用来近似表示一个圆。（距离场原理）    

#### 为什么计算投影长度，就可以确定每个顶点处的相位偏移量？

这个投影长度表示了顶点处的相位偏移量，因为相位偏移量与传播方向和顶点位置之间的相对关系成正比。       
具体来说，如果传播方向与顶点位置之间的角度越小，投影长度越长，相位偏移量越大；如果角度越大，投影长度越短，相位偏移量越小。    

##### 计算光照强度（点积） 
```javascript
#version 330 core  
out vec4 FragColor;  
void main() {  
  vec3 lightDir = vec3(1.0, 1.0, 1.0); // 光源方向  
  vec3 normal = vec3(0.0, 0.0, 1.0); // 表面法线  
  float intensity = dot(lightDir, normal); // 计算光照强度（点积）  
  // 这里仅为示例，实际中可能需要根据 intensity 进行光照计算  
  FragColor = vec4(intensity, intensity, intensity, 1.0); // 将光照强度作为颜色输出  
}
```

##### 画圆
```javascript
// 画圆
#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
float circle(in vec2 _st, in float _radius){
  vec2 dist = _st - vec2(0.5);
	return smoothstep(_radius - (_radius * 0.01), _radius + (_radius * 0.01), dot(dist, dist) * 4.0);
}
void main(){
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	vec3 color = vec3(circle(st, 1.0));
	gl_FragColor = vec4(color, 1.0);
}
```

##### 利用投影长度，确定波的相位（确定某种比例，比如此案例的相位比例）---gerstner wave
```javascript
// dot(direction, vertex.xz) 是为了计算方向向量 direction 与顶点的 x 和 z 坐标组成的向量 vertex.xz 的点积（内积）。
// 作用是计算波的方向与顶点位置之间的相对关系，用于确定波在该顶点处的相位。
// 这个投影长度乘以波长 wavelength 后，给出了波在该顶点处的相位偏移量。
// vertex (类型：vec3)
//    含义：顶点的初始位置 (x, y, z)。
//    作用：用于计算波的偏移量。
// direction (类型：vec2)
//    含义：波的传播方向 (x, y)。
//    作用：用于确定波的传播方向，计算相位偏移。
// time (类型：float)
//    含义：当前时间。
//    作用：用于模拟波的动态变化。
// speed (类型：float)
//    含义：波的传播速度。
//    作用：影响波随时间的移动速度。
// steepness (类型：float)
//    含义：波的陡峭度。
//    作用：影响波的水平偏移量。
// amplitude (类型：float)
//    含义：波的振幅。
//    作用：影响波的垂直偏移量。
// wavelength (类型：float)
//    含义：波的波长。
//    作用：影响波的周期性。
vec3 gerstner(vec3 vertex, vec2 direction, float time, float speed, float steepness, float amplitude, float wavelength) {
	float displaced_x = vertex.x + (steepness / wavelength) * direction.x * cos(wavelength * dot(direction, vertex.xz) + speed * time);
	float displaced_z = vertex.z + (steepness / wavelength) * direction.y * cos(wavelength * dot(direction, vertex.xz) + speed * time);
	float displaced_y = vertex.y + amplitude * sin(wavelength * dot(direction, vertex.xz) + speed * time);
	return vec3(displaced_x, displaced_y, displaced_z);
}
```

## faceforward

float faceforward(float N, float I, float Nref)     
faceforward 函数根据参考向量（Nref）和入射向量（I）之间的夹角（通过点积判断）来决定目标向量（N）的方向是否需要反转。    
N：一个向量，表示需要被调整方向的向量。  
I：一个向量，通常表示光线方向或入射方向。  
Nref：一个向量，通常表示参考方向或表面法线。    
返回一个与 N 同类型的向量，其方向根据 I 和 Nref 的点积结果进行调整。      
***

如果 Nref 和 I 的点积小于 0（即夹角大于 90 度），则返回 N；否则，返回-N，dot(Nref, I)<0 则返回 N，否则返回-N。 
***


应用场景：   
1、光照计算：在光照模型中，faceforward 可以用来确定光照方向对表面法线的影响，从而计算正确的光照效果。   
2、反射和折射：在处理反射和折射时，faceforward 可以用来确定反射或折射光线的方向，特别是当需要基于表面法线和光线方向来确定这些方向时。   
3、法线映射：在法线映射技术中，faceforward 可以用来调整法线向量的方向，以确保它们与表面的整体方向一致。   
```javascript
// 在这个示例中，faceforward 函数根据
// 光源方向（-lightDir，因为通常光源方向是指向光源的，需要的是从表面指向光源的方向）
// 表面法线（normal）
// 从而调整 someVector 的方向
// 然而，请注意这个示例中的 someVector 可能是任意的
// 而 faceforward 的实际应用场景通常涉及与光照、反射或折射等相关的向量
#version 330 core  
out vec4 FragColor;  
uniform vec3 lightDir; // 光源方向  
uniform vec3 normal;   // 表面法线  
void main() {  
    // 假设需要根据光源方向和法线方向来调整某个向量的方向  
    vec3 someVector = vec3(1.0, 0.0, 0.0); // 示例向量  
    vec3 adjustedVector = faceforward(someVector, -lightDir, normal);  
  
    // ...（后续可能的光照计算或向量使用）  
  
    // 这里仅为示例，实际中可能需要根据 adjustedVector 进行进一步处理  
    FragColor = vec4(adjustedVector, 1.0); // 将调整后的向量作为颜色输出（仅为演示）  
}
```

## floor

float floor(float x) 返回小于等于 x 并且最接近 x 的整数，就是向下取整。   
如果 x<0，比如 x=-0.2，返回 -1.

## fract

float fract(float x) 返回 x 的小数部分。     
fract(x) 函数返回 x 的小数部分，即 x - floor(x)，结果总是在[0, 1) 范围内。    
fract 函数在图形编程中有很多应用场景，比如：  
1、纹理动画：通过不断改变纹理坐标的小数部分，可以模拟纹理的滑动或滚动效果，而不需要移动纹理本身。  
2、周期性变化：在着色器中创建周期性变化的效果，如颜色渐变、波纹效果等。  
3、噪声生成：在生成噪声纹理或进行噪声模拟时，fract 可以帮助创建周期性或重复的噪声模式。    
4、根据小数部分切分屏幕：基于 fract 函数的返回值，可以决定每个片元应该显示哪个屏幕区域的内容。这通常涉及到对 fract 的返回值进行条件判断，并根据结果调整纹理坐标或选择不同的纹理。  
```javascript
#version 330 core  
out vec4 FragColor;  
in vec2 TexCoords; // 从顶点着色器接收的归一化纹理坐标  
  
void main() {  
  // 获取纹理坐标的小数部分  
  vec2 fractCoords = fract(TexCoords);  
  // 根据小数部分将屏幕分割成四个区域  
  if (fractCoords.x < 0.5 && fractCoords.y < 0.5) {  
      // 左上角区域  
      FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色  
  } else if (fractCoords.x >= 0.5 && fractCoords.y < 0.5) {  
      // 右上角区域  
      FragColor = vec4(0.0, 1.0, 0.0, 1.0); // 绿色  
  } else if (fractCoords.x < 0.5 && fractCoords.y >= 0.5) {  
      // 左下角区域  
      FragColor = vec4(0.0, 0.0, 1.0, 1.0); // 蓝色  
  } else {  
      // 右下角区域  
      FragColor = vec4(1.0, 1.0, 0.0, 1.0); // 黄色  
  }  
  // 在实际应用中，可能会根据 fractCoords 的值来选择不同的纹理  
  // 例如：FragColor = texture(textureArray[index], someCoords);  
}
``` 

## greaterThan

比较 x>y。    
对于不同类型的向量，greaterThan 函数有不同的重载版本   
bvec2 greaterThan(vec2 x, vec2 y)  
bvec3 greaterThan(vec3 x, vec3 y)  
bvec4 greaterThan(vec4 x, vec4 y)  
bvec2 greaterThan(ivec2 x, ivec2 y)   
bvec3 greaterThan(ivec3 x, ivec3 y)  
bvec4 greaterThan(ivec4 x, ivec4 y) 
***  

应用场景：   
1、光照和阴影：在光照计算中，greaterThan可以用来判断光源方向与表面法线之间的角度关系。虽然直接比较光源方向和法线来决定光照效果通常不是通过greaterThan直接完成的（因为更常见的是使用点积和夹角的余弦值），但greaterThan可以用于辅助判断，例如确定一个光源是否位于表面的特定侧面上，或者在实现更复杂的光照模型时用于条件分支。  
2、纹理混合和选择：在纹理映射中，greaterThan可以用来根据纹理坐标、UV值或其他向量参数来混合或选择不同的纹理。例如，可以定义一个阈值，当纹理坐标的某个分量大于这个阈值时，选择一个纹理；否则，选择另一个纹理。这可以用于创建过渡效果、实现细节层次（LOD）控制或实现基于纹理的复杂材质效果。  
3、粒子系统：在粒子效果中，greaterThan可以用于更新粒子的状态或行为。例如，可以比较粒子的速度或位置与某个阈值，以决定粒子是否应该改变颜色、大小、透明度或是否应该被销毁。这种基于条件的更新是粒子系统实现复杂动态效果的关键。    
4、体积渲染：在体积渲染中，greaterThan可以用于确定光线在通过体积时是否遇到了特定的密度或颜色阈值。这可以用于实现如云层、烟雾、火焰等体积效果的渲染，其中光线与体积内粒子的交互决定了最终的视觉效果。   
5、几何和物理模拟：在更高级的图形应用中，greaterThan可以用于几何和物理模拟。例如，在模拟流体动力学或刚体碰撞时，可能需要比较不同点或粒子之间的位置、速度或加速度，以决定它们之间的相互作用。虽然这些场景可能更多地依赖于更复杂的数学和物理模型，但greaterThan仍然可以在处理这些模型的边界条件或触发特定事件时发挥作用。     
6、性能和优化：在某些情况下，greaterThan还可以用于优化着色器代码的性能。例如，通过提前判断某些条件是否满足，可以避免执行不必要的计算或渲染操作。虽然这种优化通常需要根据具体的着色器逻辑和性能瓶颈来定制，但greaterThan提供了一种在着色器程序中实现条件逻辑的有效方式。   

```javascript
#version 330 core  
out vec4 FragColor;  
// 假设有一个 3D 纹理存储了体积数据，其中包含密度值  
uniform sampler3D volumeTexture;  
// 密度阈值  
uniform float densityThreshold;  
// 其他可能的 uniform 变量，如相机位置、光照参数等  
void main() {  
  // 获取当前片元对应的体素在体积纹理中的坐标  
  vec3 texCoord = // ... 根据片元位置和体积尺寸计算得到的纹理坐标  
  // 从体积纹理中采样密度值  
  float density = texture(volumeTexture, texCoord).r; // 假设密度值存储在红色通道  
  // 使用 greaterThan 函数判断密度是否超过阈值  
  bool isDense = greaterThan(density, densityThreshold).r; // 注意 greaterThan 返回的是 bvec 类型，需要访问.r 来获取第一个分量的布尔值  
  // 根据密度阈值决定渲染效果  
  if (isDense) {  
      // 密度超过阈值，使用不透明或半透明的颜色渲染  
      // 这里为了简单起见，使用固定的颜色和不透明度  
      // 在实际应用中，可能需要根据密度值来插值颜色和不透明度  
      FragColor = vec4(1.0, 0.5, 0.0, 0.8); // 例如，橙色半透明  
  } else {  
      // 密度低于阈值，使用较低的不透明度或完全透明  
      FragColor = vec4(0.0, 0.0, 0.0, 0.2); // 黑色，较低的不透明度  
  }  
  // 注意：上述代码片段是一个简化的示例，实际的体积渲染可能会更复杂  
  // 涉及到体积光线投射、步进函数（ray marching）、多次采样等技术  
}
```

## greaterThanEqual

比较 x>=y。

## inverse

inverse 是一个内置的 GLSL 函数，用于计算矩阵的逆矩阵。它接受一个矩阵作为输入，并返回该矩阵的逆矩阵。    
在图形渲染中，矩阵通常用于表示空间变换，例如从局部空间到世界空间、从世界空间到视图空间、从视图空间到裁剪空间等。逆矩阵则用于将这些变换反向应用。  
例如：   
&emsp;&emsp;从世界空间到局部空间：   
&emsp;&emsp;&emsp;&emsp;如果有一个模型矩阵（modelMatrix），它将顶点从局部空间变换到世界空间。   
&emsp;&emsp;&emsp;&emsp;使用 inverse(modelMatrix) 可以将一个点或向量从世界空间变换回局部空间。     
&emsp;&emsp;从视图空间到世界空间：    
&emsp;&emsp;&emsp;&emsp;如果有一个视图矩阵（viewMatrix），它将点从世界空间变换到视图空间。   
&emsp;&emsp;&emsp;&emsp;使用 inverse(viewMatrix) 可以将点从视图空间变换回世界空间。   
```javascript
in vec3 position;
  
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPos; // 相机在世界空间中的位置

out vec3 vOrigin; // 射线的起点
out vec3 vDirection; // 射线的方向

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  
  // 计算射线的起点 vOrigin。通过将相机位置从世界空间变换到局部空间，得到射线的起点
  // inverse 是一个内置的 GLSL 函数，用于计算矩阵的逆矩阵。它接受一个矩阵作为输入，并返回该矩阵的逆矩阵
  // 这行代码的作用是将相机的位置从世界空间变换到局部空间
  // cameraPos 是相机在世界空间中的位置，通过乘以 modelMatrix 的逆矩阵，将其变换到局部空间
  // 这样可以确保射线的起点与模型的局部坐标系对齐
  vOrigin = vec3(inverse(modelMatrix) * vec4(cameraPos, 1.0)).xyz;

  // 计算射线的方向 vDirection，即顶点位置与射线起点的差值
  vDirection = position - vOrigin;
  
  gl_Position = projectionMatrix * mvPosition;
}
``` 

## length

float length(vecType v);    
参数 v 是一个向量（如 vec2、vec3 或 vec4）    
***

length(a, a) 用于计算单个向量 a 的模（长度）。对于一个向量 a=(ax ,ay)，其长度的计算公式是：   
length(a, a) = dot(a ,a) 的开方 = (ax^2 + ay^2)^(1/2)    
length(a) = length(a, a)：             
&emsp;&emsp;输入：一个向量 a。            
&emsp;&emsp;输出：该向量的长度（模）。                   
&emsp;&emsp;用途：用于计算单个向量的长度。                
***

length(a, b) 被定义为计算两个向量 a 和 b 之间的欧几里得距离。返回它们之间的距离。
length(a, b) =  ∥a - b∥ = ((ax - bx)^2 + (ay - by)^2)^(1/2)
length(a, b)：
&emsp;&emsp;输入：两个向量 a 和 b。          
&emsp;&emsp;输出：这两个向量之间的欧几里得距离。           
&emsp;&emsp;用途：用于计算两个向量之间的距离。
***

应用场景：          
1、计算向量的模长：例如，计算一个方向向量的长度，或者判断一个向量是否为单位向量（长度为 1）。         
2、归一化向量：在归一化一个向量之前，通常需要先计算其长度，然后用每个分量除以长度。              
3、距离计算的中间步骤：在某些情况下，length 可以作为计算两点之间距离的中间步骤，例如计算一个点到原点的距离。       

## lessThan

比较 x < y。

## lessThanEqual

比较 x<=y。

## mat

矩阵一般是不会是 float,vec2,vec3,vec4 类型的，矩阵的函数输入的都是矩阵类型的参数也就是 mat2,mat3,mat4 类型的。

```javascript
// 1 0 0 0
// 0 cosα sinα 0
// 0 -sinα cosα 0
// 0 0 0 1
mat4 mx = mat4(1,0,0,0, 0,cos,-sin,0, 0,sin,cos,0, 0,0,0,1);
```

```javascript
// 此函数会将矩阵 x 和矩阵 y 逐元素相乘
mat2 matrixCompMult(mat2 x, mat2 y)
```

## max

float max(float x, float y)返回 x 和 y 中最大的值。

## min

float min(float x, float y)返回 x 和 y 中最小的值。

## mix

mix 函数用于混合两个值，得到新的值，多用于颜色。    
float mix(float x, float y, float a);  
vec2 mix(vec2 x, vec2 y, float a);   
vec3 mix(vec3 x, vec3 y, float a);  
vec4 mix(vec4 x, vec4 y, float a); 
***

dest = x * (1 - a) + y * a;    
当a为0时，dest等于x。   
当a为1时，dest等于y。   
当a在0到1之间时，dest是x和y之间的线性插值。   

```javascript
// 颜色 1，颜色 2，混合比例
mix(x,y,a) = x*(1-a)+y*a
mix(x,y,0.0) = x
mix(x,y,1.0) = y
```

```javascript
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;
  vec4 color1=vec4(1.0,0.0,0.0,1.0);
  vec4 color2=vec4(0.0,0.0,1.0,1.0);
  gl_FragColor = mix(color1,color2,st.t);
  //对于渐变颜色，则选取两端的两个坐标点，然后分别分析颜色。
  //从下到上颜色由红变成蓝，则下面的点 mix color1 小，上面的相反。
}
```

## mod

float mod(float x, float y)返回 x 除以 y 的余数。    
这个函数在处理周期性变化、纹理坐标映射、渐变效果等场景中非常有用。   
mod(x, y)函数是周期性的，其周期为y。mod(x, y)函数表示x除以y的余数，因此值总是在0到y-1之间。  
***

比如：mod(dt, 3.14)：将输入值限制在[0, π]范围内             
***
​      
应用场景：     
1、周期性变化：在需要实现周期性变化的效果时，如波浪、旋转动画等，可以使用mod函数来计算当前时间或位置与周期长度的余数，从而得到循环的索引或偏移量。   
2、纹理坐标映射：在处理纹理时，可以使用mod函数对纹理坐标进行映射，以实现纹理的重复、镜像等效果。例如，通过将纹理坐标与某个值进行mod运算，可以使纹理在特定方向上循环显示。    
3、渐变效果：在实现渐变效果时，mod函数可以用来计算渐变周期内的相对位置，从而确定当前位置的颜色或透明度等属性。    
***

使用 mod 函数（取模运算）时，结果<font color=red>不包含</font>模数（下面案例中的 TAU）的原因主要是为了保持结果在一个循环或周期性范围内，同时避免达到或超过原始定义的范围

```javascript
// 在这个示例中，TexCoords 是输入的纹理坐标
// 通过 mod 函数对 TexCoords.x 进行取模运算，使其值在 0 到 1 之间循环
// 从而实现纹理在水平方向上的重复
// 然后使用新的纹理坐标 newTexCoords 进行纹理采样，并将采样结果输出到片元颜色 FragColor 中
#version 330 core  
out vec4 FragColor;  
in vec2 TexCoords; // 纹理坐标  
uniform sampler2D texture1; // 纹理采样器  
void main() {  
  // 使用 mod 函数对纹理坐标的 u 分量进行取模运算，实现纹理在水平方向上的重复  
  float u = mod(TexCoords.x, 1.0);  
  vec2 newTexCoords = vec2(u, TexCoords.y);  
  // 使用新的纹理坐标进行纹理采样  
  FragColor = texture(texture1, newTexCoords);  
}
```
```javascript
#define TAU 6.28318530718
vec2 p = mod(uv * TAU, TAU) - 150.0;

// uv 被乘以 TAU（圆周率的两倍，代表一个完整的圆）
// 将纹理坐标 (u, v) 扩展到 (0, 2 * PI) 的范围。意味着纹理坐标被拉伸，每个分量都乘以 TAU
// 然后使用 mod 函数
// mod(uv * TAU, TAU) 将拉伸后的坐标映射回 (0, TAU) 的范围内
// 这是通过取模运算实现的，确保结果的每个分量都在 [0, TAU) 范围内
// 当坐标值超过 1 时，会通过取模操作回到 0，从而创建一个无缝的周期性效果
// 接着，结果被减去 150.0 以进行平移
// 这有助于创建一个更复杂的分形图案
```

## normalize

float normalize(float x)  
此函数会对 x 进行归一化，保持矢量方向不变但长度为 1

## pow

float pow(a, b)     
此函数        
1、用于调整颜色的亮度和对比度，例如模拟非线性光强变化       
2、用于模拟非线性变化，例如火焰、烟雾等自然现象     
比如 pow(uv.y, 4.0)：这里，uv.y 被提升到 4 次方，用于模拟非线性变化，这使得颜色在垂直方向上的变化更加平滑和自然         

## radians

float radians(float degrees);  
vec2 radians(vec2 degrees);   
vec3 radians(vec3 degrees);  
vec4 radians(vec4 degrees);   

```javascript
vec2 angles = vec2(90.0, 45.0); // 包含两个角度的向量  
vec2 radiansAngles = radians(angles); // 将每个角度转换为弧度  
vec2 sineValues = sin(radiansAngles); // 计算每个角度的正弦值
```
```javascript
#version 330 core  
out vec4 FragColor;  
void main() {  
  float angleDegrees = 45.0; // 角度值，以度为单位  
  float angleRadians = radians(angleDegrees); // 将角度转换为弧度  
  float sineValue = sin(angleRadians); // 计算正弦值  
  // 这里只是为了示例，实际上可能需要将计算结果用于其他目的  
  // 例如，将正弦值映射到颜色值并输出到片元颜色中  
  FragColor = vec4(sineValue, sineValue, sineValue, 1.0);  
}
```

## reflect

float reflect(float I, float N)  
I 是入射向量，表示光线照射到表面上的方向。  
N 是表面法线，表示表面的方向。  
此函数会计算反射矢量。入射矢量为 I，表面的法向量是 N，返回 I-2*dot(N, I)*N 需要注意的是此处的 N 必须已经被归一化。   
用于计算给定入射向量（incident vector）和表面法线（surface normal）之间的反射向量（reflected vector）。   
这个函数在图形渲染中非常有用，特别是在处理光线反射和镜面效果时。   
***

应用场景：    
1、光线追踪：在光线追踪算法中，reflect 函数用于计算光线从一个表面反射后的新方向。   
2、环境映射：在环境映射（如反射贴图）中，reflect 函数用于根据表面法线和观察方向计算反射向量，从而确定应该从哪个方向采样环境贴图。   
3、镜面效果：在模拟镜面或金属表面时，reflect 函数用于计算反射光线，以产生逼真的反射效果。    
```javascript
#version 330 core  
out vec4 FragColor;  
in vec3 FragPos; // 片段在世界空间中的位置  
in vec3 Normal;  // 片段的法线向量  
uniform vec3 LightPos; // 光源位置  
uniform vec3 ViewPos;  // 观察者位置  
void main() {  
  // 计算从片段到光源的向量（入射向量）  
  vec3 I = normalize(LightPos - FragPos);  
  // 假设 Normal 已经是归一化的  
  // 计算反射向量  
  vec3 R = reflect(I, Normal);  
  // ...（这里可以添加更多代码来计算反射光线的颜色等）  
  // 为了示例，直接将反射向量的 x 分量映射到红色通道  
  // 注意：这只是一个示例，实际使用中可能需要更复杂的计算  
  FragColor = vec4(R.x, 0.0, 0.0, 1.0);  
}
```

## refract

float refract(float I, float N, float eta)    
I 是入射光线向量，表示光线在介质边界上的入射方向。   
N 是表面法线向量，表示介质边界的法线方向。  
eta 是两种介质之间的相对折射率，即第二介质折射率与第一介质折射率的比值。   
根据入射光和介质特性计算折射现象。入射光方向为 I，表面法向量为 N，介质的折射率为 eta，返回被折射后的光线方向。   
用于计算光线在两种不同介质（如空气和水）之间传播时因折射而产生的方向变化。这个函数在模拟光学效果，如玻璃、水或其他透明或半透明物体的折射时非常有用。   
```javascript
#version 330 core  
out vec4 FragColor;  
  
in vec3 FragPos; // 片段在世界空间中的位置  
in vec3 Normal;  // 片段的法线向量  
uniform vec3 LightPos; // 光源位置  
uniform float eta;     // 两种介质之间的相对折射率  
void main() {  
  // 假设 LightPos 定义了光线的入射方向（从光源到片段）  
  vec3 I = normalize(LightPos - FragPos);  
  // 假设 Normal 是指向第二介质的法线（已归一化）  
  // 计算折射向量  
  vec3 R = refract(I, Normal, eta);  
  // ...（这里可以添加更多代码来处理折射光线的颜色等）  
  // 为了示例，直接将折射向量的 x 分量映射到红色通道  
  // 注意：这只是一个示例，实际使用中可能需要更复杂的计算  
  if (R != vec3(0.0)) { // 检查是否发生了折射（避免除以零）  
    FragColor = vec4(R.x, 0.0, 0.0, 1.0);  
  } else {  
    FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 全反射时显示红色  
  }  
}
```

## saturate
saturate 函数的作用是将输入值限制在 0 到 1 的范围内，即如果输入值小于 0，则输出 0；如果输入值大于 1，则输出 1；如果输入值在 0 到 1 之间，则输出该值本身
```javascript
vec3 saturate(vec3 v) {
    return clamp(v, 0.0, 1.0);
}
```

## sign

genType sign(genType x);    
genType 可以是 float、vec2、vec3、vec4、int、ivec2、ivec3、ivec4、uint、uvec2、uvec3 或 uvec4。但是，通常情况下，sign 函数更常用于浮点类型（float、vec2、vec3、vec4），因为整数类型的符号可以通过比较操作直接确定。    
对于每个输入分量 x[i]：  
如果 x[i] > 0，则 sign(x)[i] 返回 1.0。  
如果 x[i] == 0，则 sign(x)[i] 返回 0.0。   
如果 x[i] < 0，则 sign(x)[i] 返回 -1.0。     
***

应用场景：    
方向判断：在需要根据数值的符号来确定方向（如向左或向右移动）时。   
条件分支的简化：在某些情况下，可以使用 sign 函数来避免复杂的条件语句。   
数学表达式的简化：在编写复杂的数学公式时，sign 函数可以帮助简化表达式。 
```javascript
#version 330 core  
out vec4 FragColor;  
uniform float uValue;  
void main() {  
  // 计算 uValue 的符号  
  float signValue = sign(uValue);  
  // 根据符号值设置颜色  
  // 注意：这里只是为了演示，实际应用中可能需要更复杂的逻辑  
  if (signValue == 1.0) {  
    FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色，表示正值  
  } else if (signValue == 0.0) {  
    FragColor = vec4(0.0, 0.0, 1.0, 1.0); // 蓝色，表示零  
  } else {  
    FragColor = vec4(0.0, 1.0, 0.0, 1.0); // 绿色，表示负值  
  }  
}
``` 

## smoothstep

float smoothstep(float edge0, float edge1, float x) {
  float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
SmoothStep 用来生成：指定范围内 0 到 1 的平滑过渡值。  
也叫作平滑阶梯/过度函数。 
***

有两种情况：分别是 edge0 < edge1，和 edge0 > edge1
***

假设 edge0 = 0.0，edge1 = 1.0，edge0 < edge1，x 取不同值时： 
当 x 小于或等于 edge0（即 0.0）时，smoothstep 将返回 0，因为 x 小于或等于较小的边界值。    
当 x 大于或等于 edge1（即 1.0）时，smoothstep 将返回 1，因为 x 大于或等于较大的边界值。  
当 x 在 edge0 和 edge1 之间时（即 0.0 到 1.0 之间），smoothstep 将返回一个从 1 平滑过渡到 0 的值。  
如果 x = -0.5，则 smoothstep(0.0, 1.0, -0.5) = 0.0（因为 x 小于 edge0）。  
如果 x = 0.25，则 smoothstep(0.0, 1.0, 0.25) 将返回一个 0 到 1 之间的值，接近但小于 0.5（因为 x 在 edge0 和 edge1 之间）。  
如果 x = 1.5，则 smoothstep(0.0, 1.0, 1.5) = 1.0（因为 x 大于 edge1）。  
***

假设 edge0 = 1.0，edge1 = 0.0，edge0 > edge1，x 取不同值时：  
当 x 大于或等于 edge0（即 1.0）时，smoothstep 将返回 0，因为 x 大于或等于较大的边界值。  
当 x 小于或等于 edge1（即 0.0）时，smoothstep 将返回 1，因为 x 小于或等于较小的边界值。    
当 x 在 edge1 和 edge0 之间时（即 0.0 到 1.0 之间），smoothstep 将返回一个从 1 平滑过渡到 0 的值。  
如果 x = -0.5，则 smoothstep(1.0, 0.0, -0.5) = 1.0（因为 x 小于 edge0）。    
如果 x = 0.25，则 smoothstep(1.0, 0.0, 0.25) 将返回一个 0 到 1 之间的值，接近但小于 0.5（因为 x 在 edge0 和 edge1 之间）。    
如果 x = 1.5，则 smoothstep(1.0, 0.0, 1.5) = 0.0（因为 x 大于 edge1）。    

```javascript
float smoothstep(float a, float b, float x)
{
    float t = saturate((x - a)/(b - a));
    return t*t*(3.0 - (2.0*t));
}
```

## sqrt

genType sqrt(genType x);    
genType 可以是 float、vec2、vec3 或 vec4。这意味着可以对单个浮点数、二维向量、三维向量或四维向量应用 sqrt 函数，它将分别计算每个分量的平方根。
```javascript
#version 330 core  
out vec4 FragColor;  
in vec2 TexCoords;  
uniform sampler2D texture1;  
uniform float uValue;  
void main() {  
  // 假设 uValue 是一个非负浮点数  
  float sqrtValue = sqrt(uValue);  
  // 仅为演示：这里并没有真正使用 sqrtValue 来影响颜色  
  // 但在实际应用中，可能会根据 sqrtValue 来修改颜色或其他属性  
  // 假设有一个纹理，但想根据 uValue 的平方根来调整纹理的亮度  
  vec4 texColor = texture(texture1, TexCoords);  
  texColor.rgb *= sqrtValue; // 假设希望亮度与 sqrtValue 成正比  
  FragColor = texColor;  
}
```

## step

float step(float edge, float x) 根据两个数值生成阶梯函数，如果 x<edge 则返回 0.0，否则返回 1.0。   
例如：float res = step(0.5, x)，如果 x = 0.1，res = 0.0，如果 x = 0.6，res = 1.0。

## texture

genType texture(sampler2D sampler, vec2 coord, [float bias]);        
&emsp;&emsp;sampler：一个类型为 sampler2D 的 uniform 变量，指定了要采样的二维纹理。  
&emsp;&emsp;coord：一个二维向量（vec2），指定了纹理坐标（u, v），用于确定采样点。     
&emsp;&emsp;bias（可选）：一个浮点数，用于在纹理查找过程中应用偏移量。这个参数在大多数情况下不是必需的，且其效果可能依赖于具体的 GPU 和驱动程序实现。     
***

genType 通常会是 vec4，因为纹理采样通常返回 RGBA 颜色值。但是，如果正在使用采样器类型为 sampler2DShadow 的阴影纹理，或者纹理数据不是颜色数据（例如，深度图或法线图），那么 genType 可能会是 float 或其他类型。     
```javascript
#version 330 core  
out vec4 FragColor;  
in vec2 TexCoords; // 从顶点着色器传递过来的纹理坐标  
uniform sampler2D texture1; // 指向二维纹理的 uniform 变量  
void main() {  
  // 使用 texture 函数从二维纹理中采样颜色  
  vec4 color = texture(texture1, TexCoords);  
  // 将采样到的颜色输出到片段颜色  
  FragColor = color;  
  // 或者，可以对采样到的颜色进行进一步的处理  
  // FragColor = vec4(texColor.rgb * 0.5, texColor.a); // 例如，将颜色减半
}
```
