<template>
  <Fragment>
    <td>{{ keyIndex + 1 }}</td>
    <td class="hotel-container">
      <div>
        <img :src="`${propsData.urls[0].url}`" alt="" />
      </div>
      <div class="hotel-name-title">{{ propsData.hotelName }}</div>
    </td>
    <td>
      {{ propsData.reservation.startDate }} -
      {{ propsData.reservation.endDate }}
    </td>
    <td>{{ propsData.reservation.people }}</td>
    <td>{{ propsData.reservation.totalPrice }}원</td>
    <td class="cancel-btn-container">
      <button
        class="reservation-cancel-btn"
        :data-reservationId="propsData.reservation.id"
        :data-accommodationId="propsData.accommodationId"
        @click="removeReservation"
      >
        예약취소
      </button>
    </td>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  props: ['propsData', 'keyIndex'],
  components: { Fragment },
  methods: {
    removeReservation({
      target: {
        dataset: { accommodationid, reservationid },
      },
    }) {
      const roomData = {
        accommodationId: accommodationid,
        reservationId: reservationid,
      };

      let result = confirm('예약을 취소하시겠습니까?');
      if (result) {
        this.$store.dispatch('REMOVE_RESERVATION', roomData);
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hotel-container {
  width: 300px;
  padding: 20px 20px 8px 20px;
}

.hotel-name-title {
  margin-top: 10px;
}

.reservation-cancel-btn {
  width: 60%;
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

.cancel-btn-container {
  width: 100px;
}
</style>
