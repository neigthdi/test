## 创建环境声音或音乐

支持的声音格式是浏览器中的一种。通常至少是.mp3 和.wav。  
参数：  
&emsp;&emsp;name：声音的名称。  
&emsp;&emsp;url：要加载的声音的 URL。  
&emsp;&emsp;scene：要附加声音的场景。  
&emsp;&emsp;callback：一旦声音准备好播放就被回调的函数。  
&emsp;&emsp;JSON：一个 JSON 对象，音乐得相关选项参数。

```javascript
// Load the sound and play it automatically once ready
let music = new BABYLON.Sound('Music', 'music.wav', scene, null, {
  loop: true,
  autoplay: true
})
```

## 处理“准备播放”回调函数

BABYLON.Sound()使用 URL 调用构造函数会生成两个阶段：  
&emsp;&emsp;1、.wav 或 .mp3 文件是使用异步 XHR 从网络服务器加载的。  
&emsp;&emsp;2、一旦加载，声音就会被网络音频异步解码。如果成功，它会引发提供的回调函数。

此代码 music.wav 从 Web 服务器加载文件，对其进行解码并仅使用该 play()函数在回调函数中播放一次。  
如果没有传递参数， play 函数会立即播放声音。可以提供类型为 number 的参数以在 x 秒后播放声音。

```javascript
let music = new BABYLON.Sound('Music', 'music.wav', scene, function () {
  // Sound has been downloaded & decoded
  music.play()
})
```

## 在鼠标单击或按键时播放声音

如果左键单击或按空格键，此示例代码会播放枪声。

```javascript
let gunshot = new BABYLON.Sound('gunshot', 'sounds/gunshot.wav', scene)

window.addEventListener('mousedown', function (evt) {
  // left click to fire
  if (evt.button === 0) {
    gunshot.play()
  }
})
window.addEventListener('keydown', function (evt) {
  // Press space key to fire
  if (evt.keyCode === 32) {
    gunshot.play()
  }
})
```

## 一些基本属性

可以通过选项对象或 setVolume()函数设置声音的音量。可以以相同的方式设置播放速率。  
还可以通过将自己注册到 onended 事件中来在声音播放完毕时收到通知。

```javascript
// 首先以 0.5 的播放速率和 0.1 的音量创建声音。
// 每次播放声音时，在结束时，将调用 oneded 函数，音量和播放速率将增加。
let volume = 0.1
let playbackRate = 0.5
let gunshot = new BABYLON.Sound('Gunshot', './gunshot-1.wav', scene, null, {
  playbackRate: playbackRate,
  volume: volume
})
gunshot.onended = function () {
  if (volume < 1) {
    volume += 0.1
    gunshot.setVolume(volume)
  }
  playbackRate += 0.1
  gunshot.playbackRate = playbackRate
}
```

除了设置特定声音的音量之外，还可以使用 setGlobalVolume()音频引擎的功能设置 Babylon.js 播放的所有声音的全局音量。

```javascript
BABYLON.Engine.audioEngine.setGlobalVolume(0.5)
```

## 播放声音精灵

声音精灵是声音文件的一部分。可以在创建声音时通过定义偏移量和长度（以秒为单位）来定义声音精灵。

```javascript
let soundSprite = new BABYLON.Sound(
  'Violons',
  '/sounds/6sounds.mp3',
  scene,
  null,
  { loop: true, autoplay: true, length: 9.2, offset: 14.0 }
)
```

## 从 ArrayBuffer 加载声音

如果使用提供的 ArrayBuffer。

```javascript
let gunshotFromAB
loadArrayBufferFromURL('sounds/gunshot.wav')
function loadArrayBufferFromURL(urlToSound) {
  let request = new XMLHttpRequest()
  request.open('GET', urlToSound, true)
  request.responseType = 'arraybuffer'
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        gunshotFromAB = new BABYLON.Sound(
          'FromArrayBuffer',
          request.response,
          scene,
          soundReadyToBePlayed
        )
      }
    }
  }
  request.send(null)
}
function soundReadyToBePlayed() {
  gunshotFromAB.play()
}
```

## 使用资产管理器加载声音

资产管理器非常有用，因为它可以处理一些很棒的功能，例如加载屏幕。

