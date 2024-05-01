import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/chevre-cards-generator/",
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: ['src/main.ts', './index.html']
    }
  },
  optimizeDeps: {
    exclude: ['vue3-carousel']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})