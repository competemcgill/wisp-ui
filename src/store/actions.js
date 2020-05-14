const actions = {
  setUser({ commit }, currentUser) {
    commit("setUser", currentUser);
  },

  setProblemSets({ commit }, problemSets) {
    commit("setProblemSets", problemSets);
  },

  setProblems({ commit }, problems) {
    commit("setProblems", problems);
  }
};

export default actions;
