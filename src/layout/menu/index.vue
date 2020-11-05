<template>
  <div id="menu">
    <a-menu
      v-model:openKeys="openKey"
      v-model:selectedKeys="selectKey"
      :mode="menuModel"
      :theme="theme =='theme-dark'?'dark':'light'"
      @openChange="openChange"
    >
      <sub-menu
        v-for="route in menu"
        :key="rootPath + route.path"
        :item="route"
        :base-path="rootPath + route.path"
        :level="0"
      />
    </a-menu>
  </div>
</template>
<script>
import { computed, watch, ref, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import eventHub from '../event.js'
import SubMenu from "./SubMenu.vue";

export default {
  components: {
    SubMenu,
  },
  setup() {
    const { getters, commit } = useStore();
    const { ctx } = getCurrentInstance();
    const menuModel = computed(() => getters.menuModel);
    const theme = computed(() => getters.theme);
    const openChange = function (openKeys) {
      commit("layout/updateOpenKey", { openKeys });
    };

    // 根据条件初始化路由,当非 cnmp 布局模式下初始化全部路由
    let $route, $routes;

    const selectKey = ref([]);
    const openKey = ref([]);
    const storeOpenKey = computed(() => getters.openKey);
    eventHub.on('pa-router', to => {
      $route = to;
      // 当前路由匹配的数组
      let { matched } = to;
      //需要打开的菜单keys
      let needOpenKeys = matched.slice(0, matched.length - 1).map(m => m.path);
      //store中已经打开的数据
      let openKeys = [ ...storeOpenKey.value ];
      needOpenKeys.forEach(nk => !openKeys.includes(nk) && openKeys.push(nk))
      commit('layout/updateOpenKey', { openKeys })
      changeLayout(layout.value)
    })

    const layout = computed(() => getters.layout);
    watch(layout, n => changeLayout(n))

    const menu = ref([]);
    eventHub.on('pa-routers', rs => {
      $routes = rs;
    })

    const rootPath = ref('');
    const changeLayout = model => {
      if(model === 'layout-comp'){
        let topPath = $route.matched[0].path;
        menu.value = $routes.find(r => r.path === topPath).children;
        rootPath.value = topPath + '/';
      }else{
        menu.value = $routes;
        rootPath.value = '';
      }
    }

    watch(computed(() => getters.activeKey), n => selectKey.value = [ n ]);
    watch(storeOpenKey, n => openKey.value = n, { deep: true });

    return {
      selectKey,
      openKey,
      menuModel,
      theme,
      openChange,
      menu,
      rootPath,
    };
  },
};
</script>
