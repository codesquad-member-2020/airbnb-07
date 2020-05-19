<template>
  <div id="app">
    <login-view></login-view>
  </div>
</template>

<script>
import LoginView from '@/views/LoginView';

export default {
  components: {
    LoginView,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
