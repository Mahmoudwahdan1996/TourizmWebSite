<template>
  <div v-if="serverErrors && serverErrors.length > 0">
    <v-alert
      v-for="(error, index) in serverErrors"
      :key="index"
      color="red lighten-2 mb-1"
      dark
    >
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ErrorAlert",
  computed: {
    ...mapGetters({
      serverErrors: "errors/serverErrors",
    }),
  },
};
</script>
