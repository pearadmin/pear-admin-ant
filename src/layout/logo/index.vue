<template>
  <div class="logo" :class="[theme]">
    <!-- 根据侧边收缩状态决定隐显内容 -->
    <span v-if="!collapsed">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
    </span>
    <!-- 根据侧边收缩状态决定隐显内容 -->
    <span v-else><img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/></span>
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
  padding: 10px;
  text-align: center;
  color:white;
  border-bottom: 1px solid #101117;
  background: #191a23;
}
.logo img{
  height: 40px;
  width: 40px;
}
.dark{
  background-color:  #191a23!important;
}
.light{
    border-bottom: 1px solid whitesmoke;
  background-color: white!important;
}
</style>
