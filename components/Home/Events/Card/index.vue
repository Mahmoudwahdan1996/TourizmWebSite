<template>
  <v-col :md="6" :lg="4" :xlg="4" class="wow fadeInUp" data-wow-duration="1s">
    <v-card class="home-events--card mx-auto my-6" max-width="374">
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        class="home-events--card__img"
      ></v-img>
      <div class="home-events--card-desc">
        <v-card-title class="home-events--card-desc__title">
          Cafe Badilico
        </v-card-title>
        <div class="d-flex" style="gap: 1.5rem">
          <v-card-actions>
            <v-btn
              large
              @click="reserve"
              rounded
              class="home-events--card-desc__btn"
            >
              Book Now
              <v-icon left>mdi-arrow-right </v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <h3>Starting From</h3>
            <div>
              <span class="home-events--card-desc__price">$120 </span>
              <del class="home-events--card-desc__offer">$150</del>
              <span>Per Person</span>
            </div>
          </v-card-text>
        </div>
      </div>
      <v-chip
        class="ma-2 home-events--card__chip wow fadeInDown"
        data-wow-duration="1s"
        color="primary"
        label
        text-color="white"
      >
        <v-icon right>mdi-clock-outline</v-icon>
        <span class="mx-3">3 Days 4 Nights</span>
      </v-chip>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Card",

  methods: {
    reserve() {
      setTimeout(() => console.log("mahmoud"), 2000);
    },
  },
};
</script>
