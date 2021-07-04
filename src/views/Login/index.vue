<template>
  <div class="login">
    <v-container class="my-5">
      <v-form v-model="loginDisabled">
        <h1 class="my-5 display-1 font-weight-light">Login</h1>
        <v-row class="my-5 py-5">
          <v-col cols="0" sm="3"></v-col>

          <v-col cols="12" sm="6" class="my-5 py-5">
            <v-text-field
              type="email"
              name="email"
              class="mb-3"
              label="Email"
              width="50%"
              :rules="[emailRules]"
              @keyup.enter="onEnter"
              v-model="user.email"
              prepend-icon="mdi-account"
              required
            ></v-text-field>

            <v-text-field
              type="password"
              name="password"
              class="mb-3"
              label="Password"
              width="50%"
              :rules="[passwordRules]"
              @keyup.enter="onEnter"
              v-model="user.password"
              prepend-icon="mdi-key"
              required
            ></v-text-field>

            <div class="primary--text" v-html="error"></div>

            <v-btn
              text
              :loading="loading"
              :disabled="!loginDisabled"
              @click="login"
              class="background mx-0 mt-3 primary--text text-uppercase"
              >login</v-btn
            >
          </v-col>

          <v-col cols="0" sm="3"></v-col>
        </v-row>
      </v-form>
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
      loginDisabled: false,
      user: {
        email: "",
        password: ""
      }
    };
  },

  computed: {
    onEnter() {
      return this.loginDisabled ? this.login : null;
    }
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
    },

    emailRules(v) {
      if (!v || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
        return "E-mail must be valid";
      } else {
        return true;
      }
    },

    passwordRules(v) {
      if (!v || v.length < 6) {
        return "Password must be valid";
      } else {
        return true;
      }
    }
  }
};
</script>
