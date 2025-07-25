# WGSL 存储类（Storage Classes）详解
 
在 WebGPU Shading Language (WGSL) 中，`var` 声明变量时需要指定**存储类**（storage class）和**访问模式**（access mode）。以下是完整的存储类及用法说明：
 
## 1. 存储类类型
 
### (1) `function`
- **作用域**：默认存储类别，函数内部自动栈分配。
- **生命周期**：函数调用期间，生命周期仅限一次调用。
- **示例**：
```wgsl
fn foo() {
    var<function> localVar: i32 = 42; // 函数局部变量
}
```
 
### (2) `private`
- **作用域**：当前着色器模块。每线程私有，跨 dispatches 保持值。
- **生命周期**：整个着色器执行期间。常用于持久状态或缓存。
- **示例**：
```wgsl
var<private> moduleVar: f32 = 0.0; // 模块级私有变量
```
 
### (3) `workgroup`
- **作用域**：同一工作组（Workgroup）内的线程。
- **用途**：计算着色器中共享数据。
- **示例**：
```wgsl
var<workgroup> sharedData: array<f32, 16>; // 工作组共享内存
```
```wgsl
@compute @workgroup_size(64)
fn main() {
    var<workgroup> scratch : array<f32, 64>;
}
```
 
### (4) `uniform`
- **作用域**：通过绑定组传递的只读统一缓冲区。只读，适合高频访问的小块数据（最多 64 KiB）。
- **用途**：存储跨绘制调用的常量数据（如变换矩阵）。
- **示例**：
```wgsl
struct Uniforms {
    color: vec4<f32>;
};
@group(0) @binding(0) var<uniform> uniforms: Uniforms;
```
```wgsl
struct Cam {
    view_proj : mat4x4<f32>,
    pos       : vec3f,
};
var<uniform> camera : Cam;
```
 
### (5) `storage`
- **作用域**：通过绑定组传递的读写存储缓冲区。支持大容量（通常几 GiB），可读写或只读。
- **访问模式**：必须指定 `read` 或 `read_write`（默认 read）。若只想写，用 var<storage, write>。
- **示例**：
```wgsl
struct Data { values: array<f32> };
@group(0) @binding(1) var<storage, read_write> bufferData: Data;
```
```wgsl
struct Particles {
    pos : array<vec4f>,
};
var<storage, read_write> particles : Particles;
```
 
### (6) `push_constant`
- **作用域**：通过推送常量传递的小型只读数据。
- **用途**：高频更新的少量数据（如每帧参数）。
- **示例**：
```wgsl
struct PushConstants { offset: vec2<f32> };
var<push_constant> constants: PushConstants;
```
```wgsl
var<push_constant> pc : PushConstants;
```
 
## 2. 访问模式（Access Modes）
 
仅适用于 `storage` 存储类：
- `read`：只读访问。
- `read_write`：读写访问（需在 WebGPU 中显式启用存储缓冲区写入）。
 
## 3. 完整示例
 
```wgsl
// 模块级变量
var<private> counter: i32 = 0;
 
// 工作组共享内存
var<workgroup> workgroupSum: array<f32, 16>;
 
// 统一缓冲区
struct Camera {
    viewProj: mat4x4<f32>;
};
@group(0) @binding(0) var<uniform> camera: Camera;
 
// 存储缓冲区（读写）
struct Particle {
    position: vec3<f32>;
    velocity: vec3<f32>;
};
@group(1) @binding(0) var<storage, read_write> particles: array<Particle>;
 
@compute @workgroup_size(64)
fn main() {
    // 函数局部变量
    var<function> index: u32 = gl_LocalInvocationIndex;
    
    // 使用工作组内存
    workgroupSum[index] = particles[index].position.x;
    
    // 修改存储缓冲区
    particles[index].position += particles[index].velocity;
}
```
 
## 4. 注意事项
1. **性能影响**：`workgroup` 存储类通常使用 GPU 共享内存，速度远快于全局内存。
2. **同步**：修改 `storage, read_write` 变量需通过 `workgroupBarrier()` 同步。
3. **限制**：`push_constant` 大小通常限制为 128 字节（由实现定义）。
 
## 5. 参考链接
- [WebGPU WGSL 规范](https://www.w3.org/TR/WGSL/)
- [WebGPU 存储类文档](https://gpuweb.github.io/gpuweb/wgsl/#storage-class)