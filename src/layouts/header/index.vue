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
      <ReloadOutlined class="refresh"  @click="refresh()"/>
    </div>
    <!-- 右侧菜单功能项 -->
    <div class="next-menu">
      <ExpandOutlined class="expand" />
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
} from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    ExpandOutlined,
    ReloadOutlined,
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
      this.$router.go(0);
    },
  },
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