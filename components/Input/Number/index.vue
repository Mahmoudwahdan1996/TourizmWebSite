<template>
  <form-group :name="name" :attribute="name">
    <template slot-scope="{ attrs, listeners }">
      <v-label :for="name" v-if="showLabel">
        <strong class="font-weight-dark">
          {{ label ? $t(label) : $t(name) }}</strong
        >
      </v-label>
      <v-text-field
        type="number"
        :autofocus="focus"
        :hint="hint"
        :placeholder="placeholder"
        persistent-hint
        v-bind="attrs"
        :id="name"
        v-model="form[name]"
        class="mt-1 fill-field"
        :class="dynamicClass"
        filled
        rounded
        flat
        v-on="listeners"
        hide-details="auto"
        :prepend-inner-icon="prependInnerIcon"
      >
      </v-text-field>
    </template>
  </form-group>
</template>

<script>
export default {
  name: "InputWrapperText",
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: () => "",
    },
    focus: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      default: () => "",
    },
    hint: {
      type: String,
      default: () => "",
    },
    placeholder: {
      type: String,
      default: () => "",
    },
    dynamicClass: {
      type: String,
      default: () => "",
    },

    showLabel: {
      type: Boolean,
      default: () => true,
    },
    prependInnerIcon: {
      type: String,
      default: () => "",
    },
  },
};
</script>
