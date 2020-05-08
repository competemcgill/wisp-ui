<!-- TODO: change the basic table to something more suitable and well styled
should also add a search bar on the same level as the h1 -->
<template>
  <div class="home">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">problems</h1>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="problems"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Problems",

  data: () => {
    return {
      headers: [
        {
            text: "Title",
            align: "start",
            sortable: false,
            value: "title",
        },
        {
            text: "Difficulty",
            align: "start",
            sortable: true,
            value: "difficulty",
        },
        {
            text: "Platform",
            align: "start",
            sortable: false,
            value: "platform",
        },
        {
            text: "Link",
            align: "start",
            sortable: false,
            value: "link",
        }
      ],
      problems: [
        {
          title: "Sort Array",
          difficulty: "Easy",
          platform: "Codeforces",
          link: "#"
        },
        {
          title: "Two Sum",
          difficulty: "Easy",
          platform: "Codeforces",
          link: "#"
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Medium",
          platform: "Katis",
          link: "#"
        },
        {
          title: "Traveling Salesman",
          difficulty: "Hard",
          platform: "Other",
          link: "#"
        }
      ]
    }
  }
};
</script>
