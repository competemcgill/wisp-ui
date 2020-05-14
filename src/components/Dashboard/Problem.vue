<!-- TODO: implement Problem card for Dashboard view -->
<template>
  <v-card v-on:click="problemClicked(problem)" hover>
    <v-container>
      <v-card-title>{{ problem.title }}</v-card-title>
      <v-card-text>
        {{ problem.source }}
        {{ problem.problemMetadata.platformProblemId }}
        {{ problem.problemMetadata.difficulty }}
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "DashboardProblem",

  props: {
    problem: Object
  },

  methods: {
    problemClicked: problem => {
      window.open(problem.sourceLink, "_blank");
    }
  }
};
</script>
