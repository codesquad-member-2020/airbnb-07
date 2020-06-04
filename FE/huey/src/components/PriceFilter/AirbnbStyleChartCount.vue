<template>
  <div>
    <trend
      :data="rangeRoomsTotal"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
      autoDrawEasing="linear"
    >
    </trend>
  </div>
</template>

<script>
export default {
  props: ['roomNumber'],
  computed: {
    rangeRoomsTotal: function () {
      return this.roomNumber.map(item => item.total);
    },
  },
};
</script>

<style></style>
