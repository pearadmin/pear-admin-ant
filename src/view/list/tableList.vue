<template>
  <div id="table-dome">
    <page-header title="查询表格" describe="表格查询的复杂示例"></page-header>
    <page-layout>
      <a-card>
        <pro-table
          :columns="columns"
          :fetch="fetch"
          :toolbar="toolbar"
          :pagination="pagination"
        >
        <!-- 继承至 a-table 的默认插槽 -->
        </pro-table>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
const dataItem = {
  key: "1",
  name: "Joe Black",
  sex: "boy",
  age: 32,
  createTime: "2020-02-09 00:00:00",
  address: "Sidney No. 1 Lake Park Sidney No. 1 ",
  tags: ["cool", "teacher"]
};

export default {
  setup() {

    /// 远程调用
    const fetch = async param => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            total: 100,
            data: new Array(param.pageSize).fill(dataItem)
          });
        },900);
      });
    };

    /// 工具栏
    const toolbar = [
      {label: "新增",event: function(){alert("新增操作")}},
      {label: "删除",event: function(){alert("批量删除")}},
    ]

    /// 字段
    const columns = [
      {title: "姓名",dataIndex: "name",key: "name"},
      {title: "性别",dataIndex: "age",key: "age"},
      {title: "地址",dataIndex: "address",key: "address"}
    ];

    return {
      pagination: { current: 1, pageSize: 10 }, // 分页配置
      fetch: fetch, // 数据回调
      toolbar: toolbar, // 工具栏
      columns: columns // 表格配置
    };
  }
};
</script>
