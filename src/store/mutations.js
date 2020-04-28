const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setIsUserLoggedIn(state, isAuthenticated) {
    state.isUserLoggedIn = isAuthenticated;
  }
};

export default mutations;
