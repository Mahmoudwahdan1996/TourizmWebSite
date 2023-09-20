<template>
  <main class="auth auth--reset-password">
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-row no-gutters class="fill-height">
          <LazyAuthLeftSide>
            <LazyAuthLeftSideIntro
              :title="$t('forgot_password')"
              :description="$t('please_enter_phone')"
            />
            <LazyAuthForgetPasswordForm />
          </LazyAuthLeftSide>
          <LazyAuthRightSide imgUrl="reset-password.webp" />
        </v-row>
      </v-col>
    </v-row>
  </main>
</template>

<script>
export default {
  name: "ForgetPassword",
  layout: "auth",
  middleware: "isAuth",
};
</script>
