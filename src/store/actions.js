const actions = {
  setUser({ commit }, currentUser) {
    commit("setUser", currentUser);
  },

  setToken({ commit }, token) {
    commit("setToken", token);
  },

  setProblemSets({ commit }, problemSets) {
    commit("setProblemSets", problemSets);
  },

  setProblems({ commit }, problems) {
    commit("setProblems", problems);
  }
};

export default actions;
