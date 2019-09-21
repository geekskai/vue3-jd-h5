import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [{
  path: '/',
  redirect: '/index'
}]
const routerContext = require.context('./modules', true, /\.js$/)
routerContext.keys().forEach(route => {
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

var link = document.querySelector("link[rel*='icon']") || document.createElement('link')
router.beforeEach((to, from, next) => {
  if (to.path.includes('coinPay')) {
    document.title = '币付宝'
    link.href = 'http://jc.cmall.world/coinPay_favicon.ico'
  } else {
    document.title = '链猫商城'
    link.href = 'http://jc.cmall.world/favicon.ico'
  }
  document.getElementsByTagName('head')[0].appendChild(link)
  next()
})
export default router
