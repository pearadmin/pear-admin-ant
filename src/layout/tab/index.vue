<template>
  <div id="tab">
    <a-tabs
      v-model:activeKey="activeKey"
      hide-add
      type="editable-card"
      @edit="onEdit"
      @change="callback"
      class="tab"
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.key"
        :tab="pane.title"
        :closable="pane.closable"
      >
      </a-tab-pane>
    </a-tabs>
    <a-dropdown class="tab-tool" :placement="placement">
      <a-button>
        <template v-slot:icon>
          <DownOutlined />
        </template>
      </a-button>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item>
            <a @click="closeAll()">关 闭 所 有</a>
          </a-menu-item>
          <a-menu-item>
            <a @click="closeOther()">关 闭 其 他</a>
          </a-menu-item>
          <a-menu-item>
            <a @click="closeCurrent()">关 闭 当 前</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import "./index.scss";
import { computed, getCurrentInstance, ref, watch } from "vue";
import { useStore } from "vuex";
import { DownOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    DownOutlined,
  },
  methods: {
    // 选项卡切换回调
    callback(key) {
      // 更改当前选中的选项卡 与 菜单项
      this.selectTab(key);
      this.selectKey(key);
    },
    // 选项卡新增 删除时所触发的事件
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    closeAll() {
      this.closeAllTab();
    },
    closeOther() {
      this.closeOtherTab();
    },
    closeCurrent() {
      this.closeCurrentTab();
    },
    // 选项卡删除回调
    remove(targetKey) {
      // 删除选项卡, 并选中尾部的选项卡
      this.removeTab(targetKey);
    },
  },
  setup() {
    const { getters, commit } = useStore();
    const panes = computed(() => getters.panes);
    const activeKey = computed(() => getters.activeKey);
    const { ctx } = getCurrentInstance();

    // 监听选项卡切换, 切换相关路由
    watch(activeKey, (targetKey) => {
      ctx.$root.$router.push(
        panes.value.find((item) => item.key === targetKey)
      );
    });

    return {
      placement: ref("bottomRight"),
      panes,
      activeKey,
      selectTab: (key) => commit("layout/selectTab", key),
      selectKey: (key) => commit("layout/selectKey", key),
      removeTab: (key) => commit("layout/removeTab", key),
      closeAllTab: () => commit("layout/closeAllTab"),
      closeOtherTab: () => commit("layout/closeOtherTab"),
      closeCurrentTab: () => commit("layout/closeCurrentTab"),
    };
  },
};
</script>
<style>
#tab .tab {
  width: calc(100% - 40px);
  display: inline-block;
}
#tab .tab-tool {
  float: right;
  top: 6px;
  right: 6px;
  border: none;
}
#tab .ant-tabs-bar {
  margin: 0px !important;
  border: none;
  margin-top: 6px !important;
  margin-bottom: 6px !important;
}
#tab .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  border-radius: 0px;
  border: none;
  margin-right: 3px;
  margin-left: 3px;
  height: 34px !important;
  line-height: 34px !important;
  border-radius: 2px;
  background-color: white !important;
}
#tab .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:first-child {
  margin-left: 6px;
}
#tab .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:last-child {
  margin-right: 6px;
}
#tab .ant-tabs-nav-container {
  height: 34px;
}
</style>
