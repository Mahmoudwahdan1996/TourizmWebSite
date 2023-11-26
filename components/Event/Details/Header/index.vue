<template>
  <div class="event-details--header">
    <v-row class="my-5">
      <v-col :cols="6" :md="3" class="d-flex justify-start justify-md-center">
        <EventDetailsHeaderSingleInfo
          iconSrc="mdi-clock-outline"
          title="Duration"
          description=" 3 Days 4 Nights "
        />
        <!-- iconSrc="https://turio-wp.b-cdn.net/wp-content/themes/turio/assets/images/icons/pd1.svg" -->
      </v-col>
      <v-col :cols="6" :md="3" class="d-flex justify-start justify-md-center">
        <EventDetailsHeaderSingleInfo
          iconSrc="mdi-shoe-print"
          title="Tour Type"
          description="Escorted Tour"
        />
        <!-- iconSrc="https://turio-wp.b-cdn.net/wp-content/themes/turio/assets/images/icons/pd2.svg" -->
      </v-col>
      <v-col :cols="6" :md="3" class="d-flex justify-start justify-md-center">
        <EventDetailsHeaderSingleInfo
          iconSrc="mdi-account-group-outline"
          title="Group Size "
          description=" 10 Person"
        />
        <!-- iconSrc="https://turio-wp.b-cdn.net/wp-content/themes/turio/assets/images/icons/pd3.svg" -->
      </v-col>
      <v-col :cols="6" :md="3" class="d-flex justify-start justify-md-center">
        <EventDetailsHeaderSingleInfo
          iconSrc="mdi-account-convert"
          title="Tour Guide"
          description=" 2 Mentor"
        />
        <!-- iconSrc="https://turio-wp.b-cdn.net/wp-content/themes/turio/assets/images/icons/pd4.svg" -->
      </v-col>
    </v-row>

    <v-img
      src="https://turio-wp.b-cdn.net/wp-content/uploads/2022/07/Destination-Image-07-1.jpg"
      alt="event"
      style="border-radius: 5px"
    >
    </v-img>

    <h5 class="event-details--header__location py-6 primary--text size-18">
      <v-icon color="primary">mdi-map-marker-outline</v-icon> New Zeland
    </h5>
  </div>
</template>

<script>
export default {
  name: "EventDetailsHeader",
};
</script>
