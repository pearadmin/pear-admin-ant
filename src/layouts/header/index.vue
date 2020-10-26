<template>
  <!-- 框架顶部菜单区域 -->
  <div id="header">
    <!-- 左侧菜单功能项 -->
    <div class="prev-menu">
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="trigger()"
      />
      <menu-fold-outlined v-else class="trigger" @click="trigger()" />
      <ReloadOutlined class="refresh" @click="refresh()" />
    </div>
    <!-- 右侧菜单功能项 -->
    <div class="next-menu">
      <ExpandOutlined v-if="!fullscreen" class="expand" @click="full(1)" />
      <CompressOutlined v-else class="expand"  @click="full(2)"/>
      <SettingOutlined class="setting" @click="setting()" />
    </div>
  </div>
</template>
<script>
import store from "@/store";
/** 图标引入 */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  ExpandOutlined,
  ReloadOutlined,
  CompressOutlined
} from "@ant-design/icons-vue";
import { computed } from 'vue';
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    ExpandOutlined,
    ReloadOutlined,
    CompressOutlined
  },
  methods: {
    trigger: function () {
      // 更改当前状态
      store.commit("updateCollasped");
    },
    setting: function () {
      // 抽屉是否显示
      store.commit("updateVisible");
    },
    refresh: function () {
      // 路由刷新
      store.commit("updateRouterActive");
      this.$nextTick(function () {
        store.commit("updateRouterActive");
      });
      this.$message.info("刷新成功");
    },
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
          // 修改值
          break;
      }
      store.commit("updateFullscreen");
    },
  },
  setup(){
    const fullscreen = computed(()=>store.state.fullscreen);
  
    return {fullscreen};
  }
};
</script>
<style scoped>
#header {
  background-color: white;
}
#header .expand,
#header .refresh,
#header .trigger,
#header .setting {
  font-size: 17px;
  line-height: 64px;
  padding: 0 15px;
  cursor: pointer;
  transition: color 0.3s;
}
#header .expand:hover,
#header .setting:hover,
#header .refresh:hover,
#header .trigger:hover {
  color: #1890ff;
}
#header .next-menu {
  float: right;
}
#header .prev-menu {
  display: inline-block;
}
</style>