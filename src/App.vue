<template>
<a-config-provider :locale="locale">
  <router-view></router-view>
</a-config-provider>
</template>
<script >
import { computed, watch, ref, reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: 'App',
  data() {
    return {
    }
  },
}
</script>
<style>
#app,
body,
html {
  height: 100%;
}
</style>
