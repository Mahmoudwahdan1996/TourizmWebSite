<template>
  <div class="event-details--tabs-TourGallary">
    <v-row>
      <v-col v-for="(image, index) in eventImages" :key="image" cols="6">
        <v-img
          class="event-details--tabs-TourGallary__img"
          :src="image"
          @click="openDialog(image, index)"
          alt="event photos"
        ></v-img>
      </v-col>
    </v-row>

    <CustomDialog
      max-width="600"
      :dialog.sync="showImagePreviewDialog"
      @close-dialog="closeDialog"
      contentClass="TourGallary-dialog"
    >
      <v-card class="TourGallary-dialog__card">
        <v-card-title class="TourGallary-dialog__card--title">
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <img :src="imageUrl" alt="Image Preview" style="max-width: 100%" />
        </v-card-text>
        <v-card-actions class="TourGallary-dialog__card--actions">
          <v-btn fab @click="nextImage">
            <v-icon> mdi-arrow-right </v-icon>
          </v-btn>
          <v-btn fab @click="prevImage">
            <v-icon> mdi-arrow-left </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </CustomDialog>
  </div>
</template>

<script>
export default {
  name: "EventDetailsTabsTourGallary",

  data() {
    return {
      eventImages: [
        "https://turio-wp.b-cdn.net/wp-content/uploads/2022/07/Image-01-1.png",
        "https://turio-wp.b-cdn.net/wp-content/uploads/2022/07/Image-9-1.png",
        "https://turio-wp.b-cdn.net/wp-content/uploads/2022/07/Image-8.png",
        "https://turio-wp.b-cdn.net/wp-content/uploads/2022/07/Image-7.png",
        "https://turio-wp.b-cdn.net/wp-content/uploads/2022/07/Image-6.png",
      ],
      imageUrl: "",
      index: null,
      showImagePreviewDialog: false,
    };
  },

  methods: {
    openDialog(src, index) {
      this.imageUrl = src;
      this.index = index;
      this.showImagePreviewDialog = true;
    },

    closeDialog() {
      this.showImagePreviewDialog = false;
    },
    nextImage() {
      if (this.index < this.eventImages.length - 1) {
        this.index = this.index + 1;
      } else {
        this.index = 0;
      }
      this.imageUrl = this.eventImages[this.index];
      console.log(this.index);
      console.log(this.eventImages.length);
    },
    prevImage() {
      if (this.index == 0) {
        this.index = this.eventImages.length - 1;
      } else {
        this.index = this.index - 1;
      }
      this.imageUrl = this.eventImages[this.index];
    },
  },
};
</script>
