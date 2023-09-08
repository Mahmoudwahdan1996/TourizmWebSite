<template>
  <main class="media-previewer">
    <div class="package-card__label mt-5">
      <span> {{ item.label }}</span>
    </div>
    <v-row>
      <v-col cols="12" lg="6" v-if="mainMedia">
        <v-img
          height="100%"
          alt="photo"
          aspect-ratio="1.5"
          :src="mainMedia && mainMedia.path"
        ></v-img>
      </v-col>
      <v-col cols="12" :lg="mainMedia ? 6 : 12">
        <v-row>
          <v-col
            cols="12"
            :lg="mainMedia ? 6 : 3"
            v-for="(media, index) in firstFourMedia"
            :key="index"
          >
            <v-img alt="photo" aspect-ratio="1.5" :src="media && media.path">
              <template v-if="remainingMedia.length > 0">
                <div
                  @click="dialog = !dialog"
                  class="media-previewer__overlay"
                  v-if="index == 3"
                >
                  {{ `${remainingMedia.length} + ${$t("images")}` }}
                </div>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog max-width="700px" v-model="dialog">
      <v-card max-width="700px" class="pa-5" v-if="dialog && loaded">
        <LazyMediaSlider :items="item.media" :breakpoints="breakpoints" />
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
export default {
  name: "MediaPreviewer",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dialog: false,
      loaded: false,
      breakpoints: {
        1440: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };
  },

  computed: {
    mainMedia() {
      return this.item.main_media;
    },
    notMainMedia() {
      return this.item.media.filter((media) => !media.main);
    },
    firstFourMedia() {
      return this.item.media.slice(0, 4);
    },
    remainingMedia() {
      return this.item.media.slice(4);
    },
  },
  watch: {
    dialog: {
      handler(value) {
        if (value) {
          setTimeout(() => {
            this.loaded = true;
          }, 50);
        } else {
          this.loaded = false;
        }
      },
      immediate: true,
    },
  },
};
</script>

