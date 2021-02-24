<template>
  <div>
    <page-header title="查询表格" describe="表格查询的复杂示例"></page-header>
    <page-layout>
      <a-card>
        <p-query
          :default-query="queryArray"
          :hidden-query="hiddenQuery"
          @on-search="handleSearch"
          @on-reset="handleReset"
        ></p-query>
        <p-table
          :columns="columns"
          :fetch="fetch"
          :rowSelection="rowSelection"
          alert
        >
          <template v-slot:name="{ text }">
            <a>{{ text }}</a>
          </template>
          <template v-slot:customTitle>
            <span><smile-outlined/> Name</span>
          </template>
          <template v-slot:tags="{ text: tags }">
            <span>
              <a-tag
                v-for="tag in tags"
                :key="tag"
                :color="
                  tag === 'loser'
                    ? 'volcano'
                    : tag.length > 5
                    ? 'geekblue'
                    : 'green'
                "
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template v-slot:action="{ record }">
            <span>
              <a>Invite 一 {{ record.name }}</a>
              <a-divider type="vertical"/>
              <a>Delete</a>
              <a-divider type="vertical"/>
              <a class="ant-dropdown-link"> More actions <down-outlined/> </a>
            </span>
          </template>
        </p-table>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import {SmileOutlined, DownOutlined} from "@ant-design/icons-vue";
import {computed, defineComponent, markRaw, reactive} from "vue";

const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: {title: "customTitle", customRender: "name"},
  },
  {
    dataIndex: "sex",
    key: "sex",
    title: "Sex",
  },
  {
    dataIndex: "createTime",
    key: "createTime",
    title: "CreateTime",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    needTotal: true
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    slots: {customRender: "tags"},
  },
  {
    title: "Action",
    key: "action",
    slots: {customRender: "action"},
  },
];

const dataItem = {
  key: "1",
  name: "Joe Black",
  sex: "boy",
  age: 32,
  createTime: "2020-02-09 00:00:00",
  address: "Sidney No. 1 Lake Park Sidney No. 1 ",
  tags: ["cool", "teacher"],
}

const selectOptions = [
  {
    key: '0',
    title: '全部',
  },
  {
    key: '1',
    title: '关闭',
  },
  {
    key: '2',
    title: '运行中',
  }
]

export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
  },
  setup() {
    const state = reactive({
      selectedRowKeys: [],
      selectedRows: [],
      // 模拟后端返回
      pages: {
        pageNo: 1,
        total: 100,
        pageSize: 10
      },
      maxPageSize: 10
      // 模拟结束
    })

    // 非实际返回的接口，只是为了模拟一个过程
    // 所以如果最后一页数据量不够默的pageSize的值时，没有额外的处理
    // 比如 一共106条数据，最后一页(11页)理应只返回6条。这里就统一的返回了new Array(pages.pageSize)条
    const fetch = (params) => {
      return new Promise((resolve, reject) => {
        const { pageSize, pageNo } = params
        Object.assign(state.pages, {
          pageNo,
          pageSize
        })
        setTimeout(() => {
          // test 最后一页
          const isLast = state.pages.pageNo === state.maxPageSize
          resolve({
            pageNo: !isLast ? state.pages.pageNo++ : state.pages.pageNo,
            total: state.pages.total,
            data: new Array(state.pages.pageSize).fill(dataItem)
          })
        })
      })
    }

    const onSelectChange = (selectedRowKeys, selectedRows) => {
      state.selectedRowKeys = selectedRowKeys
      state.selectedRows = selectedRows
    }

    const rowSelection = computed(() => {
      return {
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectChange
      }
    })

    // 查询表头
    const queryArray = [
      {
        type: 'input',
        modelName: 'id',
        rules: [],
        defaultValue: '',
        label: '规则编号'
      },
      {
        type: 'select',
        modelName: 'status',
        rules: [],
        defaultValue: '0',
        label: '使用状态',
        options: {data: selectOptions}
      }
    ]
    const hiddenQuery = [
      {
        type: 'input-number',
        modelName: 'callNo',
        rules: [],
        defaultValue: undefined,
        label: '调用次数',
      },
      {
        type: 'date-picker',
        modelName: 'date',
        rules: [],
        defaultValue: undefined,
        label: '更新日期',
      },
      {
        type: 'select',
        modelName: 'useStatus',
        rules: [],
        defaultValue: '0',
        label: '使用状态',
        options: {data: selectOptions}
      },
      {
        type: 'select',
        modelName: 'useStatus2',
        rules: [],
        defaultValue: '0',
        label: '使用状态',
        options: {data: selectOptions}
      }
    ]

    // 查询回调
    const handleSearch = data => {
      console.log('query-data ==> ', data)
    }

    const handleReset = e => {
      console.log('reset form')
    }

    return {
      // data,
      fetch,
      columns,
      queryArray,
      hiddenQuery,
      rowSelection,
      handleSearch,
      handleReset
    }
  }
})
</script>
