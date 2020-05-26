<template>
  <div class="filter-wrap"></div>
</template>

<script>
import DateFilterButtonComponent from '@/components/Datepicker/DateFilterButtonComponent';
import PersonFilterButtonComponent from '@/components/PersonFilter/PersonFilterButtonComponent';
import PriceFilterButtonComponent from '@/components/PriceFilter/PriceFilterButtonComponent';
import FilterSearchButtonComponent from '@/components/FilterSearchButtonComponent';

export default {
  components: {
    // DateFilterButtonComponent,
    // PersonFilterButtonComponent,
    // PriceFilterButtonComponent,
    // FilterSearchButtonComponent,
  },
};
</script>

<style lang="scss" scoped>
.filter-wrap {
  margin-top: 50px;
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
