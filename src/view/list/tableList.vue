<template>
  <div>
    <page-header title="查询表格" describe="表格查询的复杂示例"></page-header>
    <page-layout>
      <a-card>
        <p-query
          :default-query="queryArray"
          :hidden-query="hiddenQuery"
        ></p-query>
        <p-table
          style="margin-top: 24px;"
          :columns="columns"
          :fetch="fetch"
          :rowSelection="rowSelection"
          alert
        >
          <template v-slot:name="{ text }">
            <a>{{ text }}</a>
          </template>
          <template v-slot:customTitle>
            <span><smile-outlined /> Name</span>
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
              <a-divider type="vertical" />
              <a>Delete</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link"> More actions <down-outlined /> </a>
            </span>
          </template>
        </p-table>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import {computed, defineComponent, markRaw, reactive} from "vue";
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle", customRender: "name" },
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
    slots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    slots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "2",
    name: "Joe Black",
    sex: "boy",
    age: 31,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 332,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "6",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "8",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
];

export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
  },
  setup () {
    const fetch = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            pageNo: 1,
            total: data.length,
            data
          })
        })
      })
    }

    const state = reactive({
      selectedRowKeys: [],
      selectedRows: []
    })

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
        label: '使用状态'
      }
    ]
    const hiddenQuery = [
      {
        type: 'input-number',
        modelName: 'callNo',
        rules: [],
        defaultValue: '0',
        label: '调用次数',
        hidden: true
      },
      {
        type: 'input-number',
        modelName: 'callNo',
        rules: [],
        defaultValue: '0',
        label: '更新日期',
        hidden: true
      },
      {
        type: 'input-number',
        modelName: 'callNo',
        rules: [],
        defaultValue: '0',
        label: '使用状态',
        hidden: true
      },
      {
        type: 'input-number',
        modelName: 'callNo',
        rules: [],
        defaultValue: '0',
        label: '使用状态',
        hidden: true
      }
    ]
    return {
      // data,
      fetch,
      columns,
      queryArray,
      hiddenQuery,
      rowSelection
    }
  }
})
</script>
