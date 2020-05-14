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
      <v-card-text :style="{color: statusColor}">{{ status }}</v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "DashboardProblem",

  props: {
    problem: Object
  },

  data: () => {
    return {
      userProblem: null,
      status: "NOT_ATTEMPTED",
      statusColor: "red"
    };
  },

  mounted() {
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

  methods: {
    problemClicked: problem => {
      window.open(problem.sourceLink, "_blank");
    }
  }
};
</script>
