export default [
  {
    path: '/search',
    name: 'search',
    meta: {
      index: 17
    },
    component: () => import('@/views/search/index.vue')
  }
]