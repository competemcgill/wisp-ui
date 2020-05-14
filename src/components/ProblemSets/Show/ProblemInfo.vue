<template>
  <v-card hover tile class="py-3 px-5">
    <v-row>
      <v-col cols="8" class="title font-weight-regular primary--text">
        {{ problem.title }}
      </v-col>
      <v-col cols="4" justify="right" align="right">
        <v-chip
          :class="
            difficultyColor(problem.problemMetadata.difficulty) + ' white--text'
          "
          >{{ problem.problemMetadata.difficulty }}</v-chip
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col col="12">Platform: {{ problem.source.toLowerCase() }}</v-col>
    </v-row>
    <v-row> </v-row>
    <v-row>
      <v-col col="12" sm="8">
        <v-chip label :class="'white--text ' + statusColor">
          {{ status }}
        </v-chip>
      </v-col>
      <v-col cols="12" sm="4" justify="right" align="right">
        <v-btn text @click="visitProblem(problem.sourceLink)">
          <v-icon class="primary--text">mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ProblemSetProblemInfo",

  props: ["problem"],

  data() {
    return {
      status: "NOT_COMPLETED",
      statusColor: "red"
    };
  },

  mounted() {
    if (this.problem.userProblem) {
      this.status = this.problem.userProblem.status;
      if (this.problem.userProblem.isComplete) {
        this.statusColor = "green";
      } else {
        this.statusColor = "orange";
      }
    }
  },

  methods: {
    difficultyColor(difficulty) {
      switch (difficulty.toLowerCase()) {
        case "easy":
          return "success";
        case "medium":
          return "incomplete";
        case "hard":
          return "failure";
        default:
          return "grey";
      }
    },

    visitProblem(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
