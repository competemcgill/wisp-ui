import { wispClient } from "@/clients/wisp";

// Contains user information as well auth information
export const ProblemsModule = {
  namespaced: true,
  state: {
    problems: [],
    problemSets: []
  },
  mutations: {
    setProblems(state, problems) {
      state.problems = problems;
    },
    setProblemSets(state, problemSets) {
      state.problemSets = problemSets;
    }
  },
  actions: {
    async getProblems({ commit, rootGetters }) {
      commit(
        "setProblems",
        await wispClient(rootGetters.options).problems.get()
      );
    },
    async getProblemSets({ commit, rootGetters }) {
      commit(
        "setProblemSets",
        await wispClient(rootGetters.options).problemSets.get()
      );
    },
    async submitProblems() {}
  }
};
