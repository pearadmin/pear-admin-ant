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
    const storeOpenKey = computed(() => getters.openKey);
    watch(computed(() => getters.activeKey), n => selectKey.value = [ n ]);
    watch(storeOpenKey, n => openKey.value = n, { deep: true });

    //切换路由的时候切换菜单
    const route = computed(() => ctx.$root.$route);
    const dynamicMenu = to => {
      // 当前路由匹配的数组
      let { matched } = to;
      //需要打开的菜单keys
      let needOpenKeys = matched.slice(0, matched.length - 1).map(m => m.path);
      //store中已经打开的数据
      let openKeys = [ ...storeOpenKey.value ];
      needOpenKeys.forEach(nk => !openKeys.includes(nk) && openKeys.push(nk))
      commit('layout/updateOpenKey', { openKeys })
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
