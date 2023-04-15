'use strict';
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: 'horizontal',
    spaceBetween: 20,
    // autoplay:{
    //   enabled: false,
    //   delay: 1000,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            autoplay:{
              enabled:true,
              delay: 4000,
              pauseOnMouseEnter: true,
            }
          },
          425: {
            slidesPerView: 1.7,
            spaceBetween: 20,
            autoplay:{
              enabled:true,
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }

          },
          555: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 20,
          autoplay:false,
        },
        1600: {
            slidesPerView: 3,
          }
      }

});
export {swiper}