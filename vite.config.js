import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',  // 适配Node 20
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
