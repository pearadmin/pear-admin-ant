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
import { computed, watch, ref } from "vue";
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

    const logo = computed(() => getters.logo);
    const tab = computed(() => getters.tab);
    const theme = computed(() => getters.theme);
    const sideWitch = computed(() => getters.sideWitch);

    // 固定 header
    const fixedHeader = computed(() => getters.fixedHeader);
    // 固定 side
    const fixedSide = computed(() => getters.fixedSide);

    return {
      layout,
      collapsed,
      fixedHeader,
      fixedSide,
      sideWitch,
      theme,
      logo,
      tab,
    };
  },
};
</script>
