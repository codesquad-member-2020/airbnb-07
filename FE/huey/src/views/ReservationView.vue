<template>
  <div>
    <ReservationModal />
    <LazyLoadingTestComponent />
  </div>
</template>

<script>
import LazyLoadingTestComponent from '@/components/LazyLoading/LazyLoadingTestComponent';
import ReservationModal from '@/components/main/ReservationModal';

export default {
  components: {
    ReservationModal,
    LazyLoadingTestComponent,
  },
};
</script>

<style></style>
