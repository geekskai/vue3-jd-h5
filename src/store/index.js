import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart'
import search from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    search
  },
  strict: process.env.NODE_ENV !== 'production'
})
export default store
