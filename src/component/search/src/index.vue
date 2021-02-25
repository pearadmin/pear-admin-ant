<script>
import "./index.less";
import {defineComponent, reactive} from 'vue'
import {useForm} from "@ant-design-vue/use";
import {UpOutlined, DownOutlined} from '@ant-design/icons-vue'

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
  emits: ['on-search', 'on-reset'],
  setup(props, {attrs, slots, emit}) {
    const componentState = reactive({
      showHideQuery: false,
      promiseQueue: []
    })

    // generator reactive state
    const formState = reactive({})
    const formRules = reactive({})

    const generatorFormState = array => {
      array.length > 0 && array.forEach(it => {
        const {modelName, rules = [], defaultValue} = it
        formState[modelName] = defaultValue
        formRules[modelName] = rules
      })
    }
    generatorFormState(props.defaultQuery)
    generatorFormState(props.hiddenQuery)

    // form
    const {validate, validateInfos, resetFields} = useForm(formState, formRules)

    // 如果需要扩充请自行修改该方法
    const getFormItem = item => {
      const {modelName, type, label, options = {} } = item
      const { data = [], keyName = 'key', titleName ='title' } = options
      switch (type) {
        case 'select':
          return (
            <a-select v-model={[formState[modelName], 'value']} placeholder={`请选择${label}`}>
              {
                data.length !== 0 ? (
                  data.map(it => {
                    return (
                      <a-select-option key={it[keyName]} value={it[keyName]} title={it[titleName]}>{it[titleName]}</a-select-option>
                    )
                  })
                ) : null
              }
            </a-select>
          )
        case 'input-number':
          return (
            <a-input-number style="width:100%;" v-model={[formState[modelName], 'value']} placeholder={`请输入${label}`}></a-input-number>
          )
        case 'date-picker':
          return (
            <a-date-picker style={{width: '100%'}} v-model={[formState[modelName], 'value']} placeholder={`请选择${label}`}/>
          )
        default:
          return (<a-input v-model={[formState[modelName], 'value']} placeholder={`请输入${label}`}></a-input>)
      }
    }

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

    const handleSearch = async e => {
      try {
        const validates = await validate()
        emit('on-search', validates)
      } catch (e) {
        console.info(e)
      }
    }

    // reset
    const handleReset = e => {
      resetFields()
      emit('on-reset')
    }

    // toggle search button
    const toggleAdvanced = e => {
      componentState.showHideQuery = !componentState.showHideQuery
    }

    return () => {
      return (
        <div class="table-page-search-wrapper">
          <a-form layout="inline">
            <a-row gutter={48}>
              {
                props.defaultQuery.map((item, key) => {
                  return (
                    <a-col key={key} md={8} sm={24}>
                      {renderFormItem(item)}
                    </a-col>
                  )
                })
              }
              {
                componentState.showHideQuery ? (
                  props.hiddenQuery.map((item, key) => {
                    return (
                      <a-col key={key} md={8} sm={24}>
                        {renderFormItem(item)}
                      </a-col>
                    )
                  })
                ) : null
              }
              <a-col md={!componentState.showHideQuery && 8 || 24} sm={24}>
              <span
                class="table-page-search-submitButtons"
                style={componentState.showHideQuery && {float: 'right', overflow: 'hidden'} || {}}
              >
                <a-button type="primary" onClick={handleSearch}>查询</a-button>
                <a-button style="margin-left: 8px" onClick={handleReset}>重置</a-button>
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
        </div>
      )
    }
  }
})
</script>