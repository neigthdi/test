import { fileURLToPath, URL } from 'node:url'
import nodeExternals from 'rollup-plugin-node-externals'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'
import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex'

// https://vitejs.dev/config/
export default defineConfig({
  markdown: {
    config: (md: MarkdownIt) => {
      md.use(mk)
    }
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