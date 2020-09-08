import { wispClient } from "@/clients/wisp";
// Contains user information as well auth information
export const UserModule = {
  namespaced: true,
  state: {
    data: null,
    token: null,
    isLoggedIn: false
  },
  getters: {
    trackedProblemSets(state, _, rootState) {
      return rootState.problems.problemSets.filter(
        problemSet => state.data.problemSets.indexOf(problemSet._id) !== -1
      );
    }
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
    async getData({ commit, rootGetters }, id) {
      const data = await wispClient(rootGetters.options).user.getData(
        id ? id : this.data._id
      );
      commit("setData", data);
    },
    async create(_, user) {
      await wispClient().user.create(user);
    },
    async login({ commit }, { email, password }) {
      const data = await wispClient().auth.login(email, password);
      commit("setToken", data.token);
      commit("setData", data.user);
    },
    async logout({ commit }) {
      commit("setData", null);
      commit("setToken", null);
    },
    async delete({ dispatch, rootGetters }) {
      await wispClient(rootGetters.options).user.del(this.data._id);
      dispatch("logout");
    },
    async edit({ state, commit, rootGetters }, user) {
      const userData = await wispClient(rootGetters.options).user.update(
        state.data._id,
        user
      );
      commit("setData", userData);
    },
    async trackProblemSet({ commit, state, rootGetters }, problemSetId) {
      const userData = await wispClient(
        rootGetters.options
      ).user.trackProblemSet(state.data._id, problemSetId);
      commit("setData", userData);
    }
  }
};
