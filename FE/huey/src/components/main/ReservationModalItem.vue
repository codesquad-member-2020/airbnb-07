<template>
  <div v-if="isLoading" class="loading-container">
    <LoadingSpinner />
  </div>
  <div v-else class="reservation-modal-item-wrap">
    <div class="currentPrice-wrap">
      <img
        class="reservation-logo"
        src="../../assets/reservation-logo.svg"
        alt=""
      />
      <span class="currentPrice"
        >&#8361; {{ this.$store.state.payloadDate.currentPrice }}</span
      >
      <span>/1박</span>
    </div>
    <div class="rating-wrap">
      <img
        class="rating-star-icon"
        src="../../assets/rating-star.svg"
        alt="rating-star"
      />
      {{ this.$store.state.payloadDate.hotelRating }}
    </div>
    <div class="date-info-wrap">
      <div class="date-title">날짜</div>
      <div class="date-info">
        {{ this.$store.state.checkinDate }} -
        {{ this.$store.state.checkoutDate }}
      </div>
    </div>
    <div class="person-info-wrap">
      <div class="person-title">인원</div>
      <div class="person-info">
        <PersonFilterButtonComponent />
      </div>
    </div>
    <div class="charge-info-wrap">
      <div class="charge-info-item">
        <span
          >숙박비 ({{ this.$store.getters.dateCount }}박 x
          {{ this.$store.state.guestNumber }}명)</span
        >
        <span>&#8361; {{ this.$store.getters.sumPrice }}</span>
      </div>
      <div class="charge-info-item">
        <span>① 청소비</span>
        <span>&#8361; 15000</span>
      </div>
      <div class="charge-info-item">
        <span>② 서비스 수수료</span>
        <span>&#8361; 2000</span>
      </div>
      <div class="charge-info-item">
        <span>③ 숙박세와 수수료(0.05%)</span>
        <span>&#8361; {{ this.$store.getters.taxTotalPrice }}</span>
      </div>
      <div class="charge-info-item">
        <span>합계(①+②+③)</span>
        <span class="final-price"
          >&#8361; {{ this.$store.getters.taxTotalPrice + 15000 + 2000 }}</span
        >
      </div>
    </div>
    <button class="reservation-btn" @click="onReservation">예약하기</button>
    <div class="reservation-info-text">
      예약 확정 전에는 요금이 청구되지 않습니다.
    </div>
  </div>
</template>

<script>
import PersonFilterButtonComponent from '@/components/PersonFilter/PersonFilterButtonComponent';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { mapState } from 'vuex';

export default {
  components: {
    PersonFilterButtonComponent,
    LoadingSpinner,
  },
  computed: {
    ...mapState(['guestNumber', 'isLoading']),
    setTaxPrice() {
      let result = this.$store.getters.sumPrice;
      result += 0.05 * result;
      return Math.floor(result);
    },
  },

  methods: {
    onReservation() {
      if (!this.guestNumber) return;
      this.$store.commit('toggleLoadingStatus');
      this.$store.dispatch('SET_RESERVATION');
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

.reservation-logo {
  position: absolute;
  width: 74px;
  top: 8px;
  left: 12px;
}

.date-title {
  text-align: left;
  text-indent: 15px;
}

.person-title {
  text-align: left;
  text-indent: 15px;
}

.reservation-modal-item-wrap {
  padding: 25px 30px;
  color: #000;
  .currentPrice-wrap {
    margin-bottom: 10px;
    .currentPrice {
      font-size: 28px;
      font-weight: 600;
      margin-right: 5px;
    }
  }
  .rating-wrap {
    font-size: 16px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #bdc3c7;
    .rating-star-icon {
      width: 13px;
      height: 13px;
      margin-right: 3px;
      display: inline-block;
    }
  }
  .date-info-wrap {
    margin-bottom: 10px;
  }
  .person-info-wrap {
    margin-bottom: 30px;
  }
  .date-info-wrap,
  .person-info-wrap {
    font-weight: 600;
    .date-info,
    .person-info {
      font-weight: 500;
      margin-top: 5px;
      padding: 18px;
      border: 1px solid #bdc3c7;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 5px;
      font-size: 18px;
    }
  }
  .charge-info-wrap {
    margin-bottom: 30px;
    letter-spacing: -0.03rem;
    .charge-info-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #bdc3c7;
      :last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
        font-weight: 600;
      }
    }
  }
  .reservation-btn {
    width: 100%;
    height: 50px;
    color: #fff;
    border: none;
    outline: none;
    background-color: #ff385c;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Noto Sans KR', sans-serif;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    cursor: pointer;
  }
  .reservation-info-text {
    margin-top: 15px;
    text-align: center;
    color: #95a5a6;
  }
}

.final-price {
  color: #ff385c;
}
</style>
