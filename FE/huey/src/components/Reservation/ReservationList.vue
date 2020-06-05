<template>
  <!-- <div v-if="isReservationData" class="loading-container">
    <LoadingSpinner />
  </div> -->
  <div>
    <h3 class="reservation-title">
      <img class="res-logo" src="../../assets/res-page-logo.svg" alt="" />
      예약 정보
    </h3>
    <table
      class="table-container"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="this.isinfiniteScroll"
      :infinite-scroll-distance="this.limitScroll"
    >
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
        v-for="(post, index) in this.reservationList"
        data-aos="slide-up"
        data-aos-offset="100"
        data-aos-easing="ease-out-back"
        :key="post.index"
      >
        <tr class="reservation-card-container">
          <ReservationCard :propsData="post" :keyIndex="index" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ReservationCard from '@/components/Reservation/ReservationCard';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      posts: [],
      limit: 5,
      busy: false,
    };
  },
  computed: {
    ...mapState(['isinfiniteScroll', 'reservationList', 'limitScroll']),
    // 예약페이지 리팩토링 : loading spinner 추가
    // isReservationData() {
    //   if (
    //     this.reservationList.length > 0
    //     // this.$store.state.reservationList[0].hasOwnProperty('accommodationId')
    //   )
    //     return false;
    //   return true;
    // },
  },
  methods: {
    loadMore() {
      this.$store.dispatch('RESERVATION_INFO');
    },
  },
  created() {
    this.$store.commit('setInitToken');
    this.$store.commit('setLoginUser');
    this.loadMore();
    AOS.init();
  },
  components: {
    ReservationCard,
    // LoadingSpinner,
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
