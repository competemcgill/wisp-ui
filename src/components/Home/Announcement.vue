<!-- TODO: implement Announcement card for Home view -->
<template>
  <v-container>
    <v-card class="pa-2">
      <v-container>
        <v-row>
          <v-card-title
            >Welcome to Compete McGill's Summer Training</v-card-title
          >
          <v-card-text class="grey--text">Fri, May 15 2020</v-card-text>
          <v-row>
            <v-col lg="2" md="4">
              <v-row justify="space-around">
                <v-icon
                  x-large
                  class="primary--text"
                  @click="openLink('discord')"
                  >mdi-discord</v-icon
                >
                <v-icon
                  x-large
                  class="primary--text"
                  @click="openLink('facebook')"
                  >mdi-facebook</v-icon
                >
                <v-icon x-large class="primary--text" @click="openLink('form')"
                  >mdi-clipboard-text-multiple</v-icon
                >
              </v-row>
            </v-col>
            <v-col lg="10" md="8"></v-col>
          </v-row>
          <v-card-text class="black--text">
            Competitive Programming sounds cool, but you have no clue where to
            start? Took COMP 250 or 251 and craving some more algorithmic
            goodness? You're in luck: Compete McGill is hosting a Summer
            Training Program for Summer 2020.
            <br />
            <br />Participants will take part in a weekly reading group that
            discusses the mother of all textbooks: Competitive Programming 3. By
            the end of the summer, you'll have a decent understanding of all of
            the core algorithms needed for Competitive Programming, and a good
            amount of practice, especially coding them in Java and/or C++.
            <br />
            <br />At the start of every topic, check-in for the updated topics
            and questions.
            <br />
            <br />Discussion sessions take place on Discord every Saturday from
            2-3 pm so you can talk about the problem set and issues you're
            having with our workshop leads (world-class competitive programmers
            😉).
            <br />
            <br />Finally, at the end of every topic, we’ll have a friendly
            competition so you can apply what you learn (all are welcome!!).
            Workshop leads will upload a video of their competition walkthrough
            for you to check out as well!
          </v-card-text>
          <v-card-text class="title black--text">To Join!</v-card-text>
          <v-card-text class="black--text">
            Sign up on the form found directly to the right of this post. You’ll
            also want to join the Discord server for weekly discussions and
            meetings, and the Facebook groups to post any questions. Don't
            hesitate to reach us through our Facebook Group to ask the questions
            you may have!
            <br />
            <br />Join us this summer for a laid back but productive training
            and hit the ground running in the new school year!
          </v-card-text>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HomeAnnouncement",
  methods: {
    openLink(input) {
      switch (input) {
        case "discord":
          window.open("https://discord.gg/JhZQWPW", "_blank");
          break;
        case "facebook":
          window.open(
            "https://www.facebook.com/groups/856545804677764/",
            "_blank"
          );
          break;
        case "form":
          window.open("https://forms.gle/mNeaQooCLjP9VDcm7", "_blank");
          break;

        default:
          break;
      }
    }
  }
};
</script>
