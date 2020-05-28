<template>
  <div class="header-container">
    <div @click="toMainPage">
      <img class="air_logo_title" src="../assets/airbnb-logo.png" alt="" />
    </div>
    <div class="filter-container">
      <div>Metropolitan City of Florence, 이탈리아</div>
      <div>
        <DateFilterButtonComponent />
      </div>
      <div>
        <PersonFilterButtonComponent />
      </div>
      <div class="header-price-btn">
        <PriceFilterButtonComponent />
      </div>
      <div class="header-search-btn">
        <FilterSearchButtonComponent />
      </div>
    </div>
    <div class="header-menu">
      <div>
        <svg
          aria-hidden="true"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          style="display: block; height: 16px; width: 16px; fill: currentcolor;"
        >
          <path
            d="M1.24 11.251h3.307c.323 1.698.898 3.14 1.656 4.032a7.515 7.515 0 0 1-4.964-4.032zm13.52 0a7.516 7.516 0 0 1-4.962 4.032c.757-.892 1.332-2.334 1.655-4.033zm-4.849 0C9.473 13.298 8.685 14.75 8 14.75s-1.473-1.452-1.911-3.5zm.242-5.001a15.91 15.91 0 0 1 0 3.501H5.847a15.91 15.91 0 0 1 0-3.501zm5.142 0a7.52 7.52 0 0 1 0 3.5h-3.629a18.251 18.251 0 0 0 0-3.5zm-14.59 0h3.628a18.252 18.252 0 0 0 0 3.5H.706a7.52 7.52 0 0 1 0-3.5zM9.798.717A7.516 7.516 0 0 1 14.76 4.75h-3.307c-.308-1.612-.841-2.993-1.542-3.892zm-3.596 0c-.757.893-1.332 2.334-1.656 4.034L1.24 4.75A7.517 7.517 0 0 1 6.119.738zM8 1.25c.685 0 1.473 1.452 1.911 3.5H6.09c.437-2.048 1.225-3.5 1.91-3.5z"
          ></path>
        </svg>
      </div>
      <div class="down-arrow">
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          style="display: block;"
        >
          <path
            d="M1 1L4.5 4.5L8 1"
            stroke="currentcolor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div>
        <button class="help-btn" @click="toReservationPage">마이 페이지</button>
      </div>
      <div class="sign-btn-container">
        <button class="signup-btn">로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script>
import DateFilterButtonComponent from '@/components/Datepicker/DateFilterButtonComponent';
import PersonFilterButtonComponent from '@/components/PersonFilter/PersonFilterButtonComponent';
import FilterSearchButtonComponent from '@/components/FilterSearchButtonComponent';
import PriceFilterButtonComponent from '@/components/PriceFilter/PriceFilterButtonComponent';

export default {
  components: {
    DateFilterButtonComponent,
    PersonFilterButtonComponent,
    FilterSearchButtonComponent,
    PriceFilterButtonComponent,
  },
  methods: {
    toReservationPage() {
      this.$router.push('/reservation');
    },

    toMainPage() {
      if (this.$route.path !== '/main') {
        this.$router.push('/main');
        this.$store.commit('setOpenModal');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 80px;
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
}

.header-search-btn {
  padding: 17px 20px 0px 20px;
  color: rgb(255, 56, 92);
}

.filter-container {
  display: flex;
  border: 1px solid rgb(247, 247, 247);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  > div {
    padding: 14px 20px;
    border-right: 1px solid rgb(247, 247, 247);
  }
  :last-child {
    // border-right: none;
  }
}

.header-menu {
  display: flex;
  align-items: center;
  width: 200px;
  height: 45px;
  justify-content: flex-end;
}

.air_logo_title {
  width: 180px;
  margin-left: -35px;
  cursor: pointer;
}

.signup-btn {
  margin-left: 20px;
  border: 1px solid rgb(235, 235, 235);
  align-items: center;
  border-radius: 21px;
  height: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  width: 90px;
}

.help-btn {
  color: #ff385c;
  margin-left: 20px;
}

.sign-btn-container {
  height: 100%;
}

.down-arrow {
  margin-left: 7px;
}
</style>
