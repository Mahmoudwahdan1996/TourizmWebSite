<template>
  <main class="home">
    <LazyHomeHero />
    <div class="mt-10">
      <div class="grey lighten-5">
        <v-container class="events">
          <v-row>
            <HomeEventCard />
            <HomeEventCard />
            <HomeEventCard />
            <HomeEventCard />
            <HomeEventCard />
            <HomeEventCard />
          </v-row>
        </v-container>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeIndex",
  data() {},
};
</script>
