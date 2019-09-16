export default [
  {
    path: '/mine/addAddress',
    name: 'addAddress',
    meta: {
      index: 13
    },
    component: () => import(/* webpackChunkName: 'addAddress' */ '@/views/mine/addAddress.vue')
  }
]
