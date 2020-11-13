<template>
  <div id="menu">
    <a-menu
      v-model:openKeys="openKey"
      v-model:selectedKeys="selectKey"
      :mode="menuModel"
      :theme="theme === 'theme-dark' || theme === 'theme-night'?'dark':'light'"
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
import SubMenu from "./SubMenu.vue";
import {useRoute, useRouter} from "vue-router";

export default {
  components: {
    SubMenu,
  },
  setup() {
    const { getters, commit } = useStore();
    const menuModel = computed(() => getters.menuModel);
    const theme = computed(() => getters.theme);
    const openChange = function (openKeys) {
      commit("layout/updateOpenKey", { openKeys });
    };
    // 根据条件初始化路由,当非 cnmp 布局模式下初始化全部路由
    const $routes = useRouter().options.routes;
    const $route = computed(() => useRoute());
    //vuex中的布局模式
    const layout = computed(() => getters.layout);
    //vuex中记录的菜单
    const storeOpenKey = computed(() => getters.openKey);
    //vuex中记录的激活的菜单
    const activeKey = computed(() => getters.activeKey);
    //记录当前选中的菜单
    const selectKey = ref([ activeKey.value ]);
    //记录打开的菜单
    const openKey =ref([ ...storeOpenKey.value ]);
    //不同的布局, 涉及到的菜单可能会不同
    const menu = ref([]);
    //不同的布局, 菜单的前缀path需要修改
    const rootPath = ref('');
    //路由变化的时候处理方法
    const dynamicRoute = to => {
      // 当前路由匹配的数组
      let { matched } = to;
      //需要打开的菜单keys
      let needOpenKeys = matched.slice(0, matched.length - 1).map(m => m.path);
      //store中已经打开的数据
      let openKeys = [ ...storeOpenKey.value ];
      needOpenKeys.forEach(nk => !openKeys.includes(nk) && openKeys.push(nk))
      changeLayout(layout.value)
      if(layout.value!=='layout-head'){
        commit('layout/updateOpenKey', { openKeys });
      }else{
        commit('layout/clearOpenKey');
      }
    }
    //布局变化的处理方法
    const changeLayout = model => {
      if(model === 'layout-comp'){
        let topPath = $route.value.matched[0].path;
        menu.value = $routes.find(r => r.path === topPath).children;
        rootPath.value = topPath + '/';
      }else{
        menu.value = $routes;
        rootPath.value = '';
      }
    }

    //监听变化
    watch(layout, n => changeLayout(n))
    watch($route.value, dynamicRoute);
    watch(activeKey, n => selectKey.value = [ n ]);
    watch(storeOpenKey, n => openKey.value = n, { deep: true });

    //初始化路由
    dynamicRoute($route.value);

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
