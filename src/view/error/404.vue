<template>
  <di id="404">
    <page-layout>
      <a-card>
        <a-result
          status="404"
          title="404"
          sub-title="Sorry, the page you visited does not exist."
        >
          <template #extra>
            <a-button type="primary"> Back Home </a-button>
          </template>
        </a-result>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </di>
</template>