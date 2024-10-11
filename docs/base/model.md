## babylonjs 基础几何模型

```javascript
//球
// 名字, 细分段数 (高度细节或不需), 大小, 将被放到的场景
let sphere = BABYLON.MeshBuilder.CreateSphere('sphere', 10, 1, scene)
sphere.position = new BABYLON.Vector3(-5, 3, 0)
```

```javascript
// 盒子
let box = BABYLON.MeshBuilder.CreateBox('box', 2, scene)
box.position = new BABYLON.Vector3(5, 3, 0)
```

```javascript
// 平面
let plane = BABYLON.MeshBuilder.CreatePlane('plane', 10, scene)
plane.position = new BABYLON.Vector3(0, -2, -50)
plane.rotation.y = Math.PI
```

```javascript
// 圆柱
let cylinder = BABYLON.MeshBuilder.CreateCylinder(
  'cylinder',
  3,
  3,
  3,
  12,
  scene,
  false
)
cylinder.position = new BABYLON.Vector3(0, -3, 0)
```

```javascript
// 圆环体
let torus = BABYLON.MeshBuilder.CreateTorus('torus', 5, 1, 10, scene, false)
torus.position = new BABYLON.Vector3(0, 2, 0)
```

## 导入模型

### 一、BABYLON.SceneLoader

#### 1、BABYLON.SceneLoader.ImportMeshAsync

此方法是 promise，有 then 回调，用 async/await。

```javascript
// Model name: 可以是两种类型：“”或者["1","2"…]
// Folder path: 文件路径
// File name: 文件名
// Scene: 可以指定场景，不填写就是默认场景
const res = await BABYLON.SceneLoader.ImportMeshAsync(
  'model name',
  'folder path',
  'file name',
  'scene'
)
```

#### 2、BABYLON.SceneLoader.Append

从文件夹中加载所有的模型资源，并添加到 babylonjs 中。

```javascript
// 文件夹路径
// 资源名称
// 场景对象
// 回调函数
BABYLON.SceneLoader.Append('./', 'xxxx.gltf', scene, (scene) => {})
```

#### 3、BABYLON.SceneLoader.ImportMesh

从文件夹中加载模型并添加到场景中。  
和 append 区别在于，回调返回的是模型对象，而不是场景对象。  
可以在成功回调中，对模型进行进一步的处理。

```javascript
// 将要添加到场景中的模型，或者空（将所有模型或者骨骼加载）
// 文件夹路径
// 资源名称
// 场景对象
// 回调函数
BABYLON.SceneLoader.ImportMesh(
  ['mesh1', 'mesh2'],
  './',
  'xxxx.gltf',
  scene,
  (meshes, pariticleSystems, skeletons) => {
    // 对骨骼和模型进一步操作
    // 对gltf文件，粒子系统默认为空
  }
)
```

#### 4、BABYLON.SceneLoader.Load

从文件夹中加载模型文件，并创建一个新的场景对象。

```javascript
// 文件夹路径
// 资源名称
// 引擎对象
// 回调函数
BABYLON.SceneLoader.Load('/assets/', 'xxxx.obj', engine, (scene) => {})
```

#### 5、BABYLON.SceneLoader.LoadAssetContainer

从文件夹中添加所有的资源到 babylon，但不会自动添加到场景中。  
回调函数返回一个容器对象，包含所有模型加载的资源光源、模型、相机等。

```javascript
// 文件夹路径
// 资源名称
// 场景对象
// 回调函数
BABYLON.SceneLoader.LoadAssetContainer(
  './',
  'xxxx.gltf',
  scene,
  (container) => {
    let meshes = container.meshes
    let materials = container.materials
    // 添加模型到场景中
    container.addAllToScene()
    // 将添加的容器内容从场景中删除
    container.removeAllFromScene()
  }
)
```

#### 6、BABYLON.SceneLoader.Append Async

可以使用 async 实现链式回调

```javascript
// 文件夹路径
// 资源名称
// 场景对象
BABYLON.SceneLoader.Append('./', 'xxxx.gltf', scene).then((scene) => {})
```

### 二、BABYLON.AssetsManager

```javascript
let assetsManager = new BABYLON.AssetsManager(scene)
// 通过管理器的addMeshTask方法添加任务
let meshTask = assetsManager.addMeshTask(
  'Model name("bunny")',
  '',
  'Folder path("/uploads/161101/")',
  'File name("bunny.obj")'
)
// 每个任务都有一个成功回调和错误回调
meshTask.onSuccess = function (task) {
  task.loadedMeshes[0].position = BABYLON.Vector3.Zero()
}
meshTask.onError = function (task, message, exception) {
  console.log(message, exception)
}

// 开始任务
// 设置好任务以后，开启必须调用开始：

assetsManager.load()
```

```javascript
// 也可以使用相同的方式加载文本addTextFileTask和二进制文件addBinaryFileTask
let textTask = assetsManager.addTextFileTask('text task', 'msg.txt')
textTask.onSuccess = function (task) {
  console.log(task.text)
}
let binaryTask = assetsManager.addBinaryFileTask('binary task', 'grass.jpg')
binaryTask.onSuccess = function (task) {
  // Do something with task.data
}
```

```javascript
// 管理器也支持加载图像addImageTask
let imageTask = assetsManager.addImageTask('image task', 'img.jpg')
imageTask.onSuccess = function (task) {
  console.log(task.image.width)
}
```

```javascript
// 管理器也可以通过addTextureTask来创建加载纹理任务：
let textureTask = assetsManager.addTextureTask('image task', 'img.jpg')
textureTask.onSuccess = function (task) {
  material.diffuseTexture = task.texture
}
```

```javascript
// 通过管理器也可以访问错误，或者内部的回调：
assetsManager.onTaskErrorObservable.add(function (task) {
  console.log(
    'task failed',
    task.errorObject.message,
    task.errorObject.exception
  )
})

assetsManager.onTaskSuccessObservable.add(function (task) {
  console.log('task successful', task)
})

assetsManager.onTasksDoneObservable.add(function (tasks) {
  let errors = tasks.filter(function (task) {
    return task.taskState === BABYLON.AssetTaskState.ERROR
  })

  let successes = tasks.filter(function (task) {
    return task.taskState !== BABYLON.AssetTaskState.ERROR
  })
})

assetsManager.onProgress = function (
  remainingCount,
  totalCount,
  lastFinishedTask
) {
  engine.loadingUIText =
    'We are loading the scene. ' +
    remainingCount +
    ' out of ' +
    totalCount +
    ' items still need to be loaded.'
}

assetsManager.onFinish = function (tasks) {
  engine.runRenderLoop(function () {
    scene.render()
  })
}
```
