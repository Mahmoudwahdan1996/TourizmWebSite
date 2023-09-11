<template>
  <main>
    <div class="mt-10">
      <v-row>
        <v-col cols="12" md="6">
          <form-wrapper :validator="$v.form">
            <v-form @submit.prevent="handleSubmit">
              <InputPassword :form="form" name="password" />
            </v-form>
          </form-wrapper>
        </v-col>
      </v-row>
    </div>
  </main>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  name: "HomeIndex",
  data() {
    return {
      form: {
        password: "",
      },
    };
  },
  validations: {
    form: {
      password: {
        required,
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.loading = true;
      }
    },
  },
};
</script>
