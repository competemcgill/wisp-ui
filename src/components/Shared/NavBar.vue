<template>
  <nav>
    <v-toolbar app class="background">
      <v-btn icon router to="/" color="white" class="hidden-xs-only ml-3">
        <v-icon x-large>$vuetify.icons.cp-logo</v-icon>
      </v-btn>
      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light display-1">WISP</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

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
        class="offset-y primary--text"
        >dashboard</v-btn
      >

      <v-btn
        text
        tile
        router
        to="/problemSets"
        min-height="115%"
        class="offset-y primary--text"
        >problem sets</v-btn
      >

      <v-btn
        text
        tile
        router
        to="/problems"
        min-height="115%"
        class="offset-y primary--text"
        >problems</v-btn
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
      <v-menu offset-y>
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
        </v-list>
      </v-menu>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      profileDropdownItems: [
        {
          title: "profile",
          link: "/profile"
        },
        {
          title: "settings",
          link: "/settings"
        },
        {
          title: "logout",
          link: "/logout"
        }
      ]
    };
  }
};
</script>
