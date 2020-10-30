<template>
  <div class="logo" :class="[theme]">
    <!-- 根据侧边收缩状态决定隐显内容 -->
    <span v-if="!collapsed">
      <img src="https://file.iviewui.com/admin-pro-dist/img/logo-small.4a34a883.png"/>
    </span>
    <!-- 根据侧边收缩状态决定隐显内容 -->
    <span v-else><img src="https://file.iviewui.com/admin-pro-dist/img/logo-small.4a34a883.png"/></span>
  </div>
</template>
<script>
import { computed } from "vue"
import { useStore } from "vuex"
// 图 标 引 入
export default {
  setup() {
		const { getters } = useStore();
    const collapsed = computed(() => getters.sideCollapsed);
    const theme = computed(()=>getters.theme);
    return {
      collapsed,
      theme
    };
  },
};
</script>
<style scoped>
.logo {
  height: 65px;
  font-size: 22px;
  text-align: center;
  padding: 3px;
  color:white;
  border-bottom: 1px solid #101117;
  background: #191a23;
}
.logo img{
  height: 59px;
  width: 59px;
}
.dark{
  background-color:  #191a23!important;
}
.light{
    border-bottom: 1px solid whitesmoke;
  background-color: white!important;
}
</style>
