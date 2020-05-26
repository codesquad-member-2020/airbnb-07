import Vue from 'vue';

const ImgLazyLoading = {
  inserted(el, binding) {
    let options = {
      // root: document.querySelector(binding.value.rootScrollEl), // scroll event를 감시할 element를 설정 합니다
      rootMargin: '1000px 0px',
    };

    // 이미지 로드 되기전에 placeholder를 보여주기 위해 element를 생성합니다
    var placeholderEl = document.createElement('div');
    placeholderEl.setAttribute(
      'style',
      'position: absolute; top: 0; left: 0; right: 0; bottom:0; background-color: #ccc;transition : opacity 1s ease-in-out;',
    );

    el.appendChild(placeholderEl);

    // 감시
    el.observer = new IntersectionObserver(changes => {
      for (const change of changes) {
        // element가 노출 되는것을 검사합니다
        if (change.intersectionRatio > 0) {
          // 노출이 되면 옵저버를 해제합니다
          el.observer.disconnect();

          var imgEl = document.createElement('img');
          imgEl.setAttribute('src', binding.value);

          // 이미지 로드가 되면 img태그를 append합니다
          // placeholder는 제거해줍니다.
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
