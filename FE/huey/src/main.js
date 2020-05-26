import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import AirBnbStyleDatepicker from '@/utils/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Trend from 'vuetrend';
require('./directives/Index.js');

Vue.config.productionTip = false;

Vue.use(Trend);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(AirBnbStyleDatepicker, {
  sundayFirst: false,
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  daysShort: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  colors: {
    selected: '#00a699',
    inRange: '#66e2da',
    selectedText: '#fff',
    text: '#565a5c',
    inRangeBorder: '#33dacd',
    disabled: '#fff',
  },
  texts: {
    apply: 'Apply',
    cancel: 'Cancel',
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
