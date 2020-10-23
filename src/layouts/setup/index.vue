<template>
  <a-drawer
    title="Setup"
    placement="right"
    :closable="false"
    v-model:visible="visible"
    width="350"
    :after-visible-change="afterVisibleChange"
    @close="onChangeVisible()"
  >
    <a-switch v-model:checked="logo" @change="onChangeLogo" />  ----  图标
    <br/>
    <br/>
    <a-switch v-model:checked="tab" @change="onChangeTab" />  ----  内容
    <br/>
    <br/>
    <a-switch v-model:checked="side" @change="onChangeSide" />  ----  菜单
  </a-drawer>
</template>
<script>
import { computed } from "vue";
import store from "@/store";
export default {
  setup() {
    const visible = computed(() => store.state.visible);
    const logo = computed(() => store.state.logo);
    const side = computed(() => store.state.side);
    const tab = computed(()=> store.state.tab);

    function onChangeVisible() {
      store.commit("updateVisible");
    }
    function onChangeLogo() {
      store.commit("updateLogo");
    }
    function onChangeSide() {
      store.commit("updateSide");
    }
    function onChangeTab() {
      store.commit("updateTab");
    }

    return {
      visible,
      onChangeVisible,
      onChangeLogo,
      onChangeTab,
      onChangeSide,
      logo,
      side,
      tab
    };
  },
};
</script>
<style>
</style>