export const state = () => ({
  settings: [],
});
export const mutations = {
  SET_SETTINGS(state, payload) {
    state.settings = payload;
  },
};
export const actions = {
  setSettings({ commit }) {
    this.$http.get({ resource: "settings" }).then((res) => {
      const { data: settings } = res.data || [];
      const convertedSettings = settings.reduce((acc, currentSetting) => {
        acc[currentSetting.key] = currentSetting.value;
        return acc;
      }, {});
      commit("SET_SETTINGS", convertedSettings);
      return settings;
    });
  },
};
export const getters = {
  getSettings: (state) => {
    return state.settings;
  },
};
