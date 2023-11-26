<template>
  <v-card class="home-guides--card wow fadeInUp" data-wow-duration="1s">
    <div>
      <v-img
        class="home-guides--card__image"
        alt="tour_guides_image"
        src="https://turio-wp.b-cdn.net/wp-content/uploads/2022/11/tour-guide-three.jpg"
        width="100%"
        contain
      ></v-img>
      <ul
        class="home-guides--card__social-links d-flex justify-content-center flex-column gap-3"
      >
        <li>
          <v-btn href="https://www.instagram.com/" fab small>
            <v-icon dark color="primary"> mdi-instagram </v-icon>
          </v-btn>
        </li>

        <li>
          <v-btn href="https://www.facebook.com/" fab small>
            <v-icon dark color="primary"> mdi-facebook</v-icon>
          </v-btn>
        </li>

        <li>
          <v-btn href="https://www.twitter.com/" fab small>
            <v-icon dark color="primary"> mdi-twitter</v-icon>
          </v-btn>
        </li>

        <li>
          <v-btn href="https://www.whatsapp.com/" fab small>
            <v-icon dark color="primary"> mdi-whatsapp</v-icon>
          </v-btn>
        </li>
      </ul>
    </div>

    <div class="home-guides--card__content">
      <!-- <h4></h4> -->
      <v-card-title class="guide-name justify-center"
        >Theodore Aiden</v-card-title
      >
      <v-card-text class="guide-designation text-center">
        Tour Guide
      </v-card-text>
      <!-- <h6 ></h6> -->
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TourGuidesCard",
};
</script>
