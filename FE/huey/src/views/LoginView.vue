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

<style lang="scss" scoped>
.login-wrap {
  margin: 0 auto;
  width: 1000px;
  /* background-color: #41b883; */
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}

.img-wrap {
  display: flex;
  margin: 0 auto;
}

.logo {
  margin-bottom: 100px;
}

.vue-logo {
  animation-name: bingle;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes bingle {
    to {
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
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
