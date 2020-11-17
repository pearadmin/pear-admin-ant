<template>
  <div id="403">
    <page-layout>
      <a-card>
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
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>