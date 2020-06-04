<template>
  <div>
    <HeaderComponent />
    <ReservationList class="reservation-component" />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import ReservationList from '@/components/Reservation/ReservationList';

export default {
  components: {
    HeaderComponent,
    ReservationList,
  },
};
</script>

<style lang="scss" scoped>
.reservation-component {
  margin-top: 115px;
}
</style>
