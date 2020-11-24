import {createI18n, useI18n as use} from 'vue-i18n'
import enLocale from './module/en'
import zhLocale from './module/zh'
import antdZhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import antdEnUS from 'ant-design-vue/es/locale-provider/en_US';
import monentZhCN from 'moment/locale/zh-cn.js';
export const messages = {
  en: {
    ...enLocale,
    ...antdEnUS,
    ...monentZhCN,
  },
  zh: {
    ...zhLocale,
    ...antdZhCN,
  },
}
export function getLanguage() {
  return 'zh'
}
export const langKeys = [
  {value:'zh',label:'简体中文'},
  {value:'en',label:'English'},
]
const i18n = createI18n({
  locale: getLanguage(),
  messages:messages
})
export let useI18n = use;
export default i18n;