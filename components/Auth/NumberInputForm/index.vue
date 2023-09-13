<template>
  <v-container fluid class="auth__verification-code">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="d-flex flex-column aligne-center justify-center">
          <v-card-title
            class="text-h5"
            style="display: block; text-align: center"
            >Enter Verification Code</v-card-title
          >
          <v-card-text class="d-flex aligne-center justify-space-between">
            <template v-for="(value, index) in inputs">
              <v-text-field
                class="auth__verification-code--input"
                :key="index"
                :value="value"
                @input="handleInput(index, $event)"
                @keydown.enter.prevent="focusNext(index)"
                outlined
                hide-details
                :counter="1"
              />
            </template>
          </v-card-text>
          <v-btn
            @click="verifyCode"
            color="primary"
            style="width: 50%; margin: 0 auto 1rem"
            >Verify</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      inputs: ["", "", "", "", ""],
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
