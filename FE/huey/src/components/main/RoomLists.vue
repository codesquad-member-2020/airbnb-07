<template>
  <div class="room-list-wrap">
    <div v-if="this.isRenderData">loading....</div>
    <div v-else v-for="data in this.initRenderRooms.allData" :key="data.index">
      <RoomCard :propsData="data" />
    </div>
  </div>
</template>

<script>
import RoomCard from '@/components/main/RoomCard';
import { mapState } from 'vuex';

export default {
  components: {
    RoomCard,
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
.room-list-wrap {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 340px;
  grid-gap: 35px;
}
</style>
