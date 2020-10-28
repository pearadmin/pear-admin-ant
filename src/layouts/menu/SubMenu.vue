<template>
  <template v-if="!item.hidden">
    <!-- 如果 item children 不为空, 该 item 遍历为目录 -->
    <a-sub-menu
      :key="item.name"
      v-if="item.children && item.children.length > 0"
    >
      <template v-slot:title>
        <span>
          <MailOutlined />
          <span>{{ item.meta.title }}</span>
        </span>
      </template>
      <!-- if item.chilren.node.children is not null 递归遍历  -->
      <sub-menu
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </a-sub-menu>
    <!-- 如果 item children 不存在, 或 item children 为空直接遍历为菜单 -->
    <a-menu-item :key="item.name" v-else>
      <router-link
        :to="item.path"
        @click="clickMenuItem(item.name, item.meta.title, item.path)"
      >
        <PieChartOutlined />
        <span>{{ item.meta.title }}</span>
      </router-link>
    </a-menu-item>
  </template>
</template>

<script>
import path from "path";
import { useStore } from "vuex";
import { PieChartOutlined, MailOutlined } from "@ant-design/icons-vue";
export default {
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
  components: {
    MailOutlined,
    PieChartOutlined,
  },
  setup(props) {
    const { commit } = useStore();
    // 菜 单 单 击 触 发 函 数
    const clickMenuItem = function (key, title, path) {
      path = resolvePath(path);
      // 新 增 顶 部 选 项 卡 操 作
      commit("layout/addTab", { key, title, path });
      // 设 置 当 前 菜 单 选 中
      commit("layout/selectKey", key);
    };

    const resolvePath = (routePath) => {
      if (/^(https?:|mailto:|tel:)/.test(routePath)) {
        return routePath;
      }
      //这里需要处理一下
      // return props.basePath + '/' + routePath;
      return path.resolve(props.basePath, routePath);
    };
    return {
      clickMenuItem,
      resolvePath,
    };
  },
};
</script>
