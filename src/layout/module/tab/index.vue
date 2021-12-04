<template>
  <div id="tab" :class="[tabType]">
    <a-tabs
      hide-add
      v-model:activeKey="active"
      @change="onChange"
      @edit="onEdit"
      class="tab"
      type="editable-card"
    >
      <a-tab-pane
        v-for="pane in list"
        :key="pane.path"
        :closable="list.length > 1"
      >
        <template #tab>
            <span class="tab-dot"></span>
            {{ i18nTitle(pane.i18n) }}
        </template>
      </a-tab-pane>
      <template #rightExtra>
        <a-dropdown>
          <a-button>
            <template v-slot:icon>
              <DownOutlined />
            </template>
          </a-button>
          <template v-slot:overlay>
            <a-menu>
              <a-menu-item @click="closeOther()"> 关 闭 其 他 </a-menu-item>
              <a-menu-item @click="closeCurrent()"> 关 闭 当 前 </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </a-tabs>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { DownOutlined } from "@ant-design/icons-vue";
import { useTab } from "@/composable/tab";
import { useI18n } from "vue-i18n";

export default {
  components: {
    DownOutlined,
  },
  setup() {
    const { t } = useI18n();
    const { getters } = useStore();
    const tabType = computed(() => getters.tabType);
    const { to, list, active, close, closeOther, closeCurrent } = useTab();

    const onEdit = function (path, action) {
      if (action === "remove") {
        close(path);
      }
    };

    const onChange = function (path) {
      to({ path });
    };

    const i18nTitle = function (content) {
      return t(content);
    };

    return {
      list,
      active,
      tabType,
      close,
      closeOther,
      closeCurrent,
      onEdit,
      onChange,
      i18nTitle,
    };
  },
};
</script>

<style lang="less">
.pear-tab-1,
.pear-tab-2,
.pear-tab-3 {
  height: 46px;
}

.pear-tab-1 .ant-tabs-tab{
  height: 34px;
  margin: 6px 0px 0px 6px !important;
  background: #fff!important;
  border-radius: 3px!important;
  &.ant-tabs-tab-active {
    .tab-dot {
      width: 8px;
      height: 8px;
      background: turquoise;
      border-radius: 8px;
      display: inline-block;
      margin-right: 5px;
    }
    border-bottom: none;
  }
}

.pear-tab-2 .ant-tabs-tab{
  height: 34px;
  margin: 6px 0px 0px 6px !important;
  background: #fff!important;
  border-radius: 3px!important;
  &.ant-tabs-tab-active {
    .tab-dot {
      width: 8px;
      height: 8px;
      background: turquoise;
      border-radius: 8px;
      display: inline-block;
      margin-right: 5px;
    }
    border-bottom: none;
  }
}

.pear-tab-3 .ant-tabs-tab{
  height: 34px;
  margin: 6px 0px 0px 6px !important;
  background: #fff!important;
  border-radius: 3px!important;
  &.ant-tabs-tab-active {
    .tab-dot {
      width: 8px;
      height: 8px;
      background: turquoise;
      border-radius: 8px;
      display: inline-block;
      margin-right: 5px;
    }
    border-bottom: none;
  }
}

</style>