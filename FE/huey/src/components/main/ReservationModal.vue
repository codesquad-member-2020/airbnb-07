<template>
  <div class="res-modal-container">
    <div class="reservation-modal-wrap">
      <ReservationModalItem />
    </div>
  </div>
</template>

<script>
import ReservationModalItem from '@/components/main/ReservationModalItem';

export default {
  components: {
    ReservationModalItem,
  },
};
</script>

<style lang="scss" scoped>
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
  height: 690px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  z-index: 10;
  animation-name: beservationModal;
  animation-duration: 0.2s;
  animation-timing-function: cubic-bezier(0.17, 0.67, 0.62, 1.64);
  animation-fill-mode: both;
  @keyframes beservationModal {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>
