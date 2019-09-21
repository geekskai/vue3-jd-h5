export default [{
  path: '/product/index',
  name: 'product',
  meta: {
    index: 25
  },
  component: () => import('@/views/product/index.vue')
}]
