import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
import './components'
import 'amfe-flexible'
import axios from './plugins/axios'
import './styles/index.scss'
import EventBus from './utils/eventBus'
Vue.use(EventBus)

import Vconsole from 'vconsole'
const vConsole = new Vconsole()
if (process.env.NODE_ENV !== 'production') {
  Vue.use(vConsole)
}

Vue.use(axios)

import {
  Swipe,
  SwipeItem,
  Sidebar,
  SidebarItem,
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Search,
  Lazyload,
  Icon
} from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Button).use(NavBar).use(Search).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload).use(Sidebar).use(SidebarItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
