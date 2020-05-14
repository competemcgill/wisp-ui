<template>
  <v-app>
    <app-navbar />
    <v-content class="ma-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { api } from "@/gateways/wisp-api";
import { eventBus } from "@/store/eventBus";
import Navbar from "@/components/Shared/NavBar";

export default {
  name: "App",

  components: {
    "app-navbar": Navbar
  },

  async created() {
    if (this.$store.state.token) await this.getProblemSets();

    eventBus.$on("LOGIN_SUCCESS", () => {
      this.getProblemSets();
    });
  },

  methods: {
    async getProblemSets() {
      const response = await api.get("/problemSets?includeProblems=true", {
        headers: {
          Authorization: this.$store.state.token
        }
      });
      const problemSets = response.data;
      this.$store.dispatch("setProblemSets", problemSets);
    }
  }
};
</script>
