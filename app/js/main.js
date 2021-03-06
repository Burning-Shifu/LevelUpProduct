'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // menu

  const menuBtn = document.querySelector('.header__menu-btn'),
        menu = document.querySelector('.menu'),
        menuLink = document.querySelectorAll('.menu__link');

  menuBtn.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      menuBtn.classList.remove('open');
    } else {
      menu.classList.add('open');
      menuBtn.classList.add('open');
    }
  });

  menuLink.forEach((link) => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
      }
    });
  });

  // swiper

  let swiper = new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
  });

  // timer
  
  const endDate = Date.now() + (30 * 60 * 1000);
  
  function getTimeRemaining() {
    const t = endDate - Date.now(),
          mins = Math.floor((t / 1000 / 60) % 60),
          secs = Math.floor((t / 1000) % 60);
          
    return {
      'total': t,
      'mins': mins,
      'secs': secs
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  
  function setTimeRemaining() {
    const mins = document.querySelector('#minutes'),
          secs = document.querySelector('#seconds'),
          timeInterval = setInterval(updTimer, 1000);

    updTimer();

    function updTimer() {
      const t = getTimeRemaining();

      mins.textContent = getZero(t.mins);
      secs.textContent = getZero(t.secs);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  
  setTimeRemaining();   
});