<template>
  <div>
    <h2>{{ header }}</h2>
    <div class="d-flex align-center gap-xs mt-5">
      <div class="secondary content-border"></div>
      <p>{{ content }}</p>
    </div>
    <div class="d-flex gap-sm mt-5 mx-3" v-if="cta">
      <nuxt-link :to="localePath(cta.link)">
        <v-btn color="primary"> {{ cta.name }} </v-btn>
      </nuxt-link>
      <nuxt-link :to="localePath(ctaSecondary.link)" v-if="ctaSecondary">
        <v-btn depressed color="secondary" outlined>
          {{ ctaSecondary.name }}
        </v-btn>
      </nuxt-link>
    </div>
    <div class="mt-5 mx-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionContent",

  props: {
    header: {
      type: String,
      default: "My Header",
    },
    content: {
      type: String,
      default: "My Content",
    },
    cta: {
      type: Object,
    },
    ctaSecondary: {
      type: Object,
    },
  },
};
</script>
