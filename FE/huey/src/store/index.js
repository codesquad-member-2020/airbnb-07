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
  },
  getters: {
    isPayloadData(state) {
      if (state.payloadDate.hasOwnProperty('currentPrice'))
        state.isPayload = !state.isPayload;
      return state.isPayload;
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
  },

  actions: {
    async INIT_RENDER({ commit }) {
      const { data } = await initMainRedner();
      commit('setInitRenderData', data);
    },
  },
});
