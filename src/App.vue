<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>
<script >
  import { computed, watch, ref, reactive } from 'vue'
  import { useStore } from 'vuex'
  import zhcn from 'ant-design-vue/es/locale/zh_CN';//简体中文
  import zhtw from 'ant-design-vue/es/locale/zh_TW';//繁体中文
  import enus from 'ant-design-vue/es/locale/en_US';//美式英语
  export default {
    name: "App",
    setup(){
      const { getters, commit } = useStore();
      //当前配置的语言
      const language = computed(() => getters.language)
      //支持配置的语言
      const languages = reactive({ zhcn, zhtw, enus })
      commit('layout/setLanguages', ['zhcn', 'zhtw', 'enus'])
      const locale = ref(languages[language] || zhcn)
      commit('layout/setLanguage', locale.value.locale.replace('-', ''))
      //监听配置的变化
      watch(language, (lan) => locale.value = languages[lan])
      return {
        locale,
      }
    }
  };
</script>
<style>
  #app,
  body,
  html {
    height: 100%;
  }
</style>
