<template>
  <!-- 框架顶部菜单区域 -->
  <div id="header">
    <!-- 左侧菜单功能项 -->
    <div class="prev-menu" v-if="layout !== 'layout-head'">
      <!-- 左侧缩进功能键 -->
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger menu-item"
        @click="trigger()"
      />
      <!-- 左侧缩进功能键盘 -->
      <menu-fold-outlined v-else class="trigger menu-item" @click="trigger()" />
      <!-- 刷新当前页面路由 -->
      <ReloadOutlined class="refresh menu-item" @click="refresh" />
    </div>
    <div v-if="layout == 'layout-head'" class="head-logo">
      <Logo></Logo>
    </div>
    <div v-if="layout == 'layout-head'" class="head-menu">
      <Menu></Menu>
    </div>
    <div v-if="layout == 'layout-comp'" class="comp-menu">
      <template :key="index" v-for="(route, index) in routes">
        <div
          @click="changeMenu(index)"
          class="menu-item"
          :class="[active === index ? 'is-active' : '']"
          v-if="!route.hidden"
        >
          {{ route.meta.title }}
        </div>
      </template>
    </div>

    <!-- 实现综合布局方式, 该布局方式与上方菜单的区别,只遍历一级 -->
    <!-- 右侧菜单功能项 -->
    <div class="next-menu">
      <!-- 当前页面最大化 -->
      <ExpandOutlined
        v-if="!fullscreen"
        class="expand menu-item"
        @click="full(1)"
      />
      <CompressOutlined v-else class="expand menu-item" @click="full(2)" />
      <!-- 国际化切换 -->
      <GlobalOutlined class="language menu-item" />
      <!-- 主题设置隐显键 -->
      <SettingOutlined class="setting menu-item" @click="setting()" />
    </div>
  </div>
</template>
<script>
import { computed, getCurrentInstance, ref } from "vue";
import { useStore } from "vuex";
import Menu from "../menu/index.vue";
import Logo from "../logo/index.vue";
/** 图标集 */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  ExpandOutlined,
  CompressOutlined,
  ReloadOutlined,
  GlobalOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    ExpandOutlined,
    CompressOutlined,
    ReloadOutlined,
    GlobalOutlined,
    Menu,
    Logo,
  },
  methods: {
    full: function (num) {
      num = num || 1;
      num = num * 1;
      var docElm = document.documentElement;
      switch (num) {
        case 1:
          if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
          } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
          } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
          } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
          }
          break;
        case 2:
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
          break;
      }
      this.updateFullscreen();
    },
  },
  setup() {
    const { getters, commit } = useStore();
    const layout = computed(() => getters.layout);
    var active = computed(()=> getters.activeMenu);
    const collapsed = computed(() => getters.collapsed);
    const fullscreen = computed(() => getters.fullscreen);
    const menuModel = computed(() => getters.menuModel);
    const theme = computed(() => getters.theme);
    const { ctx } = getCurrentInstance();
    const routes = computed(() => ctx.$root.$router.options.routes);

    const changeMenu = function (key) {
      active.value = key;
      // 更新路由
      commit("layout/UPDATE_ACTIVE_MENU",key);
    };

    const refresh = () => {
      const $route = ctx.$root.$route;
      ctx.$root.$router.replace({
        path: $route.path,
        params: $route.params,
        query: {
          ...$route.query,
          _: Date.now(),
        },
      });
    };

    return {
      layout,
      collapsed,
      fullscreen,
      trigger: () => commit("layout/TOGGLE_SIDEBAR"),
      setting: () => commit("layout/TOGGLE_SETTING"),
      updateFullscreen: () => commit("layout/updateFullscreen"),
      menuModel,
      theme,
      refresh,
      routes,
      active,
      changeMenu,
    };
  },
};
</script>
