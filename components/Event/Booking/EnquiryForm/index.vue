<template>
  <div class="my-4">
    <form-wrapper :validator="$v.form">
      <v-form @submit.prevent="submitForm">
        <v-col cols="12" class="py-0">
          <LazyErrorAlert />
        </v-col>

        <v-col cols="12">
          <LazyInputText
            :focus="true"
            name="full_name"
            :form="form"
            :showLabel="false"
            prepend-inner-icon="mdi-pencil"
            placeholder="Full Name*"
          />
        </v-col>
        <v-col cols="12">
          <LazyInputText
            name="email"
            :form="form"
            :showLabel="false"
            prepend-inner-icon="mdi-email"
            placeholder="E-mail*"
          />
        </v-col>

        <v-col cols="12">
          <LazyInputNumber
            name="phone"
            :form="form"
            :showLabel="false"
            prepend-inner-icon="mdi-phone-outline"
            placeholder="Phone Number"
            :hint="$t('hint_phone')"
          />
        </v-col>

        <v-col cols="12">
          <LazyInputNumber
            name="people_count"
            :form="form"
            :showLabel="false"
            prepend-inner-icon="mdi-account"
            placeholder="People"
            :hint="$t('hint_people_count')"
          />
        </v-col>

        <v-col cols="12">
          <LazyInputNumber
            name="tickets_number"
            :form="form"
            :showLabel="false"
            prepend-inner-icon="mdi-tag-multiple"
            placeholder="Number of tickets"
            :hint="$t('hint_tickets_number')"
          />
        </v-col>
        <v-col cols="12">
          <LazyInputTextarea
            name="enquiry_message"
            :form="form"
            :showLabel="false"
            prepend-inner-icon="mdi-message-text"
            placeholder="Your Enquiry*"
            :hint="$t('hint_enquiry_message')"
            rows="9"
          />
        </v-col>

        <v-col>
          <v-btn type="submit" class="select" :loading="loading" large>
            Submit Now
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

  data() {
    return {
      loading: false,

      form: {
        full_name: "",
        email: "",
        phone: "",
        people_count: null,
        tickets_number: null,
        enquiry_message: "",
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
      full_name: {
        required,
        alpha,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      email: {
        required,
        email,
      },
      phone: {
        minLength: minLength(9),
        maxLength: maxLength(15),
      },
      people_count: {
        minValue: minValue(1),
      },
      tickets_number: {},
      enquiry_message: {
        required,
      },
    },
  },
};
</script>
