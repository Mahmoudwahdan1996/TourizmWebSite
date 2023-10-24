<template>
  <section class="home-events grey lighten-5">
    <v-container>
      <v-row class="mt-6">
        <HomeEventsCard />
        <HomeEventsCard />
        <HomeEventsCard />
        <HomeEventsCard />
        <HomeEventsCard />
        <HomeEventsCard />
      </v-row>
      <v-btn class="select home-events__view">VIew All Tours</v-btn>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "EventCard",
};
</script>
