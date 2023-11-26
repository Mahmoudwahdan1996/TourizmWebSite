<template>
  <div class="event-details--tabs">
    <v-tabs
      v-model="tab"
      :hide-slider="true"
      next-icon="mdi-arrow-right"
      prev-icon="mdi-arrow-left"
      show-arrows
    >
      <v-tab v-for="item in items" :key="item.title">
        <v-btn rounded color="primary">
          <v-icon left> {{ item.icon }} </v-icon>
          {{ item.title }}
        </v-btn>
      </v-tab>

      <v-tabs-items v-model="tab">
        <v-tab-item> <EventDetailsTabsInformation /> </v-tab-item>
        <v-tab-item> <EventDetailsTabsTravelPlane /> </v-tab-item>
        <v-tab-item><EventDetailsTabsTourGallary /> </v-tab-item>
        <v-tab-item><EventDetailsTabsLocation /> </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "EventDetailsTabs",

  data() {
    return {
      tab: null,
      items: [
        { icon: "mdi-information-variant", title: "Information" },
        { icon: "mdi-file-chart", title: "Travel Plan" },
        { icon: "mdi-image-multiple-outline", title: " Tour Gallery" },
        { icon: "mdi-map-marker-outline", title: " Location" },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
