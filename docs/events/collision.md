## 物体碰撞检测

通过 intersectsMesh()api 实现物体间碰撞检测。  
通过 intersectsPoint()api 实现物体与点间的碰撞检测。

```javascript
mesh1.intersectMesh(mesh2)
```

## 物理引擎

Babylon.js 具有物理引擎插件系统，有助于向场景中添加交互。  
该引擎具有类和 API，可帮助应用应用脉冲、力、改变速度、回调函数，以便在需要时以及在网格与其他网格发生碰撞时需要执行某些操作时调用。  
可以使用 3 个物理插件-  
&emsp;&emsp;Cannon.js  
&emsp;&emsp;Oimo.js  
&emsp;&emsp;Energy.js

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

对于球体，将设置 impostor 当应用于并为其添加脉冲以实现反弹效果

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

物理形状检测的基准类型可以是以下之一，    
BABYLON.PhysicsImpostor.（<---前缀）    
&emsp;SphereImpostor：以球型为基准，进行检测    
&emsp;BoxImpostor：以盒子为基准，进行检测    
&emsp;MeshImpostor：以物体网格为基准，进行检测    
&emsp;PlaneImpostor：  
&emsp;CylinderImpostor：  
&emsp;ParticleImpostor：  
&emsp;HeightmapImpostor：  

### 质量

唯一的强制参数是质量，即物体的质量。 0 作为值时，将创建一个静态 impostor。

### 摩檫力

接触面上产生阻碍相对运动或相对运动趋势的力，将力逐渐削弱

### 恢复原状

碰撞到物体时将"返回"的力的大小。较低的值不会产生反弹，而值为 1 将是非常有弹性的交互。
