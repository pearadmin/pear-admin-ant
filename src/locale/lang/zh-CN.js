import { mergeModule } from '@/tools/common'
import antLocal from "ant-design-vue/es/locale/zh_CN";

const modulesFiles = import.meta.globEager("./zh-CN/*.js")

const zhCN = mergeModule(modulesFiles)

export default {
  ...zhCN,
  antLocal
}
