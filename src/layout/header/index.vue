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
    <!-- 实现综合布局方式 -->
    <div v-if="layout == 'layout-comp'" class="comp-menu">
      <template :key="index" v-for="(route, index) in routes">
        <router-link
          :to="toPath(route)"
          class="menu-item"
          :class="[active === route.path ? 'is-active' : '']"
        >
          <span>{{ route.meta.title }}</span>
        </router-link>
      </template>
    </div>
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
import { computed, watch, getCurrentInstance, ref } from "vue";
import { useStore } from "vuex";
import Menu from "../menu/index.vue";
import Logo from "../logo/index.vue";
import _path from "path";
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
    const collapsed = computed(() => getters.collapsed);
    const fullscreen = computed(() => getters.fullscreen);
    const menuModel = computed(() => getters.menuModel);
    const theme = computed(() => getters.theme);
    const { ctx } = getCurrentInstance();
    
    const $route = computed(() => ctx.$root.$route);
    const active = ref($route.value.matched[0].path);
    watch($route, to => active.value = to.matched[0].path)

    //计算点击跳转的最终路由
    const toPath = route => {
      let { redirect, children, path } = route;
      if(redirect){
        return redirect;
      }
      while(children && children[0]){
        path = _path.resolve(path, children[0].path);
        children = children[0].children;
      }
      return path;
    }

    const { $router } = ctx.$root
    const routes = ref($router.options.routes.filter(r => !r.hidden));
    //实现当前路由刷新
    const refresh = () => {
      let _route = $route.value;
      $router.replace({
        path: _route.path,
        params: _route.params,
        query: {
          ..._route.query,
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
      toPath,
    };
  },
};
</script>
