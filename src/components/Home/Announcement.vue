<!-- TODO: implement Announcement card for Home view -->
<template>
  <v-container>
    <v-card class="pa-2">
      <v-container>
        <v-row>
          <v-card-title
            >Welcome to Compete McGill's Training Platform</v-card-title
          >
          <v-card-text class="grey--text">Wed, Oct 14 2020</v-card-text>
          <v-card-title>What's this all about?</v-card-title>
          <v-card-text>
            Competitive Programming sounds cool (okay, that's debatable), but
            it's one of those things that can be pretty daunting to start,
            particularly if you don't have any kind of guidance. That's why
            we’ve built our very own training platform for you to follow along
            and get the practice you want. Whether you are participating in our
            summer training program, trying out the selected workshop problems
            or just want some practice WISP is here for you. After all WISP Is
            for Solving Problems 😉
          </v-card-text>
          <v-card-text>
            Check out
            <a href="https://competemcgill.com/">our website</a> for more info
            about our club, or
            <a href="https://www.facebook.com/CompeteMcGill">
              our Facebook page </a
            >for upcoming events!
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

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
}

.social-link-icons {
  padding: 0px 15px;
}
</style>
