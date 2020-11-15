<template>
  <router-view></router-view>
</template>
<script >
import { computed, watch, ref, reactive } from "vue";
import { useStore } from "vuex";
import zhcn from "ant-design-vue/es/locale/zh_CN"; //简体中文
import zhtw from "ant-design-vue/es/locale/zh_TW"; //繁体中文
import enus from "ant-design-vue/es/locale/en_US"; //美式英语
export default {
  name: "App"
};
</script>
<style>
#app,
body,
html {
  height: 100%;
}
</style>
