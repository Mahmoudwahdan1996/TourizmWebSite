<template>
  <section class="home-guides mt-16">
    <div
      class="home-guides--heading wow animate fadeInUp text-center"
      data-wow-delay="400ms"
      style="
        visibility: visible;
        animation-delay: 400ms;
        animation-name: fadeInUp;
      "
    >
      <h2 class="home-guides--heading__title">Tour Guide</h2>
      <p class="home-guides--heading__desc">
        Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
        hendrerit a id lectus.<br />
        Suspendissendt blandit interdum.
      </p>
    </div>
    <v-container style="position: relative">
      <v-row class="mt-10">
        <v-col cols="12">
          <LazySwiperWrapper
            ref="swiper_ref"
            :breakpoints="breakpoints"
            :options="options"
          >
            <swiper-slide>
              <HomeTourGuidesCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTourGuidesCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTourGuidesCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTourGuidesCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTourGuidesCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTourGuidesCard />
            </swiper-slide>
            <swiper-slide>
              <HomeTourGuidesCard />
            </swiper-slide>
            <img
              slot="button-next"
              class="swiper-button-next"
              width="15"
              height="15"
              :src="require('@/assets/images/icons/left.svg')"
              alt="photo"
            />
            <img
              slot="button-prev"
              class="swiper-button-prev"
              width="15"
              height="15"
              :src="require('@/assets/images/icons/right.svg')"
              alt="photo"
            />
          </LazySwiperWrapper>
        </v-col>
        <!-- <v-col class="d-flex justify-center">
        <HomeTourGuidesCard />
      </v-col>
      <v-col class="d-flex justify-center">
        <HomeTourGuidesCard />
      </v-col>
      <v-col class="d-flex justify-center">
        <HomeTourGuidesCard />
      </v-col> -->
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "TourGuides",
  data() {
    return {
      breakpoints: {
        1440: {
          slidesPerView: 4,
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
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: { clickable: true },

        loopFillGroupWithBlank: true,
      },
    };
  },
};
</script>
