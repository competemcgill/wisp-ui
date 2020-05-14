<template>
  <v-app>
    <app-navbar />
    <v-content class="ma-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Shared/NavBar";

export default {
  name: "App",

  components: {
    "app-navbar": Navbar
  },

  async mounted() {
    if (this.$store.state.problemSets === null) {
      const response = await api.get("/problemSets");
      const problemSets = response.data;
      this.$store.dispatch("setProblemSets", problemSets);
    }
  },

  data: () => ({
    //
  })
};
</script>
