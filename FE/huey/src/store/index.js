import Vue from 'vue';
import Vuex from 'vuex';
import { initMainRedner } from '@/api/reservation';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    initRenderRooms: [],
    testCount: 0,
  },

  mutations: {
    setInitRenderData(state, renderData) {
      state.initRenderRooms = renderData;
    },
  },

  actions: {
    async INIT_RENDER({ commit }) {
      const { data } = await initMainRedner();
      commit('setInitRenderData', data);
    },
  },
});
