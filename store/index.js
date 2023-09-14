import cookie from "cookie";

export const actions = {
  nuxtServerInit({ dispatch }, context) {
    // dispatch("currencies/setCurrencies");

    const cookies = cookie.parse(context.req.headers.cookie || "");
  },
};
