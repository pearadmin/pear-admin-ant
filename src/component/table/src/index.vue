<template>
  <div id="pro-table">
    <div class="pro-table-tool">
      <!-- 表格工具栏 -->
      <div class="pro-table-prev">
          <a-button  :type="index==0?'primary':''" @click="item.event" :key ="index"  v-for="(item, index) in toolbar"> {{item.label}} </a-button>
      </div>
      <!-- 默认工具栏 -->
      <div class="pro-table-next">
        <a-button v-if="!loading" @click="reload"
          ><template #icon><SyncOutlined /></template
        ></a-button>
        <a-button v-else>
          <template #icon><LoadingOutlined /></template>
        </a-button>
        <a-button>
          <template #icon><AppstoreOutlined /> </template>
        </a-button>
        <a-button
          ><template #icon><ExportOutlined /></template
        ></a-button>
      </div>
    </div>
    <a-table
      :dataSource="datasource"
      :columns="columns"
      :pagination="pagination"
      :loading="loading"
      @change="fetch"
    >
      <!-- 默认插槽 -->
      <slot></slot>
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
  SyncOutlined
} from "@ant-design/icons-vue";

const TProps = T.props;
export default defineComponent({
  name: "pro-table",
  components: {
    AppstoreOutlined,
    LoadingOutlined,
    ExportOutlined,
    SyncOutlined
  },
  props: Object.assign({}, TProps, {
    /// 数据来源
    fetch: {
      type: Function,
      required: false
    },
    /// 数据解析
    columns: {
      type: Array,
      required: true
    },
    /// 表格工具
    toolbar: {
      type: Array
    }
  }),
  setup(props) {
    /// 状态共享
    const state = reactive({
      pagination: Object.assign({}, props.pagination),
      datasource: [],
      loading: true
    });

    /**
     * @param param 分页参数
     * @param fluter 过滤字段
     * @param sort 排序字段
     */
    const fetchData = async param => {
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
    const reload = function() {
      fetchData(state.pagination);
    };

    onMounted(async () => {
      await fetchData(state.pagination);
    });

    return {
      /// 数据信息
      ...toRefs(state),
      /// 数据加载
      fetch: fetchData,
      /// 刷新方法
      reload: reload
    };
  }
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
</style>
