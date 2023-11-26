<template>
  <div class="event-details--tabs-plane mt-5">
    <h3 class="event-details--tabs-plane__title">Details</h3>
    <p class="event-details--tabs-plane__desc pt-4">
      Pellentesque accumsan magna in augue sagittis, non fringilla eros
      molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Donec tristique commodo fringilla.
    </p>

    <v-expansion-panels class="event-details--tabs-plane__panels">
      <v-expansion-panel
        v-for="(item, i) in 5"
        :key="i"
        class="event-details--tabs-plane__panels--panel"
      >
        <v-expansion-panel-header
          class="event-details--tabs-plane__panels--panel__header"
        >
          <div class="event-details--tabs-plane__panels--panel__header--title">
            <div class="paln-index-circle">
              <h4>0{{ i + 1 }}</h4>
            </div>
            <div style="line-height: 2">
              <h5 class="font-bold size-20">
                DAY 1 : Departure And Small Tour
              </h5>
              <p class="primary--text">10.00 AM to 10.00 PM</p>
            </div>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          class="event-details--tabs-plane__panels--panel__content"
        >
          Pellentesque accumsan magna in augue sagittis, non fringilla eros
          molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Donec tristique commodo fringilla.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "EventDetailsTabsTravelPlane",
};
</script>
