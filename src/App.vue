<template>
<a-config-provider :locale="locale">
  <router-view></router-view>
</a-config-provider>
</template>
<script >
import {computed, watch, ref, reactive, defineComponent} from "vue";
import { useStore } from "vuex";
// import {useRouter} from "vue-router";
export default defineComponent({
  name: 'App',
  setup () {
    // const router = useRouter()
    // const routes = router.getRoutes()
    // watch(() => routes, v => {
    //   console.log(v)
    // }, { immediate: true })
    return {}
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
