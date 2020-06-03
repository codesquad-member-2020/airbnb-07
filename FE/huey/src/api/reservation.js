import { instance, authoriztion } from './index';

// API를 추가할 예정
function fetchPosts() {
  return authoriztion.get('/');
}

function initMainRedner() {
  return instance.get('/init');
  // return filter.get();
}

function setReservation(accommodationId, setData) {
  return authoriztion.post(`${accommodationId}`, setData);
}

function removeReservation(accommodationId, reservationId) {
  return authoriztion.delete(`${accommodationId}/${reservationId}`);
}

function reservationInfo() {
  return authoriztion.get('reservationInfo');
}

function filterRooms(filterData) {
  return instance.post('filter', filterData);
}

export {
  fetchPosts,
  initMainRedner,
  setReservation,
  removeReservation,
  reservationInfo,
  filterRooms,
};
