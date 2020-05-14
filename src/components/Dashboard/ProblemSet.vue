<!-- TODO: implement Problem Set card for Dashboard view
     NOTE: A problem should have problems under it as shown on figma -->
<template>
  <v-container>
    <v-card hover v-on:click="loadProblems">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-card-title>{{ problemSet.title }}</v-card-title>
            <v-card-text class="text-truncate">{{ problemSet.description }}</v-card-text>
            <v-card-text>{{ problemSet.tags }}</v-card-text>
          </v-col>

          <v-col cols="auto">
            <v-row class="flex-column" justify="center">
              <v-col>{{ completed }}/{{problemSet.problemCount}} completed</v-col>
              <v-col>arrow</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-row v-show="showProblems">
      <div v-bind:key="index" v-for="(problem, index) of problems">
        <problem :problem="problem"></problem>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Problem from "@/components/Dashboard/Problem";

export default {
  name: "DashboardProblemSet",
  components: {
    problem: Problem
  },
  props: {
    problemSet: Object
  },
  data: () => {
    return {
      showProblems: false,
      problems: null,
      completed: 0
    };
  },

  mounted() {
    this.problems = this.problemSet.problems;
    let attempted = [];
    for (let userProblem of this.$store.state.user.problems) {
      for (let problem of this.problems) {
        if (userProblem.problemId == problem.problemId) {
          problem.userProblem = userProblem;
          attempted.push(problem);
          if (userProblem.status == "OK") {
            this.completed++;
          }
        }
      }
    }
  },

  methods: {
    async loadProblems() {
      this.showProblems = !this.showProblems;
    }
  }
};
</script>
