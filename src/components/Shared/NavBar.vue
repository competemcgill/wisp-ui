<!-- TODO: Implement logout functionality + conditional sign up and login buttons -->
<template>
  <nav>
    <v-app-bar app class="background">
      <v-app-bar-nav-icon
        v-if="mobileView"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-btn icon router to="/" color="white" class="ml-3">
        <v-icon x-large>$vuetify.icons.cp-logo</v-icon>
      </v-btn>

      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light display-1">WISP</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-item-group v-if="!mobileView">
        <v-btn
          text
          tile
          router
          to="/"
          min-height="115%"
          class="offset-y primary--text"
          >home</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/dashboard"
          min-height="115%"
          v-if="$store.state.isLoggedIn"
          class="offset-y primary--text"
          >dashboard</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/problemSets"
          min-height="115%"
          v-if="$store.state.isLoggedIn"
          class="offset-y primary--text"
          >problem sets</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/problems"
          min-height="115%"
          v-if="$store.state.isLoggedIn"
          class="offset-y primary--text"
          >problems</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/admin"
          min-height="115%"
          v-if="$store.state.isLoggedIn && $store.state.user.role === 'ADMIN'"
          class="offset-y primary--text"
          >admin</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/about"
          min-height="115%"
          class="offset-y primary--text"
          >about</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/login"
          min-height="115%"
          v-if="!$store.state.isLoggedIn"
          class="offset-y primary--text"
          >login</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/signup"
          min-height="115%"
          v-if="!$store.state.isLoggedIn"
          class="offset-y primary--text"
          >register</v-btn
        >
      </v-item-group>
      <v-menu offset-y v-if="$store.state.isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
            min-height="115%"
            class="offset-y primary--text"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in profileDropdownItems"
            :key="index"
            class="ma-0 pa-0"
          >
            <v-btn router text block :to="item.link" class="primary--text">
              {{ item.title }}
            </v-btn>
          </v-list-item>
          <v-list-item class="ma-0 pa-0">
            <v-btn text block @click="logout()" class="primary--text"
              >Logout</v-btn
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense nav>
        <v-list-item-group
          v-model="group"
          active-class="offset-y primary--text"
        >
          <v-list-item to="/">
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title>ABOUT</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="$store.state.isLoggedIn" to="/dashboard">
            <v-list-item-title>DASHBOARD</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="$store.state.isLoggedIn" to="/problemsets">
            <v-list-item-title>PROBLEM SETS</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="$store.state.isLoggedIn" to="/problems">
            <v-list-item-title>PROBLEMS</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!$store.state.isLoggedIn" to="/login">
            <v-list-item-title>LOGIN</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!$store.state.isLoggedIn" to="/signup">
            <v-list-item-title>REGISTER</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      drawer: false,
      group: null,
      mobileView: this.$vuetify.breakpoint.mdAndDown,
      profileDropdownItems: [
        {
          title: "profile",
          link: "/profile"
        },
        {
          title: "settings",
          link: "/settings"
        }
      ]
    };
  },

  watch: {
    group() {
      this.drawer = false;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push("/login");
    }
  }
};
</script>
