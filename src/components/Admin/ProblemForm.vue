<template>
  <v-row class="my-5 py-5">
    <v-col cols="12" sm="6" class="my-5 py-5">
      <v-row>
        <v-col cols="12" class="pt-0">
          <v-card class="py-3 px-5">
            <v-text-field
              name="title"
              class="mb-3"
              label="Title"
              v-model="problem.title"
              prepend-icon="mdi-text-short"
            ></v-text-field>

            <v-autocomplete
              name="platform"
              class="mb-3"
              label="Platform"
              v-model="problem.source"
              :items="['CODEFORCES', 'OTHER']"
              prepend-icon="mdi-text-short"
            ></v-autocomplete>

            <v-text-field
              name="platformId"
              class="mb-3"
              label="Platform ID"
              v-model="problem.platformId"
              hint="<contest ID><problem ID> e.g. 125G"
              prepend-icon="mdi-text-short"
            ></v-text-field>

            <v-text-field
              name="link"
              class="mb-3"
              label="Link"
              v-model="problem.sourceLink"
              prepend-icon="mdi-text-short"
            ></v-text-field>

            <v-autocomplete
              name="difficulty"
              class="mb-3"
              label="Difficulty"
              v-model="problem.difficulty"
              :items="['easy', 'medium', 'hard']"
              prepend-icon="mdi-text-short"
            ></v-autocomplete>

            <v-combobox
              multiple
              v-model="problem.problemSetIds"
              label="Problem Sets"
              append-icon
              chips
              deletable-chips
              prepend-icon="mdi-tag"
            ></v-combobox>

            <v-btn
              text
              :disabled="!addRestriction"
              @click="addProblemToQueue()"
              class="background mx-0 mt-3 primary--text text-uppercase"
              >add</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2">
          <v-btn
            :loading="loading"
            :disabled="problems.length == 0"
            @click="submitProblems()"
            class="mt-3 mr-5 primary text-uppercase"
            >submit</v-btn
          >
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn
            text
            @click="clearForms()"
            class="mt-3 primary--text text-uppercase mx-5"
            >clear</v-btn
          >
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" sm="6" class="my-5 py-5">
      <v-card class="py-3 px-5">
        <h1 class="primary--text headline" v-if="problems.length == 0">
          No Problems in Queue
        </h1>
        <v-row v-for="(p, index) in problems" :key="index">
          <v-col cols="12" class="py-0">
            <v-row>
              <v-col cols="10">
                <h1>
                  <span class="title primary--text">ID: </span
                  ><span class="subtitle-1 grey--text">{{ p._id }}</span>
                </h1>
              </v-col>
              <v-col cols="2">
                <v-btn
                  text
                  @click="removeProblemFromQueue(p._id, index)"
                  class="mt-4"
                >
                  <v-icon class="primary--text">mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pt-0">
                <h1>
                  <span class="title primary--text text-truncate"
                    >Title: </span
                  ><span class="subtitle-1 grey--text">{{ p.title }}</span>
                </h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="py-0">
                <h1>
                  <span class="title primary--text text-truncate"
                    >Platform: </span
                  ><span class="subtitle-1 grey--text">{{ p.source }}</span>
                </h1>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { api } from "@/gateways/wisp-api";
import { eventBus } from "@/store/eventBus";

export default {
  name: "AdminProblemForm",

  computed: {
    addRestriction() {
      return (
        this.problem.title.length > 0 &&
        this.problem.source.length > 0 &&
        this.problem.sourceLink.length > 0 &&
        this.problem.difficulty.length > 0 &&
        this.problem.platformId.length > 0 &&
        this.problem.problemSetIds.length > 0
      );
    }
  },

  data() {
    return {
      problem: {
        title: "",
        source: "",
        sourceLink: "",
        difficulty: "",
        platform: "",
        platformId: "",
        problemSetIds: "",
        _id: "Not Submitted"
      },
      problems: [],
      loading: false
    };
  },

  methods: {
    addProblemToQueue() {
      this.problems.push(this.problem);
      this.problem = {
        title: "",
        source: "",
        sourceLink: "",
        difficulty: "",
        platform: "",
        platformId: "",
        problemSetIds: "",
        _id: "Not Submitted"
      }
    },

    async removeProblemFromQueue(id, index) {
      if (id !== "Not Submitted") {
        try {
          await api.delete(`/problems/${id}`, {
            headers: {
              Authorization: this.$store.state.token
            }
          });

          eventBus.$emit("REFRESH_PROBLEMS");
        } catch (err) {
          console.log(err);
          return;
        }
      }
      this.problems = this.problems
        .slice(0, index)
        .concat(this.problems.slice(index + 1, this.problems.length));
    },

    async submitProblems() {
      this.loading = true;

      try {
        for (const [index, p] of this.problems.entries()) {
          const { data } = await api.post("/problems", {
            title: p.title,
            source: p.source,
            sourceLink: p.sourceLink,
            problemSetIds: p.problemSetIds,
            problemMetadata: {
              platformProblemId: p.platformId,
              difficulty: p.difficulty
            }
          }, {
            headers: {
              Authorization: this.$store.state.token
            }
          });

          this.problems[index] = data;
        }

        eventBus.$emit("REFRESH_PROBLEMS");
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },

    clearForms() {
      this.problem = {
        title: "",
        source: "",
        sourceLink: "",
        difficulty: "",
        platform: "",
        platformId: "",
        problemSetIds: "",
        _id: "Not Submitted"
      }
      this.problems = [];
    }
  }
};
</script>
