import { resolve } from 'path/posix';
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue()
  ],
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