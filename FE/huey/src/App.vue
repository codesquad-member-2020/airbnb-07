<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: 'Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #fff;
  text-decoration: none;
  outline: none;
}

a:hover,
a:active {
  text-decoration: none;
  color: #fff;
  background-color: #f59000;
}
</style>
