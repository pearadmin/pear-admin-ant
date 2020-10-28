
import Layout from '@/layouts/index.vue'

export default [

  //默认访问路由
  {
    path: '/',
    redirect: "/list",
    hidden: true,
  },



  //首页
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页', icon: 'eee' },
    component: Layout,
    redirect: "/home/index",
    children: [
      {
        path: 'index',
        name: 'home-index',
        meta: { title: '首页', icon: 'eee' },
        component: () => import('@/views/Home.vue'),
      },{
        path: 'daw',
        name: 'home-error',
        meta: { title: '错误页面', icon: 'eee' },
        children: [
          {
            path: 'index',
            name: 'home-index',
            meta: { title: '首页', icon: 'eee' },
            component: () => import('@/views/Home.vue'),
          },
          {
            path: 'index',
            name: 'home-index',
            meta: { title: '首页', icon: 'eee' },
            component: () => import('@/views/Home.vue'),
          }
        ],
      }
    ]
  },

  //列表
  {
    path: '/list',
    name: 'list',
    meta: { title: '列表页面', icon: 'eee' },
    component: Layout,
    redirect: "/list/baseList",
    children: [
      {
        path: 'baseList',
        name: 'list-base',
        meta: { title: '基础列表', icon: 'eee' },
        component: () => import('@/views/list/baseList.vue'),
      }
    ]
  },


]
