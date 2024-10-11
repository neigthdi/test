## 触发器

Action 是在场景中添加模型交互的一种简单方式。触发器触发需要指定一个动作触发。  
例如，可以指定用户单击（或者触摸）模型时，触发回调。  
要使用 Action，必须实例化 BABYLON.ActionManager 并添加给模型或场景。

```javascript
mesh.actionManager = new BABYLON.ActionManager(scene)
```

创建 ActionManager 后，可以注册触发事件：  
在触发模型单击后，一秒后将 light 的 diffuse 设置为黑色。

```javascript
mesh.actionManager.registerAction(
  new BABYLON.InterpolateValueAction(
    BABYLON.ActionManager.OnPickTrigger,
    light,
    'diffuse',
    BABYLON.Color3.Black(),
    1000
  )
)
```

还可以实现链式操作：  
第一次单击将光的颜色设置为黑色，第二次单击将模型的材质的网格设置为 false。

```javascript
mesh.actionManager
  .registerAction(
    new BABYLON.InterpolateValueAction(
      BABYLON.ActionManager.OnPickTrigger,
      light,
      'diffuse',
      BABYLON.Color3.Black(),
      1000
    )
  )
  .then(
    new BABYLON.SetValueAction(
      BABYLON.ActionManager.NothingTrigger,
      mesh.material,
      'wireframe',
      false
    )
  )
```

还可以增加判断。如果判断结果为 true，则会触发相关事件：
camera.alpha 只有在 light.diffuse 的值等于红色时，才会在 500 毫秒设置为 0。

```javascript
mesh.actionManager.registerAction(
  new BABYLON.InterpolateValueAction(
    BABYLON.ActionManager.OnPickTrigger,
    camera,
    'alpha',
    0,
    500,
    new BABYLON.PredicateCondition(mesh.actionManager, function () {
      return light.diffuse.equals(BABYLON.Color3.Red())
    })
  )
)
```

模型有 14 种不同的触发器，场景有三种。  
可用于模型的触发器有：  
BABYLON.ActionManager.（<---前缀）  
&emsp;NothingTrigger：无法触发，只用于具有 action.then 功能的子操作。  
&emsp;OnPickTrigger：当用户触摸/点击网格时触发。  
&emsp;OnDoublePickTrigger：当用户双击/点击网格时触发。  
&emsp;OnPickDownTrigger：当用户触摸/点击网格时触发。  
&emsp;OnPickUpTrigger：当用户触摸/点击网格时触发。  
&emsp;OnPickOutTrigger：当用户触摸/点击网格然后离开网格时触发。  
&emsp;OnLeftPickTrigger：当用户使用左键触摸/点击网格时触发。  
&emsp;OnRightPickTrigger：当用户使用右键触摸/点击网格时触发。  
&emsp;OnCenterPickTrigger：当用户触摸/点击带有中心按钮的网格时触发。  
&emsp;OnLongPressTrigger：当用户长时间触摸/点击网格时触发。  
&emsp;OnPointerOverTrigger：当指针在网格上时触发。只触发一次。  
&emsp;OnPointerOutTrigger：当指针不再位于网格上时触发。只触发一次。  
&emsp;OnIntersectionEnterTrigger：当网格与特定网格交叉时触发。只触发一次。  
&emsp;OnIntersectionExitTrigger：当网格不再与特定网格交叉时触发。只触发一次。

#### 请注意，两个模型交叉触发器需要指定相关模型，例如：

```javascript
mesh.actionManager.registerAction(
  new BABYLON.SetValueAction(
    {
      trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
      parameter: {
        mesh: otherMesh,
        usePreciseIntersection: true
      }
    },
    mesh,
    'scaling',
    new BABYLON.Vector3(1.2, 1.2, 1.2)
  )
)
```

请注意可选的 usePreciseIntersection 属性。如果不想计算精确交叉，只需要将目标模型作为值即可：

```javascript
mesh.actionManager.registerAction(
  new BABYLON.SetValueAction(
    {
      trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
      parameter: otherMesh
    },
    mesh,
    'scaling',
    new BABYLON.Vector3(1.2, 1.2, 1.2)
  )
)
```

可用于场景的触发器有：  
BABYLON.ActionManager.（<---前缀）  
&emsp;BABYLON.ActionManager.OnEveryFrameTrigger：每帧触发一次。  
&emsp;BABYLON.ActionManager.OnKeyDownTrigger：按下某个键时触发。  
&emsp;BABYLON.ActionManager.OnKeyUpTrigger：抬起某个键时触发。  
OnKeyUpTrigger 和 OnKeyDownTrigger 触发器都接受一个字符串参数值，事件触发会判断该值是否与 sourceEvent.key 值是否相同。  
这允许创建仅在某些键位才会触发的事件，如下所示：

