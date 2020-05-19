<template>
  <div class="login-wrap">
    <img class="vue-logo" alt="Vue logo" src="@/assets/logo.png" />
    <login-component></login-component>
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent';

export default {
  components: {
    LoginComponent,
  },
};
</script>

<style scoped>
.login-wrap {
  margin: 0 auto;
  /* background-color: #41b883; */
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}

.vue-logo {
  margin-bottom: 100px;
}
</style>
