<template>
  <!-- <section> -->
  <v-toolbar flat color="transparent" class="header fix-header px-0 justify-center">
    <v-list flat color="transparent" class="d-sm-flex">
      <v-list-item dense class="px-0">
        <v-list-item-action>
          <nuxt-link exact :to="localePath('/')" class="logo d-flex align-center">
            <img  class="wow fadeInRight move-logo " data-wow-duration="2s" :src="require('@/assets/images/logo-new.svg')" height="40px" alt="OTAS logo" />
          </nuxt-link>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-list flat color="transparent" class="d-adjust d-sm-flex justify-space-around">
      <v-list-item v-for="(item, index) in items" :key="index" class="px-0 text-center" dense>
        <v-btn exact-active-class="v-btn--exact-active primary--text" exact text class="text-capitalize px-0 mx-3"
          :to="localePath(`${item.to}`)">
          <span class="size-12">{{ item.title }}</span>
        </v-btn>
      </v-list-item>

      <v-list-item class="px-0">
        <v-menu transition="slide-x-transition" rounded offset-y>
          <template #activator="{ attrs, on }">
            <v-btn text v-bind="attrs" v-on="on">
              <span> {{ $t("buttons.help") }}</span>
              <v-icon right x-small v-text="'$arrowDown'" />
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in moreItems" :key="index" :to="localePath(item.link)" exact
              exact-active-class="primary white--text">
              <v-list-item-title v-text="item.title" />
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
    <v-spacer />
    <LazyNavBarDropDowns class="d-flex" />
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    moreItems() {
      return [
        { title: this.$t("terms_conditions"), link: "/terms-conditions" },
        { title: this.$t("privacy"), link: "/privacy-policy" },
        { title: this.$t("contact_us"), link: "/contact-us" },
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
};
</script>
