export default [
  {
    path: '/search',
    name: 'search',
    meta: {
      index: 12
    },
    component: () => import('@/views/search/index.vue')
  }
]