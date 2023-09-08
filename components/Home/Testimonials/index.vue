<template>
  <section class="testimonials pb-10 text-center" v-if="clients.length">
    <div class="testimonials__heading-wrapper white">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" offset-md="3" class="mb-5 mt-3 mt-md-0">
            <h2 class="mb-3">{{ $t("home.testimonials_title") }}</h2>

            <div class="d-flex justify-center align-center gap-sm">
              <div class="secondary content-border"></div>
              <p>{{ $t("home.testimonials_content") }}</p>
              <div class="secondary content-border"></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <v-sheet color="transparent">
        <v-slide-group center-active show-arrows class="align-end">
          <template v-slot:next>
            <v-icon class="light-primary rounded-lg" color="primary" large>
              {{
                  $i18n.locale === "ar"
                    ? "mdi-chevron-double-left"
                    : "mdi-chevron-double-right"
              }}
            </v-icon>
          </template>
          <template v-slot:prev>
            <v-icon class="light-primary rounded-lg" color="primary" large>
              {{
                  $i18n.locale === "ar"
                    ? "mdi-chevron-double-right"
                    : "mdi-chevron-double-left"
              }}
            </v-icon>
          </template>

          <v-slide-item v-for="(client, i) in clients" :key="i" v-slot="{ toggle }" class="mx-3">
            <v-card color="transparent" elevation="0" @click="toggle" width="30vw" max-width="310">
              <HomeTestimonialsClientBox :client="client" />
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "HomeTestimonials",

  data() {
    return {
      clients: [
        {
          name: "John Doe",
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "Backend developer",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.",
        },
        {
          name: "John Doe",
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "Backend developer",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.",
        },
        {
          name: "John Doe",
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "Backend developer",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.",
        },
        {
          name: "John Doe",
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "Backend developer",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.",
        },
        {
          name: "John Doe",
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "Backend developer",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.",
        },
        {
          name: "John Doe",
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "Backend developer",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.",
        },
      ],
    };
  },
};
</script>
