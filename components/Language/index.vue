<template>
  <div class="text-center">
    <span>{{ $t(`language.${currentLocale.code}`) }}</span>
    <v-btn icon :to="switchLocalePath(currentLocale.code)">
      <v-icon>mdi-earth</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Language',
  computed: {
    currentLocale () {
      return this.$i18n.locales.find(el => el.code !== this.$i18n.locale)
    }
  }
}
</script>
