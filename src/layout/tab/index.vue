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
import router from "../../router/index.js";
import { DownOutlined } from "@ant-design/icons-vue";
import { useRouter,useRoute} from "vue-router";
export default {
  components: {
    DownOutlined,
  },
  methods: {
    // 选项卡切换回调
    callback(key) {
      // 更改当前选中的选项卡 与 菜单项
      this.selectTab(key);
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
    const { ctx } = getCurrentInstance();

    const panes = ref(initPanes);
    watch(computed(() => getters.panes), n => panes.value = n, { deep: true })

    const initPanes =[];
    const findFixedPane = (list, prefix, panes) => {
      panes.forEach(pane => {
        const { path, meta, hidden, children } = pane;
        if(children && children.length > 0){
          findFixedPane(list, _path.resolve(prefix, path), children);
        }else{
            if(!hidden && meta && meta.fixed){
              list.push({ title: meta.title, path: _path.resolve(prefix, path), closable: false })
            }
        }
      })
    }
    findFixedPane(initPanes, '', useRouter().options.routes)
    commit('layout/initPanes', initPanes);
    
    //切换路由的时候切换选项卡
    const route = computed(() => useRoute());
    const dynamicMenu = to => {
      const title = to.meta.title;
      const path = to.path;
      commit("layout/addTab", { title, path });
    }
    dynamicMenu(route.value);
    watch(route.value, dynamicMenu);

    const storeKey = computed(() => getters.activeKey);
    const activeKey = ref(storeKey.value);
    watch(storeKey, targetKey => {
      activeKey.value = targetKey

      // TODO 此处需修改为 useRouter() 方式, 但是不生效
      router.push(targetKey);
    })

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
