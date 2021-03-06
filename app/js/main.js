'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let swiper = new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
  });

  // menu

  const menuBtn = document.querySelector('.header__menu-btn'),
        menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
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