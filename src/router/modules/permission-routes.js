import Layout from "@/layout";

export default {
  Layout,
  'account-center': () => import('@/view/account/center.vue'),
  'dashboard-console': () => import('@/view/dashboard/console.vue'),
  'base-form': () => import('@/view/form/baseForm.vue'),
  'step-form': () => import('@/view/form/stepForm.vue'),
  'base-list': () => import('@/view/list/baseList.vue'),
  'card-list': () => import('@/view/list/cardList.vue'),
  'news-list': () => import('@/view/list/newsList.vue'),
  'table-list': () => import('@/view/list/tableList.vue'),
  'result-success': () => import('@/view/result/success.vue'),
  'result-failure': () => import('@/view/result/failure.vue'),
  'error-403': () => import('@/view/error/403.vue'),
  'error-404': () => import('@/view/error/404.vue'),
  'error-500': () => import('@/view/error/500.vue')
}
