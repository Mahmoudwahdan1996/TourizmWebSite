<template>
  <v-list class="flat header-list" style="background-color: transparent">
    <v-list-item class="justify-center px-0">
      <v-menu rounded offset-y transition="slide-x-transition">
        <template #activator="{ attrs, on }">
          <v-btn
            width="100"
            text
            v-bind="attrs"
            v-on="on"
            class="mb-5 mb-md-0"
            :class="isDesktop ? 'white--text' : ''"
          >
            <span v-text="currentLocale.code"> </span>
            <v-icon right>mdi-earth</v-icon>
          </v-btn>
        </template>

        <v-list class="pa-0 header-list__links">
          <v-list-item
            v-for="(locale, index) in $i18n.locales"
            :key="index"
            @click="onChangeLanguage(locale)"
            :active-class="
              currentLocale.code === locale.code ? 'active-item' : ''
            "
            :input-value="locale.code"
          >
            <v-list-item-title
              style="cursor: pointer"
              class="d-flex align-center justify-center"
            >
              <span class="text-capitalize">{{ locale.code }}</span>
              <v-icon class="px-2" v-text="locale.icon" />
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>

    <v-list-item class="justify-center px-0">
      <v-menu bottom right offset-y transition="slide-x-transition">
        <template #activator="{ on, attrs }">
          <v-btn
            class="px-7 py-5 text-capitalize transparent"
            :class="isDesktop ? 'white--text' : ''"
            elevation="0"
            v-bind="attrs"
            v-on="on"
          >
            <span>
              {{ accountBtn }}
            </span>
            <v-icon right>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>

        <v-list class="py-0 header-list__links">
          <v-list-item
            v-if="$auth.loggedIn"
            :to="localePath('/profile')"
            class="bordered-bottom"
          >
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("my_profile") }} </span>
              </small>
            </v-list-item-title>
          </v-list-item>

          <v-list-item
            v-if="$auth.loggedIn"
            class="bordered-bottom"
            @click="handleLogout"
          >
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("logout") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!$auth.loggedIn" :to="localePath('/login')">
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("login") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!$auth.loggedIn" :to="localePath('/signup')">
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("signup") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "DropDowns",
  props: {
    isDesktop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: { currency: { id: "" } },
    };
  },

  computed: {
    currencies() {
      return [
        { text: "sar", value: "sar" },
        { text: "eg", value: "eg" },
      ];
    },

    locale() {
      return this.$i18n.locale;
    },

    languageDropdown() {
      return this.$i18n.locales.find((el) => el.code !== this.$i18n.locale);
    },
    currentLocale() {
      return this.$i18n.locales.find((el) => el.code === this.$i18n.locale);
    },
    accountBtn() {
      return this.$auth.loggedIn ? this.$t("my_profile") : this.$t("login");
    },
  },

  methods: {
    onChangeLanguage(locale) {
      this.$router.push(this.switchLocalePath(locale.code));
      this.$nuxt.refresh();
      this.$nextTick(() => {});
    },

    async handleLogout() {
      await this.$auth.logout();
      this.$router.push(this.localePath("/"));
    },
  },
};
</script>
