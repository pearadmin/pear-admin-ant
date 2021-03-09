/**
 *
 * author: Jobin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
const getModules = context => {
  return context.keys().reduce((modules, key) => {
    return {
      ...modules,
      ...context(key).default
    }
  }, {})
}

export {
  getModules
}
