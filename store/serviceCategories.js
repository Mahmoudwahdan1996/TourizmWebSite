export default {
  state: () => ({
    categories: []
  }),
  mutations: {
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    setCategories ({ commit }, categoryType) {
      return this.$http
        .get({ resource: `serviceCategories/${categoryType}` })
        .then((res) => {
          const { data } = res.data
          commit('SET_CATEGORIES', data)
          return data
        })
    }
  },
  getters: {
    getCategories (state) {
      return state.categories
    }
  }
}
