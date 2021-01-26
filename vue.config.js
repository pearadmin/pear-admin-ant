/**
 * webpack 配置（vue-cli提示的vue.config.js）
 * @type {{devServer: {port: number, open: boolean}}}
 */
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  devServer: {
    open: true, // 启动后自动打开浏览器
    port: 8080 // 端口
  },
  parallel: require("os").cpus().length > 1, // 构建时开启多进程处理babel编译
  configureWebpack(config) {
    //配置根目录
    return {
      resolve: {
        alias: {
          "@": resolve("src")
        }
      }
    };
  }
};
