<template>
  <form-group :name="name" :attribute="name">
    <template slot-scope="{ attrs, listeners }">
      <v-label :for="name" v-if="showLabel">
        <strong class="font-weight-dark">
          {{ label ? $t(label) : $t(name) }}</strong
        >
      </v-label>
      <v-textarea
        auto-grow
        variant="filled"
        color="deep-purple"
        :rows="rows"
        :hint="$t(`hint_${name}`)"
        persistent-hint
        v-bind="attrs"
        :id="name"
        v-model="form[name]"
        class="mt-1 fill-field"
        filled
        rounded
        flat
        v-on="listeners"
        :placeholder="placeholder"
        :class="dynamicClass"
        :prepend-inner-icon="prependInnerIcon"
      >
      </v-textarea>
    </template>
  </form-group>
</template>

<script>
export default {
  name: "InputTextarea",
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: () => "",
    },
    rows: {
      type: String,
      default: () => "",
    },
    focus: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      default: () => null,
    },
    showLabel: {
      type: Boolean,
      default: () => true,
    },
    prependInnerIcon: {
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
  },
};
</script>
