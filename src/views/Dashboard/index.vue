<!-- TODO: give problem-set and stats appropriate props -->
<template>
  <div class="dashbaord">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">my sets</h1>
      <v-row>
        <v-col xs="12" sm="9" class="pl-0">
          <v-col v-for="index in 5" :key="index" sm="12">
            <problem-set />
          </v-col>
        </v-col>
        <v-col xs="12" sm="3">
          <v-col sm="12">
            <stats />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProblemSet from "@/components/Dashboard/ProblemSet";
import Stats from "@/components/Dashboard/Stats";

export default {
  name: "Dashboard",

  components: {
    "problem-set": ProblemSet,
    stats: Stats
  },

  data: () => {
    return {
      //
    };
  }
};
</script>
