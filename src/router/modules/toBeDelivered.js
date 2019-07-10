export default [
    {
      path: '/order/toBeDelivered',
      name: 'toBeDelivered',
      meta: {
        index: 12
      },
      component: () => import('@/views/order/toBeDelivered.vue')
    }
  ]