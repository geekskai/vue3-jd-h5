const state = {
  count: 0
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  addToCart (state) {
    state.count++
    console.log('=====count==>', state.count)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
