<template>
  <div>
    <a-card>
      <h2>查询表格</h2>
      <p>表格查询的复杂示例</p>
    </a-card>
    <a-card style="margin: 10px">
  <a-table :columns="columns" :data-source="data">
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
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template v-slot:action="{  record }">
      <span>
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <down-outlined /> </a>
      </span>
    </template>
  </a-table>
    </a-card>
  </div>
</template>
<script>
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle', customRender: 'name' },
  },{
    dataIndex: 'sex',
    key: 'sex',
    title: 'Sex',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    slots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '3',
    name: 'Joe Black',
    sex: 'boy',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'boy',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'boy',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'boy',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'boy',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'boy',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'boy',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'boy',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
];

export default {
  components: {
    SmileOutlined,
    DownOutlined,
  },
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>