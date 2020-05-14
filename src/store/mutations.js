const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setIsUserLoggedIn(state, isAuthenticated) {
    state.isUserLoggedIn = isAuthenticated;
  },

  setProblemSets(state, problemSets) {
    state.problemSets = problemSets;
  },

  setProblems(state, problems) {
    state.problems = problems;
  }
};

export default mutations;
