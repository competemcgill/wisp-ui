<template>
  <v-card class="py-3 px-5">
    <v-row>
      <v-col>
        {{ data.description }}
      </v-col>
      <v-col class="text-right">
        <v-btn
          :loading="loading"
          :disabled="checkTrackedProblemSet()"
          @click="track()"
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
export default {
  name: "ProblemSetProblemSetInfo",

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      loading: false,
      trackBtnTxt: this.checkTrackedProblemSet() ? "tracked" : "track"
    };
  },

  methods: {
    checkTrackedProblemSet() {
      for (const problemSetId of this.$store.state.user.data.problemSets) {
        if (problemSetId == this.$route.params.id) return true;
      }

      return false;
    },

    async track() {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "user/trackProblemSet",
          this.$route.params.id
        );
        this.trackBtnTxt = "tracked";
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
