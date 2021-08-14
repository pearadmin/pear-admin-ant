<template>
  <div id="tab" :class="[tabType]">
    <a-tabs
      hide-add
      v-model:activeKey="active"
      type="editable-card"
      @edit="onEdit"
      @change="onChange"
      class="tab"
    >
      <a-tab-pane
        v-for="pane in list"
        :key="pane.path"
        :tab="pane.title"
        :closable="list.length > 1"
      >
      </a-tab-pane>
    </a-tabs>
    <a-dropdown class="tab-tool">
      <a-button>
        <template v-slot:icon>
          <DownOutlined />
        </template>
      </a-button>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item @click="closeOther()">
            关 闭 其 他
          </a-menu-item>
          <a-menu-item @click="closeCurrent()">
            关 闭 当 前
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import { computed, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import { DownOutlined } from "@ant-design/icons-vue";
import { useTab } from "@/composable/tab";

export default {
  components: {
    DownOutlined
  },
  setup() {

    const { getters } = useStore();
    
    const tabType = computed(() => getters.tabType);

    const { to , list , active, close, closeOther, closeCurrent } = useTab();

    const onEdit = function(path, action) {
        if(action === 'remove') {
            close(path);
        }
    }

    const onChange = function(path) {
        to({ path });
    }

    return {
        list,
        active,
        tabType,

        close,
        closeOther,
        closeCurrent,

        onEdit,
        onChange,
    };
  }
};
</script>