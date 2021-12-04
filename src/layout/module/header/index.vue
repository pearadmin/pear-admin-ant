<template>
  <div id="header" :class="[isMobile && 'mobile_header']">
    <template v-if="layout !== 'layout-head'">
      <!-- 左侧菜单 -->
      <div class="prev-menu">
        <!-- 左侧缩进功能键 -->
        <div class="menu-item" @click="trigger()">
          <AlignLeftOutlined v-if="collapsed" />
          <!-- 左侧缩进功能键盘 -->
          <AlignRightOutlined v-else />
        </div>
        <div class="menu-item" @click="refresh">
          <!-- 刷新当前页面路由 -->
          <ReloadOutlined v-if="routerActive" />
          <LoadingOutlined v-else />
        </div>
      </div>
    </template>

    <template v-else>
      <div class="head-logo">
        <Logo></Logo>
      </div>
      <div class="head-menu">
        <Menu></Menu>
      </div>
    </template>

    <!-- 综合菜单 -->
    <div v-if="layout == 'layout-comp'" class="comp-menu">
      <template :key="index" v-for="(route, index) in routes">
        <div
          @click="changeMenu(route)"
          class="menu-item"
          :class="[active === route.path ? 'is-active' : '']"
        >
          <span>{{ route.meta.title }}</span>
        </div>
      </template>
    </div>
    <!-- 右侧菜单 -->
    <div class="next-menu">
      <div class="menu-item" v-if="!isFull" @click="fullScreen(1)">
        <ExpandOutlined />
      </div>
      <div class="menu-item" v-else @click="fullScreen(2)">
        <CompressOutlined />
      </div>
      <a-dropdown class="notice-item" placement="bottomCenter">
        <BellOutlined />
        <template #overlay>
          <a-menu class="notice-dropdown">
            <a-tabs centered="true">
              <a-tab-pane key="1" tab="通知">
                <a-empty description="暂无通知" />
              </a-tab-pane>
              <a-tab-pane key="2" tab="公告">
                <a-empty description="暂无公告" />
              </a-tab-pane>
              <a-tab-pane key="3" tab="私信">
                <a-empty description="暂无私信" />
              </a-tab-pane>
              <a-tab-pane key="4" tab="任务">
                <a-empty description="暂无任务" />
              </a-tab-pane>
            </a-tabs>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown class="locale-item" placement="bottomCenter">
        <GlobalOutlined />
        <template #overlay>
          <a-menu @click="setLanguage" :selectedKeys="selectedKeys">
            <a-menu-item key="zh-CN"> 简体中文 </a-menu-item>
            <a-menu-item key="en-US"> English </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown class="avatar-item" placement="bottomCenter">
        <a-avatar
          src="https://portrait.gitee.com/uploads/avatars/user/1611/4835367_Jmysy_1578975358.png"
        ></a-avatar>
        <template #overlay>
          <a-menu class="avatar-dropdown">
            <a-menu-item key="0">
              <a-menu-item @click="go"> 个人中心 </a-menu-item>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <a-menu-item @click="logout"> 注销登录 </a-menu-item>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <div v-if="!isMobile" class="menu-item" @click="setting()">
        <MoreOutlined />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, watch, ref, unref } from "vue";
import { useStore } from "vuex";
import Menu from "../menu/index.vue";
import Logo from "../logo/index.vue";
import { useFullScreen } from "@/composable/common";
import { useRoute, useRouter } from "vue-router";
import i18n from "@/locale/index.js";
import {
  AlignLeftOutlined,
  AlignRightOutlined,
  MoreOutlined,
  ExpandOutlined,
  CompressOutlined,
  ReloadOutlined,
  GlobalOutlined,
  BellOutlined,
  LoadingOutlined,
} from "@ant-design/icons-vue";
import { loadLocaleMessages } from "@/locale/index.js";
export default {
  components: {
    AlignLeftOutlined,
    AlignRightOutlined,
    MoreOutlined,
    ExpandOutlined,
    CompressOutlined,
    ReloadOutlined,
    GlobalOutlined,
    Menu,
    Logo,
    BellOutlined,
    LoadingOutlined,
  },
  setup() {
    const { getters, commit, dispatch } = useStore();
    const layout = computed(() => getters.layout);
    const collapsed = computed(() => getters.collapsed);
    const menuModel = computed(() => getters.menuModel);
    const theme = computed(() => getters.theme);
    const $route = useRoute();
    const router = useRouter();
    const { isFull, fullScreen } = useFullScreen();
    const active = ref($route.matched[0].path);
    const isMobile = computed(() => getters.isMobile);
    const routerActive = computed(() => getters.routerActive);

    watch(
      computed(() => $route.fullPath),
      () => {
        active.value = $route.matched[0].path;
      }
    );

    const routes = computed(() => getters.menu).value.filter((r) => !r.hidden);

    const refresh = async () => {
      commit("app/UPDATE_ROUTER_ACTIVE");
      setTimeout(() => {
        commit("app/UPDATE_ROUTER_ACTIVE");
      }, 500);
    };

    const changeMenu = (targetRoute) => {
      let { children, path } = targetRoute;
      while (children && children[0]) {
        path = children[0].path;
        children = children[0].children;
      }
      router.push(path);
      menus.value = getters.menu.find(
        (r) => r.path === $route.matched[0].path
      ).children;
    };

    const logout = async (e) => {
      await dispatch("user/logout");
    };

    const go = async (e) => {
      router.push("/account/center");
    };

    const store = useStore();
    const defaultLang = computed(() => store.state.app.language);
    const selectedKeys = ref([unref(defaultLang)]);

    const setLanguage = async ({ key }) => {
      selectedKeys.value = [key];
      await loadLocaleMessages(i18n, key);
      await store.dispatch("app/setLanguage", key);
    };

    return {
      isMobile,
      layout,
      collapsed,
      fullScreen,
      isFull,
      trigger: () => commit("app/TOGGLE_SIDEBAR"),
      setting: () => commit("app/TOGGLE_SETTING"),
      menuModel,
      routerActive,
      theme,
      refresh,
      routes,
      active,
      logout,
      changeMenu,
      setLanguage,
      selectedKeys,
      go,
    };
  },
};
</script>
<style lang="less" scoped>
.mobile_header {
  padding-right: 0px !important;
}
</style>