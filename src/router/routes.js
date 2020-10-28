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
    meta: { key: '1', title: '首页', icon: 'HomeOutlined' },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'home-index',
        meta: { key: 'home', title: '控制台', icon: 'DashboardOutlined' },
        component: () => import('@/views/Home.vue'),
      }, {
        path: 'daw',
        name: 'home-error',
        meta: { key: '3', title: '错误页面', icon: 'eee' },
        children: [
          {
            path: 'index1',
            name: 'home-index2',
            meta: { key: '4', title: '首页', icon: 'eee' },
            component: () => import('@/views/Home.vue'),
          },
          {
            path: 'index2',
            name: 'home-index3',
            meta: { key: '5', title: '首页', icon: 'eee' },
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
    meta: { key: '6', title: '列表页面', icon: 'UnorderedListOutlined' },
    component: Layout,
    redirect: "/list/baseList",
    children: [
      {
        path: 'baseList',
        name: 'list-base',
        meta: { key: '7', title: '基础列表', icon: 'DatabaseOutlined' },
        component: () => import('@/views/list/baseList.vue'),
      }
    ]
  },
]
