<template>
  <div class="dashboard">
    <v-container class="my-5">
      <h1 class="my-5 display-1 font-weight-light">
        {{ $t("my-sets") }}
        <v-btn
          text
          :loading="refreshLoading"
          @click="reloadUser()"
          class="primary--text mb-2"
        >
          <v-icon>mdi-autorenew</v-icon>
        </v-btn>
      </h1>
      <v-row v-if="problemSets.length == 0">
        <v-col cols="12" class="primary--text title"
          >{{ $t("no-tracked-sets") }}
        </v-col>
        <v-col cols="12">
          <v-btn router to="/problemSets" class="primary">{{
            $t("problem-sets")
          }}</v-btn>
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
import ProblemSet from "./components/ProblemSet";
import Stats from "./components/Stats";
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
      refreshLoading: false
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
    }
  }
};
</script>
