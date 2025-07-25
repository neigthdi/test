`@builtin(global_invocation_id)` 是一个内置变量，表示全局线程的唯一标识符。     
`@builtin(workgroup_id)` 是一个内置变量，表示当前工作组在整个全局网格中的索引。   
`@builtin(local_invocation_id)` 是一个内置变量，表示当前线程在其所在工作组内的局部索引。   

***

假设图片 `imageSize`: 256 * 256  
设置了 `workgroup_size`: (16, 16, 1)  
那么，`dispatchWhenReady` 等于 (Math.ceil(imageSize / workGroupSize), Math.ceil(imageSize / workGroupSize), 1)     

### 计算过程：
1. **Dispatch 参数计算**：  
   - 图片尺寸是 `256x256`，`workgroup_size` 是 `(16, 16, 1)`。  
   - `dispatchWorkgroups` 的参数是：  
     ```javascript
     (Math.ceil(256 / 16), Math.ceil(256 / 16), 1) = (16, 16, 1)
     ```  
     这意味着会启动 `(256/16)x(256/16)x1` 个工作组（workgroups）。  

2. **全局线程范围**：  
   - 每个工作组包含 `16x16x1` 个线程（由 `workgroup_size` 决定）。  
   - 因此，全局线程的总数是：    
     - 全局线程总数=(工作组数量在 x 轴)×(每个工作组的线程数量在 x 轴)×(工作组数量在 y 轴)×(每个工作组的线程数量在 y 轴)  
     ```javascript
     (256/16) * 16 = 256 threads in x  
     (256/16) * 16 = 256 threads in y  
     ```  

3. **`global_id.xy` 的计算**：  
   - global_id.xy 是全局线程的索引，表示当前线程在整个全局网格中的位置。  
   - 对于任意线程，其 `global_id.xy` 可以表示为：
     ```javascript
     global_id.x = workgroup_id.x * 16 + local_invocation_id.x  范围是 0 ~ 15*16+15
     global_id.y = workgroup_id.y * 16 + local_invocation_id.y  范围是 0 ~ 15*16+15
     ```  
     其中：  
     - `workgroup_id.xy` 是当前工作组的索引（范围是 `0` 到 `15`）。  
     - `local_invocation_id.xy` 是线程在工作组内的索引（范围是 `0` 到 `15`）。
     - 通过将 workgroup_id.xy 乘以 workgroup_size.xy，得到了当前工作组的起始位置。再加上 local_invocation_id.xy，就可以得到当前线程在整个全局网格中的置。  

4. **总结**：
    - 全局线程总数：是通过 dispatchWorkgroups 的参数和 workgroup_size 计算的，表示整个全局网格中所有线程的数量。
    - global_id.xy 的计算：是为了确定每个线程在整个全局网格中的唯一位置。
    - 这两个概念虽然相关，但用途不同：
        - 全局线程总数：用于确定整个计算任务的规模。
        - global_id.xy：用于在计算过程中确定每个线程的具体位置，以便进行正确的计算和数据访问。

### 代码中的 `global_id.xy / dims`：  
- `dims` 是 `vec2<f32>(256.0, 256.0)`（因为 `textureDimensions(src, 0)` 返回 `(256, 256)`）。  
- `global_id.xy / dims` 会将 `global_id.xy` 归一化到 `[0, 1)` 范围：  
  - `global_id.x / 256.0` → `0.0` 到 `255.0/256.0`（即 `0.0` 到 `0.99609375`）  
  - `global_id.y / 256.0` → 同理。  
- 这样得到的纹理坐标可以直接用于 `textureSampleLevel`。  
