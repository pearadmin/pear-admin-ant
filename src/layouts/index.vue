<template>
  <a-layout id="basic-layout">
    <!-- 侧边栏 -->
    <a-layout-sider
      v-if="sideVisible"
      :width="sideWitch"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <Logo v-if="logo"></Logo>
      <Side></Side>
    </a-layout-sider>
    <!-- 右边区域 -->
    <a-layout>
      <!-- header区域 -->
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <!-- 中心区域 -->
      <a-layout-content>
        <!-- 选项卡页面 -->
        <Tab v-if="tab"></Tab>
        <!-- main区域 -->
        <Content></Content>
        <!-- 设置页面 -->
        <Setup></Setup>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Side from "./side/index.vue";
import Content from "./content/index.vue";
import Header from "./header/index.vue";
import Logo from "./logo/index.vue";
import Tab from "./tab/index.vue";
import Setup from "./setup/index.vue";
export default {
  components: {
    Side,
    Content,
    Header,
    Logo,
    Tab,
    Setup,
  },
  setup() {
    const { getters } = useStore();

    const sideVisible = computed(() => getters.sideVisible);
    const collapsed = computed(() => getters.sideCollapsed);

    const count = computed(() => getters.count);
    const logo = computed(() => getters.logo);
    const tab = computed(() => getters.tab);

    const sideWitch = computed(() => getters.sideWitch);

    return {
      sideVisible,
      collapsed,
      sideWitch,
      count,
      logo,
      tab,
    };
  },
};
</script>
<style scoped>
body,
html {
  height: 100%;
}
#basic-layout {
  height: 100%;
}
#basic-layout .ant-layout-header {
  padding-left: 10px !important;
  padding-right: 10px !important;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

#basic-layout .ant-layout-sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  z-index: 999;
}
</style>
