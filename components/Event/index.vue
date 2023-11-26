<template>
  <div class="event">
    <v-container>
      <v-row class="mt-10">
        <v-col :lg="8"> <EventDetails /> </v-col>
        <v-col :lg="4" class="ps-lg-4">
          <EventBooking />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Event",
};
</script>
