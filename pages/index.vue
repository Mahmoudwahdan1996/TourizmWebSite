<template>
  <main>
    <div class="mt-10">
      <div class="grey lighten-5">
        <v-container class="events">
          <v-row>
            <HomeEventCard />
            <HomeEventCard />
            <HomeEventCard />
            <HomeEventCard />
            <HomeEventCard />
            <HomeEventCard />
          </v-row>
        </v-container>
      </div>
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
