import cookie from "cookie";

export const actions = {
  nuxtServerInit({ dispatch }, context) {
    // dispatch("currencies/setCurrencies");

    const cookies = cookie.parse(context.req.headers.cookie || "");

    if (cookies.currency) {
      try {
        dispatch(
          "currencies/setSelectedCurrency",
          JSON.parse(cookies.currency)
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      let sign = context.app.i18n.locale === "ar" ? "دولار أمريكي" : "USD";
      dispatch("currencies/setSelectedCurrency", { code: "USD", sign });
    }
  }
};
