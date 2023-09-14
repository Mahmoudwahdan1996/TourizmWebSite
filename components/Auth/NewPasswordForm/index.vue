<template>
  <v-row class="fill-height px-4">
    <v-col cols="12" lg="10" class="mx-auto d-flex align-center px-4">
      <form-wrapper :validator="$v.form">
        <v-form @submit.prevent="handleReset">
          <v-row>
            <v-col cols="12" class="py-0">
              <LazyErrorAlert />
            </v-col>
            <v-col cols="12">
              <LazyInputPassword name="password" :form="form" />
            </v-col>
            <v-col cols="12">
              <LazyInputPassword name="password_confirmation" :form="form" />
            </v-col>
            <v-col cols="12">
              <v-btn
                class="auth__btn"
                type="submit"
                :loading="loading"
                large
                block
              >
                {{ $t("reset_now") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </form-wrapper>
    </v-col>
  </v-row>
</template>



<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import { strongPassword } from "@/utils/validate";
export default {
  name: "NewPasswordForm",
  data: () => ({
    showPassword: false,
    loading: false,
    form: {
      password: "",
      password_confirmation: "",
    },
  }),
  methods: {
    buildData() {
      const formData = new FormData();
      formData.append("password", this.form.password);
      formData.append("password_confirmation", this.form.password_confirmation);
      formData.append(
        "reset_password_token",
        this.$route.query.resetToken.replace(/ /g, "+")
      );
      return formData;
    },
    handleReset() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        this.$axios
          .post("reset-password", this.buildData())
          .then(() => {
            this.$router.push(this.localePath("/success-reset-password"));
          })
          .finally(() => (this.loading = false));
      }
    },
  },
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8),
        strongPassword,
      },
      password_confirmation: {
        required,
        minLength: minLength(8),
        sameAsPassword: sameAs("password"),
        strongPassword,
      },
    },
  },
};
</script>
