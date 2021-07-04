<template>
  <div class="dashboard">
    <v-container class="my-5">
      <h1 class="my-5 display-1 font-weight-light">
        My Sets
        <v-btn
          text
          :loading="refreshLoading"
          @click="reloadUser()"
          class="primary--text mb-2"
        >
          <v-icon>mdi-autorenew</v-icon>
        </v-btn>
        <v-btn class="white--text primary" @click="resetDialog = true"
          >Reset Last Submission</v-btn
        >
      </h1>
      <div class="text-center">
        <v-dialog v-model="resetDialog" width="500">
          <v-card>
            <v-card-title class="white--text headline primary py-3 pl-5"
              >Warning</v-card-title
            >

            <v-card-text class="mt-5">
              Resetting your last submission is computationally intensive. Click
              reset last submission if you wish to proceed.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :loading="resetLoading"
                class="primary"
                @click="resetLastSubmission()"
                >Reset Last Submission</v-btn
              >
              <v-btn text @click="resetDialog = false" class="primary--text"
                >Cancel</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <v-row v-if="problemSets.length == 0">
        <v-col cols="12" class="primary--text title"
          >No tracked problem sets yet</v-col
        >
        <v-col cols="12">
          <v-btn router to="/problemSets" class="primary">problem sets</v-btn>
        </v-col>
      </v-row>
      <v-row v-if="problemSets.length > 0">
        <v-col cols="12" md="9" class="pl-0" v-if="problemSets != null">
          <v-col
            cols="12"
            v-for="(problemSet, index) of problemSets"
            :key="index"
          >
            <problem-set :problemSet="problemSet" />
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
import { api } from "@/gateways/wisp-api";
import ProblemSet from "@/components/Dashboard/ProblemSet";
import Stats from "@/components/Dashboard/Stats";
import { eventBus } from "@/store/eventBus";

export default {
  name: "Dashboard",

  components: {
    "problem-set": ProblemSet,
    stats: Stats
  },

  data: () => {
    return {
      problemSets: [],
      refreshLoading: false,
      resetLoading: false,
      resetDialog: false
    };
  },

  mounted() {
    this.filterProblemSets();
  },

  methods: {
    filterProblemSets() {
      this.problemSets = this.$store.state.problemSets.filter(
        problemSet =>
          this.$store.state.user.problemSets.indexOf(problemSet._id) !== -1
      );
    },

    async reloadUser() {
      this.refreshLoading = true;
      const { data } = await api.get(`/users/${this.$store.state.user._id}`, {
        headers: {
          Authorization: this.$store.state.token
        }
      });
      this.$store.dispatch("setUser", data);
      this.filterProblemSets();

      eventBus.$emit("REFRESH_USERS_SUCCESS");
      this.refreshLoading = false;
    },

    async resetLastSubmission() {
      this.resetLoading = true;
      const { data } = await api.patch(
        `/users/${this.$store.state.user._id}/resetLastSubmission`,
        {
          headers: {
            Authorization: this.$store.state.token
          }
        }
      );
      this.$store.dispatch("setUser", data);
      this.resetLoading = false;
      this.resetDialog = false;
    }
  }
};
</script>
