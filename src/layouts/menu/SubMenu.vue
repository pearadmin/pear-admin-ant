<template>
  <template v-if="!item.hidden">
    <!-- 包含了子元素的 -->
    <a-sub-menu :key="item.name" v-if="item.children && item.children.length > 0">
      <template v-slot:title>
        <span>
          <MailOutlined />
          <span>{{ item.meta.title }}</span>
        </span>
      </template>
      <!-- 没找到为什么递归有问题 -->
      <!-- <sub-menu
        v-for="(child, index) in item.children" :key="index"
        :item="child"
        :base-path="resolvePath(child.path)"
      /> -->
      <a-menu-item v-for="(child) in item.children" :key="child.name">
        <router-link :to="resolvePath(child.path)" @click="clickMenuItem(child.name, child.meta.title, child.path)">
          <PieChartOutlined />
          <span>{{ child.meta.title }}</span>
        </router-link>
      </a-menu-item>
    </a-sub-menu>
    <!-- 直接显示item -->
    <a-menu-item :key="item.name" v-else>
      <router-link :to="item.path" @click="clickMenuItem(item.name, item.meta.title, item.path)">
        <PieChartOutlined />
        <span>{{ item.meta.title }}</span>
      </router-link>
    </a-menu-item>
  </template>

</template>

<script>
  import path from 'path'
  import { useStore } from "vuex";
  import { PieChartOutlined, MailOutlined } from "@ant-design/icons-vue";
  export default {
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
    components: {
      MailOutlined,
      PieChartOutlined,
    },
    setup(props) {
      const { commit } = useStore();
      // 菜 单 单 击 触 发 函 数
      const clickMenuItem = function(key, title, path) {
        console.log(key, title, path);
        // 新 增 顶 部 选 项 卡 操 作
        commit("layout/addTab", { key, title, path });
        // 设 置 当 前 菜 单 选 中
        commit("layout/selectKey", key);
      };

      const resolvePath = (routePath) => {
        if (/^(https?:|mailto:|tel:)/.test(routePath)) {
          return routePath
        }
        //这里需要处理一下
        // return props.basePath + '/' + routePath;
        return path.resolve(props.basePath, routePath)
      }
      return {
        clickMenuItem,
        resolvePath,
      };
    },
  }
</script>

<style lang="scss">
  .pear-sub-menu {

  }
</style>
