// 可以根据路由模式的不同，后面俩可以只引用一个
import { createRouter,  createWebHashHistory } from 'vue-router'
import Home from '@/layouts/index.vue'

// 构建我们的页面路由配置，可以看到，这里和原来的写法并无二致。
const routes = [
  {
    path: '/',
    component: Home,
    children:[{
      path: '/',
      component: () => import('@/views/Home.vue'),
    },{
      path: '/home',
      hidden: true,
      meta: {name:"主页",icon:"图标"},
      component: () => import('@/views/Home.vue'),
    },{
      path: '/table',
      component: () => import('@/views/Table.vue'),
    },{
      path: '/error/403',
      component: () => import('@/views/error/403.vue'),
    },{
      path: '/error/404',
      component: () => import('@/views/error/404.vue'),
    },{
      path: '/error/500',
      component: () => import('@/views/error/500.vue'),
    }]
  }
]

const router = createRouter({
  // 使用 hash 模式构建路由（ url中带 # 号的那种)
  history: createWebHashHistory(),
  // 使用 history 模式构建路由 （ url 中没有 # 号，但生产环境需要特殊配置）
  // history: createWebHistory(),
  routes
})
export default router