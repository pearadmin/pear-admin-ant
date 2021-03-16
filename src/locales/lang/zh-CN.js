/**
 *
 * author: Jobin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import { getModules } from '@/locales/_utils'
import antLocal from "ant-design-vue/es/locale/zh_CN";

const requireZHContext = require.context('./zh-CN/', false, /[\w+].(js)$/)

const zhCN = getModules(requireZHContext)

export default {
  ...zhCN,
  antLocal
}
