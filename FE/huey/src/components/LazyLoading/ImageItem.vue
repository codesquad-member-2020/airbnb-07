<template>
  <div class="img-item">
    <div class="conatiner" v-img-lazy-loading="imgSrc"></div>
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    imgSrc: String,
  },
};
</script>

<style scoped>
.conatiner {
  position: relative;
  width: 600px;
  height: 600px;
  margin-bottom: 10px;
}
</style>
