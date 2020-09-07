<!-- TODO: populate signup page -->
<template>
  <div class="signup">
    <v-container class="my-5">
      <h1 class="my-5 display-1 font-weight-light">
        {{ $t("register") }}
      </h1>
      <v-row class="my-5 py-5" justify="center" align="center">
        <v-col cols="12" sm="6" class="my-5 py-5">
          <v-card>
            <v-card-text>
              <v-container fluid>
                <v-form v-model="isFormValid">
                  <v-text-field
                    class="mb-3"
                    name="username"
                    :label="$t('username')"
                    id="username"
                    v-model="user.username"
                    :rules="[rules.required]"
                    type="username"
                    prepend-icon="mdi-account"
                  >
                  </v-text-field>
                  <v-text-field
                    class="mb-3"
                    name="password"
                    :label="$t('password')"
                    id="password"
                    v-model="user.password"
                    :rules="[rules.required]"
                    type="password"
                    prepend-icon="mdi-key"
                  >
                  </v-text-field>
                  <v-text-field
                    class="mb-3"
                    name="email"
                    :label="$t('email')"
                    id="email"
                    v-model="user.email"
                    :rules="[rules.required, rules.emailRules]"
                    type="email"
                    prepend-icon="mdi-email"
                  >
                  </v-text-field>
                  <v-text-field
                    class="mb-3"
                    name="codeforcesUsername"
                    :label="$t('codeforces-username')"
                    id="codeforcesUsername"
                    v-model="user.platformData.codeforces.username"
                    :rules="[rules.required]"
                    type="username"
                    prepend-icon="mdi-poll"
                  >
                  </v-text-field>
                  <v-text-field
                    class="mb-3"
                    name="major"
                    :label="$t('major')"
                    id="major"
                    v-model="user.info.major"
                    type="major"
                    prepend-icon="mdi-school"
                  >
                  </v-text-field>
                  <v-text-field
                    class="mb-3"
                    name="year"
                    :label="$t('year')"
                    id="year"
                    v-model="user.info.year"
                    type="year"
                    prepend-icon="mdi-calendar"
                  >
                  </v-text-field>
                  <v-text-field
                    class="mb-3"
                    name="school"
                    :label="$t('university')"
                    id="school"
                    v-model="user.info.school"
                    type="school"
                    prepend-icon="mdi-school"
                  >
                  </v-text-field>
                  <v-text-field
                    class="mb-3"
                    name="bio"
                    :label="$t('bio')"
                    id="bio"
                    v-model="user.info.bio"
                    type="bio"
                    prepend-icon="mdi-notebook"
                  >
                  </v-text-field>
                </v-form>
                <div class="primary--text" align="center" v-html="error"></div>
                <v-btn
                  block
                  class="offset-y white--text"
                  @click="signup"
                  color="primary"
                  type="submit"
                  :loading="loading"
                  :disabled="!isFormValid"
                >
                  {{ $t("sign-up") }}
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
      loading: false,
      isFormValid: false,
      user: {
        username: "",
        email: "",
        password: "",
        info: {
          major: "",
          year: "",
          school: "",
          bio: ""
        },
        platformData: {
          codeforces: {
            username: ""
          }
        }
      },
      rules: {
        required: value => !!value || "Required",
        emailRules: v =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      }
    };
  },

  methods: {
    async signup() {
      try {
        this.loading = true;
        this.$store.signup();

        await api.post("/users", {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
          info: {
            major: this.user.major,
            year: this.user.year,
            school: this.user.school,
            bio: this.user.bio
          },
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
