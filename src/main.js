import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
import './components'
import 'amfe-flexible'
import axios from './plugins/axios'
Vue.use(axios)
import './mock/mock'
import '@/icons' // icon
import EventBus from './utils/eventBus'
Vue.use(EventBus)

import Vconsole from 'vconsole'
if (process.env.NODE_ENV !== 'production') {
  // const vConsole = new Vconsole()
  // Vue.use(vConsole)
}


import {
  Swipe,
  Toast,
  SwipeItem,
  Button,
  RadioGroup,
  Radio,
  Tabbar,
  Tab,
  Tabs,
  CountDown,
  Loading,
  Switch,
  TabbarItem,
  NavBar,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Search,
  Lazyload,
  Card,
  Popup,
  Dialog,
  Picker,
  Checkbox,
  Area,
  CheckboxGroup,
  ActionSheet,
  Field,
  Uploader,
  Cell,
  Step,
  Steps,
  IndexBar,
  IndexAnchor,
  Tag,
  CellGroup,
  SubmitBar,
  Stepper,
  Collapse,
  CollapseItem,
  Divider,
  Icon
} from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Button).use(NavBar).use(Search).use(Icon).use(Picker).use(ActionSheet).use(Field).use(Cell).use(CellGroup)
  .use(Swipe).use(SwipeItem).use(Lazyload).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Popup).use(Uploader).use(Dialog).use(Checkbox).use(CheckboxGroup)
  .use(Switch).use(Step).use(Steps).use(Card).use(Stepper).use(SubmitBar).use(Tag).use(Toast).use(Area).use(IndexBar).use(IndexAnchor).use(Loading)
  .use(Collapse).use(CollapseItem).use(Radio).use(RadioGroup).use(Tab).use(Tabs).use(Divider).use(CountDown);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
