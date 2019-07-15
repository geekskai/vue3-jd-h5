import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



let indexRouter = {
  // 默认页面
  path: '/',
  component: () => import( /* webpackChunkName: "index" */ '@/views/index'),
  redirect: '/index',
  children: []
}
let routes = [
  // 登录页面
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 1
    },
    component: () => import( /* webpackChunkName: "login" */ '@/views/login/index')
  },
  // 无权限页面
  {
    path: '/nopermission',
    name: 'nopermission',
    meta: {
      index: 1
    },
    component: () => import( /* webpackChunkName: "NoPermission" */ '@/views/error/NoPermission')
  },
  {
    path: '*',
    name: '404',
    meta: {
      index: 1
    },
    component: () => import( /* webpackChunkName: "404" */ '@/views/error/404')
  },
  indexRouter
]
const routerContext = require.context('./modules', true, /\.js$/)
routerContext.keys().forEach(route => {
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  indexRouter.children = [...indexRouter.children, ...(routerModule.default || routerModule)]
})

let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// router.beforeEach((to, from, next) => {

// })
export default router
