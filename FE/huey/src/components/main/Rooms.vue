<template>
  <div class="rooms-wrap">
    <h2 class="rooms-title"></h2>
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
    this.$store.dispatch('INIT_RENDER');
  },
  components: {
    RoomLists,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.rooms-wrap {
  margin-top: 60px;
}

.rooms-title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
}
</style>
