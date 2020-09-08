<template>
  <v-card tile>
    <v-row>
      <v-col class="mx-5 mt-5 mb-2">
        <h1 class="headline mb-1 primary--text">{{ $t("stats") }}</h1>
        <h1 class="subtitle-1 grey--text">{{ $t("progress-summary") }}</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1 class="subtitle-1 grey--text ml-5 mb-5">
          <v-icon class="ml-2">mdi-check-bold</v-icon>
          {{ $t("problems-completed") }}
          <v-chip class="ma-2" color="success" dark
            >{{ numSolvedProblems }} / {{ numProblems }}</v-chip
          >
        </h1>

        <h1 class="subtitle-1 grey--text ml-5 mb-5">
          <v-icon class="ml-2">mdi-check-all</v-icon>
          {{ $t("problem-sets-completed") }}
          <v-chip class="ma-2" color="success" dark>
            {{ numCompletedProblemSets }} /
            {{ numProblemSets }}
          </v-chip>
        </h1>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "DashboardStats",
  computed: {
    // TODO: Doesn't it make more sense to compute these server side
    ...mapState("problems", ["problemSets"]),
    ...mapGetters("user", ["trackedProblemSets"]),
    numProblems() {
      return this.problemSets.reduce(
        (count, problemSet) => count + problemSet.problemCount,
        0
      );
    },
    numSolvedProblems() {
      return this.$store.state.user.data.problems.filter(
        problem => problem.isComplete
      ).length;
    },
    numProblemSets() {
      return this.problemSets.length;
    },
    numCompletedProblemSets() {
      return this.trackedProblemSets.filter(problemSet => {
        return (
          problemSet.problems &&
          problemSet.problems.every(problem => problem.isComplete)
        );
      }).length;
    }
  }
};
</script>
