<template>
  <div id="500">
    <page-layout>
      <a-card>
        <a-result
          status="500"
          title="500"
          sub-title="Sorry, the server is wrong."
        >
          <template #extra>
            <a-button type="primary"> Back Home </a-button>
          </template>
        </a-result>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>