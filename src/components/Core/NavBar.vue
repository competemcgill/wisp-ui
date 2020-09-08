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

      <template v-if="!mobileView">
        <v-btn
          v-for="(navItem, index) of navItems"
          :key="index"
          text
          tile
          router
          :to="navItem.to"
          min-height="115%"
          class="offset-y primary--text"
        >
          {{ navItem.title }}
        </v-btn>
      </template>

      <v-menu offset-y v-if="$store.state.user.isLoggedIn">
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

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-list-item-group active-class="offset-y primary--text">
          <v-list-item
            v-for="(navItem, index) of navItems"
            :key="index"
            :to="navItem.to"
          >
            <v-list-item-title class="offset-y primary--text text-uppercase">{{
              navItem.title
            }}</v-list-item-title>
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

  computed: {
    navItems() {
      let items = [
        {
          title: this.$t("home"),
          to: "/"
        },
        {
          title: this.$t("about"),
          to: "about"
        }
      ];
      if (this.$store.state.user.isLoggedIn) {
        items = items.concat([
          {
            title: this.$t("dashboard"),
            to: "dashboard"
          },
          {
            title: this.$t("problems"),
            to: "problems"
          },
          {
            title: this.$t("problem-sets"),
            to: "problemSets"
          }
        ]);
        if (this.$store.state.user.role === "ADMIN") {
          items = items.concat([
            {
              title: this.$t("admin"),
              to: "admin"
            }
          ]);
        }
      } else {
        items = items.concat([
          {
            title: this.$t("login"),
            to: "login"
          },
          {
            title: this.$t("register"),
            to: "signup"
          }
        ]);
      }
      return items;
    },
    mobileView() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("user/logout", null);
      this.$router.push("/login");
    }
  }
};
</script>
