<template>
  <v-app id="inspire">
    <v-app-bar-nav-icon
      style="top: 60px"
      class="mx-2 mb-5 hidden-lg-and-up"
      @click[`stop`]="drawer = !drawer"
    />
    <v-container>
      <v-row>
        <v-col
          class="hidden-md-and-down"
          cols="12"
          md="3"
          style="padding-top: 65px"
        >
          <v-card
            class="profile__side-menu"
            elevation="5"
            style="position: relative"
          >
            <v-fab-transition>
              <v-btn
                :to="localePath('/account/management')"
                color="error"
                dark
                absolute
                top
                left
                style="top: 10px; cursor: pointer; z-index: 10 !important"
                outlined
              >
                {{ $t("more") }}
              </v-btn>
            </v-fab-transition>
            <v-list>
              <v-list-item two-line>
                <v-list-item-action class="mx-0">
                  <LazyImageUpload
                    ref="file_ref"
                    :img-url="
                      $auth.user && $auth.user.photo && $auth.user.photo.path
                    "
                    class="mx-auto"
                    :max-size="maxSize"
                    @fileSelected="handleUpdatePhoto"
                  />
                </v-list-item-action>
                <v-list-item-content class="mx-2">
                  <v-list-item-title
                    class="profile__heading px-2 secondary--text font-bold"
                  >
                    <span style="font-size: 1rem" class="font-bold">
                      {{ $t("welcome") }}</span
                    >
                  </v-list-item-title>
                  <v-list-item-subtitle class="mt-2 secondary--text font-bold">
                    {{ $auth.user.firstname }}
                    {{ $auth.user.lastname }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="localePath(item.to)"
              >
                <v-list-item-icon class="mx-0 item-icon">
                  <v-icon color="secondary">
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content class="mx-2">
                  <v-list-item-title>
                    <span class="font-regular">{{ item.title }}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mx-0">
                  <v-icon color="secondary"> mdi-logout </v-icon>
                </v-list-item-icon>
                <v-list-item-content class="mx-2">
                  <v-list-item-title
                    style="cursor: pointer"
                    @click="handleLogout"
                  >
                    {{ $t("button.logout") }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" lg="9" class="pb-0 px-0">
          <div class="profile">
            <v-content>
              <v-container>
                <nuxt-child />
              </v-container>
            </v-content>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer
      v-model="drawer"
      style="z-index: 999999999"
      app
      :right="changeDir"
      :clipped="$vuetify.breakpoint.lgAndUp"
      class="hidden-lg-and-up"
    >
      <v-card class="profile__side-menu" elevation="5">
        <v-list>
          <v-list-item two-line>
            <v-list-item-action class="mx-0">
              <LazyImageUpload
                ref="file_ref"
                :img-url="
                  $auth.user && $auth.user.photo && $auth.user.photo.path
                "
                class="mx-auto"
                :max-size="maxSize"
                @fileSelected="handleUpdatePhoto"
              />
            </v-list-item-action>
            <v-list-item-content class="mx-2">
              <v-list-item-title
                class="profile__heading px-2 secondary--text font-bold"
              >
                <span style="font-size: 1rem" class="font-bold">
                  {{ $t("welcome") }}</span
                >
              </v-list-item-title>
              <v-list-item-subtitle class="mt-2 secondary--text font-bold">
                {{ $auth.user.firstname }}
                {{ $auth.user.lastname }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="localePath(item.to)"
          >
            <v-list-item-icon class="mx-0 item-icon">
              <v-icon color="secondary">
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="mx-2">
              <v-list-item-title>
                <span class="font-regular">{{ item.title }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon class="mx-0">
              <v-icon color="secondary"> mdi-logout </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="mx-2">
              <v-list-item-title style="cursor: pointer" @click="handleLogout">
                {{ $t("button.logout") }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
  name: "Profile",
  layout: "profile",
  middleware: "isGuest",

  data() {
    return {
      maxSize: 1.24,
      drawer: null,
    };
  },
  computed: {
    changeDir() {
      if (this.$i18n.locale === "ar") {
        return true;
      } else {
        return false;
      }
    },
    items() {
      return [
        {
          title: this.$t("routes.personal_info"),
          icon: "mdi-account-edit",
          to: "/profile/personal-info",
        },
        {
          title: this.$t("routes.wallet"),
          icon: "mdi-wallet",
          to: "/profile/wallet",
        },
        {
          title: this.$t("routes.edit_password"),
          icon: "mdi-form-textbox-password",
          to: "/profile/change-password",
        },
        {
          title: this.$t("routes.address"),
          icon: "mdi-map-marker",
          to: "/profile/address",
        },
        {
          title: this.$t("routes.favourites"),
          icon: "mdi-cards-heart",
          to: "/profile/favorites",
        },

        {
          title: this.$t("routes.reservations"),
          icon: "mdi-calendar-month",
          to: "/profile/reservations",
        },
      ];
    },
  },
  methods: {
    async handleLogout() {
      await this.$auth.logout();
      this.$router.push(this.localePath("/"));
    },
    async handleUpdatePhoto(item) {
      const formData = new FormData();
      formData.append("photo", item.file);
      await this.$http.post({ resource: "user/photo", data: formData });
    },
  },
};
</script>
