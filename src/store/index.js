import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
  user: null,
  problemSets: null,
  problems: null,
  isLoggedIn: false
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState()]
});