```javascript
let music1, music2, music3

// Assets manager
let assetsManager = new BABYLON.AssetsManager(scene)

let binaryTask = assetsManager.addBinaryFileTask(
  'Violons18 task',
  'sounds/violons18.wav'
)
binaryTask.onSuccess = function (task) {
  music1 = new BABYLON.Sound('Violons18', task.data, scene, soundReady, {
    loop: true
  })
}

let binaryTask2 = assetsManager.addBinaryFileTask(
  'Violons11 task',
  'sounds/violons11.wav'
)
binaryTask2.onSuccess = function (task) {
  music2 = new BABYLON.Sound('Violons11', task.data, scene, soundReady, {
    loop: true
  })
}

let binaryTask3 = assetsManager.addBinaryFileTask(
  'Cello task',
  'sounds/cellolong.wav'
)
binaryTask3.onSuccess = function (task) {
  music3 = new BABYLON.Sound('Cello', task.data, scene, soundReady, {
    loop: true
  })
}

let soundsReady = 0

function soundReady() {
  soundsReady++
  if (soundsReady === 3) {
    music1.play()
    music2.play()
    music3.play()
  }
}

assetsManager.load()
```

## 创建空间 3D 声音

参数：  
&emsp;&emsp;distanceModel：（衰减）默认使用“线性”方程。其他选项是“逆”或“指数”。  
&emsp;&emsp;maxDistance：设置为 100。这意味着一旦听者距离声音超过 100 个单位，音量将为 0。将再也听不到声音。  
&emsp;&emsp;panningModel：设置为“ equalpower ”；等功率平移算法通常被认为简单有效。另一个可用选项是“ HRTF ”。规范说它是：“一种更高质量的空间化算法，使用卷积测量来自人类受试者的脉冲响应。这种平移方法呈现立体声输出”。这是使用耳机时最好的算法。

```javascript
let music = new BABYLON.Sound('music', 'music.wav', scene, null, {
  loop: true,
  autoplay: true,
  spatialSound: true,
  distanceModel: 'exponential',
  rolloffFactor: 2
})
```

声音在 3D 世界中的默认位置是(0,0,0)。要更改它，请使用以下 setPosition()函数：

```javascript
music.setPosition(new BABYLON.Vector3(100, 0, 0))
```

## 将声音附加到网格

这可能是处理场景中 3D 声音的最简单方法。只需创建一个 BABYLON.Sound，将其附加到现有网格即可完成。  
如果网格在移动，声音也会随之移动。

```javascript
let music = new BABYLON.Sound('Violons', 'sounds/violons11.wav', scene, null, {
  loop: true,
  autoplay: true
})

// Sound will now follow the box mesh position
music.attachToMesh(box)
```

attachToMesh()对声音调用该函数会自动将其转换为空间 3D 声音。
使用上面的代码，将使用默认的 Babylon.js 值：linearamaxDistance 为 100 的衰减和 type 的平移模型 HRTF。

## 将位置设置为音频侦听器

默认情况下，场景的“耳朵” - 或听者 - 始终是当前活动的摄像机。  
有时，例如在制作第三人称游戏时，可能需要将另一个网格设置为侦听器 - 例如角色头部。  
这可以通过 audioListenerPositionProvider 在场景中设置属性来实现。  
创建的方法必须返回一个有效的 Vector3 对象。

```javascript
// Returns a static position
scene.audioListenerPositionProvider = () => {
  return new BABYLON.Vector3(0, 0, 10)
}
// Returns the current position of a mesh
// !It is recommended to use the 'absolutePosition' property
// to reflect the position of the mesh in the world
scene.audioListenerPositionProvider = () => {
  // Returns a static position
  return myMesh.absolutePosition
}
```

要切换回使用相机作为侦听器，只需将该属性设置为 null。

## 创建空间定向 3D 声音

默认情况下，空间声音是全方位的。但是，也可以使用定向声音。

#### 注意：定向声音仅适用于附加到网格的空间声音。

```javascript
let music = new BABYLON.Sound('Violons', 'violons11.wav', scene, null, {
  loop: true,
  autoplay: true
})
music.setDirectionalCone(90, 180, 0)
music.setLocalDirectionToMesh(new BABYLON.Vector3(1, 0, 0))
music.attachToMesh(box)
```

