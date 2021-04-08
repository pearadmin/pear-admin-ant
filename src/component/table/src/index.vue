<template>
  <div id="pro-table">
    <div class="pro-table-tool">
      <!-- 表格工具栏 -->
      <div class="pro-table-prev">
        <a-button
          :type="index == 0?'primary':''"
          :key="index"
          v-for="(item, index) in toolbar"
          @click="item.event(selectedRowKeys)"
        >
          {{ item.label }}
        </a-button>
      </div>
      <!-- 默认工具栏 -->
      <div class="pro-table-next">
        <a-button @click="reload">
          <template #icon
            ><LoadingOutlined v-if="loading" /><SyncOutlined v-else
          /></template>
        </a-button>
        <a-dropdown>
          <a-button>
            <template #icon><AppstoreOutlined /></template>
          </a-button>
          <template #overlay>
            <a-menu class="filtration">
              <a-checkbox-group
                v-model:value="filtrationColumnKeys"
                @change="filtration"
              >
                <a-row>
                  <a-col
                    :span="24"
                    :key="index"
                    v-for="(filtrationColumn, index) in filtrationColumns"
                  >
                    <a-checkbox :value="filtrationColumn.value">
                      {{ filtrationColumn.label }}
                    </a-checkbox>
                  </a-col>
                </a-row>
              </a-checkbox-group>
            </a-menu>
          </template>
        </a-dropdown>
        <a-button>
          <template #icon><ExportOutlined /></template>
        </a-button>
      </div>
    </div>
    <!-- 表格组件 -->
    <a-table
      :dataSource="datasource"
      :columns="columns"
      :pagination="pagination"
      :loading="loading"
      @change="fetch"
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
    >
      <!-- 默认插槽 -->
      <template v-slot:action="{ record }">
        <span>
          <template :key="index" v-for="(item, index) in operate">
            <a @click="item.event(record)"> {{ item.label }} </a>
            <a-divider type="vertical" />
          </template>
        </span>
      </template>
    </a-table>
  </div>
</template>
<script>
import T from "ant-design-vue/es/table/Table";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import {
  AppstoreOutlined,
  LoadingOutlined,
  ExportOutlined,
  SyncOutlined,
} from "@ant-design/icons-vue";

const TProps = T.props;
export default defineComponent({
  name: "pro-table",
  components: {
    AppstoreOutlined,
    LoadingOutlined,
    ExportOutlined,
    SyncOutlined,
  },
  props: Object.assign({}, TProps, {
    /// 数据来源
    fetch: {
      type: Function,
      required: false,
    },
    /// 数据解析
    columns: {
      type: Array,
      required: true,
    },
    /// 表格工具
    toolbar: {
      type: Array,
    },
    /// 行操作
    operate: {
      type: Array,
    }   
  }),
  setup(props) {
    /// 状态共享
    const state = reactive({
      pagination: Object.assign({}, props.pagination),
      datasource: [],
      loading: true,
      columns: props.columns,
      filtrationColumnKeys: [],
      selectedRowKeys: [],
    });

    /// 默认操作
    if(props.operate!=false){
      state.columns.push({ dataIndex: "action", key: "action",title: "操作", slots: { customRender: "action" }})
    }
    
    /// 过滤字段
    const filtrationColumns = [];

    props.columns.forEach(function (item) {
      filtrationColumns.push({ label: item.title, value: item.key });
      state.filtrationColumnKeys.push(item.key);
    });

    /// 过滤字段
    const filtration = function (value) {
      state.columns = props.columns.filter((item) => value.includes(item.key));
      state.filtrationColumnKeys = value;
    };

    /// 选中回调
    const onSelectChange = selectedRowKeys => {
      state.selectedRowKeys = selectedRowKeys;
    };

    /**
     * @param fluter 过滤字段
     * @param param 分页参数
     * @param sort 排序字段
     */
    const fetchData = async (param) => {
      /// 开启加载
      state.loading = true;
      /// 请求数据
      const { total, data } = await props.fetch(param);
      /// 状态重置
      state.pagination.pageSize = param.pageSize;
      state.pagination.current = param.current;
      state.pagination.total = total;
      state.datasource = data;
      state.loading = false;
    };

    /// 刷新方法
    const reload = function () {
      fetchData(state.pagination);
    };

    /// 初始数据
    onMounted(async () => {
      await fetchData(state.pagination);
    });

    return {
      /// 数据信息
      ...toRefs(state),
      /// 数据加载
      fetch: fetchData,
      /// 刷新方法
      reload: reload,
      /// 过滤字段
      filtrationColumns,
      filtration,
      /// 选中字段
      onSelectChange
    };
  },
});
</script>
<style lang="less">
.pro-table-prev {
  display: inline-block;
  .ant-btn {
    margin: 4px;
    margin-bottom: 8px;
  }
}
.pro-table-next {
  float: right;
  .ant-btn {
    margin: 4px;
    margin-bottom: 8px;
  }
}

.filtration {
  width: 130px;
  .ant-checkbox-wrapper {
    margin-left: 14px;
    margin-top: 4px;
  }
}
</style>
