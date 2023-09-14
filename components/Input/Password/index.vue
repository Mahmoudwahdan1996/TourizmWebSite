<template>
  <form-group :name="name" :attribute="name">
    <template slot-scope="{ attrs, listeners }">
      <v-label :for="name">
        <strong class="font-weight-dark">
          {{ label ? $t(label) : $t(name) }}</strong
        >
      </v-label>
      <v-text-field
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
        @click:append="showPassword = !showPassword"
        :autofocus="focus"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
      >
      </v-text-field>
    </template>
  </form-group>
</template>

<script>
export default {
  name: "InputPassword",
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
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>
