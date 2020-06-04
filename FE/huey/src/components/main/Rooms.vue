<template>
  <div class="rooms-wrap">
    <h2 class="rooms-title">
      <img class="best-room-logo" src="../../assets/res-page-logo.svg" alt="" />
      이달의 추천 !! 숙소 베스트 30
    </h2>
    <RoomLists />
  </div>
</template>

<script>
import RoomLists from '@/components/main/RoomLists';

export default {
  data() {
    return {};
  },
  created() {
    this.$store.commit('setInitToken');
    this.$store.commit('setLoginUser');
    this.$store.dispatch('INIT_RENDER');
  },
  components: {
    RoomLists,
  },
};
</script>

<style lang="scss" scoped>
.best-room-logo {
  width: 100px;
  display: inline-block;
}
.rooms-wrap {
  margin-top: 115px;
}

.rooms-title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
}
</style>
