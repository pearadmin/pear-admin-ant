<template>
  <div class="logo">
    <!-- 侧边展开时的LOGO -->
    <span v-if="!collapsed">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
    </span>
    <!-- 侧边隐藏时的LOGO -->
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
  height: 40px;
  width: 40px;
}
</style>
