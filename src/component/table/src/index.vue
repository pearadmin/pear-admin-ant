<template>
  <div id="p-table">
    <div class="p-table-tool">
      <!-- 表格工具栏 -->
      <div class="p-table-prev">
        <template :key="index" v-for="(item, index) in toolbar">
          <!-- 更多按钮 -->
          <a-dropdown v-if="item.children && item.children.length > 0">
            <!-- -->
            <a-button @click="item.event(selectedRowKeys)">
              {{ item.label }}
            </a-button>
            <template #overlay>
              <a-menu>
                <!-- 遍历子集 -->
                <a-menu-item v-for="(child, i) in item.children" :key="i">
                  <a @click="child.event(selectedRowKeys)"> {{ child.label }} </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <a-button
             v-else
            :type="index == 0 ? 'primary' : ''"
            @click="item.event(selectedRowKeys)"
          >
            {{ item.label }}
          </a-button>
        </template>
      </div>
      <!-- 默认工具栏 -->
      <div class="p-table-next">
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
      </div>
    </div>
    <!-- 表格组件 -->
    <a-table
      :dataSource="datasource"
      :columns="columns"
      :pagination="pagination"
      :loading="loading"
      @change="fetch"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
    >
      <!-- 默认插槽 [自定义列替换]-->
      <slot></slot>
      <!-- 行操作 -->
      <template v-slot:action="{ record }">
        <span>
          <template :key="index" v-for="(item, index) in operate">
            <!-- 下拉操作 -->
            <a-dropdown v-if="item.children && item.children.length > 0">
              <a> {{ item.label }} </a>
              <template #overlay>
                <a-menu>
                  <!-- 遍历子集 -->
                  <a-menu-item v-for="(child, i) in item.children" :key="i">
                    <a @click="child.event(record)"> {{ child.label }} </a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <!-- 单个操作 -->
            <a v-else @click="item.event(record)"> {{ item.label }} </a>
            <a-divider type="vertical" />
          </template>
        </span>
      </template>
    </a-table>
  </div>
</template>
<script>
import "./index.less";
import T from "ant-design-vue/es/table/Table";
import { watch, defineComponent, onMounted, reactive, toRefs } from "vue";
import {
  AppstoreOutlined,
  LoadingOutlined,
  SyncOutlined,
} from "@ant-design/icons-vue";

const TProps = T.props;
export default defineComponent({
  name: "p-table",
  components: {
    AppstoreOutlined,
    LoadingOutlined,
    SyncOutlined,
  },
  props: Object.assign({}, TProps, {
    /// 扩展参数
    param: {
      type: Object
    },
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
    },
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
    if (props.operate != false) {
      state.columns.push({
        dataIndex: "action",
        key: "action",
        title: "操作",
        slots: { customRender: "action" },
      });
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
    const onSelectChange = (selectedRowKeys) => {
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

    /// 监听扩展参数, 触发表格刷新
    watch(() => props.param,() => {
        fetchData();
    },{deep: true});

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
      onSelectChange,
    };
  },
});
</script>