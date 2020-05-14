<!-- TODO: populate signup page -->
<template>
  <div class="signup">
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form>
                  <v-row justify="center" align="center">
                    <h1 class="my-5 display-1 black--text text-uppercase">Register</h1>
                  </v-row>
                  <v-text-field
                    name="username"
                    label="Username"
                    id="username"
                    v-model="user.username"
                    type="username"
                    outlined
                    required>
                  </v-text-field>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="user.password"
                    :rules="passwordRules"
                    type="password"
                    outlined
                    required>
                  </v-text-field>
                  <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    :rules="passwordRules"
                    type="password"
                    outlined
                    required>
                  </v-text-field>
                  <v-text-field
                    name="email"
                    label="E-mail address"
                    id="email"
                    v-model="user.email"
                    :rules="emailRules"
                    type="email"
                    outlined
                    required>
                  </v-text-field>
                  <v-text-field
                    name="codeforcesUsername"
                    label="Codeforces Username"
                    id="codeforcesUsername"
                    v-model="user.codeforcesUsername"
                    type="username"
                    outlined
                    required>
                  </v-text-field>
                  <v-row justify="center" align="center" >
                    <v-col cols="12" >
                      <v-btn
                        block
                        @click="signup"
                        class="offset-y primary--text"
                        type="submit"
                      >Sign up
                      </v-btn>
                    </v-col>
                  </v-row>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { api } from "@/gateways/wisp-api";

  export default {
    name: "SignUp",

    data() {
      return {
        error: "",
        user: {
          username: "",
          email: "",
          password: "",
          codeforcesUsername: "",
        },
        emailRules: [
          v =>
            !v ||
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
        ],
        passwordRules: [
          v =>
            !v ||
            this.user.password === v ||
            "Passwords do not match"
        ]
      };
    },

    methods: {
      async signup() {
        console.log("hello");
        try {
          var {data} = await api.post("/users", {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
            platformData: {
              codeforces: {
                username: this.user.codeforcesUsername
              },
            },
          });

          const { data } = await api.post("/auth/login", {
            email: this.user.email,
            password: this.user.password
          });

          console.log("hello");
          this.$store.dispatch("setToken", data.token);
          this.$store.dispatch("setUser", data);
          this.$router.push("/dashboard");
        } catch (err) {
          this.error = err.response.data.message;
        }
      }
    }
  };

</script>

