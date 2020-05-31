<template>
  <div class="wrapper">
    <div class="select_wrap">
      <ul class="default_option">
        <li>
          <div class="option">
            <p>도시</p>
          </div>
        </li>
      </ul>
      <ul class="select_ul">
        <li
          v-for="option in countryOptions"
          :value="option.value"
          :key="option.index"
          @click="clickedCountry"
        >
          <div class="option">
            <p>{{ option.value }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      countryOptions: [
        { value: '뉴욕' },
        { value: '보스턴' },
        { value: '워싱턴' },
      ],
    };
  },
  computed: {
    ...mapState(['selectedCountry']),
  },
  mounted() {
    $('.default_option').click(function () {
      $(this).parent().toggleClass('active');
    });

    $('.select_ul li').click(function () {
      let currentele = $(this).html();
      $('.default_option li').html(currentele);
      $(this).parents('.select_wrap').removeClass('active');
    });
  },

  methods: {
    clickedCountry({ target: { innerText } }) {
      this.$store.commit('setSelectedCountry', innerText);
    },
  },
};
</script>

<style lang="scss" scoped>
.select_wrap {
  width: 100px;
  position: relative;
  user-select: none;
}

p {
  margin: 0;
  text-indent: 20px;
}

ul {
  margin: 0;
}

.select_wrap .default_option {
  background: #fff;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
}

.select_wrap .default_option:before {
  content: '';
  position: absolute;
  top: 5px;
  right: 18px;
  width: 6px;
  height: 6px;
  border: 2px solid;
  border-color: transparent transparent #555555 #555555;
  transform: rotate(-45deg);
}

.select_wrap .select_ul {
  position: absolute;
  top: 36px;
  left: -20px;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: none;
}

.select_wrap .select_ul li {
  padding: 10px 20px;
  cursor: pointer;
}

.select_wrap .select_ul li:first-child:hover {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.select_wrap .select_ul li:last-child:hover {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.select_wrap .select_ul li:hover {
  background: #fff4dd;
}

.select_wrap .option {
  display: flex;
  align-items: center;
}

.select_wrap.active .select_ul {
  display: block;
}

.select_wrap.active .default_option:before {
  top: 10px;
  transform: rotate(-225deg);
}
</style>
