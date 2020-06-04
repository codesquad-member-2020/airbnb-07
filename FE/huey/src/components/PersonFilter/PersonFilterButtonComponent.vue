<template>
  <div>
    <b-button v-b-modal.my-modal>
      {{ this.$store.state.selectGuestInfo || '인원 / 게스트 추가' }}</b-button
    >
    <b-modal id="my-modal">
      <div class="adult-wrap wrap">
        <div class="adult-title title">
          <div>성인</div>
          <div>만 13세 이상</div>
        </div>
        <div class="adult-number number">
          <button
            class="number-btn"
            name="adultCount"
            :value="this.$store.state.adultCount"
            @click="decreaseHandler"
          >
            -
          </button>
          <div class="person-number">{{ this.$store.state.adultCount }}</div>
          <button
            class="number-btn"
            name="adultCount"
            :value="this.$store.state.adultCount"
            @click="increaseHandler"
          >
            +
          </button>
        </div>
      </div>
      <div class="children-wrap wrap">
        <div class="title">
          <div>어린이</div>
          <div>2~12세</div>
        </div>
        <div class="number">
          <button
            class="number-btn"
            name="childrenCount"
            :value="this.$store.state.childrenCount"
            @click="decreaseHandler"
          >
            -
          </button>
          <div class="person-number">{{ this.$store.state.childrenCount }}</div>
          <button
            class="number-btn"
            name="childrenCount"
            :value="this.$store.state.childrenCount"
            @click="increaseHandler"
          >
            +
          </button>
        </div>
      </div>
      <div class="baby-wrap wrap">
        <div class="title">
          <div>유아</div>
          <div>2세 미만</div>
        </div>
        <div class="number">
          <button
            class="number-btn"
            name="babyCount"
            :value="this.$store.state.babyCount"
            @click="decreaseHandler"
          >
            -
          </button>
          <div class="person-number">{{ this.$store.state.babyCount }}</div>
          <button
            class="number-btn"
            name="babyCount"
            :value="this.$store.state.babyCount"
            @click="increaseHandler"
          >
            +
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    increaseHandler(e) {
      const { name, value } = e.target;
      this.$store.commit('increaseEvent', name);
      this.$store.commit('personData');
    },

    decreaseHandler(e) {
      const { name, value } = e.target;
      this.$store.commit('decreaseEvent', e.target);
      this.$store.commit('personData');
    },
  },
};
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

.wrap {
  display: flex;
  justify-content: space-between;
  margin: 15px 0px 0px 0px;
}

.title {
  margin-left: 20px;
}

.number {
  display: flex;
  margin-right: 20px;
}

.person-number {
  margin: 0 15px;
  line-height: 40px;
}

.modal-content {
  position: absolute;
  width: 400px;
  font-family: regular;
}

.modal-header {
  padding: 0.3rem 1rem;
}

.modal-backdrop {
  opacity: 0;
}

.modal.fade .modal-dialog {
  transition: none;
}

.fade {
  transition: none;
}

.modal-backdrop {
  display: none;
}

.number-btn {
  border-radius: 50px;
  width: 40px;
  height: 40px;
}

.btn-secondary {
  // background: #41b883;
  // border: 1px solid #41b883;
  color: #2c3e50;
  // padding: 6px 10px;
  // border-radius: 4px;
  // font-size: 15px;
  // font-weight: bold;
  // text-align: center;
  // min-width: 160px;
  border-color: white;
  background-color: white;
}

.btn-secondary:hover {
  color: #2c3e50;
  background-color: #fff;
  border-color: #fff;
  border: none;
  box-shadow: none;
}

.btn-secondary:active {
  color: #2c3e50;
  background-color: #fff;
  border-color: #fff;
  box-shadow: none;
  border: none;
}

.btn-secondary:visited {
  color: #2c3e50;
  background-color: #fff;
  border-color: #fff;
  box-shadow: none;
  border: none;
}

.btn-secondary:focus {
  color: #2c3e50;
  background-color: #fff;
  border-color: #fff;
  box-shadow: none;
  border: none;
}

.btn-secondary:not(:disabled):not(.disabled):active {
  color: #2c3e50;
  background-color: #fff;
  border: none;
  border-color: #fff;
  box-shadow: none;
}

.btn {
  font-size: 13px;
  padding: 0;
  border: 0;
  vertical-align: initial;
}

.btn-primary {
  width: 90px;
  height: 30px;
}
</style>
