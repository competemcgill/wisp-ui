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
    if (this.$store.state.token) {
      await Promise.all([
        this.getProblemSets(),
        this.getProblems(),
        this.getUserData()
      ]);
      eventBus.$emit("GLOBAL_DATA_FETCH_SUCCESS");
    }

    eventBus.$on("LOGIN_SUCCESS", async () => {
      await Promise.all([
        this.getProblemSets(),
        this.getProblems(),
        this.updateUserProblems()
      ]);
      eventBus.$emit("GLOBAL_DATA_FETCH_SUCCESS");
    });

    eventBus.$on("REFRESH_PROBLEMSETS", async () => {
      await this.getProblemSets();
      eventBus.$emit("REFRESH_PROBLEMSETS_SUCCESS");
    });

    eventBus.$on("REFRESH_PROBLEMS", async () => {
      await this.getProblems();
      await this.getProblemSets();
      eventBus.$emit("REFRESH_PROBLEMS_SUCCESS");
    });

    eventBus.$on("REFRESH_USER", async () => {
      await this.getUserData();
      eventBus.$emit("REFRESH_USERS_SUCCESS");
    });
  },

  methods: {
    async getProblemSets() {
      const { data } = await api.get("/problemSets?includeProblems=true", {
        headers: {
          Authorization: this.$store.state.token
        }
      });

      this.$store.dispatch("setProblemSets", data);
    },

    async getProblems() {
      const { data } = await api.get("/problems", {
        headers: {
          Authorization: this.$store.state.token
        }
      });

      this.$store.dispatch("setProblems", data);
    },

    async getUserData() {
      const { data } = await api.get(`/users/${this.$store.state.user._id}`, {
        headers: {
          Authorization: this.$store.state.token
        }
      });

      this.$store.dispatch("setUser", data);
    },

    async updateUserProblems() {
      const { data } = await api.patch(
        `/users/${this.$store.state.user._id}/updateUserProblems`,
        {
          headers: {
            Authorization: this.$store.state.token
          }
        }
      );
      this.$store.dispatch("setUser", data);
    }
  }
};
</script>
