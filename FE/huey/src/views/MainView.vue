<template>
  <div class="filter-wrap">
    <date-filter-button-component></date-filter-button-component>
    <person-filter-button-component
      class="person-container"
    ></person-filter-button-component>
    <price-filter-button-component
      class="range-slider-container"
    ></price-filter-button-component>
    <filter-search-button-component></filter-search-button-component>
  </div>
</template>

<script>
import DateFilterButtonComponent from '@/components/DateFilterButtonComponent';
import PersonFilterButtonComponent from '@/components/PersonFilterButtonComponent';
import PriceFilterButtonComponent from '@/components/PriceFilterButtonComponent';
import FilterSearchButtonComponent from '@/components/FilterSearchButtonComponent';

export default {
  components: {
    DateFilterButtonComponent,
    PersonFilterButtonComponent,
    PriceFilterButtonComponent,
    FilterSearchButtonComponent,
  },
};
</script>

<style lang="scss" scoped>
.filter-wrap {
  display: flex;
  justify-content: space-around;
  width: 650px;
}

.person-container {
  margin: 0px 0px 0px 20px;
}

.range-slider-container {
  width: 200px;
}
</style>
