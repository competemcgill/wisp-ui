<template>
  <div class="ProblemSets">
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="8">
          <h1 class="my-5 display-1 font-weight-light">
            Problem Sets
            <v-btn
              text
              :loading="refreshLoading"
              @click="reloadProblemSets()"
              class="primary--text mb-2"
            >
              <v-icon>mdi-autorenew</v-icon>
            </v-btn>
          </h1>
        </v-col>

        <v-col cols="0" sm="1"></v-col>

        <v-col cols="12" sm="2">
          <v-text-field
            name="search"
            label="Search"
            v-model="search"
            prepend-icon="mdi-magnify"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="1" class="text-right">
          <v-menu offset-y v-if="$store.state.isLoggedIn">
            <template v-slot:activator="{ on }">
              <v-btn
                small
                v-on="on"
                depressed
                class="incomplete white--text mt-5 mr-3"
              >
                sort
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-btn text small @click="sortBy('title', 'asc', 'string')"
                  >title</v-btn
                >
              </v-list-item>
              <v-list-item>
                <v-btn text small @click="sortBy('createdAt', 'des', 'date')"
                  >newest</v-btn
                >
              </v-list-item>
              <v-list-item>
                <v-btn text small @click="sortBy('createdAt', 'asc', 'date')"
                  >oldest</v-btn
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(problemSet, index) in filteredProblemSets"
          :key="index"
        >
          <problem-set :data="problemSet" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { api } from "@/gateways/wisp-api";
import { eventBus } from "@/store/eventBus";
import ProblemSet from "@/components/ProblemSets/Index/ProblemSet";

export default {
  name: "ProblemSets",

  components: {
    "problem-set": ProblemSet
  },

  data() {
    return {
      problemSets: this.$store.state.problemSets,
      search: "",
      refreshLoading: false
    };
  },

  created() {
    eventBus.$on("REFRESH_PROBLEMSETS_SUCCESS", () => {
      this.problemSets = this.$store.state.problemSets;
    });

    eventBus.$on("REFRESH_PROBLEMS_SUCCESS", () => {
      this.problemSets = this.$store.state.problemSets;
    });
  },

  computed: {
    filteredProblemSets() {
      return this.problemSets.filter(problemSet => {
        let tagSearch = false;
        for (const tag of problemSet.tags) {
          if (tag.toLowerCase().includes(this.search)) tagSearch = true;
        }

        return (
          tagSearch ||
          problemSet.title.toLowerCase().includes(this.search.toLowerCase()) ||
          problemSet.description
            .toLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
    }
  },

  methods: {
    async reloadProblemSets() {
      this.refreshLoading = true;
      try {
        const { data } = await api.get("/problemSets?includeProblems=true", {
          headers: {
            Authorization: this.$store.state.token
          }
        });

        this.problemSets = data;
        this.$store.dispatch("setProblemSets", data);
      } catch (err) {
        console.log(err);
      } finally {
        this.refreshLoading = false;
      }
    },

    sortBy(prop, order, type) {
      switch (order) {
        case "asc":
          this.problemSets.sort((a, b) =>
            this.parseSortType(a[prop], type) <
            this.parseSortType(b[prop], type)
              ? -1
              : 1
          );
          break;
        case "des":
          this.problemSets.sort((a, b) =>
            this.parseSortType(a[prop], type) >
            this.parseSortType(b[prop], type)
              ? -1
              : 1
          );
          break;
        default:
          this.problemSets.sort((a, b) =>
            this.parseSortType(a[prop], type) <
            this.parseSortType(b[prop], type)
              ? -1
              : 1
          );
      }
    },

    parseSortType(prop, type) {
      switch (type) {
        case "string":
          return prop.toUpperCase();
        case "date":
          return new Date(prop);
        default:
          return prop;
      }
    }
  }
};
</script>
