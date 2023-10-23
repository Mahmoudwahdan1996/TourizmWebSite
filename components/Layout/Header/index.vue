<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      style="z-index: 999999999"
      :right="isRight"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      :disable-resize-watcher="true"
    >
      <v-list class="text-center pa-0">
        <v-list-item
          class="px-2 mb-5 py-2"
          :to="localePath('/')"
          style="background-color: #ffeee6"
        >
          <v-img
            contain
            :src="require('@/assets/images/logo-new.svg')"
            alt="OTAS logo"
          />
        </v-list-item>
      </v-list>
      <v-list flat color="transparent" class="app-header__list">
        <v-list-item
          v-for="(item, index) in mobItems"
          :key="index"
          class="px-0 justify-center d-flex"
          dense
          :to="localePath(item.to)"
        >
          {{ item.title }}
        </v-list-item>

        <LazyNavBarDropDowns :isDesktop="false" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      class="header px-3"
      elevation="0"
      :clipped-left="clipped"
      fixed
      app
      v-onScroll
      style="z-index: 16; width: 100%; left: 0; right: 0"
    >
      <!-- <v-container class="pa-0"> -->
      <div class="w-100">
        <LazyNavBar :items="items" class="hidden-sm-and-down" />
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          small
          @click.stop="drawer = !drawer"
          color="white"
        />
      </div>
      <!-- </v-container> -->
      <nuxt-link
        exact
        :to="localePath('/')"
        class="logo d-flex align-center hidden-md-and-up"
      >
        <img
          data-wow-duration="2s"
          :src="require('@/assets/images/logo-new.svg')"
          height="35px"
          alt="OTAS logo"
          class="move-logo-reverse hidden-md-and-up wow fadeInLeft"
        />
      </nuxt-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  directives: {
    onScroll: {
      bind(el, bind) {
        document.addEventListener("scroll", (e) => {
          if (e.path[1].scrollY > 100) {
            el.classList.add("active-header");
          } else {
            el.classList.remove("active-header");
          }
        });
      },
    },
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      dialog: false,
      loading: true,
      isRight: true,
      search: "",
      results: [],
      today: this.$moment().format("YYYY-MM-DD"),
      hijri: new Intl.DateTimeFormat("ar-FR-u-ca-islamic", {
        day: "numeric",
        month: "long",
        // weekday: 'long',
        year: "numeric",
      }).format(Date.now()),
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },

    items() {
      return [
        {
          title: this.$t("home"),
          to: "/",
        },
        {
          title: this.$t("about_us"),
          to: "/about-us",
        },
        {
          title: this.$t("events"),
          to: "/events",
        },
      ];
    },
    mobItems() {
      return [
        {
          title: this.$t("home"),
          to: "/",
        },
        {
          title: this.$t("about_us"),
          to: "/about-us",
        },
        {
          title: this.$t("events"),
          to: "/events",
        },
        {
          title: this.$t("my_profile"),
          to: "/profile",
        },
        {
          title: this.$t("privacy"),
          to: "/privacy-policy",
        },
        {
          title: this.$t("contact_us"),
          to: "/contact-us",
        },
      ];
    },
  },

  watch: {
    "$i18n.locale": {
      handler(value) {
        if (value === "en") {
          this.$vuetify.rtl = false;
          this.isRight = false;
        } else {
          this.$vuetify.rtl = true;
          this.isRight = true;
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleLogout() {
      this.$auth.logout();
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header__list {
  .v-list-item {
    &:hover {
      color: var(--primary) !important;
    }
  }
}
</style>
