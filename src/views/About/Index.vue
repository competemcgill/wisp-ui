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
          <v-timeline-item
            v-for="(timelineItem, i) in timelineItems"
            :key="i"
            color="primary"
            fill-dot
            :right="i % 2 == 0"
            :left="i % 2 == 1"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 7 : 2">
                <v-card-title class="primary">
                  <h2 class="headline white--text font-weight-light">
                    {{ timelineItem.title }}
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
                        :src="timelineItem.image"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      align="center"
                      class="pa-4 subtitle-2 font-weight-regular"
                    >
                      {{ timelineItem.content }}
                      <div v-if="timelineItem.note">
                        <br />
                        <br />
                        <span class="caption">
                          {{ timelineItem.note }}
                        </span>
                      </div>
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
  name: "About",
  data() {
    return {
      timelineItems: [
        {
          title: this.$t("here-for-everyone"),
          image: this.$getImageUrl("cp-together.jpg"),
          content: this.$t("compete-mcgill-primary-goal")
        },
        {
          title: this.$t("data-structures-and-algorithms"),
          image: this.$getImageUrl("cp-acmwin.jpg"),
          content: this.$t("compete-mcgill-events")
        },
        {
          title: this.$t("technical-skills"),
          image: this.$getImageUrl("cp-csgames.jpg"),
          content: this.$t("compete-mcgill-training")
        },
        {
          title: this.$t("workshops-mock-interviews"),
          image: this.$getImageUrl("cp-workshop.jpg"),
          content: this.$t("compete-mcgill-is-fun"),
          note: this.$t("compete-mcgill-internships")
        }
      ]
    };
  }
};
</script>
