<template>
  <div id="menu">
    <a-menu
      :mode="menuModel"
      :theme="menuTheme"
      v-model:selectedKeys="selectedKeys"
      @select="onSelect"
    >
      <template v-for="menu in menuData" :key="menu.path">
        <sub-menu v-if="!menu.hidden" :item="menu"></sub-menu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import SubMenu from "./SubMenu.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { useMenu } from '@/composable/menu';
export default {
  components: {
    SubMenu
  },
  setup() {
    
    const { getters } = useStore();
    const router = useRouter();

    const menuModel = computed(() =>
      getters.layout == "layout-head" ? "horizontal" : "inline"
    );
    const menuTheme = computed(() =>
      getters.theme === "theme-dark" ? "dark" : "light"
    );
    const menuData = computed(() => getters.menu);

    const onSelect = ({ key }) => {
      router.push(key);
    }
    
    const { selectedKeys } = useMenu();

    return { onSelect, selectedKeys, menuModel, menuTheme, menuData };
  },
};
</script>
<style>
#menu {
  overflow: scroll;
  height: calc(100% - 60px);
}

#menu::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 0;
}

#menu::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>