import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { ProblemsModule } from "./modules/problems";
import { UserModule } from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    options(state) {
      return {
        token: state.user.token
      };
    }
  },
  actions: {
    async preloadGlobalData({ dispatch }) {
      await Promise.all([
        dispatch("problems/getProblems"),
        dispatch("problems/getProblemSets")
      ]);
    }
  },
  modules: {
    problems: ProblemsModule,
    user: UserModule
  },
  plugins: [createPersistedState()]
});
