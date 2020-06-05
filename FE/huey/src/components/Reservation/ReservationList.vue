<template>
  <!-- <div v-if="isTestLoading" class="loading-container">
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
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="limit"
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
        v-for="(post, index) in posts"
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
  // computed: {
  //   ...mapState(['reservationList']),
  //   isReservationData() {
  //     if (this.reservationList.hasOwnProperty('allData')) return false;
  //     return true;
  //   },
  // },
  methods: {
    loadMore() {
      console.log('Adding 5 more data results');
      this.busy = true;
      axios
        .get('http://15.164.35.235/api/authorization/reservationInfo', {
          headers: {
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\.eyJ1c2VyRW1haWwiOiJcImd1c3duczE2NTlAZ21haWwuY29tXCIifQ\.Vv1Wok3UbMpF4ghbB2i6aGdh53HoazhVznmKAQnuijs',
          },
        })
        .then(response => {
          console.log(response.data.allData);
          const append = response.data.allData.slice(
            this.posts.length,
            this.posts.length + this.limit,
          );
          this.posts = this.posts.concat(append);
          this.busy = false;
        });
    },
  },
  created() {
    this.$store.commit('setInitToken');
    this.$store.commit('setLoginUser');
    this.loadMore();
    AOS.init();
    // this.$store.dispatch('RESERVATION_INFO');
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
