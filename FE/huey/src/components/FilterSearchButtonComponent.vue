<template>
  <div>
    <button @click="searchRooms">검색</button>
  </div>
</template>

<script>
export default {
  methods: {
    searchRooms() {
      this.$router.push('/rooms');
    },
  },
};
</script>

<style></style>
