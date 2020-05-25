<template>
  <div class="img-item">
    <img :src="imgSrc" />
    <!-- 전달 받은 이미지 URL을 바인딩 -->
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    imgSrc: String, // 부모 컴포넌트 이미지 URL props를 전달 받기위해 추가합니다
  },
};
</script>
