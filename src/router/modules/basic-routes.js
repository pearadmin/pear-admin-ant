export default [
  {
    path: '/',
    redirect: "/dashboard/console",
    hidden: true,
  },
  {
    path: '/login',
    component: () => import('@/view/account/login.vue'),
    hidden: true,
  }
]
