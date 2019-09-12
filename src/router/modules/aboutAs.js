export default [
  {
    path: '/setting/aboutAs',
    name: 'aboutAs',
    meta: {
      title: '关于我们',
      keepAlive: true
    },
    component: () => import('@/views/mine/aboutAs.vue')
  }
]
