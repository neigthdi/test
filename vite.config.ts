import { fileURLToPath, URL } from 'node:url'
import nodeExternals from 'rollup-plugin-node-externals'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
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