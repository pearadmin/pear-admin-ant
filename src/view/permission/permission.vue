<template>
  <div>
    <page-header
      title="系统权限"
      describe="根 据 权 限 提 供 节 点 的 渲 染"
    ></page-header>
    <page-layout>
      <a-card>
        <h2>权限按钮组(不同的用户进来看到的按钮不一样)</h2>
        <h3>当前用户{{useInfo?.permissions[0]?.role}}</h3>
        <a-space>
          <a-button type="primary" v-permission:add>增</a-button>
          <a-button type="primary" v-permission:del>删</a-button>
          <a-button type="primary" v-permission:upd>改</a-button>
        </a-space>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: 'permission',
  setup () {
    const store = useStore()
    const useInfo = computed(() => store.state.user.userInfo)
    return {
      useInfo
    }
  }
})
</script>

<style scoped lang="less">

</style>
