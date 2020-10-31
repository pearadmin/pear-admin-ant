<template>
  <div class="page-layout">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name:"page-layout"
}
</script>
<style scoped>
.page-layout {
  margin: 10px;
}
</style>