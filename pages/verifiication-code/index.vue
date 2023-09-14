<template>
  <main class="auth">
    <AuthNumberInputForm />
  </main>
</template>

<script>
export default {
  name: "VerificationCodePage",
  layout: "auth",
  middleware: "isAuth",

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: "ltr",
      },
    };
  },

  watch: {
    "$i18n.locale": {
      handler(value) {
        this.$vuetify.rtl = false;
        this.isRight = false;
      },
      immediate: true,
    },
  },
};
</script>
