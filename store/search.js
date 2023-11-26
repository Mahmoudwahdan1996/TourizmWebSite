export const state = () => ({
  query: {},
});

export const mutations = {
  SET_QUERY(state, payload) {
    console.log({ ...payload });
    state.query = payload;
  },
  RESET_QUERY(state) {
    state.query = {};
  },
};

export const actions = {
  async getEvents({ state, commit }) {
    const res = await this.$http.get({
      resource: "events",
      query: { ...state.query },
    });
    const { data } = res.data;
    commit("RESET_QUERY");
    return data;
  },
};
