// core version + navigation, pagination modules:
import Swiper, { Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Pagination]);

export const slider = ({
  selector,
  paginationSelector,
}: { selector: string; paginationSelector: string }) => new Swiper(selector, {
  pagination: {
    el: paginationSelector,
    clickable: true,
  },
});
