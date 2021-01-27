## 组件说明

> 查询表单可以通过json来生成，只需要指定参数

#### 内置属性

| 属性           | 说明                                            | 类型              | 默认值 |
| -------------- | ----------------------------------------------- | ----------------- | ------ |
| defaultQuery          | 默认的查询表单                          | array | []   |
| hiddenQuery | 隐藏的查询表单             | array | [] |


##### defaultQuery | hiddenQuery

| 属性           | 说明                                            | 类型              | 默认值 |
| -------------- | ----------------------------------------------- | ----------------- | ------ |
|  type         | 表单的类型                          | string: ['input','select','date-picker','input-number'] 注：可跟据需求自己扩充 | input   |
| modelName     | 表单的v-model的名称                 | any | '' |
| label         | form-item的label属性                | string   | '' |
| defaultValue  | 表单的默认值                        | any | '' |
| options       | 见下方options                       | {} | {} |



##### options
> 只有在type为'select'的时需要的属性,用于渲染<a-select-option>

| 属性           | 说明                                            | 类型              | 默认值 |
| -------------- | ----------------------------------------------- | ----------------- | ------ |
|  keyName       | 指定a-select-option的key值和value值              | string | 'key'   |
|  titleName     | 指定a-select-option的title值                     | string | 'title' |
|  data          | 指定渲染的数组                                   | array | [] |

eg:
```
// 如给定数据要自定义key title时
<template>
  <p-query
    :defaultQuery="defaultQuery"
  >
  </p-query>
</template>
<script>
import { defineComponent } from 'vue'
expor default defineComponent({
  setup () {
    const data =  [{id: 0, name: '启用'}, {id: 1, name: '禁用'}, {id: 3, name: '未知'}]
    return {
      defaultQuery: [
        {
          type: 'select',
          modelName: 'status',
          defaultValue: 0,
          label: '状态',
          options: {keyName:'id', titleName: 'name', data: data}
        }
      ] 
    }
  }
})
</script>
```
