import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiperInstance = null;

const isDesktop = () => window.innerWidth >= 1024;

const initSwiper = () => {
  if (isDesktop() && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });
  } else if (!isDesktop() && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
};

const handleResize = () => {
  initSwiper();
};

document.addEventListener('DOMContentLoaded', function() {
  initSwiper();
  window.addEventListener('resize', handleResize);
});