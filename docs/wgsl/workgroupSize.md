
# WebGPU `@compute @workgroup_size(${X}, ${Y}, ${Z})` 不同情况详解

计算着色器的逻辑是通过 workgroup 大小和 dispatch 参数来控制的。workgroup 大小决定了每个工作组的线程数，而 dispatch 参数决定了工作组的数量。
 
## 1. 基本概念
 
在 WebGPU 中，`@compute @workgroup_size(${X}, ${Y}, ${Z})` 用于定义计算着色器的工作组大小。工作组大小决定了每个工作组中包含的线程（工作项）数量，以及这些线程在三维空间中的分布。
 
- **`X`、`Y`、`Z`**：分别表示工作组在三个维度上的大小。未指定的维度默认为 1。
- **线程总数**：`X * Y * Z`，即每个工作组中的线程数量。
 
---
 
## 2. 不同情况分析
 
### 2.1 一维工作组
- **配置**：`@compute @workgroup_size(${X}, 1, 1)` 或简写为 `@compute @workgroup_size(${X})`
- **特点**：
  - 线程分布在 `X` 维度上，`Y` 和 `Z` 维度上只有一个线程。
  - 适用于处理一维数据（如数组或缓冲区）。
- **示例**：
```wgsl
@compute @workgroup_size(256, 1, 1)
fn main(@builtin(local_invocation_id) lid: vec3<u32>) {
  let index = lid.x; // 使用一维索引
  // 处理逻辑
}
```

## 2.2 二维工作组
- **配置**：`@compute @workgroup_size(${X}, ${Y}, 1)`
- **特点**：
  - 线程分布在 X 和 Y 维度上，Z 维度上只有一个线程。
  - 适用于处理二维数据（如图像）。
- **示例**：
```wgsl
@compute @workgroup_size(16, 16, 1)
fn main(@builtin(local_invocation_id) lid: vec3<u32>) {
  let index = lid.y * 16 + lid.x; // 转换为一维索引
  // 处理逻辑
}
```

### 2.3 三维工作组
- **配置**：`@compute @workgroup_size(${X}, ${Y}, ${Z})`
- **特点**：
  - 线程分布在 X、Y 和 Z 三个维度上
  - 适用于复杂的三维数据处理
- **示例**：
```wgsl
@compute @workgroup_size(8, 8, 4)
fn main(@builtin(local_invocation_id) lid: vec3<u32>) {
  let index = lid.z * 64 + lid.y * 8 + lid.x; // 转换为一维索引
  // 处理逻辑
}
```

## 3. 硬件限制
- **最大线程数**：`maxComputeInvocationsPerWorkgroup`（通常为 256）
- **最大工作组大小**：
  - `maxComputeWorkgroupSizeX`：256
  - `maxComputeWorkgroupSizeY`：256
  - `maxComputeWorkgroupSizeZ`：64
- **最大工作组数量**：`maxComputeWorkgroupsPerDimension`（通常为 65535）
 
## 4. 性能与优化
- **局部性优化**：相邻的工作组更可能访问相似的内存区域，顺序运行相邻工作组可以提高缓存命中率
- **工作组大小选择**：建议使用 64 作为工作组大小（X * Y * Z 的乘积），除非有明确的性能需求
