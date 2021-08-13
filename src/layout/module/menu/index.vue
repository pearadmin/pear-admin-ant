<template>
  <div id="menu">
    <a-menu
      :mode="menuModel"
      :theme="menuTheme"
      :openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @select="onSelect"
      @openChange="onOpenChange"
    >
      <template v-for="menu in menuData" :key="menu.path">
        <sub-menu v-if="!menu.hidden" :item="menu"></sub-menu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import SubMenu from "./SubMenu.vue";
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
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

    const state = reactive({
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"],
      selectedKeys: [],
    });

    const onSelect = ({ key }) => {
      router.push(key);
    }

    const onOpenChange = (openKeys) => {
      const latestOpenKey = openKeys.find(
        (key) => state.openKeys.indexOf(key) === -1
      );
      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };

    return { ...toRefs(state), onOpenChange, onSelect, menuModel, menuTheme, menuData };
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