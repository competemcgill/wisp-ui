<!-- TODO: give announcement and news the appropriate props -->
<template>
  <div class="home">
    <v-container class="my-5">
      <h1 class="my-5 display-1 black--text text-uppercase">home</h1>
      <announcement />
      <news />
    </v-container>
  </div>
</template>

<script>
import Announcement from "@/components/Home/Announcement";
import News from "@/components/Home/News";

export default {
  name: "Home",
  components: {
    announcement: Announcement,
    news: News
  }
};
</script>
