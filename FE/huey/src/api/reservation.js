import { instance, filter } from './index';

// API를 추가할 예정
function fetchPosts() {
  return filter.get('/');
}

function initMainRedner() {
  return instance.get('mock/init');
}

function reservationInfo() {
  return instance.get('mock/reservationInfo/guswns1659@gmail.com');
}

export { fetchPosts, initMainRedner, reservationInfo };
