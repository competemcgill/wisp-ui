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
          <v-card-text class="social-link-icons">
            <v-col lg="2" md="4">
              <v-row justify="space-between">
                <v-btn icon>
                  <v-icon
                    medium
                    class="primary--text"
                    @click="openLink('discord')"
                    >mdi-discord</v-icon
                  >
                </v-btn>
                <v-btn icon>
                  <v-icon
                    medium
                    class="primary--text"
                    @click="openLink('facebook')"
                    >mdi-facebook</v-icon
                  >
                </v-btn>
                <v-btn icon>
                  <v-icon medium class="primary--text" @click="openLink('form')"
                    >mdi-clipboard-text-multiple</v-icon
                  >
                </v-btn>
              </v-row>
            </v-col>
          </v-card-text>
          <v-card-title>What's this all about?</v-card-title>
          <v-card-text>
            Competitive Programming sounds cool (okay, that's debatable), but
            it's one of those things that can be pretty daunting to start,
            particularly if you don't have any kind of guidance. That's why,
            this summer, while we're all quarantining, we're excited to invite
            you to take part in Compete McGill's Summer Training 2.0!
            <br />
            <br />Participants will take part in a weekly reading group that
            discusses the mother of all Competitive Programming textbooks:
            <a href="https://cpbook.net/" target="_blank"
              >Competitive Programming 3</a
            >
            by Steven Halim. By the end of the summer, you'll have a decent
            understanding of all of the core algorithms needed for Competitive
            Programming, and a good amount of practice, especially coding them
            in Java and/or C++.
          </v-card-text>
          <v-card-title>Bi-Weekly Plan</v-card-title>
          <v-card-text>
            <ul>
              <li>
                <b>Monday (bi-weekly):</b> Problem Set and Readings are
                released.
              </li>
              <li>
                <b>Saturday (bi-weekly):</b> Discussion session takes place on
                Discord from 2-3PM EST. Use this time to discuss any issues
                you're having with our workshop leads who are all World-Class
                Competitive Programmers.
              </li>
              <li>
                <b>At the end of every topic (bi-weekly)</b>, we'll host a
                friendly competition! This will give you some experience coding
                in a time-constrained, (moderately) competitive enviornment! Use
                this time to focus on improving!
              </li>
            </ul>
          </v-card-text>
          <v-card-title>Schedule</v-card-title>
          <v-card-text>
            <v-simple-table fixed-header height="300px">
              <thead>
                <tr>
                  <th class="text-left">Date</th>
                  <th class="text-left">Topics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>May 18th</td>
                  <td>
                    <ul>
                      <li>Introduction (Basic C++ Concepts)</li>
                      <li>What is Competitive Programming?</li>
                      <li>What does CP code look like?</li>
                      <li>Input/Output</li>
                      <li>Basic Data Structures</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>June 1st</td>
                  <td>
                    Data Structures:
                    <ul>
                      <li>Sets</li>
                      <li>Maps</li>
                      <li>Vectors</li>
                      <li>Range Queries</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>June 15th</td>
                  <td>Graph Algorithms</td>
                </tr>
                <tr>
                  <td>June 29th</td>
                  <td>
                    <ul>
                      <li>Sorting</li>
                      <li>Searching</li>
                      <li>Greedy Algorithms</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>July 13th</td>
                  <td>Dynamic Programming</td>
                </tr>
                <tr>
                  <td>July 27th</td>
                  <td>Math</td>
                </tr>
                <tr>
                  <td>August 10th</td>
                  <td>String Algorithms</td>
                </tr>
              </tbody>
            </v-simple-table>
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
