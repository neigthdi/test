## Html模板
```javascript
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>template</title>
		<script src="https://preview.babylonjs.com/ammo.js"></script>
		<script src="https://preview.babylonjs.com/cannon.js"></script>
		<script src="https://preview.babylonjs.com/Oimo.js"></script>
		<script src="https://preview.babylonjs.com/earcut.min.js"></script>
		<script src="https://preview.babylonjs.com/babylon.js"></script>
		<script src="https://cdn.babylonjs.com/gui/babylon.gui.js"></script>
		<script src="https://preview.babylonjs.com/materialsLibrary/babylonjs.materials.min.js"></script>
		<script src="https://preview.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js"></script>
		<script src="https://preview.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js"></script>
		<script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.js"></script>
		<script src="https://preview.babylonjs.com/serializers/babylonjs.serializers.min.js"></script>
		<script src="https://preview.babylonjs.com/gui/babylon.gui.min.js"></script>
		<script src="https://preview.babylonjs.com/inspector/babylon.inspector.bundle.js"></script>
		<style>
			* {
				padding: 0;
				margin: 0;
				width: 100vw;
				height: 100vh;
				overflow: hidden;
			}

			#renderCanvas {
				width: 100%;
				height: 100%;
			}
		</style>
	</head>
	<body>
		<canvas id="renderCanvas"></canvas>

		<script>
			const canvas = document.getElementById('renderCanvas')
			const engine = new BABYLON.Engine(canvas, true)

			const createScene = function() {
				const scene = new BABYLON.Scene(engine)

				const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, BABYLON.Vector3.Zero(),
					scene)
				camera.attachControl(canvas, true)
				camera.setPosition(new BABYLON.Vector3(20, 20, 20))
				
				const createAxis = () => {
					new BABYLON.MeshBuilder.CreateLines(
						'axisX', {
							colors: [new BABYLON.Color4(1, 0, 0, 1), new BABYLON.Color4(1, 0, 0, 1)],
							points: [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(2000, 0, 0)]
						}, scene
					)
					new BABYLON.MeshBuilder.CreateLines(
						'axisY', {
							colors: [new BABYLON.Color4(0, 1, 0, 1), new BABYLON.Color4(0, 1, 0, 1)],
							points: [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 2000, 0)]
						}, scene
					)
					new BABYLON.MeshBuilder.CreateLines(
						'axisZ', {
							colors: [new BABYLON.Color4(0, 0, 1, 1), new BABYLON.Color4(0, 0, 1, 1)],
							points: [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 2000)]
						}, scene
					)
					
					const adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI')
					
					const xBox = BABYLON.MeshBuilder.CreateBox('x', { size: 1 }, scene)
					xBox.position = new BABYLON.Vector3(80, 0, 0)
					const xPanel = new BABYLON.GUI.StackPanel()
					xPanel.width = '20px'
					xPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
					xPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM
					const x = new BABYLON.GUI.TextBlock()
					x.text = 'X'
					x.height = '30px'
					x.color = 'red'
					adt.addControl(xPanel)
					xPanel.addControl(x)
					xPanel.linkWithMesh(xBox)
					
					const yBox = BABYLON.MeshBuilder.CreateBox('x', { size: 1 }, scene)
					yBox.position = new BABYLON.Vector3(0, 80, 0)
					const yPanel = new BABYLON.GUI.StackPanel()
					yPanel.width = '20px'
					yPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
					yPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM
					const y = new BABYLON.GUI.TextBlock()
					y.text = 'Y'
					y.height = '30px'
					y.color = 'green'
					adt.addControl(yPanel)
					yPanel.addControl(y)
					yPanel.linkWithMesh(yBox)
					
					const zBox = BABYLON.MeshBuilder.CreateBox('x', { size: 1 }, scene)
					zBox.position = new BABYLON.Vector3(0, 0, 80)
					const zPanel = new BABYLON.GUI.StackPanel()
					zPanel.width = '20px'
					zPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
					zPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM
					const z = new BABYLON.GUI.TextBlock()
					z.text = 'Z'
					z.height = '30px'
					z.color = 'blue'
					adt.addControl(zPanel)
					zPanel.addControl(z)
					zPanel.linkWithMesh(zBox)
				}

				


				
				const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.5, 0.5, 0))
				const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene)


				/** 其他逻辑代码 */




				createAxis()


				scene.registerBeforeRender(function() {
					// 需要循环的逻辑
				})

				return scene
			}

			const scene = createScene()
			engine.runRenderLoop(function() {
				scene.render()
			})

			window.addEventListener('resize', function() {
				engine.resize()
			})
		</script>
	</body>
</html>
```