<template>
  <div class="about">
    <v-container class="my-5">
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1
            class="my-5 text-center primary--text display-2 font-weight-light"
          >
            WISP
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1 class="my-5 text-center subtitle-1">
            WISP is a project developed by Compete McGill aimed at creating a
            fluid and fun experience for club members to learn competitive
            programming.
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
            Compete McGill
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1 class="my-5 text-center subtitle-1">
            Compete McGill (a.k.a Competitive Programming at McGill) is devoted
            to helping students push their limits in Computer Science and
            Software Engineering. While we do send teams to represent McGill
            competitively, our main goal is to train any student, regardless of
            skill level and prior knowledge - whether their purpose is to
            compete, to get a job or just to have some fun!
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
                    Here for everyone
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
                      At Compete McGill, one of our primary goals is to build a
                      community we have events for all skill levels - so come
                      join the family!
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
                    Data Structures and Algorithms
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
                      We organize lots of events year-round to train your DS and
                      Algorithms Skills, both so that you can compete and for
                      your future careers!
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
                    Technical Skills
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
                      We also help you train your technical skills. From
                      Software Engineering to Functional Programming to
                      Security, you'll get a lot of practice that you can apply
                      to your personal events as well!
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
                    Workshops and Mock Interviews
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
                      Competitive Programming is fun, but you also need to get a
                      job! We organize lots of workshops and mock interview
                      sessions to give you a helping hand in getting that
                      internship / job!
                      <br />
                      <br />
                      <span class="caption">
                        Members Interning and Working At: Amazon, Google,
                        Microsoft and lots more!
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
