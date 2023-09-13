<template>
  <v-list class="flat" style="background-color: transparent">
    <v-list-item class="justify-center px-0">
      <v-menu rounded offset-y transition="slide-x-transition">
        <template #activator="{ attrs, on }">
          <v-btn width="100" text v-bind="attrs" v-on="on" class="mb-5 mb-md-0">
            <span class="font-weight-bold" v-text="currentLocale.code"> </span>
            <v-img
              :src="require('@/assets/images/globe-lang.svg')"
              contain
              width="32"
              height="32"
            />
          </v-btn>
        </template>

        <v-list class="pa-0">
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

    <!-- <v-list-item class="justify-center px-0">
      <v-menu bottom right offset-y transition="slide-x-transition">
        <template #activator="{ on, attrs }">
          <v-btn
            class="rounded-pill px-7 py-5 text-capitalize"
            color="primary"
            outlined
            elevation="0"
            v-bind="attrs"
            v-on="on"
          >
            {{ $t("routes.signin") }}
          </v-btn>
        </template>

        <v-list class="py-0 profile-list">
     
          <v-list-item
            v-if="$auth.loggedIn"
            :to="localePath('/profile')"
            class="bordered-bottom"
          >
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("routes.my_profile") }} </span>
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
                <span class="px-3">{{ $t("buttons.logout") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!$auth.loggedIn" :to="localePath('/login')">
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("buttons.login") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!$auth.loggedIn" :to="localePath('/signup')">
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("buttons.register") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item> -->
  </v-list>
</template>

<script>
export default {
  name: "DropDowns",
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
