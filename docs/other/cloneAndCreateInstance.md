## mesh.clone 和 mesh.createInstance

把物体复制或者实例化，实例化的保留材质 ，如果源材质更改，实例化的也更改，而克隆的就脱离关系。

```javascript
const sphere = BABYLON.MeshBuilder.CreateSphere(
  'sphere',
  {
    diameter: 0.2
  },
  scene
)
const roof = BABYLON.MeshBuilder.CreateCylinder('roof', {
  diameter: 1.3,
  height: 1.2,
  tessellation: 3
})
const house = BABYLON.MeshBuilder.MergeMeshes(
  [sphere, roof],
  true,
  false,
  null,
  false,
  true
)
```

```javascript
clonedHouse = house.clone('clonedHouse')
instanceHouse = house.createInstance('instanceHouse')
```

## BABYLON.InstancedMesh

创建保龄球瓶，将使用圆柱体，只需将一个圆柱体倍增多次即可（确切地说，是 10 次）。
在 Babylon.js 中，将这样倍增的对象称为实例。实例就是网格的精确副本（在空间中的转换除外）。
也就是说，不能更改实例的几何图形和纹理，但可以更改实例的位置、缩放和旋转。
如果想要 10 个保龄球瓶，将会创建 1 个保龄球瓶并禁用它，然后在 10 个预定义位置上创建 10 个保龄球瓶实例：

```javascript
function createPins(scene) {
  var mainPin = BABYLON.MeshBuilder.CreateCylinder(
    'pin',
    pinHeight,
    pinDiameter / 2,
    pinDiameter,
    6,
    1,
    scene
  )
  mainPin.setEnabled(false)
  return pinPositions.map(function (positionInSpace, idx) {
    var pin = new BABYLON.InstancedMesh('pin-' + idx, mainPin)
    pin.position = positionInSpace
    return pin
  })
}
```
