<template>
  <div class="problemSet">
    <v-container class="my-5">
      <v-row align="center">
        <v-col col="12" sm="8">
          <h1 class="my-5 display-1 black--text text-uppercase">
            {{ problemSet.title }}
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4">
          <v-col cols="12">
            <problem-set-info :data="problemSet" />
          </v-col>
        </v-col>
        <v-col cols="12" sm="8">
          <v-col
            cols="12"
            v-for="(problem, index) in problemSet.problems"
            :key="index"
          >
            <problem-info :problem="problem" />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { api } from "@/gateways/wisp-api";
import ProblemSetInfo from "@/components/ProblemSets/Show/ProblemSetInfo";
import ProblemInfo from "@/components/ProblemSets/Show/ProblemInfo";

export default {
  name: "ProblemSet",

  components: {
    "problem-set-info": ProblemSetInfo,
    "problem-info": ProblemInfo
  },

  data() {
    return {
      problemSet: {}
    };
  },

  async created() {
    try {
      const { data } = await api.get(
        `/problemSets/${this.$route.params.id}?includeProblems=true`,
        {
          headers: {
            Authorization: this.$store.state.token
          }
        }
      );

      this.problemSet = data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
