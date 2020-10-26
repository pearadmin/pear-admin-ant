<template>
  <!-- 框架 content 区域 , 路由内容页面 -->
  <div id="content">
    <router-view v-if="routerActive"></router-view>
  </div>
</template>
<script>
import { computed } from 'vue'
import store from "@/store";
export default{
  setup(){
    const routerActive = computed(()=>store.state.routerActive)
    return {routerActive};
  }
}
</script>