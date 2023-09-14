<template>
  <v-row class="fill-height px-4">
    <v-col cols="12" lg="10" class="mx-auto d-flex align-center px-4">
      <form-wrapper :validator="$v.form">
        <v-form @submit.prevent="handleRegister">
          <v-row>
            <v-col cols="12" class="py-0 px-1">
              <LazyErrorAlert />
            </v-col>

            <v-col cols="12" class="py-1" md="12">
              <LazyInputText name="user_name" :form="form" />
            </v-col>

            <v-col cols="12" class="py-1" md="12">
              <LazyInputText name="email" :form="form" />
            </v-col>
            <v-col cols="12" class="py-1" md="12">
              <LazyInputPhone name="phone" :form="form" />
            </v-col>
            <v-col cols="12" class="py-1" md="12">
              <LazyInputPassword name="password" :form="form" />
            </v-col>
            <v-col cols="12" class="d-flex align-center justify-start">
              <v-label>
                <b>{{ $t("choose_type_account") }}</b>
              </v-label>
            </v-col>
            <v-col cols="6" class="py-1 d-flex align-center justify-center">
              <v-btn
                block
                elevation="2"
                :outlined="!form.isClient"
                color="primary"
                @click="() => (form.isClient = true)"
              >
                <v-icon left>
                  {{
                    form.isClient ? "mdi-checkbox-marked" : "mdi-square-outline"
                  }}
                </v-icon>
                {{ $t("user") }}
              </v-btn>
            </v-col>

            <v-col cols="6" class="py-1 d-flex align-center justify-center">
              <v-btn
                block
                elevation="2"
                :outlined="form.isClient"
                color="primary"
                @click="() => (form.isClient = false)"
              >
                <v-icon left>
                  {{
                    form.isClient ? "mdi-square-outline" : "mdi-checkbox-marked"
                  }}
                </v-icon>
                {{ $t("guide") }}
              </v-btn>
            </v-col>

            <v-btn
              color="primary"
              class="white--text mt-4"
              type="submit"
              :loading="loading"
              large
              block
            >
              {{ $t("signup") }}
            </v-btn>

            <v-col cols="12" class="">
              <nuxt-link style="font-size: 14px" :to="localePath('/login')">
                <div class="d-flex justify-center align-center">
                  <p class="mx-1 black--text font-weight-dark">
                    {{ $t("have_account") }}
                  </p>
                  <p class="secondary--text">
                    {{ $t("please_login") }}
                  </p>
                </div>
              </nuxt-link>
            </v-col>
          </v-row>
        </v-form>
      </form-wrapper>
    </v-col>
  </v-row>
</template>

<script>
import {
  required,
  email,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";
import { alpha, strongPassword } from "@/utils/validate";
import { mapGetters } from "vuex";

export default {
  name: "Register",
  data: () => ({
    showPassword: false,
    loading: false,
    form: {
      isClient: false,
      user_name: "",
      email: "",
      password: "",
      country_code: "00966",
      phone: "",
      country: "",
    },
  }),
  computed: {
    ...mapGetters({
      languages: "languages/getLanguages",
    }),

    // inputType() {
    //   return this.showPassword ? "text" : "password";
    // },
    // passwordIcon() {
    //   return this.showPassword ? "mdi-eye" : "mdi-eye-off";
    // },
    language() {
      return this.languages.find(
        (lang) => lang.code.toLowerCase() === this.$i18n.locale
      );
    },
    checkedIcon() {
      return `<svg width="24" height="22" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
    <g fill="#000" fill-rule="nonzero">
        <path d="M5.052 22H17.68c2.79 0 5.052-2.189 5.052-4.889v-5.928c0-.675-.565-1.222-1.263-1.222-.697 0-1.263.547-1.263 1.222v5.928c0 1.35-1.13 2.445-2.526 2.445H5.052c-1.395 0-2.526-1.095-2.526-2.445V4.89c0-1.35 1.13-2.445 2.526-2.445h6.314c.697 0 1.263-.547 1.263-1.222C12.629.547 12.063 0 11.366 0H5.052C2.262 0 0 2.189 0 4.889V17.11C0 19.811 2.262 22 5.052 22z"/>
        <path d="M21.835 1.577 11.366 11.72 7.211 7.688a1.297 1.297 0 0 0-1.225-.318c-.437.114-.78.444-.896.868a1.2 1.2 0 0 0 .328 1.185l5.051 4.89c.237.23.56.36.897.36.337 0 .66-.13.897-.36l11.366-11a1.2 1.2 0 0 0 0-1.736 1.298 1.298 0 0 0-1.794 0z"/>
    </g>
</svg>`;
    },
  },
  methods: {
    generateData() {
      const formData = new FormData();
      let phone = "";
      if (this.form.phone[0] == 0) {
        phone = this.form.phone.substring(1);
      } else {
        phone = this.form.phone;
      }
      for (const key in this.form) {
        if (key !== "phone" && key !== "country_code") {
          formData.append(key, this.form[key]);
        }
      }
      formData.append("language", this.language.id);
      formData.append("password_confirmation", this.form.password);
      formData.append("phone[number]", phone);
      formData.append("phone[country_code]", this.form.country_code);
      return formData;
    },
    handleRegister() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        this.$axios
          .post("signup", this.generateData())
          .then((res) => {
            const { access_token, user } = res.data;
            this.$auth.setUserToken(access_token);
            this.$auth.setUser(user);
            this.$router.push(this.localePath("/profile"));
          })
          .finally(() => (this.loading = false));
      }
    },
  },
  validations: {
    form: {
      user_name: {
        required,
        alpha,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },

      password: {
        required,
        minLength: minLength(8),
        strongPassword,
      },
      country_code: {
        required,
      },
      email: {
        required,
        email,
        maxLength: maxLength(50),
      },
      phone: {
        required,
        minLengthNumber: minLength(9),
        maxLengthNumber: maxLength(15),
      },
    },
  },
  watch: {
    "form.country": function (newCountry, oldCountry) {
      this.form.country = newCountry;
    },
  },
};
</script>
