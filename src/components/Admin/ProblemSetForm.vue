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
              v-model="problemSet.title"
              prepend-icon="mdi-text-short"
            ></v-text-field>

            <v-textarea
              name="description"
              class="mb-3"
              label="Description"
              v-model="problemSet.description"
              prepend-icon="mdi-text-subject"
            ></v-textarea>

            <v-combobox
              multiple
              v-model="problemSet.tags"
              label="Tags"
              append-icon
              chips
              deletable-chips
              prepend-icon="mdi-tag"
            ></v-combobox>

            <v-btn
              text
              :disabled="!addRestriction"
              @click="addProblemSetToQueue()"
              class="background mx-0 mt-3 primary--text text-uppercase"
              >add</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <div class="primary--text" v-html="error"></div>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2">
          <v-btn
            :loading="loading"
            :disabled="problemSets.length == 0"
            @click="submitProblemSets()"
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
        <h1 class="primary--text headline" v-if="problemSets.length == 0">
          No Problem Sets in Queue
        </h1>
        <v-row v-for="(ps, index) in problemSets" :key="index">
          <v-col cols="12" class="py-0">
            <v-row>
              <v-col cols="10">
                <h1>
                  <span class="title primary--text">ID: </span
                  ><span class="subtitle-1 grey--text">{{ ps._id }}</span>
                </h1>
              </v-col>
              <v-col cols="2">
                <v-btn
                  text
                  @click="removeProblemSetFromQueue(ps._id, index)"
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
                  ><span class="subtitle-1 grey--text">{{ ps.title }}</span>
                </h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="py-0">
                <h1>
                  <span class="title primary--text text-truncate"
                    >Description: </span
                  ><span class="subtitle-1 grey--text">{{ ps.description }}</span>
                </h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h1><span class="title primary--text">Tags: </span></h1>
                <v-chip-group column>
                  <v-chip label v-for="(tag, index) in ps.tags" :key="index">
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
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
        this.problemSet.title.length > 0 &&
        this.problemSet.description.length > 0 &&
        this.problemSet.tags.length > 0
      );
    }
  },

  data() {
    return {
      problemSet: {
        title: "",
        description: "",
        tags: [],
        _id: "Not Submitted"
      },
      problemSets: [],
      loading: false,
      error: ""
    };
  },

  methods: {
    addProblemSetToQueue() {
      this.problemSets.push(this.problemSet);
      this.problemSet = {
        title: "",
        description: "",
        tags: [],
        _id: "Not Submitted"
      };
    },

    async removeProblemSetFromQueue(id, index) {
      if (id !== "Not Submitted") {
        try {
          await api.delete(`/problemSets/${id}`, {
            headers: {
              Authorization: this.$store.state.token
            }
          });

          eventBus.$emit("REFRESH_PROBLEMSETS");
        } catch (err) {
          this.error = err.response.data.message;
          return;
        }
      }
      this.problemSets = this.problemSets
        .slice(0, index)
        .concat(this.problemSets.slice(index + 1, this.problemSets.length));
    },

    async submitProblemSets() {
      this.loading = true;

      try {
        for (const [index, problemSet] of this.problemSets.entries()) {
          const { data } = await api.post("/problemSets", {
            title: problemSet.title,
            description: problemSet.description,
            tags: problemSet.tags
          }, {
            headers: {
              Authorization: this.$store.state.token
            }
          });

          this.problemSets[index] = data;
        }

        eventBus.$emit("REFRESH_PROBLEMSETS");
      } catch (err) {
        this.error = err.response.data.message;
      } finally {
        this.loading = false;
      }
    },

    clearForms() {
      this.problemSet = {
        title: "",
        description: "",
        tags: [],
        _id: "Not Submitted"
      }
      this.problemSets = [];
      this.error = "";
    }
  }
};
</script>
