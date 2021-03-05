'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let swiper = new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
  });
});