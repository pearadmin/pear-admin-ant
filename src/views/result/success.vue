<template>
  <div>
    <a-card :bordered="false" style="margin: 10px">
      <a-result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      ><div class="desc">
          <p style="font-size: 16px">
            <strong>The content you submitted has the following error:</strong>
          </p>
          <p>
            <close-circle-outlined :style="{ color: 'red' }" /> Your account has
            been frozen
            <a>Thaw immediately &gt;</a>
          </p>
          <p>
            <close-circle-outlined :style="{ color: 'red' }" /> Your account is
            not yet eligible to apply <a>Apply Unlock &gt;</a>
          </p>
        </div>
        <template #extra>
          <a-button key="console" type="primary"> Go Console </a-button>
          <a-button key="buy"> Buy Again </a-button>
        </template>
      </a-result>
    </a-card>
  </div>
</template>