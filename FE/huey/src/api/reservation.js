import { instance, authoriztion } from './index';

// API를 추가할 예정
function fetchPosts() {
  return authoriztion.get('/');
}

function initMainRedner() {
  return instance.get('mock/init');
  // return filter.get();
}

function setReservation(accommodationId, setData) {
  return instance.post(`mock/${accommodationId}/guswns1659@gmail.com`, setData);
}

function removeReservation(accommodationId, reservationId) {
  return instance.delete(
    `mock/${accommodationId}/${reservationId}/guswns1659@gmail.com`,
  );
}

function reservationInfo() {
  return instance.get('mock/reservationInfo/guswns1659@gmail.com');
}

function filterRooms(filterData) {
  return instance.post('mock/filter', filterData);
}

export {
  fetchPosts,
  initMainRedner,
  setReservation,
  removeReservation,
  reservationInfo,
  filterRooms,
};
