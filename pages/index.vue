<template>
  <main>
    <div class="">
      <v-row>
      <video autoplay loop="loop" muted preload="auto" style="width:100%" >
        <source :src="require('@/assets/videos/hero.mp4')" type="video/mp4"></source>
      </video>
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
