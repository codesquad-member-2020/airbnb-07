<template>
  <div>
    <a
      class="login-btn"
      href="https://github.com/login/oauth/authorize?client_id=8f285a7d51cbddc39104&redirect_uri=http://15.164.35.235/api/github/oauth/callback&scope=user"
      >로그인</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-btn {
  display: inline-block;
  width: 100px;
  height: 50px;
  background-color: #41b883;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  line-height: 50px;
}
</style>
