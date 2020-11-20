<template>
<a-config-provider :locale="locale">
  <router-view></router-view>
</a-config-provider>
</template>
<script >
import { computed, watch, ref, reactive } from "vue";
import { useStore } from "vuex";
import { messages } from '@/lang/index';
export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
    locale() {
          const { getters } = useStore();
      if (messages[getters.language]) {
        return messages[getters.language]
      }else {
        return null
      }
    }
  }
}
</script>
<style>
#app,
body,
html {
  height: 100%;
}
</style>
