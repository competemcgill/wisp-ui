<template>
  <div class="problemSet">
    <v-container class="my-5" v-if="!problemSet.title">
      <v-row align="center" class="mr-3">
        <v-col cols="12" sm="8">
          <h1 class="my-5 display-1 black--text text-uppercase">
            problem set does not exist
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="my-5" v-if="problemSet.title">
      <v-row align="center" class="mr-3">
        <v-col cols="12" sm="8">
          <h1 class="my-5 display-1 black--text text-uppercase">
            {{ problemSet.title }}
          </h1>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="font-weight-regular primary--text text-right"
          >{{ completed }}/{{
            problemSet.problemCount ? problemSet.problemCount : "0"
          }}
          completed</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" sm="4">
          <v-col cols="12">
            <problem-set-info :data="problemSet" />
          </v-col>
        </v-col>
        <v-col cols="12" sm="8">
          <v-col cols="12" v-for="(problem, index) in problems" :key="index">
            <problem-info :problem="problem" />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProblemSetInfo from "@/components/ProblemSets/Show/ProblemSetInfo";
import ProblemInfo from "@/components/ProblemSets/Show/ProblemInfo";

export default {
  name: "ProblemSet",

  components: {
    "problem-set-info": ProblemSetInfo,
    "problem-info": ProblemInfo
  },

  data() {
    return {
      problemSet: {},
      problems: [],
      completed: 0
    };
  },

  async created() {
    const problemSets = this.$store.state.problemSets.filter(problemSet => {
      return problemSet._id === this.$route.params.id;
    });

    this.problemSet =
      problemSets && problemSets.length > 0 ? problemSets[0] : {};
    this.problems =
      this.problemSet && this.problemSet.problems
        ? this.problemSet.problems
        : [];

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
  }
};
</script>
