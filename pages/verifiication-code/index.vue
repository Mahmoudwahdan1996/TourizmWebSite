<template>
  <main class="auth">
    <AuthNumberInputForm />
  </main>
</template>

<script>
export default {
  name: "VerificationCodePage",
  layout: "auth",
  middleware: "isAuth",
};
</script>
