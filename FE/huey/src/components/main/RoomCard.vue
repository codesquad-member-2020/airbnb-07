<template>
  <div class="room-card-wrap">
    <img class="room-img" :src="`${propsData.urls[0].url}`" alt="room-image" />
    <div class="room-text-info-wrap">
      <div class="info-top">
        <!-- <div class="location">{location}</div> -->
        <div class="location">{{ propsData.location }}</div>
        <div class="street">{{ propsData.street }}</div>
        <div>
          <!-- <img
            class="rating-star-icon"
            src="{ratingStar}"
            alt="rating-star"
          /> -->
          {{ propsData.hotelRating }}
        </div>
      </div>
      <div class="info-main">
        <div class="guestNumber">
          최대 인원수: {{ propsData.availableGuest }}명
        </div>
        <div class="hotelName" title="">{{ propsData.hotelName }}</div>
        <div>
          <span class="previousPrice"
            >&#8361; {{ propsData.previousPrice }}</span
          >
          <span class="currentPrice">&#8361; {{ propsData.currentPrice }}</span>
          <span> / 1박</span>
        </div>
      </div>
      <div class="info-bottom">
        <div class="total-charge">
          <!-- 총 요금: &#8361; {numberComma(currentPrice * 10)} -->
          총 요금: &#8361; 334334
        </div>
        <button class="reserve-btn">예 약</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['propsData'],
};
</script>

<style lang="scss" scoped>
.room-card-wrap {
  min-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: '0 1px 3px #32325a1a, 0 1px 3px #0000000d';
}

.room-img {
  width: 100%;
  height: 65%;
  border-radius: 5px;
}

.street {
  font-size: 1px;
}

.room-text-info-wrap {
  padding: 10px 10px;
  letter-spacing: -0.03rem;
  .info-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 15px;
    .location {
      color: #95a5a6;
    }
    .rating-star-icon {
      width: 13px;
      height: 13px;
      margin-right: 3px;
    }
  }
  .info-main {
    .hotelName {
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 5px;
      line-height: 20px;
      height: 22px;
      letter-spacing: -0.05rem;
      cursor: help;
    }
    .previousPrice {
      color: #7f8c8d;
      margin-right: 8px;
      text-decoration: line-through;
    }
    .currentPrice {
      color: #000;
      font-weight: 600;
    }
  }
  .info-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7px;
    font-size: 15px;
    .total-charge {
      color: #95a5a6;
    }
  }
  .reserve-btn {
    color: #fff;
    border: none;
    outline: none;
    background-color: #ff385c;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
  }
}
</style>
