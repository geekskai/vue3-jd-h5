import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart
  }
})
export default store
