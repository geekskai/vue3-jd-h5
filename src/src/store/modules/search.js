import { setStore } from "../../utils/util";
const state = {
  searchHistory: []
}
const getters = {}
const mutations = {
  addHistory(state, searchHistory) {
    state.searchHistory.unshift(searchHistory)
  },
  setHistory(state, searchHistory) {
    state.searchHistory = searchHistory
    setStore('searchHistory', searchHistory)
  },
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
