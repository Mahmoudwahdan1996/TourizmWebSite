<template>
  <div class="phone-component">
    <v-label for="phone">
      <b class="secondary--text">{{ $t("fields.phone") }}</b>
    </v-label>
    <v-text-field
      :autofocus="focus"
      :hint="$t(`hint_${name}`)"
      persistent-hint
      class="mt-1"
      v-bind="attrs"
      :id="name"
      v-model="form[name]"
      rounded
      filled
      flat
      v-on="listeners"
      type="number"
    >
      <template #append>
        <v-list-item class="justify-center px-0 country-dropdown">
          <v-menu
            rounded
            offset-y
            transition="slide-x-transition"
            max-height="300"
            @click.stop
          >
            <template #activator="{ attrs, on: { click } }">
              <v-btn
                small
                depressed
                min-width="60"
                height="100%"
                v-bind="attrs"
                :loading="loading"
                v-on:click.stop="click"
              >
                <span v-if="selectedCountry">
                  <span style="direction: ltr">
                    ({{ `${form.country_code.substring(2)}+` }})
                  </span>
                  <v-icon
                    left
                    class="mx-1 font-flag"
                    v-text="selectedCountry.flag"
                  />
                </span>
                <v-icon right x-small v-text="'$arrowDown'" />
              </v-btn>
            </template>
            <v-list v-if="sharedCountries" class="pa-0">
              <v-list-item
                v-for="(country, index) in sharedCountries"
                :key="index"
                :active-class="
                  country.phone_code === form.country_code ? 'active-item' : ''
                "
                :input-value="country.code"
                @click.prevent="handleCountryCode(country)"
              >
                <v-list-item-title
                  style="cursor: pointer"
                  class="d-flex align-center justify-center"
                >
                  <span class="text-capitalize" style="direction: ltr">{{
                    `+${country.phone_code.substring(2)}`
                  }}</span>
                  <v-icon left class="mx-1 font-flag" v-text="country.flag" />
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </template>
    </v-text-field>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "InputTypePhone",
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
    listeners: {
      type: Object,
      default: () => ({}),
    },
    form: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: () => "",
    },
    focus: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      countries: [],
      loading: true,
      selectedCountry: {},
    };
  },
  fetch() {
    this.fetchCountries();
  },
  computed: {
    ...mapGetters({
      sharedCountries: "countries/getCountries",
    }),
  },
  watch: {
    sharedCountries: {
      handler(countries) {
        if (countries && countries.length > 0) {
          this.loading = false;
          this.selectedCountry = countries.find(
            (country) => country.phone_code === this.form.country_code
          );
        }
      },
      immediate: true,
    },
    selectedCountry: {
      handler(country) {
        if (country) {
          this.form.country = country.id;
        }
      },
      immediate: true,
    },
    "$auth.user": {
      handler(user) {
        if (user) {
          this.form.country_code = user.phone.country_code;
          this.form.phone = user.phone.number;
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleCountryCode(country) {
      this.form.country_code = country.phone_code;
      this.selectedCountry = country;
    },
    fetchCountries() {
      this.$store.dispatch("countries/setCountries");
    },
  },
};
</script>


<style lang="scss">
.phone-component {
  .v-input__append-inner {
    margin: 0 !important;
  }
}
</style>