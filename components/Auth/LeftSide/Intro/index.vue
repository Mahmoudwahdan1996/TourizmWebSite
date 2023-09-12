<template>
  <div :class="`auth__left__intro ${padding} mb-5`">
    <div class="d-flex">
      <h4>
        {{ title }}
      </h4>
      <img
        width="26"
        class="mx-2"
        :src="require(`@/assets/images/auth/hand.png`)"
        alt="hand"
      />
    </div>

    <p class="mb-0 mt-1 size-14">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AuthIntro",
  props: {
    title: {
      type: String,
      default: () => "",
    },
    description: {
      type: String,
      default: () => "",
    },
    padding: {
      type: String,
      default: () => "px-14",
    },
  },
};
</script>
