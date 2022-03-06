import { Module } from "vuex";
import { SET_USER } from "./actions";

export type IUser = Record<"name" | "password", string>;

export interface ILoginState {
  user: IUser;
}

// Module这个类型可以传两个范型变量 第一个是当前模块state的对象接口类型 第二个是主仓库state的对象接口类型
const LoginStore: Module<ILoginState, {}> = {
  namespaced: true,
  state: {
    user: {
      name: "",
      password: "",
    },
  },
  getters: {},
  mutations: {
    [SET_USER](state, payload: IUser) {
      state.user = payload;
    },
  },
  actions: {
    [SET_USER]({ commit }, payload: IUser) {
      commit(SET_USER, payload);
    },
  },
};

export default LoginStore;
