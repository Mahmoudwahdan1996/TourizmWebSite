<template>
  <v-sheet
    color="white"
    class="services__item-box py-5 px-3 rounded-lg text-center relative"
    :class="shadowLg ? 'box-shadow-lg' : 'box-shadow-sm'"
    :min-width="minWidth"
  >
  <div class="layerBg" :class="secondaryTheme ? 'secondary' : 'primary'"></div>
    <span
      depressed
      class="mx-auto pa-4 d-flex align-center justify-center rounded-lg"
      :class="secondaryTheme ? 'light-secondary' : 'light-primary'"
      :style="{ width: iconWidth + 'px', height: iconHeight + 'px' }"
    >
      <div
        :color="secondaryTheme ? 'secondary' : 'primary'"
        v-html="item.icon"
      ></div>
    </span>

    <h3 class="mt-3">{{ item.title }}</h3>

    <p class="line-height-big px-md-10">
      <span class="secondary--text font-weight-bold">{{ item.number }}</span>
      {{ item.content }}
    </p>
  </v-sheet>
</template>

<script>
export default {
  name: "ItemBox",
  props: [
    "item",
    "secondaryTheme",
    "minWidth",
    "iconWidth",
    "iconHeight",
    "shadowLg",
  ],
};
</script>
