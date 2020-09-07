<template>
  <v-card hover tile @click="problemClicked(problem)" class="py-3 px-5">
    <v-row>
      <v-col cols="8" class="primary--text">{{ problem.title }}</v-col>
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
      <v-col cols="12"
        >{{ $t("platform") }}: {{ problem.source.toLowerCase() }}</v-col
      >
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-chip label :class="'white--text ' + statusColor">
          {{ status }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { eventBus } from "@/store/eventBus";

export default {
  name: "DashboardProblem",

  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => {
    return {
      userProblem: null,
      status: "NOT_ATTEMPTED",
      statusColor: "red"
    };
  },

  mounted() {
    this.loadData();
    eventBus.$on("REFRESH_USERS_SUCCESS", async () => {
      this.loadData();
    });
  },

  methods: {
    loadData() {
      if (this.problem.userProblem) {
        this.userProblem = this.problem.userProblem;
        this.status = this.userProblem.status;
        if (this.status == "OK") {
          this.statusColor = "green";
        } else {
          this.statusColor = "orange";
        }
      }
    },
    problemClicked(problem) {
      window.open(problem.sourceLink, "_blank");
    },

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
    }
  }
};
</script>
