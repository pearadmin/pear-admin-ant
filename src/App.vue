<template>
<a-config-provider :locale="locale">
  <router-view></router-view>
</a-config-provider>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'App'
})
</script>
<style>
#app,
body,
html {
  height: 100%;
}
</style>
