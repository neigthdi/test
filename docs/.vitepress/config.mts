import { fileURLToPath, URL } from "node:url";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

export default {
  title: 'Babylonjs',
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
        text: 'api查询',
        link: 'https://doc.babylonjs.com/typedoc/modules/BABYLON'
      },
      { text: '官网例子', link: 'https://www.babylonjs-playground.com/' },
      {
        text: '其他案例',
        link: 'https://example.cnbabylon.com/'
      }
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
        { text: 'clone和createInstance', link: '/other/cloneAndCreateInstance' }
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
        { text: '矩阵变换', link: '/webgl/matrixTransformation' }
      ]
    },
    {
      text: '杂录',
      collapsible: true,
      items: [{ text: 'shader相关', link: '/three/other' }]
    },
    {
      text: '案例-babylon',
      collapsible: true,
      items: [
        { text: '相机类型', link: '/components/babylonCamera.md' },
        { text: '动画', link: '/components/babylonAnimation.md' },
        { text: '精灵', link: '/components/babylonSprite.md' },
        { text: '粒子', link: '/components/babylonParticle.md' },
        { text: 'shader', link: '/components/babylonShader.md' },
      ]
    },
    {
      text: '案例-three',
      collapsible: true,
      items: [
        { text: 'shader', link: '/components/threeShader.md' },
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
