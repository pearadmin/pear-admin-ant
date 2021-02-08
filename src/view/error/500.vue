<template>
  <div id="500">
    <page-layout>
      <a-card>
        <a-result status="500" title="500" sub-title="服务器开小差了">
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
