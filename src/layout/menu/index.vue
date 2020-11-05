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
        :key="route.path"
        :item="route"
        :base-path="activePath + route.path"
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
    const layout = computed(()=> getters.layout);
    const menuModel = computed(() => getters.menuModel);
    const theme = computed(() => getters.theme);
    const openChange = function (openKeys) {
      commit("layout/updateOpenKey", { openKeys });
    };

    // 根据条件初始化路由,当非 cnmp 布局模式下初始化全部路由
    var menu = computed(() => ctx.$root.$router.options.routes);
    var activeMenu;
    var activePath = computed(() => getters.basePath);


    if(layout.value === 'layout-comp'){
         // 初始化局部路由
         activeMenu = computed(()=> getters.activeMenu);
         commit("layout/UPDATE_ROUTES",menu.value[activeMenu.value].children);
         commit("layout/UPDATE_BASE_PATH",menu.value[activeMenu.value].path+"/")
         menu = computed(()=> getters.routes);
    }

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
    watch(activeMenu,function(index){
      commit("layout/UPDATE_ROUTES",computed(() => ctx.$root.$router.options.routes).value[index].children);
      commit("layout/UPDATE_BASE_PATH",computed(() => ctx.$root.$router.options.routes).value[index].path+"/");
    })

    return {
      selectKey,
      openKey,
      menuModel,
      theme,
      openChange,
      menu,
      activePath
    };
  },
};
</script>
