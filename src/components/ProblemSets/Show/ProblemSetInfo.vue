<template>
  <v-card tile class="py-3 px-5">
    <v-row>
      <v-col col="12" class="pl-0">
        {{ data.description }}
      </v-col>
    </v-row>
    <v-row>
      <v-col col="12">
        <v-chip-group column>
          <v-chip label v-for="(tag, index) in data.tags" :key="index">{{
            tag
          }}</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ProblemSetProblemSetInfo",

  props: ["data"]
};
</script>
