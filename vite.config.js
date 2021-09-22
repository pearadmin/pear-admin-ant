import { resolve } from 'path/posix';
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import visualizer from "rollup-plugin-visualizer";

const plugins = [vue()];

if (process.env.vis) {
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  );
}

export default defineConfig({
  plugins,
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