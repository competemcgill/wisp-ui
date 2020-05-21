<template>
  <v-card tile>
    <v-row>
      <v-col class="mx-5 mt-5 mb-2">
        <h1 class="headline mb-1 primary--text">Stats</h1>
        <h1 class="subtitle-1 grey--text">Here's a summary of your progress</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1 class="subtitle-1 grey--text ml-5 mb-5">
          <v-icon class="ml-2">
            mdi-check-bold
          </v-icon>
          Problems Completed

          <v-chip class="ma-2" color="success" dark
            >{{ getNumSolvedProblems() }} / {{ problemCount }}</v-chip
          >
        </h1>

        <h1 class="subtitle-1 grey--text ml-5 mb-5">
          <v-icon class="ml-2">
            mdi-check-all
          </v-icon>
          Problems Sets Completed
          <v-chip class="ma-2" color="success" dark>
            {{ completedProblemSetCount }} /
            {{ problemSets.length }}
          </v-chip>
        </h1>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "DashboardStats",

  data() {
    return {
      user: this.$store.state.user,
      problemSets: [],
      completedProblemSetCount: 0,
      problemCount: 0,
      error: ""
    };
  },

  created() {
    this.filterProblemSets();
  },

  methods: {
    getNumSolvedProblems() {
      const count = this.user.problems.filter(problem => problem.isComplete)
        .length;
      return count;
    },

    filterProblemSets() {
      this.problemSets = this.$store.state.problemSets.filter(
        problemSet =>
          this.$store.state.user.problemSets.indexOf(problemSet._id) !== -1
      );

      for (const problemSet of this.problemSets) {
        this.problemCount += problemSet.problemCount;
        const completedProblemCount = problemSet.problems.filter(
          problem => problem.isComplete
        ).length;

        if (completedProblemCount == problemSet.problems.length)
          this.completedProblemSetCount += 1;
      }
    }
  }
};
</script>
