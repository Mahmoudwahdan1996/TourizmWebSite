<template>
  <div class="event-details--tabs-information mt-5">
    <h3 class="event-details--tabs-information__title">
      Milford Sound Piopiotahi
    </h3>
    <p class="event-details--tabs-information__desc pt-4">
      Pellentesque accumsan magna in augue sagittis, non fringilla eros
      molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius
      mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in,
      convallis enim. Proin convallis neque viverra finibus cursus. Mauris
      lacinia lacinia erat in finibus. In non enim libero.Pellentesque accumsan
      magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec
      ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Donec
      tristique commodo fringilla. Duis aliquet varius mauris eget rutrum.
      Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin
      convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in
      finibus. In non enim libero.onsequat, bibendum orci in, convallis enim.
      Proin convallis neque viverra finibus cursus.
    </p>
    <v-img
      src="http://turio-wp.getcoderzone.com/wp-content/uploads/2022/07/Mask-group-3-1-300x91.png"
      alt="event-mask"
      class="my-5"
    ></v-img>
    <table class="event-details--tabs-information__table">
      <tr>
        <th>Destination</th>
        <td>Historic government landmark</td>
      </tr>
      <tr>
        <th>Depature</th>
        <td>Yes Required</td>
      </tr>
      <tr>
        <th>Departure Time</th>
        <td>01 April, 2021 10.00AM</td>
      </tr>
      <tr>
        <th>Return Time</th>
        <td>08 April, 2021 10.00AM</td>
      </tr>
      <tr>
        <th>Included</th>
        <td>
          <ul>
            <li>
              <v-icon>mdi-check</v-icon>
              <span>Specilaized Bilingual Guide</span>
            </li>
            <li>
              <v-icon>mdi-check</v-icon>
              <span>Private Transport</span>
            </li>
            <li>
              <v-icon>mdi-check</v-icon>
              <span>Entrance Fees</span>
            </li>
            <li>
              <v-icon>mdi-check</v-icon>
              <span>Box Lunch,Water,Dinner and Snacks</span>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>Excluded</th>
        <td>
          <ul>
            <li>
              <v-icon>mdi-window-close</v-icon>
              <span>Additional Services</span>
            </li>
            <li>
              <v-icon>mdi-window-close</v-icon>
              <span>Insurance</span>
            </li>
            <li>
              <v-icon>mdi-window-close</v-icon>
              <span>Drink</span>
            </li>
            <li>
              <v-icon>mdi-window-close</v-icon>
              <span>Tickets</span>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td colspan="2" class="text-center">Travel With Bus</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "EventDetailsTabsInformation",
};
</script>
