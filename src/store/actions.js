const actions = {
  setUser({ commit }, currentUser) {
    commit("setUser", currentUser);
  },

  setIsUserLoggedIn({ commit }, isAuthenticated) {
    commit("setIsUserLoggedIn", isAuthenticated);
  },

  setProblemSets({ commit }, problemSets) {
    commit("setProblemSets", problemSets);
  },

  setProblems({ commit }, problems) {
    commit("setProblems", problems);
  }
};

export default actions;
