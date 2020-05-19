<template>
  <div class="login-wrap">
    <div class="img-wrap">
      <img class="vue-logo logo" alt="Vue logo" src="@/assets/vue-logo.png" />
      <img class="and-logo logo" alt="And logo" src="@/assets/and-logo.png" />
      <img
        class="airbnb-logo logo"
        alt="AirBnB logo"
        src="@/assets/airbnb-2.svg"
      />
    </div>
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
  width: 1000px;
  /* background-color: #41b883; */
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}

.logo {
  margin-bottom: 100px;
}

.airbnb-logo {
  width: 200px;
  height: 200px;
}

.and-logo {
  width: 85px;
  height: 85px;
  margin: 0px 45px 130px;
}
</style>
