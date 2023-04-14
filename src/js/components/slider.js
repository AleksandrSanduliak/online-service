'use strict';
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: 'horizontal',
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1.7,
            spaceBetween: 20,
          },
          555: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1600: {
            slidesPerView: 3,
          }
      }

});
export {swiper}