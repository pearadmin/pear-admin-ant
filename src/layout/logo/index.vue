<template>
  <div id="logo" :class="[theme]">
    <!-- 根据侧边收缩状态决定隐显内容 -->
    <span v-if="!collapsed">
    ><img class="image"
        src="../../assets/image/logo.png"
    />
    </span>
    <!-- 根据侧边收缩状态决定隐显内容 -->
    <span v-else
      ><img class="image"
        src="../../assets/image/logo.png"
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
    const collapsed = computed(() => getters.collapsed);
    const theme = computed(() => getters.theme);
    return {
      collapsed,
      theme,
    };
  },
};
</script>