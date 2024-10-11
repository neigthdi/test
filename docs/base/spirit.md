## 精灵图

### 精灵管理器

需要创建一个“精灵管理器”来优化 GPU 资源，方法是在一个地方将精灵的多个实例分组。即使想创建一个精灵，管理器也是必需的。

创建精灵管理器时，必须要确定一些参数：  
&emsp;&emsp;Name: 精灵管理器的名称。  
&emsp;&emsp;图像的路径 (大多数情况下，使用的都是包含透明通道的图像格式，比如 png)。
&emsp;&emsp;精灵管理器的容量: 此管理器的最大实例的个数。  
&emsp;&emsp;单元格的大小，与图像的大小相对应。就是精灵可以显示图像的大小的内容。请注意，这个值可以使有宽度和高度属性组成的数字对象或数字（稍后还可以通过 spriteManager.cellWidth 和 spriteManager.cellHeight 修改）。  
&emsp;&emsp;场景对象，将精灵添加到的场景。

#### 创建一个精灵管理器

```javascript
let spriteManagerTrees = new BABYLON.SpriteManager(
  'treesManager',
  'Assets/Palm-arecaceae.png',
  2000,
  800,
  scene
)
```

#### 创建一个精灵

有了管理器，可以创建精灵添加到管理器上。

```javascript
let player = new BABYLON.Sprite('tree', spriteManagerTrees)
```

如果要向此实例添加参数，可以像处理其他网格一样操作它：

```javascript
player.position.y = -0.3
```

它作为一个精灵，可以使用设置它独有的参数：它们的大小和转向

```javascript
player.size = 0.3
player.angle = Math.PI / 4
player.invertU = -1
```

可以定义精灵的宽度和高度：

```javascript
player.width = 0.3
player.height = 0.4
```
