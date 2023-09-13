<template>
  <div class="fill-height px-4">
    <form-wrapper :validator="$v.form">
      <v-form @submit.prevent="submitForm">
        <v-col cols="12" class="py-0">
          <LazyErrorAlert />
        </v-col>
        <v-col cols="12">
          <LazyInputText :focus="true" name="email" :form="form" />
        </v-col>
        <v-col cols="12">
          <LazyInputPassword name="password" :form="form" />
        </v-col>
        <v-col cols="12" class="mb-4">
          <v-row>
            <v-col cols="12" class="d-flex justify-end align-self-center py-0">
              <nuxt-link :to="localePath('/forget-password')">
                <span class="font-weight-dark secondary--text">
                  {{ $t("forget_password") }}</span
                >
              </nuxt-link>
            </v-col>
          </v-row>
        </v-col>

        <v-btn class="auth__btn" type="submit" :loading="loading" large block>
          <span>{{ $t("login") }}</span>
        </v-btn>
      </v-form>
      <v-col cols="12">
        <nuxt-link style="font-size: 14px" :to="localePath('/signup')">
          <div class="d-flex justify-center align-center">
            <p class="mx-1 black--text font-weight-dark">
              {{ $t("no_have_account") }}
            </p>
            <p class="secondary--text">
              {{ $t("please_register") }}
            </p>
          </div>
        </nuxt-link>
      </v-col>
    </form-wrapper>
  </div>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import { strongPassword } from "@/utils/validate";
export default {
  name: "LoginForm",
  data: () => ({
    showPassword: false,
    loading: false,
    form: {
      password: "",
      email: "",
    },
  }),
  methods: {
    buildData() {
      const formData = new FormData();
      formData.append("email", this.form.email);
      formData.append("password", this.form.password);
      return formData;
    },
    submitForm() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        this.$auth
          .loginWith("local", { data: this.buildData() })
          .then(() => {
            this.$router.push(this.localePath("/"));
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        strongPassword,
      },
    },
  },
};
</script>
