<template>
  <div id="403">
    <a-card :bordered="false" style="margin: 15px">
      <a-result
        status="403"
        title="403"
        sub-title="Sorry, you are not authorized to access this page."
      >
        <template #extra>
          <a-button type="primary"> Back Home </a-button>
        </template>
      </a-result>
    </a-card>
  </div>
</template>