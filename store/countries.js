export const state = () => ({
  countries: [],
});

export const mutations = {
  SET_COUNTRIES(state, payload) {
    state.countries = payload;
  },
};
export const actions = {
  async setCountries({ commit }) {
    const res = await this.$http.get({
      resource: "countries",
      query: { simple: true, pagination: "all" },
    });
    const countries = res.data.data;

    const saudi = countries.filter((country) => country.phone_code === "00966");
    const filteredCountries = countries.filter(
      (country) => country.phone_code !== "00966"
    );
    const newCountries = [...saudi, ...filteredCountries];


    commit("SET_COUNTRIES", newCountries);
    return Promise.resolve();
  },
};

export const getters = {
  getCountries(state) {
    return state.countries;
  },
};
