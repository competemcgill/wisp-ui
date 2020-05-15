<template>
  <div class="about">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">about</h1>
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1 class="my-5 text-center primary--text display-3">WISP</h1>
        </v-col>
        <v-col cols="0" sm="3"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1 class="my-5 text-center grey--text headline">
            WISP is a project developed by Compete McGill aimed at creating a
            fluid and fun experience for club members to learn competitive
            programming.
          </h1>
        </v-col>
        <v-col cols="0" sm="3"></v-col>
      </v-row>

      <br />
      <br />
      <br />

      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1 class="my-5 text-center primary--text display-3">
            COMPETE MCGILL
          </h1>
        </v-col>
        <v-col cols="0" sm="3"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <h1 class="my-5 text-center grey--text headline">
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
            <v-card>
              <v-card-title class="primary">
                <h2 class="display-1 white--text font-weight-light">
                  Here for everyone
                </h2>
              </v-card-title>
              <v-container class="py-0 pl-0">
                <v-row>
                  <v-col
                    class="hidden-sm-and-down text-right py-0 pr-0"
                    md="0"
                    lg="6"
                  >
                    <img
                      height="100%"
                      width="100%"
                      src="@/assets/cp-together.jpg"
                    />
                    <br />
                    <br />
                    <br />
                  </v-col>
                  <v-col cols="12" lg="6" align="center" class="pa-4 title">
                    At Compete McGill, one of our primary goals is to build a
                    community we have events for all skill levels - so come join
                    the family!
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="primary" fill-dot left>
            <v-card>
              <v-card-title class="primary">
                <h2 class="display-1 white--text font-weight-light">
                  Data Structures and Algorithms
                </h2>
              </v-card-title>
              <v-container class="py-0 pl-0">
                <v-row>
                  <v-col
                    class="hidden-sm-and-down text-right py-0 pr-0"
                    md="0"
                    lg="6"
                  >
                    <img
                      height="100%"
                      width="100%"
                      src="@/assets/cp-acmwin.jpg"
                    />
                    <br />
                    <br />
                    <br />
                  </v-col>
                  <v-col cols="12" lg="6" align="center" class="pa-4 title">
                    We organize lots of events year-round to train your DS and
                    Algorithms Skills, both so that you can compete and for your
                    future careers!
                    <br />
                    <br />
                    <span class="subtitle-1 grey--text"
                      >Pictured: Our 2018-2019 ACM-ICPC Teams that brought home
                      1st Place at Preliminaries!<br />
                      Competitions: ACM-ICPC, Google CodeJam, Facebook
                      HackerCup...</span
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="primary" fill-dot right>
            <v-card>
              <v-card-title class="primary">
                <h2 class="display-1 white--text font-weight-light">
                  Technical Skills
                </h2>
              </v-card-title>
              <v-container class="py-0 pl-0">
                <v-row>
                  <v-col
                    class="hidden-sm-and-down text-right py-0 pr-0"
                    md="0"
                    lg="6"
                  >
                    <img
                      height="100%"
                      width="100%"
                      src="@/assets/cp-csgames.jpg"
                    />
                    <br />
                    <br />
                    <br />
                  </v-col>
                  <v-col cols="12" lg="6" align="center" class="pa-4 title">
                    We also help you train your technical skills. From Software
                    Engineering to Functional Programming to Security, you'll
                    get a lot of practice that you can apply to your personal
                    events as well!
                    <br />
                    <br />
                    <span class="subtitle-1 grey--text">
                      Pictured: Andre and Bera, who brought home 1st place in
                      the CS Games X-Treme Theory Challenge.<br />
                      Competitions: CS Games, NorthSec and lots more in
                      Montreal!
                    </span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="primary" fill-dot left>
            <v-card>
              <v-card-title class="primary">
                <h2 class="display-1 white--text font-weight-light">
                  Workshops and Mock Interviews
                </h2>
              </v-card-title>
              <v-container class="py-0 pl-0">
                <v-row>
                  <v-col
                    class="hidden-sm-and-down text-right py-0 pr-0"
                    md="0"
                    lg="6"
                  >
                    <img
                      height="100%"
                      width="100%"
                      src="@/assets/cp-workshop.jpg"
                    />
                    <br />
                    <br />
                    <br />
                  </v-col>
                  <v-col cols="12" lg="6" align="center" class="pa-4 title">
                    Competitive Programming is fun, but you also need to get a
                    job! We organize lots of workshops and mock interview
                    sessions to give you a helping hand in getting that
                    internship / job!
                    <br />
                    <br />
                    <span class="subtitle-1 grey--text">
                      Members Interning and Working At: Amazon, Google,
                      Microsoft and lots more!
                    </span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
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
