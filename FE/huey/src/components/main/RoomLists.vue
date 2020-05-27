<template>
  <div class="room-list-wrap">
    <div v-if="this.isRenderData" class="loading-container">
      <LoadingSpinner />
    </div>
    <div v-else v-for="data in this.initRenderRooms.allData" :key="data.index">
      <RoomCard :propsData="data" />
    </div>
  </div>
</template>

<script>
import RoomCard from '@/components/main/RoomCard';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { mapState } from 'vuex';

export default {
  components: {
    RoomCard,
    LoadingSpinner,
  },
  computed: {
    ...mapState(['initRenderRooms']),
    isRenderData() {
      if (this.initRenderRooms.hasOwnProperty('allData')) return false;
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.room-list-wrap {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 340px;
  grid-gap: 35px;
}
</style>
