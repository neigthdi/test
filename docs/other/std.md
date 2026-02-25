# 为什么是 layout(std140)


`layout(std140)` 是 OpenGL/GLSL 中定义 Uniform Buffer Object (UBO) 内存布局的标准规则。

## 核心问题：CPU 和 GPU 内存对齐不一致

CPU 和 GPU 存储数据的方式不同，如果没有统一标准，CPU 写的数据 GPU 读出来会是错的。

 <a href="/components/babylonShaderGlsl2.html#模拟体积云【使用ubo方式-而不是传统uniform方式】" target="_blank">以cloudUbo为例子</a>

CPU 视角（紧密排列）：
[cameraPosition.x][cameraPosition.y][cameraPosition.z][uTime]
4字节           4字节           4字节         4字节
= 16字节连续

GPU 视角（std140 要求 vec3 按16字节对齐）：
[cameraPosition.x][cameraPosition.y][cameraPosition.z][填充]
4字节           4字节           4字节         4字节(必须填充)
= 16字节，uTime 必须从下一个16字节边界开始

## std140 对齐规则详解

| 类型 | 对齐要求 | 占用大小 | 说明 |
|------|---------|---------|------|
| float | 4 字节 | 4 字节 | 标准4字节对齐 |
| vec2 | 8 字节 | 8 字节 | 2个float，8字节对齐 |
| vec3 | 16 字节 | 12 字节 | 3个float，但必须按16字节边界对齐 |
| vec4 | 16 字节 | 16 字节 | 完美对齐 |
| mat4 | 16 字节 | 64 字节 | 4个vec4，每列16字节对齐 |
| 数组 | 16 字节 | 元素大小补到16倍数 | 每个元素按16字节对齐 |

### 关键规则：vec3 后面必须填充

    layout(std140) uniform Example {
        vec3 a;      // 偏移 0,  占用 0-11,  填充 12-15 (浪费4字节)
        float b;     // 偏移 16, 占用 16-19, 完美对齐
        
        vec3 c;      // 偏移 32, 占用 32-43, 填充 44-47
        vec4 d;      // 偏移 48, 占用 48-63, 完美对齐
        
        float e;     // 偏移 64, 占用 64-67
        vec3 f;      // 偏移 80! 不是68! 必须跳到下一个16字节边界
                     // 占用 80-91, 填充 92-95
    };

## 对比：不用 std140 会怎样？

### 错误示例（紧密布局）

假设 CPU 这样写数据（错误理解）：
cameraPosition (vec3): 字节 0-11
uTime (float):         字节 12-15

代码：
    uniform SceneData {  // 没有 layout 修饰符，实现定义的行为
        vec3 cameraPosition;  // GPU 可能期望在 0-15，实际用了 0-11
        float uTime;          // GPU 读 16-19，但 CPU 写了 12-15！
    };

结果：uTime 读到的是垃圾数据，云朵可能静止不动或疯狂闪烁。

### 正确示例（std140 布局）

    layout(std140) uniform SceneData {
        vec3 cameraPosition;  // 字节 0-11，填充 12-15
        float uTime;          // 字节 16-19，正确！
    };

CPU 端 Babylon.js 的 UniformBuffer 会自动处理这种对齐：

    cloudUniformBuffer.addUniform("cameraPosition", 3)  // vec3，内部按16字节处理
    cloudUniformBuffer.addUniform("uTime", 1)           // float，自动从偏移16开始

## 代码中的具体应用

    layout(std140) uniform SceneData {
        mat4 worldViewProjection;  // 偏移 0,   大小 64,  结束 63
        mat4 world;                // 偏移 64,  大小 64,  结束 127
        vec3 cameraPosition;       // 偏移 128, 大小 12,  结束 139, 填充 140-143
        float uTime;               // 偏移 144, 大小 4,   结束 147
        vec3 uBoxMin;              // 偏移 160! 大小 12,  结束 171, 填充 172-175
        float uCloudDensity;       // 偏移 176, 大小 4,   结束 179
        vec3 uBoxMax;              // 偏移 192! 大小 12,  结束 203, 填充 204-207
        float _padding1;           // 偏移 208, 大小 4,   结束 211
        vec3 uSunDirection;        // 偏移 224! 大小 12,  结束 235, 填充 236-239
        float _padding2;           // 偏移 240, 大小 4,   结束 243
        vec3 uCloudColor;          // 偏移 256! 大小 12,  结束 267, 填充 268-271
        float _padding3;           // 偏移 272, 大小 4,   结束 275
    }; // 总大小：276 字节，实际分配 288（对齐到16字节倍数）

## 为什么要手动加 _padding？

因为 vec3 后面如果跟另一个 vec3，第二个 vec3 必须跳到下一个 16 字节边界，造成隐式填充。显式声明 _padding 可以让代码意图更清晰，避免未来修改时破坏对齐。

不推荐：隐式填充，容易出错
    vec3 uBoxMax;      
    vec3 uSunDirection;  // 实际在 192，不是 176！中间有16字节空洞

推荐：显式控制
    vec3 uBoxMax;      
    float _padding1;     // 明确标记这里需要填充
    vec3 uSunDirection;  // 确定在 208

## 其他布局选项对比

| 布局 | 说明 | 缺点 |
|------|------|------|
| std140 | 标准统一布局，跨平台 | 有填充，内存利用率略低 |
| std430 | 更紧凑，允许 vec3 后紧跟数据（12字节对齐） | 仅用于 SSBO（Shader Storage Buffer），不兼容 UBO |
| packed | 编译器自动优化，无填充 | 不可移植，不同 GPU 结果不同 |
| shared | 默认，由实现定义 | 不可移植，通常等于 std140 |

## 结论

UBO 必须使用 std140，这是唯一跨平台可靠的标准。SSBO（更大更灵活的缓冲区）可以用 std430 节省内存，但 WebGL/Babylon.js 对 SSBO 支持有限。
