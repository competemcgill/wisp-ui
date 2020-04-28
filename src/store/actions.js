const actions = {
  setUser({ commit }, currentUser) {
    commit("setUser", currentUser);
  },

  setIsUserLoggedIn({ commit }, isAuthenticated) {
    commit("setIsUserLoggedIn", isAuthenticated);
  }
};

export default actions;
