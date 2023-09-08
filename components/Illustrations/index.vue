<template>
  <v-card flat v-bind="$attrs" class="text-center">
    <img
      :src="require(`@/assets/images/${image_name}`)"
      alt="photo"
      width="87px"
      height="87px"
    >
    <v-card-text class="py-10">
      <slot />
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn class="primary" large :to="localePath('/')">
        <span class="white--text">{{ $t('button.go_to_home') }}</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Illustrations',
  inheritAttrs: false,
  props: {
    image_name: { type: String, default: 'waiting.svg' }
  }
}
</script>
