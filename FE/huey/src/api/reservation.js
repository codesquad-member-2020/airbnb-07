import { instance, filter } from './index';

// API를 추가할 예정
function fetchPosts() {
  return filter.get('/');
}

function initMainRedner() {
  return instance.get('mock/init');
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

export {
  fetchPosts,
  initMainRedner,
  setReservation,
  removeReservation,
  reservationInfo,
};
