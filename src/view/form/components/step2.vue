<template>
  <a-form style="max-width: 500px; margin: 40px auto 0;">
    <a-alert
      :closable="true"
      message="确认转账后，资金将直接打入对方账户，无法退回。"
      style="margin-bottom: 24px;"
    />
    <a-form-item
      label="付款账户"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      class="stepFormText"
    >
      ant-design@alipay.com
    </a-form-item>
    <a-form-item
      label="收款账户"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      class="stepFormText"
    >
      test@example.com
    </a-form-item>
    <a-form-item
      label="收款人姓名"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      class="stepFormText"
    >
      Alex
    </a-form-item>
    <a-form-item
      label="转账金额"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      class="stepFormText"
    >
      ￥ 5,000.00
    </a-form-item>
    <a-divider/>
    <a-form-item
      label="支付密码"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      class="stepFormText"
      v-bind="validateInfos.paymentPassword"
    >
      <a-input
        type="password"
        style="width: 80%;"
        v-model:value="formState.paymentPassword"/>
    </a-form-item>
    <a-form-item :wrapperCol="{span: 19, offset: 5}">
      <a-button :loading="loading" type="primary" @click="nextStep">提交</a-button>
      <a-button style="margin-left: 8px" @click="prevStep">上一步</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {defineComponent, markRaw, onUnmounted, reactive, toRefs} from "vue";
import {useForm} from "@ant-design-vue/use";

export default defineComponent({
  inheritAttrs: false,
  name: 'step2',
  emits: ['prev', 'next'],
  setup(p, {emit}) {
    const labelCol = markRaw({lg: {span: 5}, sm: {span: 5}})
    const wrapperCol = ({lg: {span: 19}, sm: {span: 19}})

    const state = reactive({
      loading: false,
      timer: 0
    })

    const formState = reactive({
      paymentPassword: '123456'
    })

    const { validate, validateInfos } = useForm(formState, reactive({
      paymentPassword: [{required: true, message: '请输入支付密码'}]
    }))

    const nextStep = async e => {
      state.loading = true
      try {
        const values = await validate()
        state.timer = setTimeout(function () {
          state.loading = false
          emit('next', values)
        }, 1500)
      } catch (e) {
        state.loading = false
        console.log(e)
      }
    }

    onUnmounted(() => {
      if (state.timer) {
        state.timer = null
      }
    })

    const prevStep = e => {
      emit('prev')
    }


    return {
      ...toRefs(state),
      formState,
      validateInfos,
      labelCol,
      wrapperCol,
      nextStep,
      prevStep
    }
  }
})
</script>

<style scoped lang="less">

</style>
