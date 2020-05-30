<template>
  <div>
    <div v-if="this.$store.state.isOpenModal">
      <div class="background" ref="background" @click="isModalRender" />
      <div class="reservation-modal-wrap">
        <ReservationModalItem />
      </div>
    </div>

    <div v-else></div>
    <div class="room-list-wrap">
      <div v-if="this.isRenderData" class="loading-container">
        <LoadingSpinner />
      </div>
      <div
        v-else
        v-for="data in this.initRenderRooms.allData"
        :key="data.index"
      >
        <RoomCard :propsData="data" />
      </div>
    </div>
  </div>
</template>

<script>
import RoomCard from '@/components/main/RoomCard';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ReservationModalItem from '@/components/main/ReservationModalItem';
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  components: {
    RoomCard,
    LoadingSpinner,
    ReservationModalItem,
  },
  computed: {
    ...mapState(['initRenderRooms', 'isOpenModal']),
    isRenderData() {
      if (this.initRenderRooms.hasOwnProperty('allData')) return false;
      return true;
    },
  },
  methods: {
    isModalRender(e) {
      this.$store.commit('setOpenModal');
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
  margin-top: 115px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: #00000080;
}

.reservation-modal-wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  width: 450px !important;
  height: 750px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  z-index: 10;
  animation-name: ReservationModal;
  animation-duration: 0.2s;
  animation-timing-function: cubic-bezier(0.17, 0.67, 0.62, 1.64);
  animation-fill-mode: both;
  @keyframes ReservationModal {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>
