<template>
  <div class="admin">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">
        admin
      </h1>
      <v-tabs background-color="white" color="primary" right>
        <v-tab>Problem Sets</v-tab>
        <v-tab>Problems</v-tab>

        <v-tab-item>
          <v-container fluid>
            <problemset-form />
          </v-container>
        </v-tab-item>

        <v-tab-item>
          <v-container fluid>
            <problem-form />
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import ProblemSetForm from "@/components/Admin/ProblemSetForm";
import ProblemForm from "@/components/Admin/ProblemForm";

export default {
  name: "Admin",

  components: {
    "problemset-form": ProblemSetForm,
    "problem-form": ProblemForm
  }
};
</script>
