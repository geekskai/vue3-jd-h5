export default [
  {
    path: '/search',
    name: 'search',
    meta: {
      index: 2
    },
    component: () => import('@/views/search/index.vue')
  }
]