import Swiper, { Pagination, Thumbs, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Pagination, Thumbs, Autoplay]);

interface Options {
  [propName: string]: any
}

export const Slider = (selector: string | HTMLElement, options: Options) => {
  const swiper = new Swiper(selector, options);
  const nextSlideTrigger = document.querySelectorAll('[data-next-slide]');
  const prevSlideTrigger = document.querySelectorAll('[data-prev-slide]');
  if (nextSlideTrigger.length) {
    nextSlideTrigger.forEach((button: Element) => {
      button.addEventListener('click', () => swiper.slideNext());
    });
  }
  if (prevSlideTrigger.length) {
    prevSlideTrigger.forEach((button: Element) => {
      button.addEventListener('click', () => swiper.slidePrev());
    });
  }
};
