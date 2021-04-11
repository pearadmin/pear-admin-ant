<template>
  <!-- 框架 content 区域 , 路由内容页面 -->
  <div id="content">
    <router-view v-slot="{ Component }" v-if="routerActive">
      <transition :name="routerAnimate">
        <keep-alive v-if="keepAlive">
          <component :is="Component"></component>
        </keep-alive>
        <component v-else :is="Component"></component>
      </transition>
    </router-view>
    <div class="spinLoading" v-else>
      <a-spin size="large"/>
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
    const keepAlive = computed(() => getters.keepAlive);
    return {
      keepAlive,
      routerActive,
      routerAnimate,
    };
  },
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
.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms cubic-bezier(0.55, 0, 0.1, 1);
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
