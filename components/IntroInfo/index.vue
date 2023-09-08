<template>
  <div class="intro-info  wow fadeInDown" data-wow-duration="1s"   >
    <div v-if="showOval" class="intro-info__oval"></div>
    <div class="secondary intro-info__border"  :class="{ 'intro-info_hero': isHero }"
      :style="`min-height:${height}px`">
    </div>
    <h2 class="mb-3" v-html="$t(heading)" ></h2>
    <div class="intro-info__content"  v-html="$t(content)"></div>
  </div>
</template>

<script>
export default {
  name: "IntroInfo",
  props: {
    showOval: {
      type: Boolean,
      default:false,
    },
    heading: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "100",
    },
    isHero: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
