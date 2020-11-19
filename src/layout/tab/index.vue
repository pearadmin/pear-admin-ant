<template>
  <div id="tab">
    <a-tabs
      hide-add
      v-model:activeKey="activeKey"
      type="editable-card"
      @edit="onEdit"
      @change="callback"
      class="tab"
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.path"
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
import _path from "path";
import { computed, getCurrentInstance, ref, watch } from "vue";
import { useStore } from "vuex";
import { DownOutlined } from "@ant-design/icons-vue";
import { useRouter, useRoute } from "vue-router";
export default {
  components: {
    DownOutlined,
  },
  methods: {
    callback(key) {
      this.selectTab(key);
    },
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
    remove(targetKey) {
      this.removeTab(targetKey);
    },
  },
  setup() {
    const { getters, commit } = useStore();
    const panes = ref(initPanes);
    const initPanes = [];
    const route = useRoute();
    const router = useRouter();
    const storeKey = computed(() => getters.activeKey);
    const activeKey = ref(storeKey.value);
    
    // 初 始 化 选 项 卡 选 中 项
    const findFixedPane = (list, prefix, panes) => {
      panes.forEach((pane) => {
        const { path, meta, hidden, children } = pane;
        if (children && children.length > 0) {
          findFixedPane(list, _path.resolve(prefix, path), children);
        } else {
          if (!hidden && meta && meta.fixed) {
            list.push({
              title: meta.title,
              path: _path.resolve(prefix, path),
              closable: false,
            });
          }
        }
      });
    };
    findFixedPane(initPanes, "", useRouter().options.routes);

    // 新 增 或 添 加 选 项 卡 操 作
    const dynamicMenu = () => {
      const title = route.meta.title;
      const path = route.path;
      commit("layout/addTab", { title, path });
    };

    // 路 由 变 更 监 听
    watch(computed(()=>route.fullPath), dynamicMenu);

    // 选 项 卡 变 化 监 听
    watch(
      computed(() => getters.panes),
      (n) => (panes.value = n),
      { deep: true }
    );
    // 选 项 卡 选 中 监 听
    watch(storeKey, (targetKey) => {
      activeKey.value = targetKey;
      router.push(targetKey);
    });

    // 初 始 化 操 作
    dynamicMenu(route);
    commit("layout/initPanes", initPanes);

    return {
      placement: ref("bottomRight"),
      panes,
      activeKey,
      selectTab: (key) => commit("layout/selectTab", key),
      removeTab: (key) => commit("layout/removeTab", key),
      closeAllTab: () => commit("layout/closeAllTab"),
      closeOtherTab: () => commit("layout/closeOtherTab"),
      closeCurrentTab: () => commit("layout/closeCurrentTab"),
    };
  },
};
</script>
