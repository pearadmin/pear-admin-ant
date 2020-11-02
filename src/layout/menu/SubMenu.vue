<template>
  <template v-if="!item.hidden">
    <!-- if item.children is not null 渲染 a-sub-menu -->
    <a-sub-menu
      :key="item.meta.key"
      v-if="item.children && item.children.length > 0"
    >
      <template v-slot:title>
        <span>
          <MenuIcon />
          <span>{{ item.meta.title }}</span>
        </span>
      </template>
      <!-- 递归 item.children -->
      <sub-menu
        v-for="child in item.children"
        :key="child.meta.key"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </a-sub-menu>
    <!-- if item.chilren is null 渲染 a-menu-item -->
    <template v-else>
      <a-menu-item v-bind="$attrs" :key="item.name">
        <router-link :to="resolvePath(item.path, true)" >
          <MenuIcon />
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
    </template>
  </template>
</template>

<script>
import path from "path";
import { useStore } from "vuex";
import * as Icons from "@ant-design/icons-vue";
export default {
  name: "SubMenu",
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { commit } = useStore();

    const resolvePath = (routePath, single) => {
      if (/^(https?:|mailto:|tel:)/.test(routePath)) {
        return routePath;
      }
      if (single) {
        return props.basePath;
      }
      return path.resolve(props.basePath, routePath);
    };
    const MenuIcon = Icons[(props.item.meta || {}).icon] || {};
    return {
      resolvePath,
      MenuIcon,
    };
  },
};
</script>
