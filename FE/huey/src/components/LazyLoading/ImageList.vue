<template>
  <div class="img-list">
    <ImageItem />
  </div>
</template>

<script>
import ImageItem from './ImageItem';

export default {
  name: 'ImageList',
  components: {
    ImageItem,
  },
  props: {
    msg: String,
  },
};
</script>
