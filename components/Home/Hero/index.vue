<template>
  <section class="home-hero">
    <div class="home-hero__video-wrapper w-100">
      <video autoplay loop="loop" muted preload="auto">
        <source :src="require('@/assets/videos/hero.mp4')" type="video/mp4" />
      </video>
    </div>
    <div class="home-hero__text white--text">
      <h1>Come To Find The Life</h1>
      <p>
        Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis.
        feugi Dthreec id the urna aliquet, suscipit turpis ut Dthreec id urna
        aliquet, suscipit turpis ut, facilisis purus.
      </p>
      <v-btn class="primary white--text" depressed>{{
        $t("explore_now")
      }}</v-btn>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
};
</script>
