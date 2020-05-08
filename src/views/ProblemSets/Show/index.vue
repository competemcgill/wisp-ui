<!-- TODO: give problem-info and problem-set-info the appropriate props -->
<template>
  <div class="home">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">
        problem set title
      </h1>
      <v-row>
        <v-col cols="12" sm="4">
          <v-col cols="12">
            <problem-set-info />
          </v-col>
        </v-col>
        <v-col cols="12" sm="8">
          <v-col cols="12" v-for="index in 3" :key="index">
            <problem-info />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProblemSetInfo from "@/components/ProblemSets/Show/ProblemSetInfo";
import ProblemInfo from "@/components/ProblemSets/Show/ProblemInfo";

export default {
  name: "ProblemSet",
  components: {
    "problem-set-info": ProblemSetInfo,
    "problem-info": ProblemInfo
  }
};
</script>
