<template>
  <div class="my-4">
    <form-wrapper :validator="$v.form">
      <v-form @submit.prevent="submitForm">
        <h5>Select Your Tour Date</h5>
        <v-col cols="12" class="d-flex justify-center justify-lg-start">
          <v-radio-group v-model="form.event_Date">
            <v-radio
              v-for="(event, index) in eventDates"
              :key="index"
              :value="event"
              class="mt-4"
            >
              <template v-slot:label>
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <h4>Check In</h4>
                    <span>
                      {{ event.from }}
                    </span>
                  </div>
                  <div class="mx-4">
                    <v-icon color="primary">mdi-arrow-right</v-icon>
                  </div>
                  <div>
                    <h4>Check Out</h4>
                    <span>
                      {{ event.to }}
                    </span>
                  </div>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <LazyInputCounter :form="form" name="adult_count" :min="1">
            <template #price>
              <div>
                <span>$120 </span>
                <del>$150</del>
              </div>
            </template>
          </LazyInputCounter>
        </v-col>
        <v-col cols="12">
          <LazyInputCounter :form="form" name="children_count" :min="1">
            <template #price>
              <div>
                <span>$10 </span>
              </div>
            </template>
          </LazyInputCounter>
        </v-col>
        <v-divider class="mt-5 mb-9"></v-divider>
        <v-col cols="12">
          <div>
            <h3>Other Extra Services</h3>
            <v-checkbox
              v-model="form.features"
              color="primary"
              value="Concierge service"
              hide-details
            >
              <template #label>
                <div class="w-100 d-flex align-center justify-space-between">
                  <span> Concierge service </span>
                  <span>$15 </span>
                </div>
              </template>
            </v-checkbox>
            <v-checkbox
              v-model="form.features"
              color="primary"
              value="Laundry service"
              hide-details
            >
              <template #label>
                <div class="w-100 d-flex align-center justify-space-between">
                  <span> Laundry service </span>
                  <span>$10 </span>
                </div>
              </template>
            </v-checkbox>
            <v-checkbox
              v-model="form.features"
              color="primary"
              value="Collette"
              hide-details
            >
              <template #label>
                <div class="w-100 d-flex align-center justify-space-between">
                  <span>Collette</span>
                  <span>$10 </span>
                </div>
              </template>
            </v-checkbox>
          </div>
        </v-col>

        <v-col>
          <v-btn type="submit" class="select" block :loading="loading" large>
            Book Now
          </v-btn>
        </v-col>
      </v-form>
    </form-wrapper>
  </div>
</template>

<script>
import {
  required,
  email,
  maxLength,
  minLength,
  minValue,
} from "vuelidate/lib/validators";
import { alpha } from "@/utils/validate";

export default {
  name: "EnquiryForm",

  props: {
    eventDates: {
      type: Array,
    },
  },

  data() {
    return {
      loading: false,

      form: {
        event_Date: this.eventDates[0],
        adult_count: 1,
        children_count: 0,
        features: [],
      },
    };
  },

  methods: {
    submitForm() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        console.log(this.form);
      }
    },
  },

  validations: {
    form: {
      event_Date: {
        required,
      },
      adult_count: {
        required,
        minValue: minValue(1),
      },
      children_count: {},
      features: {},
    },
  },
};
</script>
