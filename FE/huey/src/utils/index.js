import './polyfills';
import AirbnbStyleDatepicker from '@/components/Datepicker/AirbnbStyleDatepicker';

const AirbnbStyleDatepickerPlugin = {
  install(Vue, options) {
    Vue.component(AirbnbStyleDatepicker.name, {
      ...options,
      ...AirbnbStyleDatepicker,
    });
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.AirbnbStyleDatepicker = AirbnbStyleDatepickerPlugin;
}
export default AirbnbStyleDatepickerPlugin;
