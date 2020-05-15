<template>
  <div class="profile">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">profile</h1>
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
                      <span class="primary--text">Username:</span><br />
                      {{ user.username ? user.username : "N/A" }}
                    </h1>
                  </v-col>

                  <v-col class="mx-1">
                    <h1 class="title text-left">
                      <span class="primary--text">Email:</span><br />
                      {{ user.email }}
                    </h1>
                  </v-col>

                  <v-col class="mx-1">
                    <h1 class="title text-left">
                      <span class="primary--text">Joined on:</span><br />
                      {{
                        new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })
                      }}
                    </h1>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pl-0 pt-0">
            <v-row>
              <v-col cols="12" class="pt-0">
                <v-sheet class="white--text display-1 primary py-3 pl-5"
                  >INFO</v-sheet
                >
              </v-col>
            </v-row>
            <v-row class="my-5 mx-5">
              <v-col cols="12" sm="4">
                <h1 class="title text-left">
                  <span class="primary--text">Bio:</span><br /><span
                    class="grey--text"
                    >{{
                      user.info && user.info.bio
                        ? user.info.bio
                        : "Let other's know what you're up to in your bio!"
                    }}</span
                  >
                </h1>
              </v-col>
              <v-col cols="0" sm="2"></v-col>
              <v-col cols="12" sm="6">
                <h1 class="title text-left">
                  <span class="primary--text">Major:</span>
                  {{ user.info && user.info.major ? user.info.major : "N/A" }}
                </h1>
                <h1 class="title text-left">
                  <span class="primary--text">School:</span>
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
                <v-sheet class="white--text display-1 primary py-3 pl-5"
                  >CODEFORCES</v-sheet
                >
              </v-col>
            </v-row>
            <v-row class="my-5 mx-5">
              <v-col cols="12" sm="12">
                <h1 class="title text-left">
                  <span class="primary--text">Username:</span><br />
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
      user: this.$store.state.user
    };
  }
};
</script>
