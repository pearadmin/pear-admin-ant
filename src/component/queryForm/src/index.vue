<script>
import {defineComponent, onMounted, reactive, Fragment, watch} from 'vue'
import {useForm} from "@ant-design-vue/use";
import {UpOutlined, DownOutlined} from '@ant-design/icons-vue'
import './form.less'

export default defineComponent({
  name: 'p-query',
  components: {
    UpOutlined,
    DownOutlined
  },
  props: {
    defaultQuery: {
      type: Array,
      validator() {
        return true
      }
    },
    hiddenQuery: {
      type: Array
    }
  },
  setup(props, {attrs, slots, emit}) {
    const componentState = reactive({
      showHideQuery: false
    })

    // 监听
    // watch(() => props.hiddenQuery, array => {
    //   componentState.showHideQuery = array.length !== 0
    // }, { immediate: true })

    // generator reactive state
    const formState = reactive({})
    const formRules = reactive({})
    props.defaultQuery.forEach(it => {
      const {modelName, rules = [], defaultValue} = it
      formState[modelName] = defaultValue
      formRules[modelName] = rules
    })

    // form
    const {validate, validateInfos, resetFields} = useForm(formState, formRules)


    const getFormItem = item => {
      const {modelName, type, label} = item
      switch (type) {
        case 'select':
          return (
            <a-select v-model={modelName} placeholder={`请选择${label}`}></a-select>
          )
        default:
          return (<a-input v-model={modelName} placeholder={`请输入${label}`}></a-input>)
      }
    }
    /**
     * item : {
     *   component: DOM
     *   label: String
     *   modelName: String
     *   defaultValue: Any 保证与组件的默认值一至的类型，在antdv中，有的组件的默认值为undefined, 有的为''. 默认值的类型不对的时候，无法显示Placeholder属性
     * }
     * @param item
     */
    const renderFormItem = item => {
      const {modelName, label} = item
      return (
        <a-form-item
          label={label}
          {...validateInfos[modelName]}
        >
          {getFormItem(item)}
        </a-form-item>
      )
    }

    // search
    const handleSearch = async e => {
      try {
        const validates = await validate()
      } catch (e) {
        console.info(e)
      }
    }

    // toggle search button
    const toggleAdvanced = e => {
      componentState.showHideQuery = !componentState.showHideQuery
    }

    return () => {
      return (
        <a-form layout="inline">
          <a-row gutter={48}>
            {
              props.defaultQuery.map((item, key) => {
                return (
                  <a-col md={8} sm={24}>
                    {renderFormItem(item)}
                  </a-col>
                )
              })
            }
            {
              componentState.showHideQuery ? (
                props.hiddenQuery.map((item, key) => {
                  return (
                    <a-col md={8} sm={24}>
                      {renderFormItem(item)}
                    </a-col>
                  )
                })
              ) : null
            }
            <a-col md={!componentState.showHideQuery && 8 || 24} sm={24}>
              <span
                style={componentState.showHideQuery && {float: 'right', overflow: 'hidden'} || {}}
              >
                <a-button onClick={handleSearch}>查询</a-button>
                <a onClick={toggleAdvanced} style="margin-left: 8px">
                  {componentState.showHideQuery ? '收起' : '展开'}
                </a>
                {
                  componentState.showHideQuery ? <UpOutlined/> : <DownOutlined/>
                }
              </span>
            </a-col>
          </a-row>
        </a-form>
      )
    }
  }
})
</script>