setDirectionalCone 有 3 个参数：  
&emsp;&emsp;coneInnerAngle : 内锥体的度数大小  
&emsp;&emsp;coneOuterAngle : 外锥体的度数大小  
&emsp;&emsp;coneOuterGain：当在外锥体之外时的音量（介于 0.0 和 1.0 之间）  
锥体的外角必须大于或等于内角，否则将记录错误并且定向声音将不起作用。  
setLocalDirectionToMesh()只是与附加到的网格相关的锥体的方向。默认情况下，它是(1,0,0)。  
进入 3D 场景。如果在灰色锥体定义的空间内，应该会听到音乐，否则将听不到音乐，因为 coneOuterGain 设置为 0。

## 创建自定义衰减函数

如果想使用特定算法管理衰减（或 Web Audio 中的距离模型），可以使用 Babylon.js 自定义衰减函数绕过原生 Web Audio 衰减。  
注意：网络音频是硬件加速的。这意味着它主要由设备上的专用音频芯片通过本机代码（浏览器）处理。这在 3D 实时渲染的性能方面几乎没有任何成本。切换到自定义衰减会使用基于 JavaScript 的 Babylon.js 距离计算，速度会更慢。  
此外，自定义衰减仅适用于空间声音（显然），但也适用于连接到 Babylon.js 网格的声音。

```javascript
// Create and load the sound async
let music = new BABYLON.Sound('Music', 'music.wav', scene, null, {
  loop: true,
  autoplay: true,
  useCustomAttenuation: true
})
```

将切换到内部 Babylon.js 数学计算。默认的自定义衰减函数是线性的。  
要创建自定义逻辑，需要这样的代码：

```javascript
// Creating custom attenuation function. Near the object, volume is almost 0.
// The farest, the louder
music.setAttenuationFunction(function (
  currentVolume,
  currentDistance,
  maxDistance,
  refDistance,
  rolloffFactor
) {
  return (currentVolume * currentDistance) / maxDistance
})
```

使用这 5 个参数，值为返回的数字，即应用于声音的音量。

## 处理从 .babylon 文件加载的声音

要访问由 Babylon.js .babylon 文件加载器加载的声音，需要使用 getSoundByName()场景对象上的函数。

```javascript
// 按空格键将播放枪声。
let canvas = document.getElementById('renderCanvas')
let engine = new BABYLON.Engine(canvas, true)
BABYLON.SceneLoader.Load(
  'TestScene/',
  'testsound.babylon',
  engine,
  function (newScene) {
    newScene.executeWhenReady(function () {
      newScene.activeCamera.attachControl(canvas)

      let gunshotSound = newScene.getSoundByName('gunshot-1.wav')
      window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 32 && gunshotSound) {
          gunshotSound.play()
        }
      })

      engine.runRenderLoop(function () {
        newScene.render()
      })
    })
  },
  function (progress) {
    // To do: give progress feedback to user
  }
)
```

## 使用音轨

将的音乐和声音隔离在多个轨道上以更好地管理一组声音实例的音量可能很有用。  
默认情况下，Babylon.js 正在创建一个 BABYLON.SoundTrack 对象作为其主要轨道。  
每次创建一个新的 时 BABYLON.Sound，都会添加到这个主轨道中。  
cellolong 和 violons11 声音将从主 Babylon.js 轨道移动到此特定音轨。  
现在这意味着可以独立于主音轨更改此音轨的音量，从而更改这 2 个声音的音量。  
AddSound()函数会将声音从其原始容器（主音轨或特定音轨）移动到指定的新音轨。

```javascript
let soundTrack1 = new BABYLON.SoundTrack(scene)
soundTrack1.AddSound(cellolong)
soundTrack1.AddSound(violons11)

let soundTrack2 = new BABYLON.SoundTrack(scene)
soundTrack2.AddSound(violons11)
```

## 使用分析仪

可以轻松地实时分析音频。

```javascript
let myAnalyser = new BABYLON.Analyser(scene)
BABYLON.Engine.audioEngine.connectToAnalyser(myAnalyser)
myAnalyser.drawDebugCanvas()
```

这将连接到音频引擎的全局音量，并将一起播放的所有声音的频率绘制到屏幕顶部的 2D 画布显示中。  
可以更改调试画布的位置和大小，并在音轨上使用分析器而不是全局音频引擎：

```javascript
let myAnalyser = new BABYLON.Analyser(scene)
soundTrack1.connectToAnalyser(myAnalyser)
myAnalyser.DEBUGCANVASSIZE.width = 160
myAnalyser.DEBUGCANVASSIZE.height = 100
myAnalyser.DEBUGCANVASPOS.x = 40
myAnalyser.DEBUGCANVASPOS.y = 30
myAnalyser.drawDebugCanvas()
```
