<template>
  <div id="menu">
    <a-menu
      :openKeys="openKey"
      :selectedKeys="selectKey"
      :mode="menuModel"
      :theme="theme"
      @openChange="openChange"
    >
      <sub-menu
        v-for="(route, index) in routes"
        :key="index"
        :item="route"
        :base-path="route.path"
        level = 0
      />
    </a-menu>
  </div>
</template>
<script>
import "./index.scss";
import { computed, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import SubMenu from "./SubMenu.vue";

export default {
  components: {
    SubMenu,
  },
  setup() {
    const { getters, commit } = useStore();
    const { ctx } = getCurrentInstance();
    const routes = computed(() => ctx.$root.$router.options.routes);
    const selectKey = computed(() => getters.selectKey);
    const openKey = computed(() => getters.openKey);
    const menuModel = computed(() => getters.menuModel);
    const theme = computed(() => getters.theme);
    const openChange = function (openKeys) {
      console.log(openKeys);
      commit("layout/updateOpenKey", openKeys);
    };
    return {
      routes,
      selectKey,
      openKey,
      menuModel,
      theme,
      openChange,
    };
  },
};
</script>
