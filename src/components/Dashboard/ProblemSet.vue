<!-- TODO: implement Problem Set card for Dashboard view
     NOTE: A problem should have problems under it as shown on figma -->
<template>
  <v-container>
    <v-card hover v-on:click="loadProblems">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-card-title>{{ problemSet.title }}</v-card-title>
            <v-card-text>{{ problemSet.description }}</v-card-text>
          </v-col>

          <v-col cols="auto">
            <v-row class="flex-column" justify="center">
              <v-col>x/y completed</v-col>
              <v-col>arrow</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-row v-show="showProblems">
      <v-card
        v-on:click="problemClicked(problem)"
        v-bind:key="index"
        hover
        v-for="(problem, index) of problems"
      >
        <v-container>
          <v-card-title>{{ problem.title }}</v-card-title>
          <v-card-text>
            {{ problem.source }}
            {{ problem.problemMetadata.platformProblemId }}
            {{ problem.problemMetadata.difficulty }}
          </v-card-text>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { api } from "@/gateways/wisp-api";

export default {
  name: "DashboardProblemSet",
  props: {
    problemSet: Object
  },
  data: () => {
    return {
      showProblems: false,
      problems: null
    };
  },
  methods: {
    loadProblems: async function() {
      if (this.problems == null) {
        const response = await api.get(
          `/problemSets/${this.problemSet._id}?includeProblems=true`
        );
        this.problems = response.data.problems;
      }
      this.showProblems = !this.showProblems;
    },
    problemClicked: problem => {
      window.open(problem.sourceLink, "_blank");
    }
  }
};
</script>
