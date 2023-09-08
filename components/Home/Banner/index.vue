<template>
  <main class="home-intro__banner mb-10">
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12">
          <div class="home-intro__banner--img">
            <a :href="banner && banner.link" target="_blank">
              <img
                :src="banner && banner.site_image && banner.site_image.path"
                alt="photo"
              />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "Banner",
  props: {
    banner: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
