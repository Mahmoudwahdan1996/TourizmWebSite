export const state = () => ({
  profile: {}
})

export const mutations = {
  SET_PROFILE (state, payload) {
    state.profile = payload
  }
}
export const actions = {
  async setUserProfile ({ commit }) {
    const res = await this.$axios.get('/user/profile')
    const { data } = res.data
    commit('SET_PROFILE', data)
  }
}

export const getters = {
  getProfile (state) {
    return state.profile
  }
}
