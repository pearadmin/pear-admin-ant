<template>
  <div id="menu">
    <a-menu
      v-model:openKeys="openKey"
      v-model:selectedKeys="selectKey"
      :mode="menuModel"
      :theme="menuTheme"
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
import { useStore } from "vuex";
import SubMenu from "./SubMenu.vue";
import {useRoute, useRouter} from "vue-router";
import { computed, watch, ref, getCurrentInstance } from "vue";

export default {
  components: {
    SubMenu,
  },
  setup() {
    const { getters, commit } = useStore();

    const theme = computed(() => getters.theme);
    const layout = computed(() => getters.layout);

    const menuModel = computed(() => getters.layout == "layout-head"?"horizontal":"inline" );
    const menuTheme = computed(() => getters.theme === 'theme-dark' || getters.theme === 'theme-night'?'dark':'light');

    const routes = useRouter().options.routes;
    const route = computed(() => useRoute());

    const openChange = function (openKeys) {
      commit("layout/updateOpenKey", { openKeys });
    };
    
    const storeOpenKey = computed(() => getters.openKey);
    const activeKey = computed(() => getters.activeKey);

    const openKey =ref([ ...storeOpenKey.value ]);

    const selectKey = ref([ activeKey.value ]);
    
    const rootPath = ref('');
    
    const menu = ref([]);
    
    const dynamicRoute = to => {
      let { matched } = to;
      let needOpenKeys = matched.slice(0, matched.length - 1).map(m => m.path);
      let openKeys = [ ...storeOpenKey.value ];
      needOpenKeys.forEach(nk => !openKeys.includes(nk) && openKeys.push(nk))
      changeLayout(layout.value)
      if(layout.value!=='layout-head'){
        commit('layout/updateOpenKey', { openKeys });
      }else{
        commit('layout/clearOpenKey');
      }
    }

    const changeLayout = model => {
      if(model === 'layout-comp'){
        let topPath = route.value.matched[0].path;
        menu.value = routes.find(r => r.path === topPath).children;
        rootPath.value = topPath + '/';
      }else{
        menu.value = routes;
        rootPath.value = '';
      }
    }

    watch(layout, n => changeLayout(n))

    watch(route.value, dynamicRoute);
    
    watch(activeKey, n => selectKey.value = [ n ]);
  
    watch(storeOpenKey, n => openKey.value = n, { deep: true });
    
    dynamicRoute(route.value);

    return {
      selectKey,
      openKey,
      menuModel,
      menuTheme,
      openChange,
      menu,
      rootPath,
    };
  },
};
</script>
