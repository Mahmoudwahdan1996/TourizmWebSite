<template>
  <form-group :name="name" :attribute="name">
    <template slot-scope="{ attrs, listeners }">
      <v-label :for="name">
        <strong class="font-weight-dark">
          {{ label ? $t(label) : $t(name) }}</strong
        >
      </v-label>
      <v-text-field
        :autofocus="focus"
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
      >
      </v-text-field>
    </template>
  </form-group>
</template>

<script>
export default {
  name: "InputText",
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
      default: () => null,
    },
  },
};
</script>