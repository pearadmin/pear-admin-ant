
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

export const findParent = (arr, id) => {
  var temp = []
  var forFn = function (list, path) {
    for (var i = 0; i < list.length; i++) {
      var item = list[i]
      if (item.path === path) {
        temp.push(findPathByName(arr,item.parent))
        forFn(list, item.parent);
        break
      } else {
        if (item.children) {
          forFn(item.children, path)
        }
      }
    }
  }
  forFn(arr, id)
  return temp
}

export const findPathByName = (arr, id) => {
  var forFn = function (list, name) {
    for (var i = 0; i < list.length; i++) {
      var item = list[i]
      if (item.name === name) {
        return item.path;
      } else {
        if (item.children) {
          forFn(item.children, name)
        }
      }
    }
  }
  return forFn(arr, id)
}