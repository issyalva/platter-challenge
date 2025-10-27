import { Swiper, Navigation, Pagination } from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
});