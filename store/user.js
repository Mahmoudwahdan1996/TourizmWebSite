export default {
  // state: () => ({
  //   user: {},
  // }),
  // mutations: {
  //   SET_USER(state, payload) {
  //     state.user = payload
  //   },
  // },
  actions: {
    setUser () {
      return this.$http.get({ resource: 'myProfile' }).then((res) => {
        const { data } = res.data
        this.$auth.setUser(data)
        // commit('SET_USER', data)
        return data
      })
    }
  }
}
