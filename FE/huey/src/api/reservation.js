import { instance, authoriztion } from './index';

function fetchPosts() {
  return authoriztion.get('/');
}

function initMainRedner() {
  return instance.get('/init');
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
