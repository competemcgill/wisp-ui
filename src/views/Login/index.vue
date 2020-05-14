<template>
  <div class="login">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase text-xs-center">
        login
      </h1>
      <v-row class="my-5 py-5">
        <v-col cols="0" sm="3"></v-col>

        <v-col cols="12" sm="6" class="my-5 py-5">
          <v-text-field
            type="email"
            name="email"
            class="mb-3"
            label="Email"
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
            label="Password"
            width="50%"
            v-model="user.password"
            @keyup.enter="login"
            prepend-icon="mdi-key"
            required
          ></v-text-field>

          <div class="red--text" v-html="error"></div>

          <v-btn
            text
            @click="login"
            class="background mx-0 mt-3 primary--text text-uppercase"
            >login</v-btn
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
      try {
        const { data } = await api.post("/auth/login", {
          email: this.user.email,
          password: this.user.password
        });
        this.$store.dispatch("setToken", data.token);
        this.$store.dispatch("setUser", data.user);
        eventBus.$emit("LOGIN_SUCCESS");
        this.$router.push("/dashboard");
      } catch (err) {
        this.error = err.response.data.message;
      }
    }
  }
};
</script>
