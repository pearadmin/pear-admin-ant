<template>
  <template v-if="!item.hidden">
    <!-- if item.children is not null 渲染 a-sub-menu -->
    <a-sub-menu
      :key="item.path"
      v-if="item.children && item.children.length > 0"
    >
      <template v-slot:title>
        <span>
          <MenuIcon v-if="level === 0" />
          <span v-else><div class="indent"></div></span>
          <span>{{ item.meta.title }}</span>
        </span>
      </template>
      <!-- 递归 item.children -->
      <sub-menu
        v-for="child in item.children"
        :key="resolvePath(child.path)"
        :item="child"
        :level="level + 1"
        :base-path="resolvePath(child.path)"
      />
    </a-sub-menu>
    <!-- if item.chilren is null 渲染 a-menu-item -->
    <a-menu-item v-bind="$attrs" :key="resolvePath(item.path, true)" v-else>
      <router-link :to="resolvePath(item.path, true)">
        <MenuIcon v-if="level && level === 0" />
        <span v-else><div class="indent"></div></span>
        <span>{{ item.meta.title }}</span>
      </router-link>
    </a-menu-item>
  </template>
</template>

<script>
import path from "path";
import { useStore, getter } from "vuex";
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
    level: {
      type: Number,
      required: true,
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
      // 当处于 comp 模式下拼接相关路由
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
<style>
.indent{
  width: 15px;
  display: inline-block;
}
</style>
