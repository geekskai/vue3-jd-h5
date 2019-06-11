export default [{
    path: 'index',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: 'classify',
    name: 'classify',
    component: () => import('@/views/classify/index.vue')
  },
  {
    path: 'shopCart',
    name: 'shopCart',
    component: () => import('@/views/shopCart/index.vue')
  },
  {
    path: 'mine',
    name: 'mine',
    component: () => import('@/views/mine/index.vue')
  },
]
