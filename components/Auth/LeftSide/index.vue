<template>
  <v-col cols="12" lg="6">
    <LazyAuthLeftSideGoHome />
    <div class="auth__left">
      <v-card class="auth__left__card mx-auto pb-9 mb-4 pt-16" max-width="480">
        <slot></slot>
      </v-card>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "AuthLeftSide",
};
</script>
