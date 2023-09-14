<template>
  <main class="auth auth--new-password ">
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-row no-gutters class="fill-height">
          <LazyAuthLeftSide>
            <LazyAuthLeftSideIntro :title="$t('forgot_password')" :description="$t('new_password_title')" />
            <LazyAuthNewPasswordForm />
          </LazyAuthLeftSide>
          <LazyAuthRightSide imgUrl="reset-password.webp" />
        </v-row>
      </v-col>
    </v-row>

  </main>
</template>
  
<script>
export default {
  name: 'NewPassword',
  layout: 'auth',
  // middleware: ['isAuth','resetPassword']
}
</script>
  