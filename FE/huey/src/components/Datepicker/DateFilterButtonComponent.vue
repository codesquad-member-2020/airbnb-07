<template>
  <div v-if="showDatepickers">
    <div class="datepicker-container with-button">
      <div class="datepicker-trigger">
        <button id="datepicker-button-trigger">
          {{ formatDates(checkinDate, checkoutDate) || '체크인 / 체크아웃' }}
        </button>
        <airbnb-style-datepicker
          :trigger-element-id="'datepicker-button-trigger'"
          :mode="'range'"
          :date-one="buttonDateOne"
          :date-two="buttonDateTwo"
          :min-date="'2020-06-05'"
          :fullscreen-mobile="true"
          :months-to-show="2"
          :trigger="trigger"
          :offset-y="10"
          :close-after-select="true"
          @date-one-selected="dateOneSelected"
          @date-two-selected="dateTwoSelected"
        />
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format';
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      dateFormat: 'YYYY-MM-DD',
      buttonDateOne: '',
      buttonDateTwo: '',
      alignRight: false,
      showDatepickers: true,
      trigger: false,
    };
  },
  computed: {
    ...mapState(['checkinDate', 'checkoutDate']),
    ...mapMutations(['setCheckInDate', 'setCheckOutDate']),
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = '';
      if (dateOne === null && dateTwo === null) return null;
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat);
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat);
      }
      return formattedDates;
    },
    dateOneSelected(val) {
      this.buttonDateOne = val;
      this.$store.commit('setCheckInDate', val);
    },
    dateTwoSelected(val) {
      this.buttonDateTwo = val;
      this.$store.commit('setCheckOutDate', val);
      this.trigger = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#datepicker-button-trigger {
  text-align: center;
}

.with-button {
  .datepicker-trigger {
    padding-left: 10px;
  }
}
</style>
