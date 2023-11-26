<template>
  <div
    class="event-details-header--single-info d-flex justify-content-center align-items-start gap-xs"
  >
    <!-- class="justify-start justify-md-center" -->
    <div class="event-details-header--single-info__icon">
      <!-- <img :src="iconSrc" alt="icons" /> -->
      <v-icon color="primary" large>{{ iconSrc }}</v-icon>
    </div>
    <div class="event-details-header--single-info__info">
      <h6 class="font-bold size-18">{{ title }}</h6>
      <span class="size-12" style="color: #666">{{ description }}<br /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetailsHeaderSingleInfo",
  props: {
    iconSrc: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>
