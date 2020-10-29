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
    <a-menu-item v-bind="$attrs" :key="item.meta.key" v-else>
      <router-link
        :to="resolvePath(item.path, true)"
        @click="
          clickMenuItem(
            item.meta.key,
            item.meta.title,
            resolvePath(item.path, true)
          )
        "
      >
        <MenuIcon />
        <span>{{ item.meta.title }}</span>
      </router-link>
    </a-menu-item>
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
    // 菜 单 单 击 触 发 函 数
    const clickMenuItem = function (key, title, path) {
      // 新 增 顶 部 选 项 卡 操 作
      commit("layout/addTab", { key, title, path });
      // 设 置 当 前 菜 单 选 中
      commit("layout/selectKey", key);
    };

    const resolvePath = (routePath, single) => {
      if (/^(https?:|mailto:|tel:)/.test(routePath)) {
        return routePath;
      }
      if (single) {
        return props.basePath;
      }
      //这里需要处理一下
      // return props.basePath + '/' + routePath;
      return path.resolve(props.basePath, routePath);
    };
    const MenuIcon = Icons[(props.item.meta || {}).icon] || {};
    return {
      clickMenuItem,
      resolvePath,
      MenuIcon,
    };
  },
};
</script>
