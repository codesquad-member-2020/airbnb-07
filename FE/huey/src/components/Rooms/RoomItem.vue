<template>
  <div
    class="flex flex-col p-1 mb-4"
    @mouseover="$emit('room:hovered', room)"
    @mouseleave="$emit('room:unhovered')"
  >
    <siema-slide :total-items="room.urls.length">
      <template slot="slide">
        <a href="#" v-for="(img, index) in room.urls" :key="index">
          <img :src="img.url" :alt="room.hotelName" class="rounded w-full" />
        </a>
      </template>

      <div slot="info" class="w-1/2">
        <div class="room-text-info-wrap">
          <div class="info-top">
            <div class="location">{{ room.location }}</div>
            <span class="person-number"
              >최대 인원수: {{ room.availableGuest }}명</span
            >
            <div class="rating-wrap">
              <img
                class="rating-star-icon"
                src="../../assets/rating-star.svg"
                alt="rating-star"
              />
              {{ room.hotelRating }}
            </div>
          </div>
          <div class="info-main">
            <div class="detail-address">
              <div class="street" :title="`${room.street}`">
                {{ room.street }}
              </div>
            </div>
            <div class="hotelName" :title="`${room.hotelName}`">
              {{ room.hotelName }}
            </div>
            <div class="price-container">
              <span class="previousPrice"
                >&#8361; {{ room.previousPrice }}</span
              >
              <span class="currentPrice">&#8361; {{ room.currentPrice }}</span>
              <span> / 1박</span>
            </div>
          </div>
          <div class="info-bottom">
            <div class="total-charge">
              총 요금: &#8361; {{ room.currentPrice }}
            </div>
            <button
              class="reserve-btn"
              :data-accommodationId="room.id"
              @click="this.openReservationModal"
            >
              예 약
            </button>
          </div>
        </div>
      </div>
    </siema-slide>
  </div>
</template>

<script>
import SiemaSlide from './SiemaSlide';
import StarRating from './StarRating';
import { mapState } from 'vuex';

export default {
  components: {
    SiemaSlide,
    // StarRating,
  },
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState([
      'clickedAccommodationid',
      'selectedCountry',
      'checkinDate',
      'checkoutDate',
      'guestNumber',
    ]),
  },
  methods: {
    openReservationModal({
      target: {
        dataset: { accommodationid },
      },
    }) {
      if (
        !(
          this.selectedCountry &&
          this.checkinDate &&
          this.checkoutDate &&
          this.guestNumber
        )
      )
        return alert('필수 사항을 입력해주세요');
      this.$store.commit('setOpenModal', this.propsData);
      this.$store.commit('setAccommodationId', accommodationid);
    },
  },
};
</script>

<style lang="scss" scoped>
.room-card-wrap {
  min-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 1px 3px #32325a1a, 0 1px 3px #0000000d;
}

.rating-wrap {
  width: 50px;
}

.price-container {
  text-align: left;
  margin-top: 20px;
}
.detail-address {
  margin-top: 15px;
}

.room-img {
  width: 100%;
  height: 65%;
  border-radius: 5px;
}

.person-number {
  font-size: 12px;
  line-height: 0px;
}

.street {
  font-size: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}

.room-text-info-wrap {
  white-space: nowrap;
  padding: 10px 10px;
  letter-spacing: -0.03rem;
  .info-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    font-size: 15px;
    .location {
      color: #95a5a6;
    }
    .rating-star-icon {
      width: 13px;
      height: 13px;
      margin-right: 3px;
      display: inline-block;
    }
  }
  .info-main {
    .hotelName {
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 2px 0px;
      line-height: 20px;
      height: 22px;
      letter-spacing: -0.05rem;
      cursor: help;
      text-align: left;
      margin: 10px 0px;
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