```javascript
scene.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
    {
      trigger: BABYLON.ActionManager.OnKeyUpTrigger,
      parameter: 'r'
    },
    function () {
      console.log('按下了r键')
    }
  )
)
```

## 网格可实现的操作

大多数操作都需要一个 propertyPath 值，该值是字符串类型用于定义操作修改模型的属性的路径。  
可以设置 position 或 diffuse 值，也可以提供更复杂的路径比如 position.x 等其他。  
BABYLON.（<---前缀）

&emsp;SwitchBooleanAction(trigger, target, propertyPath, condition)：切换布尔属性。

&emsp;SetValueAction(trigger, target, propertyPath, value, condition)：设置属性的直接值。

&emsp;IncrementValueAction(trigger, target, propertyPath, value, condition)：将数字添加到数字属性。

&emsp;PlayAnimationAction(trigger, target, from, to, loop, condition)：在目标上播放动画。

&emsp;StopAnimationAction(trigger, target, condition)：停止目标正在播放的任何动画。

&emsp;DoNothingAction(trigger, condition)： 没做什么。

&emsp;CombineAction(trigger, children[], condition)：同时执行多个操作。children 属性必须是一系列操作。

&emsp;ExecuteCodeAction(trigger, func, condition)：执行函数触发。

&emsp;SetParentAction(trigger, target, parent, condition)：设置目标的父级。

&emsp;PlaySoundAction(trigger, sound, condition)：播放给定的声音。

&emsp;StopSoundAction(trigger, sound, condition)：停止给定的声音。

&emsp;InterpolateValueActiontrigger, target, propertyPath, value, duration, condition, stopOtherAnimations)：创建动画以将属性的当前值插入给定目标。支持以下类型：  
&emsp;&emsp; ● number  
&emsp;&emsp; ● BABYLON.Color3  
&emsp;&emsp; ● BABYLON.Vector3  
&emsp;&emsp; ● BABYLON.Quaternion

## Conditions 限制条件

限制条件属性的设置有三种：  
BABYLON.（<---前缀）  
&emsp;ValueCondition(actionManager, target, propertyPath, value, operator)：当给定的属性 propertyPath 和值 value 符合运算符 operator 时达到触发条件。支持以下运算符：  
&emsp;&emsp; ● BABYLON.ValueCondition.IsEqual  
&emsp;&emsp; ● BABYLON.ValueCondition.IsDifferent  
&emsp;&emsp; ● BABYLON.ValueCondition.IsGreater  
&emsp;&emsp; ● BABYLON.ValueCondition.IsLesser  
&emsp;PredicateCondition(actionManager, predicate)：当给定的函数 predicate 返回 true 时，则达到触发条件。  
&emsp;StateCondition(actionManager, target, value)：当目标的属性 target 与给定值 value 相同时，则达到触发条件。

## 实现一个动作

比如点击网格时，需要隐藏模型。  
首先，将向相关模型添加一个 BABYLON.ActionManager。

```javascript
mesh.actionManager = new BABYLON.ActionManager(scene)
```

其次，将注册与 BABYLON.ActionManager.OnPickTrigger 触发器关联的操作。此操作会将 mesh.visibility 属性插值为 0.2。

```javascript
mesh.actionManager.registerAction(
  new BABYLON.InterpolateValueAction(
    BABYLON.ActionManager.OnPickTrigger,
    mesh,
    'visibility',
    0.2,
    1000
  )
)
```

如果在淡出网格后，希望它重新淡入，可以通过链式操作将 mesh.visibility 属性恢复为默认值来实现。

```javascript
mesh.actionManager
  .registerAction(
    new BABYLON.InterpolateValueAction(
      BABYLON.ActionManager.OnPickTrigger,
      mesh,
      'visibility',
      0.2,
      1000
    )
  )
  .then(
    new BABYLON.InterpolateValueAction(
      BABYLON.ActionManager.OnPickTrigger,
      mesh,
      'visibility',
      1.0,
      1000
    )
  )
```

## 精灵

精灵有一个动作管理器。  
请注意，精灵的动作管理器 SpriteManager 必须通过设置属性 spriteManager.isPickable = true， sprite.isPickable = false / true（默认为 False） 来启动精灵的拾取支持。  
