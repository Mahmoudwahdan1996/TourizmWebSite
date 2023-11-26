<template>
  <div class="counter-input">
    <v-row>
      <v-col cols="4" class="align-self-center">
        <v-label :for="name">
          <strong class="font-weight-dark px-2">
            {{ label ? $t(label) : $t(name) }}
          </strong>
        </v-label>
        <slot name="price" />
      </v-col>
      <v-col
        cols="8"
        md="4"
        offset-md="4"
        lg="8"
        offset-lg="0"
        class="algin-self-center"
      >
        <v-text-field
          v-model="form[name]"
          readonly
          v-bind="$attrs"
          hide-details
          type="number"
          rounded
          v-on="$listeners"
          flat
        >
          <template #prepend-inner>
            <v-btn
              small
              width="32px"
              height="32px"
              :min-width="minWidth"
              class="select-outline"
              @click.stop="onIncrement"
              :loading="$attrs.loadingIncrement"
              :disabled="form[name] >= max || !isValid"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <template #append>
            <v-btn
              :disabled="form[name] <= min || !isValid"
              small
              width="32px"
              height="32px"
              :min-width="minWidth"
              class="select-outline"
              @click.stop="onDecrement"
              :loading="$attrs.loadingDecrement"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CounterInput",
  inheritAttrs: false,
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: "",
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100000,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    minWidth: {
      type: String,
      default: "32px",
    },
  },
  methods: {
    onDecrement() {
      if (this.form[this.name] > this.min) {
        this.form[this.name]--;
      }
      this.$emit("on-decrement");
    },
    onIncrement() {
      if (this.form[this.name] < this.max) {
        this.form[this.name]++;
        this.$emit("on-increment");
      }
    },
  },
};
</script>

<style lang="scss">
.counter-input {
  input {
    text-align: center !important;
  }
  .v-input {
    border: 1px solid green;
    padding-bottom: 8px;
    padding-top: 8px;
    .v-input__prepend-inner {
      margin-top: 0 !important;
    }
  }

  .v-btn {
    border-radius: 50%;
  }
}
</style>
