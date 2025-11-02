import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// ✅ Make sure the base path matches your GitHub repo name
export default defineConfig({
  plugins: [vue()],
  base: './', // <-- required for GitHub Pages
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
