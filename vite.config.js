import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020' // 兼容Node 20
    }
  }
})
