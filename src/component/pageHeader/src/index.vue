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
<style lang="less">
@import './index.less';
</style>