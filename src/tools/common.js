
import { onUnmounted } from "vue";

/**
 * 是否为生产环境
 * 
 * @return boolean
 */
export const isNotProduction = () => {
  return import.meta.env.NODE_ENV !== 'production'
}

/**
 * 超时处理回调
 * 
 * @param number
 * @param callback
 * @returns void
 */
export const isTimeout = (number, callback) => {
  setTimeout(() => {
    callback();
  }, number.value * 1000);
  const Interval = setInterval(() => {
    number.value--;
  }, 1000);
  onUnmounted(() => {
    clearInterval(Interval);
  });
}

/**
 * 模块化导入 
 * 
 * @param context 
 * @return void
 */
 export const mergeModule = context => {
  return Object.keys(context).reduce((modules, key) => {
    return {
      ...modules,
      ...context[key].default
    }
  }, {})
}

/**
 * 路径兼容拼接
 * 
 * @param 根路径
 * @param 子路径 
 */
export const resolve = (root, path) => {
  if(path.startsWith('/')) {
    return root + path;
  } else {
    return root + "/" + path;
  }
}