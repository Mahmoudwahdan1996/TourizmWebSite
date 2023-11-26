<template>
  <v-dialog
    transition="dialog-top-transition"
    content-class="search container"
    overlay-color="#2d373ccc"
    overlay-opacity="1"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mx-2 search__btn" fab small v-bind="attrs" v-on="on">
        <v-icon> mdi-magnify </v-icon>
      </v-btn>
    </template>
    <template v-slot:default>
      <v-card class="search__card">
        <v-card-text class="pt-4 search__card--content">
          <form-wrapper :validator="$v.form">
            <v-form @submit.prevent="submitForm">
              <v-row class="justify-center my-0">
                <v-col :lg="10" cols="12">
                  <v-row>
                    <v-col
                      :lg="3"
                      :md="6"
                      cols="12"
                      class="search__card--content-item d-flex align-center gap-sm"
                    >
                      <v-icon color="primary" size="30"
                        >mdi-map-marker-outline</v-icon
                      >
                      <LazyInputSelect
                        name="destination"
                        :form="form"
                        :items="traveTypesList"
                        dynamicClass="search__card--content-item__input"
                        placeholder="Where Are You Going?"
                      />
                    </v-col>
                    <v-col
                      :lg="3"
                      :md="6"
                      cols="12"
                      class="search__card--content-item d-flex align-center gap-sm"
                    >
                      <v-icon color="primary" size="30">mdi-text-long</v-icon>
                      <LazyInputSelect
                        name="travel_type"
                        :form="form"
                        :items="traveTypesList"
                        dynamicClass="search__card--content-item__input"
                      />
                    </v-col>
                    <v-col
                      :lg="3"
                      :md="6"
                      cols="12"
                      class="search__card--content-item d-flex align-center gap-sm"
                    >
                      <v-icon color="primary" size="30">
                        mdi-clock-time-four-outline
                      </v-icon>
                      <LazyInputNumber
                        name="duration"
                        :form="form"
                        placeholder="Please type duration "
                        dynamicClass="search__card--content-item__input"
                      />
                    </v-col>
                    <v-col
                      :lg="3"
                      :md="6"
                      cols="12"
                      class="search__card--content-item d-flex align-center gap-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-capslock icon"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"
                        />
                      </svg>
                      <LazyInputDate
                        name="journey_date"
                        :form="form"
                        :isDateSelectable="true"
                      />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col :lg="2" cols="12">
                  <v-btn class="primary" type="submit" block min-height="100%"
                    >find</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </form-wrapper>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "Search",

  data: () => ({
    form: {
      destination: null,
      travel_type: "All Activity",
      duration: null,
      journey_date: "",
    },
    traveTypesList: [
      "All Activity",
      "Adventure",
      "City Tour",
      "Couple",
      "Escorted Tour",
      "Family",
      "Hill Town",
    ],
  }),

  methods: {
    // buildData() {
    //   const formData = new FormData();
    //   formData.append("destination", this.form.destination);
    //   formData.append("travel_type", this.form.travel_type);
    //   formData.append("duration", this.form.duration);
    //   formData.append("journey_date", this.form.journey_date);
    //   return formData;
    // },
    submitForm() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        this.$store.commit("search/SET_QUERY", this.form);
      }
    },
  },

  validations: {
    form: {
      duration: {},
      travel_type: {},
      destination: {},
    },
  },
};
</script>
