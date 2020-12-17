<template>
  <div class="page-footer">
    <div style="text-align: center">
      <span class="page-footer-title">
          <a target="_blank" href="http://www.pearadmin.com">官网</a>
      </span>
      <span class="page-footer-title">
          <a target="_blank" href="http://www.pearadmin.com/">社区</a>
      </span>
      <span class="page-footer-title">
          <a target="_blank" href="http://forum.pearadmin.com/">论坛</a>
      </span>
    </div>
    <div class="page-footer-copyright" style="text-align: center">Copyright © 2020 &nbsp;&nbsp; Pear Admin 开 源 社 区</div>
  </div>
</template>
<script>
export default {
  name: "page-footer",
};
</script>
<style>
.page-footer {
  padding: 25px;
  color: #808695;
}
.page-footer .page-footer-title a{
  color: #808695;
}

.page-footer .page-footer-title {
  padding: 20px;
}
.page-footer .page-footer-copyright {
  padding-top: 20px;
}
</style>
