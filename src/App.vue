<template>
  <v-app>
    <app-navbar />
    <v-content class="ma-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Core/NavBar";

export default {
  name: "App",

  components: {
    "app-navbar": Navbar
  }
};
</script>
