import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port:3009,
    open:true,
    proxy: {
      '/device': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/sys-api/, ''),
      },
    },
  }
})
