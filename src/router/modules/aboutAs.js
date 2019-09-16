export default [
  {
    path: '/setting/aboutAs',
    name: 'aboutAs',
    meta: {
      title: '关于我们',
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: 'aboutAs' */ '@/views/mine/aboutAs.vue')
  }
]
