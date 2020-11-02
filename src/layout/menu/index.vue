<template>
  <div id="menu">
    <a-menu
      v-model:openKeys="openKey"
      v-model:selectedKeys="selectKey"
      :mode="menuModel"
      :theme="theme"
      @openChange="openChange"
    >
      <sub-menu
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
        :level="0"
      />
    </a-menu>
  </div>
</template>
<script>
import { computed, watch, ref, getCurrentInstance } from "vue";
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
    const menuModel = computed(() => getters.menuModel);
    const theme = computed(() => getters.theme);
    const openChange = function (openKeys) {
      commit("layout/updateOpenKey", { openKeys });
    };

    const selectKey = ref([]);
    const openKey = ref([]);
    watch(computed(() => getters.activeKey), n => selectKey.value = [ n ]);
    watch(computed(() => getters.openKey), n => openKey.value = n, { deep: true });

    //切换路由的时候切换菜单
    const route = computed(() => ctx.$root.$route);
    const dynamicMenu = to => {
      // 修改打开的菜单
      const parentKey = to.matched.find(r => r.path).path;
      commit('layout/updateOpenKey', { openKeys: [ parentKey ], isNew: true })
    }
    dynamicMenu(route.value);
    watch(route, dynamicMenu)

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
