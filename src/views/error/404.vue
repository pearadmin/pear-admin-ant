<template>
<di id="404">
  <a-card :bordered="false" style="margin-bottom: 10px;margin-right:10px;margin-left:10px;">
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary">
        Back Home
      </a-button>
    </template>
  </a-result>
  </a-card>
</di>
</template>