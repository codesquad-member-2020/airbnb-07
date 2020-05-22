import { filter } from './index';

// API를 추가할 예정
function fetchPosts() {
  return filter.get('/');
}

export { fetchPosts };
