<template>
  <div>
    <button @click="searchRooms">
      <svg
        style="
          display: block;
          fill: none;
          height: 16px;
          width: 16px;
          stroke: currentColor;
          stroke-width: 4;
          overflow: visible;
        "
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
          ></path>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'selectedCountry',
      'checkinDate',
      'checkoutDate',
      'guestNumber',
      'minPrice',
      'maxPrice',
    ]),
  },
  methods: {
    searchRooms() {
      if (
        !(
          this.selectedCountry &&
          this.checkinDate &&
          this.checkoutDate &&
          this.guestNumber
        )
      )
        return alert('필수 사항을 입력해주세요');

      this.$store.commit('setLocation');
      const filterData = {
        location: this.selectedCountry,
        startDate: this.checkinDate,
        endDate: this.checkoutDate,
        people: this.guestNumber,
        min: this.minPrice,
        max: this.maxPrice,
      };
      this.$store.state.isSearchWait = true;
      this.$store.dispatch('FILTERED_ROOMS', filterData);
      if (this.$route.path == '/rooms') return;
      this.$router.push('/rooms');
    },
  },
};
</script>

<style></style>
