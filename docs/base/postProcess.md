## 后处理
后处理通常是在整个场景渲染完成后应用的，而不是直接作用于特定的物体。它可以用来添加全局的效果，比如模糊、色彩校正、光照效果等。所以，后处理效果会影响整个场景，而不是单个物体。   

babylon.js 的 postProcess 特性允许创建自定义的后期处理效果，并将其应用到场景中。可以通过组合不同的后期处理效果来创建出独特的视觉风格。   

包括但不限于：     
1、全局色调映射（Global Tone Mapping）：调整场景的色调映射，使其在不同的光照条件下看起来更自然。   
2、景深效果（Depth of Field）：模拟相机的景深效果，使得场景中某些物体或区域模糊，增强真实感。    
3、运动模糊（Motion Blur）：根据物体的运动模糊化图像，使得动态物体在场景中呈现出更加流畅的运动效果。   
4、像素化（Pixelation）：将图像像素化，使得图像呈现出像素风格的效果。  
5、高斯模糊（Gaussian Blur）：应用高斯模糊来柔化图像，常用于创建光晕或柔化阴影效果。  
6、HDR（High Dynamic Range）效果：增强图像的动态范围，使得在亮度和对比度方面更接近人眼的感知。   
7、折射和反射（Refraction and Reflection）：通过对图像进行折射和反射处理，实现逼真的水面效果或玻璃材质效果。     
8、图像混合（Image Blending）：将多个图像混合在一起，创建出各种视觉效果。    
9、颜色校正：通过调整图像的亮度、对比度、饱和度等参数，来改变场景的整体色调。  
10、深度模糊：根据场景中的深度信息，对远处的物体应用模糊效果，以增强近处物体的焦点。   
11、光晕和泛光：为场景中的光源添加光晕或泛光效果，使其更加明亮和引人注目。  
12、屏幕空间反射：模拟物体表面的反射效果，增加场景的真实感。  
13、自定义效果：通过编写自定义的 GLSL 着色器代码，创建出独特的后期处理效果。  

BABYLON.PostProcess参数：       
&emsp;&emsp;name (string): 后处理效果的名称，用于标识该效果。     
&emsp;&emsp;fragmentUrl (string): 包含着色器代码的文件路径。这个着色器文件包含了后处理的逻辑，通常是一个片段着色器 (fragment shader)。      
&emsp;&emsp;parameters (Nullable<string[]>): 一个包含后处理着色器所需参数名称的数组。这些参数在着色器中声明为uniform变量，以便JavaScript代码可以动态地更新它们。    
&emsp;&emsp;samplers (Nullable<string[]>): 一个包含了纹理采样器名称的数组，这些采样器在着色器中声明为uniform变量。通常用于传递纹理给后处理效果。   
&emsp;&emsp;options (number | PostProcessOptions): 一个可选的参数，用于控制后处理效果的运行。可以是一个数值或一个对象，具体取决于需要的配置。计算渲染过程之前要缩小到的所需宽度/高度比。（使用1.0表示全尺寸）
&emsp;&emsp;camera (BABYLON.Camera): 与后处理效果相关联的摄像机对象。后处理效果会应用于该摄像机所看到的场景。 

## 后处理---改变场景背景色
BABYLON.PostProcess的简单示例
```javascript
const postProcess = new BABYLON.PostProcess('CustomPostProcess', './custom', ['time'], null, 1.0, camera)
postProcess.onApply = function(effect) {
  effect.setFloat('time', performance.now() / 1000)
}

//'./custom'是引入以下两个文件

//---------------------------------------------------------
// 创建custom.fragment.fx文件
// Fragment Shader
precision highp float;

varying vec2 vUV;

uniform float time;

void main(void) {
    vec2 uv = vUV;
    vec3 color = vec3(0.0);

    color.r = abs(sin(time));
    color.g = abs(cos(time));
    color.b = abs(sin(time * 0.5));

    gl_FragColor = vec4(color, 1.0);
}

//---------------------------------------------------------
// 创建custom.vertex.fx文件
// Vertex Shader
precision highp float; //所有float类型数据的精度是highp

attribute vec3 position;
attribute vec2 uv;

uniform mat4 worldViewProjection;

varying vec2 vUV;

void main(void) {
    gl_Position = worldViewProjection * vec4(position, 1.0);
    vUV = uv;
}
```

## 后处理---景深效果
BABYLON.DepthOfFieldEffect 是一个后处理效果。Depth of Field (DOF) 模糊效果通常用于模拟摄像机镜头焦距调整时的景深效果。  
```javascript
const box = BABYLON.MeshBuilder.CreateBox('box', {
  size: 2
}, scene)

const material = new BABYLON.StandardMaterial('material', scene)
box.material = material

// 创建景深效果的后期处理
const depthOfField = new BABYLON.DepthOfFieldEffect(camera)

// 创建渲染管道并将后期处理效果添加到管道中
const pipeline = new BABYLON.DefaultRenderingPipeline('default', true, scene)
pipeline.depthOfFieldEnabled = true
pipeline.depthOfField = depthOfField
```
## 后处理---像素化效果
BABYLON.PixelationPostProcess 是 Babylon.js 中的一个后期处理效果，它用于将图像的细节像素化，即减少图像的分辨率以产生类似像素艺术（pixel art）的视觉效果。当将这个后期处理应用到场景上时，场景中的物体将看起来像是由大块的像素块组成，而不是平滑的纹理和颜色过渡。
```javascript

// 创建一个盒子
const box = BABYLON.MeshBuilder.CreateBox('box', {size: 2}, scene);

// 应用材质
const material = new BABYLON.StandardMaterial('material', scene);
box.material = material;

// 创建像素化效果的后期处理
const pixelationEffect = new BABYLON.PostProcessRenderEffect(engine, 'pixelation', function () {
    return new BABYLON.PixelationPostProcess('pixelation', 10, camera);
});

// 将像素化效果添加到默认渲染管道中
const pipeline = new BABYLON.DefaultRenderingPipeline('default', true, scene);
pipeline.addEffect(pixelationEffect);
```