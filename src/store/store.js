/**
 * webpack提供的require.context加载所有的store/modules/目录下的vuex文件
 * 生成结构如以下的数据
 * {
 *   layout: Store,
 *   user: Store
 * }
 * @type {__WebpackModuleApi.RequireContext}
 */
const requireStoreContext = require.context('./modules/', false, /([\w+]\.(js))/);

const modules = requireStoreContext.keys().reduce((modules, fileName) => {
  const name = fileName.replace(/(\.\/|\.js)/g, '');
  return {
    ...modules,
    [name]: requireStoreContext(fileName).default
  }
}, {});

export default modules;
