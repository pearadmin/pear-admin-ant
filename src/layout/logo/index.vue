<template>
  <div id="logo" :class="[theme]">
    <!-- 根据侧边收缩状态决定隐显内容 -->
    <span v-if="!collapsed">
      <img
        src="https://file.iviewui.com/admin-pro-dist/img/logo-small.4a34a883.png"
      />
    </span>
    <!-- 根据侧边收缩状态决定隐显内容 -->
    <span v-else
      ><img
        src="https://file.iviewui.com/admin-pro-dist/img/logo-small.4a34a883.png"
    /></span>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
// 图 标 引 入
export default {
  setup() {
    const { getters } = useStore();
    const collapsed = computed(() => getters.sideCollapsed);
    const theme = computed(() => getters.theme);
    return {
      collapsed,
      theme,
    };
  },
};
</script>