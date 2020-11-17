<template>
  <div>
    <page-header title="查询表格" describe="表格查询的复杂示例"></page-header>
    <page-layout>
      <a-card>
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
        </a-table>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
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
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    name: "Joe Black",
    sex: "boy",
    age: 32,
    createTime: "2020-02-09 00:00:00",
    address: "Sidney No. 1 Lake Park Sidney No. 1 ",
    tags: ["cool", "teacher"],
  },
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