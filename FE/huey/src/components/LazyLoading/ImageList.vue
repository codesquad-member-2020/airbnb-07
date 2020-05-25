<template>
  <div class="img-list">
    <ImageItem img-src="https://picsum.photos/id/1/600/600" />
    <!-- 이미지 URL을 전달합니다 -->
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
