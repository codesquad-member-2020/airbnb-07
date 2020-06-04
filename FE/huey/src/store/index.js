import Vue from 'vue';
import Vuex from 'vuex';
import {
  initMainRedner,
  reservationInfo,
  setReservation,
  removeReservation,
  filterRooms,
} from '@/api/reservation';
import roomApi from '@/api/rooms';
import router from '@/routes/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\.eyJ1c2VyRW1haWwiOiJcImd1c3duczE2NTlAZ21haWwuY29tXCIifQ\.Vv1Wok3UbMpF4ghbB2i6aGdh53HoazhVznmKAQnuijs`,
    // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\.eyJ1c2VyRW1haWwiOiJzYW5naHVuX0BkYXVtLm5ldCJ9\.A3mhAUBy6BHEnpnnF8eqTTcQVvq5dvE6U_bSJ2va77c'
    initRenderRooms: [],
    reservationList: [],
    reservationSuccessMessage: '',
    reservationRemoveMeaaage: '',
    clickedAccommodationid: 0,
    selectedCountry: '' || '도시',
    isOpenModal: false,
    payloadDate: [],
    isPayload: false,
    checkinDate: null,
    checkoutDate: null,
    adultCount: 0,
    childrenCount: 0,
    babyCount: 0,
    guestNumber: 0,
    minPrice: null,
    maxPrice: null,
    selectGuestInfo: '',
    renderSearchData: [],
    selectedLocation: { lat: 0, lng: 0 },
    isSearchWait: false,
    isLoading: false,
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
    setReservationMessage(state, resReservationMessage) {
      state.reservationSuccessMessage = resReservationMessage;
    },

    setReservationRemoveMessage(state, removeMessage) {
      state.reservationRemoveMeaaage = removeMessage;
    },
    setOpenModal(state, payload) {
      if (state.isLoading) return;
      state.isOpenModal = !state.isOpenModal;
      if (payload === 'undefined') return;
      state.payloadDate = payload;
    },
    setAccommodationId(state, accommodationid) {
      state.clickedAccommodationid = accommodationid;
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
    setSelectedCountry(state, value) {
      state.selectedCountry = value;
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
      state.minPrice = null;
      state.maxPrice = null;
      state.selectGuestInfo = '';
      state.selectedCountry = '' || '도시';
      state.isPayload = false;
      state.isOpenModal = false;
    },

    setRenderSearchData(state, value) {
      state.renderSearchData = value;
      roomApi.setRoomsData(value);
    },

    setPrice(state, { minValue, maxValue }) {
      state.minPrice = minValue;
      state.maxPrice = maxValue;
    },
    setLocation(state) {
      switch (state.selectedCountry) {
        case 'Seattle':
          state.selectedLocation.lat = 47.637209;
          state.selectedLocation.lng = -122.36207;
          break;
        case 'Boston':
          state.selectedLocation.lat = 42.35843;
          state.selectedLocation.lng = -71.05977;
          break;
        case 'NewYork':
          state.selectedLocation.lat = 40.6643;
          state.selectedLocation.lng = -73.9385;
          break;
      }
    },

    toggleLoadingStatus(state) {
      state.isLoading = !state.isLoading;
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

    async SET_RESERVATION({ state, getters, commit }) {
      const setData = {
        startDate: state.checkinDate,
        endDate: state.checkoutDate,
        people: state.guestNumber,
        totalPrice: getters.sumPrice,
      };
      const { data } = await setReservation(
        state.clickedAccommodationid,
        setData,
      );
      commit('setReservationMessage', data);
      if (data.status !== '200') {
        alert(`${data.message}`);
        commit('setOpenModal');
        commit('toggleLoadingStatus');
      } else {
        let result = confirm(
          '예약이 완료되었습니다! 예약 페이지로 이동하시겠습니까?',
        );
        if (result) {
          commit('toggleLoadingStatus');
          commit('setOpenModal');
          commit('initState');
          router.push('/reservation');
        } else {
          commit('toggleLoadingStatus');
          commit('setOpenModal');
        }
      }
    },

    async REMOVE_RESERVATION({ commit }, payload) {
      const { data } = await removeReservation(
        payload.accommodationId,
        payload.reservationId,
      );
      if (data.status !== '200') {
        alert(`${data.message}`);
        commit('toggleLoadingStatus');
      } else {
        alert(`${data.message}`);
        location.reload(true);
        // commit('toggleLoadingStatus');
      }
      commit('setReservationRemoveMessage', data);
    },

    async FILTERED_ROOMS({ state, commit }, payload) {
      const { data } = await filterRooms(payload);
      commit('setRenderSearchData', data.allData);
      if (data.status === '200') state.isSearchWait = false;
      console.log(data);
    },
  },
});
