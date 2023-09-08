import Vue from "vue";
import { mapGetters } from "vuex";
// import VueAwesomeSwiper from "vue-awesome-swiper";
import * as VueGoogleMaps from "vue2-google-maps";
import ReadMore from "vue-read-more";
// import "swiper/css/swiper.css";
// import {
//   Swiper as SwiperClass,
//   Pagination,
//   Mousewheel,
//   Autoplay
// } from "swiper/js/swiper.esm";

// SwiperClass.use([Pagination, Mousewheel, Autoplay]);
// Vue.use(VueAwesomeSwiper);
Vue.use(ReadMore);
Vue.filter("truncate", (value, length) => {
  return value && value.substring(0, length) + "...";
});
Vue.filter("transformCurrency", (value) => {
  // return value && Math.round(value);
  return value && value.toFixed(2);
});
Vue.mixin({
  computed: {
    ...mapGetters({
      serverErrors: "errors/serverErrors",
      settings: "globalSettings/getSettings",
      sharedCurrencies: "currencies/getCurrencies",
      selectedCurrency: "currencies/getCurrency"
    }),
    priceSign() {
      return this.selectedCurrency && this.selectedCurrency.sign;
    }
  },
  methods: {
    popUp() {
      return new Promise((resolve, reject) => {
        this.$swal
          .fire({
            title: this.$t("message.alert_message"),

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: this.$t("button.ok"),
            cancelButtonText: this.$t("button.cancel")
          })
          .then((result) => {
            if (!result.dismiss) {
              return resolve(true);
            }
          })
          .catch(() => reject(false));
      });
    },
    convertDate(date, format = "LL") {
      return this.$moment(date).locale(this.$i18n.locale).format(format);
    }
  }
});

Vue.prototype.$eventBus = new Vue();

Vue.use(VueGoogleMaps, {
  load: {
    // key: 'YOUR_API_TOKEN',
    libraries: "places"
  }
});
