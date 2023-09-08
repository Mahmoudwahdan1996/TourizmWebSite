<template>
  <main>

    <v-app v-if="!loading" dark>
      <LazyPreloader />
      <LazyLayoutHeader />
      <nuxt :nuxt-child-key="$route.fullPath" />
      <LazyLayoutFooter />

    </v-app>

    <v-fab-transition v-if="showScrollToButton">
      <v-btn style="z-index: 99999" fixed class="primary" fab dark bottom left small @click="handleScrollTop">
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
    this.initColors()
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
      primary: "#812dd3",
      secondary: "#F924A4",
      primaryColors: [{ name: '--primary', alpha: 1 }, { name: '--dark-primary', alpha: .3 }, { name: '--light-primary', alpha: .1 }],
      secondaryColors: [{ name: '--secondary', alpha: 1 }, { name: '--dark-secondary', alpha: .3 }, { name: '--light-secondary', alpha: .1 }],
    };
  },
  methods: {
    hexToRgb(hex, alpha) {
      let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`
    },
    setColors(colors, type) {
      const root = document.documentElement;
      colors.forEach(color => {
        root.style.setProperty(color.name, this.hexToRgb(type, color.alpha))
      })
    },
    initColors() {
      this.setColors(this.primaryColors, this.primary)
      this.setColors(this.secondaryColors, this.secondary)
    },
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
  computed: {},
};
</script>
