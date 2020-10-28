<template>
  <template v-if="!item.hidden">
    <!-- 包含了子元素的 -->
    <a-sub-menu :key="item.name" v-if="item.children && item.children.length > 0">
      <template v-slot:title>
        <span>
          <MenuIcon />
          <span>{{ item.meta.title }}</span>
        </span>
      </template>
      <!-- 没找到为什么递归有问题 -->
      <sub-menu
        v-for="(child, index) in item.children" :key="index"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </a-sub-menu>
    <!-- 直接显示item -->
    <a-menu-item v-bind="$attrs" :key="item.name" v-else>
      <router-link :to="resolvePath(item.path, true)" @click="clickMenuItem(item.name, item.meta.title, resolvePath(item.path, true))">
        <MenuIcon />
        <span>{{ item.meta.title }}</span>
      </router-link>
    </a-menu-item>
  </template>

</template>

<script>
  import path from 'path'
  import { useStore } from "vuex";
  import * as Icons from "@ant-design/icons-vue";
  export default {
    name: 'SubMenu',
    props: {
      item: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: '',
      }
    },
    setup(props) {
      const { commit } = useStore();
      // 菜 单 单 击 触 发 函 数
      const clickMenuItem = function(key, title, path) {
        // 新 增 顶 部 选 项 卡 操 作
        commit("layout/addTab", { key, title, path });
        // 设 置 当 前 菜 单 选 中
        commit("layout/selectKey", key);
      };

      const resolvePath = (routePath, single) => {
        if (/^(https?:|mailto:|tel:)/.test(routePath)) {
          return routePath
        }
        if(single){
          return props.basePath
        }
        //这里需要处理一下
        // return props.basePath + '/' + routePath;
        return path.resolve(props.basePath, routePath)
      }

      const MenuIcon = Icons[(props.item.meta || {}).icon] || {};

      return {
        clickMenuItem,
        resolvePath,
        MenuIcon,
      };
    },
  }
</script>
