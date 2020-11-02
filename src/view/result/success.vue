<template>
  <div id="success">
     <page-layout>
      <a-card>
      <a-result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        ><div class="desc">
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
        <template #extra>
          <a-button key="console" type="primary"> Go Console </a-button>
          <a-button key="buy"> Buy Again </a-button>
        </template>
      </a-result>
      </a-card>
    </page-layout>
  
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
