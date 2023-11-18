import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const PORT = 20000
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: 'localhost',
    port: PORT,
    proxy: {
      '/api/expense': {
        target: 'http://localhost:3000/api/', // Replace with your API server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Remove the '/api' prefix
      }
    }
  },
})
