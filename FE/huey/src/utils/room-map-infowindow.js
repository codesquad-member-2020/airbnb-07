import { initSlides } from './siema-slide';

const createSlideHtml = marker => {
  return marker.room.urls
    .map(image => {
      return `
        <a href="#">
          <img src="${image.url}" alt="${marker.room.name}"/>
        </a>
       `;
    })
    .join('');
};

const createRatingHtml = marker => {
  const maxRating = 5;
  const rating = marker.room.hotelRating;
  const fullStars = Array.from(new Array(rating), (val, index) => index + 1);
  const emptyStars = Array.from(
    new Array(maxRating - rating),
    (val, index) => index + 1 + rating,
  );

  const fullStarsHtml = fullStars
    .map(start => {
      return `<span title="rating">&#9733;</span>`;
    })
    .join('');

  const emptyStarsHtml = emptyStars
    .map(start => {
      return `<span title="rating">&#9734;</span>`;
    })
    .join('');

  return `<div class="ratings text-xs text-teal-dark">${fullStarsHtml}${emptyStarsHtml}</span>`;
};

const createSlideIndicatorHtml = marker => {
  return marker.room.urls
    .map(image => {
      return `<span>&#x25cf;</span>`;
    })
    .join('');
};

const infoWindow = {
  getContentHtml(marker) {
    return `
      <div class="info-window border border-grey rounded" style="width:280px;">
        <div class="siema-container">
          <div class="siema">${createSlideHtml(marker)}</div>
          <div class="indicators">${createSlideIndicatorHtml(marker)}</div>
          <button class="prev">&#x2039;</button>
          <button class="next">&#x203A;</button>
        </div>
        <div class="info">
          <div class="title">${marker.room.hotelName}</div>
          <div class="price">$${marker.room.currentPrice} CAD per month</div>
          ${createRatingHtml(marker)}
        </div>
      </div>`;
  },
  removeWhiteSpace() {
    let iwOuters = document.querySelectorAll('.gm-style-iw');

    for (const iwOuter of iwOuters) {
      iwOuter.style.padding = 0;

      for (const child of iwOuter.querySelectorAll('.gm-style-iw-d')) {
        console.log('called');
        child.style.overflow = 'hidden';
      }
    }
  },

  initSlides(
    containerClass,
    preActionClass,
    nextActionClass,
    siemaClass,
    indicatorsClass,
  ) {
    initSlides(
      containerClass,
      preActionClass,
      nextActionClass,
      siemaClass,
      indicatorsClass,
    );
  },
};

export default infoWindow;
