import { wispClient } from "@/clients/wisp";
// Contains user information as well auth information
export const UserModule = {
  namespaced: true,
  state: {
    data: null,
    token: null,
    isLoggedIn: false
  },
  mutations: {
    setData(state, userData) {
      state.data = userData;
      if (userData == null) state.isLoggedIn = false;
      else state.isLoggedIn = true;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async logout({ commit }) {
      commit("setData", null);
      commit("setToken", null);
    },
    async setUser({ commit }, currentUser) {
      commit("setUser", currentUser);
    },
    async setToken({ commit }, token) {
      commit("setToken", token);
    },
    async create(_, user) {
      await wispClient().user.create(user);
    },
    async login({ commit }, login) {
      const data = await wispClient().auth.login(login);
      commit("setToken", data.token);
      commit("setData", data.user);
    }
  }
};
