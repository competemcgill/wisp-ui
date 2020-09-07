<template>
  <div class="login">
    <v-container class="my-5">
      <h1 class="my-5 display-1 font-weight-light">
        {{ $t("login") }}
      </h1>
      <v-row class="my-5 py-5">
        <v-col cols="0" sm="3"></v-col>

        <v-col cols="12" sm="6" class="my-5 py-5">
          <v-text-field
            type="email"
            name="email"
            class="mb-3"
            :label="$t('email')"
            width="50%"
            :rules="emailRules"
            @keyup.enter="login"
            v-model="user.email"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            name="password"
            class="mb-3"
            :label="$t('password')"
            width="50%"
            v-model="user.password"
            @keyup.enter="login"
            prepend-icon="mdi-key"
            required
          ></v-text-field>

          <div class="primary--text" v-html="error"></div>

          <v-btn
            text
            :loading="loading"
            @click="login"
            class="background mx-0 mt-3 primary--text text-uppercase"
            >{{ $t("login") }}</v-btn
          >
        </v-col>

        <v-col cols="0" sm="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { api } from "@/gateways/wisp-api";
import { eventBus } from "@/store/eventBus";

export default {
  name: "Login",

  data() {
    return {
      error: "",
      loading: false,
      user: {
        email: "",
        password: ""
      },
      emailRules: [
        v =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },

  methods: {
    async login() {
      this.loading = true;
      try {
        const { data } = await api.post("/auth/login", {
          email: this.user.email,
          password: this.user.password
        });
        this.$store.dispatch("setToken", data.token);
        this.$store.dispatch("setUser", data.user);
        eventBus.$emit("LOGIN_SUCCESS");
        eventBus.$on("GLOBAL_DATA_FETCH_SUCCESS", () => {
          this.$router.push("/dashboard", () => {
            this.loading = false;
          });
        });
      } catch (err) {
        this.error = err.response.data.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
