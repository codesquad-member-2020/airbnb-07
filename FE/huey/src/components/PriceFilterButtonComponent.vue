<template>
  <div>
    <b-button v-b-modal.my-price>
      {{ priceData(minPrice, maxPrice) || '요급' }}
    </b-button>
    <b-modal id="my-price">
      <div>
        <span> 평균 가격 : 100,000</span>
      </div>
      <AirbnbStyleChartCount />
      <AirbnbStylePriceCount @chageValue="test" />
    </b-modal>
  </div>
</template>

<script>
import AirbnbStyleChartCount from '@/components/AirbnbStyleChartCount';
import AirbnbStylePriceCount from '@/components/AirbnbStylePriceCount';

export default {
  data() {
    return {
      minPrice: 0,
      maxPrice: 12000,
    };
  },
  components: {
    AirbnbStyleChartCount,
    AirbnbStylePriceCount,
  },
  methods: {
    priceData(minPrice, maxPrice) {
      return `₩${this.minPrice} ~ ₩${this.maxPrice}`;
    },
    test(e) {
      this.minPrice = e.minValue;
      this.maxPrice = e.maxValue;
    },
  },
};
</script>

<style></style>
