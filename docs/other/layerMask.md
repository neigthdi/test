## LayerMask

layerMask 是一个非常有用的属性，用于控制哪些对象可以与特定的渲染目标（如阴影贴图、渲染目标纹理等）交互。它通常用于以下几种场景：   

### 1. 控制阴影投射和接收      
layerMask 可以用于控制哪些对象可以投射阴影，以及哪些对象可以接收阴影。这对于优化阴影渲染和避免不必要的计算非常有用。    
假设有一个场景，其中包含多个对象，但只想让某些对象投射阴影，而其他对象不投射阴影。可以通过设置 layerMask 来实现这一点。    
```javascript
const light = new DirectionalLight("light", new Vector3(0, -1, 0), scene)
light.includeOnlyWithLayerMask = 0b0001 // 只有 layerMask 为 0b0001 的对象会投射阴影

const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene)
sphere.layerMask = 0b0001 // 这个对象会投射阴影

const box = MeshBuilder.CreateBox("box", { size: 2 }, scene)
box.layerMask = 0b0010 // 这个对象不会投射阴影
```

### 2. 射线检测

```javascript
// 创建两个立方体，分别属于不同的层级
const box1 = BABYLON.MeshBuilder.CreateBox('box1', {
  size: 1
}, scene)
box1.position = new BABYLON.Vector3(0, 1, 0)
box1.layerMask = 0x1 // 设置层级掩码为0x1

const box2 = BABYLON.MeshBuilder.CreateBox('box2', {
  size: 1
}, scene)
box2.position = new BABYLON.Vector3(0, 1, 2)
box2.layerMask = 0x2 // 设置层级掩码为0x2

// 创建射线
const ray = new BABYLON.Ray(new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 1))

// 射线检测
canvas.addEventListener('click', function(event) {
  // 将屏幕坐标转换为射线
  const pickResult1 = scene.pick(scene.pointerX, scene.pointerY, function(mesh) {
    return mesh.layerMask === 0x1 // 只检测层级掩码为0x1的物体
  })

  const pickResult2 = scene.pick(scene.pointerX, scene.pointerY, function(mesh) {
    return mesh.layerMask === 0x2 // 只检测层级掩码为0x2的物体
  })

  if (pickResult1.hit) {
    console.log('Box 1 Clicked!')
  } else if (pickResult2.hit) {
    console.log('Box 2 Clicked!')
  } else {
    console.log('No Box Clicked.')
  }
})
```

### 3. 多相机场景下的选择性渲染
场景：需要同时显示多个相机视图（如主界面、UI层、小地图），且不同视图需渲染不同对象。   
实现方式：   
&emsp;&emsp;为每个相机分配唯一的layerMask（如0x1、0x2等）。   
&emsp;&emsp;为需要被特定相机渲染的对象设置相同的layerMask。    
&emsp;&emsp;相机仅渲染与其layerMask匹配的对象。   

```javascript
// 相机1渲染layerMask为0x1的对象
const camera1 = new BABYLON.ArcRotateCamera("camera1", ...)
camera1.layerMask = 0x1
 
// 相机2渲染layerMask为0x2的对象
const camera2 = new BABYLON.ArcRotateCamera("camera2", ...)
camera2.layerMask = 0x2
 
// 对象1仅被相机1渲染
const mesh1 = BABYLON.MeshBuilder.CreateBox("box1", ...)
mesh1.layerMask = 0x1
 
// 对象2仅被相机2渲染
const mesh2 = BABYLON.MeshBuilder.CreateBox("box2", ...)
mesh2.layerMask = 0x2
```