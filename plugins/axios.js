import Vue from "vue";
export default ({ store, app: { $axios, i18n, $auth } }) => {
  $axios.onResponse((response) => {
    if (store.getters["errors/serverErrors"] !== null) {
      store.dispatch("errors/ClearServerErrors");
    }
    const { method } = response.config;

    if (method === "post" || method === "put" || method === "delete") {
      Vue.toasted.success(response.data.message);
    }

    return response;
  });
  $axios.onRequest((config) => {
    config.headers.common["X-locale"] = i18n.locale;
    config.headers.common["Accept-Language"] = i18n.locale;
    config.headers.common.Timezone = `UTC +${
      -new Date().getTimezoneOffset() / 60
    }`;
    if (store.getters["currencies/getCurrency"]) {
      const currency = store.getters["currencies/getCurrency"];

      config.headers.common["X-currency"] = currency ? currency.code : "USD";
    }
    return config;
  });

  $axios.onError((err) => {
    if (err.response && err.response.status === 403) {
      Vue.toasted.error(err.response.data.message);
      // $auth.logout()
    }
    if (err.response && err.response.status === 401) {
      Vue.toasted.error(err.response.data.message);
      // $auth.logout()
    }

    if (
      err.response &&
      err.response.status === 422 &&
      err.response.data.message &&
      err.response.config.url !== "/signin"
    ) {
      Vue.toasted.error(err.response.data.message);
      // $auth.logout()
    }

    if (err.response && err.response.data && err.response.data.errors) {
      store.dispatch("errors/SetServerErrors", err.response.data.errors);
      if (err.response.config.url !== "/signin") {
        Vue.toasted.error(err.response.data.message);
      }
    }
  });
};
