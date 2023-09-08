<template>
  <div>
    <v-app>
      <LazyLayoutHeader />
      <v-content>
        <nuxt />
      </v-content>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Simple",
  computed: {
    ...mapGetters({
      token: "user/getToken",
    }),
  },
  watch: {
    $route: {
      handler() {
        if (this.$i18n.locale === "ar") {
          this.$vuetify.rtl = true;
        } else {
          this.$vuetify.rtl = false;
        }
      },
      immediate: true,
    },
  },

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },

      script: [
        {
          hid: "g-tag",
          type: "text/javascript",
          src: "https://www.googletagmanager.com/gtag/js?id=G-D62W03F75E",
        },
        {
          hid: "google-analytics",
          type: "text/javascript",
          innerHTML:
            "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-D62W03F75E');",
        },
        {
          hid: "google-manager",
          type: "text/javascript",
          innerHTML:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P95BB27');",
        },
        {
          hid: "facebook-Pixel",
          type: "text/javascript",
          innerHTML:
            "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '771175300214426');fbq('track', 'PageView');",
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "google-manager": ["innerHTML"],
        "google-analytics": ["innerHTML"],
        "facebook-Pixel": ["innerHTML"],
      },
    };
  },
};
</script>
