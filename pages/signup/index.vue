<template>
  <main class="auth auth--signup">
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-row no-gutters class="fill-height">
          <LazyAuthLeftSide>
            <LazyAuthLeftSideIntro
              :title="$t('welcome')"
              :description="$t('please_signup')"
            />
            <LazyAuthSignupForm />
          </LazyAuthLeftSide>
          <LazyAuthRightSide imgUrl="signup.webp" />
        </v-row>
      </v-col>
    </v-row>
  </main>
</template>

<script>
export default {
  name: "Signup",
  layout: "auth",
  middleware: "isAuth",
};
</script>
