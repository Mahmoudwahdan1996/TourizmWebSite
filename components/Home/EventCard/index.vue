<template>
  <v-col cols="12" :md="6" :lg="4" :xlg="4">
    <v-hover v-slot="{ hover }">
      <v-card class="events-card mx-auto my-12" max-width="374">
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0 my-1">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <!-- <v-card-title>Tonight's availability</v-card-title> -->
        <v-chip class="ma-2" color="primary" label text-color="white">
          <v-icon right>mdi-clock-outline</v-icon>
        </v-chip>

        <!-- <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text> -->

        <v-card-actions>
          <v-btn
            x-large
            @click="reserve"
            :outlined="hover ? false : true"
            rounded
            color="primary"
          >
            Book Now
            <v-icon left>mdi-arrow-right </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: "EventCard",

  methods: {
    reserve() {
      setTimeout(() => console.log("mahmoud"), 2000);
    },
  },
};
</script>
