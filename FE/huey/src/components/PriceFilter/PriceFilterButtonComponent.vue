<template>
  <div>
    <b-button v-b-modal.my-price>
      {{
        priceData(this.$store.state.minPrice, this.$store.state.maxPrice) ||
        '요금'
      }}
    </b-button>
    <b-modal id="my-price">
      <div>
        <span> 평균 가격 : 100,000</span>
      </div>
      <AirbnbStyleChartCount :roomNumber="this.$store.state.chartInPrice" />
      <AirbnbStylePriceCount @chageValue="chagnePrice" />
    </b-modal>
  </div>
</template>

<script>
import AirbnbStyleChartCount from '@/components/PriceFilter/AirbnbStyleChartCount';
import AirbnbStylePriceCount from '@/components/PriceFilter/AirbnbStylePriceCount';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['minPirce', 'maxPrice']),
  },
  components: {
    AirbnbStyleChartCount,
    AirbnbStylePriceCount,
  },
  methods: {
    priceData(minPrice, maxPrice) {
      if (minPrice === null && maxPrice === null) return false;
      return `₩${minPrice} ~ ₩${maxPrice}`;
    },
    chagnePrice({ minValue, maxValue }) {
      this.$store.commit('setPrice', { minValue, maxValue });
    },
  },
};
</script>

<style></style>
