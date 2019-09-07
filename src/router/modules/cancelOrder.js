export default [{
  path: '/order/cancelOrder',
  name: 'cancelOrder',
  meta: {
    index: 11
  },
  component: () => import('@/views/order/cancelOrder.vue')
}]
