const mutations = {
  setUser(state, user) {
    state.user = user;
    if (user == null) state.isLoggedIn = false;
    else state.isLoggedIn = true;
  },

  setProblemSets(state, problemSets) {
    state.problemSets = problemSets;
  },

  setProblems(state, problems) {
    state.problems = problems;
  }
};

export default mutations;
