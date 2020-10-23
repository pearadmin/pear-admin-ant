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
      <menu-fold-outlined
        v-else
        class="trigger"
        @click="trigger()"
      />
    </div>
    <!-- 右侧菜单功能项 -->
    <div class="next-menu">
      <ExpandOutlined class="expand" />
      <SettingOutlined class="setting"  @click="setting()"/>
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
  ExpandOutlined
} from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    ExpandOutlined
  },
  methods:{
    trigger:function(){
      // 更改当前状态
      store.commit("updateCollasped");
    },
    setting:function(){
      // 抽屉是否显示
      store.commit("updateVisible");
    }
  }
};
</script>
<style scoped>
#header {
  background-color: white;
}
#header .expand,
#header .trigger,
#header .setting {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#header .expand:hover,
#header .setting:hover,
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