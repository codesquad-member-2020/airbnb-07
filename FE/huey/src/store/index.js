import Vue from 'vue';
import Vuex from 'vuex';
import { initMainRedner, reservationInfo } from '@/api/reservation';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    initRenderRooms: [],
    reservationList: [],
    isOpenModal: false,
    payloadDate: [],
    isPayload: false,
    checkinDate: '',
    checkoutDate: '',
    adultCount: 0,
    childrenCount: 0,
    babyCount: 0,
    guestNumber: 0,
    minPirce: 0,
    maxPrice: 0,
    selectGuestInfo: '',
  },
  getters: {
    isPayloadData(state) {
      if (state.payloadDate.hasOwnProperty('currentPrice'))
        state.isPayload = !state.isPayload;
      return state.isPayload;
    },

    dateCount(state) {
      const daysBetween =
        (Date.parse(state.checkinDate) - Date.parse(state.checkoutDate)) /
        (24 * 3600 * 1000);
      return Math.abs(daysBetween);
    },

    sumPrice(state, getters) {
      const result =
        state.payloadDate.currentPrice * getters.dateCount * state.guestNumber;
      return result;
    },
  },

  mutations: {
    setInitRenderData(state, renderData) {
      state.initRenderRooms = renderData;
    },
    setReservationInfo(state, reservationData) {
      state.reservationList = reservationData;
    },
    setOpenModal(state, payload) {
      state.isOpenModal = !state.isOpenModal;
      if (payload === 'undefined') return;
      state.payloadDate = payload;
    },
    setCheckInDate(state, value) {
      state.checkinDate = value;
    },
    setCheckOutDate(state, value) {
      state.checkoutDate = value;
    },
    setGuestNumber(state, number) {
      state.guestNumber = number;
    },
    personData(state) {
      this._mutations.setGuestNumber[0](
        state.adultCount + state.childrenCount + state.babyCount,
      );
      let result = '';
      if (state.adultCount + state.childrenCount > 0 && state.babyCount > 0) {
        return (state.selectGuestInfo = `게스트 ${
          state.adultCount + state.childrenCount
        }명, 유아 ${state.babyCount}명`);
      }
      if (state.adultCount + state.childrenCount > 0) {
        let guest = state.adultCount + state.childrenCount;
        result += `게스트 ${guest}명`;
        return (state.selectGuestInfo = result);
      }
      if (state.babyCount > 0) {
        return (state.selectGuestInfo = `유아 ${state.babyCount}명`);
      }
      return '';
    },
    increaseEvent(state, payload) {
      if (state.adultCount + state.childrenCount + state.babyCount >= 8) return;
      switch (payload) {
        case 'adultCount':
          state.adultCount++;
          break;
        case 'childrenCount':
          state.childrenCount++;
          break;
        case 'babyCount':
          state.babyCount++;
          break;
      }
    },
    decreaseEvent(state, payload) {
      if (payload.value <= 0) return;
      switch (payload.name) {
        case 'adultCount':
          --state.adultCount;
          break;
        case 'childrenCount':
          --state.childrenCount;
          break;
        case 'babyCount':
          --state.babyCount;
          break;
      }
    },
    initState(state) {
      state.adultCount = 0;
      state.babyCount = 0;
      state.childrenCount = 0;
      state.checkinDate = '';
      state.checkoutDate = '';
      state.minPirce = 0;
      state.maxPrice = 0;
      state.selectGuestInfo = '';
    },
  },

  actions: {
    async INIT_RENDER({ commit }) {
      const { data } = await initMainRedner();
      commit('setInitRenderData', data);
    },

    async RESERVATION_INFO({ commit }) {
      const { data } = await reservationInfo();
      commit('setReservationInfo', data);
    },
  },
});
