<template>
  <!-- 框架顶部菜单区域 -->
  <div id="header" :class="[theme == 'dark' && layout == 'headMenu', 'light']">
    <!-- 左侧菜单功能项 -->
    <div class="prev-menu" v-if="layout === 'sideMenu'">
      <!-- 左侧缩进功能键 -->
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger menu-item"
        @click="trigger()"
      />
      <!-- 左侧缩进功能键盘 -->
      <menu-fold-outlined v-else class="trigger menu-item" @click="trigger()" />
      <!-- 刷新当前页面路由 -->
      <ReloadOutlined class="refresh menu-item" />
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
      <!-- 主题设置隐显键 -->
      <SettingOutlined class="setting menu-item" @click="setting()" />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
/** 图标集 */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  ExpandOutlined,
  CompressOutlined,
  ReloadOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    ExpandOutlined,
    CompressOutlined,
    ReloadOutlined,
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
    return {
      layout,
      collapsed,
      fullscreen,
      trigger: () => commit("layout/TOGGLE_SIDEBAR"),
      setting: () => commit("layout/TOGGLE_SETTING"),
      updateFullscreen: () => commit("layout/updateFullscreen"),
      menuModel,
    };
  },
};
</script>
<style scoped>
#header {
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
}
#header .next-menu {
  float: right;
}
#header .prev-menu {
  display: inline-block;
}
#header .prev-menu .menu-item,
#header .next-menu .menu-item {
  font-size: 17px;
  padding: 0 15px;
  cursor: pointer;
  transition: color 0.3s;
}
#header .prev-menu .menu-item:hover,
#header .next-menu .menu-item:hover {
  color: #2d8cf0;
}
</style>
