import { mergeModule } from '@/tools/common'
import antLocal from "ant-design-vue/es/locale/en_US";

const modulesFiles = import.meta.globEager("./en-US/*.js")

const enUS = mergeModule(modulesFiles)

export default {
  ...enUS,
  antLocal
}
