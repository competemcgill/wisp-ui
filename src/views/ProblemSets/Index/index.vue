<template>
  <div class="ProblemSets">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">problem sets</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(problemSet, index) in problemSets" :key="index">
          <problem-set :data="problemSet" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProblemSet from "@/components/ProblemSets/Index/ProblemSet";

export default {
  name: "ProblemSets",

  components: {
    "problem-set": ProblemSet
  },

  data() {
    return {
      problemSets: this.$store.state.problemSets
    }
  }
};
</script>
