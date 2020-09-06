<template>
  <div class="about">
    <v-container class="my-5">
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1
            class="my-5 text-center primary--text display-2 font-weight-light"
          >
            {{ $t("wisp") }}
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1 class="my-5 text-center subtitle-1">
            {{ $t("about-wisp") }}
          </h1>
        </v-col>
        <v-col cols="0" sm="3"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1
            class="my-5 text-center primary--text display-2 font-weight-light"
          >
            {{ $t("compete-mcgill") }}
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1 class="my-5 text-center subtitle-1">
            {{ $t("compete-mcgill-mission") }}
          </h1>
        </v-col>
        <v-col cols="0" sm="3"></v-col>
      </v-row>

      <br />
      <br />

      <v-row>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item color="primary" fill-dot right>
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 7 : 2">
                <v-card-title class="primary">
                  <h2 class="headline white--text font-weight-light">
                    {{ $t("here-for-everyone") }}
                  </h2>
                </v-card-title>
                <v-container class="py-0 pl-0">
                  <v-row align="center" justify="center">
                    <v-col
                      class="hidden-sm-and-down text-right py-0 pr-0"
                      md="0"
                      lg="6"
                    >
                      <img
                        height="auto"
                        width="100%"
                        src="@/assets/cp-together.jpg"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      align="center"
                      class="pa-4 subtitle-2 font-weight-regular"
                    >
                      {{ $t("compete-mcgill-primary-goal") }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item color="primary" fill-dot left>
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 7 : 2">
                <v-card-title class="primary">
                  <h2 class="headline white--text font-weight-light">
                    {{ $t("data-structures-and-algorithms") }}
                  </h2>
                </v-card-title>
                <v-container class="py-0 pl-0">
                  <v-row align="center" justify="center">
                    <v-col
                      class="hidden-sm-and-down text-right py-0 pr-0"
                      md="0"
                      lg="6"
                    >
                      <img
                        height="auto"
                        width="100%"
                        src="@/assets/cp-acmwin.jpg"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      align="center"
                      class="pa-4 subtitle-2 font-weight-regular"
                    >
                      {{ $t("compete-mcgill-events") }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item color="primary" fill-dot right>
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 7 : 2">
                <v-card-title class="primary">
                  <h2 class="headline white--text font-weight-light">
                    {{ $t("technical-skills") }}
                  </h2>
                </v-card-title>
                <v-container class="py-0 pl-0">
                  <v-row align="center" justify="center">
                    <v-col
                      class="hidden-sm-and-down text-right py-0 pr-0"
                      md="0"
                      lg="6"
                    >
                      <img
                        height="auto"
                        width="100%"
                        src="@/assets/cp-csgames.jpg"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      align="center"
                      class="pa-4 subtitle-2 font-weight-regular"
                    >
                      {{ $t("compete-mcgill-training") }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item color="primary" fill-dot left>
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 7 : 2">
                <v-card-title class="primary">
                  <h2 class="headline white--text font-weight-light">
                    {{ $t("workshops-mock-interviews") }}
                  </h2>
                </v-card-title>
                <v-container class="py-0 pl-0">
                  <v-row align="center" justify="center">
                    <v-col
                      class="hidden-sm-and-down text-right py-0 pr-0"
                      md="0"
                      lg="6"
                    >
                      <img
                        height="auto"
                        width="100%"
                        src="@/assets/cp-workshop.jpg"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      align="center"
                      class="pa-4 subtitle-2 font-weight-regular"
                    >
                      {{ $t("compete-mcgill-is-fun") }}
                      <br />
                      <br />
                      <span class="caption">
                        {{ $t("compete-mcgill-internships") }}
                      </span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-hover>
          </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>
