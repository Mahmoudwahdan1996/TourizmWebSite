<template>
  <v-container class="auth__verification-code px-0">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="7">
        <v-card
          class="auth__verification-code__card d-flex flex-column aligne-center justify-center px-3"
        >
          <v-card-title
            class="auth__verification-code__card--title"
            style="display: block; text-align: center"
            >Enter Verification Code</v-card-title
          >
          <v-row>
            <v-col cols="12">
              <v-card-text class="d-flex aligne-center justify-space-between">
                <template v-for="(value, index) in inputs">
                  <v-text-field
                    class="auth__verification-code__card--input"
                    :key="index"
                    :value="value"
                    @input="handleInput(index, $event)"
                    @keydown.enter.prevent="focusNext(index)"
                    hide-details
                    outlined
                    maxlength="1"
                  />
                </template>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="8" offset-sm="2">
              <v-btn @click="verifyCode" class="my-5 auth__btn" large block>
                Verify
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      inputs: ["", "", "", "", "", ""],
    };
  },
  methods: {
    verifyCode() {
      console.log(this.inputs.join(""));
    },
    handleInput(index, newValue) {
      if (newValue.length === 1 && /^[0-9]+$/.test(newValue)) {
        this.inputs[index] = newValue;
        this.focusNext(index);
      } else {
        this.inputs[index] = "";
      }
    },
    focusNext(index) {
      if (index < this.inputs.length - 1) {
        this.$nextTick(() => {
          const nextTextField = this.$el.querySelectorAll(
            ".v-text-field__slot input"
          )[index + 1];
          console.log(nextTextField);
          if (nextTextField) {
            nextTextField.focus();
          }
        });
      }
    },
  },
};
</script>
