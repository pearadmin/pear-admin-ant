<template>
  <div class="logo">
    <span v-if="!collapsed">Pear Admin</span>
    <i v-else><PieChartOutlined></PieChartOutlined></i>
  </div>
</template>
<script>
import { computed } from "vue";
import store from "@/store";
// 图 标 引 入
import { PieChartOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    PieChartOutlined,
  },
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
  height: 36px;
  font-size: 22px;
  color: #1890ff;
  margin: 16px;
  font-weight: 700;
  text-align: center;
}
</style>