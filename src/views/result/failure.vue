<template>
  <div>
    <a-card :bordered="false" style="margin-bottom: 10px;margin-right:10px;margin-left:10px;">
      <a-result
        status="error"
        title="Submission Failed"
        sub-title="Please check and modify the following information before resubmitting."
      >
        <template #extra>
          <a-button key="console" type="primary"> Go Console </a-button>
          <a-button key="buy"> Buy Again </a-button>
        </template>

        <div class="desc">
          <p style="font-size: 16px">
            <strong>The content you submitted has the following error:</strong>
          </p>
          <p>
            <CloseCircleOutlined :style="{ color: 'red' }" /> Your account has
            been frozen
            <a>Thaw immediately &gt;</a>
          </p>
          <p>
            <CloseCircleOutlined :style="{ color: 'red' }" /> Your account is
            not yet eligible to apply <a>Apply Unlock &gt;</a>
          </p>
        </div>
      </a-result>
    </a-card>
  </div>
</template>
<script>
  import { CloseCircleOutlined } from '@ant-design/icons-vue'
  export default {
    setup(){
      return {
        CloseCircleOutlined
      }
    }
  }
</script>