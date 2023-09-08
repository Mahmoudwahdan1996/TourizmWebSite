export const state = () => ({
  banners: []
});

export const mutations = {
  SET_BANNERS(state, payload) {
    state.banners = payload;
  }
};
export const actions = {
  async setBanners({ commit }) {
    const res = await this.$http.get({
      resource: "banners",
      query: { banners_needed_count: 3 }
    });
    const { banners } = res.data;
    commit("SET_BANNERS", banners);
    return Promise.resolve();
  }
};

export const getters = {
  getBanner({ banners }) {
    return banners;
  }
};
