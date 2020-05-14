<template>
  <v-container class="pl-0">
    <v-card hover @click="loadProblems" class="px-3">
      <v-container>
        <v-row>
          <v-col cols="6" class="primary--text"
            >{{ problemSet.problemCount }} questions</v-col
          >
          <v-col cold="6" class="primary--text text-right">
            {{ completed }}/{{ problemSet.problemCount }} completed
          </v-col>
        </v-row>

        <v-row>
          <v-col class="title font-weight-medium">{{ problemSet.title }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="subtext grey--text text-truncate">{{
            problemSet.description
          }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="10">
            <v-chip-group column>
              <v-chip
                label
                v-for="(tag, index) in problemSet.tags"
                :key="index"
              >
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="2" justify="right" align="right">
            <v-btn text router :to="'/problemSets/' + problemSet._id">
              <v-icon class="primary--text">mdi-open-in-new</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-row v-show="showProblems">
      <v-col cols="12" sm="8" :key="index" v-for="(problem, index) of problems">
        <problem :problem="problem" />
      </v-col>
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
    for (let userProblem of this.$store.state.user.problems) {
      for (let problem of this.problems) {
        if (userProblem.problemId == problem.problemId) {
          problem.userProblem = userProblem;
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
