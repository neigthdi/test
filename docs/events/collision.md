## 物体碰撞检测

通过 intersectsMesh()api 实现物体间碰撞检测。  
通过 intersectsPoint()api 实现物体与点间的碰撞检测。

```javascript
mesh1.intersectMesh(mesh2)
```

## 物理引擎

Babylon.js 具有物理引擎插件系统，有助于向场景中添加交互。  
该引擎具有类和 API，可帮助应用应用脉冲、力、改变速度、回调函数，以便在需要时以及在网格与其他网格发生碰撞时需要执行某些操作时调用。  
可以使用的物理插件-  
&emsp;&emsp;Cannon  
&emsp;&emsp;Oimo  
&emsp;&emsp;Energy
&emsp;&emsp;Havok

要为场景添加物理引擎

```javascript
scene.enablePhysics()
// 或者，重力为55g的场景
scene.enablePhysics(new BABYLON.Vector3(0, -55, 0), new BABYLON.OimoJSPlugin())
```

对于交互，物理引擎使用 impostor。   
当应用于 impostor 时，对象的形状不能改变。如果更改，则必须创建新的 impostor 。

```javascript
mesh.physicsImpostor = newBABYLON.PhysicsImpostor(
  g,
  BABYLON.PhysicsImpostor.BoxImpostor,
  {
    mass: 0, // 质量
    friction: 0.5, // 摩檫力
    restitution: 0.9 // 恢复系数
  },
  scene
)
```

给模型添加设置一个冲量     
公式：I = F * Δt      

```javascript
redSphere.physicsImpostor = new BABYLON.PhysicsImpostor(
  redSphere,
  BABYLON.PhysicsImpostor.SphereImpostor,
  {
    mass: 1,
    restitution: 0.9
  },
  scene
)
redSphere.physicsImpostor.applyImpulse(
  new BABYLON.Vector3(1, 2, -1),
  new BABYLON.Vector3(1, 2, 0)
)
```

给模型添加设置一个线性速度

```javascript
box.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(1, 0, 1))
```

给模型设置一个力    
&emsp;&emsp;box.physicsImpostor.applyForce(force, worldPosition)     
worldPosition：   
&emsp;&emsp;一个 BABYLON.Vector3 对象，表示力的作用点（世界坐标）       
&emsp;&emsp;如果传递 null，力将作用在物体的质心（center of mass）     
```javascript
// 施加力：向上 10N 的力，作用在质心
box.physicsImpostor.applyForce(new BABYLON.Vector3(0, 10, 0), null);
```

可以简单的设置冲量或者设置力来使物体运动。也可以通过冲量来计算力，来使得物体运动   

```javascript
// 创建一个盒子
const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);
box.position = new BABYLON.Vector3(0, 5, 0); // 放置在空中
 
// 为盒子添加物理模拟
box.physicsImpostor = new BABYLON.PhysicsImpostor(
  box,
  BABYLON.PhysicsImpostor.BoxImpostor,
  { mass: 1, restitution: 0.9 }, // 质量为1，弹性系数为0.9
  scene
);
 
// 模拟 applyImpulse：通过短时间施加一个较大的力来模拟冲量
function applyImpulse(impostor, impulseVector) {
  const duration = 0.01; // 模拟一个非常短的时间间隔
  const force = impulseVector.scale(1 / duration); // 将冲量转换为力
  impostor.applyForce(force, null); // 在短时间内施加力
}
 
// 示例：施加一个冲量
const impulseVector = new BABYLON.Vector3(10, 0, 0); // 冲量向量
applyImpulse(box.physicsImpostor, impulseVector);
```

物理形状检测的基准类型可以是以下之一，    
BABYLON.PhysicsImpostor.（<---前缀）    
&emsp;SphereImpostor：以球型为基准，进行检测    
&emsp;BoxImpostor：以盒子为基准，进行检测    
&emsp;MeshImpostor：以物体网格为基准，进行检测    
&emsp;PlaneImpostor：以平面为基准进行检测的。它通常用于模拟地面、墙壁或其他平面物体。这种检测器在处理与平面的碰撞时非常高效，因为它将物体视为一个无限大的平面         
&emsp;CylinderImpostor：是以圆柱体为基准进行检测的。它适用于模拟圆柱形物体，如柱子、管道等。这种检测器将物体视为一个圆柱体，能够准确地处理与圆柱体的碰撞   
&emsp;ParticleImpostor：是用于模拟粒子系统的碰撞检测。它通常用于处理大量的小物体（如粒子），这些物体的运动和碰撞需要高效处理。ParticleImpostor 通常会使用简化的碰撞模型，以提高性能   
&emsp;HeightmapImpostor：是以高度图（Heightmap）为基准进行检测的。高度图是一种二维数组，每个点的高度值定义了地形的形状。这种检测器通常用于模拟复杂的地形，如山脉、山谷等。它会根据高度图数据来计算碰撞点和碰撞响应   
&emsp;ConvexHullImpostor：是以凸包（Convex Hull）为基准进行检测的。凸包是包含物体所有点的最小凸多边形。这种检测器适用于复杂形状的物体，通过将物体的网格简化为凸包来提高碰撞检测的效率    
&emsp;CompoundImpostor：是以组合形状为基准进行检测的。它允许将多个简单的碰撞检测器组合在一起，形成一个复杂的碰撞模型。例如，你可以将一个 BoxImpostor 和一个 SphereImpostor 组合在一起，形成一个更复杂的碰撞形状    

### 质量

唯一的强制参数是质量，即物体的质量。 0 作为值时，将创建一个静态 impostor。

### 摩檫力

接触面上产生阻碍相对运动或相对运动趋势的力，将力逐渐削弱

### 恢复原状

碰撞到物体时将"返回"的力的大小。较低的值不会产生反弹，而值为 1 将是非常有弹性的交互。
