<template>
  <a-layout id="layout">
    <!-- 侧边栏 -->
    <a-layout-sider
      v-if="layout === 'sideMenu'"
      :width="sideWitch"
      :collapsed="collapsed"
      :trigger="null"
       collapsible
      :class="[theme]"
    >
      <!-- 顶部图标 -->
      <Logo v-if="logo"></Logo>
      <!-- 垂直菜单 -->
      <Menu></Menu>
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
import Menu from "./menu/index.vue";
import Content from "./content/index.vue";
import Header from "./header/index.vue";
import Logo from "./logo/index.vue";
import Tab from "./tab/index.vue";
import Setup from "./setup/index.vue";
export default {
  components: {
    Menu,
    Content,
    Header,
    Logo,
    Tab,
    Setup,
  },
  setup() {
    const { getters } = useStore();

    const layout = computed(() => getters.layout);
    const collapsed = computed(() => getters.collapsed);

    const count = computed(() => getters.count);
    const logo = computed(() => getters.logo);
    const tab = computed(() => getters.tab);
    const theme = computed(() => getters.theme);
    const sideWitch = computed(() => getters.sideWitch);
    return {
      layout,
      collapsed,
      sideWitch,
      count,
      theme,
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

#layout {
  height: 100%;
}

#layout .ant-layout-header {
  padding-left: 0px;
  padding-right: 0px;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

#layout .ant-layout-sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  z-index: 999;
}

.dark {
  background-color: #191a23 !important;
}

.light {
  border-bottom: 1px solid whitesmoke;
  background-color: white !important;
}
</style>
