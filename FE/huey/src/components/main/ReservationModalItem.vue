<template>
  <div class="reservation-modal-item-wrap">
    <div class="currentPrice-wrap">
      <!-- <span v-if="!this.$store.getters.isPayloadData">&#8361; 0원</span> -->
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
      <!-- {hotelRating} -->
      {{ this.$store.state.payloadDate.hotelRating }}
    </div>
    <div class="date-info-wrap">
      <div>날짜</div>
      <div class="date-info">
        <!-- {checkInDateInfoText}{checkOutDateInfoText} -->
        test
      </div>
    </div>
    <div class="person-info-wrap">
      <div>인원</div>
      <!-- <div class="person-info">{personInfoText.join(', ')}</div> -->
    </div>
    <div class="charge-info-wrap">
      <div class="charge-info-item">
        <span>숙박비 (10박 x 2인)</span>
        <span>&#8361; 123123</span>
      </div>
      <div class="charge-info-item">
        <span>청소비</span>
        <span>&#8361; 0</span>
      </div>
      <div class="charge-info-item">
        <span>서비스 수수료</span>
        <span>&#8361; 0</span>
      </div>
      <div class="charge-info-item">
        <span>숙박세와 수수료</span>
        <span>&#8361; 0</span>
      </div>
      <div class="charge-info-item">
        <span>합계</span>
        <!-- <span>&#8361; {totalCharge}</span> -->
        <span>&#8361; 123123</span>
      </div>
    </div>
    <button class="reservation-btn">예약하기</button>
    <div class="reservation-info-text">
      예약 확정 전에는 요금이 청구되지 않습니다.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>
