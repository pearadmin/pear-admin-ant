<template>
  <div class="logo">
    <span v-if="!collapsed">
      <img src="https://file.iviewui.com/admin-pro-dist/img/logo-small.4a34a883.png"/>
    </span>
    <span v-else><img src="https://file.iviewui.com/admin-pro-dist/img/logo-small.4a34a883.png"/></span>
  </div>
</template>
<script>
import { computed } from "vue";
import store from "@/store";
// 图 标 引 入
export default {
  setup() {
    const collapsed = computed(() => store.state.collapsed);
    return {
      collapsed,
    };
  },
};
</script>
<style scoped>
.logo {
  height: 65px;
  font-size: 22px;
  padding: 10px;
  text-align: center;
  color:white;
  border-bottom: 1px solid #101117;
  background: #191a23;
}
.logo  img{
  height: 50px;
  width: 50px;
}
</style>