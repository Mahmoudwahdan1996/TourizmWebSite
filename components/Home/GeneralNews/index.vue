<template>
  <main>
    <LazyHomeSectionTitle
      image_name="bordered"
      title="general_news"
      @on-slide="onSlide"
    />
    <div class="mt-10">
      <LazySwiperWrapper
        ref="swiper_ref"
        :breakpoints="breakpoints"
        :options="options"
      >
        <swiper-slide>
          <LazyCardsTravelGuideCard />
        </swiper-slide>
        <swiper-slide>
          <LazyCardsTravelGuideCard />
        </swiper-slide>
        <swiper-slide>
          <LazyCardsTravelGuideCard />
        </swiper-slide>
        <swiper-slide>
          <LazyCardsTravelGuideCard />
        </swiper-slide>
        <swiper-slide>
          <LazyCardsTravelGuideCard />
        </swiper-slide>
        <swiper-slide>
          <LazyCardsTravelGuideCard />
        </swiper-slide>
      </LazySwiperWrapper>
    </div>
  </main>
</template>

<script>
export default {
  name: 'GeneralNews',
  data () {
    return {
      options: {
        slidesPerView: 'auto',
        slidesPerColumn: 3,
        slidesPerColumnFill: 'row'
      },
      breakpoints: {
        1440: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1380: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 50
        }
      }
    }
  },
  methods: {
    onSlide (slideType) {
      this.$refs.swiper_ref[slideType]()
    }
  }
}
</script>
