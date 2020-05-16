<template>
  <div class="problems">
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="8">
          <h1 class="my-5 display-1 black--text text-uppercase">
            problems
            <v-btn
              text
              :loading="refreshLoading"
              @click="reloadProblems()"
              class="primary--text mb-2"
            >
              <v-icon>mdi-autorenew</v-icon>
            </v-btn>
          </h1>
        </v-col>
      </v-row>
      <v-card>
        <v-data-table :headers="headers" :items="problemsTable">
          <template v-slot:item.link="{ item }">
            <v-icon small class="primary--text" @click="linkClicked(item)"
              >mdi-open-in-new</v-icon
            >
          </template>

          <template v-slot:item.difficulty="{ item }">
            <v-chip :color="difficultyColor(item.difficulty)" dark>{{
              item.difficulty
            }}</v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { api } from "@/gateways/wisp-api";

export default {
  name: "Problems",

  data: () => {
    return {
      problems: null,
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: true,
          value: "title",
          class: "subtitle-1 font-weight-regular primary--text"
        },
        {
          text: "Difficulty",
          align: "start",
          sortable: true,
          value: "difficulty",
          class: "subtitle-1 font-weight-regular primary--text"
        },
        {
          text: "Platform",
          align: "start",
          sortable: true,
          value: "platform",
          class: "subtitle-1 font-weight-regular primary--text"
        },
        {
          text: "Link",
          align: "start",
          sortable: false,
          value: "link",
          class: "subtitle-1 font-weight-regular primary--text"
        }
      ],
      problemsTable: [],
      refreshLoading: false
    };
  },

  mounted() {
    this.problems = this.$store.state.problems;
    this.problemsTable = [];
    for (const problem of this.problems) {
      this.problemsTable.push({
        title: problem.title,
        difficulty: problem.problemMetadata.difficulty,
        platform: this.capitalizeFirstLetter(problem.source.toLowerCase()),
        link: problem.sourceLink
      });
    }
  },

  methods: {
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
    },

    linkClicked(item) {
      window.open(item.link, "_blank");
    },

    capitalizeFirstLetter(input) {
      return input[0].toUpperCase() + input.slice(1);
    },

    async reloadProblems() {
      this.refreshLoading = true;
      try {
        const { data } = await api.get("/problems", {
          headers: {
            Authorization: this.$store.state.token
          }
        });
        this.problem = data;
        this.$store.dispatch("setProblems", data);
      } catch (err) { }
      finally {
        this.refreshLoading = false;
      }
    }
  }
};
</script>
