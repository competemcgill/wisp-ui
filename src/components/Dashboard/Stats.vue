<template>
  <!-- <v-card class="pa-5" outlined tile> -->
  <v-card class="mx-auto" outlined tile>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Stats</v-list-item-title>
        <v-list-item-subtitle class="subtitle"
          >Here's a summary of your progress</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>

        <v-list-item-subtitle class="subtitle mb-5">
          <v-icon class="ml-2">
            mdi-check-bold
          </v-icon>
          Problems Completed

            <v-chip class="ma-2" color="#008000" dark>{{getNumSolvedProblems()}} / {{this.user.problems.length}}</v-chip>
          
        </v-list-item-subtitle>

        <v-list-item-subtitle class="subtitle mb-5">
          <v-icon class="ml-2">
            mdi-check-all
          </v-icon>
          Problems Sets Completed
          <v-chip class="ma-2" color="#008000" dark>Hello World</v-chip>
          </v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
  </v-card>
  <!-- <v-title>Progress</v-title> -->
  <!-- </v-card> -->
</template>

<script>
export default {
  name: "DashboardStats",

  data() {
    return {
      user: this.$store.state.user,
      error: ""
    };
  },

  methods: {
    getNumSolvedProblemSets(){
      var count = this.user.problems.filter(problemSets => problem.isComplete).length;
      return count;
    },

    getNumberOfProb
  }
};
</script>
