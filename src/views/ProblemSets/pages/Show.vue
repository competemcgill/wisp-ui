<template>
  <div class="problemSet">
    <v-container class="my-5" v-if="!problemSet.title">
      <v-row align="center" class="mr-3">
        <v-col cols="12" sm="8">
          <h1 class="my-5 display-1 black--text text-uppercase">
            {{ $t("problem-set-does-no-exist") }}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="my-5" v-if="problemSet.title">
      <v-dialog
        v-if="$store.state.user.role === 'ADMIN'"
        v-model="deleteDialogue"
        max-width="500"
      >
        <v-card class="py-3 px-5">
          <h1 class="subtitle-1 mb-5">
            {{ $t("delete-dialogue") }}
          </h1>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              :loading="deleteLoading"
              @click="deleteProblemSet(problemSet._id)"
              class="primary"
            >
              {{ $t("yes") }}
            </v-btn>

            <v-btn text @click="deleteDialogue = false" class="primart--text">
              {{ $t("no") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-row align="center" class="mr-3">
        <v-col cols="12" sm="8">
          <h1 class="my-5 display-1 font-weight-light">
            {{ problemSet.title }}
            <v-btn
              v-if="$store.state.user.role === 'ADMIN'"
              text
              :loading="deleteLoading"
              @click="deleteDialogue = true"
              class="mb-2"
            >
              <v-icon class="primary--text">mdi-delete</v-icon>
            </v-btn>
          </h1>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="font-weight-regular primary--text text-right"
          >{{ completed }}/{{
            problemSet.problemCount ? problemSet.problemCount : "0"
          }}
          {{ $t("completed") }}</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" sm="4">
          <v-col cols="12">
            <problem-set-info :data="problemSet" />
          </v-col>
        </v-col>
        <v-col cols="12" sm="8">
          <v-col cols="12" v-for="(problem, index) in problems" :key="index">
            <problem-info :problem="problem" />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProblemSetInfo from "../components/ProblemSetInfo";
import ProblemInfo from "../components/ProblemInfo";

export default {
  name: "ProblemSet",

  components: {
    "problem-set-info": ProblemSetInfo,
    "problem-info": ProblemInfo
  },

  data() {
    return {
      problemSet: {},
      problems: [],
      completed: 0,
      deleteLoading: false,
      deleteDialogue: false
    };
  },

  async created() {
    const problemSets = this.$store.state.problemSets.filter(problemSet => {
      return problemSet._id === this.$route.params.id;
    });

    this.problemSet =
      problemSets && problemSets.length > 0 ? problemSets[0] : {};
    this.problems =
      this.problemSet && this.problemSet.problems
        ? this.problemSet.problems
        : [];

    for (let userProblem of this.$store.state.user.problems) {
      for (let problem of this.problems) {
        if (userProblem.problemId == problem.problemId) {
          problem.userProblem = userProblem;
          if (userProblem.status == "OK") {
            this.completed++;
          }
        }
      }
    }
  },

  methods: {
    async deleteProblemSet(id) {
      this.deleteLoading = true;
      try {
        this.$store.dispatch("problems/deleteProblemSet", id);
        this.$router.push("/problemSets", () => {
          this.deleteLoading = false;
          this.deleteDialogue = false;
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.deleteLoading = false;
        this.deleteDialogue = false;
      }
    }
  }
};
</script>
