<template>
  <div>
    <vue-slider
      ref="slider"
      v-model="value"
      v-bind="options"
      @drag-end="changePrice"
    ></vue-slider>
    <div class="price-detail-wrap">
      <span>{{ this.value[0] }}</span>
      <span>{{ this.value[1] }}</span>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  data() {
    return {
      value: [120000, 1000000],
      options: {
        dotSize: 14,
        width: 'auto',
        height: 4,
        contained: false,
        direction: 'ltr',
        data: null,
        min: 0,
        max: 1200000,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: false,
        tooltip: 'active',
        tooltipPlacement: 'top',
        tooltipFormatter: void 0,
        useKeyboard: false,
        keydownHook: null,
        dragOnClick: false,
        enableCross: false,
        fixed: false,
        minRange: void 0,
        maxRange: void 0,
        order: true,
        marks: false,
        dotOptions: void 0,
        process: true,
        dotStyle: void 0,
        railStyle: void 0,
        processStyle: void 0,
        tooltipStyle: void 0,
        stepStyle: void 0,
        stepActiveStyle: void 0,
        labelStyle: void 0,
        labelActiveStyle: void 0,
      },
    };
  },
  components: {
    VueSlider,
  },
  methods: {
    changePrice(e) {
      this.$emit('chageValue', {
        minValue: this.value[0],
        maxValue: this.value[1],
      });
    },
  },
};
</script>

<style>
.price-detail-wrap {
  display: flex;
  justify-content: space-around;
}
</style>
