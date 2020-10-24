<template>
  <div id="tab">
    <a-tabs
      v-model:activeKey="activeKey"
      hide-add
      type="editable-card"
      @edit="onEdit"
      @change="callback"
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.key"
        :tab="pane.title"
        :closable="pane.closable"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { computed } from "vue";
import store from "@/store";
export default {
  methods: {
    // 选项卡切换回调
    callback(key) {
      var panes = computed(() => store.state.panes);
      var router = "";
      panes.value.forEach((pane) => {
        if (pane.key === key) {
          router = pane.path;
        }
      });
      // 选项卡切换,推送 Path 到当前的路由页面
      this.$router.push(router);
      // 更改当前选中的选项卡 与 菜单项
      store.commit("selectTab", key);
      store.commit("selectKey", key);
    },
    // 选项卡新增 删除时所触发的事件
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    // 选项卡删除回调
    remove(targetKey) {
      // 删除选项卡, 并选中尾部的选项卡
      store.commit("removeTab", targetKey);
      // 获取当前选中选项卡
      const activeKey = computed(() => store.state.activeKey);
      var panes = computed(() => store.state.panes);
      var router = "";
      panes.value.forEach((pane) => {
        if (pane.key === activeKey.value) {
          router = pane.path;
        }
      });

      // 推送当前选项卡的路径到路由
      this.$router.push(router);
    },
  },
  setup() {
    // 获取 vuex 中的暂存数据
    const panes = computed(() => store.state.panes);
    const activeKey = computed(() => store.state.activeKey);

    return {
      panes,
      activeKey,
    };
  },
};
</script>
<style>
#tab .ant-tabs-bar {
  margin: 0px !important;
  border: none;
  margin-top: 6px!important;
  margin-bottom: 6px!important;
}
#tab .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  border-radius: 0px;
  border: none;
  margin-right: 3px;
  margin-left: 3px;
  height: 34px!important;
  line-height: 34px!important;
  border-radius: 2px;
  background-color: white!important;
}
#tab .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:first-child {
  margin-left: 6px;
}
#tab .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:last-child {
  margin-right: 6px;
}
#tab .ant-tabs-nav-container{
  height: 34px;
}
</style>