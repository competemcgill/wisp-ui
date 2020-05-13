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
    const res = await api.get("/problems");
    console.log(res);
  },

  data: () => ({
    //
  })
};
</script>
