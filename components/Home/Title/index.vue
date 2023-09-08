<template>
  <article class="text-center pt-12 pb-8">
    <h3>{{ $t(`${title}`) }}</h3>
    <!-- <p>
      <small class="color-gray">{{ $t(`${body}`) }}</small>
    </p> -->
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    },
    body: {
      type: String,
      default: () => ''
    }
  }
}
</script>
