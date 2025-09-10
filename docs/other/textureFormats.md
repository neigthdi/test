# 纹理格式详解
 
## 颜色格式
|format|renderable|multisample|storage|sample type|bytes per pixel|
|------|----------|-----------|-------|------------|---------------|
|r8unorm|true|true|false|float|1|
|r8snorm|false|false|false|float|1|
|r8uint|true|true|false|uint|1|
|r8sint|true|true|false|sint|1|
|r16uint|true|true|false|uint|2|
|r16sint|true|true|false|sint|2|
|r16float|true|true|false|float|2|
|rg8unorm|true|true|false|float|2|
|rg8snorm|false|false|false|float|2|
|rg8uint|true|true|false|uint|2|
|rg8sint|true|true|false|sint|2|
|r32uint|true|false|true|uint|4|
|r32sint|true|false|true|sint|4|
|r32float|true|false|true|unfilterable-float|4|
|rg16uint|true|true|false|uint|4|
|rg16sint|true|true|false|sint|4|
|rg16float|true|true|false|float|4|
|rgba8unorm|true|true|true|float|4|
|rgba8unorm-srgb|true|true|false|float|4|
|rgba8snorm|false|false|true|float|4|
|rgba8uint|true|true|true|uint|4|
|rgba8sint|true|true|true|sint|4|
|bgra8unorm|true|true|false|float|4|
|bgra8unorm-srgb|true|true|false|float|4|
|rgb10a2unorm|true|true|false|float|4|
|rg11b10ufloat|false|false|false|float|4|
|rgb9e5ufloat|false|false|false|float|4|
|rg32uint|true|false|true|uint|8|
|rg32sint|true|false|true|sint|8|
|rg32float|true|false|true|unfilterable-float|8|
|rgba16uint|true|true|true|uint|8|
|rgba16sint|true|true|true|sint|8|
|rgba16float|true|true|true|float|8|
|rgba32uint|true|false|true|uint|16|
|rgba32sint|true|false|true|sint|16|
|rgba32float|true|false|true|unfilterable-float|16|
 
### 格式说明
- **通道表示**：如 `rg16float` 表示红(R)、绿(G)两个通道，每个通道16bits浮点型
- **数据类型**：
  - `unorm`：无符号归一化（0-1范围），整型最大值映射为1.0
  - `snorm`：有符号归一化（-1-1范围），整型范围映射为[-1,1]
  - `uint`/`sint`：无符号/有符号整型
  - `float`：浮点型
- **特殊标记**：
  - `unfilterable-float`：需采样器使用nearest过滤，且需手动创建绑定组布局（移动设备可能不支持）
  - 组合格式如 `rg11b10ufloat` 表示红绿通道11bits，蓝通道10bits，无符号浮点
 
## 深度和模板格式
|format|renderable|multisample|storage|sampler type|bytes per pixel|copy src|copy dst|feature|
|------|----------|-----------|-------|-------------|---------------|--------|--------|--------|
|depth32float|true|true|false|depth|4|true|false||
|depth16unorm|true|true|false|depth|2|true|true||
|stencil8|true|true|false|uint|1|true|true||
|depth24plus|true|true|false|depth||false|false||
|depth24plus-stencil8|true|true|false|depth||false|false||
|depth32float-stencil8|true|true|false|depth||false|false|depth32float-stencil8|
 
### 特殊属性说明
- **copy src/dst**：是否支持`GPUTextureUsage.COPY_SRC/DST`
- **feature**：使用需启用可选功能
 
## 关键概念
- **renderable**：可渲染到该纹理（需设置`GPUTextureUsage.RENDER_ATTACHMENT`）
- **multisample**：支持多重采样
- **storage**：可作为存储纹理写入
- **sampler type**：WGSL中纹理类型声明依据（如`texture_2d<f32>`对应float类型）
 
> 注：`unfilterable-float`格式在支持`float32-filterable`特性的设备上可自动升级为普通float格式，无需修改代码（2023年移动设备普遍不支持）
