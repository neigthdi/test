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
				camera.setPosition(new BABYLON.Vector3(0, 0, -20))

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

				



				/** 编写 */
				const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.5, 0.5, 0))
				const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene)




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