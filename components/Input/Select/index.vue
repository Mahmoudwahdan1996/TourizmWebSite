<template>
  <form-group :name="name" :attribute="name">
    <template slot-scope="{ attrs, listeners }">
      <v-label :for="name">
        <strong class="font-weight-dark">
          {{ label ? $t(label) : $t(name) }}</strong
        >
      </v-label>
      <v-select
        :hint="$t(`hint_${name}`)"
        persistent-hint
        v-bind="attrs"
        :id="name"
        v-model="form[name]"
        class="mt-1 fill-field"
        :items="items"
        filled
        rounded
        item-text="name"
        item-value="id"
        v-on="listeners"
      >
      </v-select>
    </template>
  </form-group>
</template>

<script>
export default {
  name: "InputSelect",
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: () => "",
    },
    label: {
      type: String,
      default: () => null,
    },

    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>