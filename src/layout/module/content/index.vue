<template>
  <!-- 框架 content 区域 , 路由内容页面 -->
  <div id="content">
    <router-view v-slot="{ Component }" v-if="routerActive">
      <transition :name="routerAnimate">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <div class="spinLoading" v-else>
      <a-spin size="large" />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const { getters } = useStore();
    const routerActive = computed(() => getters.routerActive);
    const routerAnimate = computed(() => getters.routerAnimate);
    return {
      routerActive,
      routerAnimate
    };
  }
};
</script>
<style lang="less" scoped>
.spinLoading {
  width: 100%;
  min-height: 60vh;
  padding-top: 30vh;
  text-align: center;
  background-color: transparent;
  height: 100%;
}
</style>
