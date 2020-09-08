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
    async deleteProblemSet({ dispatch, rootGetters }, problemSetId) {
      await wispClient(rootGetters.options).problemSets.del(problemSetId);
      await dispatch("getProblemSets");
    },
    async deleteProblem({ dispatch, rootGetters }, problemId) {
      await wispClient(rootGetters.options).problems.del(problemId);
      await dispatch("getProblems");
    },
    async createProblems({ dispatch, rootGetters }, problems) {
      for (const problem of problems) {
        await wispClient(rootGetters.options).problems.create(problem);
      }
      await dispatch("getProblems");
    },
    async createProblemSets({ dispatch, rootGetters }, problemSets) {
      for (const problemSet of problemSets) {
        await wispClient(rootGetters.options).problemSets.create(problemSet);
      }
      await dispatch("getProblemSets");
    }
  }
};
