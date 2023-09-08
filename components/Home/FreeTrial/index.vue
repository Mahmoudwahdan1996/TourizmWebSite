<template>
  <section class="free-trial light-primary light-gradient-bg">
    <v-container class="pt-3 pb-5">
      <v-row class="flex-column flex-sm-row">
        <!-- text -->
        <v-col cols="12" sm="6">
          <LazyIntroInfo
            :showOval="true"
            height="40"
            heading="home['free_trial_title']"
            :content="content"
          />
          <div class="d-flex gap-sm mt-5">
            <nuxt-link :to="localePath('/about-us')">
              <v-btn color="primary shadow">
                {{ $t("buttons.free_trial") }}
              </v-btn>
            </nuxt-link>
          </div>
        </v-col>
        <!-- image -->
        <v-col cols="12" sm="6" order="first" order-sm="last" justify-sm="end">
          <div
            class="free-trial__img-wrapper wow fadeInRight"
            data-wow-duration="2s"
          ></div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeFreeTrial",

  data() {
    return {
      days: 20,
    };
  },

  computed: {
    content() {
      return (
        this.$t("home.free_trial_content_1") +
        this.settings["free_license_period_in_days"] +
        this.$t("home.free_trial_content_2")
      );
    },
    ...mapGetters({ settings: "globalSettings/getSettings" }),
  },
};
</script>
