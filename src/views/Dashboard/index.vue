<!-- TODO: give problem-set and stats appropriate props -->
<template>
  <div class="dashbaord">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">my sets</h1>
      <v-row>
        <v-col cols="12" md="9" class="pl-0" v-if="problemSets != null">
          <v-col
            cols="12"
            v-for="(problemSet, index) of problemSets"
            :key="index"
          >
            <problem-set v-bind:problemSet="problemSet" />
          </v-col>
        </v-col>
        <v-col cols="12" md="3">
          <v-col cols="12">
            <stats />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProblemSet from "@/components/Dashboard/ProblemSet";
import Stats from "@/components/Dashboard/Stats";

export default {
  name: "Dashboard",

  components: {
    "problem-set": ProblemSet,
    stats: Stats
  },

  mounted() {
    this.problemSets = this.$store.state.problemSets;
  },

  data: () => {
    return {
      problemSets: null
    };
  }
};
</script>
