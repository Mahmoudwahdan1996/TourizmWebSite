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
              <form-group name="phone" attribute="fields.phone">
                <template slot-scope="{ attrs, listeners }">
                  <LazyInputPhone
                    v-bind="attrs"
                    :form="form"
                    v-on="listeners"
                    name="phone"
                  />
                </template>
              </form-group>
            </v-col>
            <v-col cols="12">
              <v-btn
                class="auth__btn"
                type="submit"
                :loading="loading"
                large
                block
              >
                {{ $t("send") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </form-wrapper>
    </v-col>
  </v-row>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  name: "ForgetPasswordForm",
  data: () => ({
    loading: false,
    form: {
      country_code: "00966",
      phone: "",
    },
  }),
  methods: {
    buildData() {
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
      formData.append("phone[number]", phone);
      formData.append("phone[country_code]", this.form.country_code);
      return formData;
    },
    handleReset() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        this.$axios
          .post("forget-password", this.buildData())
          .then(() => {
            this.$router.push(this.localePath("/send-mail-password"));
          })
          .finally(() => (this.loading = false));
      }
    },
  },
  validations: {
    form: {
      country_code: {
        required,
      },
      phone: {
        required,
        minLength: minLength(9),
        maxLength: maxLength(15),
      },
    },
  },
};
</script>
