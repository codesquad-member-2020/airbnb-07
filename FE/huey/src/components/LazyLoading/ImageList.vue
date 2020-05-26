<template>
  <div class="img-list">
    <ImageItem
      v-for="n in 100"
      :img-src="'https://picsum.photos/id/' + n + '/600/600'"
      :key="n"
    />
  </div>
</template>

<script>
import ImageItem from './ImageItem';

export default {
  name: 'ImageList',
  components: {
    ImageItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
