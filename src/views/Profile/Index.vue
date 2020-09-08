<template>
  <div class="profile">
    <v-container class="my-5">
      <v-row align="center" class="mr-3">
        <v-col cols="12">
          <h1 class="my-5 display-1 font-weight-light">
            {{ $t("profile") }}
            <v-btn
              text
              @click="editDialogue = true"
              :disabled="user.role === 'ADMIN'"
              class="mb-2"
            >
              <v-icon class="primary--text">mdi-pencil</v-icon>
            </v-btn>
          </h1>
        </v-col>
      </v-row>
      <v-dialog v-model="editDialogue" max-width="1200">
        <v-card class="pa-5">
          <h1 class="display-1 primary--text mb-5">{{ $t("edit") }}</h1>

          <v-text-field
            class="mb-3"
            name="username"
            :label="$t('username')"
            id="username"
            v-model="userBuffer.username"
            type="username"
            prepend-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            name="email"
            :label="$t('email')"
            id="email"
            v-model="userBuffer.email"
            type="email"
            prepend-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            name="codeforcesUsername"
            :label="$t('codeforces-username')"
            id="codeforcesUsername"
            v-model="userBuffer.platformData.codeforces.username"
            type="username"
            prepend-icon="mdi-poll"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            name="major"
            :label="$t('major')"
            id="major"
            v-model="userBuffer.info.major"
            prepend-icon="mdi-school"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            name="year"
            :label="$t('year')"
            id="year"
            v-model="userBuffer.info.year"
            type="year"
            prepend-icon="mdi-calendar"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            name="school"
            :label="$t('university')"
            id="school"
            v-model="userBuffer.info.school"
            type="school"
            prepend-icon="mdi-school"
          ></v-text-field>
          <v-textarea
            class="mb-3"
            name="bio"
            :label="$t('bio')"
            id="bio"
            v-model="userBuffer.info.bio"
            type="bio"
            prepend-icon="mdi-notebook"
          ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>

            <div class="primary--text" align="center" v-html="error"></div>

            <v-btn
              :loading="updateLoading"
              @click="editUser()"
              class="primary"
              >{{ $t("submit") }}</v-btn
            >

            <v-btn text @click="closeEditUser()" class="primart--text">{{
              $t("cancel")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-row>
              <v-col cols="12" sm="2" class="py-0 my-0">
                <v-sheet
                  width="100%"
                  height="100%"
                  style="background: #8F1D14"
                ></v-sheet>
              </v-col>

              <v-col cols="12" sm="10" class="text-center pl-0">
                <v-row class="flex-column ma-0 fill-height" justify="center">
                  <v-col class="mx-1">
                    <h1 class="title text-left">
                      <span class="primary--text">Username:</span>
                      <br />
                      {{ user.username ? user.username : "N/A" }}
                    </h1>
                  </v-col>

                  <v-col class="mx-1">
                    <h1 class="title text-left">
                      <span class="primary--text">Email:</span>
                      <br />
                      {{ user.email }}
                    </h1>
                  </v-col>

                  <v-col class="mx-1">
                    <h1 class="title text-left">
                      <span class="primary--text">Joined on:</span>
                      <br />
                      {{
                        new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })
                      }}
                    </h1>
                  </v-col>
                  <v-row align="center" class="mr-3">
                    <v-col class="mx-1">
                      <v-btn
                        class="white--text primary"
                        @click="deleteDialog = true"
                      >
                        {{ $t("delete-account") }}
                      </v-btn>
                    </v-col>
                  </v-row>
                  <div class="text-center">
                    <v-dialog v-model="deleteDialog" width="500">
                      <v-card>
                        <v-card-title
                          class="white--text headline primary py-3 pl-5"
                        >
                          {{ $t("warning") }}
                        </v-card-title>

                        <v-card-text class="mt-5">
                          {{ $t("delete-dialogue-account") }}
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            :loading="updateLoading"
                            class="primary"
                            @click="deleteUser()"
                          >
                            {{ $t("delete-my-account") }}
                          </v-btn>
                          <v-btn
                            text
                            @click="deleteDialog = false"
                            class="primary--text"
                          >
                            {{ $t("cancel") }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pl-0 pt-0">
            <v-row>
              <v-col cols="12" class="pt-0">
                <v-sheet class="white--text headline primary py-3 pl-5">{{
                  $t("info")
                }}</v-sheet>
              </v-col>
            </v-row>
            <v-row class="my-5 mx-5">
              <v-col cols="12" sm="4">
                <h1 class="title text-left">
                  <span class="primary--text">{{ $t("bio") }}:</span>
                  <br />
                  <span class="grey--text">
                    {{
                      user.info && user.info.bio
                        ? user.info.bio
                        : $t("bio-prompt")
                    }}
                  </span>
                </h1>
              </v-col>
              <v-col cols="0" sm="2"></v-col>
              <v-col cols="12" sm="6">
                <h1 class="title text-left">
                  <span class="primary--text">Major:</span>
                  {{ user.info && user.info.major ? user.info.major : "N/A" }}
                </h1>
                <h1 class="title text-left">
                  <span class="primary--text">University:</span>
                  {{ user.info && user.info.school ? user.info.school : "N/A" }}
                </h1>
                <h1 class="title text-left">
                  <span class="primary--text">Year:</span>
                  {{ user.info && user.info.year ? user.info.year : "N/A" }}
                </h1>
              </v-col>
            </v-row>
          </v-card>
          <br />
          <v-card class="pl-0 pt-0">
            <v-row>
              <v-col cols="12" class="pt-0">
                <v-sheet class="white--text headline primary py-3 pl-5">{{
                  $t("codeforces")
                }}</v-sheet>
              </v-col>
            </v-row>
            <v-row class="my-5 mx-5">
              <v-col cols="12" sm="12">
                <h1 class="title text-left">
                  <span class="primary--text">{{ $t("username") }}:</span>
                  <br />
                  {{
                    user.platformData &&
                    user.platformData.codeforces &&
                    user.platformData.codeforces.username
                      ? user.platformData.codeforces.username
                      : "N/A"
                  }}
                </h1>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      userModel: {
        username: "",
        email: "",
        info: {
          major: "",
          year: "",
          school: "",
          bio: ""
        }
      },
      error: "",
      userBuffer: {},
      editDialogue: false,
      deleteDialog: false,
      updateLoading: false
    };
  },

  computed: {
    user() {
      return this.$store.state.user.data;
    }
  },

  created() {
    this.resetUserBuffer();
  },

  methods: {
    async editUser() {
      this.updateLoading = true;
      try {
        this.$store.dispatch("user/edit", this.userBuffer);
        this.resetUserBuffer();
        this.editDialogue = false;
      } catch (err) {
        this.error = err.response.data.message;
      } finally {
        this.updateLoading = false;
      }
    },

    async deleteUser() {
      this.updateLoading = true;
      try {
        await this.dispatch("user/delete", this.user._id);
        this.$router.push("/");
      } catch (err) {
        this.error = err.response.data.message;
      } finally {
        this.updateLoading = false;
      }
    },

    resetUserBuffer() {
      this.userBuffer = {
        ...this.userModel,
        ...this.user
      };
    },

    closeEditUser() {
      this.editDialogue = false;
      this.resetUserBuffer();
    }
  }
};
</script>
