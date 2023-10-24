<template>
  <section class="home-testi">
    <div class="home-testi--overlay">
      <v-container>
        <v-row>
          <v-col cols="8">
            <h2 class="mb-6">What Our Client Say About Us</h2>
            <p>
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consectetur.
            </p>
          </v-col>
          <v-col class="align-self-end d-flex justify-space-around" cols="4">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
              @click="onSlide('slidePrev')"
            >
              <v-icon dark> mdi-arrow-right </v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
              @click="onSlide('slideNext')"
            >
              <v-icon dark> mdi-arrow-left </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <LazySwiperWrapper ref="swiper_ref" :breakpoints="breakpoints">
            <swiper-slide>
              <HomeTestimnialsCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTestimnialsCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTestimnialsCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTestimnialsCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTestimnialsCard />
            </swiper-slide>
          </LazySwiperWrapper>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimnials",

  data() {
    return {
      breakpoints: {
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
    };
  },

  methods: {
    onSlide(slideType) {
      this.$refs.swiper_ref[slideType]();
    },
  },
};
</script>
