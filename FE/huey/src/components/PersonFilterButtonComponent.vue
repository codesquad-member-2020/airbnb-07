<template>
  <div>
    <b-button v-b-modal.my-modal>{{
      personData(adultConut, childrenCount, babyCount) || '인원 / 게스트 추가'
    }}</b-button>
    <b-modal id="my-modal">
      <div class="adult-wrap wrap">
        <div class="adult-title title">
          <div>성인</div>
          <div>만 13세 이상</div>
        </div>
        <div class="adult-number number">
          <button
            class="number-btn"
            name="adultConut"
            :value="adultConut"
            @click="decreaseHandler"
          >
            -
          </button>
          <div class="person-number">{{ adultConut }}</div>
          <button
            class="number-btn"
            name="adultConut"
            :value="adultConut"
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
            :value="childrenCount"
            @click="decreaseHandler"
          >
            -
          </button>
          <div class="person-number">{{ childrenCount }}</div>
          <button
            class="number-btn"
            name="childrenCount"
            :value="childrenCount"
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
            :value="babyCount"
            @click="decreaseHandler"
          >
            -
          </button>
          <div class="person-number">{{ babyCount }}</div>
          <button
            class="number-btn"
            name="babyCount"
            :value="babyCount"
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
  data() {
    return {
      adultConut: 0,
      childrenCount: 0,
      babyCount: 0,
    };
  },
  methods: {
    personData(adultConut, childrenCount, babyCount) {
      let result = '';
      if (adultConut + childrenCount > 0 && babyCount > 0) {
        return `게스트 ${adultConut + childrenCount}명, 유아 ${babyCount}명`;
      }
      if (adultConut + childrenCount > 0) {
        let guest = this.adultConut + this.childrenCount;
        result += `게스트 ${guest}명`;
        return result;
      }
      if (babyCount > 0) {
        return `유아 ${babyCount}명`;
      }
      return '';
    },

    increaseHandler(e) {
      const { name, value } = e.target;
      switch (name) {
        case 'adultConut':
          this.adultConut++;
          break;
        case 'childrenCount':
          this.childrenCount++;
          break;
        case 'babyCount':
          this.babyCount++;
          break;
      }
    },

    decreaseHandler(e) {
      const { name, value } = e.target;
      if (value <= 0) return;
      switch (name) {
        case 'adultConut':
          this.adultConut--;
          break;
        case 'childrenCount':
          this.childrenCount--;
          break;
        case 'babyCount':
          this.babyCount--;
          break;
      }
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
</style>
