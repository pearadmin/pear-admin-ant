<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>
<script>
import { defineComponent } from "vue";
import zh_CN from 'ant-design-vue/es/locale/zh_CN';
export default defineComponent({
  name: 'App',
  setup() {
    return {
      locale: zh_CN
    }
  }
})
</script>
<style>
#app,
body,
html {
  height: 100%;
}
</style>
