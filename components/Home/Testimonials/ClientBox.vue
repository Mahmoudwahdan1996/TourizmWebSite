<template>
  <div class="client-box" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <div class="client-box__quote-box box-shadow-lg rounded-lg py-3 px-5"
      :class="hovered ? 'secondary white--text' : 'white'">
      <p class="line-height-big mb-5">
        {{ client.content }}
      </p>

  
      <svg width="50" height="35" viewBox="0 0 50 35" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.719 0C5.257 0 0 5.284 0 11.78c0 5.93 4.382 10.85 10.062 11.662a20.578 20.578 0 0 1-3.686 9.223 1.478 1.478 0 0 0 .039 1.777 1.46 1.46 0 0 0 1.712.444 24.924 24.924 0 0 0 11.026-9.065 24.996 24.996 0 0 0 4.284-14.042C23.437 5.284 18.181 0 11.72 0zm-.36 29.725c.95-2.27 1.541-4.683 1.745-7.158a1.479 1.479 0 0 0-1.516-1.954c-4.786-.07-8.658-4.006-8.658-8.833 0-4.872 3.942-8.835 8.789-8.835 4.846 0 8.789 3.963 8.789 8.835 0 7.235-3.473 13.856-9.149 17.945zM38.281 0C31.82 0 26.563 5.284 26.563 11.78c0 5.93 4.381 10.85 10.061 11.662a20.578 20.578 0 0 1-3.686 9.223 1.478 1.478 0 0 0 .04 1.777 1.46 1.46 0 0 0 1.712.444 24.924 24.924 0 0 0 11.026-9.065A24.996 24.996 0 0 0 50 11.78C50 5.284 44.743 0 38.281 0zm-.359 29.725c.95-2.27 1.541-4.683 1.744-7.158a1.478 1.478 0 0 0-1.515-1.954c-4.787-.07-8.659-4.006-8.659-8.833 0-4.872 3.943-8.835 8.79-8.835 4.846 0 8.788 3.963 8.788 8.835 0 7.235-3.473 13.856-9.148 17.945z"
          :fill="hovered ? '#fff' : primaryColor" fill-rule="nonzero" />
      </svg>
      <div class="client-box__arrow-down box-shadow-lg" :class="hovered ? 'secondary' : 'white'"></div>
    </div>

    <v-avatar size="74" class="mt-10 mb-2 pa-10" color="secondary">
      <img v-if="client.img" :src="client.img" :alt="client.name" class="light-primary pa-1" />
    </v-avatar>

    <h4>{{ client.name }}</h4>

    <p v-if="client.title">{{ client.title }}</p>
  </div>
</template>

<script>
export default {
  name: "TestimonialsClientBox",

  props: ["client"],

  data() {
    return {
      hovered: false,
      primaryColor: "#ff6121",
    };
  },
};
</script>
