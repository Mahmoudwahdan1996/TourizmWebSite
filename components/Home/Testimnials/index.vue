<template>
  <section class="home-testi">
    <div class="home-testi--overlay">
      <v-container>
        <v-row>
          <v-col :sm="12" :md="8" class="text-sm-center text-md-start">
            <h2 class="mb-6">What Our Client Say About Us</h2>
            <p>
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consectetur.
            </p>
          </v-col>
          <v-col
            class="align-self-end justify-space-around d-none d-md-flex"
            cols="4"
          >
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
        <v-row class="mt-16">
          <v-col cols="12">
            <LazySwiperWrapper
              ref="swiper_ref"
              :breakpoints="breakpoints"
              :options="options"
            >
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
          </v-col>
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
      options: {
        autoplay: true,
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
