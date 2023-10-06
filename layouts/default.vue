<template>
  <main>
    <v-app v-if="!loading" dark>
      <LazyPreloader />
      <LazyLayoutHeader />
      <nuxt :nuxt-child-key="$route.fullPath" />
      <LazyLayoutFooter />
    </v-app>

    <v-fab-transition v-if="showScrollToButton">
      <v-btn
        style="z-index: 99999"
        fixed
        class="primary"
        fab
        dark
        bottom
        left
        small
        @click="handleScrollTop"
      >
        <v-icon color="white"> mdi-arrow-up-bold </v-icon>
      </v-btn>
    </v-fab-transition>
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "en" ? "ltr" : "rtl",
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loading = false;
    });
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        this.showScrollToButton = true;
      } else {
        this.showScrollToButton = false;
      }
    });
  },
  data() {
    return {
      loading: true,
      showScrollToButton: false,
    };
  },
  methods: {
    handleScrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  watch: {
    "$i18n.locale": {
      handler() {
        this.$store.dispatch("globalSettings/setSettings");
      },
      immediate: true,
    },
  },

};
</script>
