<template>
  <div id="side">
    <a-menu
      v-model:openKeys="openKey"
      v-model:selectedKeys="selectKey"
      mode="inline"
      theme="dark"
      @openChange="openChange"
    >
      <a-menu-item key="1">
        <router-link to="/home" @click="clickMenuItem('1', '首页', '/home')">
          <PieChartOutlined />
          <span>工作空间</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu key="2">
        <template v-slot:title>
          <span><MailOutlined /><span>列表页面</span></span>
        </template>
        <a-menu-item key="21">
          <router-link
            to="/list/baseList"
            @click="clickMenuItem('21', '基础列表', '/list/baseList')"
          >
            基础列表
          </router-link>
        </a-menu-item>
        <a-menu-item key="22">
          <router-link
            to="/list/cardList"
            @click="clickMenuItem('22', '卡片列表', '/list/cardList')"
          >
            卡片列表
          </router-link></a-menu-item
        >
        <a-menu-item key="24">
          <router-link
            to="/list/newsList"
            @click="clickMenuItem('24', '图文列表', '/list/newsList')"
          >
            图文列表
          </router-link></a-menu-item
        ><a-menu-item key="25">
          <router-link
            to="/list/tableList"
            @click="clickMenuItem('25', '查询表格', '/list/tableList')"
          >
            查询表格
          </router-link></a-menu-item
        >
      </a-sub-menu>
       <a-sub-menu key="5">
        <template v-slot:title>
          <span><MailOutlined /><span>表单页面</span></span>
        </template>
        <a-menu-item key="51">
          <router-link
            to="/form/baseForm"
            @click="clickMenuItem('51', '基础表单', '/form/baseForm')"
          >
            基础表单
          </router-link>
        </a-menu-item>
        <a-menu-item key="52">
          <router-link
            to="/form/highForm"
            @click="clickMenuItem('52', '高级表单', '/form/highForm')"
          >
            高级表单
          </router-link></a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="3">
        <template v-slot:title>
          <span><MailOutlined /><span>结果页面</span></span>
        </template>
        <a-menu-item key="31">
          <router-link
            to="/result/success"
            @click="clickMenuItem('31', '成功页面', '/result/success')"
          >
            成功页面
          </router-link>
        </a-menu-item>
        <a-menu-item key="32">
          <router-link
            to="/result/failure"
            @click="clickMenuItem('32', '失败页面', '/result/failure')"
          >
            失败页面
          </router-link></a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="4">
        <template v-slot:title>
          <span><MailOutlined /><span>错误页面</span></span>
        </template>
        <a-menu-item key="41">
          <router-link
            to="/error/403"
            @click="clickMenuItem('41', '403', '/error/403')"
          >
            403
          </router-link>
        </a-menu-item>
        <a-menu-item key="42">
          <router-link
            to="/error/404"
            @click="clickMenuItem('42', '404', '/error/404')"
          >
            404
          </router-link></a-menu-item
        >
        <a-menu-item key="43"
          ><router-link
            to="/error/500"
            @click="clickMenuItem('43', '500', '/error/500')"
          >
            500
          </router-link></a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import store from "@/store";
// 图 标 引 入
import { PieChartOutlined, MailOutlined } from "@ant-design/icons-vue";
import { computed } from "vue";
export default {
  components: {
    MailOutlined,
    PieChartOutlined,
  },
  setup() {
    // 菜 单 单 击 触 发 函 数
    function clickMenuItem(key, name, path) {
      // 新 增 顶 部 选 项 卡 操 作
      store.commit("addTab", { key: key, title: name, path: path });
      // 设 置 当 前 菜 单 选 中
      store.commit("selectKey", key);
    }
    const openChange = function(openKeys){
      store.commit("updateOpenKey",openKeys);
    }

    // 响 应 式 菜 单 选 中
    const selectKey = computed(() => store.state.selectKey);

    const  openKey = computed(()=>store.state.openKey);

    return {
      clickMenuItem,
      selectKey,
      openChange,
      openKey
    };
  },
};
</script>
<style>
.ant-menu-sub.ant-menu-inline > .ant-menu-item,
.ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 48px;
  line-height: 48px;
}
.ant-menu-vertical > .ant-menu-item,
.ant-menu-vertical-left > .ant-menu-item,
.ant-menu-vertical-right > .ant-menu-item,
.ant-menu-inline > .ant-menu-item,
.ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 48px !important;
  line-height: 48px !important;
}
.ant-layout-sider {
  background: #191a23 !important;
}
.ant-menu-dark,
.ant-menu-dark {
  background: #191a23 !important;
}
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  background-color: #101117 !important;
}
.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item,
.ant-menu-vertical .ant-menu-submenu-title,
.ant-menu-vertical-left .ant-menu-submenu-title,
.ant-menu-vertical-right .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-submenu-title {
  margin-top: 4px !important;
  margin-bottom: 4px !important;
}
</style>