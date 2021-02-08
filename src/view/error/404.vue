<template>
  <div id="404">
    <page-layout>
      <a-card>
        <a-result status="404" title="404" sub-title="页面找不到了">
          <template #extra>
            <div style="margin-bottom:20px">{{ overTime }} 秒后返回首页</div>
            <router-link to="/">
              <a-button type="primary"> 返回首页 </a-button>
            </router-link>
          </template>
        </a-result>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import { ref, onUnmounted } from "vue";
import router from "@/router";
export default {
  setup() {
    const overTime = ref(5);
    setTimeout(() => {
      router.push("/");
    }, overTime.value * 1000);
    const Interval = setInterval(() => {
      overTime.value--;
    }, 1000);
    onUnmounted(() => {
      clearInterval(Interval);
    });
    return { overTime };
  }
};
</script>
