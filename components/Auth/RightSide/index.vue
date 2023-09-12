<template>
  <v-col cols="12" lg="6" class="hidden-md-and-down">
    <div
      class="auth__right"
      :style="`background-image:url(${require(`@/assets/images/auth/${image}`)})`"
    >
      <img :src="require(`@/assets/images/auth/air.svg`)" alt="air" />
    </div>
  </v-col>
</template>
<script>
export default {
  name: "RightSide",
  props: ["image"],
};
</script>
