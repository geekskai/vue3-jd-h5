export default [{
  path: '/order/completedOrder',
  name: 'completedOrder',
  meta: {
    index: 3
  },
  component: () => import('@/views/order/completedOrder.vue')
}]
