<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
