<template>
  <div v-if="showDatepickers">
    <div class="datepicker-container with-button">
      <div class="datepicker-trigger">
        <button id="datepicker-button-trigger">
          {{ formatDates(buttonDateOne, buttonDateTwo) || '체크인 / 체크아웃' }}
        </button>
        <airbnb-style-datepicker
          :trigger-element-id="'datepicker-button-trigger'"
          :mode="'range'"
          :date-one="buttonDateOne"
          :date-two="buttonDateTwo"
          :min-date="'2018-04-18'"
          :fullscreen-mobile="true"
          :months-to-show="2"
          :trigger="trigger"
          :offset-y="10"
          :close-after-select="true"
          @date-one-selected="
            val => {
              buttonDateOne = val;
            }
          "
          @date-two-selected="
            val => {
              buttonDateTwo = val;
              trigger = false;
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format';

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
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = '';
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat);
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat);
      }
      return formattedDates;
    },
  },
};
</script>

<style lang="scss" scoped>
// .datepicker-container {
//   padding: 0 30px 20px;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   background: rgba(0, 0, 0, 0.01);
//   max-width: 600px;
//   margin: 0 auto 30px;
//   border-radius: 12px;
// }

#datepicker-button-trigger {
  background: #41b883;
  border: 1px solid #41b883;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  min-width: 160px;
}

.with-button {
  .datepicker-trigger {
    padding-left: 10px;
  }
}
</style>
