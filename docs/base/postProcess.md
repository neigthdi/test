## 后处理

```javascript
new BABYLON.PostProcess(
  name: string,
  fragmentUrl: string,
  parameters: Nullable<string[]>,
  samplers: Nullable<string[]>,
  options: number | PostProcessOptions,
  camera: Nullable<Camera>,
  samplingMode?: number,
  engine?: AbstractEngine,
  reusable?: boolean,
  defines?: Nullable<string>,
  textureType?: number,
  vertexUrl?: string,
  indexParameters?: any,
  blockCompilation?: boolean,
  textureFormat?: number,
  shaderLanguage?: ShaderLanguage,
  extraInitializations?: (useWebGPU: boolean, list: Promise<any>[]) => void
): PostProcess
```
| 参数                     | 类型                                                   | 必填 | 说明                                                                                                                                                 |
| ---------------------- | ---------------------------------------------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                 | `string`                                             | 是  | 后期处理效果的名称。用于调试和标识。                                                                                                                                 |
| `fragmentUrl`          | `string`                                             | 是  | 片段着色器代码的 URL 路径（不带 `.fragment.fx` 扩展名），或 ShaderStore 中的名称。                                                                                         |
| `parameters`           | `Nullable<string[]>`                                 | 是  | uniform 参数名称数组，用于从 JavaScript 向着色器传递数据。                                                                                                            |
| `samplers`             | `Nullable<string[]>`                                 | 是  | 额外的纹理采样器名称数组（除默认的 `textureSampler` 外）。                                                                                                             |
| `options`              | `number \| PostProcessOptions`                       | 是  | 后期处理的尺寸比例（如 0.5 表示半分辨率）或完整的选项对象。                                                                                                                   |
| `camera`               | `Nullable<Camera>`                                   | 是  | 要附加到的目标相机。若为 null，则需手动管理。                                                                                                                          |
| `samplingMode`         | `number`                                             | 否  | 纹理采样模式：<br>- `BABYLON.Texture.NEAREST_SAMPLINGMODE`<br>- `BABYLON.Texture.BILINEAR_SAMPLINGMODE`（默认）<br>- `BABYLON.Texture.TRILINEAR_SAMPLINGMODE` |
| `engine`               | `AbstractEngine`                                     | 否  | 要附加后期处理的引擎实例。通常自动推断。                                                                                                                               |
| `reusable`             | `boolean`                                            | 否  | 是否可在同一相机上重复使用（默认 false）。                                                                                                                           |
| `defines`              | `Nullable<string>`                                   | 否  | 着色器预处理宏定义字符串（如 `"#define DEBUG"`）。                                                                                                                 |
| `textureType`          | `number`                                             | 否  | 纹理数据类型（如浮点纹理）。                                                                                                                                     |
| `vertexUrl`            | `string`                                             | 否  | 自定义顶点着色器的 URL 路径（可选）。                                                                                                                              |
| `indexParameters`      | `any`                                                | 否  | 用于 Babylon 的 include 语法 `#include[0..varyingCount]` 的索引参数。参见 `babylon.blurPostProcess.ts` 和 `kernelBlur.vertex.fx` 中的用法。                           |
| `blockCompilation`     | `boolean`                                            | 否  | 是否阻止着色器立即编译（默认 false）。                                                                                                                             |
| `textureFormat`        | `number`                                             | 否  | 纹理格式。                                                                                                                                              |
| `shaderLanguage`       | `ShaderLanguage`                                     | 否  | 着色器语言（GLSL 或 WGSL）。                                                                                                                                |
| `extraInitializations` | `(useWebGPU: boolean, list: Promise<any>[]) => void` | 否  | 用于 WebGPU 的额外初始化函数。                                                                                                                                |

---

#### 链式处理

后期处理按创建顺序依次执行。每个后期处理接收前一个的输出作为输入。

```javascript
// 1. 复制场景
var pass0 = new BABYLON.PassPostProcess("Scene copy", 1.0, camera)

// 2. 降采样并提取高光
var pass1 = new BABYLON.PostProcess("Down sample", "./downsample", ["screenSize", "highlightThreshold"], null, 0.25, camera)

// 3. 水平模糊
var pass2 = new BABYLON.BlurPostProcess("Horizontal blur", new BABYLON.Vector2(1.0, 0), blurWidth, 0.25, camera)

// 4. 垂直模糊
var pass3 = new BABYLON.BlurPostProcess("Vertical blur", new BABYLON.Vector2(0, 1.0), blurWidth, 0.25, camera)

// 5. 最终合成
var pass4 = new BABYLON.PostProcess("Final compose", "./compose", ["sceneIntensity", "glowIntensity"], ["sceneSampler"], 1.0, camera)
```

#### 性能优化
 - 使用 ratio 参数（小于 1.0）可以降低分辨率以提升性能
 - 设置 reusable = true 可在多个相机间共享实例
 - 使用 shareOutputWith() 减少内存占用
 - 三线性采样强制使用 2 的幂次方尺寸


```javascript
// 创建自定义后期处理
var postProcess = new BABYLON.PostProcess(
  "My Effect",
  "./shaders/custom",
  ["time", "intensity"],
  ["noiseTexture"],
  0.75,
  camera
)

// 设置 uniform 参数
postProcess.onApply = function(effect) {
  effect.setFloat("time", performance.now() * 0.001)
  effect.setFloat("intensity", 0.5)
  effect.setTexture("noiseTexture", noiseTexture)
}
```