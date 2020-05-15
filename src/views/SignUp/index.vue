<!-- TODO: populate signup page -->
<template>
  <div class="signup">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase text-xs-center">
        Register
      </h1>
      <v-row class="my-5 py-5" justify="center" align="center">
        <v-col cols="12" sm="6" class="my-5 py-5">
          <v-card>
            <v-card-text>
              <v-container>
                <v-text-field
                  class="mb-3"
                  name="username"
                  label="Username"
                  id="username"
                  v-model="user.username"
                  type="username"
                  prepend-icon="mdi-account"
                  required
                >
                </v-text-field>
                <v-text-field
                  class="mb-3"
                  name="password"
                  label="Password"
                  id="password"
                  v-model="user.password"
                  type="password"
                  prepend-icon="mdi-key"
                  required
                >
                </v-text-field>
                <v-text-field
                  class="mb-3"
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  :rules="passwordRules"
                  type="password"
                  :disabled="user.password.length <= 0"
                  prepend-icon="mdi-key"
                  required
                >
                </v-text-field>
                <v-text-field
                  class="mb-3"
                  name="email"
                  label="E-mail address"
                  id="email"
                  v-model="user.email"
                  :rules="emailRules"
                  type="email"
                  prepend-icon="mdi-email"
                  required
                >
                </v-text-field>
                <v-text-field
                  class="mb-3"
                  name="codeforcesUsername"
                  label="Codeforces Username"
                  id="codeforcesUsername"
                  v-model="user.codeforcesUsername"
                  type="username"
                  prepend-icon="mdi-poll"
                  required
                >
                </v-text-field>
                <v-btn
                  block
                  @click="signup"
                  class="offset-y primary--text"
                  type="submit"
                  >Sign up
                </v-btn>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { api } from "@/gateways/wisp-api";
import { eventBus } from "@/store/eventBus";

export default {
  name: "SignUp",

  data() {
    return {
      error: "",
      user: {
        username: "",
        email: "",
        password: "",
        codeforcesUsername: ""
      },
      emailRules: [
        v =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      passwordRules: [
        v => !v || v === this.user.password || "Passwords do not match"
      ]
    };
  },

  methods: {
    async signup() {
      try {
        await api.post("/users", {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
          platformData: {
            codeforces: {
              username: this.user.codeforcesUsername
            }
          }
        });

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
