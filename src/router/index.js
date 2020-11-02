// 可以根据路由模式的不同，后面俩可以只引用一个
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes.js'

import NProgress from "nprogress";
import "nprogress/nprogress.css";

const router = createRouter({
  // 使用 hash 模式构建路由（ url中带 # 号的那种)
  history: createWebHashHistory(),
  // 使用 history 模式构建路由 （ url 中没有 # 号，但生产环境需要特殊配置）
  // history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  //配置路由加载动画效果
  NProgress.start();
  //这里也可以验证权限

  return true;
})

router.afterEach((to, from) => {
  NProgress.done();
})

export default router
