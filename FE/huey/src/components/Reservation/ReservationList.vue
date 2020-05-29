<template>
  <div>
    <h2 class="reservation-title">예약 정보</h2>
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
      <tbody v-for="(resData, index) in this.testArr" :key="resData.index">
        <tr class="reservation-card-container">
          <ReservationCard :propsData="resData" :keyIndex="index" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { testList } from './mock';
import ReservationCard from '@/components/Reservation/ReservationCard';

export default {
  data() {
    return {
      testArr: [],
    };
  },
  created() {
    this.testArr = testList[0].allData;
  },
  components: {
    ReservationCard,
  },
};
</script>

<style lang="scss" scoped>
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
