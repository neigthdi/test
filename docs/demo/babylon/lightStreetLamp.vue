<template>
  <div>
    <div>fps: {{ fps }}</div>
    <canvas id="lightStreetLamp" class="stage"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import 'babylonjs-loaders'

import { pkg, pkgGui } from './index.js'
const {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color3,
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Texture,
  SceneLoader,
  HemisphericLight,
  SpotLight
} = pkg
const {
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock,
  Slider,
} = pkgGui

const fps = ref(0)

const initScene = async () => {
  const ele = document.getElementById("lightStreetLamp") as HTMLCanvasElement

  ele.addEventListener('wheel', function(event) {
    // 根据需要处理滚动
    // 例如，可以修改相机的半径或角度
    event.preventDefault() // 阻止默认滚动行为
  })

  const engine: any = new Engine(ele, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false
  })

  const scene = new Scene(engine)
  scene.useRightHandedSystem = true

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.5, Math.PI / 2.2, 15, new Vector3(0, 0, 0), scene)
  camera.upperBetaLimit = Math.PI / 2.2
  camera.wheelPrecision = 30
  camera.attachControl(ele, true)
  camera.setPosition(new Vector3(20, 20, 20))

  const createLight = () => {
    const light = new HemisphericLight('light', new Vector3(1, 1, 0))
    light.intensity = 1
    return light
  }

  const createSkyBox = () => {
    const skyBox = MeshBuilder.CreateBox(
      'skyBox',
      { size: 150 },
      scene
    )
    const skyBoxMaterial = new StandardMaterial(
      'skyBox',
      scene
    )
    skyBoxMaterial.backFaceCulling = false
    skyBoxMaterial.reflectionTexture = new CubeTexture(
      '/images/skybox',
      scene
    )
    skyBoxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
    skyBoxMaterial.diffuseColor = new Color3(0, 0, 0)
    skyBoxMaterial.specularColor = new Color3(0, 0, 0)
    skyBox.material = skyBoxMaterial
  }

  const createGui = async (light, bulbInfo) => {
    const adt = AdvancedDynamicTexture.CreateFullscreenUI('UI')
    const panel = new StackPanel()
    panel.width = '220px'
    panel.top = '-20px'
    panel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
    panel.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    adt.addControl(panel)

    const header = new TextBlock()
    header.text = '白天黑夜'
    header.height = '30px'
    header.color = 'red'
    panel.addControl(header)

    const slider = new Slider()
    slider.minimum = 0
    slider.maximum = 1
    slider.borderColor = 'green'
    slider.color = 'blue'
    slider.background = 'yellow'
    slider.value = 1
    slider.height = '20px'
    slider.width = '200px'

    const [lampLight, bulb] = bulbInfo
    slider.onValueChangedObservable.add(value => {
      if(light) {
        light.intensity = value
      }
      if(lampLight) {
        lampLight.intensity = 1 - value

        const startColor = BABYLON.Color3.White()
        const endColor = BABYLON.Color3.Blue()
        bulb.material.emissiveColor = Color3.Lerp(startColor, endColor, 1 - value)
      }
    })
    panel.addControl(slider)
  }

  const createLamp = async () => {
    const loaderResult =  await SceneLoader.ImportMeshAsync('', '/scenes/', 'lamp.babylon')
    const bulb: any = loaderResult.meshes.find(v => v.name === 'bulb')
    // const bulb = scene.getMeshByName('bulb')
    bulb.material.emissiveColor = Color3.White()
    const lampLight = new SpotLight(
      'lampLight', 
      Vector3.Zero(),
      new Vector3(0, -1, 0),
       0.8 * Math.PI, 0.01, 
       scene
    )
    lampLight.intensity = 0
    lampLight.diffuse = Color3.Red()
    lampLight.parent = bulb

    const lamp: any = loaderResult.meshes.find(v => v.name === 'lamp')
    // const lamp = scene.getMeshByName('lamp')
    lamp.position = new Vector3(2, 0, 2)
    lamp.rotation = Vector3.Zero()
    lamp.rotation.y = -Math.PI / 4
    const lamp1 = lamp.clone('lamp1')
    lamp1.position.x = -8
    lamp1.position.z = 1.2
    lamp1.rotation.y = Math.PI / 2
    const lamp2 = lamp1.clone('lamp2')
    lamp2.position.x = -2.7
    lamp2.position.z = 0.8
    lamp2.rotation.y = -Math.PI / 2
    const lamp3 = lamp.clone('lamp3')
    lamp3.position.z = -8

    return [lampLight, bulb]
  }

  const createVillage = () => {
    SceneLoader.ImportMeshAsync(
      '',
      '/scenes/',
      'valleyvillage.glb'
    )
  }

  const runAnimate = () => {
    engine.runRenderLoop(function() {
      if (scene && scene.activeCamera) {
        scene.render()

        fps.value = engine.getFps().toFixed(2)
      }
    })
  }

  const light = createLight()
  const bulbInfo = await createLamp()
  createGui(light, bulbInfo)
  createSkyBox()
  createVillage()
  runAnimate()

  return {
    scene,
    engine, 
  }
}


let sceneResources

onMounted(async() => {
  await nextTick()
  sceneResources = await initScene()
})

onUnmounted(() => {
  if(sceneResources) {
    sceneResources.engine.stopRenderLoop() 
    sceneResources.engine.dispose()
    sceneResources.scene.dispose()
    sceneResources = null
  }
})
</script>
