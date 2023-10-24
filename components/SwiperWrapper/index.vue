<template>
  <div>
    <swiper :ref="swiperName" :options="swiperOptions" :dir="direction">
      <slot />
    </swiper>
    <slot name="button-next" />
    <slot name="button-prev" />
  </div>
</template>

<script>
export default {
  name: "SwiperWrapper",
  inheritAttrs: false,
  props: {
    breakpoints: {
      type: Object,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
    swiperName: {
      type: String,
      default: "mySwiper",
    },
  },
  computed: {
    swiperOptions() {
      return {
        loop: false,
        spaceBetween: 0,
        centeredSlides: false,
        breakpoints: this.breakpoints,
        autoplay: false,
        ...this.options,
      };
    },
    direction() {
      if (this.$i18n.locale === "ar") {
        return "rtl";
      } else {
        return "ltr";
      }
    },
  },

  methods: {
    slideTo(index) {
      this.$refs[this.swiperName].$swiper.slideTo(index);
    },
    slideNext() {
      this.$refs[this.swiperName].$swiper.slideNext();
    },
    slidePrev() {
      this.$refs[this.swiperName].$swiper.slidePrev();
    },
  },
};
</script>
