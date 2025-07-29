import { fileURLToPath, URL } from "node:url";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

export default {
  title: 'Babylonjs',
  // base: '/',
  base: '/',
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    smoothScroll: true,
    nav: [
      {
        text: 'babylon文档',
        link: 'https://doc.babylonjs.com/typedoc/modules/BABYLON'
      },
      { 
        text: 'babylon官网案例',
        link: 'https://www.babylonjs-playground.com/'
      },
      {
        text: 'three案例及文档',
        link: 'https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene'
      },
      {
        text: 'shader入门',
        link: 'https://thebookofshaders.com/?lan=ch'
      },
      {
        text: 'shader案例网站-1',
        link: 'https://www.shadertoy.com/browse'
      },
      {
        text: 'shader案例网站-2',
        link: 'https://glslsandbox.com/'
      },
      {
        text: 'shader案例网站-3',
        link: 'https://webgl-shaders.com/'
      },
    ],
    sidebar: {
      '/': sidebarBase()
    }
  }
}

function sidebarBase() {
  return [
    {
      text: '基本元素',
      collapsible: true,
      items: [
        { text: '三大属性', link: '/base/base' },
        { text: '相机', link: '/base/camera' },
        { text: '模型', link: '/base/model' },
        { text: '光线', link: '/base/light' },
        { text: '动画', link: '/base/animation' },
        { text: '材质和纹理', link: '/base/materialAndTexture' },
        { text: 'GUI', link: '/base/gui' },
        { text: '声音', link: '/base/sound' },
        { text: '精灵', link: '/base/spirit' },
        { text: '粒子系统', link: '/base/particle' },
        { text: '后处理', link: '/base/postProcess' }
      ]
    },
    {
      text: 'html模板',
      collapsible: true,
      items: [
        { text: '模板', link: '/template/template' },
      ]
    },
    {
      text: '事件',
      collapsible: true,
      items: [
        { text: '注册事件', link: '/events/register' },
        { text: '碰撞检测', link: '/events/collision' }
      ]
    },
    {
      text: '其他',
      collapsible: true,
      items: [
        { text: '着色器', link: '/other/shader' },
        { text: '钩子', link: '/other/hook' },
        { text: '存储', link: '/other/storage' },
        { text: 'layerMask', link: '/other/layerMask' },
        { text: 'clone和createInstance', link: '/other/cloneAndCreateInstance' },
        { text: 'three的优化(babylon)', link: '/other/threeOptimize' },
      ]
    },
    {
      text: 'webgl相关',
      collapsible: true,
      items: [
        { text: '变量', link: '/webgl/variable' },
        { text: 'UVMap', link: '/webgl/uvMap' },
        { text: '数据类型', link: '/webgl/dataType' },
        { text: '内置函数', link: '/webgl/funcs' },
        { text: '矩阵变换', link: '/webgl/matrixTransformation' },
        { text: '光相关', link: '/webgl/light' },
      ]
    },
    {
      text: 'wgsl相关',
      collapsible: true,
      items: [
        { text: 'computeShader', link: '/wgsl/computeShaderIntroduce' },
        { text: '存储类别', link: '/wgsl/storageClass' },
        { text: '内置变量', link: '/wgsl/builtInVar' },
        { text: 'workgroup_size', link: '/wgsl/workgroupSize' },
      ]
    },
    {
      text: '案例-babylon',
      collapsible: true,
      items: [
        { text: '相机', link: '/components/babylonCamera.md' },
        { text: '光照', link: '/components/babylonLight.md' },
        { text: '顶点数据', link: '/components/babylonVertexData.md' },
        { text: '动画', link: '/components/babylonAnimation.md' },
        { text: '精灵', link: '/components/babylonSprite.md' },
        { text: '粒子', link: '/components/babylonParticle.md' },
        { text: '碰撞', link: '/components/babylonCollision.md' },
        { text: '纹理', link: '/components/babylonTexture.md' },
        { text: '几何体相关', link: '/components/babylonGeometry.md' },
        { text: 'RPG相关', link: '/components/babylonRpg.md' },
        { text: 'shader1', link: '/components/babylonShader1.md' },
        { text: 'shader2', link: '/components/babylonShader2.md' },
        { text: 'computeShader1', link: '/components/babylonComputeShader1.md' },
      ]
    },
    {
      text: '案例-three',
      collapsible: true,
      items: [
        { text: 'part1', link: '/components/threePart1.md' },
        { text: 'part2', link: '/components/threePart2.md' },
        { text: 'part3', link: '/components/threePart3.md' },
        { text: 'part4', link: '/components/threePart4.md' },
      ]
    },
    {
      text: '案例-canvas',
      collapsible: true,
      items: [
        { text: '杂录', link: '/components/canvasMemo.md' },
        { text: 'part1', link: '/components/canvasPart1.md' },
        { text: 'part2', link: '/components/canvasPart2.md' },
        { text: 'part3', link: '/components/canvasPart3.md' },
        { text: 'part4', link: '/components/canvasPart4.md' },
        { text: 'part5', link: '/components/canvasPart5.md' },
      ]
    },
    {
      text: '案例-shaderToy',
      collapsible: true,
      items: [
        { text: '杂录', link: '/components/shaderToyMemo.md' },
        { text: 'shaderToy1', link: '/components/shaderToy1.md' },
        { text: 'shaderToy2', link: '/components/shaderToy2.md' },
      ]
    },
    {
      text: '案例-webgl',
      collapsible: true,
      items: [
        { text: 'webgl', link: '/components/webgl.md' },
      ]
    },
  ]
}
