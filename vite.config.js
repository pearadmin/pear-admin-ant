import { resolve } from 'path/posix';
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";


export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 8080
  },
  resolve: {
      alias: {
          '@': resolve('src')
      }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    },
  },
  hmr: {
      overlay: false
  }
})