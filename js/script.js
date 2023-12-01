'use strict';

const swiper = new Swiper('.material__slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });

window.addEventListener('scroll', function () {//появление подложки при скролле
  scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});

