<template>
  <main>
    <div v-bind="$attrs">
      <LazySwiperWrapper ref="swiper_ref" :breakpoints="breakpoints">
        <slot>
          <swiper-slide v-for="(item, index) in items" :key="index">
            <LazyCardsMediaCard :media="item" />
          </swiper-slide>
        </slot>
      </LazySwiperWrapper>
    </div>
  </main>
</template>

<script>
export default {
  name: "TourismDestinations",
  inheritAttrs: false,
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
    breakpoints: {
      type: Object,
      default: () => ({
        1440: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 2,
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
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }),
    },
  },
  data() {
    return {};
  },
  methods: {
    onSlide(slideType) {
      this.$refs.swiper_ref[slideType]();
    },
  },
};
</script>
