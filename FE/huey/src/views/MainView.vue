<template>
  <div class="filter-wrap">
    <date-filter-button-component></date-filter-button-component>
    <person-filter-button-component></person-filter-button-component>
    <price-filter-button-component
      class="range-slider-container"
    ></price-filter-button-component>
  </div>
</template>

<script>
import DateFilterButtonComponent from '@/components/DateFilterButtonComponent';
import PersonFilterButtonComponent from '@/components/PersonFilterButtonComponent';
import PriceFilterButtonComponent from '@/components/PriceFilterButtonComponent';

export default {
  components: {
    DateFilterButtonComponent,
    PersonFilterButtonComponent,
    PriceFilterButtonComponent,
  },
};
</script>

<style lang="scss" scoped>
.filter-wrap {
  display: flex;
  justify-content: space-around;
  width: 600px;
}

.range-slider-container {
  width: 200px;
}
</style>
