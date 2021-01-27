<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>
<script>
<<<<<<< HEAD
import { defineComponent } from "vue";
=======
import {computed, watch, ref, reactive, defineComponent} from "vue";
import {useStore} from "vuex";
import zh_CN from 'ant-design-vue/es/locale/zh_CN'
>>>>>>> dev

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
