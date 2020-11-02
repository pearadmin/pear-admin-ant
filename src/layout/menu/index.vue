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
        v-for="(route, index) in routes"
        :key="route.meta && route.meta.key || index / -1"
        :item="route"
        :base-path="route.path"
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
    watch(computed(() => getters.selectKey), n => selectKey.value = n, { deep: true });
    watch(computed(() => getters.openKey), n => openKey.value = n, { deep: true });

    //切换路由的时候切换菜单
    const route = computed(() => ctx.$root.$route);
    const dynamicMenu = to => {
      const key = to.meta.key;
      const title = to.meta.title;
      const path = to.path;
      // 新 增 顶 部 选 项 卡 操 作
      commit("layout/addTab", { key, title, path });
      // 设 置 当 前 菜 单 选 中
      commit("layout/selectKey", key);
      // 修改打开的菜单
      const parentKey = to.matched.find(r => r.meta && r.meta.key).meta.key;
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
<style>
.ant-menu-sub.ant-menu-inline > .ant-menu-item,
.ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 48px;
  line-height: 48px;
}
.ant-menu-vertical > .ant-menu-item,
.ant-menu-vertical-left > .ant-menu-item,
.ant-menu-vertical-right > .ant-menu-item,
.ant-menu-inline > .ant-menu-item,
.ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 48px !important;
  line-height: 48px !important;
}
.ant-layout-sider {
  background: #191a23 !important;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: #2d8cf0 !important;
}
.ant-menu-dark,
.ant-menu-dark {
  background: #191a23 !important;
}
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  background-color: #101117 !important;
}
.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item,
.ant-menu-vertical .ant-menu-submenu-title,
.ant-menu-vertical-left .ant-menu-submenu-title,
.ant-menu-vertical-right .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-submenu-title {
  margin-top: 4px !important;
  margin-bottom: 4px !important;
}
</style>
