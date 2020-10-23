<template>
  <a-layout id="basic-layout">
    <a-layout-sider v-if="side"
      width="250"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <Logo v-if="logo"></Logo>
      <Side></Side>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <a-layout-content>
        <Tab v-if="tab"></Tab>
        <Content></Content>
        <Setup></Setup>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { computed } from "vue";
import store from "@/store";
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
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
    afterVisibleChange(val) {
      console.log("visible", val);
    },
  },
  setup() {
    const count = computed(() => store.state.count);
    const collapsed = computed(() => store.state.collapsed);
    const logo = computed(() => store.state.logo);
    const tab = computed(()=> store.state.tab);
    const side = computed(()=>store.state.side);

    return {
      count,
      collapsed,
      logo,
      side,
      tab
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
}
</style>