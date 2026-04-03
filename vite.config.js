import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        landing: resolve('landing.html')
      }
    }
  }
})
