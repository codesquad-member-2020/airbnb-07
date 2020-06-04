<template>
  <div v-if="this.isReservationData" class="loading-container">
    <LoadingSpinner />
  </div>
  <div v-else>
    <h3 class="reservation-title">
      <img class="res-logo" src="../../assets/res-page-logo.svg" alt="" />
      예약 정보
    </h3>
    <table class="table-container">
      <thead>
        <tr>
          <th width="5%"></th>
          <th width="30%">호텔정보</th>
          <th width="25%">날짜</th>
          <th width="10%">인원수</th>
          <th width="10%">결제 금액</th>
          <th width="20%">예약 취소</th>
        </tr>
      </thead>
      <tbody
        v-for="(resData, index) in reservationList.allData"
        :key="resData.index"
      >
        <tr class="reservation-card-container">
          <ReservationCard :propsData="resData" :keyIndex="index" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ReservationCard from '@/components/Reservation/ReservationCard';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      testArr: [],
    };
  },
  computed: {
    ...mapState(['reservationList']),
    isReservationData() {
      if (this.reservationList.hasOwnProperty('allData')) return false;
      return true;
    },
  },
  created() {
    this.$store.dispatch('RESERVATION_INFO');
  },
  components: {
    ReservationCard,
    LoadingSpinner,
  },
};
</script>

<style lang="scss" scoped>
.res-logo {
  display: inline-block;
  width: 85px;
}

.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

table > thead > tr > th {
  padding: 15px;
}

thead {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
}

tbody {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
}

.reservation-title {
  text-align: left;
  text-indent: 20px;
}

.table-container {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  margin-top: 35px;
  width: 100%;
}

.reservation-card-container {
  justify-content: space-around;
  align-items: center;
}
</style>
