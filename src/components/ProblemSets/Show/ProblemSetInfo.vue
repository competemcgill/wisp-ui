<template>
  <v-card class="py-3 px-5">
    <v-row>
      <v-col>
        {{ data.description }}
      </v-col>
      <v-col class="text-right">
        <v-btn
          :loading="loading"
          @click="checkTrackedProblemSet() ? untrack() : track()"
          class="primary text-uppercase mr-2"
        >
          {{ trackBtnTxt }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-chip-group column>
          <v-chip label v-for="(tag, index) in data.tags" :key="index">{{
            tag
          }}</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="caption grey--text text-right">
        {{ data._id }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { api } from "@/gateways/wisp-api";

export default {
  name: "ProblemSetProblemSetInfo",

  props: ["data"],

  data() {
    return {
      loading: false,
      trackBtnTxt: this.checkTrackedProblemSet() ? "untrack" : "track"
    };
  },

  methods: {
    checkTrackedProblemSet() {
      for (const problemSetId of this.$store.state.user.problemSets) {
        if (problemSetId == this.$route.params.id) return true;
      }
      return false;
    },

    async track() {
      try {
        this.loading = true;
        const { data } = await api.patch(
          "/users/" + this.$store.state.user._id + "/problemSets",
          {
            problemSetId: this.$route.params.id
          },
          {
            headers: {
              Authorization: this.$store.state.token
            }
          }
        );
        this.$store.dispatch("setUser", data);
        this.trackBtnTxt = "untrack";
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    },

    async untrack() {
      try {
        this.loading = true;
        const { data } = await api.get(`/users/${this.$store.state.user._id}`, {
          headers: {
            Authorization: this.$store.state.token
          }
        });
        data.problemSets = data.problemSets.filter(
          problemSet => problemSet != this.$route.params.id
        );
        this.$store.dispatch("setUser", data);
        this.trackBtnTxt = "track";
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
