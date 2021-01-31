<script>
import {defineComponent, onMounted, reactive, Fragment} from 'vue'
import T from 'ant-design-vue/es/table/Table'
import get from 'lodash.get'
import {useRoute} from "vue-router";

const TProps = T.props
export default defineComponent({
  name: 'p-table',
  props: Object.assign({}, TProps, {
    fetch: {
      type: Function,
      required: false
    },
    alert: {
      type: [Object, Boolean],
      default: null
    },
    rowSelection: {
      type: Object,
      default: null
    },
    showAlertInfo: {
      type: Boolean,
      default: false
    },
    pageNum: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    showSizeChanger: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    pageURI: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: [String, Function],
      default: 'key'
    },
    size: {
      type: String,
      default: 'default'
    }
  }),
  setup(props, {attrs, slots, emit}) {
    // data
    const state = reactive({
      needTotalList: [],
      selectedRows: [],
      selectedRowKeys: [],
      localLoading: false,
      localDataSource: [],
      localPagination: Object.assign({}, props.pagination)
    })

    // 统计
    const initTotalList = columns => {
      const totalList = []
      columns && columns instanceof Array && columns.forEach(column => {
        if (column.needTotal) {
          totalList.push({
            ...column,
            total: 0
          })
        }
      })
      return totalList
    }

    /**
     * 加载表格数据
     * @param e
     */
    const fetchData = async (pagination, filters, sorter) => {
      state.localLoading = true
      const params = Object.assign(
        {
          pageNo: (pagination && pagination.current) ||
            props.showPagination && state.localPagination.current || props.pageNum,
          pageSize: (pagination && pagination.pageSize) ||
            props.showPagination && state.localPagination.pageSize || props.pageSize
        },
        (sorter && sorter.field && {
          sortField: sorter.field
        }) || {},
        (sorter && sorter.order && {
          sortOrder: sorter.order
        }) || {}, {
          ...filters
        })

      try {
        const {pageNo: responsePageNo, total: responseTotal, data: responseData } = await props.fetch(params)
        state.localPagination = props.showPagination && Object.assign({}, state.localPagination, {
          current: responsePageNo, // 返回结果中的当前分页数
          total: responseTotal, // 返回结果中的总记录数
          showSizeChanger: props.showSizeChanger,
          pageSize: (pagination && pagination.pageSize) ||
            state.localPagination.pageSize
        }) || false
        // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
        if (responseData.length === 0 && props.showPagination && state.localPagination.current > 1) {
          state.localPagination.current--
          await fetchData()
          return
        }
        if ((['auto', true].includes(props.showPagination) && responseTotal <= (responsePageNo * state.localPagination.pageSize))) {
          state.localPagination.hideOnSinglePage = true
        }
        state.localDataSource = responseData // 返回结果中的数组数据
      } catch (e) {
        console.log(e)
      } finally {
        state.localLoading = false
      }
    }

    // 初次加载
    onMounted(async () => {
      const { pageNo: routePageNo } = useRoute().params
      const localPageNum = props.pageURI && (routePageNo && parseInt(routePageNo)) || props.pageNum
      state.localPagination = ['auto', true].includes(props.showPagination) && Object.assign({}, state.localPagination, {
        current: localPageNum,
        pageSize: props.pageSize,
        showSizeChanger: props.showSizeChanger
      }) || false
      state.needTotalList = initTotalList(props.columns)
      await fetchData()
    })

    // 更新选择
    const updateSelect = (selectedRowKeys, selectedRows) => {
      state.selectedRows = selectedRows
      state.selectedRowKeys = selectedRowKeys
      const list = state.needTotalList
      state.needTotalList = list.map(item => {
        return {
          ...item,
          total: selectedRows.reduce((sum, val) => {
            const total = sum + parseInt(get(val, item.dataIndex))
            return isNaN(total) ? 0 : total
          }, 0)
        }
      })
    }

    /**
     * 清空 table 已选中项
     */
    const clearSelected = () => {
      if (props.rowSelection) {
        props.rowSelection.onChange([], [])
        updateSelect([], [])
      }
    }
    /**
     * 处理交给 table 使用者去处理 clear 事件时，内部选中统计同时调用
     * @param callback
     * @returns {*}
     */
    const renderClear = (callback) => {
      if (state.selectedRowKeys.length <= 0) return null
      return (
        <a style="margin-left: 24px" onClick={() => {
          callback()
          clearSelected()
        }}>清空</a>
      )
    }

    const renderAlert = () => {
      // 绘制统计列数据
      const needTotalItems = state.needTotalList.map((item) => {
        return (<span style="margin-right: 12px">
          {item.title}总计 <a style="font-weight: 600">{!item.customRender ? item.total : item.customRender(item.total)}</a>
        </span>)
      })

      // 绘制 清空 按钮
      const clearItem = (props.alert && typeof props.alert.clear === 'boolean' && props.alert.clear) ? (
        renderClear(clearSelected)
      ) : (props.alert !== null && typeof props.alert.clear === 'function') ? (
        renderClear(props.alert.clear)
      ) : null

      // 绘制 alert 组件
      const alertSlots = {
        message: () => (
          <Fragment>
            <span style="margin-right: 12px">已选择: <a style="font-weight: 600">{state.selectedRows.length}</a></span>
            {needTotalItems}
            {clearItem}
          </Fragment>
        )
      }
      return (
        <a-alert type="success" showIcon={true} style="margin-bottom: 16px" v-slots={alertSlots}></a-alert>
      )
    }

    return () => {
      // table props
      const showAlert = (typeof props.alert === 'object' && props.alert !== null && props.alert.show) && typeof props.rowSelection.selectedRowKeys !== 'undefined' || props.alert
      const localKeys = Object.keys(state)
      const tableProps = {}
      Object.keys(T.props).forEach(k => {
        const localKey = `local${k.substring(0, 1).toUpperCase()}${k.substring(1)}`
        if (localKeys.includes(localKey)) {
          tableProps[k] = state[localKey]
          return tableProps[k]
        }
        if (k === 'rowSelection') {
          if (showAlert && props.rowSelection) {
            // 如果需要使用alert，则重新绑定 rowSelection 事件
            tableProps[k] = {
              ...props.rowSelection,
              selectedRows: state.selectedRows,
              selectedRowKeys: state.selectedRowKeys,
              onChange: (selectedRowKeys, selectedRows) => {
                updateSelect(selectedRowKeys, selectedRows)
                typeof props[k].onChange !== 'undefined' && props[k].onChange(selectedRowKeys, selectedRows)
              }
            }
            return tableProps[k]
          } else if (!props.rowSelection) {
            // 如果没打算开启 rowSelection 则清空默认的选择项
            tableProps[k] = null
            return tableProps[k]
          }
        }
        props[k] && (tableProps[k] = props[k])
        return tableProps[k]
      })
      return (
        <div>
          { showAlert ? renderAlert() : null }
          <a-table
            {...tableProps}
            v-slots={slots}
            change={fetchData}
          ></a-table>
        </div>
      )
    }
  }
})
</script>
