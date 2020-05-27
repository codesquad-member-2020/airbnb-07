import { instance, filter } from './index';

// API를 추가할 예정
function fetchPosts() {
  return filter.get('/');
}

function initMainRedner() {
  return instance.get('mock/all');
}

export { fetchPosts, initMainRedner };
