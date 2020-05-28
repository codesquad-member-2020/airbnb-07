import Vue from 'vue';
import Vuex from 'vuex';
import { initMainRedner } from '@/api/reservation';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    initRenderRooms: [],
    isOpenModal: false,
    payloadDate: [],
    isPayload: false,
    checkinDate: '',
    checkoutDate: '',
    guestNumber: 0,
    minPirce: 0,
    maxPrice: 0,
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
  },

  actions: {
    async INIT_RENDER({ commit }) {
      const { data } = await initMainRedner();
      commit('setInitRenderData', data);
    },
  },
});
