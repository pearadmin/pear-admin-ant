import { resolve } from 'path/posix';
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import visualizer from "rollup-plugin-visualizer";
import path from 'path'
import themePreprocessorPlugin from "@zougt/vite-plugin-theme-preprocessor";

const plugins = [vue(),
themePreprocessorPlugin({
  less: {
    // 各个主题文件的位置
    multipleScopeVars: [
      {
        scopeName: "theme-blue",
        path: path.resolve("src/assets/theme/blue.less"),
      },{
        scopeName: "theme-green",
        path: path.resolve("src/assets/theme/green.less"),
      }, {
        scopeName: "theme-yellow",
        path: path.resolve("src/assets/theme/yellow.less"),
      }, {
        scopeName: "theme-red",
        path: path.resolve("src/assets/theme/red.less"),
      }, {
        scopeName: "theme-purple",
        path: path.resolve("src/assets/theme/purple.less"),
      }
    ],
  },
})
];

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
  // 开启less支持
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  hmr: {
    overlay: false
  }
})