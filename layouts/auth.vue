<template>
  <v-app dark>
    <nuxt :nuxt-child-key="$route.fullPath" />
  </v-app>
</template>

<script>
export default {
  name: "AuthLayout",
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "en" ? "ltr" : "rtl",
      },
    };
  },

  watch: {
    "$i18n.locale": {
      handler(value) {
        if (value === "en") {
          this.$vuetify.rtl = false;
          this.isRight = false;
        } else {
          this.$vuetify.rtl = true;
          this.isRight = true;
        }
      },
      immediate: true,
    },
  },
};
</script>
