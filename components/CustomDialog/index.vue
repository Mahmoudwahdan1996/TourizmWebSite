<template>
  <v-dialog
    :max-width="maxWidth"
    :value="dialog"
    class="radius-8"
    :content-class="contentClass"
    @click:outside="$emit('close-dialog')"
  >
    <v-card class="dialog__card">
      <v-card-title class="justify-center py-0" v-if="$slots.header">
        <slot name="header"> </slot>
      </v-card-title>

      <v-card-text class="px-0 pt-0 pb-3">
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CustomDialog",
  inheritAttrs: false,
  props: {
    dialog: {
      default: false,
      type: Boolean,
    },
    maxWidth: {
      type: String,
      default: "500",
    },
    contentClass: {
      type: String,
    },
  },
};
</script>
