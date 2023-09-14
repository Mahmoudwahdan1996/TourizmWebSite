<template>
  <main class="auth auth--login">
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-row no-gutters class="fill-height">
          <LazyAuthLeftSide>
            <LazyAuthLeftSideIntro
              :title="$t('welcome')"
              :description="$t('enter_your_data')"
            />
            <LazyAuthLoginForm />
          </LazyAuthLeftSide>
          <LazyAuthRightSide imgUrl="login.webp" />
        </v-row>
      </v-col>
    </v-row>
  </main>
</template>

<script>
export default {
  name: "Login",
  layout: "auth",
  middleware: "isAuth",
};
</script>
