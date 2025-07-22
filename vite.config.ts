import { fileURLToPath, URL } from 'node:url'
import nodeExternals from 'rollup-plugin-node-externals'
import viteCompression from 'vite-plugin-compression'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  vite: {
    plugins: [
      viteCompression({
        algorithm: 'gzip', // 或 'brotliCompress'
        ext: '.gz', // 生成的文件扩展名
        threshold: 10240, // 仅压缩大于 10KB 的文件
      }),
    ],
    build: {
      assetsInlineLimit: 4096, // 小图片转为 Base64（默认 4KB）
    },
  },
  plugins: [
    vue(),
    glsl(), 
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      plugins: [nodeExternals()],
      external: ['glslCanvas']
    }
  }
})