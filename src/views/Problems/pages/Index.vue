<template>
  <div class="problems">
    <v-container class="my-5">
      <v-dialog
        v-if="$store.state.user.role === 'ADMIN'"
        v-model="deleteDialogue"
        max-width="500"
      >
        <v-card class="py-3 px-5">
          <h1 class="subtitle-1 mb-5">
            Are you sure you want to delete this problem set?
          </h1>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="deleteProblem(problemToDeleteId)" class="primary">
              yes
            </v-btn>

            <v-btn text @click="deleteDialogue = false" class="primart--text">
              no
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-row>
        <v-col cols="12" sm="8">
          <h1 class="my-5 display-1 font-weight-light">
            Problems
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

        <v-col cols="0" sm="1"></v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            name="search"
            label="Search"
            v-model="search"
            prepend-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-card>
        <v-data-table :headers="headers" :items="filteredProblems">
          <template v-slot:item.actions="{ item }">
            <v-btn fab small text class="primary--text">
              <v-icon @click="linkClicked(item)">mdi-open-in-new</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              v-if="$store.state.user.role === 'ADMIN'"
              text
              @click="openDeleteDialogue(item._id)"
            >
              <v-icon class="primary--text">mdi-delete</v-icon>
            </v-btn>
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
import { eventBus } from "@/store/eventBus";

export default {
  name: "Problems",

  data: () => {
    return {
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: true,
          value: "title",
          class: "subtitle-1 font-weight-regular white--text"
        },
        {
          text: "Difficulty",
          align: "start",
          sortable: true,
          value: "difficulty",
          class: "subtitle-1 font-weight-regular white--text"
        },
        {
          text: "Platform",
          align: "start",
          sortable: true,
          value: "platform",
          class: "subtitle-1 font-weight-regular white--text"
        },
        {
          text: "Actions",
          align: "start",
          sortable: false,
          value: "actions",
          class: "subtitle-1 font-weight-regular white--text"
        }
      ],
      problems: [],
      problemsTable: [],
      refreshLoading: false,
      deleteDialogue: false,
      problemToDeleteId: "",
      search: ""
    };
  },

  mounted() {
    this.problems = this.$store.state.problems;
    this.populateTableData();
  },

  computed: {
    filteredProblems() {
      return this.problemsTable.filter(problem => {
        return (
          problem.title.toLowerCase().includes(this.search.toLowerCase()) ||
          problem.platform.toLowerCase().includes(this.search.toLowerCase()) ||
          problem.difficulty.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },

  methods: {
    async deleteProblem(id) {
      try {
        await api.delete(`/problems/${id}`, {
          headers: {
            Authorization: this.$store.state.token
          }
        });

        eventBus.$emit("REFRESH_PROBLEMS");
        eventBus.$on("REFRESH_PROBLEMS_SUCCESS", () => {
          this.problems = this.$store.state.problems;
          this.populateTableData();
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.deleteDialogue = false;
      }
    },

    openDeleteDialogue(id) {
      this.problemToDeleteId = id;
      this.deleteDialogue = true;
    },

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
        this.problems = data;
        this.$store.dispatch("setProblems", data);
        this.populateTableData();
      } catch (err) {
        console.log(err);
      } finally {
        this.refreshLoading = false;
      }
    },

    populateTableData() {
      this.problemsTable = [];
      for (const problem of this.problems) {
        this.problemsTable.push({
          title: problem.title,
          difficulty: problem.problemMetadata.difficulty,
          platform: this.capitalizeFirstLetter(problem.source.toLowerCase()),
          link: problem.sourceLink,
          _id: problem._id
        });
      }
    }
  }
};
</script>

<style scoped>
.v-data-table >>> thead tr th {
  background-color: #8f1d14 !important;
}
</style>
