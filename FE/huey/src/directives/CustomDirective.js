import Vue from 'vue';

const ImgLazyLoading = {
  inserted(el, binding) {
    const options = {
      root: document.querySelector(binding.value.rootScrollEl),
      rootMargin: '1000px 0px',
    };

    const placeholderEl = document.createElement('div');
    placeholderEl.setAttribute(
      'style',
      'position: absolute; top: 0; left: 0; right: 0; bottom:0; background-color: #ccc;transition : opacity 1s ease-in-out;',
    );

    el.appendChild(placeholderEl);

    el.observer = new IntersectionObserver(changes => {
      for (const change of changes) {
        if (change.intersectionRatio > 0) {
          el.observer.disconnect();

          const imgEl = document.createElement('img');
          imgEl.setAttribute('src', binding.value);

          // 이미지 로드가 되면 img태그를 append
          // placeholder는 제거해
          imgEl.onload = function () {
            console.log('img onload : ' + binding.value);
            placeholderEl.style['opacity'] = 0;
            el.appendChild(imgEl);
            setTimeout(() => {
              placeholderEl.remove();
            }, 600);
          };
        }
      }
    }, options);

    el.observer.observe(el);
  },
  unbind(el, binding) {
    if (el.observer) {
      el.observer.disconnect();
    }
  },
};

Vue.directive('img-lazy-loading', ImgLazyLoading);
