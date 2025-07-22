## 模型加载卡顿，分片加载实现
```javascript
loader.load('factory.glb', gltf => {
  const mesh = gltf.scene.children[0]
  const geometry = mesh.geometry
  const totalFaces = geometry.index.count / 3
  let loadedFaces = 0
  const loadChunk = () => {
    const end = Math.min(loadedFaces + chunkSize, totalFaces)
    // 创建分片BufferGeometry   
    const subGeometry = new THREE.BufferGeometry()
    subGeometry.setIndex(geometry.index.slice(loadedFaces * 3, end * 3))
    subGeometry.setAttribute('position', geometry.attributes.position)
    scene.add(new THREE.Mesh(subGeometry, material))
    loadedFaces = end
    if (loadedFaces < totalFaces) {
      requestAnimationFrame(loadChunk) // 下一帧继续    }  };
      loadChunk()
    }
  }
})
```

## 材质切换闪烁，共享材质池方案
```javascript
// 创建材质池（避免重复创建）
const materialPool = {
  metalRed: new THREE.MeshPhysicalMaterial({
    color: 0xff0000,
    metalness: 0.8
  }),
  plasticBlue: new THREE.MeshStandardMaterial({
    color: 0x0000ff,
    roughness: 0.5
  }), // ...其他预定义材质
}
// 动态切换（汽车配置器案例）
function changePartMaterial(partName, materialKey) {
  const part = scene.getObjectByName(partName)
  if (part && materialPool[materialKey]) {
    part.material = materialPool[materialKey] // 直接引用共享材质   
    part.material.needsUpdate = true
  }
}
```

## 移动端发热，精准降级策略
```javascript
// 设备能力检测
const isLowEndDevice = navigator.hardwareConcurrency < 4 || navigator.deviceMemory < 2
// 动态调整配置
if (isLowEndDevice) {
  renderer.setPixelRatio(1) // 分辨率降级 
  scene.background = null // 移除环境贴图  
  postprocessingPasses = [] // 关闭后处理 
  textureLoader.setQuality(0.5) // 纹理压缩
}
```

## 点击事件不准，射线检测优化
```javascript
// 解决小物体难点击问题
const raycaster = new THREE.Raycaster()
raycaster.params = {
  Line: {
    threshold: 0.1
  }, // 线宽阈值  
  Points: {
    threshold: 12
  }, // 点选半径  
  Mesh: {} // 网格保持默认
}
// 添加点击区域辅助
function addHitBox(mesh, size = 1.2) {
  const box = new THREE.BoxHelper(mesh, 0xff0000)
  box.visible = false // 调试时可开启 
  box.geometry.computeBoundingSphere()
  mesh.userData.hitBox = box // 存储引用 
  scene.add(box)
}
// 检测时使用包围盒
raycaster.intersectObject(mesh.userData.hitBox)
```

## 内存泄漏，资源销毁清单
```javascript
// 场景切换时必须执行
function disposeScene() {
  scene.traverse(obj => {
    if (obj.isMesh) {
      obj.geometry.dispose() // 几何体  
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose())
        } else {
          obj.material.dispose() // 材质  
        }
      }
    }
    if (obj.texture) obj.texture.dispose() // 纹理 
  })
  renderer.dispose() // 渲染器 
  renderer.forceContextLoss() // 强制释放WebGL上下文
}
```


## 性能分析三板斧

##### 1、内存快照对比     
Chrome DevTools → Memory → Heap snapshot   

##### 2、关键指标：Detached DOM trees / GPU memory帧耗时分析    
```javascript
renderer.info.reset() // 每帧开始重置
renderer.render(scene, camera)
console.log(renderer.info.render) // 输出绘制耗时
```  

##### 3、GPU负载监控
```javascript
const ext = renderer.extensions.get('EXT_disjoint_timer_query_webgl2')
const query = ext.createQuery();ext.beginQuery(ext.TIME_ELAPSED_EXT, query)
// ...渲染代码
ext.endQuery(ext.TIME_ELAPSED_EXT)
```  

## 避坑指南

##### 1. 纹理压缩：iOS必须用PVR格式，Android用ASTC
```javascript
const texture = new THREE.CompressedTextureLoader().setPath('textures/').load('wall.astc.ktx') // 体积减少70%
```

##### 2. 动画卡顿：
```javascript
// 错误 ❌
function animate() {
  cube.rotation.x += 0.01;
  requestAnimationFrame(animate);
}
// 正确 ✅ 
function animate(timestamp) {
  const delta = clock.getDelta(); // 使用时间差
  cube.rotation.x += delta * speed;
}
```

##### 3. 内存黑洞：
```javascript
// 慎用！会复制整个几何体
const newGeo = geometry.clone() 
// 改用引用 + 矩阵变换
mesh.matrixAutoUpdate = false
mesh.matrix.multiply(transformationMatrix)
```
babylon.js写法就是用createInstance
```javascript
// 假设已有 scene 和原始 mesh
const original = BABYLON.MeshBuilder.CreateBox('box', {
  size: 1
}, scene)

// 禁用自动计算世界矩阵（等价于 matrixAutoUpdate = false）
original.computeWorldMatrix(false)

// 创建一个共享几何体的新实例（不复制顶点数据）
const instance = original.createInstance('instance1')

// 构造一个变换矩阵（例如平移 + 旋转）
const transform = BABYLON.Matrix.Compose(
  new BABYLON.Vector3(1, 1, 1), // 缩放
  BABYLON.Quaternion.RotationAxis(BABYLON.Vector3.Up(), Math.PI / 4), // 旋转
  new BABYLON.Vector3(2, 0, 0) // 平移
)

// 手动设置世界矩阵（避免 clone 几何体）
instance.setPreTransformMatrix(transform)
```
以下用instancedBuffers来区分颜色，但是不能用各自的shader，因为是共享
```javascript
// 1. 创建场景、相机、灯光（略）
const scene = new BABYLON.Scene(engine)
const camera = new BABYLON.ArcRotateCamera("cam", 0, 0, 10, BABYLON.Vector3.Zero(), scene)
camera.attachControl(canvas, true)
new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene)

// 2. 创建“母版”网格（original）——这里用一个 1×1×1 的方块
const original = BABYLON.MeshBuilder.CreateBox('masterBox', {
  size: 1
}, scene)

// 3. 启用顶点色（如果你后面想给每个实例独立的颜色）
original.hasVertexAlpha = true

// 4. 创建材质（简单 PBR 即可，也可以用 StandardMaterial）
const mat = new BABYLON.StandardMaterial('mat', scene)
mat.useVertexColors = true // 启用顶点色
original.material = mat

// 5. 注册实例化颜色缓冲
original.registerInstancedBuffer('color', 4) // 4 个分量：r,g,b,a

// 4. 给原始网格设置颜色（默认颜色）
original.instancedBuffers.color = new BABYLON.Color4(1, 0, 1, 1) // 白色

// 6. 开始生成实例
const instance1 = original.createInstance('i1')
const instance2 = original.createInstance('i2')
console.log(instance1)

// 7. 给 instance1 实例单独设置颜色
instance1.instancedBuffers.color = new BABYLON.Color4(1, 0, 0, 1) // 红

// 8. 位置区分一下，方便观察
instance1.position.x = -1.2
instance2.position.x = 1.2
```

