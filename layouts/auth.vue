<template>
  <v-app dark>
    <nuxt :nuxt-child-key="$route.fullPath" />
  </v-app>
</template>

<script>
export default {
  name: "AuthLayout",
  // methods: {
  //   setSelectedCurrency() {
  //     if (this.sharedCurrencies) {
  //       const currency = this.sharedCurrencies.find(
  //         (country) => country.code === this.selectedCurrency.code
  //       );
  //       this.$store.dispatch("currencies/setSelectedCurrency", currency);
  //     }
  //   },
  //   setCurrencies() {
  //     this.$store.dispatch("currencies/setCurrencies").then(() => {
  //       this.setSelectedCurrency();
  //     });
  //   },
  // },
  watch: {
    "$i8n.locale": {
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
    "$i18n.locale": {
      handler() {
        this.$store.dispatch("globalSettings/setSettings");
        // this.setCurrencies();
      },
      immediate: true,
    },
  },
};
</script>
