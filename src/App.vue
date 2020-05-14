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
import { api } from "@/gateways/wisp-api";

export default {
  name: "App",

  components: {
    "app-navbar": Navbar
  },

  async mounted() {
    if (this.$store.state.problemSets === null) {
      const response = await api.get("/problemSets", {
        headers: {
          Authorization: this.$store.state.token
        }
      });
      const problemSets = response.data;
      this.$store.dispatch("setProblemSets", problemSets);
    }
  },

  data: () => ({
    //
  })
};
</script>
