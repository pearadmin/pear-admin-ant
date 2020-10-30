import Layout from '@/layout/index.vue'

export default [

  //默认访问路由
  {
    path: '/',
    redirect: "/home/index",
    hidden: true,
  },
  //首页
  {
    path: '/home',
    name: 'home',
    meta: { key: '1', title: '工作空间', icon: 'HomeOutlined' },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'home-index',
        meta: { key: 'home', title: '控制台', icon: 'DashboardOutlined' },
        component: () => import('@/views/Home.vue'),
      },{
        path: 'workspace',
        name: 'home-workspace',
        meta: { key: '30', title: '工作空间', icon: 'DashboardOutlined' },
        component: () => import('@/views/dashboard/workspace.vue'),
      }
    ]
  },{
    path: '/form',
    name: 'form',
    component: Layout,
    meta: { key: '18', title: '表单页面', icon: 'UnorderedListOutlined' },
    children: [
      {
        path: '/baseForm',
        name: 'base-form',
        meta: { key: '19', title: '基础表单', icon: 'DatabaseOutlined' },
        component: () => import('@/views/form/baseForm.vue')
      },{
        path: '/highForm',
        name: 'high-form',
        meta: { key: '20', title: '高级表单', icon: 'DatabaseOutlined' },
        component: () => import('@/views/form/highForm.vue')
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
        name: 'base-list',
        meta: { key: '7', title: '基础列表', icon: 'DatabaseOutlined' },
        component: () => import('@/views/list/baseList.vue'),
      },{
        path: 'cardList',
        name: 'card-list',
        meta: { key: '12', title: '卡片列表', icon: 'DatabaseOutlined' },
        component: () => import('@/views/list/cardList.vue'),
      },{
        path: 'newsList',
        name: 'news-list',
        meta: { key: '13', title: '图文列表', icon: 'DatabaseOutlined' },
        component: () => import('@/views/list/newsList.vue'),
      },{
        path: 'tableList',
        name: 'table-list',
        meta: { key: '14', title: '查询表格', icon: 'DatabaseOutlined' },
        component: () => import('@/views/list/tableList.vue'),
      }
    ]
  },{
    path: '/result',
    name: 'result-menu',
    meta: { key: '15', title: '结果页面', icon: 'UnorderedListOutlined' },
    redirect: "/result/success",
    component: Layout,
    children: [
      {
        path: 'success',
        name: 'result-success',
        meta: { key: '17', title: '成功', icon: 'DatabaseOutlined' },
        component: () => import('@/views/result/success.vue'),
      },{
        path: 'failure',
        name: 'result-failure',
        meta: { key: '16', title: '失败', icon: 'DatabaseOutlined' },
        component: () => import('@/views/result/failure.vue'),
      }
    ]
  },{
    path: '/error',
    name: 'error',
    meta: { key: '8', title: '错误页面', icon: 'UnorderedListOutlined' },
    component: Layout,
    redirect: "/list/baseList",
    children: [
      {
        path: '/403',
        name: '403',
        meta: { key: '9', title: '403', icon: 'DatabaseOutlined' },
        component: () => import('@/views/error/403.vue'),
      },{
        path: '/404',
        name: '404',
        meta: { key: '10', title: '404', icon: 'DatabaseOutlined' },
        component: () => import('@/views/error/404.vue'),
      },{
        path: '/500',
        name: '500',
        meta: { key: '11', title: '500', icon: 'DatabaseOutlined' },
        component: () => import('@/views/error/500.vue'),
      }
    ]
  },
]
