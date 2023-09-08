import cookie from "js-cookie";
export const state = () => ({
  currencies: [],
  selectedCurrency: {}
});

export const mutations = {
  SET_CURRENCIES(state, payload) {
    state.currencies = payload;
  },
  SET_SELECTED_CURRENCIES(state, payload) {
    state.selectedCurrency = payload;
  }
};
export const actions = {
  async setCurrencies({ commit }) {
    const res = await this.$http.get({ resource: "currencies" });
    const { currencies } = res.data;
    commit("SET_CURRENCIES", currencies);
    cookie.set("currencies", JSON.stringify(currencies));

    return Promise.resolve();
  },
  setSelectedCurrency({ commit }, payload) {
    commit("SET_SELECTED_CURRENCIES", payload);
    cookie.set("currency", JSON.stringify(payload));
  }
};

export const getters = {
  getCurrencies(state) {
    return state.currencies;
  },
  getCurrency(state) {
    return state.selectedCurrency;
  }
};
