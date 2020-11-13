<template>
  <a-card class="page-header">
    <p class="page-header-title">{{ title }}</p>
    <p class="page-header-describe">{{ describe }}</p>
  </a-card>
</template>
<script>
export default {
  name: 'page-header',
  props: {
    title: {
      type: String,
      requried: true,
    },
    describe: {
      type: String,
      requried: true,
    },
  },
};
</script>
<style scoped>
.page-header{
  border-radius: 0px!important;
}
.page-header-title {
  font-size: 20px;
  font-weight: 500;
}
.page-header-describe {
  font-size: 14px;
}
</style>