import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Taiyara.closet/', // 👈 must match your repo name exactly
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
