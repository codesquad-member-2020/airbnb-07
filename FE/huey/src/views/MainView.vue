<template>
  <div class="filter-wrap">
    <date-filter-button-component></date-filter-button-component>
    <person-filter-button-component></person-filter-button-component>
  </div>
</template>

<script>
import DateFilterButtonComponent from '@/components/DateFilterButtonComponent';
import PersonFilterButtonComponent from '@/components/PersonFilterButtonComponent';

export default {
  components: {
    DateFilterButtonComponent,
    PersonFilterButtonComponent,
  },
};
</script>

<style lang="scss" scoped>
.filter-wrap {
  display: flex;
  justify-content: space-around;
  width: 400px;
}
</style>
