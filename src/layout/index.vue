<template>
  <a-layout id="layout" :class="[theme,layout]">
    <!-- 侧边栏 -->
    <a-layout-sider
      v-if="layout != 'layout-head'"
      :width="sideWitch"
      :collapsed="collapsed"
      :trigger="null"
      collapsible
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
import { computed, watch, ref, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import eventHub from './event.js'
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
  mounted() {
    eventHub.emit('pa-routers', this.$router.options.routes)
    eventHub.emit('pa-router', this.$route)
    
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

    const { ctx } = getCurrentInstance();
    const $route = computed(() => ctx.$root.$route);
    watch($route, to => eventHub.emit('pa-router', to))

    return {
      collapsed,
      fixedHeader,
      fixedSide,
      sideWitch,
      layout,
      theme,
      logo,
      tab,
    };
  },
};
</script>
