
import { onUnmounted } from "vue";

/**
 * 开发环境
 * 
 * @return boolean
 */
export const isNotProduction = () => {
  return import.meta.env.NODE_ENV !== 'production'
}

/**
 * 超时处理回调
 * 
 * @param timeout
 * @param callback
 */
export const isTimeout = (timeout, callback) => {
  setTimeout(() => {
    callback();
  }, timeout.value * 1000);
  const Interval = setInterval(() => {
    timeout.value--;
  }, 1000);
  onUnmounted(() => {
    clearInterval(Interval);
  });
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