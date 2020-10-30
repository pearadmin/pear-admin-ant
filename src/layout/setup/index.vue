<template>
  <a-drawer
    title="设置"
    placement="right"
    :closable="false"
    :visible="visible"
    width="360"
    :after-visible-change="afterVisibleChange"
    @close="onChangeVisible()"
  >
    <div>
      <a-switch v-model:checked="logo" @change="onChangeLogo" /> ---- 图标
      <br />
      <br />
      <a-switch v-model:checked="tab" @change="onChangeTab" /> ---- 内容
      <br />
      <br />
      <a-switch v-model:checked="theme" @change="onChangeTheme" /> ---- 主题
      <br />
      <br />
      <a-radio-group
        :options="lans"
        v-model:value="lan"
        @change="changeLanguage"
      />
    </div>

    <br />
    <br />
  </a-drawer>
</template>
<script>
import "./index.scss";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const { getters, commit } = useStore();
    const visible = computed(() => getters.settingVisible);
    const logo = computed(() => getters.logo);
    const tab = computed(() => getters.tab);
    const theme = computed(() => getters.theme == "dark");
    const lan = ref(getters.language);
    const lans = computed(() =>
      getters.languages.map((lan) => ({ label: lan, value: lan }))
    );
    return {
      visible,
      logo,
      tab,
      theme,
      lan,
      lans,
      onChangeVisible: () => commit("layout/TOGGLE_SETTING"),
      onChangeLogo: () => commit("layout/TOGGLE_LOGO"),
      onChangeTab: () => commit("layout/updateTab"),
      onChangeSide: () => commit("layout/TOGGLE_SIDEBAR_VISIBLE"),
      onChangeTheme: () => commit("layout/TOGGLE_THEME"),
      afterVisibleChange: () => {},
      changeLanguage: (e) => {
        commit("layout/setLanguage", e.target.value);
      },
    };
  },
};
</script>