<template>
  <v-card elevation="2" class="mt-8 event-booking">
    <h3 class="event-booking__title">Book the Tour</h3>
    <h5 class="event-booking__subtitle">Base Price $120 <del>$150</del></h5>
    <v-divider class="mt-5 mb-9"></v-divider>

    <div
      class="event-booking--wrapper d-flex flex-row flex-lg-column justify-center align-center gap-sm"
    >
      <v-btn
        @click="showComponent('BookingForm')"
        class="select-outline"
        :class="{ active: !isActive }"
      >
        Booking Form</v-btn
      >

      <v-btn
        @click="showComponent('EnquiryForm')"
        class="select-outline"
        :class="{ active: isActive }"
      >
        Enquiry Form</v-btn
      >
    </div>
    <v-divider class="mt-5 mb-9"></v-divider>

    <transition name="fade" mode="out-in">
      <component :is="currentComponent" :eventDates="event_Dates" />
    </transition>
  </v-card>
</template>

<script>
import BookingForm from "./BookingForm/index.vue";
import EnquiryForm from "./EnquiryForm/index.vue";

export default {
  name: "EventBooking",

  components: { BookingForm, EnquiryForm },

  data() {
    return {
      currentComponent: "BookingForm",
      isActive: false,
      event_Dates: [
        {
          from: this.convertDate(new Date()),
          to: this.convertDate(new Date()),
        },
        {
          from: this.convertDate(new Date(1456548794)),
          to: this.convertDate(new Date(1456548794)),
        },
      ],
    };
  },

  methods: {
    showComponent(componentName) {
      this.currentComponent = componentName;
      if (componentName == "BookingForm") {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
  },
};
</script>
