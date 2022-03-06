import { Module } from "vuex";
import { SET_VALUE } from "./actions";

export interface IHomeStore {
  value: string;
}

const HomeStore: Module<IHomeStore, Record<string, unknown>> = {
  namespaced: true,
  state: {
    value: "",
  },
  mutations: {
    [SET_VALUE](state, payload: string) {
      state.value = payload;
    },
  },
  actions: {
    [SET_VALUE]({ commit }, payload: string) {
      commit(SET_VALUE, payload);
    },
  },
};

export default HomeStore;
