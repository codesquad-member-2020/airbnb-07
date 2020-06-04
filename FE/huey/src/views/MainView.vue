<template>
  <div>
    <HeaderComponent />
    <Rooms />
    <div class="filter-wrap"></div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import Rooms from '@/components/main/Rooms';

export default {
  components: {
    HeaderComponent,
    Rooms,
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
</style>
