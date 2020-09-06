<template>
  <v-card
    hover
    tile
    router
    :to="'/problemSets/' + data._id"
    class="py-3 px-5 mx-2"
  >
    <v-row>
      <v-col cols="12" class="primary--text"
        >{{ data.problemCount ? data.problemCount : "0" }} questions</v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" class="title">{{ data.title }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="subtext grey--text text-truncate">{{
        data.description
      }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-chip-group column>
          <v-chip label v-for="(tag, index) in data.tags" :key="index">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ProblemSetsProblemSet",

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
